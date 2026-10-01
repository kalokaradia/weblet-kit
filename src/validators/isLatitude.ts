export const isLatitude = (value: unknown): boolean => {
	return (
		typeof value === "number" &&
		Number.isFinite(value) &&
		value >= -90 &&
		value <= 90
	);
};
