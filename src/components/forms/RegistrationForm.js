import { React, useContext, useState } from 'react'
import { UserDataContext } from '../../helper/Context'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import styled from 'styled-components'
import * as yup from 'yup'

import Modal from '../modal/Modal'

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

    input[type=file]{
        color: ${props => props.fileInputTextColor};
        font-size: 2.5vmin;
        width: 42%;

        ::-webkit-file-upload-button,
        ::file-selector-button {
            height: 4vmin;
            background-color: #a2a2a2;
            color: black;
            border: none;
            border-radius: 10px;
            font-size: 2vmin;
            font-weight: bold;
            cursor: pointer;
        }

        ::-webkit-file-upload-button:hover,
        ::file-selector-button:hover {
            background-color: lightgrey;
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

const RegistrationForm = () => {

	const { username, setUsername, password, setPassword, darkModeOn, loggedIn, setLoggedIn, initializeTiles } = useContext(UserDataContext);
	const [modalOpen, setModalOpen] = useState(false);
	const navigate = useNavigate();

	const openModal = () => {
		setModalOpen(true);
	}

	const closeModal = () => {
		setModalOpen(false);
		setLoggedIn(true);
		navigate('/account');
	}

	const schema = yup.object().shape({
		photo: yup
			.mixed()
			.test("fileSize", "Files should be less than 2MB.", (value) => {

				if (value.length === 0) {
					return true
				} else {
					return value[0].size <= 2000000
				}

			})
			.test("fileType", "Files must be of type .png, .jpg, .jpeg, .gif, or .svg.", (value) => {
				if (value.length === 0) {
					return true
				} else {
					return ["image/png", "image/jpg", "image/jpeg", "image/gif", "image/svg"].includes(value[0].type)
				}
			}),
		username: yup
			.string("Please enter a username.")
			.required("Please enter a username.")
			.min(5, "Usernames must be at least 5 characters long.")
			.max(20, "Usernames must be less than 20 characters long.")
			.matches(/^[A-Za-z0-9_-]*$/, "Please include only letters, numbers, - and _.")
			.test("userExists", "This user already exists. Please chose a different username.", (value) => {
				let users = localStorage.getItem("Users");
				users = users ? JSON.parse(users) : {};
				if (loggedIn) {
					return !users.hasOwnProperty(value) || value === username;
				} else {
					return !users.hasOwnProperty(value);
				}
			}),
		password: yup
			.string("Please enter a password.")
			.required("Please enter a password.")
			.min(8, "Passwords must be at least 8 characters long.")
			.max(20, "Passwords must be less than 20 characters long.")
			.matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*#?&])/, "Please include an uppercase, lowercase, number, and one of: @ $ ! % * # ? &."),
		confirmPassword: yup
			.string("Please confirm your password.")
			.required("Please confirm your password.")
			.oneOf([yup.ref('password'), null], "Passwords must match.")
	});

	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(schema),
		mode: "onTouched",
		defaultValues: {
			username: loggedIn ? username : '',
			password: loggedIn ? password : '',
			confirmPassword: loggedIn ? password : ''
		}
	});

	const submitForm = (data) => {

		const dataTemplate = {
			password: null,
			tiles: initializeTiles(),
			tileIds: 0,
			multiplier: 1,
			score: 0,
			best: 0,
			soundOn: true,
			darkModeOn: true,
			useSwipeOn: false,
			newGame: false,
			gameInProgress: false
		};

		let users = localStorage.getItem("Users");
		users = users ? JSON.parse(users) : {};

		if (loggedIn) {
			if (data.username !== username) {
				users[data.username] = users[username];
				delete users[username];
			}
			users[data.username].password = data.password;
		} else {
			users[data.username] = dataTemplate;
			users[data.username].password = data.password;
		}

		localStorage.setItem("Users", JSON.stringify(users));

		setUsername(data.username);
		setPassword(data.password);
		openModal();
	}

	return (
		<>
			<Form onSubmit={handleSubmit(submitForm)} fileInputTextColor={darkModeOn ? "white" : "black"}>
				<input
					style={errors.photo ? { color: "#ff9494" } : null}
					type="file"
					name="photo"
					accept="image/*"
					{...register('photo')}
				/>

				<h5>{errors.photo?.message}</h5>

				<input
					style={errors.username ? { backgroundColor: "#ffcccc" } : null}
					type="text"
					name="username"
					placeholder="Enter Username"
					{...register('username')}
				/>

				<h5>{errors.username?.message}</h5>

				<input
					style={errors.password ? { backgroundColor: "#ffcccc" } : null}
					type="text"
					name="password"
					placeholder="Enter Password"
					{...register('password')}
				/>

				<h5>{errors.password?.message}</h5>

				<input
					style={errors.confirmPassword ? { backgroundColor: "#ffcccc" } : null}
					type="text"
					name="confirmPassword"
					placeholder="Confirm Password"
					{...register('confirmPassword')}
				/>

				<h5>{errors.confirmPassword?.message}</h5>

				<input
					type="submit"
					name={loggedIn ? "updateAccount" : "createAccount"}
					value={loggedIn ? "Update" : "Create"}
				/>

			</Form>
			<Modal headerText={loggedIn ? "Update Successful" : "Account Created"} modalOpen={modalOpen} closeModal={closeModal}>
				<p>Your account has been sucessfully {loggedIn ? "updated" : "created"}.</p>
			</Modal>
		</>
	)
}

export default RegistrationForm