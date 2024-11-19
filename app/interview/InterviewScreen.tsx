"use client";

import Question from "./components/Question";
import Countdown from "./components/Countdown";
import AudioRecorder from "./components/AudioRecorder";

export default function InterviewScreen() {
  return (
    <div className="flex flex-col items-center">
      <Question />
      <Countdown  />
      <AudioRecorder />
    </div>
  );
}
