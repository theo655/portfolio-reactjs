import React from "react";

// Liste des services personnalisables
const services = [
  {
    title: "Développement Web",
    description: "Sites vitrines, e-commerce, refonte et création sur mesure.",
    image: "https://via.placeholder.com/300x150?text=Web",
  },
  {
    title: "Intégration HTML/CSS",
    description:
      "Intégration responsive, animations CSS, respect des maquettes.",
    image: "https://via.placeholder.com/300x150?text=HTML%2FCSS",
  },
  {
    title: "Développement Front-end",
    description: "Applications React, gestion d’états, composants dynamiques.",
    image: "https://via.placeholder.com/300x150?text=React",
  },
  {
    title: "Conseil et Audit",
    description: "Analyse de votre site, recommandations performance et UX.",
    image: "https://via.placeholder.com/300x150?text=Audit",
  },
];

export default function Services() {
  return (
    <div style={{ padding: "32px" }}>
      <h2 style={{ textAlign: "center" }}>Mes services</h2>
      <div className="service-cards">
        {services.map((s, idx) => (
          <div className="service-card" key={idx}>
            <img src={s.image} alt={s.title} />
            <div className="service-card-body">
              <h3 className="service-card-title">{s.title}</h3>
              <p>{s.description}</p>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .service-cards {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          justify-content: center;
        }
        .service-card {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(60,60,60,0.07);
          width: 310px;
          display: flex;
          flex-direction: column;
          transition: background 0.2s, box-shadow 0.2s;
        }
        .service-card:hover {
          background: #efefef;
          box-shadow: 0 8px 28px rgba(80,80,80,0.16);
        }
        .service-card img {
          border-radius: 12px 12px 0 0;
          width: 100%;
        }
        .service-card-body {
          padding: 1.2rem 1.1rem 1.6rem 1.1rem;
          flex: 1;
        }
        .service-card-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.6rem;
        }
        @media (max-width: 900px) {
          .service-cards {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
}
