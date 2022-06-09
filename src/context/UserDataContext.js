import { createContext, useState, useEffect } from "react"
export const UserDataContext = createContext({})

const UserDataProvider = ({ children }) => {

	const guestTemplate = {
		username: 'Guest',
		password: null,
		best: 0,
		rank: 0,
		soundOn: true,
		darkModeOn: true,
		useSwipeOn: false
	};

	if (!localStorage.getItem("CurrentUser")) {
		localStorage.setItem("CurrentUser", JSON.stringify({
			username: 'Guest'
		}));
	}

	if (!localStorage.getItem("UsersList")) {
		localStorage.setItem("UsersList", JSON.stringify({
			Guest: guestTemplate
		}));
	}

	let currentUser = JSON.parse(localStorage.getItem("CurrentUser")).username;

	const [guestModeConfirmed, setGuestModeConfirmed] = useState(currentUser === 'Guest' ? false : true);
	const [loggedIn, setLoggedIn] = useState(currentUser === 'Guest' ? false : true);
	const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("UsersList"))[currentUser]);

	const getUsersList = () => {
		return JSON.parse(localStorage.getItem("UsersList"));
	}

	const setUsersList = (usersList) => {
		localStorage.setItem("UsersList", JSON.stringify(usersList));
	}

	const setCurrentUser = (username) => {
		localStorage.setItem("CurrentUser", JSON.stringify({ username: username }));
	}

	const logIn = (username) => {
		let usersList = getUsersList(); // get list of users
		setUserData(usersList[username]); // pull user data, set it to state
		usersList['Guest'] = guestTemplate// reset 'Guest' data if new user
		setUsersList(usersList); // overwrite users list
		setCurrentUser(username); // overwrite current user
		setLoggedIn(true);
	}

	const logOut = () => {
		let usersList = getUsersList(); // get list of users
		setUserData(usersList['Guest']); // pull guest data, set it to state
		setCurrentUser('Guest'); // overwrite current user
		setLoggedIn(false);
		setGuestModeConfirmed(false);
	}

	const createUser = (username, password) => {
		let usersList = getUsersList(); // get list of users
		usersList[username] = { // add new user to list
			...userData,
			username: username,
			password: password
		};
		setUsersList(usersList); // overwrite users list
		logIn(username); // log in new user
	}

	const deleteUser = (username) => {
		let usersList = getUsersList();
		delete usersList[username];
		setUsersList(usersList);
		logOut();
	}

	const updateUsername = (newUsername) => {
		let usersList = getUsersList(); // get list of users
		usersList[newUsername] = usersList[userData.username]; // copy data from prev user object
		usersList[newUsername].username = newUsername; // update username field
		delete usersList[userData.username]; // delete prev user object
		setUserData(usersList[newUsername]); // update state to contain new username
		setUsersList(usersList); // overwrite users list
		setCurrentUser(newUsername); // overwrite current user
	}

	const updateUserData = (dataObject) => {
		let usersList = getUsersList(); // get list of users
		Object.entries(dataObject).forEach(entry => {
			const [key, value] = entry;
			usersList[userData.username][key] = value;
		});
		setUserData(usersList[userData.username]); // update state
		setUsersList(usersList); // overwrite users list
	}

	// update user's data in local storage whenever userData changes

	// useEffect(() => {
	// 	let usersList = getUsersList(); // get list of users
	// 	usersList[userData.username] = userData; // update the user's data in local storage with current state
	// 	setUsersList(usersList); // overwrite users list
	// }, [userData]);

	return (
		<UserDataContext.Provider
			value={{
				loggedIn,
				setLoggedIn,
				guestModeConfirmed,
				setGuestModeConfirmed,
				userData,
				setUserData,
				logIn,
				logOut,
				createUser,
				deleteUser,
				updateUsername,
				updateUserData
			}}
		>
			{children}
		</UserDataContext.Provider>
	);
};

export default UserDataProvider

