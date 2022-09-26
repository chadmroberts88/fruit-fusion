import React from 'react';
import GlobalStyles from '@mui/material/GlobalStyles';
import { useTheme } from '@mui/system';

const GlobalStyle = () => {
	const theme = useTheme();
	return (
		<>
			<GlobalStyles styles={{
				html: { backgroundColor: theme.palette.background.default }
			}} />
		</>
	)
}

export default GlobalStyle;
