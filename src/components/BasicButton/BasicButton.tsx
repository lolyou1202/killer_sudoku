import { forwardRef } from 'react'
import SVG from 'react-inlinesvg'
import classNames from 'classnames'
import './BasicButton.style.scss'

export type BasicButtonColorVariant =
	| 'default'
	| 'noBackground'
	| 'noBackgroundToBackground'
	| 'selectedDefault'
	| 'selectedPrimary'
	| 'primary'
	| 'gradient'
	| 'yellow'

export interface BasicButtonProps {
	colorVariant?: BasicButtonColorVariant
	disabled?: boolean
	className?: string
	children?: React.ReactNode
	onClick?: () => void
}

export const BasicButton = forwardRef<HTMLButtonElement, BasicButtonProps>(
	(
		{ colorVariant = 'default', disabled, className, onClick, children },
		ref
	) => {
		const CN_basicButton = classNames('basicButton', className)
		return (
			<button
				className={CN_basicButton}
				color={colorVariant}
				disabled={disabled}
				ref={ref}
				onClick={onClick}
			>
				{children}
			</button>
		)
	}
)

export const BasicButtonIcon = ({
	iconName,
	size = 32,
}: {
	iconName: string
	size?: number
}) => {
	return (
		<span className='basicButton_icon'>
			<SVG
				src={`../../../icons/${iconName}.svg`}
				width={size}
			/>
		</span>
	)
}

export const BasicButtonLabel = ({
	label = 'label',
	tier = 'singleTier',
	subLabel,
}: {
	label: string
	tier?: 'singleTier' | 'multiTier'
	subLabel?: string
}) => {
	return (
		<>
			{tier === 'singleTier' && label && (
				<label className='basicButton_label'>{label}</label>
			)}
			{tier === 'multiTier' && (
				<span className='basicButton_labelMultiTier'>
					{label && (
						<label className='basicButton_label'>{label}</label>
					)}
					{subLabel && (
						<p className='basicButton_subLablel'>{subLabel}</p>
					)}
				</span>
			)}
		</>
	)
}

//BasicButton.Icon = Icon
//BasicButton.Label = Label
