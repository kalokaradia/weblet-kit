export function isFileExtension(input: unknown): boolean {
	if (typeof input !== "string") return false;

	// Ekstensi umum: alfanumerik, boleh ada titik di depan
	const extRegex = /^\.?[a-zA-Z0-9]+$/;

	return extRegex.test(input.trim());
}
