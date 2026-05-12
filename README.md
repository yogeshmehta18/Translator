# 🌐 Azure Translator

A modern full-stack web application that uses Azure Cognitive Services for speech recognition, translation, and text-to-speech.

## ✨ Features

- 🎤 **Speech to Text (STT)** - Upload audio files and convert them to text
- 🔄 **Multi-Language Translation** - Translate text between 5 languages
- 🔊 **Text to Speech (TTS)** - Convert text to natural-sounding speech

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Axios for API calls
- Modern CSS with animations

**Backend:**
- FastAPI (Python)
- Azure Cognitive Services Speech SDK
- Azure Translator API
- Uvicorn server

## 📋 Prerequisites

- Python 3.8+
- Node.js 14+ (Node 20 recommended)
- An Azure Cognitive Services subscription with keys for Speech and Translator

## ⚙️ Installation

### Backend Setup (Python)

1. From the repo root, change into the backend directory:
```powershell
cd backend
```

2. Create and activate a virtual environment (Windows example):
```powershell
python -m venv .venv
.venv\Scripts\Activate.ps1
```

3. Install the Python dependencies:
```powershell
pip install -r requirements.txt
```

4. Create a `.env` file (do not commit this file). Example keys:
```text
AZURE_SPEECH_KEY=your_speech_key
AZURE_SPEECH_ENDPOINT=https://your_region.api.cognitive.microsoft.com/
AZURE_TRANSLATOR_KEY=your_translator_key
AZURE_TRANSLATOR_ENDPOINT=https://api.cognitive.microsofttranslator.com/
AZURE_REGION=your_region
```

5. Start the backend server:
```powershell
python -m uvicorn main:app --reload
```

### Frontend Setup (React)

1. From the repo root, change into the frontend directory:
```powershell
cd frontend
```

2. Install node dependencies:
```powershell
npm install
```

3. Start the dev server:
```powershell
npm start
```

## 🚀 Usage

1. **Backend**: Runs on `http://localhost:8000`
   - API Documentation: `http://localhost:8000/docs`

2. **Frontend**: Runs on `http://localhost:3000`

## 🌍 Supported Languages

- 🇮🇳 Hindi
- 🇬🇧 English
- 🇫🇷 French
- 🇪🇸 Spanish
- 🇯🇵 Japanese

## 📁 Project Structure

```
backend/
├── main.py
├── azure_speech.py
├── requirements.txt
frontend/
├── package.json
└── src/
  ├── App.js
  ├── index.js
  └── components/
    ├── STT.js
    ├── Translate.js
    └── TTS.js
```

## 🔑 API Endpoints

- `GET /` - Health check
- `POST /stt` - Speech to text conversion
- `POST /translate` - Text translation
- `POST /tts` - Text to speech conversion

## 🎨 UI Features

- Modern gradient design
- Smooth animations
- Responsive layout
- Loading states
- Visual feedback

## 📝 License

MIT License

## 👤 Author

YOGESH MEHTA

---

**Note:** Make sure to keep your Azure API keys secure and never commit them to version control.
