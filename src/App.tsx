import { useArrayIncludes } from './hooks/useArrayIncludes'
import { useSplitToSections } from './hooks/useSplitToSections'
import {
	generateKillerSudoku,
	getSeparationsFromAreas,
} from 'killer-sudoku-generator'

function App() {
	const sudoku = generateKillerSudoku('medium')

	const { puzzle, solution, areas, difficulty } = sudoku
	//console.log(sudoku)

	const splitNumbers = useSplitToSections(puzzle, 'sections')

	const getPointsWithRelative = (ariaCells: number[][]) => {
		const список_точек: {
			yx: number[]
			relative: ('top' | 'left' | 'bottom' | 'right')[]
		}[] = []

		for (let i = 0; i < ariaCells.length; i++) {
			const текущая_клетка = ariaCells[i]
			const [y_текущий, x_текущий] = текущая_клетка

			const isIncludes = (array: number[]) => {
				return useArrayIncludes(ariaCells, array)
			}

			if (
				!isIncludes([y_текущий - 1, x_текущий]) &&
				!isIncludes([y_текущий, x_текущий - 1])
			) {
				const y_пиксели =
					40 * y_текущий +
					2 * (y_текущий - Math.floor(y_текущий / 3)) +
					4 * Math.floor(y_текущий / 3) +
					2
				const x_пиксели =
					40 * x_текущий +
					2 * (x_текущий - Math.floor(x_текущий / 3)) +
					4 * Math.floor(x_текущий / 3) +
					2

				список_точек.push({
					yx: [y_пиксели, x_пиксели],
					relative: ['right', 'bottom'],
				})
			}
			if (
				isIncludes([y_текущий - 1, x_текущий]) &&
				isIncludes([y_текущий, x_текущий - 1]) &&
				!isIncludes([y_текущий - 1, x_текущий - 1])
			) {
				const y_пиксели =
					40 * y_текущий +
					2 * (y_текущий - Math.floor(y_текущий / 3)) +
					4 * Math.floor(y_текущий / 3) +
					2
				const x_пиксели =
					40 * x_текущий +
					2 * (x_текущий - Math.floor(x_текущий / 3)) +
					4 * Math.floor(x_текущий / 3) +
					2
				список_точек.push({
					yx: [y_пиксели, x_пиксели],
					relative: ['top', 'left'],
				})
			}

			if (
				!isIncludes([y_текущий, x_текущий - 1]) &&
				!isIncludes([y_текущий + 1, x_текущий])
			) {
				const y_пиксели =
					40 * y_текущий +
					2 * (y_текущий - Math.floor(y_текущий / 3)) +
					4 * Math.floor(y_текущий / 3) +
					38
				const x_пиксели =
					40 * x_текущий +
					2 * (x_текущий - Math.floor(x_текущий / 3)) +
					4 * Math.floor(x_текущий / 3) +
					2
				список_точек.push({
					yx: [y_пиксели, x_пиксели],
					relative: ['top', 'right'],
				})
			}
			if (
				isIncludes([y_текущий, x_текущий - 1]) &&
				isIncludes([y_текущий + 1, x_текущий]) &&
				!isIncludes([y_текущий + 1, x_текущий - 1])
			) {
				const y_пиксели =
					40 * y_текущий +
					2 * (y_текущий - Math.floor(y_текущий / 3)) +
					4 * Math.floor(y_текущий / 3) +
					38
				const x_пиксели =
					40 * x_текущий +
					2 * (x_текущий - Math.floor(x_текущий / 3)) +
					4 * Math.floor(x_текущий / 3) +
					2
				список_точек.push({
					yx: [y_пиксели, x_пиксели],
					relative: ['left', 'bottom'],
				})
			}

			if (
				!isIncludes([y_текущий + 1, x_текущий]) &&
				!isIncludes([y_текущий, x_текущий + 1])
			) {
				const y_пиксели =
					40 * y_текущий +
					2 * (y_текущий - Math.floor(y_текущий / 3)) +
					4 * Math.floor(y_текущий / 3) +
					38
				const x_пиксели =
					40 * x_текущий +
					2 * (x_текущий - Math.floor(x_текущий / 3)) +
					4 * Math.floor(x_текущий / 3) +
					38
				список_точек.push({
					yx: [y_пиксели, x_пиксели],
					relative: ['top', 'left'],
				})
			}
			if (
				isIncludes([y_текущий + 1, x_текущий]) &&
				isIncludes([y_текущий, x_текущий + 1]) &&
				!isIncludes([y_текущий + 1, x_текущий + 1])
			) {
				const y_пиксели =
					40 * y_текущий +
					2 * (y_текущий - Math.floor(y_текущий / 3)) +
					4 * Math.floor(y_текущий / 3) +
					38
				const x_пиксели =
					40 * x_текущий +
					2 * (x_текущий - Math.floor(x_текущий / 3)) +
					4 * Math.floor(x_текущий / 3) +
					38
				список_точек.push({
					yx: [y_пиксели, x_пиксели],
					relative: ['right', 'bottom'],
				})
			}

			if (
				!isIncludes([y_текущий, x_текущий + 1]) &&
				!isIncludes([y_текущий - 1, x_текущий])
			) {
				const y_пиксели =
					40 * y_текущий +
					2 * (y_текущий - Math.floor(y_текущий / 3)) +
					4 * Math.floor(y_текущий / 3) +
					2
				const x_пиксели =
					40 * x_текущий +
					2 * (x_текущий - Math.floor(x_текущий / 3)) +
					4 * Math.floor(x_текущий / 3) +
					38
				список_точек.push({
					yx: [y_пиксели, x_пиксели],
					relative: ['left', 'bottom'],
				})
			}
			if (
				isIncludes([y_текущий, x_текущий + 1]) &&
				isIncludes([y_текущий - 1, x_текущий]) &&
				!isIncludes([y_текущий - 1, x_текущий + 1])
			) {
				const y_пиксели =
					40 * y_текущий +
					2 * (y_текущий - Math.floor(y_текущий / 3)) +
					4 * Math.floor(y_текущий / 3) +
					2
				const x_пиксели =
					40 * x_текущий +
					2 * (x_текущий - Math.floor(x_текущий / 3)) +
					4 * Math.floor(x_текущий / 3) +
					38
				список_точек.push({
					yx: [y_пиксели, x_пиксели],
					relative: ['top', 'right'],
				})
			}
		}

		return список_точек
	}

	const getPointsWithSequence = (
		список_точек: {
			yx: number[]
			relative: ('top' | 'left' | 'bottom' | 'right')[]
		}[]
	) => {
		список_точек.sort((a, b) => {
			if (a.yx[1] !== b.yx[1]) {
				return a.yx[1] - b.yx[1]
			}
			return a.yx[0] - b.yx[0]
		})

		список_точек.map(точка => {
			return { ...точка, yx: [точка.yx[1], точка.yx[0]] }
		})

		const новый_список_точек: number[][] = []
		let текущая_точка = список_точек[0]

		новый_список_точек.push(текущая_точка.yx)

		for (let i = 0; i < список_точек.length; i++) {
			if (текущая_точка.relative.includes('right')) {
				const arr = список_точек.filter(
					point =>
						point.yx[1] > текущая_точка.yx[1] &&
						point.yx[0] === текущая_точка.yx[0]
				)
				const indexOfMax = arr.reduce((maxIndex, item, index) => {
					if (item.yx[1] < arr[maxIndex].yx[1]) {
						return index
					}
					return maxIndex
				}, 0)
				новый_список_точек.push(arr[indexOfMax].yx)

				const indexRelative = текущая_точка.relative.indexOf('right')
				текущая_точка.relative.splice(indexRelative, 1)

				текущая_точка = arr[indexOfMax]
				const indexNewRelative = текущая_точка.relative.indexOf('left')
				текущая_точка.relative.splice(indexNewRelative, 1)
			} else if (текущая_точка.relative.includes('bottom')) {
				const arr = список_точек.filter(
					point =>
						point.yx[0] > текущая_точка.yx[0] &&
						point.yx[1] === текущая_точка.yx[1]
				)
				const indexOfMax = arr.reduce((maxIndex, item, index) => {
					if (item.yx[0] < arr[maxIndex].yx[0]) {
						return index
					}
					return maxIndex
				}, 0)
				новый_список_точек.push(arr[indexOfMax].yx)

				const indexRelative = текущая_точка.relative.indexOf('bottom')
				текущая_точка.relative.splice(indexRelative, 1)

				текущая_точка = arr[indexOfMax]
				const indexNewRelative = текущая_точка.relative.indexOf('top')
				текущая_точка.relative.splice(indexNewRelative, 1)
			} else if (текущая_точка.relative.includes('left')) {
				const arr = список_точек.filter(
					point =>
						point.yx[1] < текущая_точка.yx[1] &&
						point.yx[0] === текущая_точка.yx[0]
				)
				const indexOfMax = arr.reduce((maxIndex, item, index) => {
					if (item.yx[1] > arr[maxIndex].yx[1]) {
						return index
					}
					return maxIndex
				}, 0)
				новый_список_точек.push(arr[indexOfMax].yx)

				const indexRelative = текущая_точка.relative.indexOf('left')
				текущая_точка.relative.splice(indexRelative, 1)

				текущая_точка = arr[indexOfMax]
				const indexNewRelative = текущая_точка.relative.indexOf('right')
				текущая_точка.relative.splice(indexNewRelative, 1)
			} else if (текущая_точка.relative.includes('top')) {
				const arr = список_точек.filter(
					point =>
						point.yx[0] < текущая_точка.yx[0] &&
						point.yx[1] === текущая_точка.yx[1]
				)
				const indexOfMax = arr.reduce((maxIndex, item, index) => {
					if (item.yx[1] > arr[maxIndex].yx[1]) {
						return index
					}
					return maxIndex
				}, 0)
				новый_список_точек.push(arr[indexOfMax].yx)

				const indexRelative = текущая_точка.relative.indexOf('top')
				текущая_точка.relative.splice(indexRelative, 1)

				текущая_точка = arr[indexOfMax]
				const indexNewRelative =
					текущая_точка.relative.indexOf('bottom')
				текущая_точка.relative.splice(indexNewRelative, 1)
			}
		}
		новый_список_точек[0] = [
			новый_список_точек[0][0],
			новый_список_точек[0][1] + 10,
		]
		новый_список_точек[новый_список_точек.length - 1] = [
			новый_список_точек[новый_список_точек.length - 1][0] + 14,
			новый_список_точек[новый_список_точек.length - 1][1],
		]

		return новый_список_точек
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
							console.log(arrayPoints[0])
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
											strokeDasharray='4 6'
											strokeDashoffset='0'
										/>
									</svg>
									<span
										className='sudoku_grid_singleArea_sum'
										style={{
											top: `${arrayPoints[0][1] - 12}px`,
											left: `${arrayPoints[0][0] - 2}px`,
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
