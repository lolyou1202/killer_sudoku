import { DefaultButton } from '../../DefaultButton/DefaultButton'
import './HomeLayout.style.scss'

export const HomeLayout = () => {
	return (
		<div className='home'>
			<div className='home_layout'>
				<DefaultButton
					variant='multiTierWithChevron'
					colorVariant='gradient'
					iconName='trophy'
					labelMultiTier={{
						label: 'Ежедневные испытания',
						subLablel: '2 сент. 2024',
					}}
				/>
				<div>
					<span>
						<DefaultButton
							variant='multiTier'
							colorVariant='primary'
							labelMultiTier={{
								label: 'Продолжить',
								subLablel: '00:02 - Эксперт',
							}}
						/>
						<DefaultButton
							variant='single'
							colorVariant='default'
							iconName='sun'
						/>
					</span>
					<span>
						<DefaultButton
							variant='single'
							colorVariant='default'
							labelSingle='Новая игра'
						/>
					</span>
				</div>
			</div>
		</div>
	)
}
