import React from "react";
import TestimonialsCarousel from "./TestimonialsCarousel";

const Testimonials = () => {
  return (
    <div id="feedback" className="testimonials">
      <h1>Comment from close ones</h1>
      <div className="container">
        <div className="testimonials-content">
          <TestimonialsCarousel />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
