
export const getFormattedDate = (date: Date) => {
  return `${date.getDate()} - ${date.getMonth() + 1} - ${date.getFullYear()}`;
};

export const getDateMinusDays = (date: Date, days: number) => {
  const dateCopy = new Date(date);
  dateCopy.setDate(date.getDate() - days);

  return dateCopy;
};
