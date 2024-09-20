import { useState } from 'react'
import { Popover } from '@mantine/core'
import classNames from 'classnames'
import {
	BasicButton,
	BasicButtonIcon,
	BasicButtonLabel,
} from '../BasicButton/BasicButton'
import './Menu.style.scss'

export const Menu = ({
	targetComponent,
	currentValue,
	menuList,
	onClickMenuItem,
	classNameMenuTarget,
	classNameMenuDropdown,
	classNameMenuItem,
}: {
	targetComponent: React.ReactNode
	currentValue: string
	menuList: {
		iconName?: string
		label?: string
		value: string
	}[]
	onClickMenuItem?: (menuItemValue: string) => void
	classNameMenuTarget?: string
	classNameMenuDropdown?: string
	classNameMenuItem?: string
}) => {
	const [opened, setOpened] = useState(false)

	const handlerClickMenuItem = (menuItemValue: string) => {
		setOpened(false)
		if (onClickMenuItem) onClickMenuItem(menuItemValue)
	}

	const handlerClickTarget = () => setOpened(opened => !opened)

	const CN_menuTarget = classNames('menu_target', classNameMenuTarget)
	const CN_menuDropdown = classNames('menu_dropdown', classNameMenuDropdown)

	return (
		<Popover
			opened={opened}
			onChange={setOpened}
			position='bottom-end'
			offset={16}
		>
			<Popover.Target>
				<BasicButton
					colorVariant='noBackground'
					className={CN_menuTarget}
					onClick={handlerClickTarget}
				>
					{targetComponent}
				</BasicButton>
			</Popover.Target>
			<Popover.Dropdown className={CN_menuDropdown}>
				{menuList.map((menuItem, index) => {
					const { value, iconName, label } = menuItem
					const CN_menuItem = classNames(
						'menu_item',
						classNameMenuItem
					)
					const isActiveMenuItem =
						menuItem.value === currentValue
							? 'selectedPrimary'
							: 'noBackgroundToBackground'
					return (
						<BasicButton
							key={index}
							colorVariant={isActiveMenuItem}
							className={CN_menuItem}
							onClick={() => handlerClickMenuItem(value)}
						>
							{iconName && (
								<BasicButtonIcon iconName={iconName} />
							)}
							{label && <BasicButtonLabel label={label} />}
						</BasicButton>
					)
				})}
			</Popover.Dropdown>
		</Popover>
	)
}
