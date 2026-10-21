# دليل AI — مدونة عربية عن الذكاء الاصطناعي

موقع بلوغ مبني بـ [Astro](https://astro.build)، يدعم العربية (RTL)، سريع، ومحسّن لمحركات البحث (SEO).

## التشغيل على جهازك

```bash
npm install
npm run dev      # يفتح الموقع على http://localhost:4321
npm run build    # يبني النسخة النهائية في مجلد dist/
```

## كيف تضيف مقالاً جديداً؟

أنشئ ملفاً جديداً في `src/content/blog/` باسم بالإنجليزية (هذا الاسم يصبح رابط المقال)، مثلاً `chatgpt-prompts.md`:

```md
---
title: 'عنوان المقال'
description: 'وصف قصير يظهر في Google (150 حرفاً تقريباً)'
pubDate: '2026-10-25'
tags: ['أدوات']
draft: false   # اجعلها true لإخفاء المقال حتى تنتهي منه
---

نص المقال هنا بصيغة Markdown...
```

## ملفات مهمة

| الملف | الوظيفة |
|---|---|
| `src/consts.ts` | اسم الموقع ووصفه |
| `astro.config.mjs` | رابط الموقع (`dalilai.com`) |
| `public/robots.txt` | ملف توجيه محركات البحث |
| `src/styles/global.css` | الألوان والخطوط |
| `netlify.toml` | إعدادات النشر على Netlify |

## الميزات الجاهزة

- تصميم عربي من اليمين لليسار، متجاوب مع الهاتف، ويدعم الوضع الليلي
- Sitemap و RSS تلقائياً
- بيانات منظمة (Schema.org) للمقالات لتحسين الظهور في Google
- استضافة مجانية على Netlify أو Cloudflare Pages
