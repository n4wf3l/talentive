export interface JobSeekerFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  city: string;
  jobType: string;
  availability: string;
  message: string;
}

export interface FormErrors {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  city?: string;
  jobType?: string;
}
