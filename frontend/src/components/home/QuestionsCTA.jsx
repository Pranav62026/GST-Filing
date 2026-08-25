import { Headphones, Phone, MessageCircle } from "lucide-react";
import SectionContainer from "../ui/SectionContainer";
import Button from "../ui/Button";
import { CONTACT } from "../../data/siteConfig";

function QuestionsCTA() {
  return (
    <section className="py-section-sm lg:py-section" id="questions-cta">
      <SectionContainer>
        <div className="overflow-hidden rounded-2xl bg-brand-blue-light">
          <div className="flex flex-col items-center gap-8 px-6 py-10 sm:px-10 md:flex-row md:justify-between md:py-12 lg:px-16">
            {/* Left — Icon + text */}
            <div className="flex flex-col items-center gap-5 text-center md:flex-row md:text-left">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand-blue/10">
                <Headphones
                  className="h-8 w-8 text-brand-blue"
                  aria-hidden="true"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy sm:text-3xl">
                  Have Questions?
                </h2>
                <p className="mt-1 max-w-md text-sm text-brand-gray-600 sm:text-base">
                  Talk to our experts and find the right solution for your
                  business.
                </p>
              </div>
            </div>

            {/* Right — CTA buttons */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                variant="navy"
                size="lg"
                as="a"
                href={CONTACT.phoneHref}
                aria-label={`Call us at ${CONTACT.phone}`}
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Now
              </Button>

              <Button
                variant="whatsapp"
                size="lg"
                as="a"
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default QuestionsCTA;
