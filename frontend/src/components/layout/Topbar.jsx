import { Bell } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


function Topbar({ onMenuClick }) {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

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
      {/* Left */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-md p-2 text-secondary transition-colors hover:bg-surface-container hover:text-on-surface md:hidden"
          aria-label="Open menu"
        >
          ☰
        </button>

        <h1 className="text-lg font-semibold text-on-surface">{pageTitle}</h1>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Notifications */}
        <button
          type="button"
          onClick={() => navigate("/notifications")}
          className="relative rounded-md p-2 text-secondary transition-colors hover:bg-surface-container hover:text-on-surface"
          aria-label="View notifications"
          title="Notifications"
        >
          <Bell className="h-5 w-5" aria-hidden="true" />
        </button>

        {/* User */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-container text-sm font-medium text-on-surface">
            {user?.name?.charAt(0)?.toUpperCase() || "U"}
          </div>

          <span className="hidden text-sm font-medium text-on-surface sm:block">
            {user?.name || "User"}
          </span>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
