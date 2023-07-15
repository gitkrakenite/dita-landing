import { useEffect, useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import "./masonry.css";
import Masonry from "react-masonry-css";
import { CiLocationOn } from "react-icons/ci";
import Spinner from "./Spinner";
import axios from "../axios";
import { toast } from "react-toastify";

const Events = () => {
  const breakpointColumnsObj = {
    default: 5,
    3000: 5,
    2300: 5,
    2000: 5,
    1800: 4,
    1400: 3,
    900: 2,
    700: 1,
  };

  // fetch events from server
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/events/all");
      if (response) {
        await setEvents(response.data.event);
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
    <div className="px-[14px] sm:px-[1em] md:px-[3em] lg:px-[5em] mt-[4em]">
      <h2 className="text-2xl text-[#02AEEE] mb-[20px]">DITA EVENTS</h2>
      {/*  */}
      <p>{}</p>
      {loading ? (
        <div>
          <Spinner message="Fetching Events ..." />
        </div>
      ) : (
        <>
          {events.length < 1 ? (
            <div className="text-center my-[10px]">
              <p className="font-bold text-lg">
                😥No Events Yet. Please Check Later
              </p>
            </div>
          ) : (
            <div className="mt-[60px]">
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid "
                columnClassName="my-masonry-grid_column"
              >
                {events?.map((item) => (
                  <div key={item._id} className="mb-[20px]">
                    <h2 className="font-bold mb-[10px]">{item.title}</h2>
                    <img
                      src={item.image}
                      alt=""
                      className="w-full rounded-tr-lg rounded-tl-lg"
                    />
                    {/* {console.log(events)} */}
                    <div className="bg-zinc-300 px-1">
                      <div className="flex py-[10px]  justify-end items-center gap-[10px]">
                        <CiLocationOn className="text-2xl" />
                        <p>{item.location}</p>
                      </div>
                      <p>{item.description}</p>
                      <div className="flex py-[10px] justify-end items-center gap-[10px]">
                        <AiOutlineCalendar className="text-2xl" />
                        <p>{item.date}</p>
                      </div>
                      <p>{item.notes}</p>
                    </div>
                  </div>
                ))}
              </Masonry>
            </div>
          )}
        </>
      )}
      {/*  */}
    </div>
  );
};

export default Events;
