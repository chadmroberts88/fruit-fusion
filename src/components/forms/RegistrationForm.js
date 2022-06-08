import { React, useContext, useState } from 'react'
import { UserDataContext } from '../../context/UserDataContext'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import styled from 'styled-components'
import * as yup from 'yup'

import CreateAccountModal from '../modals/CreateAccountModal'

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

    input[type=file]{
        color: ${props => props.fileInputTextColor};
        font-size: 2.5vmin;
        width: 30vmin;

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

const RegistrationForm = () => {

	const { userData, setUserData, loggedIn, setLoggedIn } = useContext(UserDataContext);
	const [createAccountModalOpen, setCreateAccountModalOpen] = useState(false);
	const [passwordVisible, setPasswordVisible] = useState(false);
	const navigate = useNavigate();

	const openModal = () => {
		setCreateAccountModalOpen(true);
	}

	const closeModal = () => {
		setCreateAccountModalOpen(false);
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
					return !users.hasOwnProperty(value) || value === userData.username;
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
			username: loggedIn ? userData.username : '',
			password: loggedIn ? userData.password : '',
			confirmPassword: loggedIn ? userData.password : ''
		}
	});

	const submitForm = (data) => {

		let users = localStorage.getItem("Users");
		users = users ? JSON.parse(users) : {};

		if (loggedIn) { // if logged in, update username and password

			if (data.username !== userData.username) { // if username changed, update
				users[userData.username].username = data.username;
				users[data.username] = users[userData.username];
				delete users[userData.username];
			}

			users[data.username].password = data.password; // update password

		} else { // if not logged in (i.e. new account), create user

			users[data.username] = {
				username: data.username,
				password: data.password,
				multiplier: 1,
				score: 0,
				best: 0,
				rank: 0,
				soundOn: true,
				darkModeOn: true,
				useSwipeOn: false,
			};

			let currentUser = { username: data.username };
			localStorage.setItem("CurrentUser", JSON.stringify(currentUser));

		}

		setUserData(users[data.username]);
		openModal();
	}

	return (
		<>
			<Form onSubmit={handleSubmit(submitForm)} fileInputTextColor={userData.darkModeOn ? "white" : "black"}>
				<input
					style={errors.photo ? { color: "#ff9494" } : null}
					type="file"
					accept="image/*"
					{...register('photo')}
				/>

				<h5>{errors.photo?.message}</h5>

				<input
					style={errors.username ? { backgroundColor: "#ffcccc" } : null}
					type="text"
					placeholder="Enter Username"
					{...register('username')}
				/>

				<h5>{errors.username?.message}</h5>

				<input
					style={errors.password ? { backgroundColor: "#ffcccc" } : null}
					type={passwordVisible ? "text" : "password"}
					placeholder="Enter Password"
					{...register('password')}
				/>

				<h5>{errors.password?.message}</h5>

				<input
					style={errors.confirmPassword ? { backgroundColor: "#ffcccc" } : null}
					type={passwordVisible ? "text" : "password"}
					placeholder="Confirm Password"
					{...register('confirmPassword')}
				/>

				<h5>{errors.confirmPassword?.message}</h5>

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
					name={loggedIn ? "updateAccount" : "createAccount"}
					value={loggedIn ? "Update Account" : "Create Account"}
				/>

			</Form>
			<CreateAccountModal modalOpen={createAccountModalOpen} closeModal={closeModal} />
		</>
	)
}

export default RegistrationForm