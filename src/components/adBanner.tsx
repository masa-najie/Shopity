import React from "react";
import { AdBannerProps } from "@/types";
import { useRouter } from "next/navigation";
const AdBanner: React.FC<AdBannerProps> = ({
  imgSrc,
  header,
  description,
  button,
}) => {
  const router = useRouter();
  return (
    <div className=" min-w-0 flex flex-grow-0 flex-shrink-0 basis-full justify-center">
      <div
        className="sm:w-3/4 w-full sm:h-96 h-44 bg-cover bg-no-repeat relative  bg-center  items-center justify-center flex text-center"
        style={{ backgroundImage: `url(${imgSrc})` }}
      >
        <div className=" rounded-md p-3 ">
          <h1 className="sm:text-8xl text-3xl text-white tracking-wider mb-3 font-bold">
            {header}
          </h1>
          <h2 className="sm:text-5xl text-md text-gray-700 mb-2">
            {description}
          </h2>
          {button && (
            <button
              onClick={() => {
                router.push(button.link!);
              }}
              className="bg-Sapphire px-6 py-2 rounded-md sm:text-4xl text-md text-white shadow-lg text-center"
            >
              {button.name}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdBanner;
