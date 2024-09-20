import { DEFAULT_LANG, LANG_LIST } from '../../settings/settings'
import { useState } from 'react'
import { Menu } from '../Menu/Menu'
import { BasicButtonLabel } from '../BasicButton/BasicButton'
import './LangSwicher.style.scss'

export const LangSwicher = () => {
	const [currentLang, setCurrentLang] = useState(DEFAULT_LANG)

	const onClickMenuItem = (menuItemValue: string) =>
		setCurrentLang(menuItemValue)

	return (
		<Menu
			targetComponent={<BasicButtonLabel label={currentLang} />}
			currentValue={currentLang}
			menuList={LANG_LIST.map(lang => ({ label: lang, value: lang }))}
			onClickMenuItem={onClickMenuItem}
			classNameMenuTarget='langSwicher_target'
			classNameMenuDropdown='langSwicher_dropdown'
			classNameMenuItem='langSwicher_menuItem'
		/>
	)
}
