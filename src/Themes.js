import { createTheme } from '@mui/material/styles';

export const setTheme = (mode) => {
	return createTheme({
		palette: {
			mode,
			...(mode === 'light'
				? {
					primary: {
						main: '#96e072',
						light: '#c9ffa2',
						dark: '#64ae43',
					},
					secondary: {
						main: '#f25c54',
						light: '#ff8e81',
						dark: '#b9262b',
					},
					background: {
						default: '#eaf8e2',
						paper: '#f4fbf0',
					},
				}
				: {
					primary: {
						main: '#595959',
						light: '#cfcfcf',
						dark: '#292929',
					},
					secondary: {
						main: '#f06292',
						light: '#ff94c2',
						dark: '#ba2d65',
					},
					background: {
						default: '#000000',
						paper: '#121212',
					}
				})
		},

		components: {
			MuiButton: {
				styleOverrides: {
					root: {
						'&:hover': {
							backgroundColor: mode === 'light' ? '#ff8e81' : '#ff94c2',
						}
					}
				}
			}
		},

		typography: {
			h2: {
				fontSize: '1.4rem',
				fontWeight: 500,
				color: '#000000',
			},
			h3: {
				fontSize: '1.2rem',
				fontWeight: 500,
				color: '#ffffff',
				lineHeight: '1.2rem',
			},
			h4: {
				fontSize: '1.1rem',
				fontWeight: 700,
				color: mode === 'light' ? '#f25c54' : '#f06292',
			},
			h5: {
				fontSize: '1rem',
				fontWeight: 500,
				color: mode === 'light' ? '#000000' : '#ffffff'
			},
			h6: {
				fontSize: '1rem',
				fontWeight: 500,
				color: '#ffffff',
			},
			body1: {
				color: mode === 'light' ? '#000000' : '#ffffff',
			},
			body2: {
				color: '#ffffff',
				fontSize: '1rem',
				lineHeight: '1.2rem'
			}
		}
	})
};