import React from "react";
import STT from "./components/STT";
import Translate from "./components/Translate";
import TTS from "./components/TTS";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <div className="app-header">
          <h1>🌐 Azure Translator Hub</h1>
          <p>Powered by Azure AI | Speech Recognition • Translation • Text-to-Speech</p>
        </div>
        
        <div className="services-grid">
          <STT />
          <Translate />
          <TTS />
        </div>
      </div>
    </div>
  );
}

export default App;
