<script lang="ts">
	import CategorySections from '$lib/ShopSections/CategorySections.svelte';
	import FeauturesProducts from '$lib/ShopSections/FeauturesProducts.svelte';
	import HowItWorks from '$lib/ShopSections/HowItWorks.svelte';
	import Promo from '$lib/ShopSections/Promo.svelte';
	import SplitImageHeader from '$lib/ShopSections/SplitImageHeader.svelte';

	const { data } = $props();

	$inspect(data);
</script>

<SplitImageHeader
	headline="Create, Send, and Celebrate"
	description="Make every occasion special with our all-in-one digital platform for invitations, RSVPs, and event planning. Whether it’s a birthday, wedding, business event, or holiday celebration, we make it easy to connect with your guests in a meaningful way."
	imageURL="/images/pexels-karolina-grabowska-5473156.jpg"
/>

<FeauturesProducts products={data.products.map((p) => p.ecardTemplate)} href="/shop/ecard" />

<!-- <CategorySections categories={data.categories} /> -->

<HowItWorks />

<Promo
	headline="Sign Up to Bee a Member"
	cta="Join The BeeHive"
	description="Access Premium cards, additional features, and automates sends"
	imgURL="/images/pexels-sn-che-3918651-12391587.jpg"
/>
