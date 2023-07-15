import Google from "../../assets/google.png";
import Huawei from "../../assets/huawei.png";
import Ibm from "../../assets/ibm.png";
import Ms from "../../assets/mocrosoft.png";

const Partners = () => {
  return (
    <div className="px-[14px] sm:px-[1em] md:px-[3em] lg:px-[5em] mt-[4em] pb-[1em]">
      <div className="flex justify-center gap-[60px] flex-wrap">
        <img
          src={Google}
          alt=""
          className="h-[100px] object-contain transition duration-300 filter grayscale hover:filter-none"
        />
        <img
          src={Huawei}
          alt=""
          className="h-[100px] object-contain transition duration-300 filter grayscale hover:filter-none"
        />
        <img
          src={Ms}
          alt=""
          className="h-[100px] object-contain transition duration-300 filter grayscale hover:filter-none"
        />
        <img
          src={Ibm}
          alt=""
          className="h-[100px] object-contain transition duration-300 filter grayscale hover:filter-none"
        />
      </div>
    </div>
  );
};

export default Partners;
