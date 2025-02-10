import React, { useState } from 'react';
import './LetsConnect.css'; // Import your CSS file for styling
import Particle from '../Particle';
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { SiHackerrank } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBlogger } from "react-icons/fa";
import emailjs from 'emailjs-com'; // Make sure to install EmailJS
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LetsConnect = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message
        };

        emailjs.send('service_3sdihqx', 'template_tecxjdl', templateParams, 'QuWJ-bCniABKYHMEa')
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                toast.success('Your message has been sent successfully!', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            })
            .catch((error) => {
                console.error('Failed to send email:', error);
                toast.error('Failed to send message. Please try again later.', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    };

    return (
        <div fluid className="resume-section" id='contact'>
            <Particle />
            <div className="contact-container">
                <div className="contact-info">
                    <h2 className='cobtact_h1'><b>Let's Connect</b></h2>
                    <p className='contact_p1'>
                        I love coding and enjoy taking on new challenges. 
                        I also have a passion for design and always aim for clean, clear, and effective work. 
                        I'm currently working on a few exciting projects and constantly looking to learn and improve. 
                        Open to fresh ideas, collaborations, or just a good conversation about tech and design! 
                        Feel free to reach out if you'd like to connect or work together.
                    </p>
                    <a href="mailto:kalanasilva0101@gmail.com" className='mails'><b>kalanasilva0101@gmail.com</b></a>
                    <ul className="social-icons">
                        <li className="socials-icons">
                            <a
                                href="https://github.com/Kalana0001"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colours home-social-iconss"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="socials-icons">
                            <a
                                href="https://www.hackerrank.com/profile/kalanasilva0101"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colours home-social-iconss"
                            >
                                <SiHackerrank />
                            </a>
                        </li>
                        <li className="socials-icons">
                            <a
                                href="#"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colours home-social-iconss"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li className="socials-icons">
                            <a
                                href="https://code100journey.blogspot.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colours home-social-iconss"
                            >
                                <FaBlogger />
                            </a>
                        </li>
                    </ul>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Send</button>
                </form>
            </div>

            {/* Toast Container */}
            <ToastContainer />
        </div>
    );
};

export default LetsConnect;
