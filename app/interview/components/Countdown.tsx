"use client";

import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface CountdownProps {
  duration: number; 
  colors?: string[]; 
  colorsTime?: { 0: number } & { 1: number } & number[]; 
  onComplete?: () => void; 
}

const Countdown = ({
  duration,
  colors = ["#004777", "#F7B801", "#A30000", "#A30000"], 
  colorsTime = [10, 6, 3, 0], 
  onComplete,
}: CountdownProps) => {
  const handleComplete = () => {
    toast.success("Tempo terminou!", { position: "top-right" }); 
    if (onComplete) onComplete(); 
    return { shouldRepeat: false }; 
  };

  return (
    <div>
      <CountdownCircleTimer
        isPlaying
        duration={duration}
        colors={colors.map((color, index) => ({ [index]: color })) as any}
        colorsTime={colorsTime}
        onComplete={handleComplete}
      >
        {({ remainingTime }) => (
          <div className="text-lg font-bold">{remainingTime} segundos restantes</div>
        )}
      </CountdownCircleTimer>
      <ToastContainer /> 
    </div>
  );
};

export default Countdown;
