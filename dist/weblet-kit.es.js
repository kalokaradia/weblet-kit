const g = (e, t = "YYYY-MM-DD") => {
  if (!(e instanceof Date)) return "";
  const r = e.getFullYear(), n = String(e.getMonth() + 1).padStart(2, "0"), s = String(e.getDate()).padStart(2, "0"), i = String(e.getHours()).padStart(2, "0"), f = String(e.getMinutes()).padStart(2, "0"), u = String(e.getSeconds()).padStart(2, "0");
  return t.replace("YYYY", r.toString()).replace("MM", n).replace("DD", s).replace("HH", i).replace("mm", f).replace("ss", u);
}, y = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let r = "";
  for (let n = 0; n < e; n++)
    r += t.charAt(Math.floor(Math.random() * t.length));
  return r;
}, d = (e) => typeof e != "string" || e.length === 0 ? "" : e.charAt(0).toUpperCase() + e.slice(1), h = (e) => {
  if (typeof e != "string" || e.length === 0) return "";
  const t = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  };
  return e.replace(/[&<>"']/g, (r) => t[r]);
}, b = (e, t) => {
  let r;
  return (...n) => {
    clearTimeout(r), r = setTimeout(() => {
      e.apply(void 0, n);
    }, t);
  };
}, A = (e, t) => {
  let r = !1;
  return (...n) => {
    r || (e.apply(void 0, n), r = !0, setTimeout(() => {
      r = !1;
    }, t));
  };
}, x = (e) => {
  if (!Array.isArray(e)) return [];
  const t = [...e];
  for (let r = t.length - 1; r > 0; r--) {
    const n = Math.floor(Math.random() * (r + 1));
    [t[r], t[n]] = [t[n], t[r]];
  }
  return t;
}, w = (e) => !Array.isArray(e) || e.length === 0 ? 0 : e.reduce((r, n) => r + n, 0) / e.length, z = (e, t = "asc") => Array.isArray(e) ? [...e].sort((r, n) => t === "asc" ? r - n : n - r) : [], N = (e) => {
  if (typeof e != "string") return !1;
  const t = e.toLowerCase().replace(/[^a-z0-9]/g, "");
  return t === t.split("").reverse().join("");
}, S = (e, t) => {
  if (!Array.isArray(e)) return [];
  if (typeof t != "number" || t <= 0) return [];
  const r = [];
  for (let n = 0; n < e.length; n += t)
    r.push(e.slice(n, n + t));
  return r;
}, a = (e) => {
  if (e === null || typeof e != "object") return e;
  if (Array.isArray(e))
    return e.map((r) => a(r));
  const t = {};
  for (const r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = a(e[r]));
  return t;
}, D = (e, t, r = 1) => {
  if (typeof e != "number" || typeof t != "number") return [];
  if (typeof r != "number" || r === 0) return [];
  const n = [];
  if (e < t && r > 0)
    for (let s = e; s < t; s += r)
      n.push(s);
  else if (e > t && r < 0)
    for (let s = e; s > t; s += r)
      n.push(s);
  return n;
}, $ = (e) => {
  if (!(!Array.isArray(e) || e.length === 0))
    return Math.max(...e);
}, F = (e) => {
  if (!(!Array.isArray(e) || e.length === 0))
    return Math.min(...e);
};
function M(e) {
  const t = [], r = (n) => {
    for (const s of n)
      Array.isArray(s) ? r(s) : t.push(s);
  };
  return r(e), t;
}
function j(e, t) {
  return e.reduce(
    (r, n) => {
      const s = String(n[t]);
      return r[s] || (r[s] = []), r[s].push(n), r;
    },
    {}
  );
}
function R(e) {
  return Array.from(new Set(e));
}
const P = (e, t, r) => [e, t, r].every(Number.isFinite) ? (t > r && ([t, r] = [r, t]), Math.min(Math.max(e, t), r)) : NaN;
function T(e) {
  if (typeof e != "function")
    throw new TypeError("Expected a function to memoize");
  const t = /* @__PURE__ */ new Map(), r = (...n) => {
    const s = n.length ? JSON.stringify(n) : "__noargs__";
    if (t.has(s))
      return t.get(s);
    const i = e(...n);
    return t.set(s, i), i;
  };
  return Object.defineProperty(r, "cache", {
    value: t,
    writable: !1,
    enumerable: !1,
    configurable: !1
  }), r;
}
function l(e, t) {
  if (!t) return e;
  for (const r of Object.keys(t)) {
    const n = t[r], s = e[r];
    c(n) && c(s) ? e[r] = l(
      s,
      n
    ) : e[r] = n;
  }
  return e;
}
function c(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function O(e, t) {
  const r = {};
  for (const n of Object.keys(e))
    t.includes(n) || (r[n] = e[n]);
  return r;
}
function k(e, t) {
  const r = {};
  for (const n of t)
    n in e && (r[n] = e[n]);
  return r;
}
function _(e) {
  return typeof e != "string" ? "" : e.toLowerCase().replace(/\b\w+/g, (t) => t.charAt(0).toUpperCase() + t.slice(1));
}
function C(e, t) {
  if (typeof e != "string" || typeof t != "number" || t < 0)
    return "";
  const r = e.trim();
  return r.length <= t ? r : r.slice(0, t - 3) + "...";
}
function Z(e, t) {
  if (!Number.isInteger(e) || !Number.isInteger(t))
    throw new Error("Both min and max must be integers.");
  if (t < e) throw new Error("max must be greater than or equal to min.");
  return Math.floor(Math.random() * (t - e + 1)) + e;
}
const E = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  arrayGroupBy: j,
  arrayMax: $,
  arrayMin: F,
  average: w,
  capitalize: d,
  chunkArray: S,
  clamp: P,
  debounce: b,
  deepClone: a,
  escapeHTML: h,
  flattenArray: M,
  formatDate: g,
  generateRandomId: y,
  generateRandomInt: Z,
  isPalindrome: N,
  memoize: T,
  mergeDeep: l,
  omit: O,
  pick: k,
  range: D,
  removeDuplicatesArray: R,
  shuffleArray: x,
  sortNumbers: z,
  throttle: A,
  toTitleCase: _,
  truncate: C
}, Symbol.toStringTag, { value: "Module" })), L = (e) => {
  if (typeof e != "string" || e.trim() === "")
    return !1;
  const t = e.trim(), r = /* @__PURE__ */ new Set([
    "http:",
    "https:",
    "ftp:",
    "ftps:",
    "sftp:",
    "smtp:",
    "imap:",
    "pop3:",
    "ssh:",
    "telnet:",
    "ws:",
    "wss:",
    "rtsp:",
    "mms:",
    "file:",
    "data:",
    "blob:",
    "mailto:",
    "news:",
    "gopher:",
    "irc:",
    "magnet:",
    "bitcoin:",
    "ipfs:",
    "dns:",
    "tcp:",
    "udp:",
    "vpn:",
    "chrome:",
    "chrome-extension:",
    "android-app:",
    "intent:",
    "market:",
    "webcal:",
    "rlogin:",
    "ldap:",
    "git:",
    "svn:",
    "jdbc:",
    "jdbc:mysql:",
    "jdbc:postgresql:",
    "jdbc:oracle:",
    "jdbc:sqlserver:",
    "nfs:",
    "smb:",
    "tel:",
    "fax:",
    "geo:",
    "skype:",
    "spotify:",
    "zoom:"
  ]);
  if (typeof URL.canParse == "function") {
    if (!URL.canParse(t)) return !1;
    const n = new URL(t).protocol;
    return r.has(n);
  }
  try {
    const n = new URL(t);
    return r.has(n.protocol);
  } catch {
    return !1;
  }
}, q = (e) => typeof e != "string" || e.trim() === "" ? !1 : /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(e.trim()), U = (e, t = {}) => {
  if (typeof e != "string") return !1;
  const r = e.trim(), {
    minLength: n = 8,
    maxLength: s = 128,
    requireUppercase: i = !0,
    requireLowercase: f = !0,
    requireNumber: u = !0,
    requireSpecialChar: p = !0,
    specialChars: m = "!@#$%^&*()_+-=[]{};':\"\\|,.<>/?~`"
  } = t;
  return !(r.length < n || r.length > s || i && !/[A-Z]/.test(r) || f && !/[a-z]/.test(r) || u && !/[0-9]/.test(r) || p && !new RegExp(`[${m}]`).test(r));
}, I = (e) => typeof e == "number" && !isNaN(e) && isFinite(e), Y = (e) => typeof e == "number" && Number.isInteger(e) && isFinite(e), B = (e) => typeof e == "boolean" || e === "true" || e === "false", H = (e) => {
  if (e instanceof Date)
    return !isNaN(e.getTime());
  if (typeof e == "string" || typeof e == "number") {
    const t = new Date(e);
    return !isNaN(t.getTime());
  }
  return !1;
}, J = (e) => e == null ? !0 : typeof e == "string" || Array.isArray(e) ? e.length === 0 : e instanceof Map || e instanceof Set ? e.size === 0 : typeof e == "object" && e.constructor === Object ? Object.keys(e).length === 0 : !1, G = (e) => typeof e != "string" ? !1 : /^[a-z0-9]+$/i.test(e.trim());
function K(e) {
  return typeof e != "string" ? !1 : /^[a-zA-Z]+$/.test(e.trim());
}
function V(e) {
  return typeof e != "string" ? !1 : /^[0-9]+$/.test(e.trim());
}
function W(e) {
  return typeof e != "string" ? !1 : /^#([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$/.test(e.trim());
}
function Q(e) {
  if (typeof e != "string") return !1;
  try {
    return JSON.parse(e), !0;
  } catch {
    return !1;
  }
}
function X(e) {
  if (typeof e != "string") return !1;
  const t = e.trim();
  if (/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/.test(t))
    return t.split(".").every((n) => {
      const s = Number(n);
      return s >= 0 && s <= 255 && String(s) === n;
    });
  try {
    const n = t.includes(":") ? t : null;
    if (!n) return !1;
    const s = n.split(":");
    if (s.length > 8) return !1;
    if (n === "::") return !0;
    let i = 0;
    for (const f of s)
      if (f === "") {
        if (i++, i > 1) return !1;
      } else if (!/^[0-9a-fA-F]{1,4}$/.test(f))
        return !1;
    return !0;
  } catch {
    return !1;
  }
}
function v(e) {
  if (typeof e != "string") return !1;
  const t = e.trim().toLowerCase();
  if (t.length > 253) return !1;
  const r = t.split(".");
  return r.length < 2 ? !1 : r.every((n, s) => n.length === 0 || n.length > 63 || n.startsWith("-") || n.endsWith("-") || s === r.length - 1 && !/^[a-zA-Z]{2,}$/.test(n) ? !1 : /^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/.test(n));
}
function ee(e) {
  if (typeof e != "string") return !1;
  const t = e.replace(/[\s\-\(\)]/g, "");
  return /^\+?[1-9]\d{9,14}$/.test(t);
}
function te(e) {
  if (typeof e != "string") return !1;
  const t = e.replace(/[^\d]/g, "");
  if (t.length < 13 || t.length > 19) return !1;
  let r = 0, n = !1;
  for (let s = t.length - 1; s >= 0; s--) {
    let i = parseInt(t[s], 10);
    n && (i *= 2, i > 9 && (i -= 9)), r += i, n = !n;
  }
  return r % 10 === 0;
}
function o(e) {
  if (e instanceof Date)
    return isNaN(e.getTime()) ? null : e;
  if (typeof e == "string") {
    const t = e.trim();
    if (t === "") return null;
    const r = new Date(t);
    return isNaN(r.getTime()) ? null : r;
  }
  if (typeof e == "number") {
    const t = new Date(e);
    return isNaN(t.getTime()) ? null : t;
  }
  return null;
}
function re(e) {
  const t = o(e);
  return t ? t > /* @__PURE__ */ new Date() : !1;
}
function ne(e) {
  const t = o(e);
  return t ? t < /* @__PURE__ */ new Date() : !1;
}
function se(e, t) {
  const r = o(e), n = o(t);
  return !r || !n ? !1 : r < n;
}
function ie(e, t) {
  const r = o(e), n = o(t);
  return !r || !n ? !1 : r > n;
}
function oe(e) {
  if (typeof e != "string") return !1;
  const t = e.trim();
  if (/[\x00-\x1F\x7F\u200B-\u200D\uFEFF]/.test(t) || !/^(?=.{1,254}$)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[A-Za-z]{2,}$/.test(t)) return !1;
  const n = t.split("@")[1];
  return !(n && /[\u0400-\u04FF\u0370-\u03FF]/.test(n));
}
function fe(e) {
  if (typeof e != "string") return !1;
  const t = e.trim();
  if (!t || !/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(t)) return !1;
  try {
    const n = atob(t);
    return btoa(n) === t;
  } catch {
    return !1;
  }
}
const ue = (e) => {
  if (typeof e != "string") return !1;
  const t = e.trim();
  return t ? /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(t) : !1;
}, ae = (e) => typeof e == "number" && Number.isFinite(e) && e >= -90 && e <= 90, ce = (e) => typeof e == "number" && Number.isFinite(e) && e >= -180 && e <= 180, le = (e) => {
  if (typeof e != "string") return !1;
  const t = e.trim();
  if (!t) return !1;
  const r = [
    // RFC 2045 & RFC 2046 standard types
    "application",
    "audio",
    "example",
    "font",
    "image",
    "message",
    "model",
    "multipart",
    "text",
    "video",
    // Experimental & non-standard types
    "chemical",
    "drawing",
    "x-conference",
    "x-world",
    "inode",
    "x-epoc",
    "x-token",
    "x-script",
    "x-binary",
    "x-shockwave-flash",
    "x-zip-compressed",
    "x-quicktime",
    "x-msdownload",
    "x-font-ttf",
    "x-font-woff",
    "x-font-otf",
    "x-font-woff2",
    "x-font-type1",
    "x-font-truetype",
    "x-font-opentype",
    "vnd",
    "prs",
    "x"
  ];
  return new RegExp(
    `^(?:${r.join("|")})/[a-z0-9.+-]{1,127}$`,
    "i"
  ).test(t);
};
function pe(e, t = "ascii") {
  return typeof e != "string" ? !1 : {
    ascii: /^[\x00-\x7F]*$/,
    // 0–127 → Full ASCII
    printable: /^[\x20-\x7E]*$/,
    // 32–126 → Printable characters
    extended: /^[\x00-\xFF]*$/
    // 0–255 → Extended ASCII
  }[t].test(e);
}
function me(e) {
  return typeof e != "string" ? !1 : /^([01]\d|2[0-3]):([0-5]\d)(:([0-5]\d))?$/.test(e.trim());
}
function ge(e) {
  if (typeof e != "string") return !1;
  const t = e.trim();
  return /^(0x)?[0-9a-fA-F]+$/.test(t);
}
function ye(e) {
  return typeof e != "string" ? !1 : /^\.?[a-zA-Z0-9]+$/.test(e.trim());
}
const de = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  _normalizeDate: o,
  isAlpha: K,
  isAlphanumeric: G,
  isAscii: pe,
  isBase64: fe,
  isBoolean: B,
  isCreditCard: te,
  isDate: H,
  isDateAfter: ie,
  isDateBefore: se,
  isDomain: v,
  isEmail: oe,
  isEmpty: J,
  isFileExtension: ye,
  isFutureDate: re,
  isHex: ge,
  isHexColor: W,
  isIP: X,
  isInteger: Y,
  isJSON: Q,
  isLatitude: ae,
  isLongitude: ce,
  isMimeType: le,
  isNumber: I,
  isNumeric: V,
  isPastDate: ne,
  isPhoneNumber: ee,
  isSlug: ue,
  isStrongPassword: U,
  isTime: me,
  isURL: L,
  isUUID: q
}, Symbol.toStringTag, { value: "Module" })), he = { ...E }, be = { ...de }, Ae = { utils: he, validators: be };
export {
  Ae as default
};
