import { React, useContext, useState } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Option from './Option'
import Modal from '../modal/Modal'
import { UIContext } from '../../helper/Context'

const Form = styled.form`
    display: grid;
    grid-template-columns: 50% 50%;
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

    input[type=file]{
        color: ${props => props.fontcolor};
        font-size: 2.5vmin;
        width: 100%;

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
        grid-column: 1 / span 2;
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
        grid-column: 1 / span 2;
        height: 3vmin;
        overflow: hidden;
        text-align: center;
    }

`;

const OptionsSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-column: 1 / span 2;
`;

const ModalContent = styled.div`
    border: 1px solid #a2a2a2;
    border-radius: 10px;
    padding: 2vmin;
    overflow: hidden scroll;
`;

const schema = yup.object().shape({
	photo: yup
		.mixed()
		.test("fileSize", (value) => {

			if (value.length === 0) {
				return true
			} else {
				return value[0].size <= 2000000
			}

		})
		.test("fileType", (value) => {
			if (value.length === 0) {
				return true
			} else {
				return ["image/png", "image/jpg", "image/jpeg", "image/gif", "image/svg"].includes(value[0].type)
			}
		}),
	username: yup
		.string()
		.matches(/^[A-Za-z0-9_-]{5,}$/)
		.required(),
	password: yup
		.string()
		.matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*#?&])(?=.{8,})/)
		.required(),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], "Passwords must match.")
		.required()
});

const CreateAccountForm = () => {

	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(schema),
		mode: "onTouched"
	});

	const submitForm = (data) => {
		console.log(data);

	}

	const { darkModeOn } = useContext(UIContext);

	const [modalOpen, setModalOpen] = useState(false);

	const openModal = () => {
		setModalOpen(true);
	}

	const closeModal = () => {
		setModalOpen(false);
	}


	return (
		<>
			<Form onSubmit={handleSubmit(submitForm)}>
				<label htmlFor="photo">Photo:</label>
				<input
					style={errors.photo ? { color: "#ff9494" } : null}
					fontcolor={darkModeOn ? "white" : "black"}
					type="file"
					name="photo"
					accept="image/*"
					{...register('photo')}
				/>

				<label htmlFor="username">Username:</label>
				<input
					style={errors.username ? { backgroundColor: "#ff9494" } : null}
					type="text"
					name="username"
					placeholder="Username"
					{...register('username')}
				/>

				<label htmlFor="password">Password:</label>
				<input
					style={errors.password ? { backgroundColor: "#ff9494" } : null}
					type="text"
					name="password"
					placeholder="xxxxxxxxxxxx"
					{...register('password')}
				/>


				<label htmlFor="confirmPassword">Confirm:</label>
				<input
					style={errors.confirmPassword ? { backgroundColor: "#ff9494" } : null}
					type="text"
					name="confirmPassword"
					placeholder="xxxxxxxxxxxx"
					{...register('confirmPassword')}
				/>

				<OptionsSection>
					<Option text={"Account Requirements"} handleClick={openModal} />
				</OptionsSection>

				{errors.photo || errors.username || errors.password || errors.confirmPassword ? <span style={{ color: "red" }}>Check account requirements!</span> : <span>{''}</span>}

				<input
					type="submit"
					name="createAccount"
					value="Create Account"
				/>

			</Form>
			<Modal headerText={"Account Requirements"} modalOpen={modalOpen} closeModal={closeModal}>
				<ModalContent>
					<p>Files must be of type .png, .jpg, .jpeg, .gif, or .svg, and should be less than 2 MB. A photo is not required.</p>
					<p>Usernames must be at least 5 characters and can only contain uppercase and lowercase letters, numbers, dashes, and underscores.</p>
					<p>Passwords must be at least 8 characters and should contain at least one uppercase and lowercase letter, one number, and one of the following special characters: {`@ $ ! % * # ? &`}.</p>
					<p>Please ensure your passwords match.</p>
				</ModalContent>
			</Modal>
		</>
	)
}

export default CreateAccountForm