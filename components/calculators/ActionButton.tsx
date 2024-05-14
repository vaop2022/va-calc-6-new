import React from 'react'
import { Button, ButtonProps } from '@chakra-ui/react'
import { Direction } from '../../types/types'

interface ActionButtonProps {
	variantB?: string
	colorB?: string
	textColor?: string
	widthB?: string
	heightB?: string
	label: string
	direction: Direction
	onClick: (direction: Direction) => void
	onMouseOver: (direction: Direction) => void
	onMouseLeave: () => void
	className: string
}

function ActionButton({
	variantB = 'solid',
	colorB = '#728AB7',
	textColor = '#728AB7',
	widthB = '60px',
	heightB = '60px',
	label,
	direction,
	onClick,
	onMouseOver,
	onMouseLeave,
	className
}: ActionButtonProps) {
	return (
		<Button
			variant={variantB}
			colorScheme={colorB}
			color={textColor}
			width={widthB}
			height={heightB}
			onClick={() => onClick(direction)}
			onMouseOver={() => onMouseOver(direction)}
			onMouseLeave={() => onMouseLeave()}
			className={className}
		>
			{label}
		</Button>
	)
}

export default ActionButton
