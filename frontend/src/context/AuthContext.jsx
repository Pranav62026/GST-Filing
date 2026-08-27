import { createContext, useState } from "react";
import {
  getCurrentUser,
  logoutUser,
  updateOnboardingStatus,
} from "../services/mockAuth";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getCurrentUser());

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    logoutUser();
    setUser(null);
  };

  const updateUserOnboarding = (status) => {
    const result = updateOnboardingStatus(status);

    if (result.success) {
      setUser(result.user);
    }

    return result;
  };

  const isAuthenticated = user !== null;

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated,
        updateUserOnboarding,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
