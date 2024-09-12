import { useState } from 'react'
import { DEFAULT_LANG, LANG_LIST } from '../../settings/settings'
import { Menu } from '../Menu/Menu'
import './LangSwicher.style.scss'
import { BasicButton } from '../BasicButton/BasicButton'

export const LangSwicher = () => {
	const [currentLang, setCurrentLang] = useState(DEFAULT_LANG)

	const onClickMenuItem = (menuItemValue: string) =>
		setCurrentLang(menuItemValue)

	return (
		<Menu
			targetComponent={<BasicButton.Label label={currentLang} />}
			currentValue={currentLang}
			menuList={LANG_LIST.map(lang => ({ label: lang, value: lang }))}
			onClickMenuItem={onClickMenuItem}
			classNameMenuTarget='langSwicher_target'
			classNameMenuDropdown='langSwicher_dropdown'
			classNameMenuItem='langSwicher_menuItem'
			classNameMenuItemLabel='langSwicher_menuItem_label'
		/>
	)
}
