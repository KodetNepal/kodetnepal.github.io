import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSent, setIsSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            to_name: "Kodet Admin",
            message: formData.message,
        };

        emailjs
            .send(
                "service_new", // Replace with your actual service ID
                "template_b0a3rji", // Replace with your actual template ID
                templateParams,
                "aWHCjDK-7vGvGOKcC" // Replace with your actual public key
            )
            .then(
                () => {
                    setIsSent(true);
                    setIsLoading(false);
                    setFormData({ name: "", email: "", message: "" });
                },
                (error) => {
                    console.error("Email sending failed:", error);
                    setIsLoading(false);
                }
            );
    };

    return (
        <>
            <div className="about-container">
                <div className="about-title">
                    <h1 className="text-center">Get in touch!</h1>
                </div>
            </div>
            <div className="contact">
                <form onSubmit={sendEmail}>
                    <h2>Contact Form</h2>
                    <div className="input-box">
                        <label htmlFor="name">Full Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            className="field" 
                            placeholder="Enter your name" 
                            required 
                            value={formData.name}
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="input-box">
                        <label htmlFor="email">Email Address</label>
                        <input 
                            type="email" 
                            name="email" 
                            className="field" 
                            placeholder="Enter your email" 
                            required 
                            value={formData.email}
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="input-box">
                        <label htmlFor="message">Your Message</label>
                        <textarea 
                            name="message" 
                            className="field mess" 
                            placeholder="Enter your message" 
                            required 
                            value={formData.message}
                            onChange={handleChange} 
                        ></textarea>
                    </div>
                    <button type="submit" disabled={isLoading}>
                        {isLoading ? "Sending..." : "Send Message"}
                    </button>
                    {isSent && <p className="success-message">Message sent successfully!</p>}
                </form>
            </div>
        </>
    );
}

export default Contact;
