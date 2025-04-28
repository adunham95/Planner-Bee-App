import { error } from '@sveltejs/kit';
import QRCode from 'qrcode'; // Import the library

export const GET = async ({ params }) => {
	try {
		// const { data } = await request.json(); // Get the data to encode

		const url = `/ecard/${params.number}`;

		console.log(url);

		const qrCode = await QRCode.toBuffer(url, {
			width: 150,
			margin: 1,
			color: {
				light: '#ffffff',
				dark: '#000000'
			}
		});

		return new Response(qrCode, {
			headers: {
				'Content-Type': 'image/png'
			}
		});
	} catch (err) {
		console.log(err);
		return error(500, 'Failed to generate QR code');
	}
};
