export function isCreditCard(text: unknown): boolean {
	if (typeof text !== "string") return false;
	const cleaned = text.replace(/[^\d]/g, "");
	if (cleaned.length < 13 || cleaned.length > 19) return false;

	// Luhn algorithm
	let sum = 0;
	let isEven = false;
	for (let i = cleaned.length - 1; i >= 0; i--) {
		let digit = parseInt(cleaned[i], 10);
		if (isEven) {
			digit *= 2;
			if (digit > 9) digit -= 9;
		}
		sum += digit;
		isEven = !isEven;
	}
	return sum % 10 === 0;
}

// Helper function for date normalization
