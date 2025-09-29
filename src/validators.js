// 1.0.0
export const isEmail = (str) => {
	if (typeof str !== "string" || str.trim() === "") {
		return false;
	}
	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	return emailRegex.test(str);
};

export const isURL = (str) => {
	if (typeof str !== "string" || str.trim() === "") {
		return false;
	}
	try {
		new URL(str);
		return true;
	} catch (e) {
		return false;
	}
};

export const isUUID = (str) => {
	if (typeof str !== "string" || str.trim() === "") {
		return false;
	}
	const uuidRegex =
		/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
	return uuidRegex.test(str);
};

export const isStrongPassword = (str) => {
	if (typeof str !== "string") return false;
	const hasMinLength = str.length >= 8;
	const hasUppercase = /[A-Z]/.test(str);
	const hasLowercase = /[a-z]/.test(str);
	const hasNumber = /[0-9]/.test(str);
	const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(str);
	return (
		hasMinLength && hasUppercase && hasLowercase && hasNumber && hasSpecialChar
	);
};

// 1.1.0
export const isNumber = (val) => {
	return typeof val === "number" && !isNaN(val);
};

export const isInteger = (val) => {
	return Number.isInteger(val);
};

export const isBoolean = (val) => {
	return typeof val === "boolean" || val === "true" || val === "false";
};

export const isDate = (val) => {
	if (Object.prototype.toString.call(val) === "[object Date]") {
		return !isNaN(val.getTime());
	}
	if (typeof val === "string" || typeof val === "number") {
		const d = new Date(val);
		return !isNaN(d.getTime());
	}
	return false;
};

export const isEmpty = (val) => {
	if (val == null) return true;
	if (typeof val === "string" || Array.isArray(val)) {
		return val.length === 0;
	}
	if (typeof val === "object") {
		return Object.keys(val).length === 0;
	}
	return false;
};

export const isAlphanumeric = (str) => {
	if (typeof str !== "string") return false;
	return /^[a-z0-9]+$/i.test(str);
};

// 1.2.0
export function isAlpha(text) {
	if (typeof text !== "string") return false;
	return /^[a-zA-Z]+$/.test(text);
}

export function isNumeric(text) {
	if (typeof text !== "string") return false;
	return /^[0-9]+$/.test(text);
}

export function isHexColor(text) {
	if (typeof text !== "string") return false;
	return /^#([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$/.test(text);
}

export function isJSON(value) {
	if (typeof value !== "string") return false;
	try {
		JSON.parse(value);
		return true;
	} catch {
		return false;
	}
}

export function isIP(text) {
	if (typeof text !== "string") return false;

	// IPv4 validation
	const ipv4Regex = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
	if (ipv4Regex.test(text)) {
		return text.split(".").every((part) => {
			const num = parseInt(part, 10);
			return num >= 0 && num <= 255 && String(num) === part;
		});
	}

	// IPv6 validation (basic)
	const ipv6Regex =
		/^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$|^::1$|^::$|^[0-9a-fA-F]{1,4}::[0-9a-fA-F]{0,4}$|^([0-9a-fA-F]{1,4}:)*::([0-9a-fA-F]{1,4}:)*[0-9a-fA-F]{1,4}$/;
	return ipv6Regex.test(text);
}

export function isDomain(text) {
	if (typeof text !== "string") return false;
	if (text.length > 253) return false;

	const domainRegex =
		/^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
	return domainRegex.test(text);
}

export function isPhoneNumber(text) {
	if (typeof text !== "string") return false;
	// Basic international phone number pattern
	const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
	return phoneRegex.test(text) && /[0-9]/.test(text);
}

export function isCreditCard(text) {
	if (typeof text !== "string") return false;

	// Remove non-digits
	const cleaned = text.replace(/[^\d]/g, "");
	if (cleaned.length < 13 || cleaned.length > 19) return false;

	// Luhn algorithm
	let sum = 0;
	let isEven = false;
	for (let i = cleaned.length - 1; i >= 0; i--) {
		let digit = parseInt(cleaned.charAt(i), 10);
		if (isEven) {
			digit *= 2;
			if (digit > 9) digit -= 9;
		}
		sum += digit;
		isEven = !isEven;
	}
	return sum % 10 === 0;
}

export function _normalizeDate(date) {
	// helper function
	if (date instanceof Date) {
		return isNaN(date.getTime()) ? null : date;
	}
	if (typeof date === "string") {
		const parsed = new Date(date);
		return isNaN(parsed.getTime()) ? null : parsed;
	}
	if (typeof date === "number") {
		const parsed = new Date(date);
		return isNaN(parsed.getTime()) ? null : parsed;
	}
	return null;
}

export function isFutureDate(date) {
	const normalized = _normalizeDate(date);
	if (!normalized) return false;
	return normalized > new Date();
}

export function isPastDate(date) {
	const normalized = _normalizeDate(date);
	if (!normalized) return false;
	return normalized < new Date();
}

export function isBefore(date, comparisonDate) {
	const date1 = _normalizeDate(date);
	const date2 = _normalizeDate(comparisonDate);
	if (!date1 || !date2) return false;
	return date1 < date2;
}

export function isAfter(date, comparisonDate) {
	const date1 = _normalizeDate(date);
	const date2 = _normalizeDate(comparisonDate);
	if (!date1 || !date2) return false;
	return date1 > date2;
}
