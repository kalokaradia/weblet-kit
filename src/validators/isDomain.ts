export function isDomain(text: unknown): boolean {
	if (typeof text !== "string") return false;
	const domain = text.trim().toLowerCase();
	if (domain.length > 253) return false;

	const labels = domain.split(".");
	if (labels.length < 2) return false;

	return labels.every((label, i) => {
		if (label.length === 0 || label.length > 63) return false;
		if (label.startsWith("-") || label.endsWith("-")) return false;
		if (i === labels.length - 1 && !/^[a-zA-Z]{2,}$/.test(label))
			return false; // TLD harus huruf saja
		return /^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/.test(label);
	});
}
