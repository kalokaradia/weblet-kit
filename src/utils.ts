// 1.0.0
export const formatDate = (
	date: Date,
	format: string = "YYYY-MM-DD",
): string => {
	if (!(date instanceof Date)) return "";
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	const hours = String(date.getHours()).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2, "0");
	const seconds = String(date.getSeconds()).padStart(2, "0");

	return format
		.replace("YYYY", year.toString())
		.replace("MM", month)
		.replace("DD", day)
		.replace("HH", hours)
		.replace("mm", minutes)
		.replace("ss", seconds);
};

export const generateRandomId = (length: number = 16): string => {
	const characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let result = "";
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return result;
};

export const capitalize = (str: string): string => {
	if (typeof str !== "string" || str.length === 0) return "";
	return str.charAt(0).toUpperCase() + str.slice(1);
};

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

export const debounce = <T extends (...args: any[]) => any>(
	func: T,
	delay: number,
): ((...args: Parameters<T>) => void) => {
	let timeout: ReturnType<typeof setTimeout>;
	return (...args: Parameters<T>) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			func.apply(undefined, args);
		}, delay);
	};
};

export const throttle = <T extends (...args: any[]) => any>(
	func: T,
	limit: number,
): ((...args: Parameters<T>) => void) => {
	let inThrottle = false;
	return (...args: Parameters<T>) => {
		if (!inThrottle) {
			func.apply(undefined, args);
			inThrottle = true;
			setTimeout(() => {
				inThrottle = false;
			}, limit);
		}
	};
};

// 1.1.0

export const shuffleArray = <T>(arr: T[]): T[] => {
	if (!Array.isArray(arr)) return [];
	const copy = [...arr];
	for (let i = copy.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[copy[i], copy[j]] = [copy[j], copy[i]];
	}
	return copy;
};

export const average = (arr: number[]): number => {
	if (!Array.isArray(arr) || arr.length === 0) return 0;
	const sum = arr.reduce((a, b) => a + b, 0);
	return sum / arr.length;
};

// export const max = (arr: number[]): number | undefined => {
// 	if (!Array.isArray(arr) || arr.length === 0) return undefined;
// 	return Math.max(...arr);
// };

// export const min = (arr: number[]): number | undefined => {
// 	if (!Array.isArray(arr) || arr.length === 0) return undefined;
// 	return Math.min(...arr);
// };

export const sortNumbers = (
	arr: number[],
	order: "asc" | "desc" = "asc",
): number[] => {
	if (!Array.isArray(arr)) return [];
	return [...arr].sort((a, b) => (order === "asc" ? a - b : b - a));
};

export const isPalindrome = (str: string): boolean => {
	if (typeof str !== "string") return false;
	const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
	return cleaned === cleaned.split("").reverse().join("");
};

// 1.2.0
export const chunkArray = <T>(array: T[], size: number): T[][] => {
	if (!Array.isArray(array)) return [];
	if (typeof size !== "number" || size <= 0) return [];

	const result: T[][] = [];
	for (let i = 0; i < array.length; i += size) {
		result.push(array.slice(i, i + size));
	}
	return result;
};

export const deepClone = <T>(value: T): T => {
	if (value === null || typeof value !== "object") return value;

	if (Array.isArray(value)) {
		return value.map((item) => deepClone(item)) as unknown as T;
	}

	const clonedObj: Record<string, any> = {};
	for (const key in value) {
		if (Object.prototype.hasOwnProperty.call(value, key)) {
			clonedObj[key] = deepClone((value as Record<string, any>)[key]);
		}
	}
	return clonedObj as T;
};

export const range = (
	start: number,
	end: number,
	step: number = 1,
): number[] => {
	if (typeof start !== "number" || typeof end !== "number") return [];
	if (typeof step !== "number" || step === 0) return [];

	const result: number[] = [];
	if (start < end && step > 0) {
		for (let i = start; i < end; i += step) {
			result.push(i);
		}
	} else if (start > end && step < 0) {
		for (let i = start; i > end; i += step) {
			result.push(i);
		}
	}
	return result;
};

// 2.0.0
export const arrayMax = (arr: number[]): number | undefined => {
	if (!Array.isArray(arr) || arr.length === 0) return undefined;
	return Math.max(...arr);
};

export const arrayMin = (arr: number[]): number | undefined => {
	if (!Array.isArray(arr) || arr.length === 0) return undefined;
	return Math.min(...arr);
};
