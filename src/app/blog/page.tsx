import React from "react";

export default function BlogPage() {
  // لیست مقالات فرضی مجله سلامت کلینیک زخم
  const articles = [
    {
      title: "اصول مراقبت از پای دیابتی در منزل",
      excerpt: "چگونه با چند کار ساده روزانه از ایجاد زخم‌های خطرناک دیابتی جلوگیری کنیم؟ راهنمای جامع برای بیماران و خانواده‌ها.",
      date: "۵ خرداد ۱۴۰۵",
      category: "آموزش دیابت",
    },
    {
      title: "انواع پانسمان‌های نوین و تأثیر آن‌ها در بهبود سریع زخم",
      excerpt: "آشنایی با تکنولوژی پانسمان‌های هیدروکلوئید، آلژینات و نقره که فرآیند ترمیم بافت را تا چند برابر سریع‌تر می‌کنند.",
      date: "۲ خرداد ۱۴۰۵",
      category: "فناوری‌های درمان",
    },
    {
      title: "زخم بستر چیست و چطور باید از آن پیشگیری کرد؟",
      excerpt: "راهکارهای کلیدی برای جابجایی بیماران کم‌تحرک در منزل و استفاده از تشک‌های مواج جهت جلوگیری از آسیب‌های پوستی.",
      date: "۲۸ اردیبهشت ۱۴۰۵",
      category: "زخم بستر",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* هدر صفحه وبلاگ */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="bg-teal-50 text-teal-700 px-4 py-1.5 rounded-full text-sm font-medium border border-teal-100">
            مجله علمی و آموزشی
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 mt-6 mb-4">
            آخرین مقالات و اخبار سلامت زخم
          </h1>
          <p className="text-slate-600 leading-relaxed">
            افزایش آگاهی شما و خانواده‌تان، اولین و مهم‌ترین قدم در پیشگیری و درمان به‌موقع بیماری‌هاست.
          </p>
        </div>

        {/* لیست مقالات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-100 border border-slate-100 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-200"
            >
              <div>
                <span className="inline-block text-xs font-bold text-teal-600 bg-teal-50 px-3 py-1 rounded-md mb-4">
                  {article.category}
                </span>
                <h3 className="text-lg font-bold text-slate-800 mb-3 leading-snug">
                  {article.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {article.excerpt}
                </p>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-slate-50 text-xs text-slate-400">
                <span>{article.date}</span>
                <button className="text-teal-600 font-bold hover:text-teal-700 transition-colors">
                  مطالعه مقاله ←
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}