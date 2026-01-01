export function parseDate(input: string ) {
  const [day, month, year] = input.split("/").map(Number);
  const parsed = new Date(year, month - 1, day); // month index 0–11
  return parsed;
}