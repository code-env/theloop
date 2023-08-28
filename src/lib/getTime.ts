export const currentTime = () => {
  const currentTime = new Date();

  const hours = currentTime.getHours().toString().padStart(2, "0"); // Get hours and ensure 2-digit format
  const minutes = currentTime.getMinutes().toString().padStart(2, "0"); // Get minutes and ensure 2-digit format

  const formattedTime = `${hours}:${minutes}`;
  return formattedTime;
};
