import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { authService } from "../services/auth.service";

export default function AuthProvider({ children }) {

  const [user, setUser] = useState(() => {
    try {
      const token = localStorage.getItem("token");
      const storedUser = localStorage.getItem("user");

      return token && storedUser ? JSON.parse(storedUser) : null;
    } catch {
      return null;
    }
  });

  const [loading] = useState(false);

  const login = (data) => {
    const { token, refreshToken, user } = data;

    localStorage.setItem("token", token);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("user", JSON.stringify(user));

    setUser(user);
  };

  const logout = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      if (refreshToken) {
        await authService.logout(refreshToken);
      } 
    }
    catch (error) {
      console.error("logout error:", error)
    }
    finally {
      localStorage.clear();
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}