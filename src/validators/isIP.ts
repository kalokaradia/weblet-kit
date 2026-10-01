export function isIP(text: unknown): boolean {
	if (typeof text !== "string") return false;
	const ip = text.trim();

	// IPv4
	const ipv4Regex = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
	if (ipv4Regex.test(ip)) {
		return ip.split(".").every((part) => {
			const num = Number(part);
			return num >= 0 && num <= 255 && String(num) === part; // Hindari "01" → 1 ≠ "01"
		});
	}

	// IPv6: Use a simple parsing approach because a full regex is very complex
	try {
		const addr = ip.includes(":") ? ip : null;
		if (!addr) return false;
		const parts = addr.split(":");
		if (parts.length > 8) return false;
		if (addr === "::") return true;
		let emptyGroupCount = 0;
		for (const part of parts) {
			if (part === "") {
				emptyGroupCount++;
				if (emptyGroupCount > 1) return false;
			} else if (!/^[0-9a-fA-F]{1,4}$/.test(part)) {
				return false;
			}
		}
		return true;
	} catch {
		return false;
	}
}
