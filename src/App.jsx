import CountdownTimer from "./countdown/CountdownTimer";
import { dateDifference } from "./countdown/utils/dateDifference";

function App() {
  const startDate = new Date("2023-11-20T20:00:00.000+00:00");
  const endDate = new Date("2023-11-27T18:10:00.000+00:00");

  const dateAndTime = dateDifference(startDate, endDate);

  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterThreeDays = NOW_IN_MS + dateAndTime.totalMs;
  return (
    <div className="my-5 mx-5">
      <div className="container mx-auto">
        <div className="">
          <CountdownTimer
            title="Flash Sale"
            targetDate={dateTimeAfterThreeDays}
            startDate={startDate}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
