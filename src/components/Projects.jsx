import { AiFillGithub, AiOutlineEye } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";
import Masonry from "react-masonry-css";
import "./masonry.css";
import Swap from "../assets/swapsoko.jpg";

const Projects = () => {
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

  const dummyProject = [
    {
      id: 1,
      author: "John Nderitu",
      image:
        "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1600",
      gitUrl: "https://github.com/gitkrakenite/chilltons-food-web-app",
      projectUrl: "https://daystar-shop.web.app/",
      title: "Food Ordering App",
      category: "Web Apps",
    },
    {
      id: 2,
      author: "John Muinde",
      image:
        "https://images.pexels.com/photos/6863515/pexels-photo-6863515.jpeg?auto=compress&cs=tinysrgb&w=1600",
      gitUrl: "https://github.com/dita-daystaruni/exam-timetable.git",
      projectUrl: "https://exam.dita.co.ke/",
      title: "My Timetable",
      category: "Web Apps",
    },
    {
      id: 3,
      author: "John Nderitu",
      image: Swap,
      gitUrl: "https://github.com/gitkrakenite/swap-soko-backend.git",
      projectUrl: "https://swap-soko.web.app/",
      title: "swapsoko",
      category: "Web Apps",
    },
  ];
  return (
    <div
      className="px-[14px] sm:px-[1em] md:px-[3em] lg:px-[5em] mt-[4em] "
      id="projects"
    >
      <div>
        <h2 className="text-center mb-[1em] text-2xl font-bold text-zinc-600">
          Some Of Our Projects
        </h2>
        {/* filters */}
        <div className="flex gap-[20px] flex-wrap justify-center mb-[2em] items-center">
          <p className="bg-white text-zinc-800 p-[5px] rounded-md cursor-pointer hover:bg-[#02AEEE] hover:text-white">
            Web Apps
          </p>
          <p className="bg-white text-zinc-800 p-[5px] rounded-md cursor-pointer hover:bg-[#02AEEE] hover:text-white">
            Mobile Apps
          </p>
          <p className="bg-white text-zinc-800 p-[5px] rounded-md cursor-pointer hover:bg-[#02AEEE] hover:text-white">
            Cloud Apps
          </p>
          <p className="bg-white text-zinc-800 p-[5px] rounded-md cursor-pointer hover:bg-[#02AEEE] hover:text-white">
            All
          </p>
        </div>
        {/*  fetch data */}
        <div className="max-h-[85vh] overflow-y-scroll overflow-x-hidden prompt">
          <div>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid "
              columnClassName="my-masonry-grid_column"
            >
              {/* {alert(records.length)} */}

              {dummyProject?.map((item) => (
                <div key={item._id} className="image-container mb-[18px]">
                  <div className="relative rounded-lg group">
                    <div className="overlay absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div
                        className="bg-gradient-to-t
                                  from-transparent to-black opacity-75 w-full h-full rounded-md"
                      >
                        {/* top stats */}
                        <div className="absolute top-[20px] flex gap-[10%] right-4 w-full justify-end ">
                          <div className="flex gap-[60px]">
                            <a
                              href={`${item.gitUrl}`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <p className="text-white text-md flex items-center gap-[5px]">
                                <AiFillGithub className="text-3xl" />
                              </p>
                            </a>
                            <a
                              href={`${item.projectUrl}`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <p className="text-white text-md flex items-center gap-[5px]">
                                <AiOutlineEye className="text-3xl" />
                              </p>
                            </a>
                          </div>
                        </div>
                        {/*  */}
                        <div className="absolute bottom-[20px] left-[20px]  flex gap-[10%] w-full ">
                          <div className="flex gap-[10px]">
                            <p className="text-white text-md ">
                              {`${item.author?.substring(0, 18)}`}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <img
                      src={item.image}
                      alt=""
                      className="w-full rounded-md object-cover"
                    />
                  </div>
                </div>
              ))}
            </Masonry>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Projects;
