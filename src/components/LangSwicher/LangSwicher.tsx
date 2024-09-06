import { Menu } from '@mantine/core'
import { useState } from 'react'
import './LangSwicher.style.scss'

export const LangSwicher = () => {
	const [opened, setOpened] = useState(false)

	return (
		<Menu
			opened={opened}
			onChange={setOpened}
			position='bottom-end'
			offset={16}
			trigger='click'
		>
			<Menu.Target>
				<span className='langSwicher-current'>RU</span>
			</Menu.Target>
			<Menu.Dropdown>
				<Menu.Item>Mantine website</Menu.Item>
				<Menu.Item>External link</Menu.Item>
			</Menu.Dropdown>
		</Menu>
	)
}
