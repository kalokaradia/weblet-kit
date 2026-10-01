export function isNumeric(text: unknown): boolean {
	if (typeof text !== "string") return false;
	return /^[0-9]+$/.test(text.trim());
}
