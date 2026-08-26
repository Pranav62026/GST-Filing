import { useState } from "react";
import {
  ArrowUpRight,
  Building2,
  CheckCircle,
  Mail,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
} from "lucide-react";
import {
  RiFacebookFill,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiWhatsappFill,
} from "@remixicon/react";

import SectionContainer from "../ui/SectionContainer";
import Loader from "../ui/Loader";
import { CONTACT, SOCIAL, BRAND, SERVICES_LIST } from "../../data/siteConfig";
import { subscribeNewsletter } from "../../services/newsletterService";

function Footer() {
  const [email, setEmail] = useState("");
  const [newsletterState, setNewsletterState] = useState("idle");
  const [newsletterMessage, setNewsletterMessage] = useState("");

  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleNewsletterSubmit = async (event) => {
    event.preventDefault();

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

  const companyLinks = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#about-company" },
    { label: "Our Services", href: "#services" },
    { label: "Career Opportunities", href: "#" },
    { label: "Contact Us", href: "#contact" },
  ];

  const serviceLinks =
    SERVICES_LIST.length > 0
      ? SERVICES_LIST.slice(0, 5).map((service) => ({
          label: service,
          href: "#services",
        }))
      : [
          { label: "Web Development", href: "#" },
          { label: "AI Development", href: "#" },
          { label: "SaaS Platforms", href: "#" },
          { label: "Cloud Infrastructure", href: "#" },
          { label: "Enterprise Systems", href: "#" },
        ];

  return (
    <>
      {/* Floating Widgets */}
      <div className="fixed bottom-[30px] left-5 z-[100] flex flex-col gap-[15px]">
        <a
          href="https://wa.me/919453134901"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
          className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_4px_10px_rgba(0,0,0,0.3)] transition-transform hover:-translate-y-0.5"
        >
          <RiWhatsappFill size={25} />
        </a>

        <a
          href={CONTACT.phoneHref || "tel:+919453134901"}
          aria-label="Call us"
          className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#0ea5e9] text-white shadow-[0_4px_10px_rgba(0,0,0,0.3)] transition-transform hover:-translate-y-0.5"
        >
          <Phone className="h-5 w-5" />
        </a>
      </div>

      <div className="fixed bottom-[30px] right-5 z-[100] hidden items-end gap-[15px] sm:flex">
        <div className="relative mb-[5px] rounded-lg bg-white px-[15px] py-3 text-[0.85rem] text-[#333] shadow-[0_4px_15px_rgba(0,0,0,0.2)] after:absolute after:-right-2 after:bottom-[15px] after:border-y-[8px] after:border-l-[8px] after:border-y-transparent after:border-l-white after:content-['']">
          <strong>Hi there! 👋</strong>
          <br />
          <span className="text-[#666]">Ready to help! Drop a message.</span>
        </div>

        <button
          type="button"
          aria-label="Open chat"
          className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#2f5a4e] text-white shadow-[0_4px_10px_rgba(0,0,0,0.3)]"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      </div>

      {/* Footer */}
      <footer
        className="site-footer border-t border-white/5 bg-gradient-to-br from-[#0f172a] to-[#060b14] px-[5%] pb-5 pt-10 text-white"
        role="contentinfo"
      >
        <SectionContainer>
          {/* Top Info Cards */}
          <div className="mb-[50px] flex flex-wrap justify-between gap-5">
            {/* Registered Name */}
            <div className="flex min-w-[250px] flex-1 items-center gap-[15px] rounded-xl border border-white/5 bg-[#16213e] p-5">
              <div className="flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-[10px] bg-[rgba(14,165,233,0.1)] text-[#0ea5e9]">
                <Building2 className="h-5 w-5" />
              </div>

              <div>
                <p className="mb-[5px] text-[0.8rem] text-[#94a3b8]">
                  Registered Name
                </p>

                <p className="text-base font-semibold text-white">
                  Kartsho Solutions Private Limited
                </p>
              </div>
            </div>

            {/* CIN */}
            <div className="flex min-w-[250px] flex-1 items-center gap-[15px] rounded-xl border border-white/5 bg-[#16213e] p-5">
              <div className="flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-[10px] bg-[rgba(14,165,233,0.1)] text-[#0ea5e9]">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <div>
                <p className="mb-[5px] text-[0.8rem] text-[#94a3b8]">CIN</p>

                <p className="text-base font-semibold text-white">
                  U62011UP2026PTC248380
                </p>
              </div>
            </div>

            {/* GSTIN */}
            <div className="flex min-w-[250px] flex-1 items-center gap-[15px] rounded-xl border border-white/5 bg-[#16213e] p-5">
              <div className="flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-[10px] bg-[rgba(14,165,233,0.1)] text-[#0ea5e9]">
                <CheckCircle className="h-5 w-5" />
              </div>

              <div>
                <p className="mb-[5px] text-[0.8rem] text-[#94a3b8]">GSTIN</p>

                <p className="text-base font-semibold text-white">
                  09AAMCK9121D1ZG
                </p>
              </div>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="mb-10 flex flex-col justify-between gap-10 lg:flex-row lg:gap-10">
            {/* Brand & Connect */}
            <div className="min-w-0 flex-[1.5] lg:min-w-[300px]">
              <div className="mb-5 flex items-center gap-[10px]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#d97706] text-[1.2rem] font-bold">
                  1K
                </div>

                <div>
                  <h2 className="m-0 text-2xl font-semibold leading-none">
                    Kartsho
                  </h2>

                  <p className="mt-0.5 text-[0.7rem] text-[#94a3b8]">
                    Solutions Pvt. Ltd.
                  </p>
                </div>
              </div>

              <p className="mb-[25px] max-w-[90%] text-[0.9rem] leading-[1.6] text-[#94a3b8]">
                Empowering businesses through AI systems, SaaS platforms,
                enterprise software, automation, and scalable digital
                ecosystems.
              </p>

              <h3 className="mb-[15px] text-base font-semibold">
                Connect With Us
              </h3>

              <div className="flex gap-3">
                <a
                  href={SOCIAL.facebook || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-[35px] w-[35px] items-center justify-center rounded-[5px] bg-[#1e293b] text-white transition-colors hover:bg-[#334155]"
                >
                  <RiFacebookFill size={18} />
                </a>

                <a
                  href={SOCIAL.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-[35px] w-[35px] items-center justify-center rounded-[5px] bg-[#1e293b] text-white transition-colors hover:bg-[#334155]"
                >
                  <RiGithubFill size={18} />
                </a>

                <a
                  href={SOCIAL.instagram || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-[35px] w-[35px] items-center justify-center rounded-[5px] bg-[#1e293b] text-white transition-colors hover:bg-[#334155]"
                >
                  <RiInstagramFill size={18} />
                </a>

                <a
                  href={SOCIAL.linkedin || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-[35px] w-[35px] items-center justify-center rounded-[5px] bg-[#1e293b] text-white transition-colors hover:bg-[#334155]"
                >
                  <RiLinkedinFill size={18} />
                </a>
              </div>
            </div>

            {/* Company */}
            <div className="min-w-[200px] flex-1">
              <h3 className="mb-5 text-[1.1rem] font-semibold">Company</h3>

              <ul className="space-y-[15px]" role="list">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[0.9rem] text-[#e2e8f0] transition-colors hover:text-[#0ea5e9]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="min-w-[200px] flex-1">
              <h3 className="mb-5 text-[1.1rem] font-semibold">Services</h3>

              <ul className="space-y-[15px]" role="list">
                {serviceLinks.map((service) => (
                  <li key={service.label}>
                    <a
                      href={service.href}
                      className="text-[0.9rem] text-[#e2e8f0] transition-colors hover:text-[#0ea5e9]"
                    >
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stay Updated */}
            <div className="min-w-[200px] flex-1">
              <h3 className="mb-5 text-[1.1rem] font-semibold">Stay Updated</h3>

              <p className="mb-5 text-[0.9rem] leading-[1.5] text-[#94a3b8]">
                Get startup insights, AI updates, product launches, and business
                news.
              </p>

              <form
                onSubmit={handleNewsletterSubmit}
                className="mb-[25px] flex rounded-lg border border-white/10 bg-[#1e293b] p-[5px]"
                noValidate
              >
                <input
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);

                    if (newsletterState === "error") {
                      setNewsletterState("idle");
                      setNewsletterMessage("");
                    }
                  }}
                  placeholder="Enter your email"
                  required
                  disabled={newsletterState === "loading"}
                  aria-label="Email address for newsletter"
                  className="w-full min-w-0 bg-transparent px-[15px] py-2.5 text-[0.9rem] text-white outline-none placeholder:text-[#64748b]"
                />

                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  disabled={
                    newsletterState === "loading" ||
                    newsletterState === "success"
                  }
                  className="flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded-md bg-[#0ea5e9] text-white transition-colors hover:bg-[#0284c7] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {newsletterState === "loading" ? (
                    <Loader size="sm" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </button>
              </form>

              {newsletterMessage && (
                <p
                  className={`mb-4 text-xs ${
                    newsletterState === "success"
                      ? "text-emerald-400"
                      : "text-red-400"
                  }`}
                  role={newsletterState === "error" ? "alert" : "status"}
                >
                  {newsletterMessage}
                </p>
              )}

              <div className="space-y-2.5">
                <a
                  href={CONTACT.emailHref}
                  className="flex items-center gap-2.5 text-[0.9rem] text-[#e2e8f0] transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 text-[#94a3b8]" />
                  {CONTACT.email}
                </a>

                <a
                  href={CONTACT.phoneHref}
                  className="flex items-center gap-2.5 text-[0.9rem] text-[#e2e8f0] transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 text-[#94a3b8]" />
                  {CONTACT.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col-reverse items-center justify-between gap-5 border-t border-white/10 pt-5 md:flex-row">
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-3">
              <a
                href="#privacy-policy"
                className="flex items-center gap-[5px] text-[0.8rem] text-[#e2e8f0] transition-colors hover:text-[#0ea5e9]"
              >
                Privacy Policy
                <ArrowUpRight className="h-2.5 w-2.5" />
              </a>

              <a
                href="#terms-conditions"
                className="flex items-center gap-[5px] text-[0.8rem] text-[#e2e8f0] transition-colors hover:text-[#0ea5e9]"
              >
                Terms of Service
                <ArrowUpRight className="h-2.5 w-2.5" />
              </a>

              <a
                href="#refund-policy"
                className="flex items-center gap-[5px] text-[0.8rem] text-[#e2e8f0] transition-colors hover:text-[#0ea5e9]"
              >
                Refund Policy
                <ArrowUpRight className="h-2.5 w-2.5" />
              </a>

              <a
                href="#about-company"
                className="flex items-center gap-[5px] text-[0.8rem] text-[#e2e8f0] transition-colors hover:text-[#0ea5e9]"
              >
                About Company
                <ArrowUpRight className="h-2.5 w-2.5" />
              </a>
            </div>

            <div className="text-center text-[0.8rem] text-[#64748b] md:text-right">
              © {currentYear} Kartsho Solutions Pvt. Ltd. All rights reserved.
            </div>
          </div>
        </SectionContainer>
      </footer>
    </>
  );
}

export default Footer;
