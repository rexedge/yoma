export default function CardComponent({
  image,
  name,
  careType,
  location,
  recNo,
}) {
  return (
    <div className="w-[100%] h-[450px] mt-[30px] lg:w-[45%] xl:w-[30%]">
      <img
        className="rounded-t-[12px]  w-[100%] h-[300px] object-cover"
        src={image}
      />
      <div
        className="w-[70%] h-[170px] mt-[-50px] text-black bg-white absolute overflow-hidden 
      transition-all ease-in-out duration-[0.5s] hover:h-[220px] md:w-[60%] lg:w-[30%]  xl:w-[20%]"
      >
        <h4 className="text-left pt-[16px] pl-[25px] text-[18px] font-bold">
          {name}
        </h4>
        <div className="flex-row pl-[25px] mt-4">
          <div className="flex">
            <img
              className="w-[24px] h-[24px]"
              src="/imgSrc/briefcase.png"
              alt=""
            />
            <p className="text-[16px] pl-[14px] mt-[2px]">{careType}</p>
          </div>
          <div className="flex mt-[10px]">
            <img
              className="w-[24px] h-[24px]"
              src="/imgSrc/location.png"
              alt=""
            />
            <p className="text-[16px] pl-[14px] mt-[2px]">{location}</p>
          </div>
          <div className="flex mt-[10px]">
            <img
              className="w-[24px] h-[24px]"
              src="/imgSrc/recommendation.png"
              alt=""
            />
            <p className="text-[16px] pl-[14px] mt-[2px]">{recNo}</p>
          </div>
          <button className="w-[170px] h-[36px] bg-[#45214a] text-white text-[14px] rounded-[16px] mt-5 ml-[-69px] md:ml-[-130px] lg:ml-[-77px]">
            Contact {name}
          </button>
        </div>
      </div>
    </div>
  );
}
