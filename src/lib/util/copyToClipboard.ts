export async function copyToClipboard(text: string) {
	const type = 'text/plain';
	const clipboardItemData = {
		[type]: text
	};
	const clipboardItem = new ClipboardItem(clipboardItemData);
	await navigator.clipboard.write([clipboardItem]);
}
