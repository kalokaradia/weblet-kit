export const chunkArray = <T>(array: T[], size: number): T[][] => {
	if (!Array.isArray(array)) return [];
	if (typeof size !== "number" || size <= 0) return [];

	const result: T[][] = [];
	for (let i = 0; i < array.length; i += size) {
		result.push(array.slice(i, i + size));
	}
	return result;
};
