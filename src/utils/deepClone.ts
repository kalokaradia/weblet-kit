export const deepClone = <T>(value: T): T => {
	if (value === null || typeof value !== "object") return value;

	if (Array.isArray(value)) {
		return value.map((item) => deepClone(item)) as unknown as T;
	}

	const clonedObj: Record<string, any> = {};
	for (const key in value) {
		if (Object.prototype.hasOwnProperty.call(value, key)) {
			clonedObj[key] = deepClone((value as Record<string, any>)[key]);
		}
	}
	return clonedObj as T;
};
