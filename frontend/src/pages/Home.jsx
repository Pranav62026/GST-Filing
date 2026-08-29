import { useNavigate } from "react-router-dom";
import LandingNavbar from "../components/layout/LandingNavbar";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import QuestionsCTA from "../components/home/QuestionsCTA";
import Footer from "../components/home/Footer";
import { useEffect, useState } from "react";

function Home() {
  const navigate = useNavigate();

  const [showRegisterPopup, setShowRegisterPopup] = useState(false);

  // Show the registration popup once after the visitor scrolls down.
  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("gst_register_popup_seen");

    if (hasSeenPopup) return;

    const handleScroll = () => {
      if (window.scrollY > 450) {
        setShowRegisterPopup(true);

        // Remember that this visitor has already seen the popup.
        // localStorage.setItem("gst_register_popup_seen", "true");

        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the scroll listener when the component unmounts.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="bg-background">
      <LandingNavbar />

      {/* Hero section */}

      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-linear-to-r from-[#0A192F] to-[#33415F]" />

        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-6 py-32 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-medium text-white/70">
              GST Filing Solutions
            </p>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              GST filing made
              <span className="block text-white/80">simple and reliable.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              Manage your GST filing, documents, and compliance requirements
              through a simple and guided process designed for your business.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => navigate("/register")}
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-surface-container"
              >
                Get Started
              </button>

              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("how-it-works")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-md border border-white/30 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                How It Works
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Explains the GST filing process in three simple steps. */}
      <section
        id="how-it-works"
        className="bg-brand-gray-50 px-6 py-24 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue">
              How it works
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-gray-900 sm:text-4xl lg:text-5xl">
              GST filing, made simple.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-brand-gray-600 sm:text-lg">
              Complete your GST filing through a simple, guided process designed
              to keep everything clear and organized.
            </p>
          </div>

          <div className="relative mt-16">
            {/* Connects the three steps visually on larger screens. */}
            <div className="absolute left-[16.66%] right-[16.66%] top-7 hidden h-px bg-brand-gray-200 md:block" />

            <div className="relative grid gap-10 md:grid-cols-3 md:gap-6">
              <div className="group text-center">
                <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full border-4 border-brand-gray-50 bg-brand-blue text-lg font-semibold text-white shadow-sm">
                  01
                </div>

                <div className="mt-6 rounded-2xl border border-brand-gray-200 bg-white p-7 text-left shadow-sm transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-md">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
                    Step 01
                  </p>

                  <h3 className="mt-3 text-xl font-semibold text-brand-gray-900">
                    Create your account
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-brand-gray-600">
                    Register your account and provide your basic business
                    details to begin your GST filing.
                  </p>
                </div>
              </div>

              <div className="group text-center">
                <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full border-4 border-brand-gray-50 bg-brand-blue text-lg font-semibold text-white shadow-sm">
                  02
                </div>

                <div className="mt-6 rounded-2xl border border-brand-gray-200 bg-white p-7 text-left shadow-sm transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-md">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
                    Step 02
                  </p>

                  <h3 className="mt-3 text-xl font-semibold text-brand-gray-900">
                    Submit your details
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-brand-gray-600">
                    Complete the guided process and securely provide the
                    required information and documents.
                  </p>
                </div>
              </div>

              <div className="group text-center">
                <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full border-4 border-brand-gray-50 bg-brand-blue text-lg font-semibold text-white shadow-sm">
                  03
                </div>

                <div className="mt-6 rounded-2xl border border-brand-gray-200 bg-white p-7 text-left shadow-sm transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-md">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
                    Step 03
                  </p>

                  <h3 className="mt-3 text-xl font-semibold text-brand-gray-900">
                    Track your filing
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-brand-gray-600">
                    Monitor your application progress and stay informed about
                    updates or pending requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 text-center">
            <p className="text-sm text-brand-gray-500">
              Simple process. Clear updates. No unnecessary complexity.
            </p>
          </div>
        </div>
      </section>

      {/* Additional landing page sections. */}
      <WhyChooseUs />
      <Testimonials />
      <QuestionsCTA />
      <Footer />

      {/* Registration popup triggered by the scroll logic above. */}
      {showRegisterPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm">
          <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="h-1.5 bg-brand-blue" />

            <div className="p-7 sm:p-9">
              <button
                type="button"
                onClick={() => setShowRegisterPopup(false)}
                className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-lg text-brand-gray-400 transition-colors hover:bg-brand-gray-100 hover:text-brand-gray-900"
                aria-label="Close"
              >
                ×
              </button>

              <div className="pr-8">
                <span className="inline-flex items-center rounded-full bg-brand-blue-light px-3 py-1 text-xs font-semibold text-brand-blue">
                  GST Filing Made Simple
                </span>

                <h2 className="mt-5 text-2xl font-bold tracking-tight text-brand-gray-900 sm:text-3xl">
                  Get your GST filing
                  <span className="block text-brand-blue">started today.</span>
                </h2>

                <p className="mt-3 max-w-md text-sm leading-6 text-brand-gray-600 sm:text-base">
                  Create your account and follow a simple guided process for
                  your GST registration, documents, and filing progress.
                </p>
              </div>

              {/* Highlights the main benefits of creating an account. */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    ✓
                  </div>

                  <p className="text-sm font-medium text-brand-gray-700">
                    Guided GST filing process
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    ✓
                  </div>

                  <p className="text-sm font-medium text-brand-gray-700">
                    Keep your documents organized
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    ✓
                  </div>

                  <p className="text-sm font-medium text-brand-gray-700">
                    Track your application progress
                  </p>
                </div>
              </div>

              {/* Primary conversion action. */}
              <button
                type="button"
                onClick={() => navigate("/register")}
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-lg bg-brand-navy px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-navy-light hover:shadow-md"
              >
                Create Your Account
                <span aria-hidden="true">→</span>
              </button>

              <p className="mt-3 text-center text-xs text-brand-gray-500">
                Get started in just a few steps.
              </p>

              <button
                type="button"
                onClick={() => setShowRegisterPopup(false)}
                className="mt-4 w-full text-center text-xs font-medium text-brand-gray-400 transition-colors hover:text-brand-gray-600"
              >
                Maybe later
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Home;
