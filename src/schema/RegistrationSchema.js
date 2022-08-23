import * as yup from 'yup';

export const EmailSchema = yup
	.string()
	.email('Please enter a valid email address.')
	.required('Please enter an email address.');

export const PasswordSchema = yup
	.string()
	.required('Please enter a password.')
	.min(8, 'Passwords should be at least 8 characters long.')
	.matches(/^(?=.*[a-z])/, "Passwords should contain at least 1 lowercase.")
	.matches(/^(?=.*[A-Z])/, "Passwords should contain at least 1 uppercase.")
	.matches(/^(?=.*[0-9])/, "Passwords should contain at least 1 number.")
	.matches(/^(?=.*\W)/, "Passwords should contain at least 1 special character.");

export const ConfirmSchema = yup
	.string()
	.required('Please confirm your password.');