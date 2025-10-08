import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    tel: "",
    sujet: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    // Ici tu pourrais ajouter une logique d'envoi
    setSubmitted(true);
  }

  return (
    <div style={{ padding: "32px" }}>
      <h2 style={{ textAlign: "center" }}>Contactez John Doe</h2>
      <div className="contact-page-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nom"
            placeholder="Nom"
            value={form.nom}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Courriel"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="tel"
            placeholder="Numéro de téléphone"
            value={form.tel}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="sujet"
            placeholder="Sujet"
            value={form.sujet}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Votre message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
          />
          <button className="contact-btn" type="submit">
            Envoyer
          </button>
          {submitted && <div className="sent-msg">Message envoyé !</div>}
        </form>
        <div className="john-coords">
          <h3>Coordonnées</h3>
          <p>Adresse : 11 rue de Paris, 75001 Paris</p>
          <p>Téléphone : 06 01 02 03 04</p>
          <p>Mail : johndoe@email.com</p>
          <div>
            <iframe
              title="Google Maps John Doe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.8586004991307!2d2.333333315675251!3d48.86471697928717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f77f8fdf7%3A0x6c4ebc0fc80b1c44!2s11%20Rue%20de%20Paris%2C%2075001%20Paris!5e0!3m2!1sfr!2sfr!4v1666442800000!5m2!1sfr!2sfr"
              width="100%"
              height="220"
              style={{ border: 0, borderRadius: "8px", marginTop: "12px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <style>{`
        .contact-page-content {
          display: flex;
          gap: 2.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          min-width: 320px;
          max-width: 360px;
        }
        .contact-form input,
        .contact-form textarea {
          padding: 0.7rem;
          font-size: 1rem;
          border-radius: 6px;
          border: 1px solid #bbb;
        }
        .contact-form input:focus,
        .contact-form textarea:focus {
          border-color: #3b8fe9;
          outline: none;
        }
        .contact-btn {
          background: #0061c2;
          color: #fff;
          border: none;
          border-radius: 6px;
          padding: 0.8rem 0;
          font-size: 1rem;
          cursor: pointer;
          margin-top: 10px;
          transition: background 0.18s;
        }
        .contact-btn:hover {
          background: #42a1ff;
        }
        .john-coords {
          min-width: 320px;
          max-width: 370px;
          background: #fafafa;
          padding: 1.2rem 1.1rem 2rem 1.1rem;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(20,40,60,0.07);
          margin-bottom: 1.5rem;
        }
        .john-coords h3 {
          margin-bottom: 1.1rem;
        }
        .sent-msg {
          color: #008a21;
          margin-top: 6px;
        }
        @media (max-width: 900px) {
          .contact-page-content { flex-direction: column; align-items: center;}
        }
      `}</style>
    </div>
  );
}
