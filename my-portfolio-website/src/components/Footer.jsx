import { SOCIAL_LINKS } from "../data/constants";

const Footer = () => {
  return (
    <footer className="footer-custom">
        <div className="container">
            <div className="text-center">
                <h5 className="fw-bold mb-1">
                    Omkar <span className="highlight-text">Machepalli</span>
                </h5>

                <p className="mb-0 text-muted small">
                    Front-End Developer
                </p>

                <p className="mb-0 small text-muted">
                    Angular • React • TypeScript
                </p>

                <p className="mb-0 small text-muted">
                    JavaScript • HTML • CSS • Bootstrap
                </p>
            </div>

            <div className="d-flex flex-wrap gap-3 justify-content-center my-4">
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub Profile">
                    <i className="fab fa-github"></i>
                </a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn Profile">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a href={SOCIAL_LINKS.email} className="social-icon" aria-label="Send Email">
                    <i className="fas fa-envelope"></i>
                </a>
            </div>

            <div className="text-center border-top pt-3">
                <small>© 2026 Omkar Machepalli. All rights reserved.</small>
            </div>
        </div>
    </footer>
  );
};

export default Footer;