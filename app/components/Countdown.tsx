import { useEffect, useState } from "react";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  function calculateTimeLeft() {
    const targetDate = new Date("April 2, 2024 21:00:00").getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <div>
      <p className="text-xl opacity-70 font-mono">
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
        {timeLeft.seconds}s
      </p>
    </div>
  );
}

export default Countdown;
