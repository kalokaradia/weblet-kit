export const isURL = (str: unknown): boolean => {
	if (typeof str !== "string" || str.trim() === "") {
		return false;
	}

	const input = str.trim();

	// Daftar protokol yang dianggap valid
	const validProtocols = new Set([
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
		"zoom:",
	]);

	// Modern check using URL.canParse
	if (typeof URL.canParse === "function") {
		if (!URL.canParse(input)) return false;
		const protocol = new URL(input).protocol;
		return validProtocols.has(protocol);
	}

	// Fallback for environments without URL.canParse
	try {
		const url = new URL(input);
		return validProtocols.has(url.protocol);
	} catch {
		return false;
	}
};
