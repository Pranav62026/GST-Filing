import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LandingNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Logo */}
        <button
          type="button"
          onClick={() => navigate("/")}
          className="text-xl font-bold tracking-tight text-white"
        >
          Kartsho
        </button>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#how-it-works"
            className="text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            How It Works
          </a>

          <a
            href="#services"
            className="text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            Services
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            Contact
          </a>
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="rounded-md px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Login
          </button>

          <button
            type="button"
            onClick={() => navigate("/register")}
            className="rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-surface-container"
          >
            Get Started
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-md p-2 text-white hover:bg-white/10 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-primary px-6 py-5 md:hidden">
          <div className="flex flex-col gap-1">
            <a
              href="#how-it-works"
              onClick={closeMenu}
              className="rounded-md px-3 py-3 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white"
            >
              How It Works
            </a>

            <a
              href="#services"
              onClick={closeMenu}
              className="rounded-md px-3 py-3 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white"
            >
              Services
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="rounded-md px-3 py-3 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="rounded-md px-3 py-3 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white"
            >
              Contact
            </a>

            <div className="mt-3 flex gap-3 border-t border-white/10 pt-4">
              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  navigate("/login");
                }}
                className="flex-1 rounded-md border border-white/20 px-4 py-2.5 text-sm font-medium text-white"
              >
                Login
              </button>

              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  navigate("/register");
                }}
                className="flex-1 rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-primary"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default LandingNavbar;
