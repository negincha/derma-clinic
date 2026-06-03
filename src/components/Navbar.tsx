"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm w-full" dir="rtl">
      {/* بخش اصلی هدر که در دسکتاپ عرض کامل است */}
      <div className="w-full px-6 h-24 flex items-center justify-between">
        
        {/* سمت راست: لوگو و نام کلینیک */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="کلینیک درما" 
              style={{ width: '70px', height: '70px', objectFit: 'contain' }} 
            />
            <span className="text-lg md:text-xl font-extrabold text-teal-800 tracking-tight">
              کلینیک تخصصی زخم و پودولوژی  <span className="text-teal-600">درما</span>
            </span>
          </Link>

          {/* منوی دسکتاپ: فقط در سایزهای متوسط به بالا نمایش داده می‌شود */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-slate-600 mr-8">
            <Link href="/" className="hover:text-teal-600 transition-colors">صفحه اصلی</Link>
            <Link href="/services" className="hover:text-teal-600 transition-colors">خدمات ما</Link>
            <Link href="/blog" className="hover:text-teal-600 transition-colors">مقالات و وبلاگ</Link>
            <Link href="/about" className="hover:text-teal-600 transition-colors">درباره کلینیک</Link>
            <Link href="/contact" className="hover:text-teal-600 transition-colors">تماس با ما</Link>
          </nav>
        </div>

        {/* سمت چپ: دکمه تماس و منوی همبرگری موبایل */}
        <div className="flex items-center gap-3">
          {/* دکمه تماس دسکتاپ */}
          <a href="tel:09352160999" className="hidden sm:flex items-center gap-2 bg-teal-50 hover:bg-teal-100 text-teal-700 px-4 py-2 rounded-lg text-sm font-bold transition-colors border border-teal-200/50" style={{ direction: "ltr" }}>
            <span className="tracking-wider">09352160999</span>
            <span className="text-slate-400 font-normal">|</span>
            <span>📞 تلفن کلینیک</span>
          </a>
          
          {/* دکمه همبرگری موبایل: فقط در موبایل نمایش داده می‌شود */}
          <button className="md:hidden p-2 text-2xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* منوی موبایل بازشو */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center py-8 gap-6 bg-white border-b border-slate-100 shadow-xl">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-slate-700 font-bold">صفحه اصلی</Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="text-slate-700 font-bold">خدمات ما</Link>
          <Link href="/blog" onClick={() => setIsOpen(false)} className="text-slate-700 font-bold">مقالات و وبلاگ</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-slate-700 font-bold">درباره کلینیک</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-slate-700 font-bold">تماس با ما</Link>
        </div>
      )}
    </header>
  );
}