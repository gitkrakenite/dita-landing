import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import axios from "../axios";
import { toast } from "react-toastify";
import Spinner from "./Spinner";
import { useEffect, useState } from "react";

const Leadership = () => {
  const [loading, setLoading] = useState(false);
  const [leaders, setLeaders] = useState([]);

  const handleFetch = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/leadership/all");
      if (response) {
        setLoading(false);
        await setLeaders(response.data.leader);
        console.log(response.data.leader);
      }
    } catch (error) {
      toast.error("Error fetching");
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div
      id="accommodation"
      className="px-[14px] sm:px-[1em] md:px-[3em] lg:px-[5em] mt-[4em]"
    >
      <h2 className="text-2xl text-[#02AEEE] mb-[40px]">DITA Leaders</h2>

      {loading ? (
        <Spinner />
      ) : (
        <div>
          <Carousel
            showArrows={window.innerWidth > 768}
            emulateTouch={window.innerWidth <= 768}
            showThumbs={false}
            className="w-full justify-center items-center"
          >
            {leaders?.map((item) => (
              <div key={item._id}>
                <div className="flex w-[85%] sm:w-[50%] xl:w-[30%] m-auto justify-center items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className=" max-h-[600px] object-contain  rounded-md"
                  />
                </div>
                {/*  */}
                <div className="w-full  ">
                  <div className="flex justify-center gap-[20px] flex-wrap items-center">
                    <p className="font-bold text-zinc-900 text-lg">
                      {item.name}
                    </p>
                    <p className="font-bold text-zinc-900 text-lg">
                      {item.position}
                    </p>
                  </div>
                  <p>{item.bio}</p>
                  <p>{item.tenure}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default Leadership;
