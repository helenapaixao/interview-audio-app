"use client";

import { useEffect, useState } from "react";

interface Recording {
  question: string;
  audioUrl: string | null; 
  timestamp: string; 
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
        <h2 className="text-xl font-bold text-center mb-6">Histórico</h2>
        {recordings.length === 0 ? (
          <p className="text-center text-gray-600 mt-4">Nenhuma gravação encontrada.</p>
        ) : (
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Pergunta</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Áudio</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Data e Horário</th>
              </tr>
            </thead>
            <tbody>
              {recordings.map((recording, index) => (
                <tr key={index} className="bg-white hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{recording.question}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {recording.audioUrl ? (
                      <audio src={recording.audioUrl} controls className="w-full" />
                    ) : (
                      <span className="text-red-500">Sem áudio gravado</span>
                    )}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{recording.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>
    </div>
  );
};

export default History;
