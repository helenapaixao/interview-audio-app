"use client";

import Question from "./components/Question";
import Countdown from "./components/Countdown";
import AudioRecorder from "./components/AudioRecorder";

export default function InterviewScreen() {
  const handleComplete = () => {
    console.log("O tempo acabou!");
  };
  return (
    <div className="flex flex-col items-center">
      <Question />
      <Countdown 
       duration={30}
       colors={["#34D399", "#FBBF24", "#EF4444"]} 
       colorsTime={[10, 5, 0]} 
       onComplete={handleComplete} 
      />
      <AudioRecorder />
    </div>
  );
}
