import { useMemo, useState, useContext } from "react";
import {
  Bell,
  CalendarDays,
  Eye,
  FileText,
  Search,
  Users,
  Clock3,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { toast } from "sonner";

import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import Modal from "../../components/ui/Modal";
import { AuthContext } from "../../context/AuthContext";

const APPLICATIONS = [
  {
    id: "GST-2026-001",
    name: "Rahul Sharma",
    gstin: "09ABCDE1234F1Z5",
    date: "26 Aug 2026",
    status: "pending",
  },
  {
    id: "GST-2026-002",
    name: "Priya Enterprises",
    gstin: "27FGHIJ5678K2Z3",
    date: "25 Aug 2026",
    status: "approved",
  },
  {
    id: "GST-2026-003",
    name: "Aarav Traders",
    gstin: "10KLMNO9012P3Z4",
    date: "24 Aug 2026",
    status: "pending",
  },
  {
    id: "GST-2026-004",
    name: "Sharma Manufacturing",
    gstin: "23QRSTU3456V4Z6",
    date: "23 Aug 2026",
    status: "rejected",
  },
  {
    id: "GST-2026-005",
    name: "Neha Retail",
    gstin: "29WXYZA7890B5Z2",
    date: "22 Aug 2026",
    status: "approved",
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
    <Card className="min-h-[145px] p-5 transition-transform duration-200 hover:-translate-y-0.5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium text-on-surface-variant">{label}</p>
          <p className="mt-4 text-3xl font-semibold tracking-tight text-on-surface">
            {value}
          </p>
        </div>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-outline-variant bg-surface-container text-on-surface">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>

      <p className="mt-3 text-xs text-on-surface-variant">{description}</p>
    </Card>
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
        application.name.toLowerCase().includes(query) ||
        application.gstin.toLowerCase().includes(query);

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

  const handleView = (application) => {
    setSelectedApplication(application);
  };

  const handleViewAll = () => {
    setSearch("");
    setStatus("all");
    toast.info("Showing all GST applications.");
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-[1500px] px-4 py-6 sm:px-6 lg:px-8">
        {/* Page heading */}
        <div className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-semibold tracking-tight text-on-surface sm:text-3xl">
                Dashboard
              </h1>

              <span className="hidden rounded-full border border-outline-variant bg-surface-container px-2.5 py-1 text-xs text-on-surface-variant sm:inline-flex">
                GST Filing Management
              </span>
            </div>

            <p className="mt-2 text-sm text-on-surface-variant">
              Welcome back, {user?.name || "Admin"} 👋
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-md border border-outline-variant bg-surface px-4 py-2.5 text-sm text-on-surface-variant">
            <CalendarDays className="h-4 w-4" aria-hidden="true" />
            <span>{currentDate}</span>
            <Bell className="ml-2 h-4 w-4 text-on-surface" aria-hidden="true" />
          </div>
        </div>

        {/* Summary cards */}
        <section
          aria-label="GST application summary"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
        >
          <StatCard
            label="Total Users"
            value="—"
            description="Registered users"
            icon={Users}
          />

          <StatCard
            label="GST Applications"
            value={counts.total}
            description="GST applications submitted"
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
        </section>

        {/* Applications */}
        <section className="mt-9">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-on-surface">
                Recent GST Applications
              </h2>

              <p className="mt-1 text-sm text-on-surface-variant">
                Review and manage recently submitted applications.
              </p>
            </div>

            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={handleViewAll}
            >
              View All
              <span aria-hidden="true">→</span>
            </Button>
          </div>

          <Card padding={false} className="overflow-hidden">
            {/* Filters */}
            <div className="flex flex-col gap-3 border-b border-outline-variant p-4 sm:flex-row">
              <div className="relative min-w-0 flex-1">
                <Search
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-on-surface-variant"
                  aria-hidden="true"
                />

                <Input
                  name="application-search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search applicant or GSTIN..."
                  className="pl-9"
                />
              </div>

              <select
                aria-label="Filter applications by status"
                value={status}
                onChange={(event) => setStatus(event.target.value)}
                className="h-11 rounded-md border border-outline-variant bg-surface px-3 text-sm text-on-surface outline-none transition-colors focus:border-primary"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>

            {/* Responsive table */}
            <div className="overflow-x-auto">
              <table className="min-w-[760px] w-full text-left">
                <thead className="border-b border-outline-variant bg-surface-container">
                  <tr>
                    <th className="px-5 py-3 text-xs font-medium text-on-surface-variant">
                      Application ID
                    </th>
                    <th className="px-5 py-3 text-xs font-medium text-on-surface-variant">
                      Applicant
                    </th>
                    <th className="px-5 py-3 text-xs font-medium text-on-surface-variant">
                      GSTIN
                    </th>
                    <th className="px-5 py-3 text-xs font-medium text-on-surface-variant">
                      Application Date
                    </th>
                    <th className="px-5 py-3 text-xs font-medium text-on-surface-variant">
                      Status
                    </th>
                    <th className="px-5 py-3 text-xs font-medium text-on-surface-variant">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-outline-variant">
                  {filteredApplications.map((application) => {
                    const config = STATUS_CONFIG[application.status];
                    const StatusIcon = config.icon;

                    return (
                      <tr
                        key={application.id}
                        className="transition-colors hover:bg-surface-container/50"
                      >
                        <td className="px-5 py-4 text-sm font-medium text-on-surface">
                          {application.id}
                        </td>

                        <td className="px-5 py-4 text-sm font-medium text-on-surface">
                          {application.name}
                        </td>

                        <td className="px-5 py-4 font-mono text-xs text-on-surface-variant">
                          {application.gstin}
                        </td>

                        <td className="px-5 py-4 text-sm text-on-surface-variant">
                          {application.date}
                        </td>

                        <td className="px-5 py-4">
                          <Badge variant={config.variant}>
                            <StatusIcon
                              className="mr-1 h-3 w-3"
                              aria-hidden="true"
                            />
                            {config.label}
                          </Badge>
                        </td>

                        <td className="px-5 py-4">
                          <Button
                            type="button"
                            variant="secondary"
                            size="sm"
                            onClick={() => handleView(application)}
                          >
                            <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                            View
                          </Button>
                        </td>
                      </tr>
                    );
                  })}

                  {filteredApplications.length === 0 && (
                    <tr>
                      <td
                        colSpan={6}
                        className="px-5 py-12 text-center text-sm text-on-surface-variant"
                      >
                        No applications match your search or filter.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </Card>
        </section>
      </main>

      <Modal
        isOpen={Boolean(selectedApplication)}
        onClose={() => setSelectedApplication(null)}
        title="Application Details"
      >
        {selectedApplication && (
          <div className="space-y-4">
            <div>
              <p className="text-xs text-on-surface-variant">Application ID</p>
              <p className="mt-1 font-medium text-on-surface">
                {selectedApplication.id}
              </p>
            </div>

            <div>
              <p className="text-xs text-on-surface-variant">Applicant</p>
              <p className="mt-1 font-medium text-on-surface">
                {selectedApplication.name}
              </p>
            </div>

            <div>
              <p className="text-xs text-on-surface-variant">GSTIN</p>
              <p className="mt-1 font-mono text-sm text-on-surface">
                {selectedApplication.gstin}
              </p>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs text-on-surface-variant">
                  Application Date
                </p>
                <p className="mt-1 text-sm text-on-surface">
                  {selectedApplication.date}
                </p>
              </div>

              <Badge
                variant={STATUS_CONFIG[selectedApplication.status].variant}
              >
                {STATUS_CONFIG[selectedApplication.status].label}
              </Badge>
            </div>

            <div className="flex justify-end pt-2">
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
