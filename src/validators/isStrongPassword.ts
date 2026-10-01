export interface StrongPasswordOptions {
	minLength?: number;
	maxLength?: number;
	requireUppercase?: boolean;
	requireLowercase?: boolean;
	requireNumber?: boolean;
	requireSpecialChar?: boolean;
	specialChars?: string; // for customization, e.g., "!@#$%&"
}

export const isStrongPassword = (
	str: unknown,
	options: StrongPasswordOptions = {}
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
	const escapedSpecialChars = specialChars
		.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
		.replace(/-/g, "\\-");
	if (
		requireSpecialChar &&
		(!escapedSpecialChars || !new RegExp(`[${escapedSpecialChars}]`).test(s))
	)
		return false;

	return true;
};

// 1.1.0
