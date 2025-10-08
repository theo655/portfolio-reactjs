import React, { useState } from "react";

export default function Accueil() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Bonjour, je suis John Doe</h1>
        <h2>Développeur Web Junior</h2>
        <button className="hero-btn" onClick={() => setShowModal(true)}>
          En savoir plus
        </button>
      </div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>À propos</h3>
            <p>
              Passionné par le web et le développement frontend, je créé des
              sites modernes et performants.
            </p>
            <button
              onClick={() => setShowModal(false)}
              style={{ marginTop: "1rem" }}
            >
              Fermer
            </button>
          </div>
        </div>
      )}
      <style>{`
        .hero {
          min-height: 100vh;
          background: url('/images/hero-bg.jpg') center/cover no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-content {
          background: rgba(255,255,255,0.88);
          padding: 52px 28px 40px 28px;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 560px;
        }
        .hero h1, .hero h2 {
          text-align: center;
          margin: 0 0 14px 0;
        }
        .hero h1 {
          font-size: 2.75rem;
          font-weight: bold;
        }
        .hero h2 {
          font-size: 1.55rem;
          font-weight: 600;
          margin-bottom: 26px;
        }
        .hero-btn {
          font-size: 1.11rem;
          font-weight: 600;
          padding: 14px 36px;
          color: #fff;
          background: #2b68f2;
          border: none;
          border-radius: 8px;
          transition: background 0.15s;
          box-shadow: 0 2px 12px rgba(40,80,230,0.11);
          cursor: pointer;
        }
        .hero-btn:hover {
          background: #4a89f7;
        }
        .modal-overlay {
          position: fixed;
          left: 0; top: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.30);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 20;
        }
        .modal-content {
          background: #fff;
          padding: 28px 40px;
          border-radius: 14px;
          box-shadow: 0 6px 16px rgba(80,120,180,0.12);
          min-width: 300px;
          max-width: 96vw;
        }
        @media (max-width: 700px) {
          .hero-content { padding: 24px 10px 24px 10px; }
          .hero h1 { font-size: 1.73rem; }
          .hero h2 { font-size: 1.09rem; }
        }
      `}</style>
    </div>
  );
}
