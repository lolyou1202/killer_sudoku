import {
	AREA_INDENT_INSIDE_CELL_BOTTOMSIDE,
	AREA_INDENT_INSIDE_CELL_TOPSIDE,
} from './constants'
import { useArrayIncludes } from './hooks/useArrayIncludes'
import { useFindPixelsByCoordinates } from './hooks/useFindPixelsByCoordinates'
import { useSplitToSections } from './hooks/useSplitToSections'
import { generateKillerSudoku } from 'killer-sudoku-generator'

function App() {
	const sudoku = generateKillerSudoku('medium')

	const { puzzle, solution, areas, difficulty } = sudoku
	console.log(sudoku)

	const splitNumbers = useSplitToSections(solution, 'sections')

	const getPointsWithRelative = (ariaCells: number[][]) => {
		const pointsList: {
			xy: number[]
			relative: { [key in 'top' | 'right' | 'bottom' | 'left']?: boolean }
		}[] = []

		for (let i = 0; i < ariaCells.length; i++) {
			const currentCell = ariaCells[i]
			const [y_current, x_current] = currentCell
			const y_current_prev = y_current - 1
			const y_current_next = y_current + 1
			const x_current_prev = x_current - 1
			const x_current_next = x_current + 1

			const isIncludes = (array: number[]) => {
				return useArrayIncludes(ariaCells, array)
			}

			if (
				!isIncludes([y_current_prev, x_current]) &&
				!isIncludes([y_current, x_current_prev])
			) {
				const x_pixels =
					useFindPixelsByCoordinates(x_current) +
					AREA_INDENT_INSIDE_CELL_TOPSIDE
				const y_pixels =
					useFindPixelsByCoordinates(y_current) +
					AREA_INDENT_INSIDE_CELL_TOPSIDE

				pointsList.push({
					xy: [x_pixels, y_pixels],
					relative: {
						right: true,
						bottom: true,
					},
				})
			}
			if (
				isIncludes([y_current_prev, x_current]) &&
				isIncludes([y_current, x_current_prev]) &&
				!isIncludes([y_current_prev, x_current_prev])
			) {
				const x_pixels =
					useFindPixelsByCoordinates(x_current) +
					AREA_INDENT_INSIDE_CELL_TOPSIDE
				const y_pixels =
					useFindPixelsByCoordinates(y_current) +
					AREA_INDENT_INSIDE_CELL_TOPSIDE
				pointsList.push({
					xy: [x_pixels, y_pixels],
					relative: {
						top: true,
						left: true,
					},
				})
			}

			if (
				!isIncludes([y_current, x_current_prev]) &&
				!isIncludes([y_current_next, x_current])
			) {
				const x_pixels =
					useFindPixelsByCoordinates(x_current) +
					AREA_INDENT_INSIDE_CELL_TOPSIDE
				const y_pixels =
					useFindPixelsByCoordinates(y_current) +
					AREA_INDENT_INSIDE_CELL_BOTTOMSIDE
				pointsList.push({
					xy: [x_pixels, y_pixels],
					relative: {
						top: true,
						right: true,
					},
				})
			}
			if (
				isIncludes([y_current, x_current_prev]) &&
				isIncludes([y_current_next, x_current]) &&
				!isIncludes([y_current_next, x_current_prev])
			) {
				const x_pixels =
					useFindPixelsByCoordinates(x_current) +
					AREA_INDENT_INSIDE_CELL_TOPSIDE
				const y_pixels =
					useFindPixelsByCoordinates(y_current) +
					AREA_INDENT_INSIDE_CELL_BOTTOMSIDE
				pointsList.push({
					xy: [x_pixels, y_pixels],
					relative: {
						bottom: true,
						left: true,
					},
				})
			}

			if (
				!isIncludes([y_current_next, x_current]) &&
				!isIncludes([y_current, x_current_next])
			) {
				const x_pixels =
					useFindPixelsByCoordinates(x_current) +
					AREA_INDENT_INSIDE_CELL_BOTTOMSIDE
				const y_pixels =
					useFindPixelsByCoordinates(y_current) +
					AREA_INDENT_INSIDE_CELL_BOTTOMSIDE
				pointsList.push({
					xy: [x_pixels, y_pixels],
					relative: {
						top: true,
						left: true,
					},
				})
			}
			if (
				isIncludes([y_current_next, x_current]) &&
				isIncludes([y_current, x_current_next]) &&
				!isIncludes([y_current_next, x_current_next])
			) {
				const x_pixels =
					useFindPixelsByCoordinates(x_current) +
					AREA_INDENT_INSIDE_CELL_BOTTOMSIDE
				const y_pixels =
					useFindPixelsByCoordinates(y_current) +
					AREA_INDENT_INSIDE_CELL_BOTTOMSIDE
				pointsList.push({
					xy: [x_pixels, y_pixels],
					relative: {
						bottom: true,
						right: true,
					},
				})
			}

			if (
				!isIncludes([y_current, x_current_next]) &&
				!isIncludes([y_current_prev, x_current])
			) {
				const x_pixels =
					useFindPixelsByCoordinates(x_current) +
					AREA_INDENT_INSIDE_CELL_BOTTOMSIDE
				const y_pixels =
					useFindPixelsByCoordinates(y_current) +
					AREA_INDENT_INSIDE_CELL_TOPSIDE
				pointsList.push({
					xy: [x_pixels, y_pixels],
					relative: {
						bottom: true,
						left: true,
					},
				})
			}
			if (
				isIncludes([y_current, x_current_next]) &&
				isIncludes([y_current_prev, x_current]) &&
				!isIncludes([y_current_prev, x_current_next])
			) {
				const x_pixels =
					useFindPixelsByCoordinates(x_current) +
					AREA_INDENT_INSIDE_CELL_BOTTOMSIDE
				const y_pixels =
					useFindPixelsByCoordinates(y_current) +
					AREA_INDENT_INSIDE_CELL_TOPSIDE
				pointsList.push({
					xy: [x_pixels, y_pixels],
					relative: {
						top: true,
						right: true,
					},
				})
			}
		}

		return pointsList
	}

	const getPointsWithSequence = (
		pointsList: {
			xy: number[]
			relative: { [key in 'top' | 'right' | 'bottom' | 'left']?: boolean }
		}[]
	) => {
		pointsList.sort((a, b) => {
			if (a.xy[1] !== b.xy[1]) {
				return a.xy[1] - b.xy[1]
			}
			return a.xy[0] - b.xy[0]
		})

		const newPointList: number[][] = []
		let currentPoint = pointsList[0]

		newPointList.push(currentPoint.xy)

		for (let i = 0; i < pointsList.length; i++) {
			if (currentPoint.relative.right) {
				const arr = pointsList.filter(
					point =>
						point.xy[0] > currentPoint.xy[0] &&
						point.xy[1] === currentPoint.xy[1]
				)
				const indexOfMax = arr.reduce((maxIndex, item, index) => {
					if (item.xy[0] < arr[maxIndex].xy[0]) {
						return index
					}
					return maxIndex
				}, 0)
				newPointList.push(arr[indexOfMax].xy)

				const indexRelative = currentPoint.relative.indexOf('right')
				currentPoint.relative.splice(indexRelative, 1)

				currentPoint = arr[indexOfMax]
				const indexNewRelative = currentPoint.relative.indexOf('left')
				currentPoint.relative.splice(indexNewRelative, 1)
			} else if (currentPoint.relative.includes('bottom')) {
				const arr = pointsList.filter(
					point =>
						point.xy[1] > currentPoint.xy[1] &&
						point.xy[0] === currentPoint.xy[0]
				)
				const indexOfMax = arr.reduce((maxIndex, item, index) => {
					if (item.xy[1] < arr[maxIndex].xy[1]) {
						return index
					}
					return maxIndex
				}, 0)
				newPointList.push(arr[indexOfMax].xy)

				const indexRelative = currentPoint.relative.indexOf('bottom')
				currentPoint.relative.splice(indexRelative, 1)

				currentPoint = arr[indexOfMax]
				const indexNewRelative = currentPoint.relative.indexOf('top')
				currentPoint.relative.splice(indexNewRelative, 1)
			} else if (currentPoint.relative.includes('left')) {
				const arr = pointsList.filter(
					point =>
						point.xy[0] < currentPoint.xy[0] &&
						point.xy[1] === currentPoint.xy[1]
				)
				const indexOfMax = arr.reduce((maxIndex, item, index) => {
					if (item.xy[0] > arr[maxIndex].xy[0]) {
						return index
					}
					return maxIndex
				}, 0)
				newPointList.push(arr[indexOfMax].xy)

				const indexRelative = currentPoint.relative.indexOf('left')
				currentPoint.relative.splice(indexRelative, 1)

				currentPoint = arr[indexOfMax]
				const indexNewRelative = currentPoint.relative.indexOf('right')
				currentPoint.relative.splice(indexNewRelative, 1)
			} else if (currentPoint.relative.includes('top')) {
				const arr = pointsList.filter(
					point =>
						point.xy[1] < currentPoint.xy[1] &&
						point.xy[0] === currentPoint.xy[0]
				)
				const indexOfMax = arr.reduce((maxIndex, item, index) => {
					if (item.xy[1] > arr[maxIndex].xy[1]) {
						return index
					}
					return maxIndex
				}, 0)
				newPointList.push(arr[indexOfMax].xy)

				const indexRelative = currentPoint.relative.indexOf('top')
				currentPoint.relative.splice(indexRelative, 1)

				currentPoint = arr[indexOfMax]
				const indexNewRelative =
					currentPoint.relative.indexOf('bottom')
				currentPoint.relative.splice(indexNewRelative, 1)
			}
		}
		newPointList[0] = [
			newPointList[0][0] + 14,
			newPointList[0][1],
		]
		newPointList[newPointList.length - 1] = [
			newPointList[newPointList.length - 1][0],
			newPointList[newPointList.length - 1][1] + 10,
		]

		return newPointList
	}

	return (
		<div className='app'>
			<div className='wrapper'>
				<div className='sudoku_grid_wrapper'>
					<div className='sudoku_grid'>
						{splitNumbers.map((largeCell, i_largeCell) => (
							<div
								key={i_largeCell}
								className='sudoku_grid_largeCell'
							>
								{largeCell.map((smallCell, i_smallCell) => (
									<div
										key={i_smallCell}
										className='sudoku_grid_smallCell'
									>
										{smallCell !== '-' && smallCell}
									</div>
								))}
							</div>
						))}
					</div>
					<div className='sudoku_grid_areas'>
						{areas.map(area => {
							const arrayPoints = getPointsWithSequence(
								getPointsWithRelative(area.cells)
							)
							const stringPoints = arrayPoints.join(' ')
							return (
								<div
									key={stringPoints}
									className='sudoku_grid_singleArea'
								>
									<svg viewBox='0 0 380 380'>
										<polyline
											points={stringPoints}
											fill='none'
											stroke='var(--light-1)'
											strokeWidth='1'
											strokeLinecap='square'
											strokeLinejoin='miter'
											//strokeDasharray='4 6'
											strokeDashoffset='0'
										/>
									</svg>
									<span
										className='sudoku_grid_singleArea_sum'
										style={{
											top: `${arrayPoints[0][1] - 2}px`,
											left: `${arrayPoints[0][0] - 16}px`,
										}}
									>
										{area.sum}
									</span>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
