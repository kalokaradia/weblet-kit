export function toTitleCase(input: unknown): string {
	if (typeof input !== "string") return "";

	return input
		.toLowerCase()
		.replace(/\b\w+/g, (word) => word.charAt(0).toUpperCase() + word.slice(1));
}
