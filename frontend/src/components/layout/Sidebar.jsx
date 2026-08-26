import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
import { toast } from "sonner";

const navigation = [
  {
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    label: "Checklist",
    path: "/checklist",
  },
  {
    label: "Documents",
    path: "/documents",
  },
  {
    label: "Roadmap",
    path: "/roadmap",
  },
  {
    label: "Services",
    path: "/services",
  },
  {
    label: "Appointments",
    path: "/appointments",
  },
  {
    label: "Payments",
    path: "/payments",
  },
  {
    label: "Messages",
    path: "/messages",
  },
  {
    label: "Notifications",
    path: "/notifications",
  },
  {
    label: "Gst registration",
    path: "/gst-registration",
  },
];

function Sidebar({ isOpen, onClose }) {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <>
      {/* Mobile background */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-sidebar flex-col border-r border-outline-variant bg-surface transition-transform duration-200
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        <div className="flex items-center justify-between border-b border-outline-variant px-6 py-5">
          <div>
            <h1 className="text-lg font-semibold text-on-surface">
              Kartsho GST
            </h1>

            <p className="mt-1 text-sm text-on-surface-variant">
              Founder Suite
            </p>
          </div>

          {/* Mobile close button */}
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-2 text-secondary hover:bg-surface-container hover:text-on-surface md:hidden"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto p-3">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-surface-container text-on-surface"
                    : "text-secondary hover:bg-surface-container hover:text-on-surface"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-outline-variant p-4">
          <button className="w-full rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-on-primary">
            Consult Expert
          </button>
          <button
            type="button"
            onClick={() => {
              logout();
              onClose();
              toast.success("You have been logged out.");
              navigate("/login");
            }}
            className="mt-2 w-full rounded-md px-3 py-2 text-sm font-medium text-secondary hover:bg-surface-container"
          >
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
