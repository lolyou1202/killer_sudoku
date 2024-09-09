import {
	AREA_INDENT_INSIDE_CELL_BOTTOMSIDE,
	AREA_INDENT_INSIDE_CELL_TOPSIDE,
} from './settings/constants'
import { useArrayIncludes } from './hooks/useArrayIncludes'
import { useFindPixelsByCoordinates } from './hooks/useFindPixelsByCoordinates'
import { useFindPointInDirection } from './hooks/useFindPointInDirection'
import { useSplitToSections } from './hooks/useSplitToSections'
import {
	generateKillerSudoku,
	overrideNumberOfCellsToRemove,
} from 'killer-sudoku-generator'

function App1() {
	overrideNumberOfCellsToRemove('expert', 65)
	const sudoku = generateKillerSudoku('expert')

	const { puzzle, solution, areas, difficulty } = sudoku
	console.log(sudoku)

	const splitNumbers = useSplitToSections(puzzle, 'sections')

	const getPointsWithRelative = (ariaCells: number[][]) => {
		const pointsList: {
			xy: [number, number]
			relative: { [key in 'top' | 'right' | 'bottom' | 'left']: boolean }
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
						top: false,
						bottom: true,
						left: false,
						right: true,
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
						bottom: false,
						left: true,
						right: false,
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
						bottom: false,
						left: false,
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
						top: false,
						bottom: true,
						left: true,
						right: false,
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
						bottom: false,
						left: true,
						right: false,
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
						top: false,
						bottom: true,
						left: false,
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
						top: false,
						bottom: true,
						left: true,
						right: false,
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
						bottom: false,
						left: false,
						right: true,
					},
				})
			}
		}

		return pointsList
	}

	const getPointsWithSequence = (
		pointsList: {
			xy: [number, number]
			relative: { [key in 'top' | 'right' | 'bottom' | 'left']: boolean }
		}[]
	) => {
		pointsList.sort((a, b) => {
			const [x_point_a, y_point_a] = a.xy
			const [x_point_b, y_point_b] = b.xy

			if (y_point_a !== y_point_b) {
				return y_point_a - y_point_b
			}

			return x_point_a - x_point_b
		})

		const newPointList: number[][] = []
		let currentPoint = pointsList[0]

		newPointList.push(currentPoint.xy)

		pointsList.forEach(() => {
			if (currentPoint.relative.right) {
				const item = useFindPointInDirection(
					pointsList,
					currentPoint.xy,
					'right'
				)
				newPointList.push(item.xy)

				currentPoint.relative.right = false
				currentPoint = item
				currentPoint.relative.left = false
			} else if (currentPoint.relative.bottom) {
				const item = useFindPointInDirection(
					pointsList,
					currentPoint.xy,
					'bottom'
				)
				newPointList.push(item.xy)

				currentPoint.relative.bottom = false
				currentPoint = item
				currentPoint.relative.top = false
			} else if (currentPoint.relative.left) {
				const item = useFindPointInDirection(
					pointsList,
					currentPoint.xy,
					'left'
				)
				newPointList.push(item.xy)

				currentPoint.relative.left = false
				currentPoint = item
				currentPoint.relative.right = false
			} else if (currentPoint.relative.top) {
				const item = useFindPointInDirection(
					pointsList,
					currentPoint.xy,
					'top'
				)
				newPointList.push(item.xy)

				currentPoint.relative.top = false
				currentPoint = item
				currentPoint.relative.bottom = false
			}
		})
		newPointList[0] = [newPointList[0][0] + 14, newPointList[0][1]]
		newPointList[newPointList.length - 1] = [
			newPointList[newPointList.length - 1][0],
			newPointList[newPointList.length - 1][1] + 10,
		]

		return newPointList
	}

	return (
		<div className='app'>
			<div className='sudoku'>
				<div className='sudoku_header'>
					<span className='sudoku_level'>Лёгкий</span>
					<span className='sudoku_time'>
						<p>04:53</p>
						<span className='sudoku_stop'></span>
					</span>
				</div>
				<div className='sudoku_wrapper'>
					<div className='sudoku_paper'>
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
												top: `${
													arrayPoints[0][1] - 2
												}px`,
												left: `${
													arrayPoints[0][0] - 16
												}px`,
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
		</div>
	)
}

export default App1
