import { useLocation } from "react-router-dom";

function Topbar({ onMenuClick }) {
  const location = useLocation();

  const pageTitles = {
    "/dashboard": "Dashboard",
    "/checklist": "Checklist",
    "/documents": "Documents",
    "/roadmap": "Roadmap",
    "/services": "Services",
    "/appointments": "Appointments",
    "/payments": "Payments",
    "/messages": "Messages",
    "/notifications": "Notifications",
  };

  const pageTitle = pageTitles[location.pathname] || "Kartsho GST";

  return (
    <header className="flex h-16 items-center justify-between border-b border-outline-variant bg-surface px-4 sm:px-6">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-md p-2 text-secondary hover:bg-surface-container hover:text-on-surface md:hidden"
          aria-label="Open menu"
        >
          ☰
        </button>

        <h1 className="text-lg font-semibold text-on-surface">{pageTitle}</h1>
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        <button
          type="button"
          className="rounded-md p-2 text-secondary transition-colors hover:bg-surface-container hover:text-on-surface"
          aria-label="Notifications"
        >
          Notifications
        </button>

        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-container text-sm font-medium text-on-surface">
            V
          </div>

          <span className="hidden text-sm font-medium text-on-surface sm:block">
            Vishal
          </span>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
