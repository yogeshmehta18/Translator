import azure.cognitiveservices.speech as speechsdk
import requests
import os
from dotenv import load_dotenv

load_dotenv()

SPEECH_KEY = os.getenv("AZURE_SPEECH_KEY")
SPEECH_ENDPOINT = os.getenv("AZURE_SPEECH_ENDPOINT")
REGION = os.getenv("AZURE_REGION")
TRANSLATOR_KEY = os.getenv("AZURE_TRANSLATOR_KEY")
TRANSLATOR_ENDPOINT = os.getenv("AZURE_TRANSLATOR_ENDPOINT")

def speech_to_text(audio_data):
    speech_config = speechsdk.SpeechConfig(subscription=SPEECH_KEY, region=REGION)

    stream = speechsdk.audio.PushAudioInputStream()
    stream.write(audio_data)
    stream.close()

    audio = speechsdk.AudioConfig(stream=stream)
    recognizer = speechsdk.SpeechRecognizer(speech_config=speech_config, audio_config=audio)

    result = recognizer.recognize_once_async().get()
    return result.text

def text_to_speech(text):
    speech_config = speechsdk.SpeechConfig(subscription=SPEECH_KEY, region=REGION)
    synthesizer = speechsdk.SpeechSynthesizer(speech_config=speech_config)

    result = synthesizer.speak_text_async(text).get()
    return result.audio_data

def translate(text, lang):
    headers = {
        "Ocp-Apim-Subscription-Key": TRANSLATOR_KEY,
        "Ocp-Apim-Subscription-Region": REGION,
        "Content-Type": "application/json",
    }

    params = {"api-version": "3.0", "to": lang}
    body = [{"text": text}]

    response = requests.post(
        TRANSLATOR_ENDPOINT + "/translate",
        params=params,
        headers=headers,
        json=body
    )

    return response.json()[0]["translations"][0]["text"]
