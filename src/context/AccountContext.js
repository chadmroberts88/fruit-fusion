import { createContext } from "react";
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import UserPool from '../UserPool';

export const AccountContext = createContext({});

const AccountProvider = ({ children }) => {

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
					} else {
						resolve(session);
					}
				});
			} else {
				reject('No session logged in.');
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
		<AccountContext.Provider
			value={{
				authenticate,
				getSession,
				logOut
			}}
		>
			{children}
		</AccountContext.Provider>
	);
}

export default AccountProvider;