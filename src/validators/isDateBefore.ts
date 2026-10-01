import { _normalizeDate } from "./_normalizeDate.js";

export function isDateBefore(date: unknown, comparisonDate: unknown): boolean {
	const date1 = _normalizeDate(date);
	const date2 = _normalizeDate(comparisonDate);
	if (!date1 || !date2) return false;
	return date1 < date2;
}
