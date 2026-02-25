import bookshelf from "../assets/images/bookshelf.svg"
import phone from "../assets/images/phone.svg"
import filecabinet from "../assets/images/filecabinet.svg"
import portrait from "../assets/images/portrait.svg"
import { useRef } from "react";
import { gsap } from "gsap";

function Scene({ onSelect }) {

  const vibrate = () => {
    gsap.fromTo(
      phoneRef.current,
      { x: -2 },
      {
        x: 2,
        duration: 0.05,
        repeat: 5,
        yoyo: true,
        ease: "power1.inOut",
      }
    );
  };

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
        className="object filecabinet"
        onClick={() => onSelect("projetos")}
      />

      <img
        src={portrait} alt="Portrait"
        className="object portrait"
        onClick={() => onSelect("sobre")}
      />

      {/* Vibrate Phone   */}
      <img
        src={phone}
        ref={phoneRef}
        className="object phone"
        onMouseEnter={vibrate}
      />



    </div>

      
  


  );
}

export default Scene;