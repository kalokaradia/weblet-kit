//#region \0rolldown/runtime.js
var e = Object.defineProperty, t = (t, n) => {
	let r = {};
	for (var i in t) e(r, i, {
		get: t[i],
		enumerable: !0
	});
	return n || e(r, Symbol.toStringTag, { value: "Module" }), r;
}, n = (e, t = "YYYY-MM-DD") => {
	if (!(e instanceof Date)) return "";
	let n = e.getFullYear(), r = String(e.getMonth() + 1).padStart(2, "0"), i = String(e.getDate()).padStart(2, "0"), a = String(e.getHours()).padStart(2, "0"), o = String(e.getMinutes()).padStart(2, "0"), s = String(e.getSeconds()).padStart(2, "0");
	return t.replace("YYYY", n.toString()).replace("MM", r).replace("DD", i).replace("HH", a).replace("mm", o).replace("ss", s);
}, r = (e = 16) => {
	let t = "";
	for (let n = 0; n < e; n++) t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random() * 62));
	return t;
}, i = (e) => typeof e != "string" || e.length === 0 ? "" : e.charAt(0).toUpperCase() + e.slice(1), a = (e) => {
	if (typeof e != "string" || e.length === 0) return "";
	let t = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		"\"": "&quot;",
		"'": "&#39;"
	};
	return e.replace(/[&<>"']/g, (e) => t[e]);
}, o = (e, t) => {
	let n;
	return (...r) => {
		clearTimeout(n), n = setTimeout(() => {
			e.apply(void 0, r);
		}, t);
	};
}, s = (e, t) => {
	let n = !1;
	return (...r) => {
		n || (e.apply(void 0, r), n = !0, setTimeout(() => {
			n = !1;
		}, t));
	};
}, c = (e) => {
	if (!Array.isArray(e)) return [];
	let t = [...e];
	for (let e = t.length - 1; e > 0; e--) {
		let n = Math.floor(Math.random() * (e + 1));
		[t[e], t[n]] = [t[n], t[e]];
	}
	return t;
}, l = (e) => !Array.isArray(e) || e.length === 0 ? 0 : e.reduce((e, t) => e + t, 0) / e.length, u = (e, t = "asc") => Array.isArray(e) ? [...e].sort((e, n) => t === "asc" ? e - n : n - e) : [], d = (e) => {
	if (typeof e != "string") return !1;
	let t = e.toLowerCase().replace(/[^a-z0-9]/g, "");
	return t === t.split("").reverse().join("");
}, f = (e, t) => {
	if (!Array.isArray(e) || typeof t != "number" || t <= 0) return [];
	let n = [];
	for (let r = 0; r < e.length; r += t) n.push(e.slice(r, r + t));
	return n;
}, p = (e) => {
	if (typeof e != "object" || !e) return e;
	if (Array.isArray(e)) return e.map((e) => p(e));
	let t = {};
	for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = p(e[n]));
	return t;
}, ee = (e, t, n = 1) => {
	if (typeof e != "number" || typeof t != "number" || typeof n != "number" || n === 0) return [];
	let r = [];
	if (e < t && n > 0) for (let i = e; i < t; i += n) r.push(i);
	else if (e > t && n < 0) for (let i = e; i > t; i += n) r.push(i);
	return r;
}, m = (e) => {
	if (Array.isArray(e) && e.length !== 0) return Math.max(...e);
}, h = (e) => {
	if (Array.isArray(e) && e.length !== 0) return Math.min(...e);
};
//#endregion
//#region src/utils/flattenArray.ts
function g(e) {
	let t = [], n = (e) => {
		for (let r of e) Array.isArray(r) ? n(r) : t.push(r);
	};
	return n(e), t;
}
//#endregion
//#region src/utils/arrayGroupBy.ts
function _(e, t) {
	return e.reduce((e, n) => {
		let r = String(n[t]);
		return e[r] || (e[r] = []), e[r].push(n), e;
	}, {});
}
//#endregion
//#region src/utils/removeDuplicatesArray.ts
function v(e) {
	return Array.from(new Set(e));
}
//#endregion
//#region src/utils/clamp.ts
var y = (e, t, n) => [
	e,
	t,
	n
].every(Number.isFinite) ? (t > n && ([t, n] = [n, t]), Math.min(Math.max(e, t), n)) : NaN;
//#endregion
//#region src/utils/memoize.ts
function b(e) {
	if (typeof e != "function") throw TypeError("Expected a function to memoize");
	let t = /* @__PURE__ */ new Map(), n = (...n) => {
		let r = n.length ? JSON.stringify(n) : "__noargs__";
		if (t.has(r)) return t.get(r);
		let i = e(...n);
		return t.set(r, i), i;
	};
	return Object.defineProperty(n, "cache", {
		value: t,
		writable: !1,
		enumerable: !1,
		configurable: !1
	}), n;
}
//#endregion
//#region src/utils/mergeDeep.ts
function x(e, t) {
	if (!t) return e;
	for (let n of Object.keys(t)) {
		let r = t[n], i = e[n];
		e[n] = S(r) && S(i) ? x(i, r) : r;
	}
	return e;
}
function S(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
//#endregion
//#region src/utils/omit.ts
function C(e, t) {
	let n = {};
	for (let r of Object.keys(e)) t.includes(r) || (n[r] = e[r]);
	return n;
}
//#endregion
//#region src/utils/pick.ts
function w(e, t) {
	let n = {};
	for (let r of t) r in e && (n[r] = e[r]);
	return n;
}
//#endregion
//#region src/utils/toTitleCase.ts
function T(e) {
	return typeof e == "string" ? e.toLowerCase().replace(/\b\w+/g, (e) => e.charAt(0).toUpperCase() + e.slice(1)) : "";
}
//#endregion
//#region src/utils/truncate.ts
function E(e, t) {
	if (typeof e != "string" || typeof t != "number" || t < 0) return "";
	let n = e.trim();
	return n.length <= t ? n : n.slice(0, t - 3) + "...";
}
//#endregion
//#region src/utils/generateRandomInt.ts
function D(e, t) {
	if (!Number.isInteger(e) || !Number.isInteger(t)) throw Error("Both min and max must be integers.");
	if (t < e) throw Error("max must be greater than or equal to min.");
	return Math.floor(Math.random() * (t - e + 1)) + e;
}
//#endregion
//#region src/utils/index.ts
var O = /* @__PURE__ */ t({
	arrayGroupBy: () => _,
	arrayMax: () => m,
	arrayMin: () => h,
	average: () => l,
	capitalize: () => i,
	chunkArray: () => f,
	clamp: () => y,
	debounce: () => o,
	deepClone: () => p,
	escapeHTML: () => a,
	flattenArray: () => g,
	formatDate: () => n,
	generateRandomId: () => r,
	generateRandomInt: () => D,
	isPalindrome: () => d,
	memoize: () => b,
	mergeDeep: () => x,
	omit: () => C,
	pick: () => w,
	range: () => ee,
	removeDuplicatesArray: () => v,
	shuffleArray: () => c,
	sortNumbers: () => u,
	throttle: () => s,
	toTitleCase: () => T,
	truncate: () => E
}), k = (e) => {
	if (typeof e != "string" || e.trim() === "") return !1;
	let t = e.trim(), n = /* @__PURE__ */ new Set(/* @__PURE__ */ "http:.https:.ftp:.ftps:.sftp:.smtp:.imap:.pop3:.ssh:.telnet:.ws:.wss:.rtsp:.mms:.file:.data:.blob:.mailto:.news:.gopher:.irc:.magnet:.bitcoin:.ipfs:.dns:.tcp:.udp:.vpn:.chrome:.chrome-extension:.android-app:.intent:.market:.webcal:.rlogin:.ldap:.git:.svn:.jdbc:.jdbc:mysql:.jdbc:postgresql:.jdbc:oracle:.jdbc:sqlserver:.nfs:.smb:.tel:.fax:.geo:.skype:.spotify:.zoom:".split("."));
	if (typeof URL.canParse == "function") {
		if (!URL.canParse(t)) return !1;
		let e = new URL(t).protocol;
		return n.has(e);
	}
	try {
		let e = new URL(t);
		return n.has(e.protocol);
	} catch {
		return !1;
	}
}, A = (e) => typeof e != "string" || e.trim() === "" ? !1 : /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(e.trim()), j = (e, t = {}) => {
	if (typeof e != "string") return !1;
	let n = e.trim(), { minLength: r = 8, maxLength: i = 128, requireUppercase: a = !0, requireLowercase: o = !0, requireNumber: s = !0, requireSpecialChar: c = !0, specialChars: l = "!@#$%^&*()_+-=[]{};':\"\\|,.<>/?~`" } = t;
	if (n.length < r || n.length > i || a && !/[A-Z]/.test(n) || o && !/[a-z]/.test(n) || s && !/[0-9]/.test(n)) return !1;
	let u = l.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/-/g, "\\-");
	return !(c && (!u || !RegExp(`[${u}]`).test(n)));
}, M = (e) => typeof e == "number" && !isNaN(e) && isFinite(e), N = (e) => typeof e == "number" && Number.isInteger(e) && isFinite(e), P = (e) => typeof e == "boolean" || e === "true" || e === "false", F = (e) => {
	if (e instanceof Date) return !isNaN(e.getTime());
	if (typeof e == "string" || typeof e == "number") {
		let t = new Date(e);
		return !isNaN(t.getTime());
	}
	return !1;
}, I = (e) => e == null ? !0 : typeof e == "string" || Array.isArray(e) ? e.length === 0 : e instanceof Map || e instanceof Set ? e.size === 0 : typeof e == "object" && e.constructor === Object && Object.keys(e).length === 0, L = (e) => typeof e == "string" && /^[a-z0-9]+$/i.test(e.trim());
//#endregion
//#region src/validators/isAlpha.ts
function te(e) {
	return typeof e == "string" && /^[a-zA-Z]+$/.test(e.trim());
}
//#endregion
//#region src/validators/isNumeric.ts
function R(e) {
	return typeof e == "string" && /^[0-9]+$/.test(e.trim());
}
//#endregion
//#region src/validators/isHexColor.ts
function z(e) {
	return typeof e == "string" && /^#([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$/.test(e.trim());
}
//#endregion
//#region src/validators/isJSON.ts
function B(e) {
	if (typeof e != "string") return !1;
	try {
		return JSON.parse(e), !0;
	} catch {
		return !1;
	}
}
//#endregion
//#region src/validators/isIP.ts
function V(e) {
	if (typeof e != "string") return !1;
	let t = e.trim();
	if (/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/.test(t)) return t.split(".").every((e) => {
		let t = Number(e);
		return t >= 0 && t <= 255 && String(t) === e;
	});
	try {
		let e = t.includes(":") ? t : null;
		if (!e) return !1;
		let n = e.split(":");
		if (n.length > 8) return !1;
		if (e === "::") return !0;
		let r = 0;
		for (let e of n) if (e === "") {
			if (r++, r > 1) return !1;
		} else if (!/^[0-9a-fA-F]{1,4}$/.test(e)) return !1;
		return !0;
	} catch {
		return !1;
	}
}
//#endregion
//#region src/validators/isDomain.ts
function H(e) {
	if (typeof e != "string") return !1;
	let t = e.trim().toLowerCase();
	if (t.length > 253) return !1;
	let n = t.split(".");
	return n.length < 2 ? !1 : n.every((e, t) => e.length === 0 || e.length > 63 || e.startsWith("-") || e.endsWith("-") || t === n.length - 1 && !/^[a-zA-Z]{2,}$/.test(e) ? !1 : /^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/.test(e));
}
//#endregion
//#region src/validators/isPhoneNumber.ts
function U(e) {
	if (typeof e != "string") return !1;
	let t = e.replace(/[\s\-\(\)]/g, "");
	return /^\+?[1-9]\d{9,14}$/.test(t);
}
//#endregion
//#region src/validators/isCreditCard.ts
function W(e) {
	if (typeof e != "string") return !1;
	let t = e.replace(/[^\d]/g, "");
	if (t.length < 13 || t.length > 19) return !1;
	let n = 0, r = !1;
	for (let e = t.length - 1; e >= 0; e--) {
		let i = parseInt(t[e], 10);
		r && (i *= 2, i > 9 && (i -= 9)), n += i, r = !r;
	}
	return n % 10 == 0;
}
//#endregion
//#region src/validators/_normalizeDate.ts
function G(e) {
	if (e instanceof Date) return isNaN(e.getTime()) ? null : e;
	if (typeof e == "string") {
		let t = e.trim();
		if (t === "") return null;
		let n = new Date(t);
		return isNaN(n.getTime()) ? null : n;
	}
	if (typeof e == "number") {
		let t = new Date(e);
		return isNaN(t.getTime()) ? null : t;
	}
	return null;
}
//#endregion
//#region src/validators/isFutureDate.ts
function K(e) {
	let t = G(e);
	return t ? t > /* @__PURE__ */ new Date() : !1;
}
//#endregion
//#region src/validators/isPastDate.ts
function q(e) {
	let t = G(e);
	return t ? t < /* @__PURE__ */ new Date() : !1;
}
//#endregion
//#region src/validators/isDateBefore.ts
function J(e, t) {
	let n = G(e), r = G(t);
	return !n || !r ? !1 : n < r;
}
//#endregion
//#region src/validators/isDateAfter.ts
function Y(e, t) {
	let n = G(e), r = G(t);
	return !n || !r ? !1 : n > r;
}
//#endregion
//#region src/validators/isEmail.ts
function X(e) {
	if (typeof e != "string") return !1;
	let t = e.trim();
	if (/[\x00-\x1F\x7F\u200B-\u200D\uFEFF]/.test(t) || !/^(?=.{1,254}$)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[A-Za-z]{2,}$/.test(t)) return !1;
	let n = t.split("@")[1];
	return !(n && /[\u0400-\u04FF\u0370-\u03FF]/.test(n));
}
//#endregion
//#region src/validators/isBase64.ts
function Z(e) {
	if (typeof e != "string") return !1;
	let t = e.trim();
	if (!t || !/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(t)) return !1;
	try {
		let e = atob(t);
		return btoa(e) === t;
	} catch {
		return !1;
	}
}
//#endregion
//#region src/validators/isSlug.ts
var Q = (e) => {
	if (typeof e != "string") return !1;
	let t = e.trim();
	return t ? /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(t) : !1;
}, ne = (e) => typeof e == "number" && Number.isFinite(e) && e >= -90 && e <= 90, $ = (e) => typeof e == "number" && Number.isFinite(e) && e >= -180 && e <= 180, re = (e) => {
	if (typeof e != "string") return !1;
	let t = e.trim();
	return t ? RegExp(`^(?:${(/* @__PURE__ */ "application.audio.example.font.image.message.model.multipart.text.video.chemical.drawing.x-conference.x-world.inode.x-epoc.x-token.x-script.x-binary.x-shockwave-flash.x-zip-compressed.x-quicktime.x-msdownload.x-font-ttf.x-font-woff.x-font-otf.x-font-woff2.x-font-type1.x-font-truetype.x-font-opentype.vnd.prs.x".split(".")).join("|")})/[a-z0-9.+-]{1,127}$`, "i").test(t) : !1;
};
//#endregion
//#region src/validators/isAscii.ts
function ie(e, t = "ascii") {
	return typeof e == "string" && {
		ascii: /^[\x00-\x7F]*$/,
		printable: /^[\x20-\x7E]*$/,
		extended: /^[\x00-\xFF]*$/
	}[t].test(e);
}
//#endregion
//#region src/validators/isTime.ts
function ae(e) {
	return typeof e == "string" && /^([01]\d|2[0-3]):([0-5]\d)(:([0-5]\d))?$/.test(e.trim());
}
//#endregion
//#region src/validators/isHex.ts
function oe(e) {
	if (typeof e != "string") return !1;
	let t = e.trim();
	return /^(0x)?[0-9a-fA-F]+$/.test(t);
}
//#endregion
//#region src/validators/isFileExtension.ts
function se(e) {
	return typeof e == "string" && /^\.?[a-zA-Z0-9]+$/.test(e.trim());
}
//#endregion
//#region src/validators/index.ts
var ce = /* @__PURE__ */ t({
	isAlpha: () => te,
	isAlphanumeric: () => L,
	isAscii: () => ie,
	isBase64: () => Z,
	isBoolean: () => P,
	isCreditCard: () => W,
	isDate: () => F,
	isDateAfter: () => Y,
	isDateBefore: () => J,
	isDomain: () => H,
	isEmail: () => X,
	isEmpty: () => I,
	isFileExtension: () => se,
	isFutureDate: () => K,
	isHex: () => oe,
	isHexColor: () => z,
	isIP: () => V,
	isInteger: () => N,
	isJSON: () => B,
	isLatitude: () => ne,
	isLongitude: () => $,
	isMimeType: () => re,
	isNumber: () => M,
	isNumeric: () => R,
	isPastDate: () => q,
	isPhoneNumber: () => U,
	isSlug: () => Q,
	isStrongPassword: () => j,
	isTime: () => ae,
	isURL: () => k,
	isUUID: () => A
}), le = {
	utils: O,
	validators: ce
};
//#endregion
export { _ as arrayGroupBy, m as arrayMax, h as arrayMin, l as average, i as capitalize, f as chunkArray, y as clamp, o as debounce, p as deepClone, le as default, a as escapeHTML, g as flattenArray, n as formatDate, r as generateRandomId, D as generateRandomInt, te as isAlpha, L as isAlphanumeric, ie as isAscii, Z as isBase64, P as isBoolean, W as isCreditCard, F as isDate, Y as isDateAfter, J as isDateBefore, H as isDomain, X as isEmail, I as isEmpty, se as isFileExtension, K as isFutureDate, oe as isHex, z as isHexColor, V as isIP, N as isInteger, B as isJSON, ne as isLatitude, $ as isLongitude, re as isMimeType, M as isNumber, R as isNumeric, d as isPalindrome, q as isPastDate, U as isPhoneNumber, Q as isSlug, j as isStrongPassword, ae as isTime, k as isURL, A as isUUID, b as memoize, x as mergeDeep, C as omit, w as pick, ee as range, v as removeDuplicatesArray, c as shuffleArray, u as sortNumbers, s as throttle, T as toTitleCase, E as truncate, O as utils, ce as validators };
