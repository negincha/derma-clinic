// تعیین می‌کنیم که این صفحه باید در زمان بیلد تولید شود (ISR)
export const revalidate = 3600; // هر یک ساعت یک‌بار دیتای جدید را از وردپرس بگیر

async function getData() {
  try {
    const res = await fetch("http://derma-clinic.ir/?graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `query { posts(first: 50) { nodes { title uri } } }`,
      }),
      // نکته: cache: 'no-store' را حذف کردیم تا از قابلیت کشینگِ Next.js استفاده کند
    });

    const json = await res.json();
    return json?.data?.posts?.nodes || [];
  } catch (error) {
    console.error("خطا در اتصال:", error);
    return [];
  }
}

export default async function AllPostsPage() {
  const posts = await getData();

  return (
    <div className="max-w-4xl mx-auto p-8" dir="rtl">
      <h1 className="text-3xl font-bold mb-8 text-teal-900">آرشیو کامل مقالات</h1>
      {posts.length === 0 ? (
        <p>در حال حاضر مقاله‌ای یافت نشد.</p>
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