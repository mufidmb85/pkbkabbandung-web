"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { heroSection } from "@/placeholders/hero-section";
import { Image } from "@nextui-org/image";

const HeroSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true, dragFree: false}, [Autoplay()]);

  const emblaViewportStyle = {
    overflow: "hidden",
  } as React.CSSProperties;

  const emblaContainerStyle = {
    display: "flex",
    flexDirection: "row",
    aspectRatio: "16/9",
    width: "100vw",
    height: "auto",
    touchAction: "pan-y pinch-zoom",
  } as React.CSSProperties;

  const emblaSlideStyle = {
    transform: "translate3d(0, 0, 0)",
    flex: "0 0 100%",
    minWidth: "0",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  } as React.CSSProperties;

  return (
    <section>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef} style={emblaViewportStyle}>
          <div className="embla__container" style={emblaContainerStyle}>
            {heroSection.map((hero, i) => (
              <div className="embla__slide" style={emblaSlideStyle} key={i}>
                <Image className={"z-0"} src={hero.src} alt={hero.alt} radius="none" loading={"lazy"}  style={{ objectFit: "cover", objectPosition: "center", }} width={1920} height={1080} />
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