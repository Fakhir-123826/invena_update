// components/Testimonials.jsx (with react-icons)
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// import "swiper/css";
// import "swiper/css/navigation";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      image: "/assets/images/testimonials/06.webp",
      icon: "/assets/images/testimonials/icons/03.webp",
      description:
        "I can't recommend The Gourmet Haven enough. It's a place for special occasions, date nights, or whenever you're in the mood for a culinary adventure. The combination of exceptional.",
      name: "William Henry",
      designation: "Designer at",
      company: "Vertex Agency",
    },
    {
      id: 2,
      image: "/assets/images/testimonials/06.webp",
      icon: "/assets/images/testimonials/icons/03.webp",
      description:
        "I can't recommend The Gourmet Haven enough. It's a place for special occasions, date nights, or whenever you're in the mood for a culinary adventure. The combination of exceptional.",
      name: "William Henry",
      designation: "Designer at",
      company: "Vertex Agency",
    },
    {
      id: 3,
      image: "/assets/images/testimonials/06.webp",
      icon: "/assets/images/testimonials/icons/03.webp",
      description:
        "I can't recommend The Gourmet Haven enough. It's a place for special occasions, date nights, or whenever you're in the mood for a culinary adventure. The combination of exceptional.",
      name: "William Henry",
      designation: "Designer at",
      company: "Vertex Agency",
    },

    // ... other testimonials
  ];

  return (
    <div className="rts-testimonails-area-main rts-section-gapBottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-style-five center">
              <span className="pre">Testimonial</span>
              <h2 className="title">
                What They Say About <br /> Our Company
              </h2>
            </div>
          </div>
        </div>

        <div className="row mt--45">
          <div className="col-lg-12">
            <div className="swiper mySwiper-testimoanils-7" dir="ltr">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                loop={true}
                className="mySwiper-testimoanils-7"
                dir="ltr"
              >
                {testimonialsData.map((testimonial, index) => (
                  <SwiperSlide key={testimonial.id}>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={index}
                    >
                      <div className="testimonails-area-seven">
                        <div className="thumbnail-testimoanis">
                          <img src={testimonial.image} alt="testimonials" />
                        </div>

                        <div className="right-content-area-main-wrapper">
                          <img src={testimonial.icon} alt="testimonials" />
                          <p className="disc">{testimonial.description}</p>

                          <div className="botton-user">
                            <h6 className="title">{testimonial.name}</h6>
                            <p className="desig">
                              {testimonial.designation}{" "}
                              <span>{testimonial.company}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

                {/* Navigation Buttons with react-icons */}
                <div className="swiper-button-next border-0 rounded-0">
                  <FaArrowRight style={{ color: "#20282D", width:"16px" }}  />
                  <svg
                    className="swiper-navigation-icon"
                    width="11"
                    height="20"
                    viewBox="0 0 11 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <div className="swiper-button-prev border-0 rounded-0">
                  <FaArrowLeft style={{ color: "#20282D", width:"16px" }}  />
                  <svg
                    className="swiper-navigation-icon"
                    width="11"
                    height="20"
                    viewBox="0 0 11 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
