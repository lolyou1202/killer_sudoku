import { Header } from '../../Header/Header'
import './AppLayout.style.scss'

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='layout'>
			<Header />
			<div className='main'>{children}</div>
		</div>
	)
}
