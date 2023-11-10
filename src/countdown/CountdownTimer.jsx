import React from "react";
import { useCountdown } from "./hook/useCountdown";
import ShowCounter from "./ShowCounter";

const CountdownTimer = ({ title, targetDate, startDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate, startDate);

  if (days + hours + minutes + seconds <= 0) {
    return <h2>Countdown Completed</h2>;
  } else {
    return (
      <div className="flex gap-10 items-center">
        <h2 className="text-2xl font-semibold text-[#4B5563]">{title}</h2>

        <ShowCounter
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      </div>
    );
  }
};

export default CountdownTimer;
