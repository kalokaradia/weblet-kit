export function flattenArray<T>(input: any[]): T[] {
	const result: T[] = [];

	const flatten = (arr: any[]) => {
		for (const item of arr) {
			if (Array.isArray(item)) {
				flatten(item); // recursive for arrays within arrays
			} else {
				result.push(item);
			}
		}
	};

	flatten(input);
	return result;
}
