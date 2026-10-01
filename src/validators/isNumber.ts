export const isNumber = (val: unknown): boolean => {
	return typeof val === "number" && !isNaN(val) && isFinite(val);
};
