import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-md navbar-light bg-white">
        <div className="container-fluid">
          {/* Logo à gauche */}
          <a className="navbar-brand" href="/">
            <img
              src="/images/banner.jpg"
              alt="Logo"
              style={{ height: 40, marginRight: 10 }}
            />
            JOHN DOE
          </a>
          {/* Hamburger bouton */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Navigation */}
          <div className={`collapse navbar-collapse${open ? " show" : ""}`}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link text-uppercase"
                  activeClassName="active-link"
                  end
                >
                  Accueil
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/realisations"
                  className="nav-link text-uppercase"
                  activeClassName="active-link"
                >
                  Réalisations
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/services"
                  className="nav-link text-uppercase"
                  activeClassName="active-link"
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className="nav-link text-uppercase"
                  activeClassName="active-link"
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/mentions"
                  className="nav-link text-uppercase"
                  activeClassName="active-link"
                >
                  Mentions
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <style>{`
        .nav-link {
          font-weight: 600;
          letter-spacing: 0.08em;
        }
        .active-link {
          color: #2675f4 !important;
          border-bottom: 2px solid #2675f4;
        }
      `}</style>
    </header>
  );
}
