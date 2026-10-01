export const average = (arr: number[]): number => {
	if (!Array.isArray(arr) || arr.length === 0) return 0;
	const sum = arr.reduce((a, b) => a + b, 0);
	return sum / arr.length;
};

// export const max = (arr: number[]): number | undefined => {
// 	if (!Array.isArray(arr) || arr.length === 0) return undefined;
// 	return Math.max(...arr);
// };

// export const min = (arr: number[]): number | undefined => {
// 	if (!Array.isArray(arr) || arr.length === 0) return undefined;
// 	return Math.min(...arr);
// };
