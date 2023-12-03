export const formatTimestamp = (timestampString:string) => {
  const timestamp = new Date(timestampString);

  const year = timestamp.getFullYear();
  const month = (timestamp.getMonth() + 1).toString().padStart(2, "0"); // Zero-padding for single-digit months
  const day = timestamp.getDate().toString().padStart(2, "0"); // Zero-padding for single-digit days

  return `${day}-${month}-${year}`;
}
