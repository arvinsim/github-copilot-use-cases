import { format } from "date-fns";

// TODO: Writing Documentation: Can this code be enhanced to be more readable and robust?
// Prompt #file enhance the code with documentation and error handling
export function formatDate(dateString: string, formatString: string): string {
  return format(new Date(dateString), formatString);
}
