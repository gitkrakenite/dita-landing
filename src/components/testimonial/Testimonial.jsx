import { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import "./testimonial.css";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {}, []);

  const dummyFeed = [
    {
      id: 1,
      image:
        "https://cdn.sanity.io/images/44oo3zhq/production/3c35aff1c04226b7156cbecef4368a4302e85aed-5752x3835.jpg?rect=1471,0,2577,2880",
      name: "Chris Austin",
      company: "Carrefour",
      feedback:
        "Working on tough projects really requires a partner who is both hardworking and supportive. It requires someone willing to learn fast and adapt to changes. I can say without doubt that John is all that. I wish you great fortune as you soldier on with your career.",
    },
    {
      id: 2,
      image:
        "https://cdn.sanity.io/images/44oo3zhq/production/196affc8e1cc55a2d04a59e77af6b0112f703ebf-1678x1314.jpg",
      name: "Ruth Makena",
      company: "Adorn Beauty",
      feedback:
        "My salon seriously needed a good website where my clients could check out my services and learn about offers. I contracted Mr. Clarke to tackle this challenge and all I can say is that he went above and beyond to make it work. We are happy clients",
    },
    {
      id: 3,
      image:
        "https://cdn.sanity.io/images/44oo3zhq/production/f96cbbb22a191c4b06ad39111d6a6ab40257b254-6016x4016.jpg",
      name: "Chris Austin",
      company: "Carrefour",
      feedback:
        "I was actually stuck on a react project I was doing. I had a strict deadline and I was really overwhelmed. I reached out and handed over my work and he did not disappoint even under considerable pressure.",
    },
  ];

  return (
    <>
      <h6>Testimonials and Reviews</h6>
      {dummyFeed.map((item) => (
        <div key={item.id}>
          <>
            <div className="app__testimonial-item app__flex">
              <img src={item.image} alt="testimonial" />
              <div className="app__testimonial-content">
                <p className="p-text">{item.feedback}</p>
                <div>
                  <h4 className="bold-text">{item.name}</h4>
                  <h5 className="p-text">{item.company}</h5>
                </div>
              </div>

              {/* second */}
              <div className="app__testimonial-btns app__flex">
                <div
                  className="app__flex"
                  onClick={() =>
                    handleClick(
                      currentIndex === 0
                        ? testimonials.length - 1
                        : currentIndex - 1
                    )
                  }
                >
                  <HiChevronLeft />
                </div>

                <div
                  className="app__flex"
                  onClick={() =>
                    handleClick(
                      currentIndex === testimonials.length - 1
                        ? 0
                        : currentIndex + 1
                    )
                  }
                >
                  <HiChevronRight />
                </div>
              </div>
            </div>
          </>
        </div>
      ))}
    </>
  );
};

export default Testimonial;
