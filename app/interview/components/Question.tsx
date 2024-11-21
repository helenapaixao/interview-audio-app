"use client";

import { useState } from "react";
import Header from "./Header";
import Countdown from "./Countdown";
import AudioRecorder from "./AudioRecorder";

const questions = [
  "Fale sobre um projeto que você liderou.",
  "Como você lida com situações de pressão?",
  "Qual foi sua maior conquista profissional?",
];

const Question = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Índice da pergunta atual

  const handleNextQuestion = (audioUrl: string) => {
    const currentQuestion = questions[currentQuestionIndex];

    // Recupera gravações existentes do localStorage
    const existingRecordings = JSON.parse(localStorage.getItem("recordings") || "[]");

    // Adiciona a nova gravação
    const updatedRecordings = [
      ...existingRecordings,
      { question: currentQuestion, audioUrl },
    ];

    // Salva no localStorage
    localStorage.setItem("recordings", JSON.stringify(updatedRecordings));

    // Avança para a próxima pergunta
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      alert("Você completou todas as perguntas!");
    }
  };

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Corpo principal */}
      <div className="mt-20 flex flex-col items-center">
        <h2 className="text-xl font-bold">Pergunta:</h2>
        <p className="text-lg mt-4">{questions[currentQuestionIndex]}</p>

        {/* Timer */}
        <div className="mt-6">
          <Countdown
            duration={30}
            onComplete={() => handleNextQuestion("")} // Substituir "" pelo áudio real
          />
        </div>

        {/* Gravador de Áudio */}
        <div className="mt-6">
          <AudioRecorder onStop={(audioUrl: string) => handleNextQuestion(audioUrl)} />
        </div>
      </div>
    </div>
  );
};

export default Question;
