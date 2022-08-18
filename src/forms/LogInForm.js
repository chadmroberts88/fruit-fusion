import { React, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserDataContext'
import { GameContext } from '../context/GameContext'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import styled from 'styled-components'
import * as yup from 'yup'

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

const LogInForm = () => {

	const { setLoggedIn, logIn } = useContext(UserDataContext);
	const { fetchGameData } = useContext(GameContext);
	const [passwordVisible, setPasswordVisible] = useState(false);
	const navigate = useNavigate();

	const schema = yup.object().shape({
		email: yup
			.string()
			.required("Please enter an email address"),
		password: yup
			.string()
			.required("Please enter a password.")
	});

	const { register, handleSubmit, setError, formState: { errors } } = useForm({
		resolver: yupResolver(schema),
		mode: "onSubmit"
	});

	const submitForm = (data) => {

		let usersList = JSON.parse(localStorage.getItem("UsersList"));

		if (usersList.hasOwnProperty(data.email) && usersList[data.email].password === data.password) {

			logIn(data.email);
			fetchGameData(data.email);
			setLoggedIn(true);
			navigate('/account');

		} else {
			setError("email", {
				type: "check",
				message: "Check email."
			})

			setError("password", {
				type: "check",
				message: "Check password."
			})
		}

	}

	return (
		<Form onSubmit={handleSubmit(submitForm)}>

			<div>
				<InputLabel
					text={'Email Address'}
				/>
				<EmailInput
					type={'email'}
					placeholder='Enter Email Address'
					bgColor={errors.email ? "#ffcccc" : "white"}
					{...register('email')}
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
					placeholder="Enter Password"
					bgColor={errors.password ? "#ffcccc" : "white"}
					{...register('password')}
				/>
				<InputError>
					{errors.password?.message}
				</InputError>
			</div>

			<SubmitInput
				value="Log In"
			/>

		</Form>
	)
}

export default LogInForm