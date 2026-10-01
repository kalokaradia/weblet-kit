export function arrayGroupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
	return array.reduce(
		(acc, item) => {
			const groupKey = String(item[key]); // ensure that the key is a string
			if (!acc[groupKey]) {
				acc[groupKey] = [];
			}
			acc[groupKey].push(item);
			return acc;
		},
		{} as Record<string, T[]>,
	);
}
