import { useState, useCallback, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../i18n/LanguageContext';
import { CONTACT_EMAIL } from '../../constants';
import type { JobSeekerFormData, FormErrors } from '../../types';
import Button from '../ui/Button';
import AnimatedSection from '../ui/AnimatedSection';
import Toast, { type ToastType } from '../ui/Toast';

const initialFormData: JobSeekerFormData = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  city: '',
  jobType: '',
  availability: '',
  message: '',
};

function validateForm(
  data: JobSeekerFormData,
  t: (key: string) => string,
): FormErrors {
  const errors: FormErrors = {};

  if (!data.firstName.trim()) errors.firstName = t('form.validation.required');
  if (!data.lastName.trim()) errors.lastName = t('form.validation.required');
  if (!data.email.trim()) {
    errors.email = t('form.validation.required');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = t('form.validation.invalidEmail');
  }
  if (!data.phone.trim()) {
    errors.phone = t('form.validation.required');
  } else if (!/^[+]?[\d\s()-]{7,}$/.test(data.phone)) {
    errors.phone = t('form.validation.invalidPhone');
  }
  if (!data.city.trim()) errors.city = t('form.validation.required');
  if (!data.jobType.trim()) errors.jobType = t('form.validation.required');

  return errors;
}

async function submitForm(data: JobSeekerFormData): Promise<void> {
  const subject = encodeURIComponent(`Nouvelle demande de ${data.firstName} ${data.lastName}`);
  const body = encodeURIComponent(
    [
      `Prénom: ${data.firstName}`,
      `Nom: ${data.lastName}`,
      `Téléphone: ${data.phone}`,
      `Email: ${data.email}`,
      `Ville: ${data.city}`,
      `Type de travail: ${data.jobType}`,
      `Disponibilité: ${data.availability}`,
      `Message: ${data.message}`,
    ].join('\n'),
  );
  window.open(`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`, '_self');
  await new Promise((resolve) => setTimeout(resolve, 800));
}

interface ToastState {
  message: string;
  type: ToastType;
}

export default function JobSeekerForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<JobSeekerFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);

  const showToast = useCallback((message: string, type: ToastType) => {
    setToast({ message, type });
  }, []);

  const dismissToast = useCallback(() => {
    setToast(null);
  }, []);

  const handleChange = (field: keyof JobSeekerFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
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
      await submitForm(formData);
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
        <div className="mx-auto max-w-lg py-16 text-center">
          <AnimatedSection animation="scale-in">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h2 className="mt-6 text-2xl font-bold text-primary-800">
              {t('form.success.title')}
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              {t('form.success.message')}
            </p>
            <Link to="/" className="mt-8 inline-block">
              <Button variant="secondary">{t('form.success.back')}</Button>
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
            label={t('form.firstName')}
            value={formData.firstName}
            onChange={(v) => handleChange('firstName', v)}
            placeholder={t('form.placeholders.firstName')}
            error={errors.firstName}
            required
          />
          <FormField
            label={t('form.lastName')}
            value={formData.lastName}
            onChange={(v) => handleChange('lastName', v)}
            placeholder={t('form.placeholders.lastName')}
            error={errors.lastName}
            required
          />
        </div>

        {/* Contact row */}
        <div className="grid gap-3 sm:grid-cols-2">
          <FormField
            label={t('form.phone')}
            type="tel"
            value={formData.phone}
            onChange={(v) => handleChange('phone', v)}
            placeholder={t('form.placeholders.phone')}
            error={errors.phone}
            required
          />
          <FormField
            label={t('form.email')}
            type="email"
            value={formData.email}
            onChange={(v) => handleChange('email', v)}
            placeholder={t('form.placeholders.email')}
            error={errors.email}
            required
          />
        </div>

        {/* Location & job type */}
        <div className="grid gap-3 sm:grid-cols-2">
          <FormField
            label={t('form.city')}
            value={formData.city}
            onChange={(v) => handleChange('city', v)}
            placeholder={t('form.placeholders.city')}
            error={errors.city}
            required
          />
          <FormField
            label={t('form.jobType')}
            value={formData.jobType}
            onChange={(v) => handleChange('jobType', v)}
            placeholder={t('form.placeholders.jobType')}
            error={errors.jobType}
            required
          />
        </div>

        {/* Availability + message */}
        <div className="grid gap-3 sm:grid-cols-2">
          <FormField
            label={t('form.availability')}
            value={formData.availability}
            onChange={(v) => handleChange('availability', v)}
            placeholder={t('form.placeholders.availability')}
          />
          <FormField
            label={t('form.message')}
            value={formData.message}
            onChange={(v) => handleChange('message', v)}
            placeholder={t('form.placeholders.message')}
          />
        </div>

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
                {t('form.submit')}
              </>
            )}
          </Button>
        </div>
      </form>
    </>
  );
}

/* ─── FormField sub-component ─── */

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
