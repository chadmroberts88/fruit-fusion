import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
export const UserContext = createContext({});

const UserProvider = ({ children }) => {

	const { user } = useContext(AuthContext);
	const [userData, setUserData] = useState();
	const [rank, setRank] = useState();
	const standardHeaders = { 'Content-Type': 'application/json' };

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
					setUserData(userData);
				})
				.catch((error) => {
					console.log(error);
				});

			fetchRank(user.attributes.sub)
				.then((rank) => {
					console.log(rank);
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
				userData,
				rank,
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