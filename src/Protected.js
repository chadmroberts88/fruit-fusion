import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

const Protected = () => {

	const { loggedIn } = useContext(AuthContext);

	return (
		loggedIn
			? <Outlet />
			: <Navigate to='/' />
	)

}

export default Protected;