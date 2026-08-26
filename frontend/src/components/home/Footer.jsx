import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  ArrowRight,
} from "lucide-react";

/* Inline SVG social icons — lucide-react does not export branded icons */
function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
import SectionContainer from "../ui/SectionContainer";
import Loader from "../ui/Loader";
import {
  CONTACT,
  SOCIAL,
  BRAND,
  QUICK_LINKS,
  SERVICES_LIST,
} from "../../data/siteConfig";
import { subscribeNewsletter } from "../../services/newsletterService";

function Footer() {
  const [email, setEmail] = useState("");
  const [newsletterState, setNewsletterState] = useState("idle"); // idle | loading | success | error
  const [newsletterMessage, setNewsletterMessage] = useState("");

  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setNewsletterState("error");
      setNewsletterMessage("Please enter a valid email address.");
      return;
    }

    setNewsletterState("loading");
    setNewsletterMessage("");

    try {
      const result = await subscribeNewsletter(email);
      if (result.success) {
        setNewsletterState("success");
        setNewsletterMessage(result.message);
        setEmail("");
      } else {
        setNewsletterState("error");
        setNewsletterMessage(result.message || "Something went wrong.");
      }
    } catch {
      setNewsletterState("error");
      setNewsletterMessage("Network error. Please try again later.");
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white" role="contentinfo">
      {/* Main footer content */}
      <div className="py-12 lg:py-16">
        <SectionContainer>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
            {/* Brand column */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="mb-4">
                <h3 className="text-xl font-bold tracking-tight">
                  {BRAND.name}
                </h3>
                <p className="mt-1 text-xs font-medium tracking-wide text-brand-blue-medium">
                  {BRAND.tagline}
                </p>
              </div>

              <p className="text-sm leading-relaxed text-gray-300">
                {BRAND.description}
              </p>

              {/* Social icons */}
              <div className="mt-6 flex gap-3">
                <a
                  href={SOCIAL.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-brand-blue"
                  aria-label="Follow us on Facebook"
                >
                  <FacebookIcon className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-brand-blue"
                  aria-label="Follow us on Instagram"
                >
                  <InstagramIcon className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={SOCIAL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-brand-blue"
                  aria-label="Follow us on LinkedIn"
                >
                  <LinkedinIcon className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wide">
                Quick Links
              </h4>
              <ul className="space-y-2.5" role="list">
                {QUICK_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group flex items-center text-sm text-gray-300 transition-colors duration-200 hover:text-white"
                    >
                      <ArrowRight
                        className="mr-1.5 h-3 w-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                        aria-hidden="true"
                      />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wide">
                Our Services
              </h4>
              <ul className="space-y-2.5" role="list">
                {SERVICES_LIST.map((service) => (
                  <li key={service}>
                    <span className="text-sm text-gray-300">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wide">
                Contact Us
              </h4>
              <ul className="space-y-3" role="list">
                <li>
                  <a
                    href={CONTACT.phoneHref}
                    className="flex items-start gap-2.5 text-sm text-gray-300 transition-colors duration-200 hover:text-white"
                    aria-label={`Call us at ${CONTACT.phone}`}
                  >
                    <Phone
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue-medium"
                      aria-hidden="true"
                    />
                    {CONTACT.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.emailHref}
                    className="flex items-start gap-2.5 text-sm text-gray-300 transition-colors duration-200 hover:text-white"
                    aria-label={`Email us at ${CONTACT.email}`}
                  >
                    <Mail
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue-medium"
                      aria-hidden="true"
                    />
                    {CONTACT.email}
                  </a>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-gray-300">
                  <MapPin
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue-medium"
                    aria-hidden="true"
                  />
                  <span className="whitespace-pre-line">{CONTACT.address}</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wide">
                Newsletter
              </h4>
              <p className="mb-4 text-sm text-gray-300">
                Subscribe to get updates and tax tips.
              </p>

              <form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col gap-2"
                noValidate
              >
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (newsletterState === "error") {
                        setNewsletterState("idle");
                        setNewsletterMessage("");
                      }
                    }}
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-gray-400 outline-none transition-colors duration-200 focus:border-brand-blue-medium focus:bg-white/15"
                    aria-label="Email address for newsletter"
                    disabled={newsletterState === "loading"}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={
                    newsletterState === "loading" ||
                    newsletterState === "success"
                  }
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-blue px-4 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-brand-blue-medium disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {newsletterState === "loading" ? (
                    <>
                      <Loader size="sm" />
                      Subscribing...
                    </>
                  ) : newsletterState === "success" ? (
                    "Subscribed ✓"
                  ) : (
                    <>
                      Subscribe
                      <Send className="h-3.5 w-3.5" aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>

              {/* Status message */}
              {newsletterMessage && (
                <p
                  className={`mt-2 text-xs ${
                    newsletterState === "success"
                      ? "text-brand-green-bright"
                      : "text-red-400"
                  }`}
                  role={newsletterState === "error" ? "alert" : "status"}
                >
                  {newsletterMessage}
                </p>
              )}
            </div>
          </div>
        </SectionContainer>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <SectionContainer>
          <div className="flex flex-col items-center justify-between gap-4 py-5 text-xs text-gray-400 sm:flex-row">
            <p>&copy; {currentYear} GST Smart File. All Rights Reserved.</p>

            <div className="flex gap-4">
              <a
                href="#privacy-policy"
                className="transition-colors duration-200 hover:text-white"
              >
                Privacy Policy
              </a>
              <span aria-hidden="true">|</span>
              <a
                href="#terms-conditions"
                className="transition-colors duration-200 hover:text-white"
              >
                Terms &amp; Conditions
              </a>
            </div>
          </div>
        </SectionContainer>
      </div>
    </footer>
  );
}

export default Footer;
