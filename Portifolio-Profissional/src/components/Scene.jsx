function Scene({ onSelect }) {
  return (
    <div className="scene">
        <img
        src="/images/bookshelf.svg"
        className="object bookshelf"
        onClick={() => onSelect("experiencias")}
      />

      <img
        src="/images/phone.svg"
        className="object phone"
        onClick={() => onSelect("contato")}
      />

      <img
        src="/images/filecabinet.svg"
        className="object board"
        onClick={() => onSelect("projetos")}
      />

      <img
        src="/images/portrait.svg"
        className="object portrait"
        onClick={() => onSelect("sobre")}
      />
    </div>


  );
}

export default Scene;