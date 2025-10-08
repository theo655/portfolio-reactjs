import React, { useEffect } from "react";
/* Vérifie que Bootstrap JS (bootstrap.bundle.min.js) est bien chargé en plus du CSS dans index.html ! */

export default function Mentions() {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex";
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <main className="container py-5">
      <h1 className="mb-4">Mentions légales</h1>
      <div className="accordion" id="mentionsAccordion">
        {/* Editeur du site */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="heading-editeur">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse-editeur"
              aria-expanded="true"
              aria-controls="collapse-editeur"
            >
              L’éditeur du site
            </button>
          </h2>
          <div
            id="collapse-editeur"
            className="accordion-collapse collapse show"
            aria-labelledby="heading-editeur"
            data-bs-parent="#mentionsAccordion"
          >
            <div className="accordion-body">
              John Doe
              <br />
              123 rue du Code, 59000 Lille
              <br />
              contact@johndoe.fr
            </div>
          </div>
        </div>
        {/* Hébergeur du site */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="heading-hebergeur">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse-hebergeur"
              aria-expanded="false"
              aria-controls="collapse-hebergeur"
            >
              L’hébergeur du site
            </button>
          </h2>
          <div
            id="collapse-hebergeur"
            className="accordion-collapse collapse"
            aria-labelledby="heading-hebergeur"
            data-bs-parent="#mentionsAccordion"
          >
            <div className="accordion-body">
              Vercel Inc.
              <br />
              340 S Lemon Ave #4133, Walnut, CA 91789, USA
              <br />
              <a
                href="https://vercel.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                vercel.com
              </a>
            </div>
          </div>
        </div>
        {/* Crédits */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="heading-credits">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse-credits"
              aria-expanded="false"
              aria-controls="collapse-credits"
            >
              Crédits
            </button>
          </h2>
          <div
            id="collapse-credits"
            className="accordion-collapse collapse"
            aria-labelledby="heading-credits"
            data-bs-parent="#mentionsAccordion"
          >
            <div className="accordion-body">
              Images :{" "}
              <a
                href="https://pixabay.com/fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pixabay
              </a>
              <br />
              Favicon :{" "}
              <a
                href="https://www.flaticon.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Flaticon
              </a>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .accordion-item { border-radius: 8px; border: 1px solid #e2e2e2; margin-bottom: 20px;}
        .accordion-button { font-weight: 600; font-size: 1.09rem; }
        .accordion-body { font-size: 1.01rem; }
      `}</style>
    </main>
  );
}
