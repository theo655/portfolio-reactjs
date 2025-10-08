import React from "react";

const projets = [
  {
    title: "Portfolio personnel",
    desc: "Site vitrine en React pour présenter mes compétences.",
    image: "https://via.placeholder.com/350x160.png?text=Portfolio",
    url: "#",
  },
  {
    title: "E-boutique cosmétique",
    desc: "Site e-commerce développé sous Shopify pour une marque beauté.",
    image: "https://via.placeholder.com/350x160.png?text=Shopify",
    url: "#",
  },
  {
    title: "Landing page gaming",
    desc: "Page d’accueil pour produit gaming (FuryXGaming).",
    image: "https://via.placeholder.com/350x160.png?text=Gaming",
    url: "#",
  },
  {
    title: "Site d’agence web",
    desc: "Maquette d’agence web design, UI/UX Responsive.",
    image: "https://via.placeholder.com/350x160.png?text=Agence+Web",
    url: "#",
  },
  {
    title: "Application React",
    desc: "To-do list simple avec gestion du state et filtres.",
    image: "https://via.placeholder.com/350x160.png?text=ReactApp",
    url: "#",
  },
  {
    title: "Site de blog",
    desc: "Plateforme de publication : articles, commentaires et tags.",
    image: "https://via.placeholder.com/350x160.png?text=Blog",
    url: "#",
  },
  // Ajouter d'autres projets ici si besoin
];

export default function Realisations() {
  return (
    <div style={{ padding: "32px" }}>
      <h2 style={{ textAlign: "center" }}>Mes réalisations</h2>
      <div className="proj-cards">
        {projets.map((p, idx) => (
          <div className="proj-card" key={idx}>
            <img src={p.image} alt={p.title} />
            <div className="proj-card-body">
              <h3 className="proj-card-title">{p.title}</h3>
              <p>{p.desc}</p>
              <a
                href={p.url}
                className="proj-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir le projet
              </a>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .proj-cards {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          justify-content: center;
        }
        .proj-card {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(60,60,60,0.08);
          width: 350px;
          display: flex;
          flex-direction: column;
          transition: background 0.22s, box-shadow 0.22s;
        }
        .proj-card:hover {
          background: #efefef;
          box-shadow: 0 8px 26px rgba(80,80,80,0.15);
        }
        .proj-card img {
          border-radius: 12px 12px 0 0;
          width: 100%;
        }
        .proj-card-body {
          padding: 1.2rem 1.1rem 1.7rem 1.1rem;
          flex: 1;
        }
        .proj-card-title {
          font-size: 1.18rem;
          font-weight: 600;
          margin-bottom: 0.45rem;
        }
        .proj-btn {
          margin-top: 16px;
          padding: 0.7rem 1.25rem;
          background: #2675f4;
          color: #fff;
          border: none;
          border-radius: 7px;
          font-weight: 500;
          text-decoration: none;
          box-shadow: 0 1px 5px rgba(40,60,150,0.07);
          transition: background 0.18s;
          display: inline-block;
        }
        .proj-btn:hover {
          background: #5397ff;
        }
        @media (max-width: 900px) {
          .proj-cards {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
}
