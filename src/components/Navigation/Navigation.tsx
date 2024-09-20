import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu } from '../Menu/Menu'
import { BasicButtonIcon } from '../BasicButton/BasicButton'
import './Navigation.style.scss'

const NAV_LIST = [
	{ iconName: 'home', label: 'Главная', value: '/' },
	{ iconName: 'trophy', label: 'Трофеи', value: '/trophys' },
	{ iconName: 'stats', label: 'Статистика', value: '/stats' },
	{ iconName: 'book', label: 'Правила игры', value: '/rules' },
	{ iconName: 'settings', label: 'Настройки', value: '/settings' },
]

export const Navigation = () => {
	const location = useLocation()
	const navigate = useNavigate()

	const [currentNavLink, setCurrentNavLink] = useState(location.pathname)

	const onClickMenuItem = (menuItemValue: string) => navigate(menuItemValue)

	useEffect(() => {
		setCurrentNavLink(location.pathname)
	}, [location.pathname])

	return (
		<Menu
			targetComponent={<BasicButtonIcon iconName='menu' />}
			currentValue={currentNavLink}
			menuList={NAV_LIST}
			onClickMenuItem={onClickMenuItem}
			classNameMenuTarget='nav-target'
			classNameMenuDropdown='nav-dropdown'
			classNameMenuItem='nav-menuItem'
		/>
	)
}
