import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // <--- فوتر را اینجا ایمپورت کردیم

export const metadata: Metadata = {
  title: "کلینیک تخصصی زخم و پودولوژی کرج",
  description: "مرکز جامع مدیریت زخم و درمان پای دیابتی در استان البرز",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="flex flex-col min-h-screen bg-slate-50">
        
        {/* ۱. منوی بالای صفحه در تمام صفحات */}
        <Navbar />
        
        {/* ۲. محتوای اصلی صفحات سایت */}
        <main className="flex-grow">{children}</main>
        
        {/* ۳. فوتر و بخش پایینی سایت در تمام صفحات */}
        <Footer />
        
      </body>
    </html>
  );
}