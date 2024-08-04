export const useArrayIncludes = <T>(haystack: unknown[], needle: T[]) => {
	return haystack.some(
		innerArray => JSON.stringify(innerArray) === JSON.stringify(needle)
	)
}
