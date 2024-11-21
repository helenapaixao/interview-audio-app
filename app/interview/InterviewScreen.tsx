"use client";

import Question from "./components/Question";
import AudioRecorder from "./components/AudioRecorder";

export default function InterviewScreen() {
  
  return (
    <div className="flex flex-col items-center">
      <Question />
      <AudioRecorder />
    </div>
  );
}
