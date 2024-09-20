import {
	BasicButton,
	BasicButtonIcon,
	BasicButtonLabel,
	BasicButtonProps,
} from '../BasicButton/BasicButton'
import classNames from 'classnames'
import './DefaultButton.style.scss'

interface DefaultButtonProps extends Omit<BasicButtonProps, 'children'> {
	variant?: 'single' | 'multiTier' | 'multiTierWithChevron'
	iconName?: string
	labelSingle?: string
	labelMultiTier?: { label: string; subLablel: string }
}

export const DefaultButton = ({
	variant = 'single',
	colorVariant = 'default',
	iconName,
	labelSingle,
	labelMultiTier,
	disabled,
	className,
	onClick,
}: DefaultButtonProps) => {
	const CN_defaultButton = classNames('defaultButton', variant, className)
	return (
		<BasicButton
			className={CN_defaultButton}
			colorVariant={colorVariant}
			disabled={disabled}
			onClick={onClick}
		>
			{variant === 'single' && (
				<>
					{iconName && <BasicButtonIcon iconName={iconName} />}
					{labelSingle && (
						<BasicButtonLabel
							tier={'singleTier'}
							label={labelSingle}
						/>
					)}
				</>
			)}
			{variant === 'multiTier' && labelMultiTier && (
				<BasicButtonLabel
					tier='multiTier'
					label={labelMultiTier.label}
					subLabel={labelMultiTier.subLablel}
				/>
			)}
			{variant === 'multiTierWithChevron' &&
				(iconName || labelMultiTier) && (
					<>
						<div className='defaultButton_multiTier_wrapper'>
							{iconName && (
								<BasicButtonIcon iconName={iconName} />
							)}
							{labelMultiTier && (
								<BasicButtonLabel
									tier='multiTier'
									label={labelMultiTier.label}
									subLabel={labelMultiTier.subLablel}
								/>
							)}
						</div>
						<BasicButtonIcon iconName='chevron_right' />
					</>
				)}
		</BasicButton>
	)
}
