export const eCardComponents = [
	{
		id: 'title',
		name: 'Title',
		description: 'Display a title',
		editComponentKey: 'text',
		displayComponentKey: 'title',
		hasOptions: false,
		hasCustomStyles: true
	},
	{
		id: 'message',
		name: 'Message',
		description: 'Write a custom message',
		editComponentKey: 'textArea',
		displayComponentKey: 'message',
		hasOptions: false,
		hasCustomStyles: true
	},
	{
		id: 'banner',
		name: 'Banner',
		description: 'Add a banner image',
		editComponentKey: 'imageUpload',
		displayComponentKey: 'banner',
		hasOptions: false,
		hasCustomStyles: true
	},
	{
		id: 'event',
		name: 'Event',
		description: 'Add basic event details',
		editComponentKey: 'event',
		displayComponentKey: 'event',
		hasOptions: false,
		hasCustomStyles: false
	},
	{
		id: 'color-list',
		name: 'Color List',
		description: 'Pick a color',
		editComponentKey: 'colorList',
		devComponentKey: 'colorInput',
		displayComponentKey: 'color',
		hasOptions: true,
		hasCustomStyles: true,
		options: [
			'#FF0000',
			'#F08080',
			'#FFA07A',
			'#FF8C00',
			'#e6b48a',
			'#e6b89f',
			'#e6e68a',
			'#8cd9a6',
			'#89d1b3',
			'#20B2AA',
			'#40E0D0',
			'#00CED1',
			'#90dce0',
			'#8cc6e6',
			'#87CEFA',
			'#000080',
			'#b48ce6',
			'#BA55D3',
			'#DA70D6',
			'#d7a8e6',
			'#c89ccf',
			'#a47ba4',
			'#FF00FF',
			'#FF69B4',
			'#e6a8b3',
			'#e68a8e',
			'#A52A2A',
			'#800000',
			'#808080'
		]
	},
	{
		id: 'color-input',
		name: 'Color Input',
		description: 'Pick a color',
		editComponentKey: 'colorInput',
		displayComponentKey: 'color',
		hasOptions: false,
		hasCustomStyles: false
	}
];

export function getComponentDetailsByID(key: string) {
	const data = eCardComponents.find((comp) => comp.id === key);
	if (!data) {
		return {
			id: '',
			name: '',
			description: '',
			editComponentKey: 'text',
			devComponentKey: 'text',
			displayComponentKey: 'text',
			hasOptions: false,
			hasCustomStyles: false
		};
	}
	return data;
}
