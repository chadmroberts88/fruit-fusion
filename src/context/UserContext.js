import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
export const UserContext = createContext({});

const UserProvider = ({ children }) => {

	const { user } = useContext(AuthContext);
	const [userId, setUserId] = useState();
	const [username, setUsername] = useState('');
	const [soundOn, setSoundOn] = useState(false);
	const [darkModeOn, setDarkModeOn] = useState(false);
	const [useSwipeOn, setUseSwipeOn] = useState(false);
	const [best, setBest] = useState(0);
	const [rank, setRank] = useState(0);
	const standardHeaders = {
		'Content-Type': 'application/json',
		'x-api-key': process.env.REACT_APP_API_KEY,
	};

	const fetchUserData = async (id) => {
		const response = await fetch(`${process.env.REACT_APP_ENDPOINT_URL}/user/${id}`, {
			method: 'GET',
			headers: standardHeaders,
		});
		return response.json();
	};

	const fetchRank = async (id) => {
		const response = await fetch(`${process.env.REACT_APP_ENDPOINT_URL}/rank/${id}`, {
			method: 'GET',
			headers: standardHeaders,
		});
		return response.json();
	}

	const fetchLeaders = async () => {
		const response = await fetch(`${process.env.REACT_APP_ENDPOINT_URL}/leaders?page=1&limit=100`, {
			method: 'GET',
			headers: standardHeaders,
		});
		return response.json();
	};

	const updateUser = async (id, data) => {
		const response = await fetch(`${process.env.REACT_APP_ENDPOINT_URL}/user/${id}`, {
			method: 'PATCH',
			headers: standardHeaders,
			body: JSON.stringify(data),
		});
		return response.json();
	};

	useEffect(() => {
		if (user !== undefined) {
			fetchUserData(user.attributes.sub)
				.then((userData) => {
					setUserId(userData.id);
					setUsername(userData.username);
					setSoundOn(userData.soundOn);
					setDarkModeOn(userData.darkModeOn);
					setUseSwipeOn(userData.useSwipeOn);
					setBest(userData.best);
				})
				.catch((error) => {
					console.log(error);
				});

			fetchRank(user.attributes.sub)
				.then((rank) => {
					setRank(rank);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}, [user]);

	return (
		<UserContext.Provider
			value={{
				userId,
				username,
				soundOn,
				darkModeOn,
				useSwipeOn,
				best,
				rank,
				setUserId,
				setUsername,
				setBest,
				setRank,
				setSoundOn,
				setDarkModeOn,
				setUseSwipeOn,
				fetchUserData,
				fetchRank,
				fetchLeaders,
				updateUser
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;