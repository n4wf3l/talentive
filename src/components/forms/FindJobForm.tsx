import { useState, useCallback, useRef, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../i18n/LanguageContext';
import { CONTACT_EMAIL } from '../../constants';
import Button from '../ui/Button';
import AnimatedSection from '../ui/AnimatedSection';
import Toast, { type ToastType } from '../ui/Toast';

interface FindJobFormData {
  firstName: string;
  lastName: string;
  desiredRole: string;
  availability: string;
  message: string;
}

const initialFormData: FindJobFormData = {
  firstName: '',
  lastName: '',
  desiredRole: '',
  availability: '',
  message: '',
};

interface FindJobFormErrors {
  firstName?: string;
  lastName?: string;
  desiredRole?: string;
  availability?: string;
}

function validateForm(
  data: FindJobFormData,
  t: (key: string) => string,
): FindJobFormErrors {
  const errors: FindJobFormErrors = {};

  if (!data.firstName.trim()) errors.firstName = t('form.validation.required');
  if (!data.lastName.trim()) errors.lastName = t('form.validation.required');
  if (!data.desiredRole.trim()) errors.desiredRole = t('form.validation.required');
  if (!data.availability.trim()) errors.availability = t('form.validation.required');

  return errors;
}

const MAX_CVS = 3;

async function submitForm(
  data: FindJobFormData,
  cvNames: string[],
  t: (key: string) => string,
): Promise<void> {
  const subject = encodeURIComponent(
    `Candidature : ${data.firstName} ${data.lastName}${data.desiredRole ? ` (${data.desiredRole})` : ''}`,
  );
  const lines = [
    `${t('findJob.firstName')}: ${data.firstName}`,
    `${t('findJob.lastName')}: ${data.lastName}`,
    `${t('findJob.desiredRole')}: ${data.desiredRole}`,
    `${t('findJob.availability')}: ${data.availability}`,
    `${t('findJob.message')}: ${data.message}`,
    '',
    cvNames.length > 0
      ? `📎 ${t('findJob.cv')}: ${cvNames.join(', ')}. ${t('findJob.cvReminder')}`
      : `📎 ${t('findJob.cvReminder')}`,
  ];
  const body = encodeURIComponent(lines.join('\n'));
  window.open(`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`, '_self');
  await new Promise((resolve) => setTimeout(resolve, 800));
}

interface ToastState {
  message: string;
  type: ToastType;
}

export default function FindJobForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FindJobFormData>(initialFormData);
  const [errors, setErrors] = useState<FindJobFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);
  const [cvs, setCvs] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const showToast = useCallback((message: string, type: ToastType) => {
    setToast({ message, type });
  }, []);

  const dismissToast = useCallback(() => {
    setToast(null);
  }, []);

  const handleChange = (field: keyof FindJobFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FindJobFormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const incoming = Array.from(e.target.files ?? []);
    if (incoming.length === 0) return;

    setCvs((prev) => {
      const remaining = MAX_CVS - prev.length;
      if (remaining <= 0) {
        showToast(t('findJob.cvLimitReached'), 'error');
        return prev;
      }
      const truncated = incoming.slice(0, remaining);
      if (incoming.length > remaining) {
        showToast(t('findJob.cvLimitReached'), 'error');
      }
      return [...prev, ...truncated];
    });

    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const removeFile = (index: number) => {
    setCvs((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm(formData, t);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      showToast(t('form.toast.validationError'), 'error');
      return;
    }

    setIsSubmitting(true);
    try {
      await submitForm(formData, cvs.map((f) => f.name), t);
      showToast(t('form.toast.successMessage'), 'success');
      setIsSubmitted(true);
    } catch {
      showToast(t('form.toast.errorMessage'), 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <>
        {toast && (
          <Toast message={toast.message} type={toast.type} onClose={dismissToast} />
        )}
        <div className="mx-auto max-w-lg py-10 text-center">
          <AnimatedSection animation="scale-in">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h2 className="mt-6 text-2xl font-bold text-primary-800">
              {t('findJob.success.title')}
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              {t('findJob.success.message')}
            </p>
            <Link to="/" className="mt-8 inline-block">
              <Button variant="secondary">{t('findJob.success.back')}</Button>
            </Link>
          </AnimatedSection>
        </div>
      </>
    );
  }

  return (
    <>
      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={dismissToast} />
      )}
      <form onSubmit={handleSubmit} noValidate className="space-y-3">
        {/* Name row */}
        <div className="grid gap-3 sm:grid-cols-2">
          <FormField
            label={t('findJob.firstName')}
            value={formData.firstName}
            onChange={(v) => handleChange('firstName', v)}
            placeholder={t('findJob.placeholders.firstName')}
            error={errors.firstName}
            required
          />
          <FormField
            label={t('findJob.lastName')}
            value={formData.lastName}
            onChange={(v) => handleChange('lastName', v)}
            placeholder={t('findJob.placeholders.lastName')}
            error={errors.lastName}
            required
          />
        </div>

        {/* Desired role */}
        <FormField
          label={t('findJob.desiredRole')}
          value={formData.desiredRole}
          onChange={(v) => handleChange('desiredRole', v)}
          placeholder={t('findJob.placeholders.desiredRole')}
          error={errors.desiredRole}
          required
        />

        {/* Availability */}
        <AvailabilityPicker
          label={t('findJob.availability')}
          value={formData.availability}
          onChange={(v) => handleChange('availability', v)}
          error={errors.availability}
          options={[
            { key: 'now', label: t('findJob.availabilityOptions.now'), icon: <BoltIcon /> },
            { key: 'week', label: t('findJob.availabilityOptions.week'), icon: <SunIcon /> },
            { key: 'month', label: t('findJob.availabilityOptions.month'), icon: <CalendarIcon /> },
            { key: 'later', label: t('findJob.availabilityOptions.later'), icon: <HorizonIcon /> },
          ]}
        />

        {/* CV upload */}
        <div>
          <label className="mb-1 block text-xs font-semibold text-gray-700">
            {t('findJob.cv')}
            <span className="ml-2 font-normal text-gray-400">({t('findJob.cvHint')})</span>
          </label>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={cvs.length >= MAX_CVS}
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-sm font-medium text-gray-700 transition-all hover:border-accent-400 hover:bg-accent-50/50 hover:text-primary-800 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-gray-200 disabled:hover:bg-white disabled:hover:text-gray-700"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
              </svg>
              {t('findJob.cvSelect')}
              <span className="text-xs font-normal text-gray-400">
                {cvs.length}/{MAX_CVS}
              </span>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={handleFileChange}
              className="hidden"
            />
            {cvs.length === 0 && (
              <span className="text-xs text-gray-400">{t('findJob.cvNoFile')}</span>
            )}
            {cvs.map((file, index) => (
              <span
                key={`${file.name}-${index}`}
                className="inline-flex items-center gap-2 rounded-lg bg-accent-50 px-3 py-1.5 text-xs font-medium text-primary-800"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                <span className="max-w-[180px] truncate">{file.name}</span>
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="text-gray-400 transition-colors hover:text-red-500"
                  aria-label="Remove file"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </span>
            ))}
          </div>
          <p className="mt-1.5 text-xs text-amber-600">
            {t('findJob.cvReminder')}
          </p>
        </div>

        {/* Message */}
        <FormField
          label={t('findJob.message')}
          value={formData.message}
          onChange={(v) => handleChange('message', v)}
          placeholder={t('findJob.placeholders.message')}
          multiline
        />

        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            className="w-full sm:w-auto"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                ...
              </span>
            ) : (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                {t('findJob.submit')}
              </>
            )}
          </Button>
        </div>
      </form>
    </>
  );
}

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  type?: string;
  required?: boolean;
  multiline?: boolean;
}

function FormField({
  label,
  value,
  onChange,
  placeholder,
  error,
  type = 'text',
  required,
  multiline,
}: FormFieldProps) {
  const baseClasses =
    'w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all duration-300 focus:border-accent-500 focus:ring-4 focus:ring-accent-500/10';
  const errorClasses = error
    ? 'border-red-300 focus:border-red-500 focus:ring-red-500/10'
    : 'border-gray-200 hover:border-gray-300';

  return (
    <div>
      <label className="mb-1 block text-xs font-semibold text-gray-700">
        {label}
        {required && <span className="ml-0.5 text-red-400">*</span>}
      </label>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={2}
          className={`${baseClasses} ${errorClasses} resize-none`}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`${baseClasses} ${errorClasses}`}
        />
      )}
      {error && (
        <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

/* ─── Availability picker ─── */

interface AvailabilityOption {
  key: string;
  label: string;
  icon: React.ReactNode;
}

interface AvailabilityPickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  options: AvailabilityOption[];
}

function AvailabilityPicker({
  label,
  value,
  onChange,
  error,
  options,
}: AvailabilityPickerProps) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-gray-700">
        {label}
        <span className="ml-0.5 text-red-400">*</span>
      </label>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {options.map((option) => {
          const selected = value === option.label;
          return (
            <button
              key={option.key}
              type="button"
              onClick={() => onChange(option.label)}
              aria-pressed={selected}
              className={`group relative flex flex-col items-center justify-center gap-1.5 rounded-xl border-2 px-2 py-3 text-center transition-all duration-200 ${
                selected
                  ? 'border-accent-500 bg-accent-50/70 shadow-sm shadow-accent-500/10'
                  : 'border-gray-200 bg-white hover:border-accent-300 hover:bg-accent-50/30'
              }`}
            >
              {/* Selected check */}
              {selected && (
                <span className="absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent-500 text-white">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
              )}
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-200 ${
                  selected
                    ? 'bg-accent-500 text-white'
                    : 'bg-gray-100 text-gray-500 group-hover:bg-accent-100 group-hover:text-accent-600'
                }`}
              >
                {option.icon}
              </span>
              <span
                className={`text-[11px] font-semibold leading-tight transition-colors duration-200 sm:text-xs ${
                  selected ? 'text-primary-800' : 'text-gray-600 group-hover:text-primary-800'
                }`}
              >
                {option.label}
              </span>
            </button>
          );
        })}
      </div>
      {error && (
        <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

/* ─── Availability icons ─── */

function BoltIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="5" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="2" y1="12" x2="5" y2="12" />
      <line x1="19" y1="12" x2="22" y2="12" />
      <line x1="4.93" y1="4.93" x2="7.05" y2="7.05" />
      <line x1="16.95" y1="16.95" x2="19.07" y2="19.07" />
      <line x1="4.93" y1="19.07" x2="7.05" y2="16.95" />
      <line x1="16.95" y1="7.05" x2="19.07" y2="4.93" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function HorizonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
