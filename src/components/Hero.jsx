import heroBg from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div className="w-full h-[70vh] sm:h-[90vh] relative" id="home">
      <img
        src={heroBg}
        alt="Background Placeholder"
        className="w-full h-[70vh] sm:h-[90vh] object-cover"
      />

      {/* overlay div */}
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.6)]" />
      <div className="absolute w-full h-full top-0 flex flex-col justify-center items-start px-[14px] sm:px-[1em] md:px-[3em] lg:px-[5em] text-white">
        <p className=" text-3xl sm:text-5xl font-bold mb-[25px]">
          Welcome to DITA
        </p>
        <p className=" text-md sm:text-lg mb-[15px]">
          Daystar Information Technology Association
        </p>
        <p className="text-sm text-center">Where Code meets The World</p>
      </div>
    </div>
  );
};

export default Hero;
