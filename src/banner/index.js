import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { bannerImages } from "../data/data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation, Autoplay } from "swiper/modules";

const Banner = () => {
	return (
		<>
			<Container fluid className="px-0">
				<div
					className="banner"
					style={{ backgroundImage: 'url("/images/background.png")' }}
				>
					<Row className="mx-0">
						<Col lg={6}>
							<div className="banner__block1">
								<div className="banner__box1">
									<img className="banner__logo" src="/images/logo.png" alt="" />
									<div className="inner-box">
										<Swiper
											slidesPerView={1}
											spaceBetween={10}
											autoplay={{
												delay: 3000,
												disableOnInteraction: false,
											}}
											breakpoints={{
												640: {
													slidesPerView: 1,
													spaceBetween: 20,
												},
												768: {
													slidesPerView: 2,
													spaceBetween: 40,
												},
												1024: {
													slidesPerView: 3,
													spaceBetween: 50,
												},
											}}
											modules={[Navigation, Autoplay]}
											className="mySwiper"
										>
											{bannerImages.map((image, index) => (
												<SwiperSlide key={index}>
													<img
														className="inner-box__image"
														src={image.image}
														alt="image"
													/>
												</SwiperSlide>
											))}
										</Swiper>
									</div>
									<div className="banner__content">
										<h2 className="banner__title">
											we are <br />
											comming soon
										</h2>
										<p className="banner__text">
											Our exciting new website is coming soon! Check back
											later...
										</p>
										<a
											className="text-decoration-none d-flex gap-3 mb-2"
											href="tel:+977 981-7929593 "
										>
											<i className="ri-phone-fill"></i>
											<span className="contact-info">+977 981-7929593</span>
										</a>
										<a
											className="text-decoration-none d-flex gap-3 mb-2"
											href="tel:+977 981-7929593 "
										>
											<i className="ri-mail-fill"></i>

											<span className="contact-info">
												hafnernepalpvtltd@gmail.com
											</span>
										</a>
										<p>
											<i className="ri-map-pin-fill"></i>
											<span className="contact-info">
												Head Office : Sukrapath -5, Biratnagar, Nepal
											</span>
										</p>
										<p>
											<i className="ri-map-pin-fill"></i>
											<span className="contact-info">
												Branch Office : Battisputali Rammandir Marg, Kathmandu
											</span>
										</p>
									</div>

									<div className="credits">
										<p>
											Powered By{" "}
											<a href="https://infinityinfosys.com/">
												Infinity Infosys.
											</a>
										</p>
									</div>
								</div>
								<div className="banner__box2">
									<div className="box1"></div>
									<div className="box2"></div>
								</div>
							</div>
						</Col>
						<Col lg={6}>
							<div className="banner__block2 justify-content-center">
								<img
									className="banner__image"
									src="/images/banner-img.png"
									alt=""
								/>
							</div>
						</Col>
					</Row>
					<div className="banner__social--icons">
						<a
							href="https://www.facebook.com/HafnerAppliances/"
							target="_blank"
							className="icon"
						>
							<i className="ri-facebook-fill"></i>
						</a>
						<a
							href="https://www.instagram.com/HafnerAppliances"
							className="icon"
						>
							<i class="ri-instagram-line"></i>
						</a>
						<a
							href="https://www.linkedin.com/company/hafnerappliances/about/"
							target="_blank"
							className="icon"
						>
							<i className="ri-linkedin-fill"></i>
						</a>
					</div>
					<div className="banner__corner"></div>
				</div>
			</Container>
		</>
	);
};

export default Banner;
