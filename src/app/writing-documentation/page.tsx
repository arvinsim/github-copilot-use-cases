import { format } from "date-fns";

// TODO: Writing Documentation: Can this code be enhanced to be more readable and robust?
export function formatDate(dateString: string, formatString: string): string {
  return format(new Date(dateString), formatString);
}
