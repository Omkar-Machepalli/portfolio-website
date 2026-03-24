import { SOCIAL_LINKS } from "../data/constants";

const Footer = () => {

    const current_year = new Date().getFullYear();

    return (
        <footer className="footer-custom">
            <div className="container">
                <div className="row align-items-center gy-3">

                    <div className="col-md-6 text-center text-md-start">
                        <h5 className="fw-bold mb-1">
                            Omkar <span className="highlight-text">Machepalli</span>
                        </h5>

                        <p className="mb-0 text-muted small">
                            Front-End Developer • Angular • React • TypeScript
                        </p>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex justify-content-center justify-content-md-end gap-3">

                        <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="social-icon">
                            <i className="fab fa-github"></i>
                        </a>

                        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                            <i className="fab fa-linkedin-in"></i>
                        </a>

                        <a href={SOCIAL_LINKS.email} className="social-icon email">
                            <i className="fas fa-envelope"></i>
                        </a>

                        </div>
                    </div>
                </div>
                <hr className="footer-divider" />
                <div className="text-center">
                    <small>© {current_year} Omkar Machepalli. All rights reserved.</small>
                </div>
            </div>
        </footer>
    );
};

export default Footer;