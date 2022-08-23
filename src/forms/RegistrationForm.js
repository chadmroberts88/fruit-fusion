import { useContext, useState } from 'react';
import { UserDataContext } from '../context/UserDataContext';
import UserPool from '../UserPool';
import styled from 'styled-components';
import { EmailSchema, PasswordSchema, ConfirmSchema } from '../schema/RegistrationSchema';
import { GameContext } from '../context/GameContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import EmailInput from '../components/form/EmailInput'
import SubmitInput from '../components/form/SubmitInput'
import InputLabel from '../components/form/InputLabel'
import PasswordInput from '../components/form/PasswordInput'
import InputError from '../components/form/InputError'

const Form = styled.form`
	display: grid;
	row-gap: 10px;
	align-items: center;
	width: 100%;
`;

const RegistrationForm = () => {

	const { setLoggedIn } = useContext(UserDataContext);
	const { createGame, updateGamesListName } = useContext(GameContext);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [confirmError, setConfirmError] = useState('');

	const showErrorToast = (message) => {
		toast.error(message, {
			position: "bottom-center",
			autoClose: 6000,
			theme: 'colored',
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	}

	const submitForm = async (event) => {
		event.preventDefault();

		let emailValid = false;
		let passwordValid = false;
		let confirmValid = false;

		try {
			await EmailSchema.validate(email);
			emailValid = true;
			setEmailError('');
		} catch (error) {
			emailValid = false;
			setEmailError(error.message);
		}

		try {
			await PasswordSchema.validate(password);
			passwordValid = true;
			setPasswordError('');
		} catch (error) {
			passwordValid = false;
			setPasswordError(error.message);
		}

		try {
			await ConfirmSchema.validate(confirmPassword);
			confirmValid = true;
			setConfirmError('');

			if (password === confirmPassword) {
				confirmValid = true;
				setConfirmError('');
			} else {
				confirmValid = false;
				setConfirmError('Passwords do not match.');
			}

		} catch (error) {
			confirmValid = false;
			setConfirmError(error.message);
		}

		if (emailValid && passwordValid && confirmValid) {
			UserPool.signUp(email, password, [], null, (error, data) => {
				if (error) {
					switch (error.message) {
						case 'An account with the given email already exists.':
							showErrorToast('This email has already been registered.');
							break;
						default:
							showErrorToast('An unknown error has occurred.');
							break;
					}
				} else {
					console.log(data);
				}
			});
		}

	}

	return (
		<>
			<Form
				onSubmit={submitForm}
				noValidate={true}
			>

				<div>
					<InputLabel
						text={'Email Address'}
					/>
					<EmailInput
						placeholder={'Enter Email Address'}
						onChange={(event) => setEmail(event.target.value)}
					/>
					<InputError>
						{emailError}
					</InputError>
				</div>

				<div>
					<InputLabel
						text={'Password'}
					/>
					<PasswordInput
						placeholder={'Enter Password'}
						onChange={(event) => setPassword(event.target.value)}
					/>
					<InputError>
						{passwordError}
					</InputError>
				</div>

				<div>
					<InputLabel
						text={'Confirm Password'}
					/>
					<PasswordInput
						placeholder={'Re-enter Password'}
						onChange={(event) => setConfirmPassword(event.target.value)}
					/>
					<InputError>
						{confirmError}
					</InputError>
				</div>

				<SubmitInput
					value="Register"
				/>

			</Form>
			<ToastContainer style={{ textAlign: 'center' }} />
		</>
	)
}

export default RegistrationForm