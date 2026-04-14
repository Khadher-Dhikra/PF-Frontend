import api from "../api/axios";

export const authService = {
  login: async (formData) => {
    const res = await api.post("/login.php", formData);
    return res.data;
  },

  register: async (formData) => {
    const res = await api.post("/register.php", formData);
    return res.data;
  },
  
  forgotPassword: async (email) => {
    const res = await api.post("/forgot-password.php", email);
    return res.data;
  },

  resetPassword: async (data) => {
    const res = await api.post("/reset-password.php", data);
    return res.data;
  },

  logout: async (refreshToken) => {
    const res = await api.post("/logout.php.php", refreshToken);
    return res.data;
  },
};