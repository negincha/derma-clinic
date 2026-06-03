"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // منطق ثبت شماره تلفن بیمار در آینده
    setSubmitted(true);
    setPhone("");
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16" dir="rtl">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* هدر صفحه */}
        <div className="text-center mb-12">
          <span className="text-teal-600 font-bold text-sm bg-teal-50 px-4 py-1.5 rounded-full">
            پاسخگویی در سریع ترین زمان ممکن
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold text-slate-800 mt-3 mb-4">
            ارتباط با کلینیک تخصصی زخم و پودولوژی درما
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm leading-relaxed">
            تیم درمانی ما در تمام مراحل بهبود در کنار شماست. برای رزرو نوبت، مشاوره اولیه یا هماهنگی مراجعه، می‌توانید از راه‌های زیر با ما در تماس باشید.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* ستون راست: اطلاعات تماس و مسیریابی (۷ ستون) */}
          <div className="md:col-span-7 bg-white rounded-2xl border border-slate-100 p-6 md:p-8 shadow-sm flex flex-col gap-6">
            
            <div>
              <h2 className="text-xl font-bold text-slate-850 mb-6 pb-2 border-b border-slate-100 flex items-center gap-2">
                <span>📍</span> اطلاعات مرکز و دسترسی
              </h2>
              
              <div className="flex flex-col gap-5">
                {/* آدرس */}
                <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl">
                  <span className="text-xl mt-0.5">🏢</span>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm mb-1">آدرس دقیق کلینیک</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      کرج، خیابان شهید بهشتی، چهارراه طالقانی به سمت میدان شهدا، ساختمان پزشکان آراد، طبقه5، واحد 501
                    </p>
                  </div>
                </div>

                {/* تلفن‌ها */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a href="tel:09352160999" className="flex items-center gap-3 bg-teal-50/50 hover:bg-teal-50 p-4 rounded-xl border border-teal-100/50 transition-colors">
                    <span className="text-xl">📱</span>
                    <div>
                      <h4 className="font-bold text-teal-800 text-sm mb-0.5">شماره همراه کلینیک</h4>
                      <p className="text-slate-700 font-mono text-sm">09352160999</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl">
                    <span className="text-xl">⏰</span>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm mb-0.5">ساعات پذیرش</h4>
                      <p className="text-slate-600 text-xs" >روزهای زوج: 10 - 14 / یکشنبه و سه شنبه 16 - 19   </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* بخش لوکیشن و مسیریابی آنلاین */}
            <div className="mt-2">
              <h4 className="font-bold text-slate-800 text-sm mb-3 flex items-center gap-1">
                <span>🚗</span> مسیریابی آسان برای مراجعین:
              </h4>
              <p className="text-slate-500 text-xs leading-relaxed mb-4">
                برای راحتی در پیدا کردن مسیر و پارک خودرو، می‌توانید از اپلیکیشن‌های مسیریاب زیر استفاده کنید:
              </p>
              
              <div className="grid grid-cols-2 gap-3 text-center text-xs font-bold">
                <a 
                  href="https://balad.ir" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-emerald-50 hover:bg-emerald-100 text-emerald-800 py-3 rounded-xl border border-emerald-200/60 transition-colors"
                >
                  🗺️ مسیریابی با «بلد»
                </a>
                <a 
                  href="https://neshan.org" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-blue-50 hover:bg-blue-100 text-blue-800 py-3 rounded-xl border border-blue-200/60 transition-colors"
                >
                  📍 مسیریابی با «نشان»
                </a>
              </div>
            </div>

          </div>

          {/* ستون چپ: باکس فوق ساده‌ی "با من تماس بگیرید" (۵ ستون) */}
          <div className="md:col-span-5 bg-gradient-to-br from-teal-800 to-teal-950 text-white rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
              <span>📞</span> درخواست تماس کارشناس
            </h3>
            <p className="text-teal-100 text-xs leading-relaxed mb-6">
              نیازی به پر کردن فرم‌های طولانی نیست. فقط شماره موبایل خود را وارد کنید؛ ما در کمترین زمان ممکن با شما تماس می‌گیریم.
            </p>

            {submitted ? (
              <div className="bg-teal-700/50 border border-teal-500 p-4 rounded-xl text-center text-sm font-bold animate-fade-in">
                ✅ شماره شما ثبت شد. به زودی درمانگران کلینیک با شما تماس خواهند گرفت.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-slate-800">
                <div>
                  <label className="block text-white text-xs font-bold mb-2">شماره موبایل شما</label>
                  <input 
                    type="tel" 
                    required
                    pattern="[0-9]{11}"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="مثال: ۰۹۳۵۲۱۶۰۹۹۹" 
                    className="w-full p-4 rounded-xl text-base bg-white border border-transparent focus:outline-none focus:ring-2 focus:ring-teal-400 font-mono text-center"
                    dir="ltr"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-white hover:bg-teal-50 text-teal-900 font-extrabold py-3.5 rounded-xl text-sm transition-colors shadow-md mt-2"
                >
                  ☎️ با من تماس بگیرید
                </button>
              </form>
            )}

            <div className="mt-6 border-t border-teal-700/50 pt-4 text-center">
              <p className="text-[11px] text-teal-200">
                🔒 شماره تماس شما نزد کلینیک امانت است و کاملاً محرمانه باقی می‌ماند.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}