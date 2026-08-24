import AuthProvider from "./context/AuthContext";
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "sonner";

const App = () => {
  return (
    <AuthProvider>
      <Toaster position="top-right"  />

      <AppRoutes />
    </AuthProvider>
  );
};

export default App;
