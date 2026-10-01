export function isAscii(
	input: unknown,
	mode: "ascii" | "printable" | "extended" = "ascii"
): boolean {
	if (typeof input !== "string") return false;

	const ranges = {
		ascii: /^[\x00-\x7F]*$/, // 0–127 → Full ASCII
		printable: /^[\x20-\x7E]*$/, // 32–126 → Printable characters
		extended: /^[\x00-\xFF]*$/, // 0–255 → Extended ASCII
	};

	return ranges[mode].test(input);
}
