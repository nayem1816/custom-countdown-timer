import DateTimeDisplay from "./DateTimeDisplay";

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="flex gap-3 items-center justify-center">
      <p className="text-[#4B5563]">Ending in</p>
      <div className="flex gap-1">
        <DateTimeDisplay value={days} type={"Days"} />
        <DateTimeDisplay value={hours} type={"Hours"} />
        <DateTimeDisplay value={minutes} type={"Mins"} />
        <DateTimeDisplay value={seconds} type={"Seconds"} />
      </div>
    </div>
  );
};

export default ShowCounter;
