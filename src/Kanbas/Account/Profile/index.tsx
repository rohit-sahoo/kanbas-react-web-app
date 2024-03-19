import { FaRegUserCircle, FaLink, FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./index.css";

function Profile() {
    const links = [
        { label: "Instagram", url: "https://www.instagram.com", icon: <FaLink className="me-1" /> },
        { label: "Youtube", url: "https://www.youtube.com", icon: <FaLink className="me-1" /> }
    ]

    return (
        <div className="layout-contentWrapper">
            <div className="layout-content">
                <div className="profile-layout">
                    <div className="profile-layout-primary">
                        <div className="image-block">
                            <div className="profile-avatar">
                                <FaRegUserCircle className="user-circle" />
                            </div>
                            <div className="profile-content">
                                <h2 className="mt-2 mb-5" id="username">Rohit Sisir Sahoo</h2>

                                <h3>Contact</h3>
                                <p>No registered services, you can add some on the <Link to={`/Kanbas/Account/Settings`}>settings </Link>page.</p>

                                <h3>Biography</h3>
                                <p>I'm a Graduate MS CS student at Northeastern University, Boston, United States. I worked as a Data Scientist at Tata Consultancy Services, India where I worked with Data Analytics and Insights team to find insights from the data. I'm also a Google Certified TensorFlow Developer. I have published several research papers and chapters on Machine Learning, Deep Learning and Image Processing. I'm also a 3x Kaggle Expert on the Kaggle platform..</p>

                                <h3>Links</h3>
                                <ul>
                                    {links.map((link, index) => (
                                        <li key={index}>
                                            <a href={link.url}>
                                                {link.icon}
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="profile-layout-secondary">
                        <Link to={`/Kanbas/Account/Profile/Edit`} className="btn btn-outline-secondary me-1">
                            <FaPencilAlt className="me-1" />
                            Edit Profile
                        </Link>
                    </div>
                </div >
            </div>
        </div>
    );
}

export default Profile; 