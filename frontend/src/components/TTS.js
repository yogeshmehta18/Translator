import React, { useState } from "react";
import axios from "axios";

function TTS() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const speak = async () => {
    if (!text.trim()) return;
    
    setLoading(true);
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/tts",
        { text: text },
        { responseType: "blob" }
      );

      const audioURL = URL.createObjectURL(res.data);
      const audio = new Audio(audioURL);
      audio.play();
    } catch (error) {
      console.error("Error:", error);
      alert("Error generating speech");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="service-card">
      <div className="service-header">
        <span className="service-icon">🔊</span>
        <h2>Text to Speech</h2>
      </div>
      <textarea 
        placeholder="Enter text to speak..."
        value={text}
        onChange={(e) => setText(e.target.value)} 
      />
      <button onClick={speak} disabled={loading || !text.trim()}>
        {loading ? "🎵 Generating..." : "🔊 Speak Now"}
      </button>
    </div>
  );
}

export default TTS;
