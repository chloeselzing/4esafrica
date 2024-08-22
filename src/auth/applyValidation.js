
import * as Yup from 'yup';

export const applyValidation = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  purpose: Yup.string().required('Purpose is required'),
  message: Yup.string().required('Message is required'),
});
