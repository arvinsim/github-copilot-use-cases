export async function GET() {
  return Response.json({
    name: "John Doe",
    email: "john.doe@gmail.com",
    location: "New York",
  });
}
