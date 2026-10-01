export function isHexColor(text: unknown): boolean {
	if (typeof text !== "string") return false;
	return /^#([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$/.test(text.trim());
}
