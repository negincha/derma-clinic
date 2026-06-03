"use client";

import React from "react";
import Link from "next/link";

export default function ServicesPage() {
  const mainServices = [
    {
      title: "درمان تخصصی زخم دیابتی",
      keyword: "مدیریت و پیشگیری از قطع عضو پای دیابتی",
      desc: "استفاده از پانسمان‌های نوین، وکیوم تراپی (فشار منفی) و پلاسما تراپی برای ترمیم سریع بافت‌ها و جلوگیری از پیشرفت عفونت در بیماران دیابتی زیر نظر کادر فوق تخصصی درما.",
      icon: "🦶"
    },
    {
      title: "خدمات پیشرفته پودولوژی (مشکلات ناخن)",
      keyword: "مراقبت ساختاری و بهداشتی پا",
      desc: "درمان قطعی ناخن‌های فرو رفته در گوشت (ارتونکسی)، اصلاح ضخامت ناخن، رفع ترک‌های عمیق پا، مدیریت تخصصی ناخن‌های آسیب‌دیده با متدهای نوین پودولوژی درما.",
      icon: "✂️"
    },
    {
      title: "درمان زخم‌های مزمن و عروقی",
      keyword: "زخم بستر و زخم‌های وریدی/شریانی",
      desc: "ارزیابی دقیق سیستم عروقی پا و به‌کارگیری متدهای نوین بین‌المللی برای درمان زخم‌های بستر عمیق و زخم‌های ناشی از نارسایی‌های عروقی در کمترین زمان ممکن در کلینیک درما.",
      icon: "🏥"
    },
    {
      title: "برداشتن تخصصی میخچه و زگیل پا",
      keyword: "درمان بدون درد و بازگشت",
      desc: "تخلیه کامل و ریشه‌ای میخچه‌های دردناک و زگیل‌های کف پا با روش‌های مدرن پودولوژی، بدون نیاز به جراحی‌های سنتی و بدون دوره نقاهت سخت.",
      icon: "🎯"
    },
    {
      title: "بیماری‌های داخلی و گوارش",
      keyword: "تشخیص، بررسی و درمان مشکلات گوارشی",
      desc: "بررسی تخصصی و درمان انواع اختلالات حاد و مزمن گوارشی، معده، روده و سیستم هضم که می‌توانند بر روند کلی سلامت و بهبود ارگانیک بافت‌های بدن تاثیرگذار باشند.",
      icon: "🧪"
    },
    {
      title: "بیماری‌های کلیه و مجاری ادراری",
      keyword: "کنترل تخصص عملکرد کلیه‌ها و مجاری",
      desc: "ارزیابی دقیق عملکرد کلیه، مدیریت مشکلات مجاری ادراری و تنظیم مایعات بدن؛ بخصوص برای بیماران مزمن که نیاز به بررسی دوره‌ای فاکتورهای خونی دارند.",
      icon: "💧"
    },
    {
      title: "بیماری‌های ریه و دستگاه تنفسی",
      keyword: "مدیریت اختلالات تنفسی و ریوی",
      desc: "بررسی، کنترل و درمان بیماری‌های ریوی، مشکلات تنفسی و آسم جهت افزایش سطح اکسیژن‌رسانی خون که یکی از کلیدی‌ترین ارکان در سرعت بازسازی سلولی است.",
      icon: "🫁"
    },
    {
      title: "غدد درون‌ریز و متابولیسم",
      keyword: "تنظیم هورمون‌ها و سیستم متابولیک",
      desc: "تشخیص و درمان اختلالات هورمونی، بیماری‌های غده تیروئید و سیستم متابولیسم بدن جهت متعادل‌سازی فاکتورهای حیاتی و بهینه‌سازی روند سیستم ایمنی.",
      icon: "🧬"
    },
    {
      title: "کنترل فشار خون و بیماری‌های عروقی",
      keyword: "تنظیم و مدیریت نوسانات فشار خون",
      desc: "پایش مداوم، تنظیم داروهای قلبی-عروقی و مدیریت نوسانات فشار خون به منظور بهبود جریان خون رسانی در مویرگ‌ها و حفظ سلامت رگ‌های محیطی.",
      icon: "❤️"
    },
    {
      title: "مدیریت و درمان تخصصی دیابت",
      keyword: "کنترل قند خون و پیشگیری از عوارض مزمن",
      desc: "تنظیم دقیق دوز انسولین و داروهای قند خون، آموزش سبک زندگی و کنترل هموگلوبین A1C برای پیشگیری از عوارض دیابت بر اعصاب محیطی (نوروپاتی) و عروق.",
      icon: "📊"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16" dir="rtl">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* هدر صفحه و سئو تایتل */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">
            خدمات فوق تخصصی کلینیک زخم، پودولوژی و داخلی درما
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            ارائه دهنده خدمات جامع درمانی، مدیریت بیماری‌های داخلی و غدد، و ترمیم تخصصی انواع زخم‌های مزمن با متدهای نوین بین‌المللی در دپارتمان درما.
          </p>
        </div>

        {/* لیست خدمات به صورت کارت‌های بهینه شده برای گوگل */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {mainServices.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="text-4xl mb-4 bg-teal-50 w-14 h-14 flex items-center justify-center rounded-xl text-teal-600">
                  {service.icon}
                </div>
                <h2 className="text-xl font-bold text-slate-800 mb-1">
                  {service.title}
                </h2>
                <span className="text-xs font-medium text-teal-600 block mb-4">
                  {service.keyword}
                </span>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>
              <div className="border-t border-slate-50 pt-4">
                <Link href="/contact" className="text-xs font-bold text-teal-600 hover:text-teal-700 flex items-center gap-1">
                 
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* بخش مشاوره فوری */}
        <div className="bg-teal-900 rounded-3xl p-8 md:p-12 text-white text-center shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-800 to-teal-950 opacity-50" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-4">نیاز به مشاوره فوری در مورد وضعیت درمان خود دارید?</h3>
            <p className="text-teal-100 text-xs md:text-sm leading-relaxed mb-6">
              تصویر زخم، آزمایشات یا مدارک پزشکی خود را برای درمانگران مجموعه درما بفرستید یا همین حالا با شماره مرکز تماس بگیرید تا در سریع‌ترین زمان ممکن راهنمایی شوید.
            </p>
            <a 
              href="tel:09352160999" 
              className="inline-block bg-white text-teal-900 font-bold px-8 py-3.5 rounded-xl shadow-md hover:bg-teal-50 transition-colors text-sm"
            >
              📞 تماس سریع با درما: 09352160999
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}