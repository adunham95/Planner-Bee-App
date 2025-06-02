export function truncateString(str: string, num: number) {
	if (str.length > num - 3) {
		return str.slice(0, num) + '...';
	} else {
		return str;
	}
}
