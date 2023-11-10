const dateDifference = (startDate, endDate) => {
  const timeDifference = endDate - startDate;
  const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
  const hoursDifference = timeDifference / (1000 * 60 * 60);
  const minutesDifference = timeDifference / (1000 * 60);
  const secondsDifference = timeDifference / 1000;

  const totalMs = daysDifference * 24 * 60 * 60 * 1000;

  return {
    days: daysDifference,
    hours: hoursDifference,
    minutes: minutesDifference,
    seconds: secondsDifference,
    totalMs: totalMs,
  };
};

export { dateDifference };
