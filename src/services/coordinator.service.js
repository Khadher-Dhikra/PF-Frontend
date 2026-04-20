import api from "../api/axios";

export const coordinatorService = {
    gerRecentlyCreatedAccounts: async () => {
        const res = await api.get('getRecentlyCreatedAccounts.php') 
        return res.data;
    }
}
