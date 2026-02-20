import whisper
import json
import os

model = whisper.load_model("small")

for file in os.listdir("."):
    if file.lower().endswith(".mp3"):
        print(f"⏳ Przetwarzam: {file}")

        result = model.transcribe(file, word_timestamps=True)

        words = []

        for segment in result["segments"]:
            if "words" in segment:
                for w in segment["words"]:
                    words.append({
                        "word": w["word"],
                        "start": w["start"],
                        "end": w["end"]
                    })

        json_name = file.replace(".mp3", ".json")

        with open(json_name, "w", encoding="utf-8") as f:
            json.dump(words, f, ensure_ascii=False, indent=2)

        print(f"✅ Zapisano: {json_name}")