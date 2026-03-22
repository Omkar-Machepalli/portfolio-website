const Footer = () => {
  return (
    <footer className="footer-custom">
        <div className="container">
            <div className="text-center mb-4">
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

            <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
                <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="social-btn github">
                    GitHub
                </a>

                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="social-btn linkedin">
                    LinkedIn
                </a>

                <a href="mailto:yourmail@example.com" className="social-btn email">
                    Email
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