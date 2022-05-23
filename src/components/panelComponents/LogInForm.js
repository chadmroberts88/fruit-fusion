import { React } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Option from './Option'

const Form = styled.form`
    display: grid;
    row-gap: 3vmin;
    align-items: center;
    width: 60%;

    input[type=text] {
        height: 6vmin;
        width: 100%;
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
        height: 7vmin;
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

    span {
        height: 3vmin;
        overflow: hidden;
        text-align: center;
    }

`;

const schema = yup.object().shape({
	username: yup
		.string()
		.matches(/^[A-Za-z0-9_-]{5,}$/)
		.required(),
	password: yup
		.string()
		.matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*#?&])(?=.{8,})/)
		.required()
});

const UpdateAccountForm = () => {

	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(schema),
		mode: "onTouched"
	});

	const submitForm = (data) => {
		console.log(data);
		console.log(JSON.stringify(data));
	}

	const navigate = useNavigate();

	const naviagteToCreateAccount = () => {
		navigate('/create-account')
	}

	return (
		<Form onSubmit={handleSubmit(submitForm)}>

			<input
				style={errors.username ? { backgroundColor: "#ff9494" } : null}
				type="text"
				name="username"
				placeholder="Username"
				{...register('username')}
			/>

			<input
				style={errors.password ? { backgroundColor: "#ff9494" } : null}
				type="text"
				name="password"
				placeholder="Password"
				{...register('password')}
			/>

			<Option text={"Create Account"} handleClick={naviagteToCreateAccount} />

			{errors.username || errors.password ? <span style={{ color: "red" }}>Check username and password!</span> : <span>{''}</span>}

			<input
				type="submit"
				name="logIn"
				value="Log In"
			/>

		</Form>
	)
}

export default UpdateAccountForm