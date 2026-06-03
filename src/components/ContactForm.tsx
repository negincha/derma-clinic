"use client";
import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
        <h3 className="text-xl font-bold text-emerald-800 mb-2">درخواست شما با موفقیت ثبت شد</h3>
        <p className="text-emerald-700">کارشناسان نوبت‌دهی کلینیک به زودی با شما تماس خواهند گرفت. از صبر شما سپاسگزاریم.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-md">
      <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">درخواست مشاوره و نوبت‌دهی سریع</h3>
      
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">نام و نام خانوادگی بیمار</label>
        <input 
          type="text" 
          required 
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-teal-600 bg-slate-50/50 text-base" 
          placeholder="مثال: علی محمدی"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">شماره تماس (موبایل)</label>
        <input 
          type="tel" 
          required 
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-teal-600 bg-slate-50/50 text-base text-right" 
          placeholder="09123456789"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">نوع عارضه یا زخم</label>
        <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-teal-600 bg-slate-50/50 text-base">
          <option>زخم پای دیابتی</option>
          <option>زخم بستر</option>
          <option>مشکلات ناخن و پودیاتری</option>
          <option>سایر مشاوره های دیابت</option>
        </select>
      </div>

      <button 
        type="submit" 
        className="w-full py-3.5 px-4 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition-colors shadow-sm text-base"
      >
        ثبت درخواست تماس کارشناس
      </button>
    </form>
  );
}