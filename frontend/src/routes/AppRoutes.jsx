import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "../components/layout/AppLayout";
import Dashboard from "../pages/app/Dashboard";

import UiTest from "../pages/UiTest";

function AppRoutes() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/checklist" element={<div>Checklist</div>} />

          <Route path="/documents" element={<div>Documents</div>} />

          <Route path="/roadmap" element={<div>Roadmap</div>} />

          <Route path="/services" element={<div>Services</div>} />

          <Route path="/appointments" element={<div>Appointments</div>} />

          <Route path="/payments" element={<div>Payments</div>} />

          <Route path="/messages" element={<div>Messages</div>} />

          <Route path="/notifications" element={<div>Notifications</div>} />

          {/* temp */}

          <Route path="/uitest" element={<UiTest />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default AppRoutes;
