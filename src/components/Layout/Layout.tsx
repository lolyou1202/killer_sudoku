import { Header } from '../Header/Header'
import './Layout.style.scss'

export const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='layout'>
			<Header />
			<div className='main'>{children}</div>
		</div>
	)
}
