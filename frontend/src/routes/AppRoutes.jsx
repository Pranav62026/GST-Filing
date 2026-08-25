import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "../components/layout/AppLayout";
import Dashboard from "../pages/app/Dashboard";
import LandingPage from "../pages/LandingPage";

import UiTest from "../pages/UiTest";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public landing page — no sidebar/topbar */}
        <Route path="/" element={<LandingPage />} />

        {/* Dashboard routes — wrapped in AppLayout */}
        <Route
          path="/dashboard"
          element={
            <AppLayout>
              <Dashboard />
            </AppLayout>
          }
        />

        <Route
          path="/checklist"
          element={
            <AppLayout>
              <div>Checklist</div>
            </AppLayout>
          }
        />

        <Route
          path="/documents"
          element={
            <AppLayout>
              <div>Documents</div>
            </AppLayout>
          }
        />

        <Route
          path="/roadmap"
          element={
            <AppLayout>
              <div>Roadmap</div>
            </AppLayout>
          }
        />

        <Route
          path="/services"
          element={
            <AppLayout>
              <div>Services</div>
            </AppLayout>
          }
        />

        <Route
          path="/appointments"
          element={
            <AppLayout>
              <div>Appointments</div>
            </AppLayout>
          }
        />

        <Route
          path="/payments"
          element={
            <AppLayout>
              <div>Payments</div>
            </AppLayout>
          }
        />

        <Route
          path="/messages"
          element={
            <AppLayout>
              <div>Messages</div>
            </AppLayout>
          }
        />

        <Route
          path="/notifications"
          element={
            <AppLayout>
              <div>Notifications</div>
            </AppLayout>
          }
        />

        {/* temp */}
        <Route
          path="/uitest"
          element={
            <AppLayout>
              <UiTest />
            </AppLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

