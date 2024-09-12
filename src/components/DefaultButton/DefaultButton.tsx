import classNames from 'classnames'
import SVG from 'react-inlinesvg'
import './DefaultButton.style.scss'

export const DefaultButton = ({
	variant = 'single',
	color = 'colorDefault',
	iconName,
	labelSingle,
	labelMultiTier,
	disabled,
}: {
	variant?: 'single' | 'multiTier' | 'multiTierWithChevron'
	color?: 'colorDefault' | 'colorPrimary' | 'colorGradient'
	iconName?: React.ReactNode
	labelSingle?: string
	labelMultiTier?: { label: string; subLablel: string }
	disabled?: boolean
}) => {
	const CN_defaultButton = classNames('defaultButton', variant, color)
	return (
		<button
			className={CN_defaultButton}
			disabled={disabled}
		>
			{variant === 'single' && (
				<>
					{iconName && (
						<span className='defaultButton_icon'>
							<SVG
								src={`../../../icons/${iconName}.svg`}
								width={32}
							/>
						</span>
					)}
					{labelSingle && (
						<label className='defaultButton_label'>
							{labelSingle}
						</label>
					)}
				</>
			)}
			{variant === 'multiTier' && labelMultiTier && (
				<span className='defaultButton_labelMultiTier'>
					<label className='defaultButton_label'>
						{labelMultiTier.label}
					</label>
					<p className='defaultButton_subLablel'>
						{labelMultiTier.subLablel}
					</p>
				</span>
			)}
			{variant === 'multiTierWithChevron' &&
				(iconName || labelMultiTier) && (
					<>
						<div className='defaultButton_multiTier_wrapper'>
							{iconName && (
								<span className='defaultButton_icon'>
									<SVG
										src={`../../../icons/${iconName}.svg`}
										width={32}
									/>
								</span>
							)}
							{labelMultiTier && (
								<span className='defaultButton_labelMultiTier'>
									<label className='defaultButton_label'>
										{labelMultiTier.label}
									</label>
									<p className='defaultButton_subLablel'>
										{labelMultiTier.subLablel}
									</p>
								</span>
							)}
						</div>
						<span className='defaultButton_icon'>
							<SVG
								src='../../../icons/chevron_right.svg'
								width={32}
							/>
						</span>
					</>
				)}
		</button>
	)
}
