"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800" dir="rtl">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* بخش اول: درباره برند درما */}
          <div>
            <div className="flex items-center gap-2 text-white mb-4">
              <span className="text-xl">🩺</span>
              <span className="text-lg font-bold tracking-tight">
                کلینیک تخصصی <span className="text-teal-400">درما</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              مرکز فوق تخصصی درمان انواع زخم‌های مزمن، خدمات پیشرفته پودولوژی و مدیریت بیماری‌های داخلی و غدد. ما در دپارتمان درما با بهره‌گیری از تکنولوژی‌های روز دنیا همراه شما هستیم.
            </p>
          </div>

          {/* بخش دوم: دسترسی سریع */}
          <div className="flex flex-col gap-2.5 text-xs md:mr-8">
            <span className="text-white font-bold mb-1 text-sm">دسترسی سریع</span>
            <Link href="/" className="hover:text-teal-400 transition-colors">صفحه اصلی</Link>
            <Link href="/services" className="hover:text-teal-400 transition-colors">خدمات درمانی</Link>
            <Link href="/blog" className="hover:text-teal-400 transition-colors">مقالات علمی</Link>
            <Link href="/contact" className="hover:text-teal-400 transition-colors">ارتباط با کلینیک</Link>
          </div>

          {/* بخش سوم: اطلاعات تماس و آدرس دقیق */}
          <div className="text-xs flex flex-col gap-3">
            <span className="text-white font-bold mb-1 text-sm">اطلاعات ارتباطی</span>
            <div>📞 تلفن پذیرش: <span className="text-slate-200 font-semibold" style={{ direction: "ltr" }}>09352160999</span></div>
            
            {/* بخش ساعت کاری تفکیک شده */}
            <div className="flex flex-col gap-1">
              <span>⏰ ساعات کاری:</span>
              <span className="text-slate-300 pr-2">• روزهای زوج: ۱۰:۰۰ الی ۱۴:۰۰</span>
              <span className="text-slate-300 pr-2">• یکشنبه و سه شنبه: ۱۶:۰۰ الی ۱۹:۰۰</span>
            </div>

            {/* بخش آدرس دقیق */}
            <div className="leading-relaxed">
              📍 آدرس: <span className="text-slate-300">کرج، خیابان شهید بهشتی، چهارراه طالقانی به سمت میدان شهدا، روبروی برج قائم، ساختمان پزشکان آراد، طبقه ۵، واحد ۵۰۱</span>
            </div>
          </div>

        </div>

        {/* کپی‌رایت پایین فوتر */}
        <div className="border-t border-slate-800 pt-6 text-center text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} تمامی حقوق مادی و معنوی این سایت متعلق به کلینیک فوق تخصصی درما می‌باشد.</p>
        </div>
      </div>
    </footer>
  );
}