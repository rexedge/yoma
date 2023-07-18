'use client'
import Image from "next/image";
import { useState } from "react";

export default function CarerCard({
  image,
  name,
  careType,
  location,
  recNo,
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="w-[100%] h-[450px] mt-[30px] lg:w-[45%] xl:w-[30%]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        className="rounded-t-[12px]  w-[100%] h-[300px] object-cover"
        src={image}
        width={500}
        height={500}
        alt=""
      />
      <div
        className={`w-[70%] h-[170px] mt-[-50px] text-black bg-white absolute overflow-hidden 
      transition-all ease-in-out duration-[0.5s] ${hovered && 'h-[220px]'} md:w-[60%] lg:w-[30%]  xl:w-[20%]`}
      >
        <h4 className="text-left pt-[16px] pl-[25px] text-[18px] font-bold">
          {name}
        </h4>
        <div className="flex-row pl-[25px] mt-4">
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M21.091 6.97953C20.241 6.03953 18.821 5.56953 16.761 5.56953H16.521V5.52953C16.521 3.84953 16.521 1.76953 12.761 1.76953H11.241C7.48101 1.76953 7.48101 3.85953 7.48101 5.52953V5.57953H7.24101C5.17101 5.57953 3.76101 6.04953 2.91101 6.98953C1.92101 8.08953 1.95101 9.56953 2.05101 10.5795L2.06101 10.6495L2.13847 11.4628C2.15273 11.6126 2.2334 11.7479 2.35929 11.8303C2.59909 11.9872 3.00044 12.2459 3.24101 12.3795C3.38101 12.4695 3.53101 12.5495 3.68101 12.6295C5.39101 13.5695 7.27101 14.1995 9.18101 14.5095C9.27101 15.4495 9.68101 16.5495 11.871 16.5495C14.061 16.5495 14.491 15.4595 14.561 14.4895C16.601 14.1595 18.571 13.4495 20.351 12.4095C20.411 12.3795 20.451 12.3495 20.501 12.3195C20.8977 12.0953 21.3093 11.819 21.6845 11.5484C21.7975 11.4668 21.8698 11.3408 21.8852 11.2023L21.901 11.0595L21.951 10.5895C21.961 10.5295 21.961 10.4795 21.971 10.4095C22.051 9.39953 22.031 8.01953 21.091 6.97953ZM13.091 13.8295C13.091 14.8895 13.091 15.0495 11.861 15.0495C10.631 15.0495 10.631 14.8595 10.631 13.8395V12.5795H13.091V13.8295ZM8.91101 5.56953V5.52953C8.91101 3.82953 8.91101 3.19953 11.241 3.19953H12.761C15.091 3.19953 15.091 3.83953 15.091 5.52953V5.57953H8.91101V5.56953Z" fill="#45214A" />
              <path d="M20.8733 13.7339C21.2269 13.5656 21.6342 13.8459 21.5988 14.2359L21.2398 18.1897C21.0298 20.1897 20.2098 22.2297 15.8098 22.2297H8.18984C3.78984 22.2297 2.96984 20.1897 2.75984 18.1997L2.41913 14.4519C2.38409 14.0664 2.78205 13.7865 3.13468 13.946C4.2741 14.4615 6.37724 15.3761 7.67641 15.7164C7.84072 15.7594 7.97361 15.877 8.04556 16.0309C8.65253 17.329 9.96896 18.0197 11.8698 18.0197C13.752 18.0197 15.085 17.3024 15.694 16.0011C15.766 15.8471 15.8991 15.7296 16.0635 15.6863C17.443 15.3233 19.6816 14.301 20.8733 13.7339Z" fill="#45214A" />
            </svg>
            <p className="text-[16px] pl-[14px] mt-[2px]">{careType}</p>
          </div>
          <div className="flex mt-[10px]">
            <Image
              className="w-[24px] h-[24px]"
              src="/imgSrc/location.png"
              width={500}
              height={500}
              alt=""
            />
            <p className="text-[16px] pl-[14px] mt-[2px]">{location}</p>
          </div>
          <div className="flex mt-[10px]">
            <Image
              className="w-[24px] h-[24px]"
              src="/imgSrc/recommendation.png"
              width={500}
              height={500}
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
