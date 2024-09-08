import { ReactNode, useState } from 'react'
import { Popover } from '@mantine/core'
import classNames from 'classnames'
import './Menu.style.scss'

export const Menu = ({
	targetComponent,
	currentValue,
	menuList,
	onClickMenuItem,
	classNameMenuTarget,
	classNameMenuDropdown,
	classNameMenuItem,
	classNameMenuItemLabel,
	classNameMenuItemIcon,
}: {
	targetComponent: ReactNode
	currentValue: string
	menuList: {
		icon?: ReactNode
		label?: string
		value: string
	}[]
	onClickMenuItem?: (menuItemValue: string) => void
	classNameMenuTarget?: string
	classNameMenuDropdown?: string
	classNameMenuItem?: string
	classNameMenuItemLabel?: string
	classNameMenuItemIcon?: string
}) => {
	const [opened, setOpened] = useState(false)

	const handlerClickMenuItem = (menuItemValue: string) => {
		setOpened(false)
		if (onClickMenuItem) onClickMenuItem(menuItemValue)
	}

	const handlerClickTarget = () => setOpened(opened => !opened)

	const CN_menuTarget = classNames('menu_target', classNameMenuTarget)
	const CN_menuDropdown = classNames(
		'dropdown',
		'menu_dropdown',
		classNameMenuDropdown
	)
	const CN_menuItemLabel = classNames(
		'menu_item_label',
		classNameMenuItemLabel
	)
	const CN_menuItemIcon = classNames('menu_item_icon', classNameMenuItemIcon)

	return (
		<Popover
			opened={opened}
			onChange={setOpened}
			position='bottom-end'
			offset={16}
		>
			<Popover.Target>
				<button
					className={CN_menuTarget}
					onClick={handlerClickTarget}
				>
					{targetComponent}
				</button>
			</Popover.Target>
			<Popover.Dropdown className={CN_menuDropdown}>
				{menuList.map((menuItem, index) => {
					const CN_menuItem = classNames(
						'menu_item',
						classNameMenuItem,
						{
							active: menuItem.value === currentValue,
						}
					)
					return (
						<div
							key={index}
							className={CN_menuItem}
							onClick={() => handlerClickMenuItem(menuItem.value)}
						>
							{menuItem.icon && (
								<span className={CN_menuItemIcon}>
									{menuItem.icon}
								</span>
							)}
							{menuItem.label && (
								<span className={CN_menuItemLabel}>
									{menuItem.label}
								</span>
							)}
						</div>
					)
				})}
			</Popover.Dropdown>
		</Popover>
	)
}
