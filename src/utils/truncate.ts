export function truncate(input: unknown, maxLength: number): string {
	if (
		typeof input !== "string" ||
		typeof maxLength !== "number" ||
		maxLength < 0
	)
		return "";

	const str = input.trim();
	if (str.length <= maxLength) return str;

	return str.slice(0, maxLength - 3) + "...";
}
