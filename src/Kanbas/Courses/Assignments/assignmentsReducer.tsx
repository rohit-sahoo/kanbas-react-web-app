import { createSlice } from "@reduxjs/toolkit";
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

interface InitialState {
    assignments: Assignment[],
    assignment: Assignment;
}

const initialState: InitialState = {
    assignments: [],
    assignment: {
        _id: "",
        course: "",
        dueDate: "",
        dueTime: "",
        availableFrom: "",
        availableUntil: "",
        title: "New Assignment",
        description: "New Assignment Description",
        points: 100
    }
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignments: (state, action) => {
            state.assignments = action.payload;
        },
        addAssignment: (state, action) => {
            state.assignments = [
                { ...action.payload, _id: new Date().getTime().toString() },
                ...state.assignments,
            ];
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            );
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment) => {
                console.log(assignment._id);
                if (assignment._id === action.payload._id) {
                    return action.payload;
                } else {
                    return assignment;
                }
            });
        },
        selectAssignment: (state, action) => {
            state.assignment = action.payload;
        },
        resetAssignmentForm: (state) => {
            state.assignment._id = "";
            state.assignment.course = "";
            state.assignment.dueDate = "";
            state.assignment.dueTime = "";
            state.assignment.availableFrom = "";
            state.assignment.availableUntil = "";
            state.assignment.title = "New Assignment";
            state.assignment.description = "New Assignment Description";
            state.assignment.points = 100;
        }
    },
});

export const { setAssignments, addAssignment, deleteAssignment, updateAssignment, selectAssignment, resetAssignmentForm } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
