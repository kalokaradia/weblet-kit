export const arrayMax = (arr: number[]): number | undefined => {
	if (!Array.isArray(arr) || arr.length === 0) return undefined;
	return Math.max(...arr);
};
