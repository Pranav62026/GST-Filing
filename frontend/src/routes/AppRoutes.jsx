import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "../components/layout/AppLayout";

import Dashboard from "../pages/app/Dashboard";

import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";

import UiTest from "../pages/UiTest";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home";
import Documents from "../pages/app/gst/Documents";
import ReviewDocuments from "../pages/app/gst/Review";
import GstRegistration from "../pages/app/gst/GstRegistration";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* =========================
            PUBLIC ROUTES
        ========================== */}

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        {/* =========================
            PROTECTED ROUTES
        ========================== */}

        <Route element={<ProtectedRoute />}>
          <Route element={<AppLayout />}>
            {/* Dashboard */}
            <Route path="/dashboard" element={<Dashboard />} />

            {/* GST Filing Flow */}
            <Route path="/gst-registration" element={<GstRegistration />} />

            <Route path="/documents" element={<Documents />} />

            <Route path="/review-documents" element={<ReviewDocuments />} />

            {/* Existing App Routes */}
            <Route path="/checklist" element={<div>Checklist</div>} />

            <Route path="/roadmap" element={<div>Roadmap</div>} />

            <Route path="/services" element={<div>Services</div>} />

            <Route path="/appointments" element={<div>Appointments</div>} />

            <Route path="/payments" element={<div>Payments</div>} />

            <Route path="/messages" element={<div>Messages</div>} />

            <Route path="/notifications" element={<div>Notifications</div>} />

            {/* Temporary UI testing */}
            <Route path="/uitest" element={<UiTest />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
