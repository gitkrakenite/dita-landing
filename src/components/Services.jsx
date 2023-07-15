import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import axios from "../axios";
import { toast } from "react-toastify";

const Services = () => {
  const images = [
    {
      id: 1,
      title: "Laptop Repairs",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting ",
      image:
        "https://images.pexels.com/photos/163491/bike-mountain-mountain-biking-trail-163491.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      title: "Certifications",
      description: "Lukenya Hills",
      image:
        "https://images.pexels.com/photos/910307/pexels-photo-910307.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 3,
      title: "App Development",
      description: "Lukenya Resort",
      image:
        "https://images.pexels.com/photos/1147124/pexels-photo-1147124.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 4,
      title: "Cyber Security Tips",
      description: "TV Room Campus",
      image:
        "https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 5,
      title: "OS Installation",
      description: "Use Our App",
      image:
        "https://images.pexels.com/photos/3569601/pexels-photo-3569601.jpeg?auto=compress&cs=tinysrgb&w=1600",
      link: "https://chipyclique-chat.netlify.app",
    },
    {
      id: 6,
      title: "Windows Packages",
      description: "Hiking is the best",
      image:
        "https://images.pexels.com/photos/691034/pexels-photo-691034.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  const [scrollPosition, setScrollPosition] = useState(0);

  const handlePrevious = () => {
    const container = document.getElementById("image-container");
    const scrollWidth = container.scrollWidth;
    const visibleWidth = container.offsetWidth;

    setScrollPosition((prevPosition) => prevPosition - visibleWidth);
    container.scrollTo({
      left: scrollPosition - visibleWidth,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    const container = document.getElementById("image-container");
    const scrollWidth = container.scrollWidth;
    const visibleWidth = container.offsetWidth;

    setScrollPosition((prevPosition) => prevPosition + visibleWidth);
    container.scrollTo({
      left: scrollPosition + visibleWidth,
      behavior: "smooth",
    });
  };

  // fetch events from server
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/services/all");
      if (response) {
        await setServices(response.data.service);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      toast.error("Check For Events Later");
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div
      className="px-[14px] sm:px-[1em] md:px-[3em] lg:px-[5em] mt-[4em]"
      id="services"
    >
      <h2 className="text-2xl text-[#02AEEE] mb-[20px]">Our Services</h2>
      {/*  */}
      {loading ? (
        <div>
          <Spinner message="Loading Services ..." />
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="hidden sm:flex items-center justify-between w-full mb-4">
            <button
              className="text-3xl text-gray-600 focus:outline-none"
              onClick={handlePrevious}
              disabled={scrollPosition === 0}
            >
              &lt;
            </button>
            <button
              className="text-3xl text-gray-600 focus:outline-none"
              onClick={handleNext}
              disabled={scrollPosition >= images.length * 300} // Assuming each image has a fixed width of 300px
            >
              &gt;
            </button>
          </div>
          <div
            id="image-container"
            className="flex overflow-x-scroll hide-scrollbar  w-full prompt pb-2"
            style={{ scrollBehavior: "smooth" }}
          >
            {services?.map((item) => (
              <div key={item._id} className="flex-shrink-0 mx-2 relative">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-64 h-64 object-cover rounded-lg"
                  />
                </div>

                {/* {console.log(services)} */}

                <div className="mt-2">
                  <h2 className="text-lg font-bold text-zinc-600">
                    {item.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/*  */}
    </div>
  );
};

export default Services;
