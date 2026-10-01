export function isTime(input: unknown): boolean {
	if (typeof input !== "string") return false;

	// 24 hours only
	const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)(:([0-5]\d))?$/;

	return timeRegex.test(input.trim());
}
