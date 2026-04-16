import api from "../api/axios";

export const statService = {
  getStats: async () => {
    const res = await api.get("/stats.php");
    return res.data;
  }
};