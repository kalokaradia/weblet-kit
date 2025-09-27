export const formatDate = (date, format = "YYYY-MM-DD") => {
	if (!(date instanceof Date)) return "";
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	const hours = String(date.getHours()).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2, "0");
	const seconds = String(date.getSeconds()).padStart(2, "0");

	return format
		.replace("YYYY", year)
		.replace("MM", month)
		.replace("DD", day)
		.replace("HH", hours)
		.replace("mm", minutes)
		.replace("ss", seconds);
};

export const generateRandomId = (length = 16) => {
	const characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let result = "";
	for (let i = 0; i < length; i++) {
		result += characters.charAt(
			Math.floor(Math.random() * characters.length)
		);
	}
	return result;
};

export const capitalize = (str) => {
	if (typeof str !== "string" || str.length === 0) return "";
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export const escapeHTML = (str) => {
	if (typeof str !== "string" || str.length === 0) return "";
	const replacements = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&#39;",
	};
	return str.replace(/[&<>"']/g, (match) => replacements[match]);
};

export const debounce = (func, delay) => {
	let timeout;
	return (...args) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			func.apply(this, args);
		}, delay);
	};
};

export const throttle = (func, limit) => {
	let inThrottle;
	return (...args) => {
		if (!inThrottle) {
			func.apply(this, args);
			inThrottle = true;
			setTimeout(() => (inThrottle = false), limit);
		}
	};
};

export const shuffleArray = (arr) => {
	if (!Array.isArray(arr)) return [];
	const copy = [...arr];
	for (let i = copy.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[copy[i], copy[j]] = [copy[j], copy[i]];
	}
	return copy;
};

export const average = (arr) => {
	if (!Array.isArray(arr) || arr.length === 0) return 0;
	const sum = arr.reduce((a, b) => a + b, 0);
	return sum / arr.length;
};

export const max = (arr) => {
	if (!Array.isArray(arr) || arr.length === 0) return undefined;
	return Math.max(...arr);
};

export const min = (arr) => {
	if (!Array.isArray(arr) || arr.length === 0) return undefined;
	return Math.min(...arr);
};

export const sortNumbers = (arr) => {
	if (!Array.isArray(arr)) return [];
	return [...arr].sort((a, b) => a - b);
};

export const isPalindrome = (str) => {
	if (typeof str !== "string") return false;
	const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
	return cleaned === cleaned.split("").reverse().join("");
};
