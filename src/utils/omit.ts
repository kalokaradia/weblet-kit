export function omit<T extends object, K extends keyof T>(
	obj: T,
	keys: K[],
): Omit<T, K> {
	const result = {} as Omit<T, K>;
	for (const key of Object.keys(obj)) {
		if (!keys.includes(key as K)) {
			(result as any)[key] = obj[key as keyof T];
		}
	}
	return result;
}
