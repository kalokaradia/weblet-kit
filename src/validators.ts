// 1.0.0
export const isEmail = (str: unknown): boolean => {
	if (typeof str !== "string" || str.trim() === "") {
		return false;
	}

	const input = str.trim();

	// Lebih kompleks: validasi local-part dan domain, hindari karakter aneh, cek TLD minimal 2 huruf
	const emailRegex =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;

	// Hindari dua titik berturut-turut di local-part dan domain
	if (input.includes("..")) return false;

	return emailRegex.test(input);
};

export const isURL = (str: unknown): boolean => {
	if (typeof str !== "string" || str.trim() === "") {
		return false;
	}

	const input = str.trim();

	// Modern and lightweight check
	if (typeof URL.canParse === "function") {
		if (!URL.canParse(input)) return false;
		const protocol = new URL(input).protocol;
		return protocol === "http:" || protocol === "https:" || protocol === "ftp:";
	}

	// Fallback for environments without URL.canParse
	try {
		const url = new URL(input);
		return (
			url.protocol === "http:" ||
			url.protocol === "https:" ||
			url.protocol === "ftp:"
		);
	} catch {
		return false;
	}
};

export const isUUID = (str: unknown): boolean => {
	if (typeof str !== "string" || str.trim() === "") {
		return false;
	}
	const uuidRegex =
		/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
	return uuidRegex.test(str.trim());
};

export interface StrongPasswordOptions {
	minLength?: number;
	maxLength?: number;
	requireUppercase?: boolean;
	requireLowercase?: boolean;
	requireNumber?: boolean;
	requireSpecialChar?: boolean;
	specialChars?: string; // biar custom: misal "!@#$%&" aja
}

export const isStrongPassword = (
	str: unknown,
	options: StrongPasswordOptions = {},
): boolean => {
	if (typeof str !== "string") return false;
	const s = str.trim();

	const {
		minLength = 8,
		maxLength = 128,
		requireUppercase = true,
		requireLowercase = true,
		requireNumber = true,
		requireSpecialChar = true,
		specialChars = "!@#$%^&*()_+-=[]{};':\"\\|,.<>/?~`",
	} = options;

	if (s.length < minLength || s.length > maxLength) return false;

	if (requireUppercase && !/[A-Z]/.test(s)) return false;
	if (requireLowercase && !/[a-z]/.test(s)) return false;
	if (requireNumber && !/[0-9]/.test(s)) return false;
	if (requireSpecialChar && !new RegExp(`[${specialChars}]`).test(s))
		return false;

	return true;
};

// 1.1.0
export const isNumber = (val: unknown): boolean => {
	return typeof val === "number" && !isNaN(val) && isFinite(val);
};

export const isInteger = (val: unknown): boolean => {
	return typeof val === "number" && Number.isInteger(val) && isFinite(val);
};

export const isBoolean = (val: unknown): boolean => {
	return typeof val === "boolean" || val === "true" || val === "false";
};

export const isDate = (val: unknown): boolean => {
	if (val instanceof Date) {
		return !isNaN(val.getTime());
	}
	if (typeof val === "string" || typeof val === "number") {
		const d = new Date(val);
		return !isNaN(d.getTime());
	}
	return false;
};

export const isEmpty = (val: unknown): boolean => {
	if (val === null || val === undefined) return true;

	if (typeof val === "string" || Array.isArray(val)) {
		return val.length === 0;
	}

	if (val instanceof Map || val instanceof Set) {
		return val.size === 0;
	}

	if (typeof val === "object" && val.constructor === Object) {
		return Object.keys(val).length === 0;
	}

	return false;
};

export const isAlphanumeric = (str: unknown): boolean => {
	if (typeof str !== "string") return false;
	return /^[a-z0-9]+$/i.test(str.trim());
};

// 1.2.0
export function isAlpha(text: unknown): boolean {
	if (typeof text !== "string") return false;
	return /^[a-zA-Z]+$/.test(text.trim());
}

export function isNumeric(text: unknown): boolean {
	if (typeof text !== "string") return false;
	return /^[0-9]+$/.test(text.trim());
}

export function isHexColor(text: unknown): boolean {
	if (typeof text !== "string") return false;
	return /^#([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$/.test(text.trim());
}

export function isJSON(value: unknown): boolean {
	if (typeof value !== "string") return false;
	try {
		JSON.parse(value);
		return true;
	} catch {
		return false;
	}
}

export function isIP(text: unknown): boolean {
	if (typeof text !== "string") return false;
	const ip = text.trim();

	// IPv4
	const ipv4Regex = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
	if (ipv4Regex.test(ip)) {
		return ip.split(".").every((part) => {
			const num = Number(part);
			return num >= 0 && num <= 255 && String(num) === part; // Hindari "01" → 1 ≠ "01"
		});
	}

	// IPv6: Gunakan pendekatan parsing sederhana karena regex penuh sangat kompleks
	try {
		const addr = ip.includes(":") ? ip : null;
		if (!addr) return false;
		const parts = addr.split(":");
		if (parts.length > 8) return false;
		if (addr === "::") return true;
		let emptyGroupCount = 0;
		for (const part of parts) {
			if (part === "") {
				emptyGroupCount++;
				if (emptyGroupCount > 1) return false;
			} else if (!/^[0-9a-fA-F]{1,4}$/.test(part)) {
				return false;
			}
		}
		return true;
	} catch {
		return false;
	}
}

export function isDomain(text: unknown): boolean {
	if (typeof text !== "string") return false;
	const domain = text.trim().toLowerCase();
	if (domain.length > 253) return false;

	const labels = domain.split(".");
	if (labels.length < 2) return false;

	return labels.every((label, i) => {
		if (label.length === 0 || label.length > 63) return false;
		if (label.startsWith("-") || label.endsWith("-")) return false;
		if (i === labels.length - 1 && !/^[a-zA-Z]{2,}$/.test(label)) return false; // TLD harus huruf saja
		return /^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/.test(label);
	});
}

export function isPhoneNumber(text: unknown): boolean {
	if (typeof text !== "string") return false;
	const cleaned = text.replace(/[\s\-\(\)]/g, "");
	// Format internasional: +6281234567890 (minimal 10 digit setelah kode negara)
	const phoneRegex = /^\+?[1-9]\d{9,14}$/;
	return phoneRegex.test(cleaned);
}

export function isCreditCard(text: unknown): boolean {
	if (typeof text !== "string") return false;
	const cleaned = text.replace(/[^\d]/g, "");
	if (cleaned.length < 13 || cleaned.length > 19) return false;

	// Luhn algorithm
	let sum = 0;
	let isEven = false;
	for (let i = cleaned.length - 1; i >= 0; i--) {
		let digit = parseInt(cleaned[i], 10);
		if (isEven) {
			digit *= 2;
			if (digit > 9) digit -= 9;
		}
		sum += digit;
		isEven = !isEven;
	}
	return sum % 10 === 0;
}

// Helper untuk normalisasi tanggal
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

export function isFutureDate(date: unknown): boolean {
	const normalized = _normalizeDate(date);
	if (!normalized) return false;
	return normalized > new Date();
}

export function isPastDate(date: unknown): boolean {
	const normalized = _normalizeDate(date);
	if (!normalized) return false;
	return normalized < new Date();
}

// Kode yang dikomentari tetap dipertahankan sebagai referensi historis
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
export function isDateBefore(date: unknown, comparisonDate: unknown): boolean {
	const date1 = _normalizeDate(date);
	const date2 = _normalizeDate(comparisonDate);
	if (!date1 || !date2) return false;
	return date1 < date2;
}

export function isDateAfter(date: unknown, comparisonDate: unknown): boolean {
	const date1 = _normalizeDate(date);
	const date2 = _normalizeDate(comparisonDate);
	if (!date1 || !date2) return false;
	return date1 > date2;
}
