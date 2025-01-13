export function formatDate(date: Date): string {
  let hours = date.getHours();
  const period = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12; // Convert 0-23 to 1-12
  const formattedHours = String(hours).padStart(2, '0'); // Ensure 01-12

  const day = String(date.getDate()).padStart(2, '0');
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${formattedHours} ${period}, ${day} ${month} ${year}`;
}
