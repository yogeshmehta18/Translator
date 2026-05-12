import React, { useState } from "react";
import axios from "axios";

function Translate() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [lang, setLang] = useState("hi");
  const [loading, setLoading] = useState(false);

  const doTranslate = async () => {
    if (!input.trim()) return;
    
    setLoading(true);
    try {
      const res = await axios.post("http://127.0.0.1:8000/translate", {
        text: input,
        lang: lang,
      });
      setOutput(res.data.output);
    } catch (error) {
      console.error("Error:", error);
      setOutput("Error translating text");
    } finally {
      setLoading(false);
    }
  };

  const languages = {
    hi: "🇮🇳 Hindi",
    en: "🇬🇧 English",
    fr: "🇫🇷 French",
    es: "🇪🇸 Spanish",
    ja: "🇯🇵 Japanese"
  };

  return (
    <div className="service-card">
      <div className="service-header">
        <span className="service-icon">🔄</span>
        <h2>Multi-Language Translation</h2>
      </div>
      <textarea 
        placeholder="Enter text to translate..."
        value={input}
        onChange={(e) => setInput(e.target.value)} 
      />
      <select value={lang} onChange={(e) => setLang(e.target.value)}>
        {Object.entries(languages).map(([code, name]) => (
          <option key={code} value={code}>{name}</option>
        ))}
      </select>
      <button onClick={doTranslate} disabled={loading || !input.trim()}>
        {loading ? "Translating..." : "Translate Now"}
      </button>
      {output && (
        <div className="output">
          <b>Translation Result:</b>
          <p>{output}</p>
        </div>
      )}
    </div>
  );
}

export default Translate;
