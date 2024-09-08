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
			{currentTheme === 'dark' ? (
				<SVG
					src='../../../icons/moon.svg'
					width={32}
				/>
			) : currentTheme === 'light' && (
				<SVG
					src='../../../icons/sun.svg'
					width={32}
				/>
			)}
		</button>
	)
}
