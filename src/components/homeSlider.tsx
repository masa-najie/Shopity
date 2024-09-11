import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import img1 from "@/assets/slide1.jpg";
import img2 from "@/assets/slide2.jpg";
import img3 from "@/assets/slide3.jpg";

const EmblaCarousel: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">
        <div className="embla__slide min-w-0 flex flex-grow-0 flex-shrink-0 basis-full justify-center items-center">
          <img src={img1} className="sm:w-1/2" />
        </div>
        <div className="embla__slide min-w-0 flex flex-grow-0 flex-shrink-0 basis-full justify-center items-center">
          <img src={img2} className="sm:w-1/2" />
        </div>
        <div className="embla__slide min-w-0 flex flex-grow-0 flex-shrink-0 basis-full justify-center items-center">
          <img src={img3} className="sm:w-1/2" />
        </div>
      </div>
    </div>
  );
};
export default EmblaCarousel;
