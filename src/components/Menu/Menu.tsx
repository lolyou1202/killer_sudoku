import { forwardRef, useState } from 'react'
import { Popover } from '@mantine/core'
import classNames from 'classnames'
import './Menu.style.scss'
import { BasicButton } from '../BasicButton/BasicButton'

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
	targetComponent: React.ReactNode
	currentValue: string
	menuList: {
		icon?: React.ReactNode
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
				{/*<BasicButtonWithRef
					colorVariant='noBackground'
					className={CN_menuTarget}
					onClick={handlerClickTarget}
				>
					{targetComponent}
				</BasicButtonWithRef>*/}
				{targetComponent}
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

//const BasicButtonWithRef = forwardRef<HTMLButtonElement>(
//	(props, ref, children) => {
//		return (
//			<BasicButton
//				ref={ref}
//				{...props}
//			>
//				{children}
//			</BasicButton>
//		)
//	}
//)
