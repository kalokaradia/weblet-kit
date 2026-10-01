export function generateRandomInt(min: number, max: number): number {
	if (!Number.isInteger(min) || !Number.isInteger(max))
		throw new Error("Both min and max must be integers.");
	if (max < min) throw new Error("max must be greater than or equal to min.");

	return Math.floor(Math.random() * (max - min + 1)) + min;
}
