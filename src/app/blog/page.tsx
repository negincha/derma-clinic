'use client';
import React, { useState, useEffect } from "react";

export default function BlogPage() {
  const [articles, setArticles] = useState([]);

  // گرفتنِ مقالات از وردپرس
  useEffect(() => {
    fetch("https://derma-clinic.ir/?graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `query { posts(first: 6) { nodes { title excerpt uri } } }`,
      }),
    })
      .then((res) => res.json())
      .then((res) => setArticles(res.data.posts.nodes));
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen py-16" dir="rtl">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h1 className="text-3xl font-extrabold text-slate-800">آخرین مقالات و اخبار سلامت زخم</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article: any, index) => (
            <article key={index} className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100">
              <h3 className="text-lg font-bold text-slate-800 mb-3">{article.title}</h3>
              <p className="text-slate-500 text-sm mb-6" dangerouslySetInnerHTML={{ __html: article.excerpt }} />
              <a href={article.uri} className="text-teal-600 font-bold">مطالعه مقاله ←</a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}