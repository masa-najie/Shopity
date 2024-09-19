import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import img4 from "@/assets/slide1.jpg";
import img2 from "@/assets/slide2.jpg";
import img3 from "@/assets/slide3.jpg";
import img1 from "@/assets/Mask-group.png";
import AdBanner from "./adBanner";
import { AdBannerProps } from "@/types";

const EmblaCarousel: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const ads: AdBannerProps[] = [
    {
      id: 1,
      imgSrc: img1,
      header: "sale",
      description: "50% off",
    },
    {
      id: 2,
      imgSrc: img2,
      header: "sale",
      description: "50% off",
      button: { name: "helllo" },
    },
    {
      id: 3,
      imgSrc: img3,
      header: "sale",
      description: "50% off",
    },
    {
      id: 4,
      imgSrc: img4,
      header: "sale",
      description: "50% off",
    },
  ];
  return (
    <div className="overflow-hidden relative -z-50" ref={emblaRef}>
      <div className="flex">
        {ads.map((ad: AdBannerProps) => {
          return (
            <div
              className=" min-w-0 flex flex-grow-0 flex-shrink-0 basis-full  justify-center"
              key={ad.id}
            >
              <AdBanner
                imgSrc={ad.imgSrc}
                header={ad.header}
                id={ad.id}
                description={ad.description}
                button={ad.button}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default EmblaCarousel;
