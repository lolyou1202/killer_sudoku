import classNames from 'classnames'
import './DefaultButton.style.scss'

export const DefaultButton = ({
	variant = 'single',
	color = 'colorDefault',
	icon,
	labelSingle = 'Label',
	labelMultiTier = { label: 'Label', subLablel: 'SubLabel' },
}: {
	variant?: 'single' | 'multiTier' | 'multiTierWithIcons'
	color?: 'colorDefault' | 'colorPrimary' | 'colorGradient'
	icon?: React.ReactNode
	labelSingle?: string
	labelMultiTier?: { label: string; subLablel: string }
}) => {
	const CN_defaultButton = classNames('defaultButton', variant, color)

	return (
		<button className={CN_defaultButton}>
			<span className='defaultButton_icon'>{icon}</span>
			<label className='defaultButton_label'>{labelSingle}</label>
			<span className='defaultButton_labelMultiTier'>
				<label className='defaultButton_label'>
					{labelMultiTier.label}
				</label>
				<p className='defaultButton_subLablel'>
					{labelMultiTier.subLablel}
				</p>
			</span>
		</button>
	)
}
