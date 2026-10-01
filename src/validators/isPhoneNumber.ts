export function isPhoneNumber(text: unknown): boolean {
	if (typeof text !== "string") return false;
	const cleaned = text.replace(/[\s\-\(\)]/g, "");
	const phoneRegex = /^\+?[1-9]\d{9,14}$/;
	return phoneRegex.test(cleaned);
}
