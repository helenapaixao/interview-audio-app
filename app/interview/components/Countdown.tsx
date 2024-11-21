"use client";

import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface CountdownProps {
  duration: number; 
  colors?: string[]; 
  colorsTime?: number[]; 
  onComplete: () => void; 
}

const Countdown = ({
  duration,
  colors = ["#004777", "#F7B801", "#A30000", "#A30000"], 
  colorsTime = [10, 6, 3, 0], 
  onComplete,
}: CountdownProps) => {
  return (
    <div>
      <CountdownCircleTimer
        isPlaying
        duration={duration}
        colors={colors}
        colorsTime={colorsTime}
        onComplete={() => {
          toast.success("Tempo terminou!", { position: "top-right" }); 
          onComplete(); 
          return { shouldRepeat: false }; 
        }}
      >
        {({ remainingTime }) => (
          <div className="text-lg font-bold">{remainingTime} </div>
        )}
      </CountdownCircleTimer>
      <ToastContainer /> 
    </div>
  );
};

export default Countdown;
