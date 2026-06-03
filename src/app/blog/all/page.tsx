// src/app/blog/all/page.tsx
async function getAllPosts() {
  const res = await fetch("https://derma-clinic.ir/?graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query { posts(first: 50) { nodes { title uri } } }`,
    }),
  });
  const json = await res.json();
  return json.data.posts.nodes;
}

export default async function AllPostsPage() {
  const posts = await getAllPosts();
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">آرشیو کامل مقالات</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.uri} className="mb-4">
            <a href={post.uri} className="text-lg hover:text-red-600">{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}