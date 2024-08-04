export const useSplitToSections = (
	numberString: string,
	typeSplit: 'grid' | 'sections'
) => {
	if (numberString.length !== 81) {
		return []
	}

	const grid = []

	for (let i = 0; i < 9; i++) {
		const row = []
		for (let j = 0; j < 9; j++) {
			const index = i * 9 + j
			row.push(numberString[index])
		}
		grid.push(row)
	}

	if (typeSplit === 'grid') {
		return grid
	}

	const sections = []

	for (let secRow = 0; secRow < 3; secRow++) {
		for (let secCol = 0; secCol < 3; secCol++) {
			const section = []
			for (let i = 0; i < 3; i++) {
				const row = grid[secRow * 3 + i].slice(
					secCol * 3,
					secCol * 3 + 3
				)
				section.push(...row)
			}
			sections.push(section)
		}
	}

	return sections
}
