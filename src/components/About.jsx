import about from "../assets/about.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="px-[14px] sm:px-[1em] md:px-[3em] lg:px-[5em] mt-[30px]"
    >
      <div className="mb-[58px] flex justify-center pr-[10px]">
        <div>
          <h2 className="text-2xl text-center mb-[15px] font-bold text-zinc-600">
            Our Vision
          </h2>
          <p className="text-center">
            To be an Association which delivers innovative and value driven ICT
            products and services with excellence.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-evenly gap-[30px] items-center">
        <div className="flex-[0.5]">
          <h2 className="text-2xl mb-[15px] font-bold text-zinc-600">
            What are we all About ?
          </h2>
          <p className="">
            DITA is first of all a community. We learn together and grow
            together. We strive for excellence as upcoming professionals. We are
            quick to embrace new members and introduce them into our culture. We
            are a tech hub. Technology is our surname. In DITA, you matter.
          </p>
        </div>
        <div className="flex-[0.5]">
          <img
            src={about}
            alt=""
            className="max-h-[400px] w-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
