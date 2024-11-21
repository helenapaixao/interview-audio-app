"use client";

import { useReactMediaRecorder } from "react-media-recorder";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface AudioRecorderProps {
  onStop: (audioUrl: string) => void;
  canRecord: boolean; 
  isReRecording: boolean; 
}

const AudioRecorder = ({ onStop, canRecord, isReRecording }: AudioRecorderProps) => {
  const { startRecording, stopRecording } = useReactMediaRecorder({
    audio: true,
    onStop: (blobUrl) => {
      if (blobUrl) {
        onStop(blobUrl);
        toast.success(isReRecording ? "Regravação salva!" : "Gravação salva!");
      }
    },
  });

  const handleStartRecording = () => {
    if (!canRecord) {
      toast.error("O tempo acabou! Você não pode regravar.");
      return;
    }
    startRecording();
    toast.info(isReRecording ? "Regravação iniciada!" : "Gravação iniciada!");
  };

  const handleStopRecording = () => {
    stopRecording();
  };

  return (
    <div className="text-center space-y-4">
      <button
        onClick={handleStartRecording}
        className={`px-6 py-3 ${
          canRecord ? "bg-green-500 hover:bg-green-600" : "bg-gray-400 cursor-not-allowed"
        } text-white rounded-full shadow-md transition-all duration-200 ease-in-out transform hover:scale-105`}
        disabled={!canRecord}
      >
        {isReRecording ? "Regravar" : "Gravar"}
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
