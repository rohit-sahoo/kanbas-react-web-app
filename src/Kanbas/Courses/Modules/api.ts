import axios, { AxiosResponse } from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
const COURSES_API = `${API_BASE}/api/courses`;
//const COURSES_API = "http://localhost:4000/api/courses";
const MODULES_API = `${API_BASE}/api/modules`;
//const MODULES_API = `http://localhost:4000/api/modules`;


interface Lesson {
    _id: string;
    name: string;
    description: string;
    module: string;
    indent: number;
}
interface Module {
    _id: string;
    name: string;
    description: string;
    course: string;
    lessons?: Lesson[];
}

export const fetchModulesForCourse = async (courseId: any) => {
    const response: AxiosResponse<Module[]> = await
        axios.get<Module[]>(`${COURSES_API}/${courseId}/modules`);
    return response.data;
};

export const createModule = async (courseId: string, module: Module) => {
    const response: AxiosResponse<Module> = await
        axios.post<Module>(`${COURSES_API}/${courseId}/modules`, module);
    return response.data;
}

export const deleteModule = async (moduleId: string) => {
    const response = await
        axios.delete(`${MODULES_API}/${moduleId}`);
    return response.data;
};

export const updateModule = async (module: Module) => {
    const response = await
        axios.put<Module>(`${MODULES_API}/${module._id}`, module);
    return response.data;
};

