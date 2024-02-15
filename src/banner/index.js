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
        <div className="banner">
          <Row className="mx-0">
            <Col lg={6}>
              <div className="banner__block1">
                <div className="banner__box1">
                  <img className="banner__logo" src="/images/logo.png" alt="" />
                  <div className="banner__content">
                    <h2 className="banner__title">
                      we are <br />
                      comming soon
                    </h2>
                    {/* <p className="banner__text">
                      Our exciting new website is coming soon! Check back
                      later...
                    </p> */}
                    <p>
                      <i className="ri-phone-fill"></i>
                      <span className="contact-info">012046068287</span>
                    </p>
                    <p>
                      <i className="ri-mail-fill"></i>

                      <span className="contact-info"> Info@hafner.co.in</span>
                    </p>
                    <p>
                      <i className="ri-map-pin-fill"></i>
                      <span className="contact-info">
                        A 1502, Arihant Tower, Greater Noida , Uttar
                        Pradesh-201306, India
                      </span>
                    </p>
                  </div>

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
                </div>
                <div className="banner__box2">
                  <div className="box1"></div>
                  <div className="box2"></div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="banner__block2">
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
              href="https://www.facebook.com/hafner.india"
              target="_blank"
              className="icon"
            >
              <i className="ri-facebook-fill"></i>
            </a>
            <a href="#" className="icon">
              <i class="ri-instagram-line"></i>
            </a>
          </div>
          <div className="banner__corner"></div>
        </div>
      </Container>
    </>
  );
};

export default Banner;
