import React, { useContext, useEffect, useState } from 'react'
import { UserDataContext } from '../context/UserDataContext'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import UserPool from '../UserPool'
import styled from 'styled-components'
import * as yup from 'yup'

import CreateAccountModal from '../modals/CreateAccountModal'
import { GameContext } from '../context/GameContext'

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

	const { userData, loggedIn, setLoggedIn, createUser, updateUserData, updateEmail } = useContext(UserDataContext);
	const { createGame, updateGamesListName } = useContext(GameContext);
	const [createAccountModalOpen, setCreateAccountModalOpen] = useState(false);
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPass, setConfirmPass] = useState('');

	const navigate = useNavigate();

	const closeCreateAccountModal = () => {
		setCreateAccountModalOpen(false);
		setLoggedIn(true);
		navigate('/account');
	}

	const schema = yup.object().shape({
		email: yup
			.string()
			.email()
			.required(),
		password: yup
			.string()
			.required()
			.min(8)
			.max(20)
			.matches(),
		confirmPassword: yup
			.string()
			.required()
			.oneOf([yup.ref('password'), null], "Passwords must match.")
	});

	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(schema),
		mode: 'onChange'
	});

	const submitForm = (event) => {
		event.preventDefault();

		if (password === confirmPass) {
			UserPool.signUp(email, password, [], null, (err, data) => {
				if (err) {
					console.log(err);
				} else {
					console.log(data);
				}
			})
		} else {
			console.log("Passwords do not match!");
		}

	}

	return (
		<>
			<Form onSubmit={submitForm}>

				<div>
					<InputLabel
						text={'Email Address'}
					/>
					<EmailInput
						type={'Email'}
						placeholder={'Enter Email Address'}
						bgColor={errors.email ? "#ffcccc" : "white"}
						onChange={(event) => setEmail(event.target.value)}
					/>
					<InputError>
						{errors.email?.message}
					</InputError>
				</div>

				<div>
					<InputLabel
						text={'Password'}
					/>
					<PasswordInput
						type={passwordVisible ? "text" : "password"}
						placeholder={'Enter Password'}
						bgColor={errors.password ? "#ffcccc" : "white"}
						onChange={(event) => setPassword(event.target.value)}
					/>
					<InputError>
						{errors.password?.message}
					</InputError>
				</div>

				<div>
					<InputLabel
						text={'Confirm Password'}
					/>
					<PasswordInput
						type={passwordVisible ? "text" : "password"}
						placeholder={'Re-enter Password'}
						bgColor={errors.password ? "#ffcccc" : "white"}
						onChange={(event) => setConfirmPass(event.target.value)}
					/>
					<InputError>
						{errors.confirmPassword?.message}
					</InputError>
				</div>

				<SubmitInput
					value="Register"
				/>

			</Form>
			<CreateAccountModal modalOpen={createAccountModalOpen} handleClose={closeCreateAccountModal} />
		</>
	)
}

export default RegistrationForm