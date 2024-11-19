"use client";

import { useState } from "react";

const AudioRecorder = () => {
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      const recorder = new MediaRecorder(stream);
      setMediaRecorder(recorder);

      const audioChunks: BlobPart[] = [];
      recorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
      };

      recorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: "audio/mp3" });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioURL(audioUrl);
      };

      recorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Erro ao acessar o microfone:", error);
      alert("Não foi possível acessar o microfone. Verifique as permissões do navegador.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  return (
    <div className="text-center">
      <div className="my-4">
        <button
          onClick={isRecording ? stopRecording : startRecording}
          className={`px-4 py-2 font-bold text-white rounded ${
            isRecording ? "bg-red-500" : "bg-green-500"
          }`}
        >
          {isRecording ? "Parar Gravação" : "Iniciar Gravação"}
        </button>
      </div>
      {audioURL && (
        <div>
          <h3 className="text-lg font-bold">Prévia do Áudio:</h3>
          <audio src={audioURL} controls className="mt-2" />
        </div>
      )}
    </div>
  );
};

export default AudioRecorder;
