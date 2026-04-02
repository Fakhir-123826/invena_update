// components/ProjectsData.jsx
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      image: "/assets/images/16.webp",
      icon: "/assets/images/img20.svg",
      title: "Pro Business Solution",
      category: "Case Study, Growth",
      description:
        "Ornare etiam laoreet dictumst nisl quisque scelerisque cras ut porta interdum purus mattis iaculis litora turpis torquent posuere sodales himenaeos",
      link: "/project-details",
    },
    {
      id: 2,
      image: "/assets/images/16.webp",
      icon: "/assets/images/img20.svg",
      title: "Pro Business Solution",
      category: "Case Study, Growth",
      description:
        "Ornare etiam laoreet dictumst nisl quisque scelerisque cras ut porta interdum purus mattis iaculis litora turpis torquent posuere sodales himenaeos",
      link: "/project-details",
    },
    {
      id: 3,
      image: "/assets/images/16.webp",
      icon: "/assets/images/img20.svg",
      title: "Pro Business Solution",
      category: "Case Study, Growth",
      description:
        "Ornare etiam laoreet dictumst nisl quisque scelerisque cras ut porta interdum purus mattis iaculis litora turpis torquent posuere sodales himenaeos",
      link: "/project-details",
    },
  ];

  return (
    <div
      id="project"
      className="rts-project-area rts-section-gap without-bg-image"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-style-five center">
              <span className="pre">Popular Projects</span>
              <h2 className="title">Our Completed Projects</h2>
            </div>
          </div>
        </div>

        <div className="row mt--50">
          <div className="col-lg-12">
            <div className="project-swiper-5-area">
              <div className="swiper mySwiper-project-five" dir="ltr">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={1}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  pagination={{
                    type: "fraction",
                    clickable: true,
                    formatFractionCurrent: (number) =>
                      number.toString().padStart(2, "0"),
                    formatFractionTotal: (number) =>
                      number.toString().padStart(2, "0"),
                    renderFraction: (currentClass, totalClass) => {
                      return '<span class="' + currentClass + '"></span> / <span class="' + totalClass + '"></span>';
                    }
                  }}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  className="mySwiper-project-five"
                  dir="ltr"
                >
                  {/* Swiper Wrapper - Contains only slides */}
                  <div className="swiper-wrapper">
                    {projectsData.map((project, index) => (
                      <SwiperSlide key={project.id}>
                        <div
                          className="swiper-slide"
                          data-swiper-slide-index={index}
                        >
                          <div className="row g-5">
                            <div className="col-lg-7">
                              <div className="thumbnail-project-5">
                                <img src={project.image} alt="project" />
                              </div>
                            </div>
                            <div className="col-lg-5">
                              <div className="project-content-left-5">
                                <div className="icon">
                                  <img src={project.icon} alt="project" />
                                </div>
                                <div className="title-area">
                                  <h6 className="title">{project.title}</h6>
                                  <span>{project.category}</span>
                                </div>
                                <div className="inner">
                                  <p className="disc">{project.description}</p>
                                  <a
                                    className="rts-btn btn-primary btn-white"
                                    href={project.link}
                                  >
                                    View Project
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </div>

                  {/* Next Button */}
                  <div className="swiper-button-next">
                    <FaArrowRight style={{ color: "#20282D", width: "16px" }} />
                  </div>
                  
                  {/* Prev Button */}
                  <div className="swiper-button-prev">
                    <FaArrowLeft style={{ color: "#20282D", width: "16px" }} />
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;