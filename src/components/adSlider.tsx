import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import img1 from "@/assets/slide1.jpg";
import img2 from "@/assets/slide2.jpg";
import img3 from "@/assets/slide3.jpg";
import img4 from "@/assets/Mask-group.png";

import AdBanner from "./adBanner";
import { AdBannerProps } from "@/types";

const AdSlider: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ stopOnMouseEnter: true, stopOnInteraction: false }),
  ]);

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
      button: { name: "helllo", link: "www.google.com" },
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
    <div className=" relative overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {ads.map((ad: AdBannerProps) => {
          return (
            <AdBanner
              imgSrc={ad.imgSrc}
              header={ad.header}
              description={ad.description}
              button={ad.button}
              key={ad.id}
            />
          );
        })}
      </div>
    </div>
  );
};
export default AdSlider;
