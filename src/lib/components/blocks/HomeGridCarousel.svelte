<script lang="ts">
	import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
	import { Swiper, SwiperSlide } from 'swiper/svelte';

	const breakpoints = {
		0: {
			slidesPerView: 1,
			spaceBetween: 30
		},
		767: {
			slidesPerView: 2,
			spaceBetween: 30
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 30
		},
		1200: {
			slidesPerView: 4,
			spaceBetween: 30
		}
	};
</script>

<section class="section kf-grid-carousel">
	<div class="container">
		<Swiper
			class="swiper-container"
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			spaceBetween={30}
			slidesPerView={3}
			watchSlidesProgress={true}
			pagination={false}
			navigation={false}
			loop={true}
			{breakpoints}
		>
			<SwiperSlide>
				<div class="slide-item element-anim-1 scroll-animate" data-animate="active">
					<div class="image kf-image-hover">
						<a href="/images/grid_gal2.jpg" class="has-popup-image"
							><img src="/images/grid_gal2.jpg" alt="" /></a
						>
					</div>
					<div class="desc">
						<h5 class="name">Latte</h5>
					</div>
				</div>
			</SwiperSlide>

			<SwiperSlide>
				<div class="slide-item element-anim-1 scroll-animate" data-animate="active">
					<div class="image kf-image-hover">
						<a href="/images/grid_gal3.jpg" class="has-popup-image"
							><img src="/images/grid_gal3.jpg" alt="" /></a
						>
					</div>
					<div class="desc">
						<h5 class="name">Cappuccino</h5>
					</div>
				</div>
			</SwiperSlide>

			<SwiperSlide>
				<div class="slide-item element-anim-1 scroll-animate" data-animate="active">
					<div class="image kf-image-hover">
						<a href="/images/grid_gal4.jpg" class="has-popup-image"
							><img src="/images/grid_gal4.jpg" alt="" /></a
						>
					</div>
					<div class="desc">
						<h5 class="name">Iced Coffee</h5>
					</div>
				</div>
			</SwiperSlide>

			<SwiperSlide>
				<div class="slide-item element-anim-1 scroll-animate" data-animate="active">
					<div class="image kf-image-hover">
						<a href="/images/grid_gal5.jpg" class="has-popup-image"
							><img src="/images/grid_gal5.jpg" alt="" /></a
						>
					</div>
					<div class="desc">
						<h5 class="name">Espresso</h5>
					</div>
				</div>
			</SwiperSlide>

			<SwiperSlide>
				<div class="slide-item element-anim-1 scroll-animate" data-animate="active">
					<div class="image kf-image-hover">
						<a href="/images/grid_gal1.jpg" class="has-popup-image"
							><img src="/images/grid_gal1.jpg" alt="" /></a
						>
					</div>
					<div class="desc">
						<h5 class="name">Black Coffee</h5>
					</div>
				</div>
			</SwiperSlide>

			<SwiperSlide>
				<div class="slide-item element-anim-1 scroll-animate" data-animate="active">
					<div class="image kf-image-hover">
						<a href="/images/grid_gal2.jpg" class="has-popup-image"
							><img src="/images/grid_gal2.jpg" alt="" /></a
						>
					</div>
					<div class="desc">
						<h5 class="name">Latte</h5>
					</div>
				</div>
			</SwiperSlide>

			<SwiperSlide>
				<div class="slide-item element-anim-1 scroll-animate" data-animate="active">
					<div class="image kf-image-hover">
						<a href="/images/grid_gal3.jpg" class="has-popup-image"
							><img src="/images/grid_gal3.jpg" alt="" /></a
						>
					</div>
					<div class="desc">
						<h5 class="name">Cappuccino</h5>
					</div>
				</div>
			</SwiperSlide>

			<SwiperSlide>
				<div class="slide-item element-anim-1 scroll-animate" data-animate="active">
					<div class="image kf-image-hover">
						<a href="/images/grid_gal4.jpg" class="has-popup-image"
							><img src="/images/grid_gal4.jpg" alt="" /></a
						>
					</div>
					<div class="desc">
						<h5 class="name">Iced Coffee</h5>
					</div>
				</div>
			</SwiperSlide>

			<SwiperSlide>
				<div class="slide-item element-anim-1 scroll-animate" data-animate="active">
					<div class="image kf-image-hover">
						<a href="/images/grid_gal5.jpg" class="has-popup-image"
							><img src="/images/grid_gal5.jpg" alt="" /></a
						>
					</div>
					<div class="desc">
						<h5 class="name">Espresso</h5>
					</div>
				</div>
			</SwiperSlide>

			<SwiperSlide>
				<div class="slide-item element-anim-1 scroll-animate" data-animate="active">
					<div class="image kf-image-hover">
						<a href="/images/grid_gal1.jpg" class="has-popup-image"
							><img src="/images/grid_gal1.jpg" alt="" /></a
						>
					</div>
					<div class="desc">
						<h5 class="name">Black Coffee</h5>
					</div>
				</div>
			</SwiperSlide>
		</Swiper>
	</div>
</section>

<style>
	.container :global(.swiper) {
		overflow: inherit;
	}
</style>
