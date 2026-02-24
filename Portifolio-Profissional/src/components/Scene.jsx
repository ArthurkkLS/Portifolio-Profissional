import bookshelf from "../assets/images/bookshelf.svg"
import phone from "../assets/images/phone.svg"
import filecabinet from "../assets/images/filecabinet.svg"
import portrait from "../assets/images/portrait.svg"

function Scene({ onSelect }) {
  return (
    <div className="scene">
        <img
        src={bookshelf} alt="Bookshelf"
        className="object bookshelf"
        onClick={() => onSelect("experiencias")}
      />

      <img
        src={phone} alt="Phone"
        className="object phone"
        onClick={() => onSelect("contato")}
      />

      <img
        src={filecabinet} alt="File Cabinet"
        className="object file cabinet"
        onClick={() => onSelect("projetos")}
      />

      <img
        src={portrait} alt="Portrait"
        className="object portrait"
        onClick={() => onSelect("sobre")}
      />
    </div>


  );
}

export default Scene;