"use client";

import { useEffect, useState } from "react";

interface Recording {
  question: string;
  audioUrl: string;
}

const History = () => {
  const [recordings, setRecordings] = useState<Recording[]>([]);

  useEffect(() => {
    const storedRecordings = JSON.parse(localStorage.getItem("recordings") || "[]");
    setRecordings(storedRecordings);
  }, []);

  return (
    <div>
      <header className="w-full bg-gray-800 text-white py-4 px-6 flex items-center justify-between shadow-lg fixed top-0 z-10">
        <h1 className="text-lg font-bold">Histórico de Gravações</h1>
      </header>

      <main className="mt-20 p-4">
        <h2 className="text-xl font-bold text-center">Histórico</h2>
        {recordings.length === 0 ? (
          <p className="text-center text-gray-600 mt-4">Nenhuma gravação encontrada.</p>
        ) : (
          <ul className="mt-6 space-y-4">
            {recordings.map((recording, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 p-4 rounded shadow-md"
              >
                <span className="font-semibold">{recording.question}</span>
                {recording.audioUrl ? (
                  <audio src={recording.audioUrl} controls className="ml-4" />
                ) : (
                  <span className="text-red-500 ml-4">Áudio não disponível</span>
                )}
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
};

export default History;
