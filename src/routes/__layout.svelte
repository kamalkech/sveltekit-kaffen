<script lang="ts">
	import Header from '$lib/components/partials/header.svelte';
	import Footer from '$lib/components/partials/footer.svelte';
</script>

<div class="bg">
	<!-- Header -->
	<Header />

	<!-- Wrapper -->
	<div class="wrapper">
		<slot />
	</div>

	<!-- Footer -->
	<Footer />
</div>
