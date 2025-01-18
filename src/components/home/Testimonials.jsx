import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Testimonials.module.css";
import testimonialsData from "../../data/testimonialsData";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 2
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection}>
      <h2 className={styles.heading}>Client Testimonials</h2>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={4000}
        keyBoardControl
        containerClass={styles.carouselContainer}
        itemClass={styles.carouselItem}
      >
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className={styles.testimonialCard}>
            <div className={styles.clientHeader}>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className={styles.clientImage}
              />
              <div>
                <h3 className={styles.clientName}>{testimonial.name}</h3>
                <div className={styles.countryInfo}>
                  <img
                    src={testimonial.flag}
                    alt={testimonial.country}
                    className={styles.countryFlag}
                  />
                  <span>{testimonial.country}</span>
                </div>
              </div>
            </div>

            <p className={styles.review}>"{testimonial.review}"</p>

            <div className={styles.rating}>
              {Array.from({ length: testimonial.rating }, (_, index) => (
                <span key={index}>⭐</span>
              ))}
            </div>
          </div>
        ))}
      </Carousel>

      <button
        className={styles.fiverrButton}
        onClick={() => window.open("https://www.fiverr.com/shaiq07?public_mode=true", "_blank")}
      >
        See more on Fiverr
      </button>
    </section>
  );
};

export default Testimonials;
