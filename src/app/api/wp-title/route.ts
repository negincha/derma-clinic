import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // استفاده از fetch استاندارد برای دریافتِ عنوان
    const res = await fetch("https://derma-clinic.ir/?graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `query { generalSettings { title } }`,
      }),
    });

    if (!res.ok) throw new Error("مشکل از سمت وردپرس");
    
    const result = await res.json();
    return NextResponse.json({ title: result.data.generalSettings.title });
  } catch (error) {
    // اگر وردپرس خطا داد، حداقل برنامه کرش نمی‌کند
    return NextResponse.json({ title: "درما کلینیک (خطای اتصال)" });
  }
}