export const formattedDateDuration = () => {
  const today = new Date();
  const sevenDaysAgo = new Date(today);
  sevenDaysAgo.setDate(today.getDate() - 7);

  return { from: sevenDaysAgo.toISOString(), to: today.toISOString() };
};
