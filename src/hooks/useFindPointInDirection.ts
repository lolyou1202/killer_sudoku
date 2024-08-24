export type FindPointInDirection = { index: number; value: number }
export type SinglePoint = {
	xy: [number, number]
	relative: { [key in 'top' | 'right' | 'bottom' | 'left']: boolean }
}

export const useFindPointInDirection = (
	pointsList: SinglePoint[],
	currentPoint: [number, number],
	currentRelative: 'top' | 'right' | 'bottom' | 'left'
) => {
	const [x_currentPoint, y_currentPoint] = currentPoint
	const pointIndex = pointsList.reduce(
		(maxItem: FindPointInDirection | null, point, index) => {
			const [x_pointArr, y_pointArr] = point.xy
			const isEqualPoint = (() => {
				switch (currentRelative) {
					case 'top':
					case 'bottom':
						return x_pointArr === x_currentPoint
					case 'left':
					case 'right':
						return y_pointArr === y_currentPoint
				}
			})()
			const isHigherValuePoint = (() => {
				switch (currentRelative) {
					case 'top':
						return y_pointArr < y_currentPoint
					case 'bottom':
						return y_pointArr > y_currentPoint
					case 'left':
						return x_pointArr < x_currentPoint
					case 'right':
						return x_pointArr > x_currentPoint
				}
			})()
			if (isHigherValuePoint && isEqualPoint) {
				if (maxItem !== null) {
					const [x_pointListItem, y_pointListItem] =
						pointsList[maxItem.index].xy
					const isLowerValuePoint = (() => {
						switch (currentRelative) {
							case 'top':
								return y_pointArr > y_pointListItem
							case 'bottom':
								return y_pointArr < y_pointListItem
							case 'left':
								return x_pointArr > x_pointListItem
							case 'right':
								return x_pointArr < x_pointListItem
						}
					})()
					if (isLowerValuePoint) {
						return { index: index, value: x_pointArr }
					} else {
						return maxItem
					}
				} else {
					return { index: index, value: x_pointArr }
				}
			} else {
				return maxItem
			}
		},
		null
	)
	return pointsList[pointIndex!.index]
}
