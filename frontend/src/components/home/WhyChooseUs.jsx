import { CircleCheckBig, HeadsetIcon } from "lucide-react";
import SectionContainer from "../ui/SectionContainer";
import SectionLabel from "../ui/SectionLabel";

const checklist = [
  "Experienced & Qualified Professionals",
  "Timely & Accurate Filing",
  "Affordable & Transparent Pricing",
  "100% Data Security",
  "Dedicated Customer Support",
  "Easy & Quick Communication",
];

function WhyChooseUs() {
  return (
    <section className="bg-white py-section-sm lg:py-section" id="why-choose-us">
      <SectionContainer>
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-0">
          {/* Left — Content */}
          <div className="flex flex-col justify-center py-4 lg:pr-12">
            <SectionLabel>WHY CHOOSE US?</SectionLabel>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-brand-navy sm:text-4xl">
              Your Compliance Partner
              <br />
              You Can Rely On
            </h2>

            <ul className="mt-8 space-y-4" role="list">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green">
                    <CircleCheckBig
                      className="h-4 w-4 text-white"
                      strokeWidth={3}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-sm font-medium text-brand-gray-700 sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Image with floating card overlay */}
          <div className="relative min-h-[320px] sm:min-h-[380px] lg:min-h-[420px]">
            {/* Background image — full height, rounded left corners */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl lg:rounded-l-2xl lg:rounded-r-none">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop&q=80"
                alt="Professional team working on GST compliance and financial documents in a modern office"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              {/* Subtle dark overlay for contrast */}
              <div className="absolute inset-0 bg-brand-navy/30" />
            </div>

            {/* Floating card — positioned center-left, overlapping the image */}
            <div className="absolute bottom-6 left-4 right-4 z-10 rounded-xl bg-white p-5 shadow-xl sm:bottom-auto sm:left-6 sm:right-auto sm:top-1/2 sm:w-64 sm:-translate-y-1/2 md:w-72 lg:left-[-20px]">
              {/* Icon */}
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue-light">
                <HeadsetIcon
                  className="h-6 w-6 text-brand-blue"
                  aria-hidden="true"
                />
              </div>

              <h3 className="text-lg font-bold leading-snug text-brand-navy">
                Dedicated Expert
                <br />
                Support
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-brand-gray-500">
                We empower your business with the right compliance and financial
                solutions.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default WhyChooseUs;
