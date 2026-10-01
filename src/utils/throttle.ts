export const throttle = <T extends (...args: any[]) => any>(
	func: T,
	limit: number,
): ((...args: Parameters<T>) => void) => {
	let inThrottle = false;
	return (...args: Parameters<T>) => {
		if (!inThrottle) {
			func.apply(undefined, args);
			inThrottle = true;
			setTimeout(() => {
				inThrottle = false;
			}, limit);
		}
	};
};

// 1.1.0
