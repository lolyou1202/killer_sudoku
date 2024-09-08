import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu } from '../Menu/Menu'
import SVG from 'react-inlinesvg'
import './Navigation.style.scss'

const NAV_LIST = [
	{ icon: 'home', label: 'Главная', value: '/' },
	{ icon: 'trophy', label: 'Трофеи', value: '/trophys' },
	{ icon: 'stats', label: 'Статистика', value: '/stats' },
	{ icon: 'book', label: 'Правила игры', value: '/rules' },
	{ icon: 'settings', label: 'Настройки', value: '/settings' },
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
			targetComponent={
				<SVG
					src='../../../icons/menu.svg'
					width={32}
				/>
			}
			currentValue={currentNavLink}
			menuList={NAV_LIST.map(navItem => ({
				icon: (
					<SVG
						src={`../../../icons/${navItem.icon}.svg`}
						width={32}
					/>
				),
				label: navItem.label,
				value: navItem.value,
			}))}
			onClickMenuItem={onClickMenuItem}
			classNameMenuTarget='nav-target'
			classNameMenuDropdown='nav-dropdown'
			classNameMenuItem='nav-menuItem'
		/>
	)
}
