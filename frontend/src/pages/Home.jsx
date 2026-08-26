import { useNavigate } from "react-router-dom";
import LandingNavbar from "../components/layout/LandingNavbar";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import QuestionsCTA from "../components/home/QuestionsCTA";
import Footer from "../components/home/Footer";

function Home() {
  const navigate = useNavigate();

  return (
    <main className="bg-background">
      <LandingNavbar />

      {/* Hero section */}
      <section className="relative overflow-hidden bg-primary">
        {/* Subtle gradient */}
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

      {/* How it works */}
      <section
        id="how-it-works"
        className="bg-background px-6 py-20 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-primary">How it works</p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-on-surface sm:text-4xl">
              A simple process for your GST filing.
            </h2>

            <p className="mt-4 text-base leading-7 text-on-surface-variant">
              Get started with your details, provide the required documents, and
              track your filing from one place.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-md border border-outline-variant bg-surface p-6">
              <p className="text-sm font-semibold text-primary">01</p>

              <h3 className="mt-4 text-lg font-semibold text-on-surface">
                Create your account
              </h3>

              <p className="mt-2 text-sm leading-6 text-on-surface-variant">
                Register your details and get started with your GST filing.
              </p>
            </div>

            <div className="rounded-md border border-outline-variant bg-surface p-6">
              <p className="text-sm font-semibold text-primary">02</p>

              <h3 className="mt-4 text-lg font-semibold text-on-surface">
                Provide your details
              </h3>

              <p className="mt-2 text-sm leading-6 text-on-surface-variant">
                Complete the guided onboarding process and provide the required
                documents.
              </p>
            </div>

            <div className="rounded-md border border-outline-variant bg-surface p-6">
              <p className="text-sm font-semibold text-primary">03</p>

              <h3 className="mt-4 text-lg font-semibold text-on-surface">
                Track your filing
              </h3>

              <p className="mt-2 text-sm leading-6 text-on-surface-variant">
                Keep track of your filing progress and pending requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FE Dev 2 sections ── */}
      <WhyChooseUs />
      <Testimonials />
      <QuestionsCTA />
      <Footer />
    </main>
  );
}

export default Home;
