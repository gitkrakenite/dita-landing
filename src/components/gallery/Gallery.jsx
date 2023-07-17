import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import axios from "../../axios";
import { toast } from "react-toastify";

const Gallery = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handlePrevious = () => {
    const container = document.getElementById("gallery-container");
    const scrollWidth = container.scrollWidth;
    const visibleWidth = container.offsetWidth;

    setScrollPosition((prevPosition) => prevPosition - visibleWidth);
    container.scrollTo({
      left: scrollPosition - visibleWidth,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    const container = document.getElementById("gallery-container");
    const scrollWidth = container.scrollWidth;
    const visibleWidth = container.offsetWidth;

    setScrollPosition((prevPosition) => prevPosition + visibleWidth);
    container.scrollTo({
      left: scrollPosition + visibleWidth,
      behavior: "smooth",
    });
  };

  // fetch gallery from server
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/gallery/all");
      if (response) {
        await setGallery(response.data.gallery);
        console.log(response.data);
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
      <h2 className="text-2xl text-[#02AEEE] mb-[20px]">Our Gallery</h2>
      {/*  */}
      {loading ? (
        <div>
          <Spinner />
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
              disabled={scrollPosition >= gallery?.length * 300} // Assuming each image has a fixed width of 300px
            >
              &gt;
            </button>
          </div>
          <div
            id="gallery-container"
            className="flex overflow-x-scroll hide-scrollbar  w-full prompt pb-2"
            style={{ scrollBehavior: "smooth" }}
          >
            {gallery?.map((item) => (
              <div key={item._id} className="flex-shrink-0 mx-2 relative">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-64 h-64 object-cover rounded-lg"
                  />
                </div>

                {/* {console.log(services)} */}
              </div>
            ))}
          </div>
        </div>
      )}
      {/*  */}
    </div>
  );
};

export default Gallery;
