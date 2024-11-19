"use client";

import { useState, useEffect } from "react";

const questions = [
  "Fale sobre um projeto que você liderou.",
  "Como você lida com situações de pressão?",
  "Qual foi sua maior conquista profissional?",
];

const Question = () => {
  const [currentQuestion, setCurrentQuestion] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[randomIndex]);
  }, []);

  return (
    <div className="text-center">
      <h2 className="text-xl font-bold">Pergunta:</h2>
      <p className="text-lg mt-2">{currentQuestion}</p>
    </div>
  );
};

export default Question;
