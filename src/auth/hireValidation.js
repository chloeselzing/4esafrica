
import * as Yup from 'yup';

export const hire = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  organization: Yup.string().required('Name of Organization is required'),
  stack: Yup.string().required('Stack Required is required'),
  type: Yup.string().required('Type of Hire is required'),
});
