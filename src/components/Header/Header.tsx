import './Header.style.scss'
import { Logo } from '../Logo/Logo'
import SVG from 'react-inlinesvg'
import { LangSwicher } from '../LangSwicher/LangSwicher'
import { ThemeSwicher } from '../ThemeSwicher/ThemeSwicher'

export const Header = () => {
	return (
		<div className='header'>
			<Logo />
			<div className='header-panel'>
				<LangSwicher />
				<ThemeSwicher />
				<div className='menu'>
					<SVG
						src='../../../icons/menu.svg'
						width={32}
					/>
				</div>
			</div>
		</div>
	)
}
