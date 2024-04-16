import axios, { AxiosResponse } from "axios";


const API_BASE = process.env.REACT_APP_API_BASE;
//const COURSES_API = "http://localhost:4000/api/courses";
const COURSES_API = `${API_BASE}/api/courses`;
const ASSIGNMENT_API = `${API_BASE}/api/assignments`;
//const ASSIGNMENT_API = `http://localhost:4000/api/assignments`;

interface Assignment {
    _id: string;
    title: string;
    course: string;
    dueDate: string;
    dueTime: string;
    points: number;
    description: string;
    availableFrom: string;
    availableUntil: string;
}

export const fetchAssignmentsForCourse = async (courseId: any) => {
    const response: AxiosResponse<Assignment[]> = await
        axios.get<Assignment[]>(`${COURSES_API}/${courseId}/assignments`);
    return response.data;
};

export const createAssignment = async (courseId: any, assignment: Assignment) => {
    const response: AxiosResponse<Assignment> = await
        axios.post<Assignment>(`${COURSES_API}/${courseId}/assignments`, assignment);
    return response.data;
};

export const deleteAssignment = async (assignmentId: string) => {
    const response = await
        axios.delete(`${ASSIGNMENT_API}/${assignmentId}`);
    return response.data;
};

export const updateAssignment = async (assignment: Assignment) => {
    console.log(assignment);
    const response = await
        axios.put<Assignment>(`${ASSIGNMENT_API}/${assignment._id}`, assignment);
    return response.data;
};
