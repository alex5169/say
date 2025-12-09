import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CAROUSEL_IMAGES, CAROUSEL_DOTS, CAROUSEL_SLIDE_INTERVAL, DESCRIPTION, NAME, SHORT_DESCRIPTION } from "~/data";

// ----------------- Hero Carousel Component -----------------
const HeroCarousel = ({
  images,
  dots = false,
  slideInterval = 2000,
}: {
  images: string[];
  dots?: boolean;
  slideInterval?: number;
}) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-slide
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [index]);

  const startAutoSlide = () => {
    stopAutoSlide();
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, slideInterval);
  };

  const stopAutoSlide = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);

  // Touch handlers
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) =>
    (touchStartX.current = e.touches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) =>
    (touchEndX.current = e.touches[0].clientX);
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
  };

  return (
    <div className="flex gap-4 w-full justify-center items-center">
      {/* Previous */}
      <div className="relative w-1/4 h-64 md:h-80 opacity-60 scale-90 transition-all duration-500 rounded-2xl overflow-hidden">
        <Image
          src={images[index - 1 !== -1 ? index - 1 : images.length - 1]}
          alt="prev"
          fill
          className="object-cover"
        />
      </div>

      {/* Main slide */}
      <div
        className="relative w-1/2 md:w-1/3 h-64 md:h-80 overflow-hidden rounded-3xl border-8 border-cat-brown/20 select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <div key={i} className="min-w-full h-full relative">
              <Image
                src={src}
                alt={`carousel-${i}`}
                fill
                className="object-cover pointer-events-none"
                priority
              />
            </div>
          ))}
        </div>

        {/* Dots */}
        {dots && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition ${
                  i === index ? "bg-cat-brown scale-110" : "bg-cat-brown/30"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Next */}
      <div className="relative w-1/4 h-64 md:h-80 opacity-60 scale-90 transition-all duration-500 rounded-2xl overflow-hidden">
        <Image
          src={images[index + 1 !== images.length ? index + 1 : 0]}
          alt="next"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

// ----------------- Hero Section -----------------
const HeroSection = () => {
  return (
    <section className="relative py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        {/* Main Title */}
        <div className="mb-8">
          <h1 className="michi-title animate-bounce-gentle">{NAME}</h1>
        </div>

        {/* Carousel */}
        <div className="flex justify-center mb-12">
          <HeroCarousel
            images={CAROUSEL_IMAGES}
            slideInterval={CAROUSEL_SLIDE_INTERVAL}
            dots={CAROUSEL_DOTS}
          />
        </div>

        {/* Subtitle */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold michi-card py-4 text-cat-brown mb-8 font-comic">
            {SHORT_DESCRIPTION}
          </h2>

          <div className="max-w-3xl mx-auto p-8">
            <p className="text-lg md:text-xl text-cat-brown/80 font-medium leading-relaxed">
              {DESCRIPTION}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
