// TestimonialSlider.tsx
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ClientReview from './ClientReview';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

export const TestimonialSlider = () => {
    return (
        <Carousel
            additionalTransfrom={0}
            arrows={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            centerMode={false}
            infinite
            responsive={responsive}
            itemClass="item"
        >
            <ClientReview
                image="/images/abhi2.jpeg"
                name="Abhishek Periwal"
                role="Full Stack Developer"
                review="❝ Ravi has an incredible knack for web development, always pushing the boundaries to create visually stunning and highly functional websites. His portfolio website is a testament to his dedication and talent, showcasing his skills in the most elegant manner. It's always inspiring to see his work! ❞"
            />
            <ClientReview
                image="/images/gauri.png"
                name="Gautam Kantiwal"
                role="Business Analyst"
                review="❝ Ravi's analytical approach to web development is truly remarkable.Working with him has always been a pleasure, as he consistently brings innovative ideas to the table and executes them flawlessly. ❞"
            />
            <ClientReview
                image="/images/ashok.jpg"
                name="Ashok Kumar"
                role="MERN Stack Developer"
                review="❝ His attention to detail and commitment to quality make him a standout developer. It's always exciting to see what he comes up with next. ❞"
            />
            <ClientReview
                image="/images/kanav.jpeg"
                name="Kanav Chauhan"
                role="A.I Enthusiast"
                review="❝ Leadership is the capacity to inspire others to achieve greatness, and Ravi embodies this spirit with passion and determination. ❞"
            />
        </Carousel>
    );
};

export default TestimonialSlider;
