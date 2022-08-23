import { useState, useContext, useEffect } from 'react';
import PrimaryButton from './components/panel/PrimaryButton';
import { AccountContext } from './context/AccountContext';

const LoginStatus = () => {
	const [status, setStatus] = useState(false);
	const { getSession, logOut } = useContext(AccountContext);

	useEffect(() => {
		getSession()
			.then((session) => {
				console.log("Session: ", session);
				setStatus(true);
			})
			.catch((error) => {
				console.log(error);
			})
	}, []);

	return (
		<div>
			{status ?
				<PrimaryButton
					text={'Log Out'}
					handleClick={() => { logOut(); }}
				/> : 'Please log in.'}
		</div>
	);

};

export default LoginStatus;