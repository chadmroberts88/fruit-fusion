import { createContext, useState, useEffect } from "react"
export const UserDataContext = createContext({})

const UserDataProvider = ({ children }) => {

	let currentUser = localStorage.getItem("CurrentUser");
	currentUser = currentUser ? JSON.parse(currentUser) : { username: 'Guest' };

	let users = localStorage.getItem("Users");
	users = users ? JSON.parse(users) : {};

	const [guestModeConfirmed, setGuestModeConfirmed] = useState(currentUser.username === 'Guest' ? false : true);
	const [loggedIn, setLoggedIn] = useState(currentUser.username === 'Guest' ? false : true);
	const [userData, setUserData] = useState(

		currentUser.username === 'Guest' ?

			{
				username: 'Guest',
				password: null,
				multiplier: 1,
				score: 0,
				best: 0,
				rank: 0,
				soundOn: true,
				darkModeOn: true,
				useSwipeOn: false,
			} :

			users[currentUser.username]

	);

	useEffect(() => {
		users[userData.username] = userData;
		localStorage.setItem("Users", JSON.stringify(users));
	}, [userData, loggedIn]);

	return (
		<UserDataContext.Provider
			value={{
				loggedIn,
				setLoggedIn,
				guestModeConfirmed,
				setGuestModeConfirmed,
				userData,
				setUserData
			}}
		>
			{children}
		</UserDataContext.Provider>
	);
};

export default UserDataProvider

