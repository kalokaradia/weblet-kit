/**
 * @fileoverview Modul ini berisi berbagai fungsi utilitas praktis untuk tugas umum.
 * @module utils
 */

/**
 * Memformat objek Date menjadi string sesuai format yang diberikan.
 * @param {Date} date - Objek Date yang akan diformat.
 * @param {string} [format='YYYY-MM-DD'] - String format. Contoh: 'YYYY-MM-DD HH:mm:ss'.
 * @returns {string} String tanggal/waktu yang diformat.
 */
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

/**
 * Membuat string ID acak dengan panjang yang ditentukan.
 * @param {number} [length=16] - Panjang ID yang diinginkan.
 * @returns {string} ID acak.
 */
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

/**
 * Mengubah huruf pertama dari sebuah string menjadi huruf kapital.
 * @param {string} str - String yang akan diubah.
 * @returns {string} String yang sudah dikapitalisasi.
 */
export const capitalize = (str) => {
	if (typeof str !== "string" || str.length === 0) return "";
	return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Mengubah karakter khusus HTML (&, <, >, ", ') menjadi entitas HTML.
 * @param {string} str - String yang akan di-escape.
 * @returns {string} String dengan karakter HTML yang sudah di-escape.
 */
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

/**
 * Membuat versi "debounced" dari sebuah fungsi. Eksekusi fungsi akan ditunda
 * sampai setelah event terakhir berhenti selama 'delay' milidetik.
 * @param {Function} func - Fungsi yang akan di-debounce.
 * @param {number} delay - Waktu tunda dalam milidetik.
 * @returns {Function} Fungsi debounced.
 */
export const debounce = (func, delay) => {
	let timeout;
	return (...args) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			func.apply(this, args);
		}, delay);
	};
};

/**
 * Membuat versi "throttled" dari sebuah fungsi. Fungsi hanya akan dieksekusi
 * paling banyak sekali dalam 'limit' milidetik.
 * @param {Function} func - Fungsi yang akan di-throttle.
 * @param {number} limit - Batas waktu dalam milidetik.
 * @returns {Function} Fungsi throttled.
 */
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
