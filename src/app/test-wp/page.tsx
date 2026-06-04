export default async function TestPage() {
  let data = null;
  try {
    const res = await fetch("https://derma-clinic.ir/?graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `query { generalSettings { title } }`,
      }),
      cache: 'no-store', // این خیلی مهم است
    });
    data = await res.json();
  } catch (error) {
    data = { error: "اتصال برقرار نشد" };
  }
  
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}