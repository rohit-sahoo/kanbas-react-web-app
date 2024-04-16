import { configureStore } from "@reduxjs/toolkit";

import modulesReducer from "../Courses/Modules/modulesReducer";
import assignmentReducer from "../Courses/Assignments/assignmentsReducer";

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

export interface KanbasState {
    modulesReducer: {
        modules: Module[];
        module: Module;
    };

    assignmentReducer: {
        assignments: Assignment[];
        assignment: Assignment;
    };
}
const store = configureStore({
    reducer: {
        modulesReducer,
        assignmentReducer
    }
});


export default store;