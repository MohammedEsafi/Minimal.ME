import { useState, useEffect } from 'react';
import { theme } from '../styles';

const { colors: { defaultTheme } } = theme;

const Mode = () => {
	const [mode, setMode] = useState(defaultTheme);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const localMode = window.localStorage.getItem('mode');

		if ( !localMode ) {
			if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
				setMode('dark')
		} else {
			setMode(localMode)
		}

		setMounted(true)
	}, [])

	const toggleMode = () => {
		if (mode === 'light') {
			setMode('dark')
			window.localStorage.setItem('mode', 'dark')
		} else {
			setMode('light')
			window.localStorage.setItem('mode', 'light')
		}
	}

	return [mode, toggleMode, mounted];
}

export default Mode;