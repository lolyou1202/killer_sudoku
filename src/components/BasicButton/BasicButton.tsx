import SVG from 'react-inlinesvg'
import classNames from 'classnames'
import './BasicButton.style.scss'

export const BasicButton = ({
	colorVariant = 'default',
	disabled,
	className,
	ref,
	onClick,
	children,
}: {
	colorVariant?:
		| 'default'
		| 'noBackground'
		| 'selected'
		| 'primary'
		| 'gradient'
		| 'yellow'
	disabled?: boolean
	className?: string
	ref?: React.ForwardedRef<HTMLButtonElement>
	onClick?: () => void
	children?: React.ReactNode
}) => {
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

const Icon = ({ iconName, size = 32 }: { iconName: string; size?: number }) => {
	return (
		<span className='basicButton_icon'>
			<SVG
				src={`../../../icons/${iconName}.svg`}
				width={size}
			/>
		</span>
	)
}

const Label = ({
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

BasicButton.Icon = Icon
BasicButton.Label = Label
