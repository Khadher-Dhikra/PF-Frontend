import api from "../api/axios";

export const tutorService = {
    getTutorStudents: async () =>{
        const res = await api.get("getTutorStudents.php");
        return res.data;
    }
}