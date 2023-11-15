import axios from "axios";

export const fetchCourses = async () => {
    const response = await axios.get("http://localhost:4000/api/courses");
    return response.data;
}
