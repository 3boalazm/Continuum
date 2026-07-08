# Continuum — Memory OS (multi-page build)

تطبيق ويب بدون build step. البيانات محفوظة محليًا (localStorage) على نفس الجهاز/المتصفح.

## البنية (كل تابة = صفحة منفصلة)
- `app.css` — كل الستايلات المشتركة (glass, ambient, animations…)
- `app.js` — كل المنطق المشترك (state, i18n, render, actions, particles)
- صفحات لكل تابة: `index.html` (الرئيسية) · `projects.html` · `project.html?id=…` · `tasks.html` · `journal.html` · `timeline.html` · `knowledge.html` · `bookmarks.html` · `courses.html` · `prompts.html` · `servers.html` · `repos.html` · `assistant.html` · `search.html` · `settings.html`
- `fonts/` — خط Thmanyah Serif Display (5 أوزان)

كل صفحة بتـ `window.__PAGE__` وبتحمّل `app.css` + `app.js`. التنقّل = روابط حقيقية بين الصفحات، والحالة بتفضل محفوظة في localStorage.

## الوضعين
- **سريع / متقدّم** (من السايدبار) — بيغيّروا التنقّل والمحتوى.
- **Mobile / Desktop** (من السايدبار) — على الديسكتوب السايدبار بيتثبّت والهوم بيبقى عمودين.

## خيارات التحديد (Tasks)
- فلترة (نشط/الكل) + ترتيب (أولوية/موعد/الأحدث).
- **وضع تحديد** (زر Select) → checkboxes → إجراءات جماعية: إكمال / حذف.


## الحسابات + المزامنة (اختياري)
التطبيق guest/محلي افتراضيًا. لتفعيل حسابات ومزامنة سحابية عبر الأجهزة، اتبع **FIREBASE_SETUP.md** (٣ دقايق: مشروع Firebase + جدول + مفتاحين في `config.js`). ملفات: `config.js` (مفاتيحك) و `sync.js` (طبقة المزامنة).

## التشغيل محليًا
افتح `index.html` مباشرة في المتصفّح (كل الصفحات relative).

## الديبلوي
اسحب **الفولدر كامل** (بكل الملفات والخطوط) على `vercel.com/new` — لأن الصفحات بتشير لـ `app.css`/`app.js`/`fonts/` بمسارات relative، فلازم يتنشروا مع بعض.

> ملاحظة: الذكاء (Suggestions / Ask) heuristics محلية، مش موديل حقيقي. مفيش مزامنة بين الأجهزة (localStorage بس).
