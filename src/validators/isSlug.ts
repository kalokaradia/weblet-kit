export const isSlug = (str: unknown): boolean => {
	if (typeof str !== "string") return false;

	const input = str.trim();
	if (!input) return false;

	const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

	return slugPattern.test(input);
};
