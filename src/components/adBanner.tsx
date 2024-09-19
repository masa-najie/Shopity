import React from "react";
import { AdBannerProps } from "@/types";

const AdBanner: React.FC<AdBannerProps> = ({
  imgSrc,
  header,
  description,
  button,
  id,
}) => {
  return (
    <div className="flex justify-center relative">
      <div className="sm:w-11/12 relative">
        <img src={imgSrc} alt="/" className="w-full " />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white ">
          <h1>{header}</h1>
          <p>{description}</p>
          {button && (
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
              {button.name}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdBanner;
