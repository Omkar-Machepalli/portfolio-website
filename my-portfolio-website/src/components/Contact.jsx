import { useState } from "react";
import emailjs from "@emailjs/browser";
import contactItems from "../data/contact-info";

const Contact = () => {

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setStatus("Please fill in all fields.");
      return;
    }

    if (!emailPattern.test(formData.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);
      setStatus("");

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
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setStatus("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus("Failed to send message. Please try again.");
      console.error("EmailJS Error:", error);
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
              <form onSubmit={handleSubmit}>
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
                </div>

                <div className="mt-3">
                  <textarea
                    rows={5}
                    name="message"
                    placeholder="Message"
                    className="form-control"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="theme-btn mt-3" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {status && (
                  <p className="mt-3 mb-0 contact-status">
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;