import { useState } from "react";
import emailjs from "@emailjs/browser";
import contactItems from "../data/contact-info";
import { toast } from "react-toastify";

const Contact = () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);

      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: "Omkar Machepalli",
        },
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        }
      );

      toast.success("Message sent successfully.");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setErrors({});
    } catch (error) {
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8">
            <p className="section-title">Contact</p>

            <h2 className="section-heading">
              Have an opportunity or project in mind?
            </h2>

            <p className="section-text">
              Let’s connect and build something great together.
            </p>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-5">
            <div className="contact-box">
              <h3 className="project-title mb-4">Contact Information</h3>

              <div className="contact-list">
                {contactItems.map((item) => (
                  <div key={item.label} className="contact-item-row">
                    <div className="contact-icon-box">
                      <i className={item.icon}></i>
                    </div>

                    <div className="contact-content">
                      <p className="contact-label mb-0">{item.label}</p>

                      {item.link ? (
                        <a
                          href={item.link}
                          target={item.label !== "Email" ? "_blank" : undefined}
                          rel={item.label !== "Email" ? "noreferrer" : undefined}
                          className="contact-value"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="contact-value mb-0">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="contact-box">
              <h3 className="project-title mb-4">Send a Message</h3>

              <form onSubmit={handleSubmit} noValidate>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <small className="error-text-message">
                        <i className="fa-solid fa-circle-xmark me-1"></i>
                        {errors.name}
                      </small>
                    )}
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <small className="error-text-message">
                        <i className="fa-solid fa-circle-xmark me-1"></i>
                        {errors.email}
                      </small>
                    )}
                  </div>
                </div>

                <div className="mt-3">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="form-control"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && (
                    <small className="error-text-message">
                      <i className="fa-solid fa-circle-xmark me-1"></i>
                      {errors.subject}
                    </small>
                  )}
                </div>

                <div className="mt-3">
                  <textarea
                    rows={4}
                    name="message"
                    placeholder="Message"
                    className="form-control"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && (
                    <small className="error-text-message">
                      <i className="fa-solid fa-circle-xmark me-1"></i>
                      {errors.message}
                    </small>
                  )}
                </div>

                <button type="submit" className="theme-btn mt-3" disabled={loading}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;