// components/Blog.jsx
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

const Blog = () => {
  const blogData = [
    {
      id: 1,
      category: "Business Solution",
      author: "David Dolean",
      title: "Building a Brand That from Market Leaders",
      image: "/assets/images/blog/01.webp",
      link: "/blog-details"
    },
    {
      id: 2,
      category: "Business Solution",
      author: "David Dolean",
      title: "Transforming Your Best Of Approach to Business",
      image: "/assets/images/blog/02.webp",
      link: "/blog-details"
    },
    {
      id: 3,
      category: "Business Solution",
      author: "David Dolean",
      title: "The quick settle tips of the new ages exist",
      image: "/assets/images/blog/03.webp",
      link: "/blog-details"
    },
    {
      id: 4,
      category: "Business Solution",
      author: "David Dolean",
      title: "Building a Brand That from Market Leaders",
      image: "/assets/images/blog/01.webp",
      link: "/blog-details"
    },
    {
      id: 5,
      category: "Business Solution",
      author: "David Dolean",
      title: "Transforming Your Best Of Approach to Business",
      image: "/assets/images/blog/02.webp",
      link: "/blog-details"
    },
    {
      id: 6,
      category: "Business Solution",
      author: "David Dolean",
      title: "The quick settle tips of the new ages exist",
      image: "/assets/images/blog/03.webp",
      link: "/blog-details"
    }
  ];

  return (
    <div id="blog" className="rts-blog-area rts-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="center">
              <span className="bg-content">Blog</span>
              <span className="pre">Blog &amp; News</span>
              <h2 className="title">Recent blog post</h2>
            </div>
          </div>
        </div>

        <div className="row g-5 mt--20">
          <div className="col-lg-12">
            <div className="swiper mySwiper-blog-one">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={3}
                pagination={{
                  clickable: true,
                  el: '.swiper-pagination',
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30
                  }
                }}
                className="mySwiper-blog-one"
              >
                {blogData.map((blog, index) => (
                  <SwiperSlide key={blog.id}>
                    <div 
                      className="swiper-slide" 
                      data-swiper-slide-index={index}
                    >
                      <div className="single-blog-area-one">
                        <p>
                          {blog.category} / <span>by {blog.author}</span>
                        </p>
                        <a href={blog.link}>
                          <h4 className="title">{blog.title}</h4>
                        </a>
                        <div className="bottom-details">
                          <a href={blog.link} className="thumbnail">
                            <img 
                              loading="lazy" 
                              src={blog.image} 
                              alt="blog-area" 
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

                {/* Pagination */}
                <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;