import { Menu } from '@mantine/core'
import { ReactNode } from 'react'

export const CustomMenu = ({ target }: { target: ReactNode }) => {
	return (
		<Menu>
			<Menu.Target>{target}</Menu.Target>
			<Menu.Dropdown>
				<Menu.Item
					component='a'
					href='https://mantine.dev'
				>
					Mantine website
				</Menu.Item>
				<Menu.Item
					component='a'
					href='https://mantine.dev'
				>
					External link
				</Menu.Item>
			</Menu.Dropdown>
		</Menu>
	)
}
