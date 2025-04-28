import { converter } from 'culori';

const hexToOklch = converter('oklch');

export function hexToOklchCssVar(hex: string) {
	const color = hexToOklch(hex);
	if (!color) throw new Error('Invalid color');

	// Convert to OKLCH CSS variable string
	const l = (color.l * 100).toFixed(2);
	const c = color.c.toFixed(4);
	const h = Math.round(color.h ?? 0);

	return `oklch(${l}% ${c} ${h})`;
}

// // === Usage ===
// const hex = '#1d4ed8';
// const oklchVar = hexToOklchCssVar(hex);

// console.log(`--color-custom: ${oklchVar};`);
