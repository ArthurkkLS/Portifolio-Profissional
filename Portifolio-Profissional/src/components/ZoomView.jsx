function ZoomView({ section, onClose }) {
  return (
    <div className="zoom-view">
      <button className="close-btn" onClick={onClose}>✕</button>

      {section === "experience" && (
        <div>
          <h2>Experiência</h2>
          <p>Seu conteúdo aqui</p>
        </div>
      )}

      {section === "projects" && (
        <div>
          <h2>Projetos</h2>
          <p>Seus projetos aqui</p>
        </div>
      )}

      {section === "contact" && (
        <div>
          <h2>Contato</h2>
          <p>Email / LinkedIn / GitHub</p>
        </div>
      )}
    </div>
  );
}

export default ZoomView;