import React, { useState, useEffect } from "react";

export default function ModalGithub({ show, onClose }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (show) {
      fetch("https://api.github.com/users/github-john-doe")
        .then((res) => res.json())
        .then(setData);
    }
  }, [show]);

  if (!show) return null;
  return (
    <div
      className="modal d-block"
      tabIndex="-1"
      style={{ background: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Profil GitHub</h5>
            <button type="button" className="btn-close" onClick={onClose} />
          </div>
          <div className="modal-body">
            {data ? (
              <>
                <img
                  src={data.avatar_url}
                  alt="avatar"
                  style={{ width: 90, borderRadius: "50%" }}
                />
                <h6>
                  {data.name} (@{data.login})
                </h6>
                <p>{data.bio}</p>
                <div>Repos publics : {data.public_repos}</div>
                <a
                  href={data.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir sur GitHub
                </a>
              </>
            ) : (
              "Chargement..."
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
