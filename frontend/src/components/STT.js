import React, { useState } from "react";
import axios from "axios";

function STT() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadAudio = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://127.0.0.1:8000/stt", formData);
      setText(res.data.text);
    } catch (error) {
      console.error("Error:", error);
      setText("Error processing audio file");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="service-card">
      <div className="service-header">
        <span className="service-icon">🎤</span>
        <h2>Speech to Text</h2>
      </div>
      <input 
        type="file" 
        accept="audio/*" 
        onChange={uploadAudio}
        disabled={loading}
      />
      {loading && <p style={{color: '#667eea', marginTop: '1rem'}}>Processing audio...</p>}
      {text && (
        <div className="output">
          <b>Transcribed Text:</b>
          <p>{text}</p>
        </div>
      )}
    </div>
  );
}

export default STT;
