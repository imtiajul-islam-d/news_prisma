const dateString = (str) => {
  const originalDate = new Date(str);
  // Convert to a formatted string
  const formattedDate = originalDate.toLocaleDateString("en-US", {
    //   year: "numeric",
    month: "short",
    day: "numeric",
  });
  return formattedDate;
};
export default dateString;
