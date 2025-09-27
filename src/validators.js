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
		hasMinLength &&
		hasUppercase &&
		hasLowercase &&
		hasNumber &&
		hasSpecialChar
	);
};

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
