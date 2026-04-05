import React from 'react';
import './FooterSection.css';
 import logo from "../images/1.logo-jpg.svg"; 
import { 
    FaFacebookF, 
    FaTwitter, 
    FaInstagram, 
    FaGooglePlusG, 
    FaMapMarkerAlt, 
    FaPhoneAlt, 
    FaEnvelope, 
    FaPaperPlane,
    FaChevronUp
} from 'react-icons/fa';

const FooterSection = () => {
    return (
        <footer className="footer-section">
            {/* Top Colored Border Bar */}
            <div className="top-multi-border">
                <div className="border-segment blue-light"></div>
                <div className="border-segment red-main"></div>
                <div className="border-segment purple-mid"></div>
                <div className="border-segment pink-soft"></div>
            </div>

            <div className="footer-container">
                <div className="footer-row">
                    
                    {/* Col 1: Logo & About */}
                    <div className="footer-col about-col">
                      
                    <div className="footer-logo">
                    <img src={logo} alt="logo" />
                    </div>
                        <p className="description">
                            Lorem Ipsum has been the industry's standard dummy text 
                            ever since the 1500s, make specimen book.
                        </p>
                        <div className="social-box">
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaGooglePlusG /></a>
                        </div>
                    </div>

                    {/* Col 2: Quick Links */}
                    <div className="footer-col links-col">
                        <h3 className="widget-title">QUICK LINKS:</h3>
                        <ul className="list-items">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Blog Post</a></li>
                            <li><a href="#">Donate</a></li>
                            <li><a href="#">Members</a></li>
                            <li><a href="#">Events</a></li>
                        </ul>
                    </div>

                    {/* Col 3: Contact Us */}
                    <div className="footer-col contact-col">
                        <h3 className="widget-title">CONTACT US</h3>
                        <div className="contact-list">
                            <div className="c-item">
                                <FaMapMarkerAlt className="c-icon" />
                                <span>68D, Belsion Town 2365 <br/> Fna city, LH 3656, USA</span>
                            </div>
                            <div className="c-item">
                                <FaPhoneAlt className="c-icon" />
                                <span>+ 8 (123) 123 456 789 <br/> + 8 (123) 123 456 789</span>
                            </div>
                            <div className="c-item">
                                <FaEnvelope className="c-icon" />
                                <span>electian@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Col 4: Newsletter */}
                    <div className="footer-col news-col">
                        <h3 className="widget-title">NEWSLETTER:</h3>
                        <p className="description">
                            Lorem Ipsum has been the industry standard text ever since the printer took.
                        </p>
                        <div className="subscribe-form">
                            <input type="email" placeholder="Enter your email" />
                            <button className="send-btn">
                                <FaPaperPlane />
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="footer-bottom-bar">
                <div className="footer-container">
                    <div className="bottom-content">
                        <p>Copyright © 2023 Electian by <span>wpOceans</span>. All Rights Reserved.</p>
                       
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;

