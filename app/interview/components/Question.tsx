"use client";

import { useState } from "react";
import Header from "./Header";
import Countdown from "./Countdown";
import AudioRecorder from "./AudioRecorder";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const questions = [
  "Fale sobre um projeto que você liderou.",
  "Como você lida com situações de pressão?",
  "Qual foi sua maior conquista profissional?",
];

const Question = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isTimerActive, setIsTimerActive] = useState(true);

  const handleSaveRecording = (url: string) => {
    setAudioUrl(url);
    toast.success("Gravação salva!");
  };

  const handleNextQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    const currentTimestamp = new Date().toLocaleString();

    const existingRecordings = JSON.parse(localStorage.getItem("recordings") || "[]");

    const updatedRecordings = [
      ...existingRecordings,
      {
        question: currentQuestion,
        audioUrl: audioUrl || "Sem áudio gravado",
        timestamp: currentTimestamp,
      },
    ];

    localStorage.setItem("recordings", JSON.stringify(updatedRecordings));

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setAudioUrl(null);
      setIsTimerActive(true); 
      toast.info("Próxima pergunta!");
    } else {
      toast.success("Você completou todas as perguntas!", { position: "top-right" });
    }
  };

  return (
    <div>
      <Header />
      <div className="mt-20 flex flex-col items-center">
        <h2 className="text-xl font-bold">Pergunta:</h2>
        <p className="text-lg mt-4">{questions[currentQuestionIndex]}</p>

        {/* Timer */}
        <div className="mt-6">
          <Countdown
            key={currentQuestionIndex} 
            duration={30}
            onComplete={() => {
              setIsTimerActive(false); 
              toast.warning("Tempo esgotado! Salvando pergunta.");
              handleNextQuestion();
            }}
          />
        </div>

        <div className="mt-6">
          <AudioRecorder
            onStop={handleSaveRecording}
            canRecord={isTimerActive} 
            isReRecording={!!audioUrl} 
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Question;
