import * as v from "./validators.mjs";
import * as u from "./utils.mjs";

export const validators = {
	isEmail: v.isEmail,
	isURL: v.isURL,
	isUUID: v.isUUID,
	isStrongPassword: v.isStrongPassword,
};

export const utils = {
	formatDate: u.formatDate,
	generateRandomId: u.generateRandomId,
	capitalize: u.capitalize,
	escapeHTML: u.escapeHTML,
	debounce: u.debounce,
	throttle: u.throttle,
};

export default {
	validators,
	utils,
};
