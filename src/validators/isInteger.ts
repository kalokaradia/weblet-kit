export const isInteger = (val: unknown): boolean => {
	return typeof val === "number" && Number.isInteger(val) && isFinite(val);
};
