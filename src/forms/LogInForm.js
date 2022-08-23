import { useState, useContext } from 'react';
import { UserDataContext } from '../context/UserDataContext';
import { GameContext } from '../context/GameContext';
import { AuthContext } from '../context/AuthContext';
import styled from 'styled-components';
import { EmailSchema, PasswordSchema } from '../schema/LoginSchema';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import EmailInput from '../components/form/EmailInput'
import SubmitInput from '../components/form/SubmitInput'
import InputLabel from '../components/form/InputLabel'
import PasswordInput from '../components/form/PasswordInput'
import InputError from '../components/form/InputError'
import { useNavigate } from 'react-router-dom';

const Form = styled.form`
	display: grid;
	row-gap: 10px;
	align-items: center;
	width: 100%;
`;

const LogInForm = () => {

	const { setLoggedIn, logIn } = useContext(UserDataContext);
	const { fetchGameData } = useContext(GameContext);
	const { authenticate } = useContext(AuthContext);
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');

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
	};

	const submitForm = async (event) => {
		event.preventDefault();

		let emailValid = false;
		let passwordValid = false;

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

		if (emailValid && passwordValid) {
			authenticate(email, password)
				.then((data) => {
					console.log(data);
					navigate('/game');
				})
				.catch((error) => {
					console.log(error)
					showErrorToast('Failed to log in. Please check your email and password.');
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

				<SubmitInput
					value="Log In"
				/>

			</Form>
			<ToastContainer style={{ textAlign: 'center' }} />
		</>
	)
}

export default LogInForm