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

<section
	class="section kf-testimonials kf-testimonials-2 section-bg"
	style="background-image: url(/images/testimonials_bg2.jpeg)"
>
	<div class="container">
		<div class="kf-titles align-center">
			<div class="kf-subtitle element-anim-1 scroll-animate" data-animate="active">
				Customer Feedback
			</div>
			<h3 class="kf-title element-anim-1 scroll-animate" data-animate="active">
				What Our Clients Say
			</h3>
		</div>

		<div class="kf-testimonials-carousel">
			<div class="swiper-container">
				<Swiper
					modules={[Navigation, Pagination, Scrollbar, A11y]}
					slidesPerView={4}
					spaceBetween={30}
					loop={false}
					watchSlidesProgress={true}
					pagination={{
						el: '.swiper-pagination',
						type: 'bullets',
						clickable: true
					}}
					navigation={false}
					{breakpoints}
				>
					<SwiperSlide>
						<div class="slide-item element-anim-1 scroll-animate" data-animate="active">
							<div class="image">
								<img src="/images/rev1.jpg" alt="" />
							</div>
							<div class="desc">
								<div class="stars">
									<i class="fas fa-star" />
									<i class="fas fa-star" />
									<i class="fas fa-star" />
									<i class="fas fa-star" />
									<i class="fas fa-star" />
								</div>
								<div class="text">
									Sed ut perspiciatis unde omnis natus error luptatem accusantium doloremque
									laudantium totam remriam eaque quae abillo
								</div>
								<h5 class="name">Frederick S. France <em>Web Deigner</em></h5>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="slide-item element-anim-1 scroll-animate" data-animate="active">
							<div class="image">
								<img src="/images/rev2.jpg" alt="" />
							</div>
							<div class="desc">
								<div class="stars">
									<i class="fas fa-star" />
									<i class="fas fa-star" />
									<i class="fas fa-star" />
									<i class="fas fa-star" />
									<i class="fas fa-star" />
								</div>
								<div class="text">
									Sed ut perspiciatis unde omnis natus error luptatem accusantium doloremque
									laudantium totam remriam eaque quae abillo
								</div>
								<h5 class="name">James M. London <em>Lawyer</em></h5>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="slide-item element-anim-1 scroll-animate" data-animate="active">
							<div class="image">
								<img src="/images/rev3.jpg" alt="" />
							</div>
							<div class="desc">
								<div class="stars">
									<i class="fas fa-star" />
									<i class="fas fa-star" />
									<i class="fas fa-star" />
									<i class="fas fa-star" />
									<i class="fas fa-star" />
								</div>
								<div class="kf-text">
									Sed ut perspiciatis unde omnis natus error luptatem accusantium doloremque
									laudantium totam remriam eaque quae abillo
								</div>
								<h5 class="name">Olivia D. New York <em>Dentist</em></h5>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="slide-item element-anim-1 scroll-animate" data-animate="active">
							<div class="image">
								<img src="/images/rev1.jpg" alt="" />
							</div>
							<div class="desc">
								<div class="stars">
									<i class="fas fa-star" />
									<i class="fas fa-star" />
									<i class="fas fa-star" />
									<i class="fas fa-star" />
									<i class="fas fa-star" />
								</div>
								<div class="kf-text">
									Sed ut perspiciatis unde omnis natus error luptatem accusantium doloremque
									laudantium totam remriam eaque quae abillo
								</div>
								<h5 class="name">Frederick S. France <em>Web Deigner</em></h5>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="slide-item element-anim-1 scroll-animate" data-animate="active">
							<div class="image">
								<img src="/images/rev2.jpg" alt="" />
							</div>
							<div class="desc">
								<div class="stars">
									<i class="fas fa-star" />
									<i class="fas fa-star" />
									<i class="fas fa-star" />
									<i class="fas fa-star" />
									<i class="fas fa-star" />
								</div>
								<div class="kf-text">
									Sed ut perspiciatis unde omnis natus error luptatem accusantium doloremque
									laudantium totam remriam eaque quae abillo
								</div>
								<h5 class="name">James M. London <em>Lawyer</em></h5>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="slide-item element-anim-1 scroll-animate" data-animate="active">
							<div class="image">
								<img src="/images/rev3.jpg" alt="" />
							</div>
							<div class="desc">
								<div class="stars">
									<i class="fas fa-star" />
									<i class="fas fa-star" />
									<i class="fas fa-star" />
									<i class="fas fa-star" />
									<i class="fas fa-star" />
								</div>
								<div class="kf-text">
									Sed ut perspiciatis unde omnis natus error luptatem accusantium doloremque
									laudantium totam remriam eaque quae abillo
								</div>
								<h5 class="name">Olivia D. New York <em>Dentist</em></h5>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
				<div class="swiper-pagination" />
			</div>
		</div>
	</div>
</section>

<style>
	.swiper-container :global(.swiper) {
		margin-left: inherit;
		margin-right: inherit;
		position: inherit;
		overflow: inherit;
		list-style: inherit;
		padding: inherit;
		z-index: inherit;
	}
</style>
