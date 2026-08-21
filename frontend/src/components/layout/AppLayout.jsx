import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      <div className="md:ml-sidebar">
        <Topbar />

        <main className="min-h-[calc(100vh-4rem)] p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

export default AppLayout;