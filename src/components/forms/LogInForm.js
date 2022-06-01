import { React, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../../helper/Context'
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

    input[type=text] {
        height: 5vmin;
        width: 50%;
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
            outline: 2px solid #d35b40;
        }
    }

    input[type=submit]{
        height: 6vmin;
        width: 26vmin;
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

const OptionsSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
	margin-bottom: 2vmin;
`;

const LogInForm = () => {

	const {
		setUsername,
		setPassword,
		setTiles,
		setTileIds,
		setMultiplier,
		setScore,
		setBest,
		setSoundOn,
		setDarkModeOn,
		setUseSwipeOn,
		setGameInProgress,
		setNewGame,
		setLoggedIn
	} = useContext(UserDataContext);

	const navigate = useNavigate();

	const schema = yup.object().shape({
		username: yup
			.string()
			.required("Please enter a username.")
			.test("userExists", "This user does not exist.", (value) => {
				let users = localStorage.getItem("Users");
				users = users ? JSON.parse(users) : {};
				return users.hasOwnProperty(value);
			}),
		password: yup
			.string()
			.required("Please enter a password.")
			.test("passwordCorrect", "Incorrect password.", (value, ctx) => {
				let users = JSON.parse(localStorage.getItem("Users"));
				if (users[ctx.parent.username]) {
					return value === users[ctx.parent.username].password;
				} else {
					return false;
				}
			}),
	});

	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(schema),
		mode: "onSubmit"
	});

	const submitForm = (data) => {

		let users = JSON.parse(localStorage.getItem("Users"));

		setLoggedIn(true);
		setUsername(data.username);
		setPassword(users[data.username].password);
		setTiles(users[data.username].tiles);
		setTileIds(users[data.username].tileIds);
		setMultiplier(users[data.username].multiplier);
		setScore(users[data.username].score);
		setBest(users[data.username].best);
		setSoundOn(users[data.username].soundOn);
		setDarkModeOn(users[data.username].darkModeOn);
		setUseSwipeOn(users[data.username].useSwipeOn);
		setGameInProgress(users[data.username].gameInProgress);
		setNewGame(users[data.username].setNewGame);
		navigate('/account');

	}

	return (
		<Form onSubmit={handleSubmit(submitForm)}>

			<input
				style={errors.username ? { backgroundColor: "#ffcccc" } : null}
				type="text"
				name="username"
				placeholder="Username"
				{...register('username')}
			/>
			<h5>{errors.username?.message}</h5>

			<input
				style={errors.password ? { backgroundColor: "#ffcccc" } : null}
				type="text"
				name="password"
				placeholder="Password"
				{...register('password')}
			/>

			<h5>{errors.password?.message}</h5>

			<OptionsSection>
				<Option text={"Create Account"} handleClick={() => { navigate('/create-account') }} />
			</OptionsSection>
			<input
				type="submit"
				name="logIn"
				value="Log In"
			/>

		</Form>
	)
}

export default LogInForm