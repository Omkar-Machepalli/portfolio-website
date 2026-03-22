const Navbar = () => {
  const links = ["about", "skills", "projects", "experience", "resume", "contact"];

  return (
    <header className="position-sticky top-0 z-50">
      <nav className="navbar navbar-expand-lg navbar-custom py-3">
        <div className="container">

          <a href="#home" className="navbar-brand fw-bold">
            Omkar <span className="highlight-text">Machepalli</span>
          </a>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggle-icon">☰</span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav">
                {links.map((link) => (
                  <li className="nav-item" key={link}>
                    <a href={`#${link}`} className="nav-link nav-link-custom text-capitalize">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
          </div>

          {/* Button */}
          <div className="d-none d-lg-block">
            <a href="#contact" className="theme-btn">
              Hire Me
            </a>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;