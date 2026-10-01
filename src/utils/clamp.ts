export const clamp = (value: number, min: number, max: number): number => {
	if (![value, min, max].every(Number.isFinite)) return NaN;

	// Automatically swap if parameters are out of order
	if (min > max) [min, max] = [max, min];

	return Math.min(Math.max(value, min), max);
};
