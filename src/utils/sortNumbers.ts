export const sortNumbers = (
	arr: number[],
	order: "asc" | "desc" = "asc",
): number[] => {
	if (!Array.isArray(arr)) return [];
	return [...arr].sort((a, b) => (order === "asc" ? a - b : b - a));
};
