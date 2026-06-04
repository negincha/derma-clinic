async function getData() {
  try {
    // استفاده از http برای جلوگیری از خطای SSL در هاست‌های ایران
    const res = await fetch("http://derma-clinic.ir/?graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `query { posts(first: 50) { nodes { title uri } } }`,
      }),
      cache: 'no-store'
    });

    const json = await res.json();
    return json?.data?.posts?.nodes || [];
  } catch (error) {
    console.error("خطا در اتصال به وردپرس:", error);
    return []; // بازگشت آرایه خالی در صورت شکست در اتصال
  }
}

export default async function AllPostsPage() {
  const posts = await getData();

  return (
    <div className="max-w-4xl mx-auto p-8" dir="rtl">
      <h1 className="text-3xl font-bold mb-8 text-teal-900">آرشیو کامل مقالات</h1>
      {posts.length === 0 ? (
        <p>در حال حاضر مقاله‌ای یافت نشد یا ارتباط با سرور برقرار نیست.</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post: any) => (
            <li key={post.uri} className="border-b pb-4">
              <a 
                href={post.uri} 
                className="text-lg font-medium text-slate-700 hover:text-teal-600 transition-colors"
              >
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}