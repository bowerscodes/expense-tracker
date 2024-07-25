
export const getFormattedDate = (date: Date) => {
  return date.toISOString().slice(0, 10);
};

export const getDateMinusDays = (date: Date, days: number) => {
  const dateCopy = new Date(date);
  dateCopy.setDate(date.getDate() - days);

  return dateCopy;
};
