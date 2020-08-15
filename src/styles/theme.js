const theme = {
	colors: {
		light: {
			primary: '#111111',
			surface: '#F8F8F8',
			secondary: '#E6BE42',
			header: {
				background: '#FCFCFC',
				shadowOpacity: 0.15,
			}
		},
		dark: {
			primary: '#F8F8F8',
			surface: '#111111',
			secondary: '#FCB97D',
			header: {
				background: '#070707',
				shadowOpacity: 0.05,
			}
		},
		defaultTheme: 'light',
	},

	fonts: {
		primary: 'FuturaPT, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
		secondary: 'Eina, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
	},

	transition: {
		timing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
	},

	navHeight: '100px',
  navScrollHeight: '70px',
};

export default theme;