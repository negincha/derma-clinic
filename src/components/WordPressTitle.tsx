"use client";
import { useEffect, useState } from "react";

export default function WordPressTitle() {
  const [title, setTitle] = useState("در حال بارگذاری...");

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_WORDPRESS_URL as string, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `query { generalSettings { title } }`,
      }),
    })
    .then(res => res.json())
    .then(json => setTitle(json?.data?.generalSettings?.title));
  }, []);

  return <span>{title}</span>;
}