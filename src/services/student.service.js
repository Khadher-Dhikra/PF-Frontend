import api from "../api/axios";

export const studentService = {
    getStudentProjectData: async () => {
        const res = await api.get("getStudentProjectData.php")
        return res.data;
    }
}