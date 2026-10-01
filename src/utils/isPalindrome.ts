export const isPalindrome = (str: string): boolean => {
	if (typeof str !== "string") return false;
	const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
	return cleaned === cleaned.split("").reverse().join("");
};

// 1.2.0
