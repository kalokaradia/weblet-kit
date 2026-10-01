export const isLongitude = (value: unknown): boolean => {
	return (
		typeof value === "number" &&
		Number.isFinite(value) &&
		value >= -180 &&
		value <= 180
	);
};
