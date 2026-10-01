export function isAlpha(text: unknown): boolean {
	if (typeof text !== "string") return false;
	return /^[a-zA-Z]+$/.test(text.trim());
}
