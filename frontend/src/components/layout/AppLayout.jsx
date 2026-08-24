import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function AppLayout() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      <div className="md:ml-sidebar">
        <Topbar />

        <main className="min-h-[calc(100vh-4rem)] p-6">
          <Outlet/>
        </main>
      </div>
    </div>
  );
}

export default AppLayout;