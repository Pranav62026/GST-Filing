import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import QuestionsCTA from "../components/home/QuestionsCTA";
import Footer from "../components/home/Footer";

/**
 * Public landing page.
 *
 * Frontend Developer 1's sections (Header, Hero, Consultation Form,
 * Services Grid, Stats Strip) will be added here when ready.
 *
 * Frontend Developer 2's sections are:
 *   - WhyChooseUs
 *   - Testimonials
 *   - QuestionsCTA
 *   - Footer
 */
function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── FE Dev 1 sections will be inserted above ── */}
      {/* Header/Navbar */}
      {/* Hero */}
      {/* Free Consultation Form */}
      {/* Services Grid */}
      {/* Stats Strip */}

      {/* ── FE Dev 2 sections ── */}
      <WhyChooseUs />
      <Testimonials />
      <QuestionsCTA />
      <Footer />
    </div>
  );
}

export default LandingPage;
