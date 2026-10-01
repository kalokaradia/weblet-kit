export const escapeHTML = (str: string): string => {
	if (typeof str !== "string" || str.length === 0) return "";
	const replacements: Record<string, string> = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&#39;",
	};
	return str.replace(/[&<>"']/g, (match) => replacements[match]);
};
