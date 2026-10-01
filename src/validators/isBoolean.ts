export const isBoolean = (val: unknown): boolean => {
	return typeof val === "boolean" || val === "true" || val === "false";
};
