import { NavLink } from "react-router-dom";

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
];

function Sidebar() {
  return (
    <aside className="hidden md:flex fixed left-0 top-0 z-30 h-screen w-sidebar flex-col border-r border-outline-variant bg-surface">
      <div className="border-b border-outline-variant px-6 py-5">
        <h1 className="text-lg font-semibold text-on-surface">Kartsho GST</h1>

        <p className="mt-1 text-sm text-on-surface-variant">Founder Suite</p>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto p-3">
        {navigation.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
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

        <button className="mt-2 w-full rounded-md px-3 py-2 text-left text-sm font-medium text-secondary hover:bg-surface-container">
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
