import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";

function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="mt-2 text-sm text-on-surface-variant">
        Welcome to Kartsho GST.
      </p>
    </div>
  );
}

function Checklist() {
  return <h1 className="text-2xl font-semibold">Checklist</h1>;
}

function Documents() {
  return <h1 className="text-2xl font-semibold">Documents</h1>;
}

function Roadmap() {
  return <h1 className="text-2xl font-semibold">Roadmap</h1>;
}

function Services() {
  return <h1 className="text-2xl font-semibold">Services</h1>;
}

function Appointments() {
  return <h1 className="text-2xl font-semibold">Appointments</h1>;
}

function Payments() {
  return <h1 className="text-2xl font-semibold">Payments</h1>;
}

function Messages() {
  return <h1 className="text-2xl font-semibold">Messages</h1>;
}

function Notifications() {
  return <h1 className="text-2xl font-semibold">Notifications</h1>;
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <AppLayout>
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/checklist" element={<Checklist />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/services" element={<Services />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/notifications" element={<Notifications />} />
          </Routes>
        </div>
      </AppLayout>
    </BrowserRouter>
  );
}

export default AppRoutes;