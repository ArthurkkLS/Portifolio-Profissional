import { useState } from "react";
import Scene from ".\components\Scene.jsx";
import ZoomView from "./components/ZoomView";

function App() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <>
      {!activeSection ? (
        <Scene onSelect={setActiveSection} />
      ) : (
        <ZoomView section={activeSection} onClose={() => setActiveSection(null)} />
      )}
    </>
  );
}

export default App;