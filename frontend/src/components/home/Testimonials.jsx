import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import SectionContainer from "../ui/SectionContainer";
import SectionLabel from "../ui/SectionLabel";
import testimonials from "../../data/testimonials";

function TestimonialCard({ testimonial }) {
  const { name, role, quote, rating } = testimonial;

  // Generate initials for avatar fallback
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="flex h-full flex-col rounded-xl border border-brand-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
      {/* Quote icon */}
      <Quote
        className="mb-4 h-8 w-8 text-brand-blue/20"
        aria-hidden="true"
      />

      {/* Star rating */}
      <div className="mb-4 flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating
                ? "fill-amber-400 text-amber-400"
                : "fill-brand-gray-200 text-brand-gray-200"
            }`}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Quote text */}
      <blockquote className="mb-6 flex-1 text-sm leading-relaxed text-brand-gray-600">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Client info */}
      <div className="flex items-center gap-3 border-t border-brand-gray-100 pt-4">
        {/* Avatar */}
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue text-sm font-semibold text-white"
          aria-hidden="true"
        >
          {initials}
        </div>

        <div>
          <p className="text-sm font-semibold text-brand-navy">{name}</p>
          <p className="text-xs text-brand-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Determine visible card count based on container width
  const getVisibleCount = useCallback(() => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }, []);

  const [visibleCount, setVisibleCount] = useState(getVisibleCount);

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getVisibleCount]);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(goNext, 4000);
    return () => clearInterval(timer);
  }, [goNext, isPaused]);

  return (
    <section className="bg-brand-gray-50 py-section-sm lg:py-section" id="testimonials">
      <SectionContainer>
        {/* Header */}
        <div className="mb-12 text-center">
          <SectionLabel>WHAT CLIENTS SAY</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold text-brand-navy sm:text-4xl">
            Trusted by 500+ Businesses
          </h2>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          role="region"
          aria-label="Client testimonials carousel"
          aria-roledescription="carousel"
        >
          {/* Cards track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full shrink-0 px-2 sm:px-3"
                  style={{ flex: `0 0 ${100 / visibleCount}%` }}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Testimonial from ${testimonial.name}`}
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            type="button"
            onClick={goPrev}
            className="absolute -left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-brand-gray-200 bg-white text-brand-gray-600 shadow-sm transition-colors duration-200 hover:bg-brand-gray-50 hover:text-brand-navy sm:-left-5"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={goNext}
            className="absolute -right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-brand-gray-200 bg-white text-brand-gray-600 shadow-sm transition-colors duration-200 hover:bg-brand-gray-50 hover:text-brand-navy sm:-right-5"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="mt-8 flex items-center justify-center gap-2" role="tablist" aria-label="Testimonial slides">
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "w-6 bg-brand-blue"
                  : "w-2 bg-brand-gray-300 hover:bg-brand-gray-400"
              }`}
              role="tab"
              aria-selected={i === currentIndex}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

export default Testimonials;
