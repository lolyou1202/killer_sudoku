import { BasicButton } from '../components/BasicButton/BasicButton'
import { DefaultButton } from '../components/DefaultButton/DefaultButton'

export const Home = () => {
	return (
		//<DefaultButton
		//	variant='multiTierWithChevron'
		//	color='colorDefault'
		//	//iconName='trophy'
		//	labelSingle='sdfsd'
		//	labelMultiTier={{ label: 'sdfsdf', subLablel: 'sdfsdf' }}
		//	//disabled
		///>
		<BasicButton colorVariant='yellow'>
			<BasicButton.Icon iconName='sun' />
			<BasicButton.Label label='labellabellabel' />
		</BasicButton>
	)
}
