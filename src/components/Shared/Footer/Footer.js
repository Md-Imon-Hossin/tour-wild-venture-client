import React from 'react';
import "./Footer.css"
const Footer = () => {
    return (
        <section className='footer py-3'>
            <div className="footer-top">
                <div>
                    <div className="container">
                        <div className="row py-3">
                            <div className="col-xl-4 col-lg-4 col-md-2 ">
                                <div>
                                    <h4>Links</h4>
                                    <ul>
                                        <li>Courses</li>
                                        <li>Tutors</li>
                                        <li>Quiz & Tests</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-2">
                                <div>
                                    <h4>Company</h4>
                                    <ul>
                                        <li>About</li>
                                        <li>Talk To Us</li>
                                        <li>Help</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-8">
                                <div>
                                    <h4>Contact us</h4>
                                    <p>Address: Indian St. Baltimore, MD 21206</p>
                                    <p>Phone+3233-332-334</p>
                                    <p>Emailelearny@example.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom mt-4">
                <p>Copyright &copy;2022 Designed By Md Nazmul Hossain Emon</p>
            </div>
        </section>
    );
};

export default Footer;