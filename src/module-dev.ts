export async function placeholder(delay: number) {
  await new Promise((r) => setTimeout(r, delay));
  return "yo yo yo ";
}
