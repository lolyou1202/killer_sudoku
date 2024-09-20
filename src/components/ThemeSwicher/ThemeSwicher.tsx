import { DEFAULT_THEME } from '../../settings/settings'
import { useState } from 'react'
import { BasicButton, BasicButtonIcon } from '../BasicButton/BasicButton'
import './ThemeSwicher.style.scss'

export const ThemeSwicher = () => {
	const [currentTheme, setCurrentTheme] = useState(DEFAULT_THEME)

	const onClickSwicher = () =>
		setCurrentTheme(prev => (prev === 'dark' ? 'light' : 'dark'))

	return (
		<BasicButton
			colorVariant='noBackground'
			className='themeSwitcher'
			onClick={onClickSwicher}
		>
			<BasicButtonIcon
				iconName={currentTheme === 'dark' ? 'moon' : 'sun'}
			/>
		</BasicButton>
	)
}
