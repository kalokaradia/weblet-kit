export const isMimeType = (str: string): boolean => {
	if (typeof str !== "string") return false;

	const input = str.trim();
	if (!input) return false;

	const validTypes = [
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
		"x",
	];

	const mimePattern = new RegExp(
		`^(?:${validTypes.join("|")})/[a-z0-9.+-]{1,127}$`,
		"i"
	);

	return mimePattern.test(input);
};

// 2.2.0
