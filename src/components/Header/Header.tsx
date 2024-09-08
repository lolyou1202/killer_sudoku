import { Logo } from '../Logo/Logo'
import { LangSwicher } from '../LangSwicher/LangSwicher'
import { ThemeSwicher } from '../ThemeSwicher/ThemeSwicher'
import { Navigation } from '../Navigation/Navigation'
import './Header.style.scss'

export const Header = () => {
	return (
		<div className='header'>
			<Logo />
			<div className='header-panel'>
				<LangSwicher />
				<ThemeSwicher />
				<Navigation />
			</div>
		</div>
	)
}
