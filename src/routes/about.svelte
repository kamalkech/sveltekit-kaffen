<script lang="ts">
	import HomeCarousel from '$lib/components/blocks/HomeCarousel.svelte';
	import AboutUsBlock from '$lib/components/blocks/AboutUs.svelte';
	import Services from '$lib/components/blocks/Services.svelte';
	import Menu from '$lib/components/blocks/Menu.svelte';
	import Choose from '$lib/components/blocks/Choose.svelte';
	import HomeGridCarousel from '$lib/components/blocks/HomeGridCarousel.svelte';
	import Testimontials from '$lib/components/blocks/Testimontials.svelte';
	import Numbers from '$lib/components/blocks/Numbers.svelte';
	import Blog from '$lib/components/blocks/Blog.svelte';
	import Cta from '$lib/components/blocks/CTA.svelte';
</script>

<!-- Section Started Inner -->
<section class="section kf-started-inner">
	<div
		class="kf-parallax-bg js-parallax"
		style="background-image: url(/images/history_inner_bg.jpg);"
	/>
	<div class="container">
		<h1 class="kf-h-title text-anim-1 scroll-animate" data-splitting="chars" data-animate="active">
			About Us
		</h1>
	</div>
</section>

<!-- Section About-2 -->
<section class="section kf-choose kf-choose-2">
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-5 align-self-center">
				<div class="kf-titles">
					<div class="kf-subtitle element-anim-1 scroll-animate" data-animate="active">
						About Kaffen
					</div>
					<h3 class="kf-title element-anim-1 scroll-animate" data-animate="active">
						New London Coffee Founded For Extraordinary Test
					</h3>
				</div>
				<div class="kf-text element-anim-1 scroll-animate" data-animate="active">
					<p>
						Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque
						laudantium, totam rem aperiam eaque ipsa quae abillo inventore veritatis
					</p>
				</div>
				<div class="kf-choose-list">
					<ul>
						<li class="element-anim-1 scroll-animate" data-animate="active">
							<div class="icon">
								<img src="/images/choose_icon1.png" alt="" />
							</div>
							<div class="desc">
								<h5 class="name">Natural Coffee Beans</h5>
								<div class="subname">
									Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque
								</div>
							</div>
						</li>
						<li class="element-anim-1 scroll-animate" data-animate="active">
							<div class="icon">
								<img src="/images/choose_icon2.png" alt="" />
							</div>
							<div class="desc">
								<h5 class="name">100% ISO Certification</h5>
								<div class="subname">
									Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque
								</div>
							</div>
						</li>
					</ul>
				</div>
				<a
					href="menu-coffee.html"
					class="kf-btn element-anim-1 scroll-animate"
					data-animate="active"
				>
					<span>our menu</span>
					<i class="fas fa-chevron-right" />
				</a>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 offset-lg-1">
				<div class="kf-choose-image element-anim-1 scroll-animate" data-animate="active">
					<img src="/images/about_img2.jpg" alt="" />
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Section Numbers-2 -->
<section class="section kf-numbers-2 section-bg">
	<div class="container">
		<div class="kf-numbers-items-2 row">
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
				<div class="kf-numbers-item-2 element-anim-1 scroll-animate" data-animate="active">
					<div class="icon"><i class="las la-gem">&nbsp;</i></div>
					<div class="num">256+</div>
					<div class="desc">
						<h5 class="name">Premium Clients</h5>
						<div class="subname">Sed ut perspiciatis unde</div>
					</div>
				</div>
			</div>

			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
				<div class="kf-numbers-item-2 element-anim-1 scroll-animate" data-animate="active">
					<div class="icon"><i class="las la-user-tie">&nbsp;</i></div>
					<div class="num">36+</div>
					<div class="desc">
						<h5 class="name">Professional Chefs</h5>
						<div class="subname">Sed ut perspiciatis unde</div>
					</div>
				</div>
			</div>

			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
				<div class="kf-numbers-item-2 element-anim-1 scroll-animate" data-animate="active">
					<div class="icon"><i class="las la-trophy">&nbsp;</i></div>
					<div class="num">753+</div>
					<div class="desc">
						<h5 class="name">Winning Awards</h5>
						<div class="subname">Sed ut perspiciatis unde</div>
					</div>
				</div>
			</div>

			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
				<div class="kf-numbers-item-2 element-anim-1 scroll-animate" data-animate="active">
					<div class="icon"><i class="lar la-grin-stars">&nbsp;</i></div>
					<div class="num">100+</div>
					<div class="desc">
						<h5 class="name">5 Star Reviews</h5>
						<div class="subname">Sed ut perspiciatis unde</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Section Video -->
<section class="section kf-video">
	<div class="container">
		<div
			class="kf-video-item kf-image-hover element-anim-1 scroll-animate"
			style="background-image: url(/images/video_bg.jpg);"
			data-animate="active"
		>
			<iframe
				class="js-video-iframe"
				data-src="https://www.youtube.com/embed/Gu6z6kIukgg?showinfo=0&rel=0&autoplay=1"
			/>
			<div class="play"><i class="fas fa-play">&nbsp;</i></div>
		</div>
	</div>
</section>

<!-- Section Services-2 -->
<section class="section kf-services">
	<div class="container">
		<div class="kf-services-items-2 row">
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
				<div class="kf-services-item-2 element-anim-1 scroll-animate" data-animate="active">
					<div class="image">
						<img src="/images/service_icon1.png" alt="" />
					</div>
					<div class="desc">
						<h5 class="name">Birthday Cakes</h5>
						<div class="subname">Sed ut perspiciatis unde</div>
					</div>
				</div>
			</div>

			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
				<div class="kf-services-item-2 element-anim-1 scroll-animate" data-animate="active">
					<div class="image">
						<img src="/images/service_icon2.png" alt="" />
					</div>
					<div class="desc">
						<h5 class="name">Fresh Foods</h5>
						<div class="subname">Sed ut perspiciatis unde</div>
					</div>
				</div>
			</div>

			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
				<div class="kf-services-item-2 element-anim-1 scroll-animate" data-animate="active">
					<div class="image">
						<img src="/images/service_icon3.png" alt="" />
					</div>
					<div class="desc">
						<h5 class="name">Skills Chefs</h5>
						<div class="subname">Sed ut perspiciatis unde</div>
					</div>
				</div>
			</div>

			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
				<div class="kf-services-item-2 element-anim-1 scroll-animate" data-animate="active">
					<div class="image">
						<img src="/images/service_icon4.png" alt="" />
					</div>
					<div class="desc">
						<h5 class="name">Organic Juice</h5>
						<div class="subname">Sed ut perspiciatis unde</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Section Team -->
<section class="section kf-team section-bg">
	<div class="container">
		<div class="kf-titles align-center">
			<div class="kf-subtitle element-anim-1 scroll-animate" data-animate="active">
				Experience Team Member
			</div>
			<h3 class="kf-title element-anim-1 scroll-animate" data-animate="active">
				Meet Our Professional Chefs
			</h3>
		</div>

		<div class="kf-team-items row">
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
				<div class="kf-team-item element-anim-1 scroll-animate" data-animate="active">
					<div class="desc">
						<h5 class="name">Anthony J. Bowman</h5>
						<div class="subname">Senior Chefs</div>
					</div>
					<div class="image kf-image-hover">
						<img src="/images/team1.jpg" alt="" />
						<div class="info">
							<div class="label">bowmankf@gmail.com</div>
							<div class="label">+012 (345) 678 99</div>
						</div>
						<div class="social">
							<a href="#"><i class="fab fa-facebook-f">&nbsp;</i></a>
							<a href="#"><i class="fab fa-twitter">&nbsp;</i></a>
							<a href="#"><i class="fab fa-linkedin">&nbsp;</i></a>
							<a href="#"><i class="fab fa-youtube">&nbsp;</i></a>
						</div>
					</div>
				</div>
			</div>

			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
				<div class="kf-team-item element-anim-1 scroll-animate" data-animate="active">
					<div class="desc">
						<h5 class="name">Kenny V. Gonzalez</h5>
						<div class="subname">Senior Chefs</div>
					</div>
					<div class="image kf-image-hover">
						<img src="/images/team2.jpg" alt="" />
						<div class="info">
							<div class="label">gonzalezkf@gmail.com</div>
							<div class="label">+012 (345) 678 99</div>
						</div>
						<div class="social">
							<a href="#"><i class="fab fa-facebook-f">&nbsp;</i></a>
							<a href="#"><i class="fab fa-twitter">&nbsp;</i></a>
							<a href="#"><i class="fab fa-linkedin">&nbsp;</i></a>
							<a href="#"><i class="fab fa-youtube">&nbsp;</i></a>
						</div>
					</div>
				</div>
			</div>

			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
				<div class="kf-team-item element-anim-1 scroll-animate" data-animate="active">
					<div class="desc">
						<h5 class="name">Joseph M. Lawrence</h5>
						<div class="subname">Senior Chefs</div>
					</div>
					<div class="image kf-image-hover">
						<img src="/images/team3.jpg" alt="" />
						<div class="info">
							<div class="label">lawrencekf@gmail.com</div>
							<div class="label">+012 (345) 678 99</div>
						</div>
						<div class="social">
							<a href="#"><i class="fab fa-facebook-f">&nbsp;</i></a>
							<a href="#"><i class="fab fa-twitter">&nbsp;</i></a>
							<a href="#"><i class="fab fa-linkedin">&nbsp;</i></a>
							<a href="#"><i class="fab fa-youtube">&nbsp;</i></a>
						</div>
					</div>
				</div>
			</div>

			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
				<div class="kf-team-item element-anim-1 scroll-animate" data-animate="active">
					<div class="desc">
						<h5 class="name">Charles K. Smith</h5>
						<div class="subname">Senior Chefs</div>
					</div>
					<div class="image kf-image-hover">
						<img src="/images/team4.jpg" alt="" />
						<div class="info">
							<div class="label">smithkf@gmail.com</div>
							<div class="label">+012 (345) 678 99</div>
						</div>
						<div class="social">
							<a href="#"><i class="fab fa-facebook-f">&nbsp;</i></a>
							<a href="#"><i class="fab fa-twitter">&nbsp;</i></a>
							<a href="#"><i class="fab fa-linkedin">&nbsp;</i></a>
							<a href="#"><i class="fab fa-youtube">&nbsp;</i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Section Brands -->
<section class="section kf-brands">
	<div class="container">
		<div class="kf-brands-items row">
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-2">
				<div class="kf-brands-item element-anim-1 scroll-animate" data-animate="active">
					<div class="image">
						<img src="/images/brand1.png" alt="" />
					</div>
				</div>
			</div>

			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-2">
				<div class="kf-brands-item element-anim-1 scroll-animate" data-animate="active">
					<div class="image">
						<img src="/images/brand2.png" alt="" />
					</div>
				</div>
			</div>

			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-2">
				<div class="kf-brands-item element-anim-1 scroll-animate" data-animate="active">
					<div class="image">
						<img src="/images/brand3.png" alt="" />
					</div>
				</div>
			</div>

			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-2">
				<div class="kf-brands-item element-anim-1 scroll-animate" data-animate="active">
					<div class="image">
						<img src="/images/brand4.png" alt="" />
					</div>
				</div>
			</div>

			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-2">
				<div class="kf-brands-item element-anim-1 scroll-animate" data-animate="active">
					<div class="image">
						<img src="/images/brand5.png" alt="" />
					</div>
				</div>
			</div>

			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-2">
				<div class="kf-brands-item element-anim-1 scroll-animate" data-animate="active">
					<div class="image">
						<img src="/images/brand6.png" alt="" />
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Section Testimonials Carousel -->
<Testimontials />

<!-- Section CTA -->
<Cta />
