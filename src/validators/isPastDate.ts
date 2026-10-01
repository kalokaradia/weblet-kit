import { _normalizeDate } from "./_normalizeDate.js";

export function isPastDate(date: unknown): boolean {
	const normalized = _normalizeDate(date);
	if (!normalized) return false;
	return normalized < new Date();
}

// The commented code is retained for historical reference.
// export function isBefore(date: unknown, comparisonDate: unknown): boolean {
// 	const date1 = _normalizeDate(date);
// 	const date2 = _normalizeDate(comparisonDate);
// 	if (!date1 || !date2) return false;
// 	return date1 < date2;
// }

// export function isAfter(date: unknown, comparisonDate: unknown): boolean {
// 	const date1 = _normalizeDate(date);
// 	const date2 = _normalizeDate(comparisonDate);
// 	if (!date1 || !date2) return false;
// 	return date1 > date2;
// }

// 2.0.0
