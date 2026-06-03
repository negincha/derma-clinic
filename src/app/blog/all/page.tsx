export default async function AllPostsPage() {
  let posts = [];
  
  try {
    const res = await fetch("https://derma-clinic.ir/?graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `query { posts(first: 50) { nodes { title uri } } }`,
      }),
      cache: 'no-store' // این خط باعث می‌شود در هر لحظه درخواست تازه ارسال شود
    });

    const json = await res.json();
    if (json.data && json.data.posts) {
      posts = json.data.posts.nodes;
    }
  } catch (error) {
    console.error("خطا در اتصال به وردپرس:", error);
    // اگر وردپرس وصل نبود، بیلد کرش نمی‌کند و فقط لیست خالی نمایش می‌دهد
  }

  return (
    <div className="max-w-4xl mx-auto p-8" dir="rtl">
      <h1 className="text-3xl font-bold mb-8 text-teal-900">آرشیو کامل مقالات</h1>
      {posts.length === 0 ? (
        <p>در حال حاضر مقاله‌ای یافت نشد یا ارتباط با سرور برقرار نیست.</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post: any) => (
            <li key={post.uri} className="border-b pb-4">
              <a href={post.uri} className="text-lg font-medium text-slate-700 hover:text-teal-600 transition-colors">
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}