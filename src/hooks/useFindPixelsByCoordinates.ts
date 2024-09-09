import {
	COUNT_SECTIONS,
	INDENT_BETWEEN_CELLS,
	INDENT_BETWEEN_SECTION_CELLS,
	SIZE_CELL,
} from '../settings/constants'

export const useFindPixelsByCoordinates = (coordinate: number) => {
	return (
		SIZE_CELL * coordinate +
		INDENT_BETWEEN_CELLS *
			(coordinate - Math.floor(coordinate / COUNT_SECTIONS)) +
		INDENT_BETWEEN_SECTION_CELLS * Math.floor(coordinate / COUNT_SECTIONS)
	)
}
