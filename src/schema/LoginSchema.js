import * as yup from 'yup';

export const EmailSchema = yup
	.string()
	.email('Please enter a valid email address.')
	.required('Please enter an email address.');

export const PasswordSchema = yup
	.string()
	.required('Please enter a password.');