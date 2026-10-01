import { _normalizeDate } from "./_normalizeDate.js";

export function isFutureDate(date: unknown): boolean {
	const normalized = _normalizeDate(date);
	if (!normalized) return false;
	return normalized > new Date();
}
