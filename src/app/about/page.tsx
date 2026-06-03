"use client";

import React from "react";
import Image from "next/image"; // <--- کامپوننت تصویر نکس‌جی‌اس را اضافه کردیم

export default function AboutPage() {
  const team = [
    {
      name: "دکتر لیلا فرنیا",
      role: "پزشک متخصص داخلی و مشاور ارشد مدیریت زخم",
      bio: "متخصص داخلی در بررسی سیستمیک زخم‌های مزمن، کنترل عفونت‌های مقاوم و ارائه پروتکل‌های دارویی و درمانی پیشرفته برای بیماران دیابتی و عروقی و بیماران دارای مشکلات ناخن و پا.",
      image: "/dr-farnia.png"
    },
    {
      name: "استاد محمد ذوالفقاری",
      role: "درمانگر ارشد زخم و متخصص پودولوژی",
      bio: "کارشناس و مدرس بین‌المللی مدیریت زخم و اصلاح ساختار پا (پودولوژی). متخصص در اجرای پانسمان‌های نوین، وکیوم‌تراپی، پلاسماتراپی٫ لیزر درمانی وانواع زخم‌های حاد و مزمن دیابتی٫ زخم بستر٫ زخم های جراحی٫ زخم های ناشی از جراحی های زیبایی.",
      image: "/mr-zolfaghari.png"
    },
    {
      name: "استاد پروین کردآبادی",
      role: "پودولوژیست مجموعه و متخصص مراقبت‌های پا",
      bio: "متخصص در درمان غیرجراحی ناخن‌های فرو رفته در گوشت (ارتونکسی)، رفع تخصصی پینه و ترک‌های عمیق کف پا، مدیریت بهداشتی پا و احیای سلامت ساختار ناخن.",
      image: "/ms-kordabadi.png"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16" dir="rtl">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* بخش معرفی کلینیک */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-teal-600 font-bold text-sm tracking-wider uppercase bg-teal-50 px-4 py-1.5 rounded-full">
              درباره مرکز ما
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 mt-4 mb-6">
              کلینیک فوق تخصصی درمان زخم و پودولوژی درما
            </h1>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed text-justify md:text-center">
              این مرکز به عنوان یکی از پیشرفته‌ترین مراجع مدیریت زخم و پودولوژی در استان البرز، با هدف جلوگیری از قطع عضو و بهبود کیفیت زندگی بیماران دیابتی تاسیس شده است. ما با تلفیق دانش روز پزشکی، پانسمان‌های مدرن بین‌المللی و تکنولوژی‌های پیشرفته مانند پلاسما تراپی و فشار منفی (وکیوم)، در کوتاه‌ترین زمان ممکن فرآیند ترمیم بافت‌های آسیب‌دیده را محقق می‌سازیم.
            </p>
          </div>
        </div>

        {/* بخش معرفی کادر درمانی */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800">کادر درمانی و متخصصین مجموعه</h2>
          <p className="text-slate-500 text-sm mt-3">زیر نظر مجرب‌ترین اساتید، پزشکان و پودولوژیست‌های مدیریت زخم در کرج</p>
        </div>

        {/* چیدمان ۳ ستونه برای اعضای تیم */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 hover:shadow-md transition-all transform hover:-translate-y-1 flex flex-col items-center text-center justify-between">
              
              <div className="flex flex-col items-center w-full">
                {/* دایره نمایش عکس واقعی با افکت لبه ظریف */}
                <div className="w-32 h-32 rounded-full mb-5 border-4 border-teal-500/10 shadow-md relative overflow-hidden bg-slate-100">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover"
                    priority={idx === 0}
                  />
                </div>

                <h3 className="text-lg font-bold text-slate-800 mb-1.5">{member.name}</h3>
                <span className="bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 inline-block">
                  {member.role}
                </span>
                <p className="text-slate-650 text-sm leading-relaxed text-justify">
                  {member.bio}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* بخش ارزش‌های کلینیک */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 text-center border-t border-slate-200 pt-12">
          <div className="p-4">
            <span className="text-2xl block mb-2">🤝</span>
            <h4 className="font-bold text-slate-800 mb-2">تعهد به بیمار</h4>
            <p className="text-slate-500 text-xs leading-relaxed">همراهی قدم به قدم با بیمار و خانواده‌ها از اولین جلسه مشاوره تا ترمیم کامل زخم و بهبود پا.</p>
          </div>
          <div className="p-4">
            <span className="text-2xl block mb-2">🎯</span>
            <h4 className="font-bold text-slate-800 mb-2">تمرکز بر حفظ عضو</h4>
            <p className="text-slate-500 text-xs leading-relaxed">بکارگیری تمام توان علمی و تجهیزاتی کشور برای جلوگیری حداکثری از قطع عضو (آمپوتاسیون).</p>
          </div>
          <div className="p-4">
            <span className="text-2xl block mb-2">⭐</span>
            <h4 className="font-bold text-slate-800 mb-2">تکنولوژی روز دنیا</h4>
            <p className="text-slate-500 text-xs leading-relaxed">استفاده همزمان از پودولوژی نوین (مراقبت پا) و متدهای نوین پانسمان‌های بیولوژیک.</p>
          </div>
        </div>

      </div>
    </div>
  );
}