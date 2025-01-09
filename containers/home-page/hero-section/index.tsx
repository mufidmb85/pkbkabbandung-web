"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { heroSection } from "@/placeholders/hero-section";
import { Image } from "@nextui-org/image";

const HeroSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true, dragFree: false}, [Autoplay()]);
  return (
    <section>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {heroSection.map((hero, i) => (
              <div className="embla__slide relative flex items-center justify-center" key={i}>
                <Image removeWrapper={true} className="z-0" src={hero.src} alt={hero.alt} radius="none" style={{ objectFit: "cover", objectPosition: "center" }} />
                <div className="flex flex-col justify-center items-center absolute z-10 bg-content1/30 inset-0" key={i}>
                  <h1 className="font-black text-primary text-2xl sm:text-4xl uppercase">{hero.title}</h1>
                  <h2 className="font-normal text-default-foreground text-xl sm:text-2xl">{hero.subtitle}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;