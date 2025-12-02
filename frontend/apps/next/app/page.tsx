export default async function Home() {
  const res = await fetch("http://localhost:3030/api/health", {
    cache: "no-store",
  });
  const data = await res.json();
  return <div>{JSON.stringify(data)}</div>;
}
