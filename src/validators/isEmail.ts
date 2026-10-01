export function isEmail(str: unknown): boolean {
	if (typeof str !== "string") return false;

	const input = str.trim();
	if (/[\x00-\x1F\x7F\u200B-\u200D\uFEFF]/.test(input)) return false;

	const emailRegex =
		/^(?=.{1,254}$)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[A-Za-z]{2,}$/;

	if (!emailRegex.test(input)) return false;

	const domain = input.split("@")[1];
	if (domain && /[\u0400-\u04FF\u0370-\u03FF]/.test(domain)) return false;

	return true;
}
