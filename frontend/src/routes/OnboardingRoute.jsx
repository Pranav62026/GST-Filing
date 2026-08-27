import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

function OnboardingRoute() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.onboardingStatus !== "completed") {
    return <Navigate to="/gst-registration" replace />;
  }

  return <Outlet />;
}

export default OnboardingRoute;