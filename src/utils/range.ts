export const range = (
	start: number,
	end: number,
	step: number = 1,
): number[] => {
	if (typeof start !== "number" || typeof end !== "number") return [];
	if (typeof step !== "number" || step === 0) return [];

	const result: number[] = [];
	if (start < end && step > 0) {
		for (let i = start; i < end; i += step) {
			result.push(i);
		}
	} else if (start > end && step < 0) {
		for (let i = start; i > end; i += step) {
			result.push(i);
		}
	}
	return result;
};

// 2.0.0
