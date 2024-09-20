import { useArrayIncludes } from '../../hooks/useArrayIncludes'
import { useFindPixelsByCoordinates } from '../../hooks/useFindPixelsByCoordinates'
import { useFindPointInDirection } from '../../hooks/useFindPointInDirection'
import {
	AREA_INDENT_INSIDE_CELL_BOTTOMSIDE,
	AREA_INDENT_INSIDE_CELL_TOPSIDE,
} from '../../settings/constants'
import {
	BasicButton,
	BasicButtonIcon,
	BasicButtonLabel,
} from '../BasicButton/BasicButton'
import { DefaultButton } from '../DefaultButton/DefaultButton'
import './SudokuPanel.style.scss'

export const SudokuPanel = () => {
	const AREAS = [
		{
			cells: [
				[1, 2],
				[1, 3],
				[1, 4],
				[2, 4],
				[3, 4],
				[3, 3],
				[4, 3],
			],
			sum: 31,
		},
		{
			cells: [
				[8, 3],
				[8, 4],
				[8, 5],
				[7, 5],
				[7, 4],
				[6, 4],
				[6, 5],
			],
			sum: 30,
		},
		{
			cells: [
				[4, 4],
				[4, 5],
				[5, 5],
				[5, 4],
				[5, 3],
				[5, 2],
				[4, 2],
			],
			sum: 32,
		},
		{
			cells: [
				[0, 4],
				[0, 3],
				[0, 2],
			],
			sum: 13,
		},
		{
			cells: [
				[4, 1],
				[4, 0],
				[3, 0],
				[3, 1],
				[2, 1],
				[2, 2],
			],
			sum: 29,
		},
		{
			cells: [
				[1, 0],
				[2, 0],
			],
			sum: 10,
		},
		{
			cells: [
				[1, 1],
				[0, 1],
				[0, 0],
			],
			sum: 21,
		},
		{
			cells: [
				[7, 6],
				[6, 6],
				[6, 7],
				[6, 8],
				[7, 8],
			],
			sum: 22,
		},
		{
			cells: [
				[8, 7],
				[8, 8],
			],
			sum: 9,
		},
		{
			cells: [
				[5, 1],
				[6, 1],
				[7, 1],
			],
			sum: 14,
		},
		{
			cells: [
				[3, 8],
				[4, 8],
			],
			sum: 12,
		},
		{
			cells: [
				[1, 6],
				[1, 5],
				[0, 5],
				[0, 6],
				[0, 7],
				[0, 8],
			],
			sum: 32,
		},
		{
			cells: [
				[5, 0],
				[6, 0],
				[7, 0],
			],
			sum: 14,
		},
		{ cells: [[8, 6]], sum: 6 },
		{
			cells: [
				[6, 2],
				[6, 3],
			],
			sum: 9,
		},
		{
			cells: [
				[3, 5],
				[3, 6],
				[4, 6],
				[4, 7],
				[3, 7],
			],
			sum: 20,
		},
		{
			cells: [
				[8, 0],
				[8, 1],
				[8, 2],
				[7, 2],
			],
			sum: 21,
		},
		{ cells: [[2, 3]], sum: 1 },
		{
			cells: [
				[1, 7],
				[1, 8],
				[2, 8],
			],
			sum: 11,
		},
		{ cells: [[3, 2]], sum: 8 },
		{
			cells: [
				[5, 8],
				[5, 7],
				[5, 6],
			],
			sum: 22,
		},
		{
			cells: [
				[2, 5],
				[2, 6],
			],
			sum: 15,
		},
		{ cells: [[7, 7]], sum: 8 },
		{ cells: [[7, 3]], sum: 9 },
		{ cells: [[2, 7]], sum: 6 },
	]
	const splitNumbers = [
		['1', '2', '1', '1', '2', '1', '1', '2', '1'],
		['1', '2', '1', '1', '2', '1', '1', '2', '1'],
		['1', '2', '1', '1', '2', '1', '1', '2', '1'],
		['1', '2', '1', '1', '2', '1', '1', '2', '1'],
		['1', '2', '1', '1', '2', '1', '1', '2', '1'],
		['1', '2', '1', '1', '2', '1', '1', '2', '1'],
		['1', '2', '1', '1', '2', '1', '1', '2', '1'],
		['1', '2', '1', '1', '2', '1', '1', '2', '1'],
		['1', '2', '1', '1', '2', '1', '1', '2', '1'],
	]
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
		<div className='sudokuPanel'>
			<div className='sudoku_wrapper'>
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
					{AREAS.map(area => {
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
			<div className='sudoku_funcSide'>
				<div className='sudoku_header'>
					<div className='sudoku_timer'>
						<label className='sudoku_timer_time'>17:56</label>
						<BasicButton
							colorVariant='noBackground'
							onClick={() => {}}
							className='sudoku_timer_icon'
						>
							<BasicButtonIcon iconName='sun' />
						</BasicButton>
						<BasicButton
							colorVariant='noBackground'
							onClick={() => {}}
							className='sudoku_timer_icon'
						>
							<BasicButtonIcon iconName='sun' />
						</BasicButton>
					</div>
					<label className='sudoku_level'>Лёгкий</label>
					<label className='sudoku_mistakes'>Ошибки: {1}/3</label>
				</div>
				<div className='sudoku_func'>
					<BasicButton
						colorVariant='default'
						disabled={false}
						onClick={() => {}}
						className='sudoku_func_button'
					>
						<BasicButtonIcon iconName='sun' />
					</BasicButton>
					<BasicButton
						colorVariant='default'
						disabled={false}
						onClick={() => {}}
						className='sudoku_func_button'
					>
						<BasicButtonIcon iconName='sun' />
					</BasicButton>
					<BasicButton
						colorVariant='primary'
						disabled={false}
						onClick={() => {}}
						className='sudoku_func_button'
					>
						<BasicButtonIcon iconName='sun' />
					</BasicButton>
					<BasicButton
						colorVariant='default'
						disabled={false}
						onClick={() => {}}
						className='sudoku_func_button withMark lamp'
					>
						<BasicButtonIcon iconName='sun' />
					</BasicButton>
				</div>
				<div className='sudoku_keyboard'>
					{[...Array(9)].map((_, index) => (
						<BasicButton
							key={index}
							colorVariant='default'
							disabled={false}
							onClick={() => {}}
							className='sudoku_keyboard_num'
						>
							<BasicButtonLabel label={`${index + 1}`} />
						</BasicButton>
					))}
				</div>
				<DefaultButton
					colorVariant='primary'
					variant='single'
					labelSingle='Новая игра'
					onClick={() => {}}
				/>
			</div>
		</div>
	)
}
