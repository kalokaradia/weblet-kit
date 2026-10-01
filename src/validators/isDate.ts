export const isDate = (val: unknown): boolean => {
	if (val instanceof Date) {
		return !isNaN(val.getTime());
	}
	if (typeof val === "string" || typeof val === "number") {
		const d = new Date(val);
		return !isNaN(d.getTime());
	}
	return false;
};
