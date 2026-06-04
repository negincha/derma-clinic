export default async function TestPage() {
  const res = await fetch("https://derma-clinic.ir/?graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query { generalSettings { title } }`,
    }),
  });
  const data = await res.json();
  
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}