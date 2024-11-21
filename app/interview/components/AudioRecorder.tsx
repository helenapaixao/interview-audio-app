"use client";

import { useReactMediaRecorder } from "react-media-recorder";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface AudioRecorderProps {
  onStop: (audioUrl: string) => void;
}

const AudioRecorder = ({ onStop }: AudioRecorderProps) => {
  const { startRecording, stopRecording } = useReactMediaRecorder({
    audio: true,
    onStop: (blobUrl) => {
      if (blobUrl) {
        onStop(blobUrl); 
        toast.success("Gravação finalizada com sucesso!");
      }
    },
  });

  const handleStartRecording = () => {
    startRecording();
    toast.info("Gravação iniciada!");
  };

  const handleStopRecording = () => {
    try {
      stopRecording();
    } catch (error) {
      console.error("Erro ao parar a gravação:", error);
    }
  };

  return (
    <div className="text-center space-y-4">
      <button
        onClick={handleStartRecording}
        className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-md transition-all duration-200 ease-in-out transform hover:scale-105"
      >
        🎙️ Iniciar Gravação
      </button>
      <button
        onClick={handleStopRecording}
        className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-md transition-all duration-200 ease-in-out transform hover:scale-105"
      >
        🛑 Parar Gravação
      </button>
      <ToastContainer />
    </div>
  );
};

export default AudioRecorder;
