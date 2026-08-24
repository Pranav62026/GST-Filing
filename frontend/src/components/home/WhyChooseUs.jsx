import {
  CheckCircle,
  Users,
  ShieldCheck,
} from "lucide-react";
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
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left — Content */}
          <div>
            <SectionLabel>WHY CHOOSE US?</SectionLabel>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-brand-navy sm:text-4xl">
              Your Compliance Partner
              <br />
              You Can Rely On
            </h2>

            <ul className="mt-8 space-y-4" role="list">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-green"
                    aria-hidden="true"
                  />
                  <span className="text-base text-brand-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Image with floating card */}
          <div className="relative">
            {/* Office background image */}
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&q=80"
                alt="Professional office workspace with financial documents and calculator"
                className="h-72 w-full rounded-xl object-cover sm:h-80 lg:h-96"
                loading="lazy"
              />

              {/* Dark overlay for readability */}
              <div className="absolute inset-0 rounded-xl bg-brand-navy/20" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 left-4 right-4 rounded-xl border border-brand-gray-200 bg-white p-5 shadow-lg sm:left-6 sm:right-6 md:left-auto md:right-6 md:w-72 lg:-bottom-8">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue-light">
                <Users className="h-6 w-6 text-brand-blue" aria-hidden="true" />
              </div>

              <h3 className="text-lg font-bold text-brand-navy">
                Dedicated Expert Support
              </h3>

              <p className="mt-1 text-sm leading-relaxed text-brand-gray-500">
                We empower your business with the right compliance and financial
                solutions.
              </p>

              <div className="mt-3 flex items-center gap-2">
                <ShieldCheck
                  className="h-4 w-4 text-brand-green"
                  aria-hidden="true"
                />
                <span className="text-xs font-medium text-brand-green">
                  Trusted by 500+ Businesses
                </span>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default WhyChooseUs;
