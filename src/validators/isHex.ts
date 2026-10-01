export function isHex(input: unknown): boolean {
	if (typeof input !== "string") return false;

	const str = input.trim();

	// Valid hex: optional "0x" prefix, then 1+ hex digits
	return /^(0x)?[0-9a-fA-F]+$/.test(str);
}
