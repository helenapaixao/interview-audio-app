import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Countdown = () => (
  <CountdownCircleTimer
    isPlaying
    duration={30}
    colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
    colorsTime={[10, 6, 3, 0]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
);

export default Countdown;