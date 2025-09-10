/**
 * @fileoverview Modul ini berisi fungsi-fungsi helper untuk validasi data.
 * @module validators
 */

/**
 * Memeriksa apakah sebuah string memiliki format alamat email yang valid.
 * @param {string} str - String yang akan divalidasi.
 * @returns {boolean} True jika format email valid, false jika tidak.
 */
export const isEmail = (str) => {
	if (typeof str !== "string" || str.trim() === "") {
		return false;
	}
	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	return emailRegex.test(str);
};

/**
 * Memeriksa apakah sebuah string adalah URL yang valid.
 * @param {string} str - String yang akan divalidasi.
 * @returns {boolean} True jika string adalah URL yang valid, false jika tidak.
 */
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

/**
 * Memeriksa apakah sebuah string adalah UUID (Universally Unique Identifier) yang valid.
 * @param {string} str - String yang akan divalidasi.
 * @returns {boolean} True jika string adalah UUID yang valid, false jika tidak.
 */
export const isUUID = (str) => {
	if (typeof str !== "string" || str.trim() === "") {
		return false;
	}
	const uuidRegex =
		/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
	return uuidRegex.test(str);
};

/**
 * Memeriksa apakah sebuah string memenuhi kriteria sebagai kata sandi yang kuat.
 * Kriteria: minimal 8 karakter, mengandung huruf besar, huruf kecil, angka, dan karakter khusus.
 * @param {string} str - String kata sandi.
 * @returns {boolean} True jika kata sandi kuat, false jika tidak.
 */
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
