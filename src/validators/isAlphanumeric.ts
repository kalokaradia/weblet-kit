export const isAlphanumeric = (str: unknown): boolean => {
	if (typeof str !== "string") return false;
	return /^[a-z0-9]+$/i.test(str.trim());
};

// 1.2.0
