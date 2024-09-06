import './Logo.style.scss'
import SVG from 'react-inlinesvg'

export const Logo = () => {
	return (
		<div className='logo'>
			<SVG
				src='../../../icons/logo.svg'
				width={32}
			/>
			<span>SUDOKU</span>
		</div>
	)
}
