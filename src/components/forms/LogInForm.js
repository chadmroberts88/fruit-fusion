import { React, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../../context/UserDataContext'
import { GameContext } from '../../context/GameContext'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import styled from 'styled-components'
import * as yup from 'yup'

import Option from '../panel/Option'


const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
	justify-items: center;
    width: 90%;

    input[type=text], input[type=password] {
        height: 5vmin;
        width: 34vmin;
        border: 2px solid #a2a2a2;
        color: black;
        font-family: 'Arimo', sans-serif;
        font-size: 2.5vmin;
        border-radius: 10px;
        text-align: center;

        ::placeholder {
            color: #a2a2a2;
            font-family: 'Arimo', sans-serif;
            font-size: 2.5vmin;
        }

        :focus {
            border-color: #d35b40;
			outline: none;

        }
    }

    input[type=submit]{
        height: 6vmin;
        width: 34vmin;
        justify-self: center;
        background-color: #d35b40;
        color: white;
        border: none;
        border-radius: 10px;
        font-size: 3vmin;
        font-weight: bold;
        margin-top: 1vmin;
        cursor: pointer;

        :hover {
            background-color: #e86a4e;
        }
    }

`;

const CheckboxSection = styled.div`
	display: flex;
	align-items: center;
	margin: 1vmin;

	input[type=checkbox] {
		height: 2.5vmin;
		width: 2.5vmin;
		margin-right: 1vmin;
	}
`;

const OptionsSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
	margin-top: 2vmin;
`;

const LogInForm = () => {

	const { setLoggedIn, logIn } = useContext(UserDataContext);
	const { fetchGameData } = useContext(GameContext);
	const [passwordVisible, setPasswordVisible] = useState(false);
	const navigate = useNavigate();

	const schema = yup.object().shape({
		username: yup
			.string()
			.required("Please enter a username."),
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

		if (usersList.hasOwnProperty(data.username) && usersList[data.username].password === data.password) {

			logIn(data.username);
			fetchGameData(data.username);
			setLoggedIn(true);
			navigate('/account');

		} else {
			setError("username", {
				type: "check",
				message: "Check username."
			})

			setError("password", {
				type: "check",
				message: "Check password."
			})
		}

	}

	return (
		<Form onSubmit={handleSubmit(submitForm)}>

			<input
				style={errors.username ? { backgroundColor: "#ffcccc" } : null}
				type="text"
				placeholder="Username"
				{...register('username')}
			/>
			<h5>{errors.username?.message}</h5>

			<input
				style={errors.password ? { backgroundColor: "#ffcccc" } : null}
				type={passwordVisible ? "text" : "password"}
				placeholder="Password"
				{...register('password')}
			/>

			<h5>{errors.password?.message}</h5>

			<CheckboxSection>
				<input
					type="checkbox"
					checked={passwordVisible}
					onChange={(event) => { setPasswordVisible(event.currentTarget.checked) }}
				/>
				<span style={{ margin: '0.25vmin 0 0', fontSize: '2.5vmin' }}>Show Password</span>
			</CheckboxSection>

			<input
				type="submit"
				value="Log In"
			/>

			<OptionsSection>
				<Option text={"Create Account"} handleClick={() => { navigate('/create-account') }} />
			</OptionsSection>

		</Form>
	)
}

export default LogInForm