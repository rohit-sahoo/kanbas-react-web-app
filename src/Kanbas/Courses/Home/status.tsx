import { FaBan, FaCheckCircle, FaFileImport, FaBullseye, FaBell, FaBullhorn, FaCircle, FaCalendar } from "react-icons/fa";
import { FaChartSimple, FaXmark } from "react-icons/fa6";
import "./status.css";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { courses, assignments } from "../../Database";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function Status() {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    const { assignmentId } = useParams();
    const assignment = assignments.find((assignment) => assignment._id === assignmentId);
    return (
        <div className="col-3 d-none d-xxl-block course-status-wrapper">
            <div className="d-flex flex-column">
                <h3>Course Status</h3>
                <div className="d-flex flex-row gap-1">
                    <button className="btn btn-outline-secondary btn-5-width">
                        <FaBan className="me-1" />
                        Unpublish
                    </button>
                    <button className="btn btn-success btn-5-width">
                        <FaCheckCircle className="fa-check-circle me-1" />
                        Published
                    </button>
                </div>

                <div className="d-flex flex-column mt-2">
                    <button className="btn btn-outline-secondary mb-1 text-start course-options" type="button">
                        <FaFileImport className="me-1" />
                        Import Existing Content
                    </button>
                    <button className="btn btn-outline-secondary mb-1 text-start course-options" type="button">
                        <FaFileImport className="me-1" />
                        Import From Commons
                    </button>
                    <button className="btn btn-outline-secondary mb-1 text-start course-options" type="button">
                        <FaBullseye className="me-1" />
                        Choose Home Page
                    </button>
                    <button className="btn btn-outline-secondary mb-1 text-start course-options" type="button">
                        <FaChartSimple className="me-1" />
                        View Course Stream
                    </button>
                    <button className="btn btn-outline-secondary mb-1 text-start course-options" type="button">
                        <FaBullhorn className="me-1" />
                        New Announcement
                    </button>
                    <button className="btn btn-outline-secondary mb-1 text-start course-options" type="button">
                        <FaChartSimple className="me-1" />
                        New Analysis
                    </button>
                    <button className="btn btn-outline-secondary mb-1 text-start course-options" type="button">
                        <FaBell className="me-1" />
                        View Course Notifications
                    </button>
                </div>

                <div className="d-flex flex-column">
                    <h4 className="mt-2 mb-0">To Do</h4>
                    <hr className="course-options" />
                </div>

                <div className="d-flex flex-row">
                    <div className="col-2 d-flex align-items-center">
                        <span className="notification-badge">
                            <FaCircle className="circle" />
                            <span className="badge">1</span>
                        </span>
                    </div>

                    <div className="col-9">
                        <div className="d-flex flex-column to-do">
                            <div>
                                <a className="to-do-item">
                                    Grade - Assignment 1
                                </a>
                                <br />
                                <a  className="to-do-item-detail">
                                    100 points Sep 18 at 11:59pm
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-1 d-flex xmark">
                        <FaXmark />
                    </div>
                </div>

                <div className="d-flex flex-column mt-3">
                    <div className="d-flex flex-row align-items-center">
                        <div className="col-7">
                            <h4 className="mb-0 text-nowrap">Coming Up</h4>
                        </div>
                        <div className="col-5 text-nowrap calendar">
                            <FaCalendar />
                            <a className="calendar-option"> View Calendar</a>
                        </div>
                    </div>
                    <hr className="course-options" />

                    <div className="mb-2">
                        <div className="d-flex flex-row">
                            <div className="col-1">
                                <FaCalendar />
                            </div>
                            <div className="col-11 d-flex flex-column">
                                <div className="row coming-up-item">
                                    <a className="to-do-item">Lecture</a>
                                    <div className="coming-up-item-detail mb-3">
                                    <Link to={`/Kanbas/Courses/${course?._id}/Home`}>
                                        {course?.number}{course?.startDate}
                                    </Link>
                                        <br />
                                        Sep 11 at 11:45am
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-row mb-2">
                            <div className="col-1">
                                <FaCalendar />
                            </div>
                            <div className="col-11 d-flex flex-column">
                                <div className="row coming-up-item">
                                    <a className="to-do-item">
                                        <Link to={`/Kanbas/Courses/${course?._id}/Home`}>
                                        {course?.number}
                                    </Link> 06 SP24 Lecture 1</a>
                                    <div className="coming-up-item-detail mb-3">
                                    <Link to={`/Kanbas/Courses/${course?._id}/Home`}>
                                        {course?.number}{course?.startDate}
                                    </Link>
                                        <br />
                                        Sep 11 at 11:45am
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-row mb-2">
                            <div className="col-1">
                                <FaCalendar />
                            </div>
                            <div className="col-11 d-flex flex-column">
                                <div className="row coming-up-item">
                                    <a className="to-do-item text-wrap"><Link to={`/Kanbas/Courses/${course?._id}/Home`}>
                                        {course?.number}
                                    </Link>  05 SP2024 - LECTURE 2</a>
                                    <div className="coming-up-item-detail mb-3">
                                    <Link to={`/Kanbas/Courses/${course?._id}/Home`}>
                                        {course?.number}{course?.startDate}
                                    </Link>
                                        <br />
                                        Sep 11 at 11:45am
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="coming-up-item-link">
                        <a className="to-do-item"> 12 more in the next week....</a>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Status; 