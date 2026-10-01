export function isBase64(str: unknown): boolean {
	if (typeof str !== "string") return false;

	const input = str.trim();
	if (!input) return false;

	// Standard Base64 pattern (valid characters & optional padding)
	const base64Pattern =
		/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;

	if (!base64Pattern.test(input)) return false;

	try {
		const decoded = atob(input);
		return btoa(decoded) === input;
	} catch {
		return false;
	}
}
