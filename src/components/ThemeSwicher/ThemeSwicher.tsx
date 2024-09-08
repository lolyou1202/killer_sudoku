import { useState } from 'react'
import { DEFAULT_THEME } from '../../settings/settings'
import SVG from 'react-inlinesvg'
import './ThemeSwicher.style.scss'

export const ThemeSwicher = () => {
	const [currentTheme, setCurrentTheme] = useState(DEFAULT_THEME)

	const onClickMenuItem = () =>
		setCurrentTheme(prev => (prev === 'dark' ? 'light' : 'dark'))

	return (
		<button
			className='themeSwitcher'
			onClick={onClickMenuItem}
		>
			<SVG
				src={`../../../icons/${
					currentTheme === 'dark' ? 'moon' : 'sun'
				}.svg`}
				width={32}
			/>
		</button>
	)
}
