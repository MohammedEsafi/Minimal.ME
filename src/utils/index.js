export const hex2rgba = (hex, alpha = 1) => {
	hex.replace('#', '')

	if (hex.length === 3)
		hex.repeat(2)

	const [r, g, b] = hex.match(/\w\w/g).map((x => parseInt(x, 16)))

	return `rgba(${r}, ${g}, ${b}, ${alpha})`
}