import * as yup from 'yup';

const userSchema = yup.object().shape({
  name: yup.string().required('Name cannot be empty'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email cannot be empty'),
  phone: yup.string().matches(/(\d| |\+|-|\(|\)|\.)/, {
    excludeEmptyString: true,
    message: 'Invalid phone format',
  }),
});
export { userSchema };
