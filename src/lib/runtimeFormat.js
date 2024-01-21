export function formatDuration(durationInMinutes) {
  const hours = Math.floor(durationInMinutes / 60);
  const minutes = durationInMinutes % 60;

  const formattedDuration = `${hours}h:${minutes}m`;

  return formattedDuration;
}
