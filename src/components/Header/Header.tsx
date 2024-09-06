import './Header.style.scss'
import { Logo } from '../Logo/Logo'
import SVG from 'react-inlinesvg'
import { LangSwicher } from '../LangSwicher/LangSwicher'

export const Header = () => {
	return (
		<div className='header'>
			<Logo />
			<div className='header-panel'>
				<LangSwicher />
				<div className='swichTheme'>
					<SVG
						src='../../../icons/moon.svg'
						width={32}
					/>
					{/*<SVG
						src='../../../icons/sun.svg'
						width={32}
					/>*/}
				</div>
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
