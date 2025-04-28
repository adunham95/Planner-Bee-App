export interface RoadmapItem {
	version: string;
	title: string;
	description: string;
	date?: string; // ISO date string or human-readable date
	status: 'completed' | 'current' | 'upcoming';
	features?: string[];
}

export const productRoadmap: RoadmapItem[] = [
	{
		version: '1.0.0',
		title: 'Initial Release',
		description: 'First stable version with core functionality',
		status: 'current',
		features: [
			'Basic User Account',
			'Send ECard with sharable link',
			'Basic ECard Customization',
			'Basic Store',
			'RSVP Cards',
			'Printable ECards'
		]
	},
	{
		version: '1.1.0',
		title: 'Sendable Cards',
		description: 'Improved sending of cards',
		status: 'upcoming',
		features: [
			'Schedule Send',
			'Contacts',
			'Send to Contacts',
			'Potluck Sign up',
			'Meal Train Sign Up',
			'Signatures'
		]
	},
	{
		version: '2.0.0',
		title: 'Premium Features',
		description: 'Major release with advanced functionality',
		status: 'upcoming',
		features: [
			'BeeHive Subscription',
			'Advanced Customizable Card Options',
			'Premium ECard Templated',
			'Card Analytics'
		]
	},
	{
		version: '2.1.0',
		title: 'Automation',
		description: 'Add automation to sending',
		status: 'upcoming',
		features: ['Automated date sending', 'Contact Dates']
	},
	{
		version: '2.2.0',
		title: 'Custom Templates',
		description: 'Adding custom templates',
		status: 'upcoming',
		features: ['Custom Template', 'Save Custom Templates on Profile']
	}
];
