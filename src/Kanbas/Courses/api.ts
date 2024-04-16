import axios, { AxiosResponse } from "axios";


const API_BASE = process.env.REACT_APP_API_BASE;
//const COURSES_API = "http://localhost:4000/api/courses";

const COURSES_API = `${API_BASE}/api/courses`;

//console.log(API_BASE);

interface Course {
    _id: string;
    name: string;
    number: string;
    courseText: string;
    startDate: string;
    endDate: string;
    image: string;
}

export const fetchCourses = async () => {
    const response: AxiosResponse<Course[]> = await
        axios.get<Course[]>(COURSES_API);

    return response.data;
};

export const addNewCourse = async (course: Course) => {
    const response: AxiosResponse<Course> = await
        axios.post<Course>(COURSES_API, course);
    return response.data;
};

export const deleteCourse = async (courseId: string) => {
    const response = await
        axios.delete(`${COURSES_API}/${courseId}`);

    return response.data;
}

export const updateCourse = async (course: Course) => {
    const response = await
        axios.put(`${COURSES_API}/${course._id}`, course);

    return response.data;
}

export const fetchCourseById = async (courseId?: string) => {
    const response: AxiosResponse<Course> = await
        axios.get<Course>(`${COURSES_API}/${courseId}`);

    return response.data;
};