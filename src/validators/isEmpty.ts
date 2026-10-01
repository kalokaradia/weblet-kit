export const isEmpty = (val: unknown): boolean => {
	if (val === null || val === undefined) return true;

	if (typeof val === "string" || Array.isArray(val)) {
		return val.length === 0;
	}

	if (val instanceof Map || val instanceof Set) {
		return val.size === 0;
	}

	if (typeof val === "object" && val.constructor === Object) {
		return Object.keys(val).length === 0;
	}

	return false;
};
