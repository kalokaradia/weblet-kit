export function mergeDeep<T extends object, U extends object>(
	target: T,
	source: U,
): T & U {
	if (!source) return target as T & U;

	for (const key of Object.keys(source)) {
		const sourceValue = (source as Record<string, any>)[key];
		const targetValue = (target as Record<string, any>)[key];

		if (isObject(sourceValue) && isObject(targetValue)) {
			(target as Record<string, any>)[key] = mergeDeep(
				targetValue,
				sourceValue,
			);
		} else {
			(target as Record<string, any>)[key] = sourceValue;
		}
	}

	return target as T & U;
}

function isObject(value: unknown): value is Record<string, any> {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
