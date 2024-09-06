import { ReactNode } from 'react'
import { Header } from '../Header/Header'
import './Layout.style.scss'

export const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<div className='layout'>
			<Header />
			<div className='main'>{children}</div>
		</div>
	)
}
