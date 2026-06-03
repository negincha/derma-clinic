"use client";

import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function HomePage() {
  const [emblaRef] = useEmblaCarousel({ loop: true, direction: "rtl" }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ]);

  // اگر دیگر نیازی به نمایش عنوان در سایت ندارید، می‌توانید این useState و useEffect را هم حذف کنید
  const [siteTitle, setSiteTitle] = useState("در حال بارگذاری...");

  useEffect(() => {
    fetch("/api/wp-title")
      .then((res) => res.json())
      .then((data) => {
        if (data.title) setSiteTitle(data.title);
      })
      .catch(() => setSiteTitle("درما کلینیک"));
  }, []);

  const slides = [
    {
      badge: "تخصصی‌ترین مرکز زخم و پودولوژی استان البرز",
      title: "کلینیک زخم و پودولوژی درما؛ مرکز جامع درمان پای دیابتی در کرج",
      desc: "اگر با زخم‌های مزمن، پای دیابتی یا مشکلات ناخن مواجه هستید، تیم فوق تخصصی ما با بکارگیری جدیدترین متدهای پودولوژی و پانسمان‌های نوین در کنار شماست.",
      image: "/slide1.png"
    },
    {
      badge: "تکنولوژی‌های پیشرفته و بین‌المللی",
      title: "کلینیک زخم و پودولوژی درما؛ درمان قطعی با متدهای نوین و پیشرفته",
      desc: "استفاده از سیستم فشار منفی (وکیوم تراپی)، پلاسما تراپی، فوتوتراپی و ارتونکسی برای سرعت بخشیدن به ترمیم بافت‌های آسیب‌دیده و مدیریت تخصصی پا زیر نظر برجسته‌ترین اساتید.",
      image: "/slide2.png"
    }
  ];

  const features = [
    { title: "کادر فوق تخصصی", desc: "بهره‌گیری از پزشکان و درمانگران مجرب و دارای مدرک بین‌المللی مدیریت زخم و پودولوژی.", icon: "👨‍⚕️" },
    { title: "تجهیزات روز دنیا", desc: "استفاده از دستگاه‌های پیشرفته پلاسما، وکیوم‌تراپی و لایت‌تراپی.", icon: "⚡" },
    { title: "جلوگیری از قطع عضو", desc: "تمرکز اصلی مرکز بر حفظ بافت و درمان قطعی پیشرفته‌ترین زخم‌های دیابتی و انواع مشکلات ناخن.", icon: "🛡️" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen relative">
      {/* نوار سبز رنگ از اینجا حذف شد */}

      <div className="fixed bottom-6 left-6 z-50">
        <a href="tel:09129411923" className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-full shadow-2xl font-bold transition-all transform hover:scale-105 animate-pulse">
          <span className="text-xl">🚨</span>
          <span>تماس اضطراری با متخصص زخم </span>
        </a>
      </div>

      <div className="w-full h-[65vh] md:h-[75vh] overflow-hidden relative shadow-md" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div className="flex-[0_0_100%] min-w-0 h-full relative flex items-center justify-center text-center bg-cover bg-center" key={index} style={{ backgroundImage: `url(${slide.image})` }}>
              <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[1px]" />
              <div className="relative z-10 max-w-4xl px-6 flex flex-col items-center text-white">
                <span className="inline-block bg-teal-500/20 text-teal-300 text-xs md:text-sm font-medium px-4 py-1.5 rounded-full mb-4 border border-teal-500/30">{slide.badge}</span>
                <h1 className="text-2xl md:text-4xl font-extrabold leading-tight max-w-3xl mb-4 text-teal-50">{slide.title}</h1>
                <p className="text-sm md:text-base text-slate-200 leading-relaxed max-w-2xl mb-6">{slide.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl my-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800">چرا کلینیک تخصصی زخم و پودولوژی درما ؟</h2>
          <p className="text-slate-500 text-sm mt-3">ویژگی‌های متمایز مرکز ما در استان البرز</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center flex flex-col items-center hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4 p-3 bg-teal-50 rounded-full text-teal-600">{feat.icon}</div>
              <h4 className="text-lg font-bold text-slate-800 mb-2">{feat.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-teal-800 text-white py-12">
        <div className="container mx-auto px-4 max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><div className="text-2xl font-extrabold text-teal-300 mb-2">+1,500</div><div className="text-sm">درمان موفق</div></div>
            <div><div className="text-2xl font-extrabold text-teal-300 mb-2">٪98</div><div className="text-sm">رضایت بیماران</div></div>
            <div><div className="text-2xl font-extrabold text-teal-300 mb-2">+7 سال</div><div className="text-sm">سابقه در کرج</div></div>
            <div><div className="text-2xl font-extrabold text-teal-300 mb-2">24 ساعته</div><div className="text-sm">پشتیبانی آنلاین</div></div>
        </div>
      </div>
    </div>
  );
}