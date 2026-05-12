from fastapi import FastAPI, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
import io
from azure_speech import speech_to_text, text_to_speech, translate

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/stt")
async def stt(file: UploadFile):
    audio = await file.read()
    text = speech_to_text(audio)
    return {"text": text}

@app.post("/translate")
async def translate_api(data: dict):
    text = data["text"]
    lang = data["lang"]
    output = translate(text, lang)
    return {"output": output}

@app.post("/tts")
async def tts(data: dict):
    text = data["text"]
    audio = text_to_speech(text)
    return StreamingResponse(io.BytesIO(audio), media_type="audio/wav")

@app.get("/")
def home():
    return {"message": "FastAPI backend running!"}
