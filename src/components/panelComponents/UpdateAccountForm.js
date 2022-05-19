import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Option from './Option'

const Form = styled.form`
    display: grid;
    grid-template-columns: 50% 50%;
    row-gap: 2vmin;
    align-items: center;
    width: 60vmin;
    margin: 2vmin;

    input[type=text] {
        height: 5vmin;
        width: 100%;
        padding: 2vmin;
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
        color: white;
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
        cursor: pointer;

        :hover {
            background-color: #e86a4e;
        }
    }

    span {
        grid-column: 1 / span 2;
        border-radius: 10px;
        height: 15vmin;
        padding: 2vmin;
        overflow: hidden scroll;
        text-align: center;
    }

`;

const schema = yup.object().shape({
    photo: yup
        .mixed()
        .test("fileSize", "File size should be less than 2 MB.", (value) => {

            if (value.length === 0) {
                return true
            } else {
                return value[0].size <= 2000000
            }

        })
        .test("fileType", "File must be of type .png, .jpg, .jpeg, .gif, or .svg.", (value) => {
            if (value.length === 0) {
                return true
            } else {
                return ["image/png", "image/jpg", "image/jpeg", "image/gif", "image/svg"].includes(value[0].type)
            }
        }),
    username: yup
        .string()
        .matches(
            /^[A-Za-z0-9_-]{5,}$/,
            "Usernames must be at least 5 characters and can only contain uppercase and lowercase letters, numbers, dashes, and underscores."
        )
        .required("Please enter a username."),
    password: yup
        .string()
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Passwords must be at least 8 characters and contain at least one uppercase and lowercase letter, one number, and one special character (@ $ ! % * # ? &)."
        ),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], "Passwords must match.")
        .required("Please confirm password.")
});

const UpdateAccountForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const submitForm = (data) => {
        console.log(data);
        console.log(JSON.stringify(data));
    }

    return (
        <Form onSubmit={handleSubmit(submitForm)}>
            <label htmlFor="photo">Photo:</label>
            <input
                type="file"
                name="photo"
                accept="image/*"
                {...register('photo')}
            />

            <label htmlFor="username">Username:</label>
            <input
                type="text"
                name="username"
                placeholder="Username"
                {...register('username')}
            />

            <label htmlFor="username">Password:</label>
            <input
                type="text"
                name="password"
                placeholder="xxxxxxxxxxxx"
                {...register('password')}
            />


            <label htmlFor="username">Confirm:</label>
            <input
                type="text"
                name="confirmPassword"
                placeholder="xxxxxxxxxxxx"
                {...register('confirmPassword')}
            />

            {/* <span>
                <p>{errors.photo?.message}</p>
                <p>{errors.username?.message}</p>
                <p >{errors.password?.message}</p >
                <p >{errors.confirmPassword?.message}</p>
            </span> */}

            <Option text={"Requirements"} />

            <input
                type="submit"
                name="update"
                value="Update"
            />

        </Form>
    )
}

export default UpdateAccountForm