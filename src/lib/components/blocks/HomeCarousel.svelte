<script lang="ts">
	import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
</script>

<section class="section kf-started-slider">
	<div class="swiper-container">
		<Swiper
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			spaceBetween={0}
			slidesPerView={1}
			navigation
			loop={true}
			scrollbar={{ draggable: true }}
			on:slideChange={() => console.log('slide change')}
			on:swiper={(e) => console.log(e.detail[0])}
		>
			<SwiperSlide>
				<div class="kf-started-item">
					<div
						class="slide js-parallax"
						style="background-image: url(/images/started_img_n6.jpg)"
					/>
					<div class="container">
						<div class="description align-left element-anim-1">
							<div class="subtitles">Welcome to the Kaffen</div>
							<h2 class="name text-anim-1" data-splitting="chars">
								The London <br />Coffee House
							</h2>
							<div class="kf-bts">
								<a href="menu-restaurant.html" class="kf-btn">
									<span>explore more</span>
									<i class="fas fa-chevron-right" />
								</a>
								<a href="reservation.html" class="kf-btn dark-btn">
									<span>get delivery</span>
									<i class="fas fa-chevron-right" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div class="kf-started-item">
					<div
						class="slide js-parallax"
						style="background-image: url(/images/started_img_n5.jpg)"
					/>
					<div class="container">
						<div class="description align-left element-anim-1">
							<div class="subtitles">Welcome to the Kaffen</div>
							<h2 class="name text-anim-1" data-splitting="chars">
								The Paris<br />Coffee House
							</h2>
							<div class="kf-bts">
								<a href="menu-coffee.html" class="kf-btn">
									<span>explore more</span>
									<i class="fas fa-chevron-right" />
								</a>
								<a href="reservation.html" class="kf-btn dark-btn">
									<span>get delivery</span>
									<i class="fas fa-chevron-right" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div class="kf-started-item">
					<div
						class="slide js-parallax"
						style="background-image: url(/images/started_img_n3.jpg)"
					/>
					<div class="container">
						<div class="description align-left">
							<div class="subtitles">Welcome to the Kaffen</div>
							<h2 class="name text-anim-1" data-splitting="chars">
								Great Coffee <br />Good Vibes
							</h2>
							<div class="kf-bts">
								<a href="menu-coffee.html" class="kf-btn">
									<span>explore more</span>
									<i class="fas fa-chevron-right" />
								</a>
								<a href="reservation.html" class="kf-btn dark-btn">
									<span>get delivery</span>
									<i class="fas fa-chevron-right" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</SwiperSlide>
		</Swiper>
	</div>
</section>
