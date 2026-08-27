import { useContext, useMemo, useState } from "react";
import {
  ArrowRight,
  Bell,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Eye,
  FileText,
  Search,
  XCircle,
} from "lucide-react";

import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import Modal from "../../components/ui/Modal";
import { AuthContext } from "../../context/AuthContext";

/*
 * Temporary mock data.
 * This structure is ready to be replaced by the backend API later.
 */
const APPLICATIONS = [
  {
    id: "GST-2026-001",
    date: "26 Aug 2026",
    applicationType: "GST Registration",
    status: "pending",
  },
  {
    id: "GST-2026-002",
    date: "20 Aug 2026",
    applicationType: "GST Registration",
    status: "approved",
  },
  {
    id: "GST-2026-003",
    date: "14 Aug 2026",
    applicationType: "GST Registration",
    status: "pending",
  },
  {
    id: "GST-2026-004",
    date: "08 Aug 2026",
    applicationType: "GST Registration",
    status: "rejected",
  },
  {
    id: "GST-2026-005",
    date: "02 Aug 2026",
    applicationType: "GST Registration",
    status: "approved",
  },
];

const NOTIFICATIONS = [
  {
    id: 1,
    title: "Document review pending",
    message: "Your documents for GST-2026-001 are currently under review.",
    time: "2 hours ago",
    icon: Clock3,
  },
  {
    id: 2,
    title: "Application approved",
    message: "GST-2026-002 has been successfully approved.",
    time: "2 days ago",
    icon: CheckCircle2,
  },
  {
    id: 3,
    title: "Application needs attention",
    message: "Please check the latest update for GST-2026-004.",
    time: "4 days ago",
    icon: XCircle,
  },
];

const STATUS_CONFIG = {
  pending: {
    label: "Pending",
    variant: "warning",
    icon: Clock3,
  },
  approved: {
    label: "Approved",
    variant: "success",
    icon: CheckCircle2,
  },
  rejected: {
    label: "Rejected",
    variant: "error",
    icon: XCircle,
  },
};

function StatCard({ label, value, description, icon: Icon }) {
  return (
    <Card className="group relative min-h-[145px] overflow-hidden p-5 transition-transform duration-200 hover:-translate-y-0.5">
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/[0.025]" />

      <div className="relative flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-xs font-medium text-on-surface-variant">{label}</p>

          <p className="mt-4 text-3xl font-semibold tracking-tight text-on-surface">
            {value}
          </p>
        </div>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-outline-variant bg-surface-container text-on-surface">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>

      <p className="relative mt-3 text-xs text-on-surface-variant">
        {description}
      </p>
    </Card>
  );
}

function NotificationItem({ notification }) {
  const Icon = notification.icon;

  return (
    <div className="flex gap-3 border-b border-outline-variant px-5 py-4 last:border-b-0">
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-outline-variant bg-surface-container text-on-surface">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </div>

      <div className="min-w-0">
        <p className="text-sm font-medium text-on-surface">
          {notification.title}
        </p>

        <p className="mt-1 text-xs leading-5 text-on-surface-variant">
          {notification.message}
        </p>

        <p className="mt-2 text-[11px] text-on-surface-variant">
          {notification.time}
        </p>
      </div>
    </div>
  );
}

function ApplicationStatus({ status }) {
  const config = STATUS_CONFIG[status];
  const StatusIcon = config.icon;

  return (
    <Badge variant={config.variant}>
      <StatusIcon className="mr-1 h-3 w-3" aria-hidden="true" />
      {config.label}
    </Badge>
  );
}

function Dashboard() {
  const { user } = useContext(AuthContext);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [selectedApplication, setSelectedApplication] = useState(null);

  const filteredApplications = useMemo(() => {
    const query = search.trim().toLowerCase();

    return APPLICATIONS.filter((application) => {
      const matchesSearch =
        !query ||
        application.id.toLowerCase().includes(query) ||
        application.applicationType.toLowerCase().includes(query);

      const matchesStatus = status === "all" || application.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  const counts = useMemo(
    () => ({
      total: APPLICATIONS.length,
      pending: APPLICATIONS.filter((item) => item.status === "pending").length,
      approved: APPLICATIONS.filter((item) => item.status === "approved")
        .length,
      rejected: APPLICATIONS.filter((item) => item.status === "rejected")
        .length,
    }),
    [],
  );

  const currentDate = new Intl.DateTimeFormat("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date());

  const firstName = user?.name?.split(" ")?.[0] || "there";

  const clearFilters = () => {
    setSearch("");
    setStatus("all");
  };

  return (
    <div className="min-h-full bg-background">
      <main className="mx-auto w-full max-w-[1500px] px-4 py-6 sm:px-6 lg:px-8">
        {/* Page heading */}
        <section className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl font-semibold tracking-tight text-on-surface sm:text-3xl">
                Dashboard
              </h1>

              <span className="hidden rounded-full border border-outline-variant bg-surface-container px-2.5 py-1 text-xs text-on-surface-variant sm:inline-flex">
                GST Filing Management
              </span>
            </div>

            <p className="mt-2 text-sm text-on-surface-variant">
              Welcome back, {firstName} 👋
            </p>
          </div>

          <div className="flex w-full items-center justify-between gap-3 rounded-md border border-outline-variant bg-surface px-4 py-2.5 text-sm text-on-surface-variant sm:w-auto sm:justify-start">
            <div className="flex min-w-0 items-center gap-2">
              <CalendarDays className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="truncate">{currentDate}</span>
            </div>

            <button
              type="button"
              aria-label="View notifications"
              onClick={() =>
                document
                  .getElementById("notifications")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="shrink-0 rounded-md p-1.5 text-on-surface transition-colors hover:bg-surface-container"
            >
              <Bell className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </section>

        {/* Application summary */}
        <section aria-label="GST application summary">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-base font-semibold text-on-surface">
                Application Overview
              </h2>

              <p className="mt-1 text-xs text-on-surface-variant">
                A quick look at your GST filing activity.
              </p>
            </div>

            <Button
              type="button"
              size="sm"
              onClick={() => (window.location.href = "/gst-registration")}
            >
              Start GST Registration
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard
              label="Total Applications"
              value={counts.total}
              description="Applications submitted"
              icon={FileText}
            />

            <StatCard
              label="Pending Applications"
              value={counts.pending}
              description="Currently under review"
              icon={Clock3}
            />

            <StatCard
              label="Approved Applications"
              value={counts.approved}
              description="Successfully approved"
              icon={CheckCircle2}
            />

            <StatCard
              label="Rejected Applications"
              value={counts.rejected}
              description="Applications rejected"
              icon={XCircle}
            />
          </div>
        </section>

        {/* Recent applications + notifications */}
        <section className="mt-9 grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
          {/* Recent applications */}
          <div className="min-w-0">
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="min-w-0">
                <h2 className="text-lg font-semibold text-on-surface">
                  Recent Applications
                </h2>

                <p className="mt-1 text-sm text-on-surface-variant">
                  Your latest applications and their current status.
                </p>
              </div>

              <button
                type="button"
                onClick={clearFilters}
                className="w-fit shrink-0 text-xs font-medium text-on-surface-variant transition-colors hover:text-on-surface"
              >
                Clear filters
              </button>
            </div>

            <Card padding={false} className="overflow-hidden">
              {/* Filters */}
              <div className="flex flex-col gap-3 border-b border-outline-variant p-3 sm:p-4 sm:flex-row">
                <div className="relative min-w-0 flex-1">
                  <Search
                    className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-on-surface-variant"
                    aria-hidden="true"
                  />

                  <Input
                    name="application-search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search application ID or type..."
                    className="pl-9"
                  />
                </div>

                <select
                  aria-label="Filter applications by status"
                  value={status}
                  onChange={(event) => setStatus(event.target.value)}
                  className="h-11 w-full rounded-md border border-outline-variant bg-surface px-3 text-sm text-on-surface outline-none transition-colors focus:border-primary sm:w-auto"
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>

              {/* Desktop/tablet table */}
              <div className="hidden overflow-x-auto md:block">
                <table className="w-full text-left">
                  <thead className="border-b border-outline-variant bg-surface-container">
                    <tr>
                      <th className="px-5 py-3 text-xs font-medium text-on-surface-variant">
                        Application ID
                      </th>
                      <th className="px-5 py-3 text-xs font-medium text-on-surface-variant">
                        Date
                      </th>
                      <th className="px-5 py-3 text-xs font-medium text-on-surface-variant">
                        Application Type
                      </th>
                      <th className="px-5 py-3 text-xs font-medium text-on-surface-variant">
                        Current Status
                      </th>
                      <th className="px-5 py-3 text-xs font-medium text-on-surface-variant">
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-outline-variant">
                    {filteredApplications.map((application) => (
                      <tr
                        key={application.id}
                        className="transition-colors hover:bg-surface-container/50"
                      >
                        <td className="px-5 py-4 text-sm font-medium text-on-surface">
                          {application.id}
                        </td>

                        <td className="px-5 py-4 text-sm text-on-surface-variant">
                          {application.date}
                        </td>

                        <td className="px-5 py-4 text-sm text-on-surface">
                          {application.applicationType}
                        </td>

                        <td className="px-5 py-4">
                          <ApplicationStatus status={application.status} />
                        </td>

                        <td className="px-5 py-4">
                          <Button
                            type="button"
                            variant="secondary"
                            size="sm"
                            onClick={() => setSelectedApplication(application)}
                          >
                            <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                            View
                          </Button>
                        </td>
                      </tr>
                    ))}

                    {filteredApplications.length === 0 && (
                      <tr>
                        <td colSpan={5} className="px-5 py-14 text-center">
                          <FileText className="mx-auto h-8 w-8 text-on-surface-variant" />
                          <p className="mt-3 text-sm font-medium text-on-surface">
                            No applications found
                          </p>
                          <p className="mt-1 text-xs text-on-surface-variant">
                            Try changing your search or status filter.
                          </p>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Mobile application cards */}
              <div className="divide-y divide-outline-variant md:hidden">
                {filteredApplications.map((application) => (
                  <article key={application.id} className="p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-on-surface">
                          {application.id}
                        </p>

                        <p className="mt-1 text-xs text-on-surface-variant">
                          {application.applicationType}
                        </p>
                      </div>

                      <div className="shrink-0">
                        <ApplicationStatus status={application.status} />
                      </div>
                    </div>

                    <div className="mt-4 flex items-end justify-between gap-3">
                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-wide text-on-surface-variant">
                          Application date
                        </p>

                        <p className="mt-1 text-xs text-on-surface">
                          {application.date}
                        </p>
                      </div>

                      <Button
                        type="button"
                        variant="secondary"
                        size="sm"
                        onClick={() => setSelectedApplication(application)}
                      >
                        <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                        View
                      </Button>
                    </div>
                  </article>
                ))}

                {filteredApplications.length === 0 && (
                  <div className="px-5 py-14 text-center">
                    <FileText className="mx-auto h-8 w-8 text-on-surface-variant" />
                    <p className="mt-3 text-sm font-medium text-on-surface">
                      No applications found
                    </p>
                    <p className="mt-1 text-xs text-on-surface-variant">
                      Try changing your search or status filter.
                    </p>
                  </div>
                )}
              </div>

              <div className="border-t border-outline-variant px-4 py-3 text-xs text-on-surface-variant sm:px-5">
                Showing {filteredApplications.length} of {APPLICATIONS.length}{" "}
                applications
              </div>
            </Card>
          </div>

          {/* Notifications */}
          <aside id="notifications" className="min-w-0">
            <div className="mb-4 flex items-end justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold text-on-surface">
                  Notifications
                </h2>

                <p className="mt-1 text-sm text-on-surface-variant">
                  Important updates related to your applications.
                </p>
              </div>

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-outline-variant bg-surface text-on-surface">
                <Bell className="h-4 w-4" aria-hidden="true" />
              </div>
            </div>

            <Card padding={false} className="overflow-hidden">
              {NOTIFICATIONS.length > 0 ? (
                NOTIFICATIONS.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    notification={notification}
                  />
                ))
              ) : (
                <div className="px-5 py-12 text-center">
                  <Bell className="mx-auto h-7 w-7 text-on-surface-variant" />
                  <p className="mt-3 text-sm font-medium text-on-surface">
                    No notifications
                  </p>
                  <p className="mt-1 text-xs text-on-surface-variant">
                    You're all caught up.
                  </p>
                </div>
              )}
            </Card>
          </aside>
        </section>
      </main>

      {/* Application details */}
      <Modal
        isOpen={Boolean(selectedApplication)}
        onClose={() => setSelectedApplication(null)}
        title="Application Details"
      >
        {selectedApplication && (
          <div className="space-y-5">
            <div className="rounded-lg border border-outline-variant bg-surface-container p-4">
              <p className="text-xs text-on-surface-variant">Application ID</p>
              <p className="mt-1 text-base font-semibold text-on-surface">
                {selectedApplication.id}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs text-on-surface-variant">Date</p>
                <p className="mt-1 text-sm text-on-surface">
                  {selectedApplication.date}
                </p>
              </div>

              <div>
                <p className="text-xs text-on-surface-variant">
                  Application Type
                </p>
                <p className="mt-1 text-sm text-on-surface">
                  {selectedApplication.applicationType}
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs text-on-surface-variant">Current Status</p>

              <div className="mt-2">
                <ApplicationStatus status={selectedApplication.status} />
              </div>
            </div>

            <div className="flex justify-end pt-1">
              <Button onClick={() => setSelectedApplication(null)}>
                Close
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Dashboard;
