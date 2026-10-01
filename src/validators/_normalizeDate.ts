export function _normalizeDate(date: unknown): Date | null {
	if (date instanceof Date) {
		return isNaN(date.getTime()) ? null : date;
	}
	if (typeof date === "string") {
		const trimmed = date.trim();
		if (trimmed === "") return null;
		const parsed = new Date(trimmed);
		return isNaN(parsed.getTime()) ? null : parsed;
	}
	if (typeof date === "number") {
		const parsed = new Date(date);
		return isNaN(parsed.getTime()) ? null : parsed;
	}
	return null;
}
