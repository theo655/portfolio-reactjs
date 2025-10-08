import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container">
        <div className="row">
          {/* Colonne 1 : Infos développeur + réseaux */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h5 className="mb-2">John Doe</h5>
            <div>
              123 rue du Code
              <br />
              59000 Lille
              <br />
              +33 6 12 34 56 78
            </div>
            <div className="mt-2 d-flex gap-3">
              <a
                href="https://github.com/johndoe"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="social-icon"
                aria-label="Github John Doe"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://twitter.com/johndoe"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="social-icon"
                aria-label="Twitter John Doe"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/johndoe/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="social-icon"
                aria-label="LinkedIn John Doe"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
          {/* Colonne 2 : Navigation */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h5 className="mb-2">Pages</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="footer-link">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/about" className="footer-link">
                  À propos
                </a>
              </li>
              <li>
                <a href="/portfolio" className="footer-link">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/contact" className="footer-link">
                  Contact
                </a>
              </li>
              <li>
                <a href="/mentions" className="footer-link">
                  Mentions légales
                </a>
              </li>
            </ul>
          </div>
          {/* Colonne 3 : Réalisations récentes */}
          <div className="col-12 col-md-4">
            <h5 className="mb-2">Dernières réalisations</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/portfolio" className="footer-link">
                  Projet Site Vitrine
                </a>
              </li>
              <li>
                <a href="/portfolio" className="footer-link">
                  E-commerce React
                </a>
              </li>
              <li>
                <a href="/portfolio" className="footer-link">
                  Dashboard Admin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <style>{`
        .social-icon i {
          font-size: 1.5rem;
          transition: color 0.2s;
          color: #ced4da;
        }
        .social-icon:hover i {
          color: #f8f9fa;
        }
        .footer-link {
          color: #ced4da;
          text-decoration: none;
          transition: color 0.17s;
        }
        .footer-link:hover {
          color: #fff;
          text-decoration: underline;
        }
        @media (max-width: 767.98px) {
          .footer-link, .social-icon i {
            font-size: 1.15rem;
          }
        }
      `}</style>
    </footer>
  );
}
