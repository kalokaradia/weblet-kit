export const arrayMin = (arr: number[]): number | undefined => {
	if (!Array.isArray(arr) || arr.length === 0) return undefined;
	return Math.min(...arr);
};

// 2.1.0
