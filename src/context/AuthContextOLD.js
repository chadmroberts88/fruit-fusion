import { createContext, useState } from "react";
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import UserPool from '../UserPool';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

	const [loggedIn, setLoggedIn] = useState(false);

	const authenticate = async (email, password) => {
		return await new Promise((resolve, reject) => {
			const user = new CognitoUser({
				Username: email,
				Pool: UserPool
			});

			const authDetails = new AuthenticationDetails({
				Username: email,
				Password: password
			});

			user.authenticateUser(authDetails, {
				onSuccess: (data) => {
					resolve(data);
					setLoggedIn(true);
				},
				onFailure: (error) => {
					reject(error);
				},
				newPasswordRequired: (data) => {
					resolve(data);
				}
			});
		});
	};

	const getSession = async () => {
		return await new Promise((resolve, reject) => {
			const user = UserPool.getCurrentUser();
			if (user) {
				user.getSession((error, session) => {
					if (error) {
						reject(error);
						setLoggedIn(false);
					} else {
						resolve(session);
						setLoggedIn(true);
					}
				});
			} else {
				reject('No session logged in.');
				setLoggedIn(false);
			}
		});
	};

	const logOut = () => {
		const user = UserPool.getCurrentUser();
		if (user) {
			user.signOut();
		}
	};

	return (
		<AuthContext.Provider
			value={{
				authenticate,
				getSession,
				logOut,
				loggedIn
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;