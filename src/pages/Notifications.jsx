import React from 'react'
import img1 from "../img/Favorites-img/Frame 1732.png";



const notifications = [
    {
        category: "Unread",
        message: "Software Developer role available at Tech Solutions, Chennai.",
        time: "5 min ago",
    },
    {
        category: "Application Update",
        message: "Your application for 'Marketing Executive' at GrowMore Marketing is under review.",
        time: "2 hours ago",
    },
    {
        category: "Interview Invitation",
        message: "XYZ Pvt Ltd has invited you for an interview on March 15. Check details!",
        time: "1 day ago",
    },
    {
        category: "Read Notification",
        message: "Your saved job 'Civil Engineer - Salem' will expire in 2 days. Apply soon!",
        time: "3 days ago",
    },
];

const Notifications = () => {
    return (
        <div>




            <div>





                <section className="container-fluid Favorites-hero text-white d-flex align-items-center justify-content-center  text-center">
                    <div className="container">
                        <h1 className="display-4 fw-bold d-inline-block" >Notifications</h1>

                    </div>
                </section>

                <div className="col-lg-12 col-sm-6 col-md-6 div position-relative">
                    <button data-bs-toggle="modal">
                        <img
                            className="w-full opt-btn position-absolute"
                            style={{
                                top: '10px',
                                right: window.innerWidth >= 992 ? '180px' : '20px',
                            }}
                            src={img1}
                            alt=""
                        />
                    </button>
                </div>


                <div className="container mt-4">
                    {notifications.map((notification, index) => (
                        <div key={index} className="mb-3">
                            <h5 className="fw-bold">{notification.category}</h5>
                            <div className="card shadow-sm p-3">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <p className="mb-1 fw-semibold">{notification.message}</p>
                                        <small className="text-muted">⏱ {notification.time}</small>
                                    </div>
                                    <button className="btn btn-primary fs-6 fs-md-5 fs-lg-4 fs-sm-6 fs-xs-1">Apply Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>





               








            </div>















        </div>
    )
}

export default Notifications