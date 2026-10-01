export function memoize<T extends (...args: any[]) => any>(fn: T): T {
	if (typeof fn !== "function") {
		throw new TypeError("Expected a function to memoize");
	}

	const cache = new Map<string, ReturnType<T>>();

	const memoized = (...args: Parameters<T>): ReturnType<T> => {
		// Use JSON.stringify to create deterministic keys
		// Safe for primitive arguments and simple object literals
		const key = args.length ? JSON.stringify(args) : "__noargs__";

		if (cache.has(key)) {
			return cache.get(key)!;
		}

		const result = fn(...args);
		cache.set(key, result);
		return result;
	};

	Object.defineProperty(memoized, "cache", {
		value: cache,
		writable: false,
		enumerable: false,
		configurable: false,
	});

	return memoized as T;
}

// 2.2.0
