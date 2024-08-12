import { useArrayIncludes } from './hooks/useArrayIncludes'
import { useSplitToSections } from './hooks/useSplitToSections'
import { generateKillerSudoku } from 'killer-sudoku-generator'

function App() {
	const sudoku = generateKillerSudoku('medium')

	const { puzzle, solution, areas, difficulty } = sudoku
	console.log(sudoku)

	const splitNumbers = useSplitToSections(puzzle, 'sections')

	const AREAS = [ { cells: [ [1, 2], [1, 3], [1, 4], [2, 4], [3, 4], [3, 3], [4, 3], ], sum: 31, }, { cells: [ [8, 3], [8, 4], [8, 5], [7, 5], [7, 4], [6, 4], [6, 5], ], sum: 30, }, { cells: [ [4, 4], [4, 5], [5, 5], [5, 4], [5, 3], [5, 2], [4, 2], ], sum: 32, }, { cells: [ [0, 4], [0, 3], [0, 2], ], sum: 13, }, { cells: [ [4, 1], [4, 0], [3, 0], [3, 1], [2, 1], [2, 2], ], sum: 29, }, { cells: [ [1, 0], [2, 0], ], sum: 10, }, { cells: [ [1, 1], [0, 1], [0, 0], ], sum: 21, }, { cells: [ [7, 6], [6, 6], [6, 7], [6, 8], [7, 8], ], sum: 22, }, { cells: [ [8, 7], [8, 8], ], sum: 9, }, { cells: [ [5, 1], [6, 1], [7, 1], ], sum: 14, }, { cells: [ [3, 8], [4, 8], ], sum: 12, }, { cells: [ [1, 6], [1, 5], [0, 5], [0, 6], [0, 7], [0, 8], ], sum: 32, }, { cells: [ [5, 0], [6, 0], [7, 0], ], sum: 14, }, { cells: [[8, 6]], sum: 6 }, { cells: [ [6, 2], [6, 3], ], sum: 9, }, { cells: [ [3, 5], [3, 6], [4, 6], [4, 7], [3, 7], ], sum: 20, }, { cells: [ [8, 0], [8, 1], [8, 2], [7, 2], ], sum: 21, }, { cells: [[2, 3]], sum: 1 }, { cells: [ [1, 7], [1, 8], [2, 8], ], sum: 11, }, { cells: [[3, 2]], sum: 8 }, { cells: [ [5, 8], [5, 7], [5, 6], ], sum: 22, }, { cells: [ [2, 5], [2, 6], ], sum: 15, }, { cells: [[7, 7]], sum: 8 }, { cells: [[7, 3]], sum: 9 }, { cells: [[2, 7]], sum: 6 } ]

	//const getPointsWithRelative = (ariaCells: number[][]) => {
	//	const список_точек: {
	//		yx: number[]
	//		relative: ('top' | 'left' | 'bottom' | 'right')[]
	//	}[] = []

	//	for (let i = 0; i < ariaCells.length; i++) {
	//		const текущая_клетка = ariaCells[i]
	//		const [y_текущий, x_текущий] = текущая_клетка

	//		const isIncludes = (array: number[]) => {
	//			return useArrayIncludes(ariaCells, array)
	//		}

	//		if (
	//			!isIncludes([y_текущий - 1, x_текущий]) &&
	//			!isIncludes([y_текущий, x_текущий - 1])
	//		) {
	//			const y_пиксели =
	//				40 * y_текущий +
	//				2 * (y_текущий - Math.floor(y_текущий / 3)) +
	//				4 * Math.floor(y_текущий / 3) +
	//				2
	//			const x_пиксели =
	//				40 * x_текущий +
	//				2 * (x_текущий - Math.floor(x_текущий / 3)) +
	//				4 * Math.floor(x_текущий / 3) +
	//				2

	//			список_точек.push({
	//				yx: [y_пиксели, x_пиксели],
	//				relative: ['right', 'bottom'],
	//			})
	//		}
	//		if (
	//			isIncludes([y_текущий - 1, x_текущий]) &&
	//			isIncludes([y_текущий, x_текущий - 1]) &&
	//			!isIncludes([y_текущий - 1, x_текущий - 1])
	//		) {
	//			const y_пиксели =
	//				40 * y_текущий +
	//				2 * (y_текущий - Math.floor(y_текущий / 3)) +
	//				4 * Math.floor(y_текущий / 3) +
	//				2
	//			const x_пиксели =
	//				40 * x_текущий +
	//				2 * (x_текущий - Math.floor(x_текущий / 3)) +
	//				4 * Math.floor(x_текущий / 3) +
	//				2
	//			список_точек.push({
	//				yx: [y_пиксели, x_пиксели],
	//				relative: ['top', 'left'],
	//			})
	//		}

	//		if (
	//			!isIncludes([y_текущий, x_текущий - 1]) &&
	//			!isIncludes([y_текущий + 1, x_текущий])
	//		) {
	//			const y_пиксели =
	//				40 * y_текущий +
	//				2 * (y_текущий - Math.floor(y_текущий / 3)) +
	//				4 * Math.floor(y_текущий / 3) +
	//				38
	//			const x_пиксели =
	//				40 * x_текущий +
	//				2 * (x_текущий - Math.floor(x_текущий / 3)) +
	//				4 * Math.floor(x_текущий / 3) +
	//				2
	//			список_точек.push({
	//				yx: [y_пиксели, x_пиксели],
	//				relative: ['top', 'right'],
	//			})
	//		}
	//		if (
	//			isIncludes([y_текущий, x_текущий - 1]) &&
	//			isIncludes([y_текущий + 1, x_текущий]) &&
	//			!isIncludes([y_текущий + 1, x_текущий - 1])
	//		) {
	//			const y_пиксели =
	//				40 * y_текущий +
	//				2 * (y_текущий - Math.floor(y_текущий / 3)) +
	//				4 * Math.floor(y_текущий / 3) +
	//				38
	//			const x_пиксели =
	//				40 * x_текущий +
	//				2 * (x_текущий - Math.floor(x_текущий / 3)) +
	//				4 * Math.floor(x_текущий / 3) +
	//				2
	//			список_точек.push({
	//				yx: [y_пиксели, x_пиксели],
	//				relative: ['left', 'bottom'],
	//			})
	//		}

	//		if (
	//			!isIncludes([y_текущий + 1, x_текущий]) &&
	//			!isIncludes([y_текущий, x_текущий + 1])
	//		) {
	//			const y_пиксели =
	//				40 * y_текущий +
	//				2 * (y_текущий - Math.floor(y_текущий / 3)) +
	//				4 * Math.floor(y_текущий / 3) +
	//				38
	//			const x_пиксели =
	//				40 * x_текущий +
	//				2 * (x_текущий - Math.floor(x_текущий / 3)) +
	//				4 * Math.floor(x_текущий / 3) +
	//				38
	//			список_точек.push({
	//				yx: [y_пиксели, x_пиксели],
	//				relative: ['top', 'left'],
	//			})
	//		}
	//		if (
	//			isIncludes([y_текущий + 1, x_текущий]) &&
	//			isIncludes([y_текущий, x_текущий + 1]) &&
	//			!isIncludes([y_текущий + 1, x_текущий + 1])
	//		) {
	//			const y_пиксели =
	//				40 * y_текущий +
	//				2 * (y_текущий - Math.floor(y_текущий / 3)) +
	//				4 * Math.floor(y_текущий / 3) +
	//				38
	//			const x_пиксели =
	//				40 * x_текущий +
	//				2 * (x_текущий - Math.floor(x_текущий / 3)) +
	//				4 * Math.floor(x_текущий / 3) +
	//				38
	//			список_точек.push({
	//				yx: [y_пиксели, x_пиксели],
	//				relative: ['right', 'bottom'],
	//			})
	//		}

	//		if (
	//			!isIncludes([y_текущий, x_текущий + 1]) &&
	//			!isIncludes([y_текущий - 1, x_текущий])
	//		) {
	//			const y_пиксели =
	//				40 * y_текущий +
	//				2 * (y_текущий - Math.floor(y_текущий / 3)) +
	//				4 * Math.floor(y_текущий / 3) +
	//				2
	//			const x_пиксели =
	//				40 * x_текущий +
	//				2 * (x_текущий - Math.floor(x_текущий / 3)) +
	//				4 * Math.floor(x_текущий / 3) +
	//				38
	//			список_точек.push({
	//				yx: [y_пиксели, x_пиксели],
	//				relative: ['left', 'bottom'],
	//			})
	//		}
	//		if (
	//			isIncludes([y_текущий, x_текущий + 1]) &&
	//			isIncludes([y_текущий - 1, x_текущий]) &&
	//			!isIncludes([y_текущий - 1, x_текущий + 1])
	//		) {
	//			const y_пиксели =
	//				40 * y_текущий +
	//				2 * (y_текущий - Math.floor(y_текущий / 3)) +
	//				4 * Math.floor(y_текущий / 3) +
	//				2
	//			const x_пиксели =
	//				40 * x_текущий +
	//				2 * (x_текущий - Math.floor(x_текущий / 3)) +
	//				4 * Math.floor(x_текущий / 3) +
	//				38
	//			список_точек.push({
	//				yx: [y_пиксели, x_пиксели],
	//				relative: ['top', 'right'],
	//			})
	//		}
	//	}

	//	return список_точек
	//}

	//const getPointsWithSequence = (
	//	список_точек: {
	//		yx: number[]
	//		relative: ('top' | 'left' | 'bottom' | 'right')[]
	//	}[]
	//) => {
	//	список_точек.sort((a, b) => {
	//		if (a.yx[1] !== b.yx[1]) {
	//			return a.yx[1] - b.yx[1]
	//		}
	//		return a.yx[0] - b.yx[0]
	//	})

	//	список_точек.map(точка => {
	//		return { ...точка, yx: [точка.yx[1], точка.yx[0]] }
	//	})

	//	const новый_список_точек: number[][] = []
	//	let текущая_точка = список_точек[0]

	//	новый_список_точек.push(текущая_точка.yx)

	//	for (let i = 0; i < список_точек.length; i++) {
	//		if (текущая_точка.relative.includes('right')) {
	//			const arr = список_точек.filter(
	//				point =>
	//					point.yx[1] > текущая_точка.yx[1] &&
	//					point.yx[0] === текущая_точка.yx[0]
	//			)
	//			const indexOfMax = arr.reduce((maxIndex, item, index) => {
	//				if (item.yx[1] < arr[maxIndex].yx[1]) {
	//					return index
	//				}
	//				return maxIndex
	//			}, 0)
	//			новый_список_точек.push(arr[indexOfMax].yx)

	//			const indexRelative = текущая_точка.relative.indexOf('right')
	//			текущая_точка.relative.splice(indexRelative, 1)

	//			текущая_точка = arr[indexOfMax]
	//			const indexNewRelative = текущая_точка.relative.indexOf('left')
	//			текущая_точка.relative.splice(indexNewRelative, 1)
	//		} else if (текущая_точка.relative.includes('bottom')) {
	//			const arr = список_точек.filter(
	//				point =>
	//					point.yx[0] > текущая_точка.yx[0] &&
	//					point.yx[1] === текущая_точка.yx[1]
	//			)
	//			const indexOfMax = arr.reduce((maxIndex, item, index) => {
	//				if (item.yx[0] < arr[maxIndex].yx[0]) {
	//					return index
	//				}
	//				return maxIndex
	//			}, 0)
	//			новый_список_точек.push(arr[indexOfMax].yx)

	//			const indexRelative = текущая_точка.relative.indexOf('bottom')
	//			текущая_точка.relative.splice(indexRelative, 1)

	//			текущая_точка = arr[indexOfMax]
	//			const indexNewRelative = текущая_точка.relative.indexOf('top')
	//			текущая_точка.relative.splice(indexNewRelative, 1)
	//		} else if (текущая_точка.relative.includes('left')) {
	//			const arr = список_точек.filter(
	//				point =>
	//					point.yx[1] < текущая_точка.yx[1] &&
	//					point.yx[0] === текущая_точка.yx[0]
	//			)
	//			const indexOfMax = arr.reduce((maxIndex, item, index) => {
	//				if (item.yx[1] > arr[maxIndex].yx[1]) {
	//					return index
	//				}
	//				return maxIndex
	//			}, 0)
	//			новый_список_точек.push(arr[indexOfMax].yx)

	//			const indexRelative = текущая_точка.relative.indexOf('left')
	//			текущая_точка.relative.splice(indexRelative, 1)

	//			текущая_точка = arr[indexOfMax]
	//			const indexNewRelative = текущая_точка.relative.indexOf('right')
	//			текущая_точка.relative.splice(indexNewRelative, 1)
	//		} else if (текущая_точка.relative.includes('top')) {
	//			const arr = список_точек.filter(
	//				point =>
	//					point.yx[0] < текущая_точка.yx[0] &&
	//					point.yx[1] === текущая_точка.yx[1]
	//			)
	//			const indexOfMax = arr.reduce((maxIndex, item, index) => {
	//				if (item.yx[1] > arr[maxIndex].yx[1]) {
	//					return index
	//				}
	//				return maxIndex
	//			}, 0)
	//			новый_список_точек.push(arr[indexOfMax].yx)

	//			const indexRelative = текущая_точка.relative.indexOf('top')
	//			текущая_точка.relative.splice(indexRelative, 1)

	//			текущая_точка = arr[indexOfMax]
	//			const indexNewRelative =
	//				текущая_точка.relative.indexOf('bottom')
	//			текущая_точка.relative.splice(indexNewRelative, 1)
	//		}
	//	}
	//	новый_список_точек[0] = [
	//		новый_список_точек[0][0],
	//		новый_список_точек[0][1] + 10,
	//	]
	//	новый_список_точек[новый_список_точек.length - 1] = [
	//		новый_список_точек[новый_список_точек.length - 1][0] + 14,
	//		новый_список_точек[новый_список_точек.length - 1][1],
	//	]

	//	return новый_список_точек
	//}
	const getPointsWithRelative = (ariaCells: number[][]) => {
		const список_точек: {
			xy: number[]
			relative: ('top' | 'left' | 'bottom' | 'right')[]
		}[] = []

		for (let i = 0; i < ariaCells.length; i++) {
			const текущая_клетка = ariaCells[i]
			const [x_текущий, y_текущий] = текущая_клетка

			const isIncludes = (array: number[]) => {
				return useArrayIncludes(ariaCells, array)
			}

			if (
				!isIncludes([x_текущий, y_текущий - 1]) &&
				!isIncludes([x_текущий - 1, y_текущий])
			) {
				const x_пиксели =
					40 * x_текущий +
					2 * (x_текущий - Math.floor(x_текущий / 3)) +
					4 * Math.floor(x_текущий / 3) +
					2
				const y_пиксели =
					40 * y_текущий +
					2 * (y_текущий - Math.floor(y_текущий / 3)) +
					4 * Math.floor(y_текущий / 3) +
					2

				список_точек.push({
					xy: [x_пиксели, y_пиксели],
					relative: ['right', 'bottom'],
				})
			}
			if (
				isIncludes([x_текущий, y_текущий - 1]) &&
				isIncludes([x_текущий - 1, y_текущий]) &&
				!isIncludes([x_текущий - 1, y_текущий - 1])
			) {
				const x_пиксели =
					40 * x_текущий +
					2 * (x_текущий - Math.floor(x_текущий / 3)) +
					4 * Math.floor(x_текущий / 3) +
					2
				const y_пиксели =
					40 * y_текущий +
					2 * (y_текущий - Math.floor(y_текущий / 3)) +
					4 * Math.floor(y_текущий / 3) +
					2
				список_точек.push({
					xy: [x_пиксели, y_пиксели],
					relative: ['top', 'left'],
				})
			}

			if (
				!isIncludes([x_текущий - 1, y_текущий]) &&
				!isIncludes([x_текущий, y_текущий + 1])
			) {
				const x_пиксели =
					40 * x_текущий +
					2 * (x_текущий - Math.floor(x_текущий / 3)) +
					4 * Math.floor(x_текущий / 3) +
					2
				const y_пиксели =
					40 * y_текущий +
					2 * (y_текущий - Math.floor(y_текущий / 3)) +
					4 * Math.floor(y_текущий / 3) +
					38
				список_точек.push({
					xy: [x_пиксели, y_пиксели],
					relative: ['top', 'right'],
				})
			}
			if (
				isIncludes([x_текущий - 1, y_текущий]) &&
				isIncludes([x_текущий, y_текущий + 1]) &&
				!isIncludes([x_текущий - 1, y_текущий + 1])
			) {
				const x_пиксели =
					40 * x_текущий +
					2 * (x_текущий - Math.floor(x_текущий / 3)) +
					4 * Math.floor(x_текущий / 3) +
					2
				const y_пиксели =
					40 * y_текущий +
					2 * (y_текущий - Math.floor(y_текущий / 3)) +
					4 * Math.floor(y_текущий / 3) +
					38
				список_точек.push({
					xy: [x_пиксели, y_пиксели],
					relative: ['left', 'bottom'],
				})
			}

			if (
				!isIncludes([x_текущий, y_текущий + 1]) &&
				!isIncludes([x_текущий + 1, y_текущий])
			) {
				const x_пиксели =
					40 * x_текущий +
					2 * (x_текущий - Math.floor(x_текущий / 3)) +
					4 * Math.floor(x_текущий / 3) +
					38
				const y_пиксели =
					40 * y_текущий +
					2 * (y_текущий - Math.floor(y_текущий / 3)) +
					4 * Math.floor(y_текущий / 3) +
					38
				список_точек.push({
					xy: [x_пиксели, y_пиксели],
					relative: ['top', 'left'],
				})
			}
			if (
				isIncludes([x_текущий, y_текущий + 1]) &&
				isIncludes([x_текущий + 1, y_текущий]) &&
				!isIncludes([x_текущий + 1, y_текущий + 1])
			) {
				const x_пиксели =
					40 * x_текущий +
					2 * (x_текущий - Math.floor(x_текущий / 3)) +
					4 * Math.floor(x_текущий / 3) +
					38
				const y_пиксели =
					40 * y_текущий +
					2 * (y_текущий - Math.floor(y_текущий / 3)) +
					4 * Math.floor(y_текущий / 3) +
					38
				список_точек.push({
					xy: [x_пиксели, y_пиксели],
					relative: ['right', 'bottom'],
				})
			}

			if (
				!isIncludes([x_текущий + 1, y_текущий]) &&
				!isIncludes([x_текущий, y_текущий - 1])
			) {
				const x_пиксели =
					40 * x_текущий +
					2 * (x_текущий - Math.floor(x_текущий / 3)) +
					4 * Math.floor(x_текущий / 3) +
					38
				const y_пиксели =
					40 * y_текущий +
					2 * (y_текущий - Math.floor(y_текущий / 3)) +
					4 * Math.floor(y_текущий / 3) +
					2
				список_точек.push({
					xy: [x_пиксели, y_пиксели],
					relative: ['left', 'bottom'],
				})
			}
			if (
				isIncludes([x_текущий + 1, y_текущий]) &&
				isIncludes([x_текущий, y_текущий - 1]) &&
				!isIncludes([x_текущий + 1, y_текущий - 1])
			) {
				const x_пиксели =
					40 * x_текущий +
					2 * (x_текущий - Math.floor(x_текущий / 3)) +
					4 * Math.floor(x_текущий / 3) +
					38
				const y_пиксели =
					40 * y_текущий +
					2 * (y_текущий - Math.floor(y_текущий / 3)) +
					4 * Math.floor(y_текущий / 3) +
					2
				список_точек.push({
					xy: [x_пиксели, y_пиксели],
					relative: ['top', 'right'],
				})
			}
		}

		return список_точек
	}

	const getPointsWithSequence = (
		список_точек: {
			xy: number[]
			relative: ('top' | 'left' | 'bottom' | 'right')[]
		}[]
	) => {
		список_точек.sort((a, b) => {
			if (a.xy[0] !== b.xy[0]) {
				return a.xy[0] - b.xy[0]
			}
			return a.xy[1] - b.xy[1]
		})

		список_точек.map(точка => {
			return { ...точка, xy: [точка.xy[0], точка.xy[1]] }
		})

		const новый_список_точек: number[][] = []
		let текущая_точка = список_точек[0]

		новый_список_точек.push(текущая_точка.xy)

		for (let i = 0; i < список_точек.length; i++) {
			if (текущая_точка.relative.includes('right')) {
				const arr = список_точек.filter(
					point =>
						point.xy[0] > текущая_точка.xy[0] &&
						point.xy[1] === текущая_точка.xy[1]
				)
				const indexOfMax = arr.reduce((maxIndex, item, index) => {
					if (item.xy[0] < arr[maxIndex].xy[0]) {
						return index
					}
					return maxIndex
				}, 0)
				новый_список_точек.push(arr[indexOfMax].xy)

				const indexRelative = текущая_точка.relative.indexOf('right')
				текущая_точка.relative.splice(indexRelative, 1)

				текущая_точка = arr[indexOfMax]
				const indexNewRelative = текущая_точка.relative.indexOf('left')
				текущая_точка.relative.splice(indexNewRelative, 1)
			} else if (текущая_точка.relative.includes('bottom')) {
				const arr = список_точек.filter(
					point =>
						point.xy[1] > текущая_точка.xy[1] &&
						point.xy[0] === текущая_точка.xy[0]
				)
				const indexOfMax = arr.reduce((maxIndex, item, index) => {
					if (item.xy[1] < arr[maxIndex].xy[1]) {
						return index
					}
					return maxIndex
				}, 0)
				новый_список_точек.push(arr[indexOfMax].xy)

				const indexRelative = текущая_точка.relative.indexOf('bottom')
				текущая_точка.relative.splice(indexRelative, 1)

				текущая_точка = arr[indexOfMax]
				const indexNewRelative = текущая_точка.relative.indexOf('top')
				текущая_точка.relative.splice(indexNewRelative, 1)
			} else if (текущая_точка.relative.includes('left')) {
				const arr = список_точек.filter(
					point =>
						point.xy[0] < текущая_точка.xy[0] &&
						point.xy[1] === текущая_точка.xy[1]
				)
				const indexOfMax = arr.reduce((maxIndex, item, index) => {
					if (item.xy[0] > arr[maxIndex].xy[0]) {
						return index
					}
					return maxIndex
				}, 0)
				новый_список_точек.push(arr[indexOfMax].xy)

				const indexRelative = текущая_точка.relative.indexOf('left')
				текущая_точка.relative.splice(indexRelative, 1)

				текущая_точка = arr[indexOfMax]
				const indexNewRelative = текущая_точка.relative.indexOf('right')
				текущая_точка.relative.splice(indexNewRelative, 1)
			} else if (текущая_точка.relative.includes('top')) {
				const arr = список_точек.filter(
					point =>
						point.xy[1] < текущая_точка.xy[1] &&
						point.xy[0] === текущая_точка.xy[0]
				)
				const indexOfMax = arr.reduce((maxIndex, item, index) => {
					if (item.xy[0] > arr[maxIndex].xy[0]) {
						return index
					}
					return maxIndex
				}, 0)
				новый_список_точек.push(arr[indexOfMax].xy)

				const indexRelative = текущая_точка.relative.indexOf('top')
				текущая_точка.relative.splice(indexRelative, 1)

				текущая_точка = arr[indexOfMax]
				const indexNewRelative =
					текущая_точка.relative.indexOf('bottom')
				текущая_точка.relative.splice(indexNewRelative, 1)
			}
		}
		новый_список_точек[0] = [
			новый_список_точек[0][0] + 14,
			новый_список_точек[0][1],
		]
		новый_список_точек[новый_список_точек.length - 1] = [
			новый_список_точек[новый_список_точек.length - 1][0],
			новый_список_точек[новый_список_точек.length - 1][1] + 10,
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
			</div>
		</div>
	)
}

export default App
