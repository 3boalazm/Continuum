# تفعيل الحسابات + المزامنة (Firebase) — ٤ دقايق

التطبيق بيشتغل من غير أي إعداد (**Guest mode** = محلي بس). لتفعيل حسابات ومزامنة بين الأجهزة:

## 1) اعمل مشروع Firebase
- https://console.firebase.google.com → **Add project**.

## 2) أضف Web App
- في نظرة عامة المشروع → أيقونة **</>** (Web) → سجّل التطبيق → هيديك **firebaseConfig**.

## 3) فعّل Authentication
- **Build → Authentication → Get started → Sign-in method → Email/Password → Enable**.

## 4) اعمل Firestore + الصلاحيات
- **Build → Firestore Database → Create database** (اختَر Production mode).
- في تبويب **Rules** حط ده:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /continuum_state/{uid} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
  }
}
```

> ده بيضمن إن كل مستخدم يقرا/يكتب **مستنده هو بس** (`continuum_state/{uid}`).

## 5) حط الـ config
افتح `config.js` وحط قيم firebaseConfig:

```js
window.CONTINUUM_CONFIG = {
  firebase: {
    apiKey: "AIza...",
    authDomain: "your-app.firebaseapp.com",
    projectId: "your-app",
    appId: "1:123...:web:abc..."
  }
};
```

> الـ apiKey في Firebase **مخصّص إنه يبان في المتصفّح** — الحماية الحقيقية من قواعد Firestore + Auth.

## 6) اعمل redeploy
ارفع **الفولدر كامل** (فيه `config.js` و `sync.js`) تاني على Vercel.
> مهم: ضيف دومين Vercel بتاعك في **Authentication → Settings → Authorized domains**.

---

## إزاي بيشتغل
- **Offline-first:** بياناتك محليًا أولًا، والتطبيق بيرفع لـ Firestore (debounced) وانت logged-in.
- **Sign up:** شغلك الحالي يبقى نسختك السحابية الأساسية.
- **Sign in على جهاز تاني:** يسحب نسختك (last-write-wins).
- **Guest:** من غير config أو دخول → محلي بس، زي ما كان.

## حدود
- مستند JSON واحد لكل مستخدم (بسيط، شخصي) = **last-write-wins**، مش realtime merge.
- مفيش undo للحذف، ولا مشاركة/تعاون.
