(function(){
"use strict";
/* ---------------- i18n ---------------- */
var I18N={
 ar:{app:"Continuum",home:"الرئيسية",projects:"المشاريع",tasks:"المهام",journal:"اليومية",settings:"الإعدادات",
  gMorning:"صباح الخير",gAfternoon:"مساء الخير",gEvening:"مساء الخير",
  inflight:function(n){return n+" "+(n==1?"مشروع شغّال":"مشاريع شغّالة")},
  resume:"استكمل من هنا",nothing:"مفيش حاجة تكملها لسه.",nothingSub:"ابدأ مشروع، وكل ما تسيبه، Continuum هيفتكرلك كنت بتعمل إيه.",
  startProject:"ابدأ مشروع",continueW:"استكمل",youWere:"كنت بتعمل",nextStep:"الخطوة الجاية",
  nextActions:"الخطوات الجاية",inbox:"الوارد",today:"النهاردة",noNext:"مفيش خطوات مطلوبة دلوقتي.",
  newProject:"مشروع جديد",pname:"اسم المشروع",create:"إنشاء",cancel:"إلغاء",add:"إضافة",save:"حفظ",delete:"حذف",done:"تم",
  status:"الحالة",active:"شغّال",paused:"متوقف",dstatus:"خلص",progress:"التقدّم",stage:"المرحلة الحالية",
  nextAction:"الخطوة الجاية",setNext:"حدّد الخطوة الجاية",tasksT:"المهام",notesT:"الملاحظات",sessionsT:"الجلسات",
  addTask:"أضف مهمة",addNote:"أضف ملاحظة",noTasks:"مفيش مهام.",noNotes:"مفيش ملاحظات.",noSessions:"لسه مفيش جلسات.",
  startSession:"ابدأ الشغل",endSession:"سجّل لقطة (Snapshot)",snapTitle:"سجّل لقطة قبل ما تسيب",
  whatDone:"عملت إيه في الجلسة دي؟",nextStepQ:"إيه الخطوة الجاية؟",saveSnap:"احفظ اللقطة",
  captureT:"التقاط سريع",capturePh:"اكتب أي حاجة… فكرة، مهمة، رابط…",kIdea:"فكرة",kTask:"مهمة",kNote:"ملاحظة",kLink:"رابط",
  triage:"صنّف الوارد",assignProj:"المشروع",unassigned:"بدون مشروع",makeTask:"حوّلها مهمة",makeNote:"حوّلها ملاحظة",keep:"سيبها",
  emptyInbox:"الوارد فاضي ✨",searchPh:"دوّر على أي حاجة…",noResults:"مفيش نتائج.",
  language:"اللغة",theme:"المظهر",dark:"داكن",light:"فاتح",exportD:"تصدير البيانات",clearD:"مسح كل البيانات",
  clearQ:"متأكد؟ ده هيمسح كل مشاريعك ومهامك.",about:"ذاكرة عمل خارجية — بياناتك على جهازك.",
  noteTitle:"العنوان",noteBody:"المحتوى",openNote:"ملاحظة",back:"رجوع",saved:"اتحفظ",added:"اتضاف",resumed:"رجعنا للسياق ✓",
  lastWorked:"آخر شغل",projectsEmpty:"مفيش مشاريع لسه.",tasksEmpty:"مفيش مهام. اضغط + للالتقاط السريع.",
  journalEmpty:"مفيش نشاط النهاردة لسه.",workedOn:"اشتغلت على",jNote:"ملاحظة اليوم",jNotePh:"إيه اللي حصل النهاردة؟",
  allTasks:"كل المهام",activeOnly:"المطلوب",relNow:"الآن",relMin:"د",relHour:"س",relYesterday:"أمس",relDay:"يوم",
  welcome:"أهلاً 👋",demoNote:"ده مشروع تجريبي — امسحه وابدأ بتاعك.",of:"من",
  quick:"سريع",advanced:"متقدّم",simpleTasks:"مهام بسيطة",fullSystem:"النظام الكامل",navigate:"تنقّل",searchLabel:"بحث",qToday:"النهاردة",qTasks:"المهام",quickAdd:"أضف مهمة سريعة…",modeHint:"بدّل الوضع من هنا",
  contextRecovered:"تم استرجاع السياق",resumeYourWork:"استكمل شغلك",sessionSummary:"ملخّص الجلسة",accomplishments:"اللي اتعمل",continueLeft:"كمّل من حيث وقفت",sessionNotes:"ملاحظات الجلسة",recentCommits:"آخر Commits",recentDecisions:"آخر القرارات",blockersT:"العوائق",relevantDocs:"مستندات ذات صلة",reconstructed:function(n){return "اتجمّع من "+n+" إشارات · تحدّث الآن"},todaysFocus:"تركيز النهاردة",aiSuggestions:"اقتراحات الذكاء",estimate:"تقدير",pHigh:"عالي",pMed:"متوسط",pLow:"منخفض",dueToday:"النهاردة",dueTomorrow:"بكرة",due:"موعد",knowledge:"المعرفة",courses:"الكورسات",bookmarks:"العلامات",promptLib:"مكتبة البرومبت",servers:"السيرفرات",repositories:"المستودعات",timeline:"الخط الزمني",aiAssistant:"المساعد",askContinuum:"اسأل Continuum",askPh:"اسأل عن شغلك…",pinned:"مثبّت",workspaceSec:"مساحة العمل",systemSec:"النظام",logDecision:"سجّل قرار",addCommit:"أضف Commit",addBlocker:"أضف عائق",reason:"السبب",addBookmark:"أضف علامة",addCourse:"أضف كورس",addPrompt:"أضف برومبت",addServer:"أضف سيرفر",addRepo:"أضف مستودع",url:"الرابط",provider:"المصدر",items:"عناصر",noItems:"لسه فاضي.",priority:"الأولوية",mobileView:"موبايل",desktopView:"سطح المكتب",contextHealth:"صحّة السياق",contextHealthSub:"جاهزيتك ترجع لشغلك في ثانية",inFlow:"شغّال",openTasks:"مهام مفتوحة",focusWk:"تركيز/أسبوع",learning:"التعلّم",sessionHeat:"سخونة الجلسات",dayStreak:"يوم متتابع",select:"تحديد",selDone:"تم",byPrio:"الأولوية",byDue:"الموعد",byNew:"الأحدث",selected:"محدّد",complete:"إكمال",delSelQ:"تحذف المحدّد؟",focusMode:"وضع التركيز",start:"ابدأ",pause:"إيقاف",reset:"تصفير",exit:"خروج",aiInsights:"رؤى الذكاء",insTop:"أكتر مشروع نشط",insBlk:"عوائق مفتوحة",insFocus:"تركيز الأسبوع",inboxT:"الوارد",inboxSub:"استرجاع السياق ورؤى وتذكيرات",contextRecovery:"استرجاع السياق",reminders:"تذكيرات",inboxRaw:"ملتقَطات",inboxEmpty:"الوارد فاضي ✓",pin:"تثبيت",account:"الحساب",signIn:"دخول",signUp:"حساب جديد",signOut:"تسجيل خروج",email:"الإيميل",password:"كلمة السر",syncOff:"المزامنة السحابية مش مفعّلة — بص على FIREBASE_SETUP.md",syncHint:"الدخول بيحمّل نسختك السحابية على الجهاز ده.",synced:"اتزامن ✓",signedIn:"أهلاً بيك ✓",signedOut:"خرجت",checkEmail:"بص إيميلك لتأكيد الحساب",syncStatus:"الحالة",cloudGuest:"محلي (بدون حساب)",editTask:"تعديل المهمة",editProject:"تعديل المشروع",version:"الإصدار",subtitle:"الوصف",statusL:"الحالة",color:"اللون",undo:"تراجع",deleted:"اتحذف",restored:"رجع",mood:"المزاج",energy:"الطاقة",e_high:"عالية",e_mid:"وسط",e_low:"منخفضة",daySummary:"ملخّص اليوم",doneT:"اتعمل",pastEntries:"مدوّنات سابقة",yesterday:"إمبارح",notifs:"إشعارات المتصفّح",notifOnMsg:"الإشعارات مفعّلة ✓",notifBlocked:"المتصفّح رافض الإشعارات",profileT:"الملف",you:"أنت",kBookmark:"علامة",kReference:"مرجع",hoursT:"ساعات"},
 en:{app:"Continuum",home:"Home",projects:"Projects",tasks:"Tasks",journal:"Journal",settings:"Settings",
  gMorning:"Good morning",gAfternoon:"Good afternoon",gEvening:"Good evening",
  inflight:function(n){return n+" project"+(n==1?"":"s")+" in flight"},
  resume:"Continue from here",nothing:"Nothing to resume yet.",nothingSub:"Start a project — every time you leave, Continuum remembers where you were.",
  startProject:"Start a project",continueW:"Resume",youWere:"You were",nextStep:"Next step",
  nextActions:"Next actions",inbox:"Inbox",today:"Today",noNext:"Nothing to do right now.",
  newProject:"New project",pname:"Project name",create:"Create",cancel:"Cancel",add:"Add",save:"Save",delete:"Delete",done:"Done",
  status:"Status",active:"Active",paused:"Paused",dstatus:"Done",progress:"Progress",stage:"Current stage",
  nextAction:"Next action",setNext:"Set next action",tasksT:"Tasks",notesT:"Notes",sessionsT:"Sessions",
  addTask:"Add task",addNote:"Add note",noTasks:"No tasks.",noNotes:"No notes.",noSessions:"No sessions yet.",
  startSession:"Start working",endSession:"Snapshot",snapTitle:"Snapshot before you leave",
  whatDone:"What did you get done?",nextStepQ:"What's the next step?",saveSnap:"Save snapshot",
  captureT:"Quick capture",capturePh:"Type anything… idea, task, link…",kIdea:"Idea",kTask:"Task",kNote:"Note",kLink:"Link",
  triage:"Triage inbox",assignProj:"Project",unassigned:"No project",makeTask:"Make task",makeNote:"Make note",keep:"Keep",
  emptyInbox:"Inbox is empty ✨",searchPh:"Search everything…",noResults:"No results.",
  language:"Language",theme:"Theme",dark:"Dark",light:"Light",exportD:"Export data",clearD:"Clear all data",
  clearQ:"Sure? This deletes all your projects and tasks.",about:"An external working memory — your data stays on device.",
  noteTitle:"Title",noteBody:"Body",openNote:"Note",back:"Back",saved:"Saved",added:"Added",resumed:"Back in context ✓",
  lastWorked:"last worked",projectsEmpty:"No projects yet.",tasksEmpty:"No tasks. Tap + to capture.",
  journalEmpty:"No activity today yet.",workedOn:"Worked on",jNote:"Today's note",jNotePh:"What happened today?",
  allTasks:"All",activeOnly:"To do",relNow:"now",relMin:"m",relHour:"h",relYesterday:"yesterday",relDay:"d",
  welcome:"Welcome 👋",demoNote:"This is a demo project — delete it and start yours.",of:"of",
  quick:"Quick",advanced:"Advanced",simpleTasks:"Simple tasks",fullSystem:"Full system",navigate:"Navigate",searchLabel:"Search",qToday:"Today",qTasks:"Tasks",quickAdd:"Quick add a task…",modeHint:"Switch mode here",
  contextRecovered:"Context recovered",resumeYourWork:"Resume your work",sessionSummary:"Session summary",accomplishments:"What you did",continueLeft:"Continue where you left off",sessionNotes:"Open session notes",recentCommits:"Recent commits",recentDecisions:"Recent decisions",blockersT:"Blockers",relevantDocs:"Relevant docs",reconstructed:function(n){return "Reconstructed from "+n+" signals · updated just now"},todaysFocus:"Today's focus",aiSuggestions:"AI suggestions",estimate:"estimate",pHigh:"HIGH",pMed:"MED",pLow:"LOW",dueToday:"Today",dueTomorrow:"Tomorrow",due:"due",knowledge:"Knowledge",courses:"Courses",bookmarks:"Bookmarks",promptLib:"Prompt Library",servers:"Servers",repositories:"Repositories",timeline:"Timeline",aiAssistant:"AI Assistant",askContinuum:"Ask Continuum",askPh:"Ask about your work…",pinned:"Pinned",workspaceSec:"Workspace",systemSec:"System",logDecision:"Log decision",addCommit:"Add commit",addBlocker:"Add blocker",reason:"Reason",addBookmark:"Add bookmark",addCourse:"Add course",addPrompt:"Add prompt",addServer:"Add server",addRepo:"Add repository",url:"URL",provider:"Provider",items:"items",noItems:"Nothing here yet.",priority:"Priority",mobileView:"Mobile",desktopView:"Desktop",contextHealth:"Context Health",contextHealthSub:"How ready you are to jump back in",inFlow:"In flow",openTasks:"Open tasks",focusWk:"Focus/wk",learning:"Learning",sessionHeat:"Session heat",dayStreak:"day streak",select:"Select",selDone:"Done",byPrio:"Priority",byDue:"Due",byNew:"Newest",selected:"selected",complete:"Complete",delSelQ:"Delete selected tasks?",focusMode:"Focus mode",start:"Start",pause:"Pause",reset:"Reset",exit:"Exit",aiInsights:"AI insights",insTop:"Most active project",insBlk:"Open blockers",insFocus:"Focus this week",inboxT:"Inbox",inboxSub:"Context recovery, insights & reminders",contextRecovery:"Context recovery",reminders:"Reminders",inboxRaw:"Captures",inboxEmpty:"Inbox is clear ✓",pin:"Pin",account:"Account",signIn:"Sign in",signUp:"Sign up",signOut:"Sign out",email:"Email",password:"Password",syncOff:"Cloud sync not set up — see FIREBASE_SETUP.md",syncHint:"Signing in loads your cloud copy onto this device.",synced:"Synced ✓",signedIn:"Welcome ✓",signedOut:"Signed out",checkEmail:"Check your email to confirm",syncStatus:"Status",cloudGuest:"Local (no account)",editTask:"Edit task",editProject:"Edit project",version:"Version",subtitle:"Subtitle",statusL:"Status",color:"Color",undo:"Undo",deleted:"Deleted",restored:"Restored",mood:"Mood",energy:"Energy",e_high:"High",e_mid:"Mid",e_low:"Low",daySummary:"Day summary",doneT:"Done",pastEntries:"Past entries",yesterday:"Yesterday",notifs:"Browser notifications",notifOnMsg:"Notifications on ✓",notifBlocked:"Browser blocked notifications",profileT:"Profile",you:"You",kBookmark:"Bookmark",kReference:"Reference",hoursT:"Hours"}
};

/* ---------------- state ---------------- */
var KEY="continuum:v1";
var S=load();
if(!S.mode)S.mode="quick";
["projects","tasks","notes","bookmarks","courses","prompts","servers","repos","decisions"].forEach(function(k){if(!Array.isArray(S[k]))S[k]=[]});
if(!S.journal)S.journal={};
S.projects.forEach(function(p){p.commits=p.commits||[];p.blockers=p.blockers||[];(p.sessions||[]).forEach(function(s){s.accomplishments=s.accomplishments||[]})});
function load(){
  try{var r=localStorage.getItem(KEY);if(r)return JSON.parse(r);}catch(e){}
  return seed();
}
function save(){try{S._localAt=Date.now();localStorage.setItem(KEY,JSON.stringify(S));}catch(e){} if(window.CxSync&&CxSync.loggedIn&&CxSync.loggedIn())CxSync.pushDebounced(cleanState);}
function seed(){
  var lang=(navigator.language||"ar").indexOf("ar")===0?"ar":"en";
  var now=Date.now(),min=60000,hr=3600000,day=86400000;
  var atlas=uid(),lumen=uid(),orbit=uid(),cinder=uid();
  return {
    lang:lang, theme:"dark", mode:"advanced", view:"home", activePid:null, back:"home",
    projects:[
      {id:atlas,name:"Atlas",icon:"◈",color:"#7B7BF0",pinned:true,version:"v0.4",subtitle:"Query planner rewrite",
       status:"active",stage:"Query planner rewrite",nextAction:"Wire tracing spans through the aggregation worker",
       repo:"atlas-core",lastWorkedAt:now-12*min,createdAt:now-20*day,
       blockers:["Retry storm on Kafka consumer group"],
       commits:[{hash:"a3f21c",msg:"wip: extract mergeShard()",at:now-38*min},
                {hash:"9e02b1",msg:"test: replay fixture at 40k/s",at:now-2*hr},
                {hash:"77c910",msg:"trace: add span around consumer poll",at:now-1*day}],
       sessions:[{id:uid(),startedAt:now-40*min,endedAt:now-12*min,
         summary:"You were debugging tail latency on the aggregation worker. Traced a lock contention on the merge buffer; wrote 3 notes and opened PR #482. Left off mid-refactor of mergeShard().",
         accomplishments:["Reproduced the p99 spike locally with the 40k/s replay fixture","Isolated it to a mutex around the shard merge buffer","Drafted a lock-free ring buffer approach in scratch note"],
         nextStep:"Wire tracing spans through the aggregation worker"}]},
      {id:lumen,name:"Lumen",icon:"◈",color:"#3FBE86",pinned:true,status:"active",stage:"Overlays",
       nextAction:"Draft motion spec for overlays",lastWorkedAt:now-1*day,createdAt:now-15*day,blockers:[],commits:[],
       sessions:[{id:uid(),startedAt:now-1*day-hr,endedAt:now-1*day,summary:"Prototyped the overlay transition system.",accomplishments:["Spring curve feels right at 280ms"],nextStep:"Draft motion spec for overlays"}]},
      {id:orbit,name:"Orbit",icon:"◈",color:"#E2A43A",pinned:true,status:"paused",stage:"Planning",
       nextAction:"Define sync protocol",lastWorkedAt:now-3*day,createdAt:now-10*day,blockers:[],commits:[],sessions:[]},
      {id:cinder,name:"Cinder",icon:"◈",color:"#F26761",pinned:false,status:"active",stage:"",
       nextAction:"",lastWorkedAt:now-4*day,createdAt:now-30*day,blockers:[],commits:[],sessions:[]}
    ],
    decisions:[
      {id:uid(),text:"Switch merge buffer to lock-free ring — pending benchmark",reason:"p99 dominated by mutex contention",projectId:atlas,status:"pending",at:now-2*hr},
      {id:uid(),text:"Adopt OpenTelemetry over custom spans",reason:"standard tooling, less maintenance",projectId:atlas,status:"decided",at:now-1*day}
    ],
    tasks:[
      {id:uid(),title:"Wire tracing spans through aggregation worker",projectId:atlas,done:false,isNext:true,priority:"high",due:startOfDay(now),estimate:80,createdAt:now,priority_n:1},
      {id:uid(),title:"Benchmark lock-free ring buffer",projectId:atlas,done:false,isNext:false,priority:"high",due:startOfDay(now)+day,estimate:60,createdAt:now,priority_n:2},
      {id:uid(),title:"Draft motion spec for overlays",projectId:lumen,done:false,isNext:false,priority:"med",due:startOfDay(now)+3*day,estimate:40,createdAt:now,priority_n:3}
    ],
    notes:[
      {id:uid(),title:"Kafka retry semantics — internal RFC 042",body:"RFC 042 covers retry/backoff semantics for the Kafka consumer group.",projectId:atlas,createdAt:now-2*day,updatedAt:now-2*day},
      {id:uid(),title:"ClickHouse merge tree tuning",body:"Merge tree settings for the aggregation store.",projectId:atlas,createdAt:now-3*day,updatedAt:now-3*day},
      {id:uid(),title:"Lock-free ring buffer (Vyukov)",body:"Vyukov MPMC bounded queue notes.",projectId:atlas,createdAt:now-1*day,updatedAt:now-1*day},
      {id:uid(),title:"Ring buffer sizing",body:"Vyukov MPMC sizing tradeoffs and cache-line padding.",projectId:atlas,createdAt:now-1*day,updatedAt:now-20*hr},
      {id:uid(),title:"Backpressure via Vyukov queue",body:"Using a Vyukov MPMC queue for backpressure on the consumer.",projectId:atlas,createdAt:now-1*day,updatedAt:now-18*hr}
    ],
    bookmarks:[{id:uid(),title:"1024cores — Vyukov MPMC queue",url:"https://www.1024cores.net",kind:"link",topic:"concurrency",projectId:atlas,createdAt:now-5*day}],
    courses:[{id:uid(),title:"Distributed Systems (MIT 6.824)",provider:"MIT",total:20,current:9,progress:45,createdAt:now-30*day}],
    prompts:[{id:uid(),title:"Explain a stack trace",model:"Claude",category:"Coding",body:"Explain this stack trace step by step and suggest the root cause: {trace}",createdAt:now-10*day}],
    servers:[{id:uid(),name:"prod-01",host:"10.0.0.4",ports:"22, 443, 9092",notes:"Kafka + ClickHouse. Deploy: make ship.",createdAt:now-40*day}],
    repos:[{id:uid(),name:"atlas-core",branch:"feature/query-planner",url:"github.com/acme/atlas-core",projectId:atlas,createdAt:now-40*day}],
    inbox:[], journal:{}
  };
}
function startOfDay(ts){var d=new Date(ts);d.setHours(0,0,0,0);return d.getTime()}
function T(k){var d=I18N[S.lang]||I18N.ar;return d[k];}

/* ---------------- helpers ---------------- */
function uid(){return Math.random().toString(36).slice(2,10)}
function esc(s){return(s==null?"":String(s)).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function project(id){return S.projects.find(function(p){return p.id===id})}
function greetKey(){var h=new Date().getHours();return h<12?"gMorning":h<18?"gAfternoon":"gEvening"}
function rel(ts){
  if(!ts)return"";var d=Date.now()-ts,m=60000,h=3600000,day=86400000;var L=I18N[S.lang];
  if(d<m)return L.relNow;
  if(d<h)return Math.floor(d/m)+L.relMin;
  if(d<day)return Math.floor(d/h)+L.relHour;
  if(d<day*2)return L.relYesterday;
  return Math.floor(d/day)+L.relDay;
}
function progressOf(p){
  var ts=S.tasks.filter(function(t){return t.projectId===p.id});
  if(ts.length===0)return p.progress||0;
  return Math.round(ts.filter(function(t){return t.done}).length/ts.length*100);
}
function todayKey(){var d=new Date();return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()}

/* ---------------- icons ---------------- */
var IC={
 home:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/>',
 folder:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
 check:'<path d="M4 12l5 5L20 6"/>',
 cal:'<rect x="3" y="4.5" width="18" height="16" rx="2"/><path d="M3 9h18M8 2.5v4M16 2.5v4"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
 search:'<circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/>',
 settings:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.5 4.5l2 2M17.5 17.5l2 2M19.5 4.5l-2 2M6.5 17.5l-2 2"/>',
 back:'<path d="M15 18l-6-6 6-6"/>',
 chev:'<path d="M9 6l6 6-6 6"/>',
 menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
 book:'<path d="M5 4h13v16H6a2 2 0 0 1-1-3.8"/><path d="M18 4v16"/>',
 cap:'<path d="M12 4 2 9l10 5 10-5-10-5z"/><path d="M6 11v4c0 1.2 2.7 2 6 2s6-.8 6-2v-4"/>',
 mark:'<path d="M6 3h12v18l-6-4-6 4z"/>',
 spark:'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 11.8 10.2 8.2z"/>',
 server:'<rect x="3" y="4" width="18" height="7" rx="1.5"/><rect x="3" y="13" width="18" height="7" rx="1.5"/><path d="M7 7.5h.01M7 16.5h.01"/>',
 git:'<circle cx="6" cy="6" r="2.4"/><circle cx="6" cy="18" r="2.4"/><circle cx="17" cy="9" r="2.4"/><path d="M6 8.4v7.2M8.4 6H13a3.5 3.5 0 0 1 3.5 3.5"/>',
 bell:'<path d="M18 8a6 6 0 1 0-12 0c0 7-3 8-3 8h18s-3-1-3-8"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',
 smartphone:'<rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18h2"/>',
 monitor:'<rect x="2" y="3" width="20" height="13" rx="2"/><path d="M8 21h8M12 16v5"/>',
 user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6.5 8-6.5s8 2.5 8 6.5"/>'
};
function svg(p,cls){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="'+(cls||"")+'">'+p+'</svg>'}
var LOGO='<svg class="mk" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="13" stroke="var(--accent)" stroke-width="3" stroke-dasharray="58 20" stroke-linecap="round"/></svg>';

/* ---------------- render ---------------- */
function normalizeView(){
  var quick=["qtoday","qtasks"],adv=["home","projects","tasks","journal"];
  if(S.mode==="quick"&&adv.indexOf(S.view)>=0)S.view="qtoday";
  if(S.mode==="advanced"&&quick.indexOf(S.view)>=0)S.view="home";
}
function activeColor(){
  var p=S.activePid?project(S.activePid):null;
  if(!p){var ws=S.projects.filter(function(x){return x.sessions&&x.sessions.length}).sort(function(a,b){return(b.lastWorkedAt||0)-(a.lastWorkedAt||0)});p=ws[0];}
  return (p&&p.color)||"#7B7BF0";
}
function applyGlow(){
  var c=activeColor();var r=document.documentElement;
  r.style.setProperty("--ws",c);
  r.style.setProperty("--ws-soft",c+"24");
  var meta=document.querySelector('meta[name=theme-color]');if(meta)meta.setAttribute("content",S.theme==="dark"?"#06060c":"#eef0f5");
}
function tagReveals(){
  var m=document.getElementById("main");if(!m)return;
  var kids=[].slice.call(m.children),d=0;
  kids.forEach(function(el){ if(el.getAttribute&&el.tagName!=="SCRIPT"){el.setAttribute("data-rv","");el.style.animationDelay=(d)+"ms";d+=55; if(d>560)d=560;}});
}
function countUp(){
  var raf=window.requestAnimationFrame;
  document.querySelectorAll("[data-count]").forEach(function(el){
    var target=parseInt(el.getAttribute("data-count"))||0,suf=el.getAttribute("data-suffix")||"";
    if(!raf){el.textContent=target+suf;return;}
    var dur=900,t0=performance.now();
    (function step(t){var k=Math.min(1,(t-t0)/dur),v=Math.round(target*(1-Math.pow(1-k,3)));el.textContent=v+suf;if(k<1)raf(step)})(t0);
  });
}
function animateRings(){
  var raf=window.requestAnimationFrame;
  function apply(){document.querySelectorAll("[data-ring]").forEach(function(el){el.style.strokeDashoffset=el.getAttribute("data-ring")})}
  if(raf)raf(function(){raf(apply)});else apply();
}
function vInbox(){
  var h='<div class="greet">'+T("inboxT")+'</div><div class="sub">'+T("inboxSub")+'</div>';
  var ws=S.projects.filter(function(p){return p.sessions&&p.sessions.length}).sort(function(a,b){return(b.lastWorkedAt||0)-(a.lastWorkedAt||0)}).slice(0,3);
  var sug=aiSuggestions();
  var due=S.tasks.filter(function(t){return !t.done&&t.due}).sort(function(a,b){return a.due-b.due}).slice(0,6);
  var raw=S.inbox||[];
  if(!ws.length&&!sug.length&&!due.length&&!raw.length)return h+'<div class="empty" style="padding:40px"><div class="big">📭</div>'+T("inboxEmpty")+'</div>';
  if(ws.length){h+='<div class="eyebrow">↺ '+T("contextRecovery")+'</div>';
    ws.forEach(function(p){var sx=p.sessions[p.sessions.length-1];
      h+='<div class="inbox-card"><div class="ic-icon" style="color:'+(p.color||"var(--ws)")+'">◈</div><div class="ic-body"><div class="ic-t">'+esc(p.name)+'</div><div class="ic-s">'+esc((sx.summary||"").slice(0,110))+'</div><button class="btn btn-ghost btn-sm" data-a="resume" data-id="'+p.id+'" style="margin-top:9px">▸ '+T("resume")+'</button></div></div>';});}
  if(sug.length){h+='<div class="eyebrow">✦ '+T("aiInsights")+'</div>';
    sug.forEach(function(x){h+='<div class="inbox-card"><div class="ic-icon" style="color:var(--ai)">'+x.icon+'</div><div class="ic-body"><div class="ic-t">'+esc(x.title)+'</div><div class="ic-s">'+esc(x.sub)+'</div></div></div>';});}
  if(due.length){h+='<div class="eyebrow">🔔 '+T("reminders")+'</div>';
    due.forEach(function(t){var p=project(t.projectId);h+='<div class="inbox-card ic-flat"><span class="rdot"></span><div class="ic-body"><div class="ic-t">'+esc(t.title)+'</div><div class="ic-s">'+(p?esc(p.name)+" · ":"")+T("due")+" "+dueLabel(t.due)+'</div></div>'+prioPill(t.priority)+'</div>';});}
  if(raw.length){h+='<div class="eyebrow">📥 '+T("inboxRaw")+' <span class="cnt">'+raw.length+'</span></div>';
    raw.forEach(function(it){h+='<div class="inbox-card ic-flat tap" data-a="triage"><div class="ic-body"><div class="ic-t">'+esc(it.text)+'</div><div class="ic-s">'+esc(it.kind||"")+'</div></div></div>';});}
  return h;
}
function vProfile(){
  var mins=0;sessionsAll().forEach(function(e){mins+=Math.round(e.dur/60000)});var hrs=Math.round(mins/60);
  var h='<div class="greet">'+T("profileT")+'</div>';
  h+='<div class="prof-head"><div class="prof-av">C</div><div class="prof-nm">'+T("you")+'</div><div class="prof-sub">Continuum · Memory OS</div></div>';
  h+='<div class="stat-row" style="grid-template-columns:repeat(4,1fr)">'+
     '<div class="stat"><div class="v a" data-count="'+S.notes.length+'">0</div><div class="k">'+T("notesT")+'</div></div>'+
     '<div class="stat"><div class="v" data-count="'+S.projects.length+'">0</div><div class="k">'+T("projects")+'</div></div>'+
     '<div class="stat"><div class="v" data-count="'+S.bookmarks.length+'">0</div><div class="k">'+T("bookmarks")+'</div></div>'+
     '<div class="stat"><div class="v" data-count="'+hrs+'" data-suffix="h">0</div><div class="k">'+T("hoursT")+'</div></div>'+
   '</div>';
  h+='<div class="eyebrow">'+T("settings")+'</div>';
  h+='<div class="card"><div class="set-row"><span class="k">'+T("language")+'</span><div class="seg"><button class="'+(S.lang==="ar"?"on":"")+'" data-a="lang" data-l="ar">عربي</button><button class="'+(S.lang==="en"?"on":"")+'" data-a="lang" data-l="en">EN</button></div></div>'+
     '<div class="set-row"><span class="k">'+T("theme")+'</span><div class="seg"><button class="'+(S.theme==="dark"?"on":"")+'" data-a="theme" data-t="dark">'+T("dark")+'</button><button class="'+(S.theme==="light"?"on":"")+'" data-a="theme" data-t="light">'+T("light")+'</button></div></div>'+
     '<div class="set-row" style="border:none"><span class="k">'+T("mobileView")+' / '+T("desktopView")+'</span><div class="seg"><button class="'+(S.uiView==="mobile"?"on":"")+'" data-a="setView" data-vw="mobile">'+T("mobileView")+'</button><button class="'+(S.uiView==="desktop"?"on":"")+'" data-a="setView" data-vw="desktop">'+T("desktopView")+'</button></div></div><div class="set-row" style="border:none"><span class="k">'+T("notifs")+'</span><button class="link" data-a="toggleNotif">'+(S.notifOn?"🔔":"🔕")+'</button></div></div>';
  h+='<div class="eyebrow">☁ '+T("account")+'</div>'+accountCard();
  h+='<button class="btn btn-ghost btn-block" data-a="export" style="margin-top:10px">'+T("exportD")+'</button>';
  h+='<button class="btn btn-ghost btn-block" data-a="clear" style="color:var(--danger);margin-top:8px">'+T("clearD")+'</button>';
  return h;
}
var Focus={t:0,run:false,iv:null,
  fmt:function(){var m=Math.floor(this.t/60),ss=this.t%60;return (m<10?"0":"")+m+":"+(ss<10?"0":"")+ss},
  paint:function(){var c=document.getElementById("focusClock");if(c)c.textContent=this.fmt();var b=document.getElementById("focusToggle");if(b)b.textContent=this.run?T("pause"):T("start")},
  tick:function(){this.t++;this.paint()},
  start:function(){if(this.run)return;this.run=true;var self=this;this.iv=setInterval(function(){self.tick()},1000);this.paint()},
  stop:function(){this.run=false;if(this.iv){clearInterval(this.iv);this.iv=null}this.paint()},
  toggle:function(){this.run?this.stop():this.start()},
  reset:function(){this.t=0;this.paint()},
  mount:function(){this.paint()}
};
function vFocus(){
  var p=project(S.activePid);if(!p)return '<div class="empty" style="padding:40px">—</div>';
  var s=(p.sessions&&p.sessions.length)?p.sessions[p.sessions.length-1]:null;
  var h='<div class="focus-wrap">';
  h+='<div class="focus-eyebrow">'+T("focusMode")+'</div>';
  h+='<h1 class="focus-title">'+esc(p.name)+'</h1>';
  if(p.nextAction)h+='<div class="focus-next">▸ '+esc(p.nextAction)+'</div>';
  h+='<div class="focus-clock" id="focusClock">00:00</div>';
  h+='<div class="focus-ctrls"><button class="btn btn-primary" id="focusToggle" data-a="focusToggle">'+T("start")+'</button><button class="btn btn-ghost" data-a="focusReset">'+T("reset")+'</button></div>';
  if(s&&s.summary)h+='<div class="focus-summary">'+esc(s.summary)+'</div>';
  h+='<div class="focus-exit"><button class="btn btn-ghost" data-a="snapshot" data-id="'+p.id+'">'+T("saveSnap")+'</button><button class="btn btn-ghost" data-a="back">'+T("exit")+'</button></div>';
  return h+'</div>';
}
function itemTime(x){return (x&&(x.updatedAt||x.at||x.createdAt||x.startedAt))||0;}
function tomb(ids){S._deleted=S._deleted||{};(Array.isArray(ids)?ids:[ids]).forEach(function(id){if(id)S._deleted[id]=Date.now();});}
function mergeColl(a,b,tm){
  var byId={},order=[];
  function add(arr){(arr||[]).forEach(function(it){if(!it||!it.id)return;var ex=byId[it.id];if(!ex){byId[it.id]=it;order.push(it.id);}else if(itemTime(it)>=itemTime(ex)){byId[it.id]=it;}});}
  add(a);add(b);
  return order.map(function(id){return byId[id];}).filter(function(it){var d=tm[it.id];return !(d&&d>=itemTime(it));});
}
function mergeStates(local,remote){
  if(!remote)return local;
  var out={},lNew=(local._localAt||0)>=(remote._localAt||0),tm={},mm,id,key;
  [local._deleted||local.deleted||{},remote.deleted||remote._deleted||{}].forEach(function(m){for(id in m){if(!tm[id]||m[id]>tm[id])tm[id]=m[id];}});
  ["lang","theme","mode"].forEach(function(p){var v=lNew?local[p]:remote[p];if(v==null)v=(local[p]!=null?local[p]:remote[p]);out[p]=v;});
  ["projects","tasks","notes","bookmarks","courses","prompts","servers","repos","decisions","inbox"].forEach(function(c){out[c]=mergeColl(local[c],remote[c],tm);});
  out.journal={};var lj=local.journal||{},rj=remote.journal||{};for(key in lj)out.journal[key]=lj[key];for(key in rj){var rt=(rj[key]&&rj[key].updatedAt)||0,ltt=(lj[key]&&lj[key].updatedAt)||0;if(!out.journal[key]||rt>ltt)out.journal[key]=rj[key];}
  out._deleted=tm;out.deleted=tm;
  out._localAt=Math.max(local._localAt||0,remote._localAt||0);
  return out;
}
var _undo=null;
function pushUndo(){try{_undo=JSON.stringify(S);}catch(e){_undo=null;}}
function undoLast(){if(!_undo)return;try{var d=JSON.parse(_undo);var k;for(k in S){if(Object.prototype.hasOwnProperty.call(S,k))delete S[k];}for(k in d){if(Object.prototype.hasOwnProperty.call(d,k))S[k]=d[k];}_undo=null;save();render();toast(T("restored"));}catch(e){}}
function toastAction(msg,label,fn){
  TT.innerHTML="";var sp=document.createElement("span");sp.textContent=msg;TT.appendChild(sp);
  if(label&&fn){var b=document.createElement("button");b.className="toast-btn";b.textContent=label;b.onclick=function(){fn();TT.classList.remove("show");};TT.appendChild(b);}
  TT.classList.add("show");clearTimeout(ttimer);ttimer=setTimeout(function(){TT.classList.remove("show")},5000);
}
function dueBucket(ts){if(!ts)return"none";var t=startOfDay(Date.now()),d=startOfDay(ts),day=86400000;return d===t?"today":d===t+day?"tomorrow":"none";}
function inboxCount(){var due=S.tasks.filter(function(t){return !t.done&&t.due&&startOfDay(t.due)<=startOfDay(Date.now())}).length;return (S.inbox?S.inbox.length:0)+aiSuggestions().length+due;}
function delBtn(type,id){return '<button class="delx" data-a="delItem" data-t="'+type+'" data-id="'+id+'" title="'+T("delete")+'">✕</button>';}
function sheetEditTask(id){
  var t=S.tasks.find(function(x){return x.id===id});if(!t)return;
  openSheet('<h3>'+T("editTask")+'</h3>'+
    '<div class="field"><input id="etTitle" value="'+esc(t.title)+'"></div>'+
    '<div class="field"><label>'+T("priority")+'</label><div class="chips" id="etPrio">'+["high","med","low"].map(function(p){return '<button class="chip'+(t.priority===p?" on":"")+'" data-p="'+p+'">'+T(p==="high"?"pHigh":p==="med"?"pMed":"pLow")+'</button>'}).join("")+'</div></div>'+
    '<div class="field"><label>'+T("due")+'</label><div class="chips" id="etDue">'+[["today",T("dueToday")],["tomorrow",T("dueTomorrow")],["none","—"]].map(function(d){return '<button class="chip'+(dueBucket(t.due)===d[0]?" on":"")+'" data-d="'+d[0]+'">'+d[1]+'</button>'}).join("")+'</div></div>'+
    '<div class="sheet-actions"><button class="btn btn-ghost" data-a="delTask" data-id="'+t.id+'" style="flex:0;color:var(--danger)">'+T("delete")+'</button><button class="btn btn-primary" data-a="doEditTask" data-id="'+t.id+'">'+T("save")+'</button></div>');
  SH._eprio=t.priority||"med";SH._edue=dueBucket(t.due);
  document.getElementById("etPrio").addEventListener("click",function(e){var b=e.target.closest(".chip");if(!b)return;[].forEach.call(this.children,function(c){c.classList.remove("on")});b.classList.add("on");SH._eprio=b.getAttribute("data-p")});
  document.getElementById("etDue").addEventListener("click",function(e){var b=e.target.closest(".chip");if(!b)return;[].forEach.call(this.children,function(c){c.classList.remove("on")});b.classList.add("on");SH._edue=b.getAttribute("data-d")});
  setTimeout(function(){var e=document.getElementById("etTitle");if(e)e.focus()},250);
}
function sheetEditProject(id){
  var p=project(id);if(!p)return;var colors=["#7B7BF0","#3FBE86","#E2A43A","#F26761","#36D6E8","#F472B6"];
  openSheet('<h3>'+T("editProject")+'</h3>'+
    '<div class="field"><label>'+T("noteTitle")+'</label><input id="epName" value="'+esc(p.name)+'"></div>'+
    '<div class="field"><label>'+T("version")+'</label><input id="epVer" value="'+esc(p.version||"")+'"></div>'+
    '<div class="field"><label>'+T("subtitle")+'</label><input id="epSub" value="'+esc(p.subtitle||"")+'"></div>'+
    '<div class="field"><label>'+T("statusL")+'</label><div class="chips" id="epStatus">'+["active","paused","done"].map(function(st){return '<button class="chip'+(p.status===st?" on":"")+'" data-s="'+st+'">'+T(st==="done"?"dstatus":st)+'</button>'}).join("")+'</div></div>'+
    '<div class="field"><label>'+T("color")+'</label><div class="chips" id="epColor">'+colors.map(function(c){return '<button class="colordot'+(p.color===c?" on":"")+'" data-c="'+c+'" style="background:'+c+'"></button>'}).join("")+'</div></div>'+
    '<div class="sheet-actions"><button class="btn btn-ghost" data-a="closeSheet">'+T("cancel")+'</button><button class="btn btn-primary" data-a="doEditProject" data-id="'+p.id+'">'+T("save")+'</button></div>');
  SH._est=p.status;SH._ec=p.color||"#7B7BF0";
  document.getElementById("epStatus").addEventListener("click",function(e){var b=e.target.closest(".chip");if(!b)return;[].forEach.call(this.children,function(c){c.classList.remove("on")});b.classList.add("on");SH._est=b.getAttribute("data-s")});
  document.getElementById("epColor").addEventListener("click",function(e){var b=e.target.closest(".colordot");if(!b)return;[].forEach.call(this.children,function(c){c.classList.remove("on")});b.classList.add("on");SH._ec=b.getAttribute("data-c")});
}
function cleanState(){var o={},k;for(k in S){if(!Object.prototype.hasOwnProperty.call(S,k))continue;if(k.charAt(0)==="_")continue;if(k==="view"||k==="activePid"||k==="back"||k==="uiView")continue;o[k]=S[k];}o.deleted=S._deleted||{};o._localAt=S._localAt||Date.now();return o;}
function syncSig(st){
  function coll(a){return (a||[]).slice().sort(function(x,y){return (x.id<y.id?-1:x.id>y.id?1:0)}).map(function(i){return i.id+":"+itemTime(i)});}
  var o={l:st.lang,t:st.theme,m:st.mode,j:{},d:st.deleted||st._deleted||{}},jj=st.journal||{};
  ["projects","tasks","notes","bookmarks","courses","prompts","servers","repos","decisions","inbox"].forEach(function(c){o[c]=coll(st[c]);});
  Object.keys(jj).sort().forEach(function(k){o.j[k]=(jj[k]&&jj[k].updatedAt)||1;});
  return JSON.stringify(o);
}
function applyState(merged,doPush){
  if(!merged)return;
  ["lang","theme","mode","projects","tasks","notes","bookmarks","courses","prompts","servers","repos","decisions","inbox","journal"].forEach(function(k){if(merged[k]!==undefined)S[k]=merged[k];});
  S._deleted=merged._deleted||merged.deleted||{};S._localAt=merged._localAt||Date.now();
  if(!S.mode)S.mode="advanced";
  ["projects","tasks","notes","bookmarks","courses","prompts","servers","repos","decisions"].forEach(function(kk){if(!Array.isArray(S[kk]))S[kk]=[]});
  if(!S.journal)S.journal={};
  S.projects.forEach(function(p){p.commits=p.commits||[];p.blockers=p.blockers||[];(p.sessions||[]).forEach(function(sx){sx.accomplishments=sx.accomplishments||[]})});
  if(doPush){save();}else{try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){}}
  render();
}
function adoptRemote(data){ if(!data)return; applyState(mergeStates(cleanState(),data),true); }
function accountCard(){
  if(!window.CxSync||!CxSync.configured()) return '<div class="card"><div class="ic-s">'+T("syncOff")+'</div></div>';
  var u=CxSync.user&&CxSync.user();
  if(u) return '<div class="card"><div class="set-row"><span class="k">'+esc(u.email||T("account"))+'</span><span class="ic-s">'+T("syncStatus")+': '+esc(CxSync.status())+'</span></div><button class="btn btn-ghost btn-block" data-a="signOut" style="margin-top:10px">'+T("signOut")+'</button></div>';
  return '<div class="card"><div class="field"><input id="authEmail" type="email" placeholder="'+T("email")+'" autocomplete="username"></div><div class="field"><input id="authPass" type="password" placeholder="'+T("password")+'" autocomplete="current-password"></div><div class="row" style="gap:8px"><button class="btn btn-primary" data-a="signIn" style="flex:1">'+T("signIn")+'</button><button class="btn btn-ghost" data-a="signUp" style="flex:1">'+T("signUp")+'</button></div><div class="ic-s" style="margin-top:10px">'+T("syncHint")+'</div></div>';
}
function render(){
  normalizeView();
  if(!S.uiView)S.uiView=(window.innerWidth>=1024?"desktop":"mobile");
  document.documentElement.setAttribute("dir",S.lang==="ar"?"rtl":"ltr");
  document.documentElement.setAttribute("lang",S.lang);
  document.documentElement.setAttribute("data-theme",S.theme);
  document.documentElement.setAttribute("data-view",S.uiView);
  applyGlow();
  renderBar();renderMain();renderNav();renderDrawer();
  tagReveals();countUp();animateRings();if(S.view==="focus")Focus.mount();
  if(window.lucide&&lucide.createIcons){try{lucide.createIcons()}catch(e){}}
}
function renderDrawer(){
  var d=document.getElementById("drawerBack");if(!d)return;
  var adv=S.mode==="advanced",cur=S.view;
  function link(v,ic,label){return '<button class="dlink '+(cur===v?"on":"")+'" data-a="drawerGo" data-v="'+v+'">'+svg(ic)+T(label)+'</button>'}
  var body='<div class="brand">'+LOGO+T("app")+'</div>'+
    '<div class="modeswitch">'+
      '<button class="'+(!adv?"on":"")+'" data-a="setMode" data-m="quick">'+T("quick")+'<span class="d">'+T("simpleTasks")+'</span></button>'+
      '<button class="'+(adv?"on":"")+'" data-a="setMode" data-m="advanced">'+T("advanced")+'<span class="d">'+T("fullSystem")+'</span></button>'+
    '</div>'+
    '<div class="viewswitch">'+
      '<button class="'+(S.uiView==="mobile"?"on":"")+'" data-a="setView" data-vw="mobile">'+svg(IC.smartphone)+T("mobileView")+'</button>'+
      '<button class="'+(S.uiView==="desktop"?"on":"")+'" data-a="setView" data-vw="desktop">'+svg(IC.monitor)+T("desktopView")+'</button>'+
    '</div>';
  if(adv){
    body+='<div class="dsec">'+T("workspaceSec")+'</div>'+link("home",IC.home,"home")+link("projects",IC.folder,"projects")+link("tasks",IC.check,"tasks")+link("journal",IC.cal,"journal")+link("timeline",IC.clock,"timeline");
    body+='<div class="dsec">'+T("knowledge")+'</div>'+link("knowledge",IC.book,"knowledge")+link("courses",IC.cap,"courses")+link("bookmarks",IC.mark,"bookmarks")+link("prompts",IC.spark,"promptLib");
    body+='<div class="dsec">'+T("systemSec")+'</div>'+link("servers",IC.server,"servers")+link("repos",IC.git,"repositories")+link("assistant",IC.spark,"aiAssistant")+link("inbox",IC.bell,"inboxT")+link("profile",IC.user,"profileT")+link("search",IC.search,"searchLabel")+link("settings",IC.settings,"settings");
    var pins=S.projects.filter(function(p){return p.pinned});
    if(pins.length)body+='<div class="dsec">'+T("pinned")+'</div>'+pins.map(function(p){return '<button class="dlink" data-a="drawerOpen" data-id="'+p.id+'"><span class="pindot" style="background:'+(p.color||"var(--accent)")+'"></span>'+esc(p.name)+'</button>'}).join("");
  }else{
    body+='<div class="dsec">'+T("navigate")+'</div>'+link("qtoday",IC.home,"qToday")+link("qtasks",IC.check,"qTasks")+link("search",IC.search,"searchLabel")+link("settings",IC.settings,"settings");
  }
  body+='<div class="foot"><button class="btn btn-ghost btn-sm" data-a="quickTheme" style="flex:1">'+(S.theme==="dark"?"☾ "+T("dark"):"☀ "+T("light"))+'</button><button class="btn btn-ghost btn-sm" data-a="quickLang" style="flex:0;min-width:56px">'+(S.lang==="ar"?"EN":"عربي")+'</button></div>';
  d.innerHTML='<div class="drawer" id="drawer">'+body+'</div>';
}
function renderBar(){
  var b=document.getElementById("bar"),v=S.view,html="";
  if(v==="project"||v==="search"||v==="settings"||v==="focus"){
    var title=v==="search"?T("searchLabel"):v==="settings"?T("settings"):(project(S.activePid)?project(S.activePid).name:"");
    html='<button class="ibtn backbtn" data-a="back">'+svg(IC.back,"flip")+'</button>'+
         '<div class="title" style="font-size:17px">'+esc(title)+'</div>';
  }else{
    var sp='';
    if(S.mode==="advanced")sp+='<button class="ibtn askbtn" data-a="go" data-v="assistant">'+svg(IC.spark)+'</button>';
    var _ic=inboxCount();sp+='<button class="ibtn" data-a="go" data-v="inbox" style="position:relative">'+svg(IC.bell)+(_ic?'<span class="badge-dot">'+(_ic>9?"9+":_ic)+'</span>':"")+'</button>';
    sp+='<button class="ibtn" data-a="go" data-v="search">'+svg(IC.search)+'</button>';
    html='<button class="ibtn" data-a="menu">'+svg(IC.menu)+'</button>'+
      '<div class="title">'+LOGO+T("app")+'</div>'+
      '<span class="modepill" data-a="menu">'+T(S.mode==="advanced"?"advanced":"quick")+'</span>'+
      '<div class="sp">'+sp+'</div>';
  }
  b.innerHTML=html;
}
function renderNav(){
  var n=document.getElementById("nav"),v=S.view;
  if(v==="focus"){n.innerHTML="";return;}
  function tab(view,ic,label){var on=(v===view||(view==="projects"&&v==="project"))?"on":"";
    return '<button class="tab '+on+'" data-a="go" data-v="'+view+'">'+svg(ic)+'<span>'+T(label)+'</span></button>'}
  if(S.mode==="quick"){
    n.innerHTML=
      tab("qtoday",IC.home,"qToday")+
      '<button class="fab" data-a="capture">'+svg(IC.plus)+'</button>'+
      tab("qtasks",IC.check,"qTasks");
  }else{
    n.innerHTML=
      tab("home",IC.home,"home")+
      tab("projects",IC.folder,"projects")+
      '<button class="fab" data-a="capture">'+svg(IC.plus)+'</button>'+
      tab("tasks",IC.check,"tasks")+
      tab("journal",IC.cal,"journal");
  }
}
function renderMain(){
  var m=document.getElementById("main");
  var v=S.view;
  m.innerHTML=({qtoday:vQuickToday,qtasks:vQuickTasks,home:vHome,projects:vProjects,project:vProject,tasks:vTasks,journal:vJournal,search:vSearch,settings:vSettings,timeline:vTimeline,knowledge:vKnowledge,bookmarks:vBookmarks,courses:vCourses,prompts:vPrompts,servers:vServers,repos:vRepos,assistant:vAssistant,focus:vFocus,inbox:vInbox,profile:vProfile}[v]||vQuickToday)();
  m.scrollTop=0;
}

/* ---- Quick mode ---- */
function quickAddBar(){
  return '<div class="qadd"><input id="qAdd" placeholder="'+T("quickAdd")+'" autocomplete="off"><button data-a="quickAddTask" aria-label="add">'+svg(IC.plus)+'</button></div>';
}
function vQuickToday(){
  var withSess=S.projects.filter(function(p){return p.sessions&&p.sessions.length}).sort(function(a,b){return(b.lastWorkedAt||0)-(a.lastWorkedAt||0)});
  var h='<div class="greet">'+T(greetKey())+'</div><div class="sub">'+T("simpleTasks")+'</div>';
  if(withSess.length){
    var p=withSess[0],s=p.sessions[p.sessions.length-1];
    h+='<div class="qstrip tap" data-a="open" data-id="'+p.id+'"><div class="ico" style="width:38px;height:38px;border-radius:10px;background:var(--bg-elevated);display:grid;place-items:center;color:var(--accent)">◈</div>'+
       '<div class="body"><div class="nm">'+esc(p.name)+'</div><div class="nx">▸ '+esc(s.nextStep||p.nextAction||"—")+'</div></div>'+
       '<button class="btn btn-primary btn-sm" data-a="resume" data-id="'+p.id+'">'+T("continueW")+'</button></div>';
  }
  h+=quickAddBar();
  var list=S.tasks.filter(function(t){return !t.done}).sort(function(a,b){return(b.isNext-a.isNext)||(a.priority-b.priority)});
  h+='<div class="eyebrow">'+T("qTasks")+' <span class="cnt">'+list.length+'</span></div>';
  if(list.length){list.slice(0,60).forEach(function(t){var p=project(t.projectId);
    h+='<div class="item task"><button class="check" data-a="toggle" data-id="'+t.id+'">'+svg(IC.check)+'</button><div class="body"><div class="t">'+esc(t.title)+'</div>'+(p?'<div class="m">'+esc(p.name)+'</div>':'')+'</div>'+(t.isNext?'<span class="naflag">'+T("nextStep")+'</span>':'')+'</div>';
  });}else{h+='<div class="empty" style="padding:24px"><div class="big">✓</div>'+T("tasksEmpty")+'</div>';}
  return h;
}
function vQuickTasks(){
  var h='<div class="greet">'+T("qTasks")+'</div><div style="height:12px"></div>'+quickAddBar();
  var filt=S._taskFilter||"active";
  h+='<div class="seg" style="margin:0 0 12px;width:fit-content"><button class="'+(filt==="active"?"on":"")+'" data-a="tfilter" data-f="active">'+T("activeOnly")+'</button><button class="'+(filt==="all"?"on":"")+'" data-a="tfilter" data-f="all">'+T("allTasks")+'</button></div>';
  var list=S.tasks.filter(function(t){return filt==="all"?true:!t.done}).sort(function(a,b){return(b.isNext-a.isNext)||(a.priority-b.priority)});
  if(!list.length)return h+'<div class="empty"><div class="big">✓</div>'+T("tasksEmpty")+'</div>';
  list.forEach(function(t){var p=project(t.projectId);
    h+='<div class="item task '+(t.done?"done":"")+'"><button class="check '+(t.done?"on":"")+'" data-a="toggle" data-id="'+t.id+'">'+svg(IC.check)+'</button><div class="body"><div class="t">'+esc(t.title)+'</div>'+((p||t.due)?'<div class="m">'+(p?esc(p.name):'')+(t.due?(p?' · ':'')+T("due")+' '+dueLabel(t.due):'')+'</div>':'')+'</div>'+prioPill(t.priority)+(t.isNext?'<span class="naflag">'+T("nextStep")+'</span>':'')+'</div>';
  });
  return h;
}

/* ---- Projects ---- */
function vProjects(){
  var sel=S._sel&&S._selType==="projects";
  var h='<div class="greet" style="display:flex;align-items:center;justify-content:space-between"><span>'+T("projects")+'</span>'+(S.projects.length?'<button class="btn btn-ghost btn-sm" data-a="selMode" data-t="projects">'+(sel?T("selDone"):T("select"))+'</button>':'')+'</div>';
  var filt=S._pfilter||"all";
  h+='<div class="opts"><div class="seg">'+["all","active","paused","done"].map(function(f){return '<button class="'+(filt===f?"on":"")+'" data-a="pfilter" data-f="'+f+'">'+T(f==="all"?"allTasks":(f==="done"?"dstatus":f))+'</button>'}).join("")+'</div></div>';
  h+='<button class="btn btn-ghost btn-block" data-a="newProject" style="margin-bottom:12px">'+svg(IC.plus,"")+' '+T("newProject")+'</button>';
  if(!S.projects.length)return h+'<div class="empty"><div class="big">◈</div>'+T("projectsEmpty")+'</div>';
  if(sel)h+=bulkBar(true,false);
  var list=S.projects.slice().sort(function(a,b){return(b.lastWorkedAt||b.createdAt)-(a.lastWorkedAt||a.createdAt)});
  if(filt!=="all")list=list.filter(function(p){return p.status===filt});
  if(!list.length)return h+'<div class="empty" style="padding:26px">'+T("noItems")+'</div>';
  var selIds=S._selIds||[];
  list.forEach(function(p){var pr=progressOf(p);
    if(sel){var on=selIds.indexOf(p.id)>=0;
      h+='<div class="card '+(on?"selon":"")+'" data-a="pick" data-id="'+p.id+'" style="display:flex;gap:12px;align-items:center"><button class="pickbox '+(on?"on":"")+'">'+(on?svg(IC.check):"")+'</button><div style="flex:1;min-width:0"><div class="row between"><span style="font-weight:600;color:var(--c-ink-900)">'+(p.pinned?"📌 ":"")+esc(p.name)+'</span><span class="pill '+p.status+'">'+T(p.status==="done"?"dstatus":p.status)+'</span></div><div class="prog"><i style="width:'+pr+'%"></i></div></div></div>';
    }else{
      h+='<div class="card tap" data-a="open" data-id="'+p.id+'"><div class="row between"><div class="row" style="gap:9px"><span style="color:'+(p.color||"var(--accent)")+'">'+esc(p.icon||"◈")+'</span><span style="font-weight:600;color:var(--c-ink-900)">'+(p.pinned?"📌 ":"")+esc(p.name)+'</span></div><span class="pill '+p.status+'">'+T(p.status==="done"?"dstatus":p.status)+'</span></div>'+(p.nextAction?'<div style="font-size:13px;color:var(--c-ink-500);margin-top:8px">▸ '+esc(p.nextAction)+'</div>':'')+'<div class="prog"><i style="width:'+pr+'%"></i></div><div class="m" style="font-family:var(--mono);font-size:11px;color:var(--c-ink-300);margin-top:8px">'+pr+'% · '+T("lastWorked")+' '+rel(p.lastWorkedAt||p.createdAt)+'</div></div>';
    }
  });
  return h;
}

/* ---- Project detail ---- */
function vProject(){
  var p=project(S.activePid);if(!p)return vProjects();
  var pr=progressOf(p);
  var ts=S.tasks.filter(function(t){return t.projectId===p.id});
  var ns=S.notes.filter(function(n){return n.projectId===p.id});
  var last=p.sessions&&p.sessions.length?p.sessions[p.sessions.length-1]:null;
  var h="";
  // header
  h+='<div class="row between"><div class="row" style="gap:10px"><span style="color:var(--accent);font-size:20px">'+esc(p.icon||"◈")+'</span><span style="font-weight:700;font-size:20px;color:var(--c-ink-900)">'+esc(p.name)+'</span></div>'+
     '<select class="pill '+p.status+'" data-a="status" style="border:none;padding:4px 8px;font-family:var(--mono)">'+
       ['active','paused','done'].map(function(s){return '<option value="'+s+'" '+(p.status===s?"selected":"")+'>'+T(s==="done"?"dstatus":s)+'</option>'}).join("")+'</select></div>';
  h+='<div class="prog" style="margin-top:12px"><i style="width:'+pr+'%"></i></div><div class="m" style="font-family:var(--mono);font-size:11px;color:var(--c-ink-300);margin-top:6px">'+pr+'%'+(p.stage?' · '+esc(p.stage):'')+'</div>';
  // resume / start
  if(last){
    h+='<div class="resume" style="margin-top:16px"><div class="lbl">'+T("youWere")+'</div><div class="were">'+esc(last.summary||last.goal||"—")+'</div><div class="lbl">'+T("nextStep")+'</div><div class="next"><span class="dot">▸</span> '+esc(last.nextStep||"—")+'</div>'+
      '<div class="row" style="gap:10px"><button class="btn btn-primary" style="flex:1" data-a="resume" data-id="'+p.id+'">'+T("continueW")+'</button>'+
      '<button class="btn btn-ghost" style="flex:1" data-a="snapshot" data-id="'+p.id+'">'+T("endSession")+'</button></div></div>';
  }else{
    h+='<button class="btn btn-primary btn-block" style="margin-top:16px" data-a="snapshot" data-id="'+p.id+'">'+T("startSession")+'</button>';
  }
  // next action
  h+='<div class="eyebrow">'+T("nextAction")+'</div>';
  h+='<div class="item tap" data-a="editNext" data-id="'+p.id+'"><div class="ico">▸</div><div class="body"><div class="t">'+(p.nextAction?esc(p.nextAction):'<span style="color:var(--c-ink-300)">'+T("setNext")+'</span>')+'</div></div></div>';
  // tasks
  h+='<div class="eyebrow">'+T("tasksT")+' <span class="cnt">'+ts.filter(function(t){return t.done}).length+'/'+ts.length+'</span></div>';
  ts.forEach(function(t){h+=taskRow(t)});
  h+='<button class="btn btn-ghost btn-sm btn-block" data-a="addTask" data-id="'+p.id+'" style="margin-top:2px">'+svg(IC.plus,"")+' '+T("addTask")+'</button>';
  // notes
  h+='<div class="eyebrow">'+T("notesT")+'</div>';
  if(ns.length){ns.forEach(function(n){
    h+='<div class="item tap" data-a="openNote" data-id="'+n.id+'"><div class="ico">📝</div><div class="body"><div class="t">'+esc(n.title||"—")+'</div><div class="m">'+rel(n.updatedAt||n.createdAt)+'</div></div>'+svg(IC.chev,"flip go")+'</div>';
  });}
  h+='<button class="btn btn-ghost btn-sm btn-block" data-a="addNote" data-id="'+p.id+'">'+svg(IC.plus,"")+' '+T("addNote")+'</button>';
  // blockers
  h+='<div class="eyebrow">'+T("blockersT")+(p.blockers&&p.blockers.length?' <span class="cnt">'+p.blockers.length+'</span>':'')+'</div>';
  (p.blockers||[]).forEach(function(b){h+='<div class="item"><div class="ico" style="color:var(--danger)">⚠</div><div class="body"><div class="t" style="font-weight:400">'+esc(b)+'</div></div></div>'});
  h+='<button class="btn btn-ghost btn-sm btn-block" data-a="addBlocker">'+svg(IC.plus,"")+' '+T("addBlocker")+'</button>';
  // decisions
  var decs=S.decisions.filter(function(d){return d.projectId===p.id});
  h+='<div class="eyebrow">'+T("recentDecisions")+'</div>';
  decs.forEach(function(d){h+='<div class="item"><div class="ico">⚖</div><div class="body"><div class="t" style="font-weight:400">'+esc(d.text)+'</div>'+(d.reason?'<div class="m">'+esc(d.reason)+'</div>':'')+'</div></div>'});
  h+='<button class="btn btn-ghost btn-sm btn-block" data-a="logDecision">'+svg(IC.plus,"")+' '+T("logDecision")+'</button>';
  // commits
  h+='<div class="eyebrow">'+T("recentCommits")+'</div>';
  (p.commits||[]).slice(0,5).forEach(function(c){h+='<div class="sig" style="background:var(--bg-panel);border:1px solid var(--border);border-radius:var(--r-md);padding:11px 13px;margin-bottom:8px"><span class="mono2">'+esc(c.hash)+'</span><span class="sigt">'+esc(c.msg)+'</span><span class="sigw">'+rel(c.at)+'</span></div>'});
  h+='<button class="btn btn-ghost btn-sm btn-block" data-a="addCommit">'+svg(IC.plus,"")+' '+T("addCommit")+'</button>';
  // sessions
  if(p.sessions&&p.sessions.length){
    h+='<div class="eyebrow">'+T("sessionsT")+'</div>';
    p.sessions.slice().reverse().forEach(function(s){
      h+='<div class="item"><div class="ico">⧗</div><div class="body"><div class="t" style="font-weight:400">'+esc(s.summary||s.goal||"—")+'</div><div class="m">'+rel(s.endedAt||s.startedAt)+' · ▸ '+esc(s.nextStep||"—")+'</div></div></div>';
    });
  }
  // delete
  h+='<button class="btn btn-ghost btn-block" data-a="editProject" data-id="'+p.id+'" style="margin-top:16px">'+T("editProject")+'</button>';
  h+='<button class="btn btn-ghost btn-block" data-a="delProject" data-id="'+p.id+'" style="margin-top:8px;color:var(--danger);border-color:transparent">'+T("delete")+'</button>';
  return h;
}
function taskRow(t){
  return '<div class="item task '+(t.done?"done":"")+'"><button class="check '+(t.done?"on":"")+'" data-a="toggle" data-id="'+t.id+'">'+svg(IC.check)+'</button>'+
    '<div class="body" data-a="toggleNext" data-id="'+t.id+'"><div class="t">'+esc(t.title)+'</div></div>'+
    (t.isNext?'<span class="naflag">'+T("nextStep")+'</span>':'')+'</div>';
}

/* ---- Tasks ---- */
function selT(){return S._sel&&(S._selType==="tasks"||!S._selType)}
function bulkBar(withPin,withDone){
  var n=(S._selIds||[]).length,h='<div class="bulkbar"><span class="cntlite">'+n+' '+T("selected")+'</span><div class="row" style="gap:8px">';
  if(withDone)h+='<button class="btn btn-ghost btn-sm" data-a="bulkDone">'+T("complete")+'</button>';
  if(withPin)h+='<button class="btn btn-ghost btn-sm" data-a="bulkPin">'+T("pin")+'</button>';
  return h+'<button class="btn btn-ghost btn-sm" data-a="bulkDel" style="color:var(--danger)">'+T("delete")+'</button></div></div>';
}
function vTasks(){
  var h='<div class="greet between2" style="display:flex;align-items:center;justify-content:space-between"><span>'+T("tasks")+'</span>'+
    '<button class="btn btn-ghost btn-sm" data-a="selMode" data-t="tasks">'+(selT()?T("selDone"):T("select"))+'</button></div>';
  var filt=S._taskFilter||"active",sort=S._sort||"prio";
  h+='<div class="opts">'+
    '<div class="seg"><button class="'+(filt==="active"?"on":"")+'" data-a="tfilter" data-f="active">'+T("activeOnly")+'</button><button class="'+(filt==="all"?"on":"")+'" data-a="tfilter" data-f="all">'+T("allTasks")+'</button></div>'+
    '<div class="seg"><button class="'+(sort==="prio"?"on":"")+'" data-a="tsort" data-s="prio">'+T("byPrio")+'</button><button class="'+(sort==="due"?"on":"")+'" data-a="tsort" data-s="due">'+T("byDue")+'</button><button class="'+(sort==="new"?"on":"")+'" data-a="tsort" data-s="new">'+T("byNew")+'</button></div>'+
  '</div>';
  var list=S.tasks.filter(function(t){return filt==="all"?true:!t.done});
  list.sort(function(a,b){
    if(sort==="due")return (a.due||9e15)-(b.due||9e15);
    if(sort==="new")return (b.createdAt||0)-(a.createdAt||0);
    return (b.isNext-a.isNext)||(prioRank(b.priority)-prioRank(a.priority));
  });
  var selIds=S._selIds||[];
  if(selT()){
    h+='<div class="bulkbar"><span class="cntlite">'+selIds.length+' '+T("selected")+'</span>'+
       '<div class="row" style="gap:8px"><button class="btn btn-ghost btn-sm" data-a="bulkDone">✓ '+T("complete")+'</button>'+
       '<button class="btn btn-ghost btn-sm" data-a="bulkDel" style="color:var(--danger)">🗑 '+T("delete")+'</button></div></div>';
  }
  if(!list.length)return h+'<div class="empty"><div class="big">✓</div>'+T("tasksEmpty")+'</div>';
  list.forEach(function(t){
    var p=project(t.projectId),on=selIds.indexOf(t.id)>=0;
    if(selT()){
      h+='<div class="item task '+(on?"selon":"")+'" data-a="pick" data-id="'+t.id+'"><button class="pickbox '+(on?"on":"")+'">'+(on?svg(IC.check):"")+'</button>'+
        '<div class="body"><div class="t">'+esc(t.title)+'</div>'+((p||t.due)?'<div class="m">'+(p?esc(p.name):'')+(t.due?(p?' · ':'')+T("due")+' '+dueLabel(t.due):'')+'</div>':'')+'</div>'+prioPill(t.priority)+'</div>';
    }else{
      h+='<div class="item task '+(t.done?"done":"")+'"><button class="check '+(t.done?"on":"")+'" data-a="toggle" data-id="'+t.id+'">'+svg(IC.check)+'</button>'+
        '<div class="body" data-a="editTask" data-id="'+t.id+'"><div class="t">'+esc(t.title)+'</div>'+((p||t.due)?'<div class="m">'+(p?esc(p.name):'')+(t.due?(p?' · ':'')+T("due")+' '+dueLabel(t.due):'')+'</div>':'')+'</div>'+prioPill(t.priority)+
        (t.isNext?'<span class="naflag">'+T("nextStep")+'</span>':'')+'</div>';
    }
  });
  return h;
}

/* ---- Journal ---- */
function vJournal(){
  var tk=todayKey(),j=S.journal[tk]||{};
  var h='<div class="greet">'+T("journal")+'</div><div class="sub">'+new Date().toLocaleDateString(S.lang==="ar"?"ar-EG":"en",{weekday:"long",day:"numeric",month:"long"})+'</div>';
  var moods=[["great","😄"],["ok","🙂"],["meh","😐"],["low","😫"]];
  h+='<div class="eyebrow">'+T("mood")+'</div><div class="chips">'+moods.map(function(m){return '<button class="chip moodchip'+(j.mood===m[0]?" on":"")+'" data-a="setMood" data-m="'+m[0]+'">'+m[1]+'</button>'}).join("")+'</div>';
  var energy=[["high","🔋"],["mid","🔅"],["low","🪫"]];
  h+='<div class="eyebrow">'+T("energy")+'</div><div class="chips">'+energy.map(function(m){return '<button class="chip'+(j.energy===m[0]?" on":"")+'" data-a="setEnergy" data-e="'+m[0]+'">'+m[1]+' '+T("e_"+m[0])+'</button>'}).join("")+'</div>';
  var sess=0,coms=0;S.projects.forEach(function(p){(p.sessions||[]).forEach(function(sx){if(todayKeyOf(new Date(sx.startedAt))===tk)sess++});(p.commits||[]).forEach(function(c){if(todayKeyOf(new Date(c.at))===tk)coms++})});
  var doneT=S.tasks.filter(function(t){return t.done&&t.updatedAt&&todayKeyOf(new Date(t.updatedAt))===tk}).length;
  var notesT=S.notes.filter(function(n){return todayKeyOf(new Date(n.createdAt))===tk}).length;
  h+='<div class="eyebrow">'+T("daySummary")+'</div><div class="stat-row" style="grid-template-columns:repeat(4,1fr)">'+
     '<div class="stat"><div class="v a">'+sess+'</div><div class="k">'+T("sessionsT")+'</div></div>'+
     '<div class="stat"><div class="v">'+coms+'</div><div class="k">Commits</div></div>'+
     '<div class="stat"><div class="v">'+doneT+'</div><div class="k">'+T("doneT")+'</div></div>'+
     '<div class="stat"><div class="v">'+notesT+'</div><div class="k">'+T("notesT")+'</div></div></div>';
  h+='<div class="eyebrow">'+T("jNote")+'</div><div class="card"><textarea id="jnote" placeholder="'+T("jNotePh")+'" style="width:100%;background:none;border:none;color:var(--c-ink-900);outline:none;min-height:80px;resize:vertical;line-height:1.6;font-size:15px">'+esc(j.note||"")+'</textarea><button class="btn btn-primary btn-sm btn-block" data-a="saveJournal" style="margin-top:8px">'+T("save")+'</button></div>';
  var days=Object.keys(S.journal).filter(function(k){return k!==tk&&(S.journal[k].note||S.journal[k].mood)}).sort().reverse().slice(0,10);
  if(days.length){h+='<div class="eyebrow">'+T("pastEntries")+'</div>';days.forEach(function(k){var e=S.journal[k];h+='<div class="item"><div class="ico">'+(({great:"😄",ok:"🙂",meh:"😐",low:"😫"})[e.mood]||"📓")+'</div><div class="body"><div class="t">'+esc(k)+'</div>'+(e.note?'<div class="m">'+esc(e.note.slice(0,60))+'</div>':'')+'</div></div>'})}
  return h;
}
function todayKeyOf(d){return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()}

/* ---- Search ---- */
function vSearch(){
  var q=(S._q||"").trim().toLowerCase();
  var h='<input class="search-in" id="searchInput" placeholder="'+T("searchPh")+'" value="'+esc(S._q||"")+'" autocomplete="off">';
  if(!q)return h+'<div class="empty" style="padding:30px">'+svg(IC.search)+'<div style="margin-top:12px;color:var(--c-ink-300);font-size:14px">'+T("searchPh")+'</div></div>';
  var res={projects:[],tasks:[],notes:[]};
  S.projects.forEach(function(p){if((p.name+" "+(p.nextAction||"")).toLowerCase().indexOf(q)>=0)res.projects.push(p)});
  S.tasks.forEach(function(t){if(t.title.toLowerCase().indexOf(q)>=0)res.tasks.push(t)});
  S.notes.forEach(function(n){if((n.title+" "+n.body).toLowerCase().indexOf(q)>=0)res.notes.push(n)});
  var total=res.projects.length+res.tasks.length+res.notes.length;
  if(!total)return h+'<div class="empty" style="padding:30px">'+T("noResults")+'</div>';
  if(res.projects.length){h+='<div class="sec-label">'+T("projects")+'</div>';res.projects.forEach(function(p){h+='<div class="item tap" data-a="open" data-id="'+p.id+'"><div class="ico">◈</div><div class="body"><div class="t">'+esc(p.name)+'</div></div>'+svg(IC.chev,"flip go")+'</div>'})}
  if(res.tasks.length){h+='<div class="sec-label">'+T("tasks")+'</div>';res.tasks.forEach(function(t){var p=project(t.projectId);h+='<div class="item"><div class="ico">✓</div><div class="body"><div class="t">'+esc(t.title)+'</div>'+(p?'<div class="m">'+esc(p.name)+'</div>':'')+'</div></div>'})}
  if(res.notes.length){h+='<div class="sec-label">'+T("notesT")+'</div>';res.notes.forEach(function(n){h+='<div class="item tap" data-a="openNote" data-id="'+n.id+'"><div class="ico">📝</div><div class="body"><div class="t">'+esc(n.title)+'</div></div></div>'})}
  return h;
}

/* ---- Settings ---- */
function vSettings(){
  var h='';
  h+='<div class="card"><div class="set-row"><span class="k">'+T("language")+'</span><div class="seg"><button class="'+(S.lang==="ar"?"on":"")+'" data-a="lang" data-l="ar">عربي</button><button class="'+(S.lang==="en"?"on":"")+'" data-a="lang" data-l="en">EN</button></div></div>'+
     '<div class="set-row"><span class="k">'+T("theme")+'</span><div class="seg"><button class="'+(S.theme==="dark"?"on":"")+'" data-a="theme" data-t="dark">'+T("dark")+'</button><button class="'+(S.theme==="light"?"on":"")+'" data-a="theme" data-t="light">'+T("light")+'</button></div></div>'+
     '<div class="set-row" style="border:none"><span class="k">'+T("exportD")+'</span><button class="link" data-a="export">↓</button></div></div>';
  h+='<button class="btn btn-ghost btn-block" data-a="clear" style="color:var(--danger);margin-top:8px">'+T("clearD")+'</button>';
  h+='<div class="empty" style="font-family:var(--mono);font-size:12px;margin-top:24px">'+LOGO+'<div style="margin-top:8px">'+T("about")+'</div></div>';
  return h;
}

/* ---- Home (advanced, rich) ---- */
function prioRank(p){return {high:3,med:2,low:1}[p]||0}
function prioPill(p){if(!p)return"";return '<span class="prio '+p+'">'+T(p==="high"?"pHigh":p==="med"?"pMed":"pLow")+'</span>'}
function dueLabel(ts){if(!ts)return"";var t=startOfDay(Date.now()),d=startOfDay(ts),day=86400000;
  if(d===t)return T("dueToday");if(d===t+day)return T("dueTomorrow");
  return new Date(ts).toLocaleDateString(S.lang==="ar"?"ar-EG":"en",{weekday:"short",day:"numeric"})}
function fmtEst(m){var h=Math.floor(m/60),mm=m%60;return((h?h+"h ":"")+(mm?mm+"m":"")).trim()||"0m"}
function signalBlock(title,inner){return '<div class="signal"><div class="siglbl">'+title+'</div>'+inner+'</div>'}
function empty(msg,ic){return '<div class="empty"><div class="big">'+(ic||"·")+'</div>'+msg+'</div>'}
function aiSuggestions(){
  var out=[],now=Date.now(),day=86400000;
  S.projects.filter(function(p){return p.status==="active"}).forEach(function(p){
    var last=p.lastWorkedAt||p.createdAt,d=Math.floor((now-last)/day);
    if(d>=3)out.push({icon:"↯",title:p.name+" "+(S.lang==="ar"?"واقف":"is stalling"),sub:S.lang==="ar"?("مفيش جلسات من "+d+" أيام. تحجز 30 د؟"):("No sessions in "+d+" days. Schedule 30m?")});
  });
  S.projects.forEach(function(p){var ns=S.notes.filter(function(n){return n.projectId===p.id});
    if(ns.length>=3)out.push({icon:"⌗",title:(S.lang==="ar"?"ادمج ملاحظات ":"Merge notes in ")+p.name,sub:ns.length+(S.lang==="ar"?" ملاحظات مرتبطة — تدمجها؟":" related notes — consolidate?")})});
  S.projects.forEach(function(p){
    var decs=S.decisions.filter(function(d){return d.projectId===p.id});
    var rfc=S.notes.some(function(n){return n.projectId===p.id&&/rfc/i.test(n.title)});
    if(rfc&&decs.length&&decs.every(function(d){return d.status!=="pending"}))
      out.push({icon:"✓",title:S.lang==="ar"?"اقفل الـ RFC":"Close the RFC",sub:S.lang==="ar"?"كل القرارات متسجلة — جاهز للنشر.":"All decisions logged; ready to publish."})});
  return out.slice(0,3);
}
function ctxStrip(){
  var all=[];
  S.projects.forEach(function(p){(p.sessions||[]).forEach(function(s){all.push({p:p,s:s,at:s.endedAt||s.startedAt})})});
  all.sort(function(a,b){return b.at-a.at});
  var recent=all.slice(0,7).reverse();
  if(!recent.length)return"";
  var tk=startOfDay(Date.now());
  var h='<div class="ctx-strip">';
  recent.forEach(function(e){
    var acc=(e.s.accomplishments||[]).length,cls=acc>=2?"full":acc==1?"half":"",today=startOfDay(e.at)===tk?" today":"";
    h+='<div class="ctx-dot" data-a="resume" data-id="'+e.p.id+'" title="'+esc(e.s.summary||"")+'"><div class="ctx-ring '+cls+today+'"><span class="ci" style="color:'+(e.p.color||"var(--ws)")+'">◈</span></div><span class="ctx-lbl">'+rel(e.at)+'</span></div>';
  });
  return h+'</div>';
}
function sessionsAll(){var a=[];S.projects.forEach(function(p){(p.sessions||[]).forEach(function(s){a.push({p:p,s:s,at:s.endedAt||s.startedAt,dur:(s.endedAt&&s.startedAt)?(s.endedAt-s.startedAt):0})})});return a;}
function contextHealth(){
  var ws=S.projects.filter(function(p){return p.sessions&&p.sessions.length}).sort(function(a,b){return(b.lastWorkedAt||0)-(a.lastWorkedAt||0)});
  if(!ws.length)return null;
  var p=ws[0],last=p.sessions[p.sessions.length-1],day=86400000;
  var days=(Date.now()-(p.lastWorkedAt||Date.now()))/day,blk=0;
  S.projects.forEach(function(x){blk+=(x.blockers||[]).length});
  var score=100-Math.min(42,days*4)-Math.min(24,blk*8);
  if(!last.nextStep)score-=10;if(!(last.accomplishments||[]).length)score-=6;
  return Math.max(5,Math.min(100,Math.round(score)));
}
function weekFocusMins(){var wk=Date.now()-7*86400000,m=0;sessionsAll().forEach(function(e){if(e.at>=wk)m+=Math.round(e.dur/60000)});return m;}
function heroBlocks(){
  var h='',hh=contextHealth();
  if(hh!=null){var circ=263.9,off=circ*(1-hh/100);
    h+='<div class="hero-num"><div class="hn-ring"><svg viewBox="0 0 100 100" width="92" height="92"><circle class="bg" cx="50" cy="50" r="42"/><circle class="fg" cx="50" cy="50" r="42" stroke-dasharray="'+circ+'" stroke-dashoffset="'+circ+'" data-ring="'+off+'"/></svg><div class="hn-num" data-count="'+hh+'" data-suffix="%">0%</div></div>'+
      '<div class="hn-meta"><div class="hn-label">'+T("contextHealth")+'</div><div class="hn-sub">'+T("contextHealthSub")+'</div></div></div>';
  }
  var active=S.projects.filter(function(p){return p.status==="active"}).length,openT=S.tasks.filter(function(t){return !t.done}).length,fmins=weekFocusMins();
  h+='<div class="stat-row">'+
    '<div class="stat"><div class="v a" data-count="'+active+'">0</div><div class="k">'+T("inFlow")+'</div></div>'+
    '<div class="stat"><div class="v" data-count="'+openT+'">0</div><div class="k">'+T("openTasks")+'</div></div>'+
    '<div class="stat"><div class="v" data-count="'+fmins+'" data-suffix="'+(S.lang==="ar"?"د":"m")+'">0</div><div class="k">'+T("focusWk")+'</div></div>'+
  '</div>';
  return h;
}
function ringsBlock(){
  if(!S.courses.length)return"";
  var cols=["var(--ws)","#3FBE86","#E2A43A"],h='<div class="eyebrow">◎ '+T("learning")+'</div><div class="rings">';
  S.courses.slice(0,3).forEach(function(c,i){
    var pr=c.total?Math.round((c.current||0)/c.total*100):(c.progress||0),circ=213.6,off=circ*(1-pr/100);
    h+='<div class="ring"><svg viewBox="0 0 80 80" width="62" height="62"><circle class="rbg" cx="40" cy="40" r="34"/><circle class="rfg" cx="40" cy="40" r="34" stroke="'+cols[i%3]+'" stroke-dasharray="'+circ+'" stroke-dashoffset="'+circ+'" data-ring="'+off+'"/></svg><span class="rp" style="color:'+cols[i%3]+'" data-count="'+pr+'" data-suffix="%">0%</span><span class="rl">'+esc(c.title.split("(")[0].trim())+'</span></div>';
  });
  return h+'</div>';
}
function dayKey(ts){var d=new Date(ts);return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()}
function sessionDayCounts(){var m={};sessionsAll().forEach(function(e){var k=dayKey(e.at);m[k]=(m[k]||0)+1});return m;}
function resumeStreak(){
  var m=sessionDayCounts(),day=86400000,t=new Date();t.setHours(0,0,0,0);var today=t.getTime();
  var anchor=m[dayKey(today)]?today:(m[dayKey(today-day)]?today-day:null);
  if(anchor==null)return 0;var streak=0,cur=anchor;
  while(m[dayKey(cur)]){streak++;cur-=day;}return streak;
}
function heatBlock(){
  if(!sessionsAll().length)return"";
  var m=sessionDayCounts(),day=86400000,end=new Date();end.setHours(0,0,0,0);var start=end.getTime()-69*day,cells="";
  for(var i=0;i<70;i++){var c=m[dayKey(start+i*day)]||0,l=c>=3?3:c===2?2:c===1?1:0;cells+='<i'+(l?' class="l'+l+'"':'')+'></i>';}
  return '<div class="eyebrow between2"><span>◍ '+T("sessionHeat")+'</span><span class="streak">🔥 '+resumeStreak()+' '+T("dayStreak")+'</span></div>'+
    '<div class="card" style="padding:14px"><div class="heat">'+cells+'</div></div>';
}
function vHome(){
  var withSess=S.projects.filter(function(p){return p.sessions&&p.sessions.length}).sort(function(a,b){return(b.lastWorkedAt||0)-(a.lastWorkedAt||0)});
  if(!withSess.length){
    return '<div class="greet">'+T(greetKey())+'</div><div class="sub">'+T("nothingSub")+'</div>'+
      '<div class="resume"><div class="rhead"><span class="dia">◈</span><span class="nm">'+T("nothing")+'</span></div><button class="btn btn-primary btn-block" data-a="newProject" style="margin-top:12px">'+T("startProject")+'</button></div>';
  }
  var p=withSess[0],s=p.sessions[p.sessions.length-1];
  var commits=(p.commits||[]).slice(0,3),decs=S.decisions.filter(function(d){return d.projectId===p.id}).slice(0,3),blk=p.blockers||[],docs=S.notes.filter(function(n){return n.projectId===p.id}).slice(0,3);
  var signals=commits.length+decs.length+blk.length+docs.length+((s.accomplishments||[]).length);
  var mn='';
  mn+='<div class="greet">'+T(greetKey())+'</div>';
  mn+=heroBlocks();
  mn+=ctxStrip();
  mn+='<div class="hero-card">';
  mn+='<div class="badgerow"><span class="badge"><i class="pulse"></i>'+T("contextRecovered")+'</span><span class="lastact">'+T("lastWorked")+' '+rel(p.lastWorkedAt)+'</span></div>';
  var _sg=aiSuggestions();if(_sg.length)mn+='<div class="aipulse" data-a="go" data-v="assistant"><span class="ap-dot"></span>✦ '+_sg.length+' '+T("aiSuggestions")+'</div>';
  mn+='<div class="lbl2">'+T("resumeYourWork")+'</div>';
  mn+='<h2 class="herotitle">'+esc(p.name)+(p.version?' · <span class="grad">'+esc(p.version)+'</span>':'')+(p.subtitle?' <span class="dash">—</span> <span class="grad">'+esc(p.subtitle)+'</span>':'')+'</h2>';
  mn+='<div class="summbox"><div class="siglbl">'+T("sessionSummary")+'</div><div class="summ">'+esc(s.summary||"—")+'</div></div>';
  if((s.accomplishments||[]).length){mn+='<ul class="acc">';s.accomplishments.forEach(function(a){mn+='<li>'+esc(a)+'</li>'});mn+='</ul>';}
  mn+='<div class="row" style="gap:10px;margin-top:14px;flex-wrap:wrap"><button class="btn btn-primary" data-a="resume" data-id="'+p.id+'">'+T("continueLeft")+' →</button><button class="btn btn-ghost" data-a="focus" data-id="'+p.id+'">◎ '+T("focusMode")+'</button><button class="btn btn-ghost" data-a="open" data-id="'+p.id+'">'+T("sessionNotes")+'</button></div>';
  if(p.nextAction)mn+='<div class="nextaction"><span class="lbl">'+T("nextAction")+'</span><div class="na">'+esc(p.nextAction)+'</div></div>';
  mn+='</div>';
  var focus=S.tasks.filter(function(t){return !t.done&&t.due}).sort(function(a,b){return(a.due-b.due)||(prioRank(b.priority)-prioRank(a.priority))});
  var est=focus.reduce(function(a,t){return a+(t.estimate||0)},0);
  mn+='<div class="eyebrow between2"><span>'+T("todaysFocus")+'</span><span class="cntlite">'+focus.length+' '+T("items")+(est?' · '+fmtEst(est)+' '+T("estimate"):'')+'</span></div>';
  if(focus.length){focus.slice(0,6).forEach(function(t){var pr=project(t.projectId);
    mn+='<div class="item task"><button class="check '+(t.done?"on":"")+'" data-a="toggle" data-id="'+t.id+'">'+svg(IC.check)+'</button><div class="body"><div class="t">'+esc(t.title)+'</div><div class="m">'+(pr?esc(pr.name)+' · ':'')+T("due")+' '+dueLabel(t.due)+'</div></div>'+prioPill(t.priority)+'</div>';
  });}else{mn+='<div class="empty" style="padding:18px">'+T("noNext")+'</div>';}
  var sugg=aiSuggestions();
  if(sugg.length){mn+='<div class="eyebrow">✦ '+T("aiSuggestions")+'</div>';
    sugg.forEach(function(x){mn+='<div class="sugg"><div class="sicon">'+x.icon+'</div><div><div class="st2">'+esc(x.title)+'</div><div class="ss">'+esc(x.sub)+'</div></div></div>'})}
  mn+=heatBlock();
  mn+=ringsBlock();
  var rail='';
  if(commits.length)rail+=signalBlock(T("recentCommits"),commits.map(function(c){return '<div class="sig"><span class="mono2">'+esc(c.hash)+'</span><span class="sigt">'+esc(c.msg)+'</span><span class="sigw">'+rel(c.at)+'</span></div>'}).join(""));
  if(decs.length)rail+=signalBlock(T("recentDecisions"),decs.map(function(d){return '<div class="sig"><span class="bl '+(d.status==="pending"?"warn":"ok")+'">•</span><span class="sigt">'+esc(d.text)+'</span></div>'}).join(""));
  if(blk.length)rail+=signalBlock(T("blockersT"),blk.map(function(b){return '<div class="sig"><span class="bl danger">•</span><span class="sigt">'+esc(b)+'</span></div>'}).join(""));
  if(docs.length)rail+=signalBlock(T("relevantDocs"),'<div class="docchips">'+docs.map(function(n){return '<button class="docchip" data-a="openNote" data-id="'+n.id+'">'+esc(n.title)+'</button>'}).join("")+'</div>');
  rail+='<div class="recon">◷ '+T("reconstructed")(signals)+'</div>';
  return '<div class="home-grid"><div class="home-main">'+mn+'</div><aside class="home-rail">'+rail+'</aside></div>';
}

/* ---- extra section views ---- */
function dayLabel(ts){var t=startOfDay(Date.now()),d=startOfDay(ts),day=86400000;if(d===t)return T("dueToday");if(d===t-day)return T("yesterday");return new Date(ts).toLocaleDateString(S.lang==="ar"?"ar-EG":"en",{day:"numeric",month:"short"});}
function vTimeline(){
  var filt=S._tlf||"all";
  var h='<div class="greet">'+T("timeline")+'</div>';
  var types=[["all",T("allTasks")],["session",T("sessionsT")],["commit","Commits"],["decision",T("recentDecisions")],["task",T("doneT")],["note",T("notesT")]];
  h+='<div class="opts"><div class="seg" style="flex-wrap:wrap">'+types.map(function(t){return '<button class="'+(filt===t[0]?"on":"")+'" data-a="tlfilter" data-f="'+t[0]+'">'+t[1]+'</button>'}).join("")+'</div></div>';
  var ev=[];
  S.projects.forEach(function(p){(p.sessions||[]).forEach(function(sx){ev.push({type:"session",at:sx.endedAt||sx.startedAt,t:sx.summary||"Session",m:p.name,c:p.color})});(p.commits||[]).forEach(function(c){ev.push({type:"commit",at:c.at,t:c.msg,m:p.name+" · "+c.hash,c:p.color})})});
  S.decisions.forEach(function(d){var p=project(d.projectId);ev.push({type:"decision",at:d.at,t:d.text,m:p?p.name:"",c:p&&p.color})});
  S.tasks.forEach(function(t){if(t.done&&t.updatedAt){var p=project(t.projectId);ev.push({type:"task",at:t.updatedAt,t:t.title,m:p?p.name:"",c:p&&p.color})}});
  S.notes.forEach(function(n){var p=project(n.projectId);ev.push({type:"note",at:n.createdAt,t:n.title,m:p?p.name:"",c:p&&p.color})});
  if(filt!=="all")ev=ev.filter(function(e){return e.type===filt});
  ev.sort(function(a,b){return b.at-a.at});ev=ev.slice(0,80);
  if(!ev.length)return h+empty(T("noItems"),"◷");
  var icon={session:"⧗",commit:"⎇",decision:"⚖",task:"✓",note:"📝"},lastDay="";
  ev.forEach(function(e){var dk=dayLabel(e.at);if(dk!==lastDay){h+='<div class="tl-day">'+dk+'</div>';lastDay=dk;}
    h+='<div class="tl"><div class="tldot" style="border-color:'+(e.c||"var(--ws)")+'"></div><div class="tlbody"><div class="t"><span class="tl-ic">'+icon[e.type]+'</span> '+esc(e.t)+'</div><div class="m">'+(e.m?esc(e.m)+' · ':'')+rel(e.at)+'</div></div></div>';});
  return h;
}
function vKnowledge(){
  var h='<div class="greet">'+T("knowledge")+'</div><div style="height:12px"></div>';
  if(!S.notes.length)return h+empty(T("noNotes"),"📖");
  S.notes.slice().sort(function(a,b){return(b.updatedAt||0)-(a.updatedAt||0)}).forEach(function(n){var p=project(n.projectId);
    h+='<div class="item tap" data-a="openNote" data-id="'+n.id+'"><div class="ico">📝</div><div class="body"><div class="t">'+esc(n.title)+'</div><div class="m">'+(p?esc(p.name)+' · ':'')+rel(n.updatedAt||n.createdAt)+'</div></div>'+svg(IC.chev,"flip go")+'</div>'});
  return h;
}
function vBookmarks(){
  var sel=S._sel&&S._selType==="bookmarks";
  var h='<div class="greet" style="display:flex;align-items:center;justify-content:space-between"><span>'+T("bookmarks")+'</span>'+(S.bookmarks.length?'<button class="btn btn-ghost btn-sm" data-a="selMode" data-t="bookmarks">'+(sel?T("selDone"):T("select"))+'</button>':'')+'</div>';
  h+='<div style="height:8px"></div><button class="btn btn-ghost btn-block" data-a="newBookmark" style="margin-bottom:12px">'+svg(IC.plus)+' '+T("addBookmark")+'</button>';
  if(!S.bookmarks.length)return h+empty(T("noItems"),"🔖");
  if(sel)h+=bulkBar(false,false);
  var selIds=S._selIds||[];
  S.bookmarks.forEach(function(b){
    if(sel){var on=selIds.indexOf(b.id)>=0;
      h+='<div class="item '+(on?"selon":"")+'" data-a="pick" data-id="'+b.id+'"><button class="pickbox '+(on?"on":"")+'">'+(on?svg(IC.check):"")+'</button><div class="body"><div class="t">'+esc(b.title)+'</div><div class="m">'+esc(b.url||b.topic||"")+'</div></div></div>';
    }else{
      h+='<div class="item"><div class="ico">🔖</div><div class="body"><div class="t">'+esc(b.title)+'</div><div class="m">'+esc(b.url||b.topic||"")+'</div></div></div>';
    }
  });
  return h;
}
function vCourses(){
  var h='<div class="greet">'+T("courses")+'</div><div style="height:8px"></div><button class="btn btn-ghost btn-block" data-a="newCourse" style="margin-bottom:12px">'+svg(IC.plus)+' '+T("addCourse")+'</button>';
  if(!S.courses.length)return h+empty(T("noItems"),"🎓");
  S.courses.forEach(function(c){var pr=c.total?Math.round((c.current||0)/c.total*100):(c.progress||0);
    h+='<div class="card"><div class="row between"><div style="font-weight:600;color:var(--c-ink-900)">'+esc(c.title)+'</div><div class="st">'+pr+'%</div>'+delBtn("courses",c.id)+'</div>'+(c.provider?'<div class="m" style="font-family:var(--mono);font-size:12px;color:var(--c-ink-500);margin-top:2px">'+esc(c.provider)+(c.total?' · '+(c.current||0)+'/'+c.total:'')+'</div>':'')+'<div class="prog"><i style="width:'+pr+'%"></i></div></div>'});
  return h;
}
function vPrompts(){
  var h='<div class="greet">'+T("promptLib")+'</div><div style="height:8px"></div><button class="btn btn-ghost btn-block" data-a="newPrompt" style="margin-bottom:12px">'+svg(IC.plus)+' '+T("addPrompt")+'</button>';
  if(!S.prompts.length)return h+empty(T("noItems"),"✦");
  S.prompts.forEach(function(p){h+='<div class="card"><div class="row between"><div style="font-weight:600;color:var(--c-ink-900)">'+esc(p.title)+'</div><div class="st">'+esc(p.model||"")+'</div>'+delBtn("prompts",p.id)+'</div><div style="font-size:13px;color:var(--c-ink-500);margin-top:6px;font-family:var(--mono)">'+esc(p.body||"")+'</div></div>'});
  return h;
}
function vServers(){
  var h='<div class="greet">'+T("servers")+'</div><div style="height:8px"></div><button class="btn btn-ghost btn-block" data-a="newServer" style="margin-bottom:12px">'+svg(IC.plus)+' '+T("addServer")+'</button>';
  if(!S.servers.length)return h+empty(T("noItems"),"🖧");
  S.servers.forEach(function(s){h+='<div class="card"><div class="row between"><div style="font-weight:600;color:var(--c-ink-900)">'+esc(s.name)+'</div>'+delBtn("servers",s.id)+'</div><div class="m" style="font-family:var(--mono);font-size:12px;color:var(--c-ink-500);margin-top:2px">'+esc(s.host||"")+(s.ports?' · '+esc(s.ports):'')+'</div>'+(s.notes?'<div style="font-size:13px;color:var(--c-ink-500);margin-top:6px">'+esc(s.notes)+'</div>':'')+'</div>'});
  return h;
}
function vRepos(){
  var h='<div class="greet">'+T("repositories")+'</div><div style="height:8px"></div><button class="btn btn-ghost btn-block" data-a="newRepo" style="margin-bottom:12px">'+svg(IC.plus)+' '+T("addRepo")+'</button>';
  if(!S.repos.length)return h+empty(T("noItems"),"⎇");
  S.repos.forEach(function(r){var pr=project(r.projectId),cms=pr?(pr.commits||[]):[];
    h+='<div class="card"><div class="row between"><div style="font-weight:600;color:var(--c-ink-900)">'+esc(r.name)+'</div><div class="st mono2">'+esc(r.branch||"")+'</div>'+delBtn("repos",r.id)+'</div>'+(r.url?'<div class="m" style="font-family:var(--mono);font-size:12px;color:var(--c-ink-500);margin-top:2px">'+esc(r.url)+'</div>':'')+cms.slice(0,3).map(function(c){return '<div class="sig" style="margin-top:6px"><span class="mono2">'+esc(c.hash)+'</span><span class="sigt">'+esc(c.msg)+'</span><span class="sigw">'+rel(c.at)+'</span></div>'}).join("")+'</div>'});
  return h;
}
function vAssistant(){
  var q=(S._ask||"").trim();
  var h='<div class="greet">'+T("askContinuum")+'</div><div style="height:12px"></div>';
  h+='<div class="qadd"><input id="askInput" placeholder="'+T("askPh")+'" value="'+esc(S._ask||"")+'" autocomplete="off"><button data-a="doAsk">'+svg(IC.search)+'</button></div>';
  var chips=[["what was I doing",S.lang==="ar"?"كنت بعمل إيه؟":"What was I doing?"],["next",S.lang==="ar"?"الخطوات الجاية":"Next actions"],["blockers",S.lang==="ar"?"العوائق":"Blockers"],["decisions",S.lang==="ar"?"القرارات":"Decisions"]];
  h+='<div class="chips" style="margin-bottom:14px">'+chips.map(function(c){return '<button class="chip" data-a="askChip" data-q="'+esc(c[0])+'">'+esc(c[1])+'</button>'}).join("")+'</div>';
  h+='<div class="eyebrow">✦ '+T("aiInsights")+'</div>';
  var _top=S.projects.slice().sort(function(a,b){return (b.lastWorkedAt||0)-(a.lastWorkedAt||0)})[0];
  var _blk=0;S.projects.forEach(function(p){_blk+=(p.blockers||[]).length});
  h+='<div class="ins-row"><div class="ins"><div class="ins-k">'+T("insTop")+'</div><div class="ins-v">'+(_top?esc(_top.name):"—")+'</div></div>'+
     '<div class="ins"><div class="ins-k">'+T("insBlk")+'</div><div class="ins-v">'+_blk+'</div></div>'+
     '<div class="ins"><div class="ins-k">'+T("insFocus")+'</div><div class="ins-v">'+fmtEst(weekFocusMins())+'</div></div></div>';
  if(q)h+='<div class="askans">'+answer(q)+'</div>';
  return h;
}
function answer(q){
  q=q.toLowerCase();
  var ws=S.projects.filter(function(p){return p.sessions&&p.sessions.length}).sort(function(a,b){return b.lastWorkedAt-a.lastWorkedAt});
  if(/doing|كنت|بعمل|resume|سياق/.test(q)&&ws.length){var p=ws[0],s=p.sessions[p.sessions.length-1];
    return '<div class="who">🤖</div><div><b style="color:var(--c-ink-900)">'+esc(p.name)+'</b> — '+esc(s.summary||"")+'<div class="na" style="margin-top:8px">▸ '+esc(s.nextStep||p.nextAction||"")+'</div></div>'}
  if(/next|جاي|خطو/.test(q)){var ns=S.projects.filter(function(p){return p.nextAction});return '<div class="who">🤖</div><div>'+(ns.length?ns.map(function(p){return '▸ '+esc(p.nextAction)+' <span class="m">('+esc(p.name)+')</span>'}).join("<br>"):T("noNext"))+'</div>'}
  if(/block|عوائق|عائق/.test(q)){var bl=[];S.projects.forEach(function(p){(p.blockers||[]).forEach(function(b){bl.push('⚠ '+esc(b)+' <span class="m">('+esc(p.name)+')</span>')})});return '<div class="who">🤖</div><div>'+(bl.length?bl.join("<br>"):"—")+'</div>'}
  if(/decision|قرار/.test(q)){return '<div class="who">🤖</div><div>'+(S.decisions.length?S.decisions.map(function(d){var p=project(d.projectId);return '⚖ '+esc(d.text)+' <span class="m">('+(p?esc(p.name):"")+')</span>'}).join("<br>"):"—")+'</div>'}
  var hits=[];S.notes.forEach(function(n){if((n.title+n.body).toLowerCase().indexOf(q)>=0)hits.push('📝 '+esc(n.title))});S.tasks.forEach(function(t){if(t.title.toLowerCase().indexOf(q)>=0)hits.push('✓ '+esc(t.title))});
  return '<div class="who">🤖</div><div>'+(hits.length?hits.slice(0,8).join("<br>"):T("noResults"))+'</div>';
}

/* ---------------- sheets ---------------- */
var SB=document.getElementById("sheetBack"),SH=document.getElementById("sheet");
function openSheet(html){SH.innerHTML='<div class="grip"></div>'+html;SB.classList.add("open");}
function closeSheet(){SB.classList.remove("open");}
function val(id){var e=document.getElementById(id);return e?e.value.trim():""}
function sheetForm(title,fields,action){
  openSheet('<h3>'+esc(title)+'</h3>'+fields.map(function(f){return '<div class="field"><label>'+esc(f[1])+'</label><input id="'+f[0]+'" value="'+esc(f[2]||"")+'" placeholder="'+esc(f[1])+'"></div>'}).join("")+
    '<div class="sheet-actions"><button class="btn btn-ghost" data-a="closeSheet">'+T("cancel")+'</button><button class="btn btn-primary" data-a="'+action+'">'+T("save")+'</button></div>');
  setTimeout(function(){var e=document.getElementById(fields[0][0]);if(e)e.focus()},250);
}
function sheetAddTask(pid){
  openSheet('<h3>'+T("addTask")+'</h3>'+
    '<div class="field"><input id="tkTitle" placeholder="'+T("addTask")+'"></div>'+
    '<div class="field"><label>'+T("priority")+'</label><div class="chips" id="tkPrio">'+["high","med","low"].map(function(p){return '<button class="chip'+(p==="med"?" on":"")+'" data-p="'+p+'">'+T(p==="high"?"pHigh":p==="med"?"pMed":"pLow")+'</button>'}).join("")+'</div></div>'+
    '<div class="field"><label>'+T("due")+'</label><div class="chips" id="tkDue">'+[["today",T("dueToday")],["tomorrow",T("dueTomorrow")],["none","—"]].map(function(d){return '<button class="chip'+(d[0]==="none"?" on":"")+'" data-d="'+d[0]+'">'+d[1]+'</button>'}).join("")+'</div></div>'+
    '<div class="sheet-actions"><button class="btn btn-ghost" data-a="closeSheet">'+T("cancel")+'</button><button class="btn btn-primary" data-a="doAddTask2" data-id="'+pid+'">'+T("add")+'</button></div>');
  SH._prio="med";SH._due="none";
  document.getElementById("tkPrio").addEventListener("click",function(e){var b=e.target.closest(".chip");if(!b)return;[].forEach.call(this.children,function(c){c.classList.remove("on")});b.classList.add("on");SH._prio=b.getAttribute("data-p")});
  document.getElementById("tkDue").addEventListener("click",function(e){var b=e.target.closest(".chip");if(!b)return;[].forEach.call(this.children,function(c){c.classList.remove("on")});b.classList.add("on");SH._due=b.getAttribute("data-d")});
  setTimeout(function(){var e=document.getElementById("tkTitle");if(e)e.focus()},250);
}
SB.addEventListener("click",function(e){if(e.target===SB)closeSheet()});

function sheetCapture(){
  openSheet('<h3>'+T("captureT")+'</h3>'+
    '<div class="cap-grid" id="capChips">'+[["idea","💡"],["task","✓"],["note","📝"],["link","🔗"],["bookmark","🔖"],["reference","#"]].map(function(k,i){return '<button class="cap-tile chip'+(i===0?" on":"")+'" data-k="'+k[0]+'"><span class="cap-ic">'+k[1]+'</span><span>'+T("k"+k[0][0].toUpperCase()+k[0].slice(1))+'</span></button>'}).join("")+'</div>'+
    '<div class="field"><textarea id="capText" placeholder="'+T("capturePh")+'"></textarea></div>'+
    '<div class="sheet-actions"><button class="btn btn-ghost" data-a="closeSheet">'+T("cancel")+'</button><button class="btn btn-primary" data-a="doCapture">'+T("add")+'</button></div>');
  setTimeout(function(){var t=document.getElementById("capText");if(t)t.focus()},250);
  var kind="idea";
  document.getElementById("capChips").addEventListener("click",function(e){var b=e.target.closest(".chip");if(!b)return;
    [].forEach.call(this.children,function(c){c.classList.remove("on")});b.classList.add("on");kind=b.getAttribute("data-k");});
  SH._kind=function(){return kind};
}
function sheetTriage(){
  var opts='<option value="">'+T("unassigned")+'</option>'+S.projects.map(function(p){return '<option value="'+p.id+'">'+esc(p.name)+'</option>'}).join("");
  var body='<h3>'+T("triage")+'</h3>';
  if(!S.inbox.length){body+='<div class="empty">'+T("emptyInbox")+'</div><div class="sheet-actions"><button class="btn btn-ghost" data-a="closeSheet">'+T("done")+'</button></div>';openSheet(body);return;}
  S.inbox.forEach(function(it){
    body+='<div class="card" style="margin-bottom:10px"><div style="color:var(--c-ink-900);margin-bottom:8px">'+esc(it.text)+'</div>'+
      '<select class="field" data-triage-proj="'+it.id+'" style="width:100%;margin-bottom:8px;background:var(--bg-elevated);border:1px solid var(--border);color:var(--c-ink-900);border-radius:8px;padding:9px">'+opts+'</select>'+
      '<div class="sheet-actions"><button class="btn btn-ghost btn-sm" data-a="triageTask" data-id="'+it.id+'">'+T("makeTask")+'</button><button class="btn btn-ghost btn-sm" data-a="triageNote" data-id="'+it.id+'">'+T("makeNote")+'</button><button class="btn btn-ghost btn-sm" data-a="triageDel" data-id="'+it.id+'" style="flex:0;color:var(--danger)">✕</button></div></div>';
  });
  body+='<div class="sheet-actions"><button class="btn btn-primary" data-a="closeSheet">'+T("done")+'</button></div>';
  openSheet(body);
}
function sheetNewProject(){
  openSheet('<h3>'+T("newProject")+'</h3><div class="field"><label>'+T("pname")+'</label><input id="npName" placeholder="'+T("pname")+'"></div>'+
    '<div class="sheet-actions"><button class="btn btn-ghost" data-a="closeSheet">'+T("cancel")+'</button><button class="btn btn-primary" data-a="doNewProject">'+T("create")+'</button></div>');
  setTimeout(function(){var e=document.getElementById("npName");if(e)e.focus()},250);
}
function sheetSnapshot(pid){
  openSheet('<h3>'+T("snapTitle")+'</h3>'+
    '<div class="field"><label>'+T("whatDone")+'</label><textarea id="snDone" placeholder="'+T("whatDone")+'"></textarea></div>'+
    '<div class="field"><label>'+T("accomplishments")+' ('+(S.lang==="ar"?"سطر لكل نقطة":"one per line")+')</label><textarea id="snAcc" placeholder="- …"></textarea></div>'+
    '<div class="field"><label>'+T("nextStepQ")+'</label><input id="snNext" placeholder="'+T("nextStepQ")+'"></div>'+
    '<div class="field"><label>'+T("blockersT")+'</label><input id="snBlock" placeholder="'+T("addBlocker")+'"></div>'+
    '<div class="sheet-actions"><button class="btn btn-ghost" data-a="closeSheet">'+T("cancel")+'</button><button class="btn btn-primary" data-a="doSnapshot" data-id="'+pid+'">'+T("saveSnap")+'</button></div>');
  setTimeout(function(){var e=document.getElementById("snDone");if(e)e.focus()},250);
}
function sheetPrompt(title,label,val,action,id){
  openSheet('<h3>'+esc(title)+'</h3><div class="field"><input id="promptInput" placeholder="'+esc(label)+'" value="'+esc(val||"")+'"></div>'+
    '<div class="sheet-actions"><button class="btn btn-ghost" data-a="closeSheet">'+T("cancel")+'</button><button class="btn btn-primary" data-a="'+action+'" data-id="'+(id||"")+'">'+T("save")+'</button></div>');
  setTimeout(function(){var e=document.getElementById("promptInput");if(e){e.focus();e.select()}},250);
}
function sheetNote(pid,noteId){
  var n=noteId?S.notes.find(function(x){return x.id===noteId}):null;
  openSheet('<h3>'+(n?T("openNote"):T("addNote"))+'</h3>'+
    '<div class="field"><label>'+T("noteTitle")+'</label><input id="ntTitle" value="'+esc(n?n.title:"")+'" placeholder="'+T("noteTitle")+'"></div>'+
    '<div class="field"><label>'+T("noteBody")+'</label><textarea id="ntBody" placeholder="'+T("noteBody")+'">'+esc(n?n.body:"")+'</textarea></div>'+
    '<div class="sheet-actions">'+(n?'<button class="btn btn-ghost" data-a="delNote" data-id="'+n.id+'" style="flex:0;color:var(--danger)">'+T("delete")+'</button>':'')+
    '<button class="btn btn-ghost" data-a="closeSheet">'+T("cancel")+'</button><button class="btn btn-primary" data-a="doNote" data-pid="'+(pid||(n?n.projectId:""))+'" data-id="'+(n?n.id:"")+'">'+T("save")+'</button></div>');
  setTimeout(function(){var e=document.getElementById("ntTitle");if(e)e.focus()},250);
}

/* ---------------- toast ---------------- */
var TT=document.getElementById("toast"),ttimer;
function toast(msg){TT.textContent=msg;TT.classList.add("show");clearTimeout(ttimer);ttimer=setTimeout(function(){TT.classList.remove("show")},1600)}

/* ---------------- actions ---------------- */
var FILE={home:"index.html",projects:"projects.html",project:"project.html",tasks:"tasks.html",journal:"journal.html",timeline:"timeline.html",knowledge:"knowledge.html",bookmarks:"bookmarks.html",courses:"courses.html",prompts:"prompts.html",servers:"servers.html",repos:"repos.html",assistant:"assistant.html",search:"search.html",settings:"settings.html",focus:"focus.html",inbox:"inbox.html",profile:"profile.html",qtoday:"index.html",qtasks:"tasks.html"};
function nav(view,id){var f=FILE[view]||"index.html";location.href=f+(view==="project"&&id?("?id="+encodeURIComponent(id)):"");}
function go(view){nav(view)}
function open(id){nav("project",id)}

document.addEventListener("click",function(e){
  var el=e.target.closest("[data-a]");if(!el)return;
  var a=el.getAttribute("data-a"),id=el.getAttribute("data-id");
  switch(a){
    case"go":go(el.getAttribute("data-v"));break;
    case"back":{if(history.length>1){history.back()}else{nav("home")}break;}
    case"open":open(id);break;
    case"addTask":sheetAddTask(id);break;
    case"doAddTask2":{var ti=val("tkTitle");if(!ti)return;var due=SH._due==="today"?startOfDay(Date.now()):SH._due==="tomorrow"?startOfDay(Date.now())+86400000:null;
      S.tasks.push({id:uid(),title:ti,projectId:id,done:false,isNext:false,priority:SH._prio||"med",due:due,estimate:0,createdAt:Date.now(),priority_n:S.tasks.length+1});save();closeSheet();render();break;}
    case"drawerOpen":document.getElementById("drawerBack").classList.remove("open");open(id);break;
    case"newBookmark":sheetForm(T("addBookmark"),[["bkTitle",T("noteTitle"),""],["bkUrl",T("url"),""]],"doBookmark");break;
    case"doBookmark":{var ti=val("bkTitle"),u=val("bkUrl");if(!ti&&!u)return;S.bookmarks.unshift({id:uid(),title:ti||u,url:u,kind:"link",createdAt:Date.now()});save();closeSheet();render();break;}
    case"newCourse":sheetForm(T("addCourse"),[["csTitle",T("noteTitle"),""],["csProv",T("provider"),""],["csTotal","# ("+T("estimate")+")",""]],"doCourse");break;
    case"doCourse":{var ti=val("csTitle");if(!ti)return;S.courses.unshift({id:uid(),title:ti,provider:val("csProv"),total:parseInt(val("csTotal"))||0,current:0,progress:0,createdAt:Date.now()});save();closeSheet();render();break;}
    case"newPrompt":sheetForm(T("addPrompt"),[["ptTitle",T("noteTitle"),""],["ptModel","Model",""],["ptBody","Prompt",""]],"doPrompt");break;
    case"doPrompt":{var ti=val("ptTitle");if(!ti)return;S.prompts.unshift({id:uid(),title:ti,model:val("ptModel"),category:"",body:val("ptBody"),createdAt:Date.now()});save();closeSheet();render();break;}
    case"newServer":sheetForm(T("addServer"),[["svName",T("noteTitle"),""],["svHost","Host",""],["svPorts","Ports",""],["svNotes",T("noteBody"),""]],"doServer");break;
    case"doServer":{var ti=val("svName");if(!ti)return;S.servers.unshift({id:uid(),name:ti,host:val("svHost"),ports:val("svPorts"),notes:val("svNotes"),createdAt:Date.now()});save();closeSheet();render();break;}
    case"newRepo":sheetForm(T("addRepo"),[["rpName",T("noteTitle"),""],["rpBranch","Branch",""],["rpUrl",T("url"),""]],"doRepo");break;
    case"doRepo":{var ti=val("rpName");if(!ti)return;S.repos.unshift({id:uid(),name:ti,branch:val("rpBranch"),url:val("rpUrl"),projectId:S.activePid||null,createdAt:Date.now()});save();closeSheet();render();break;}
    case"addBlocker":sheetForm(T("addBlocker"),[["blText",T("blockersT"),""]],"doAddBlocker");break;
    case"doAddBlocker":{var v=val("blText");if(!v)return;var p=project(S.activePid);p.blockers=p.blockers||[];p.blockers.unshift(v);save();closeSheet();render();break;}
    case"addCommit":sheetForm(T("addCommit"),[["cmHash","Hash",""],["cmMsg",T("noteTitle"),""]],"doAddCommit");break;
    case"doAddCommit":{var hh=val("cmHash"),mm=val("cmMsg");if(!mm)return;var p=project(S.activePid);p.commits=p.commits||[];p.commits.unshift({hash:hh||uid().slice(0,6),msg:mm,at:Date.now()});save();closeSheet();render();break;}
    case"logDecision":sheetForm(T("logDecision"),[["dcText",T("noteTitle"),""],["dcReason",T("reason"),""]],"doLogDecision");break;
    case"doLogDecision":{var tx=val("dcText");if(!tx)return;S.decisions.unshift({id:uid(),text:tx,reason:val("dcReason"),projectId:S.activePid,status:"decided",at:Date.now()});save();closeSheet();render();break;}
    case"doAsk":{var e=document.getElementById("askInput");S._ask=e?e.value:"";save();render();setTimeout(function(){var x=document.getElementById("askInput");if(x)x.focus()},0);break;}
    case"askChip":S._ask=el.getAttribute("data-q");save();render();break;
    case"capture":sheetCapture();break;
    case"menu":document.getElementById("drawerBack").classList.add("open");break;
    case"drawerGo":{var dv=el.getAttribute("data-v");nav(dv);break;}
    case"setMode":{S.mode=el.getAttribute("data-m");save();location.href="index.html";break;}
    case"setView":{S.uiView=el.getAttribute("data-vw");if(S.uiView==="mobile")document.getElementById("drawerBack").classList.remove("open");save();render();break;}
    case"quickTheme":S.theme=S.theme==="dark"?"light":"dark";document.querySelector('meta[name=theme-color]').setAttribute("content",S.theme==="dark"?"#0B0C0F":"#F4F5F8");save();render();break;
    case"quickLang":S.lang=S.lang==="ar"?"en":"ar";save();render();break;
    case"quickAddTask":{var inp=document.getElementById("qAdd");var v=inp?inp.value.trim():"";if(!v)return;
      S.tasks.push({id:uid(),title:v,projectId:null,done:false,isNext:false,createdAt:Date.now(),priority:S.tasks.length+1});save();render();
      setTimeout(function(){var e=document.getElementById("qAdd");if(e)e.focus()},0);break;}
    case"triage":sheetTriage();break;
    case"newProject":sheetNewProject();break;
    case"closeSheet":closeSheet();break;
    case"doCapture":{var t=document.getElementById("capText").value.trim();if(!t)return;
      S.inbox.unshift({id:uid(),text:t,kind:SH._kind?SH._kind():"idea",createdAt:Date.now()});save();closeSheet();toast(T("added"));render();break;}
    case"doNewProject":{var nm=document.getElementById("npName").value.trim();if(!nm)return;
      var np={id:uid(),name:nm,icon:"◈",status:"active",stage:"",nextAction:"",lastWorkedAt:Date.now(),createdAt:Date.now(),sessions:[]};
      S.projects.push(np);save();closeSheet();open(np.id);break;}
    case"resume":{var p=project(id);p.lastWorkedAt=Date.now();p.status="active";save();toast(T("resumed"));open(id);break;}
    case"focus":{var fp=project(id);if(fp){fp.lastWorkedAt=Date.now();fp.status="active";save();}nav("focus",id);break;}
    case"focusToggle":Focus.toggle();break;
    case"focusReset":Focus.reset();break;
    case"snapshot":sheetSnapshot(id);break;
    case"doSnapshot":{var p=project(id);var done=val("snDone");var nx=val("snNext");var acc=val("snAcc");var bl=val("snBlock");
      p.sessions=p.sessions||[];p.sessions.push({id:uid(),startedAt:p.lastWorkedAt||Date.now(),endedAt:Date.now(),summary:done,nextStep:nx,accomplishments:acc?acc.split("\n").map(function(x){return x.replace(/^[-•\s]+/,"").trim()}).filter(Boolean):[]});
      if(nx)p.nextAction=nx;if(bl){p.blockers=p.blockers||[];p.blockers.unshift(bl);}p.lastWorkedAt=Date.now();p.updatedAt=Date.now();save();closeSheet();toast(T("saved"));render();break;}
    case"status":break; // handled by change
    case"editNext":sheetPrompt(T("nextAction"),T("setNext"),project(id).nextAction,"doEditNext",id);break;
    case"doEditNext":{var v=document.getElementById("promptInput").value.trim();project(id).nextAction=v;save();closeSheet();render();break;}
    case"toggle":{var t=S.tasks.find(function(x){return x.id===id});t.done=!t.done;t.updatedAt=Date.now();save();render();break;}
    case"toggleNext":{var t=S.tasks.find(function(x){return x.id===id});t.isNext=!t.isNext;t.updatedAt=Date.now();save();render();break;}
    case"editTask":sheetEditTask(id);break;
    case"doEditTask":{var t=S.tasks.find(function(x){return x.id===id});if(!t){closeSheet();break;}t.title=val("etTitle")||t.title;t.priority=SH._eprio||t.priority;var db=SH._edue;t.due=db==="today"?startOfDay(Date.now()):db==="tomorrow"?startOfDay(Date.now())+86400000:null;t.updatedAt=Date.now();save();closeSheet();render();break;}
    case"delTask":{pushUndo();tomb(id);S.tasks=S.tasks.filter(function(x){return x.id!==id});save();closeSheet();render();toastAction(T("deleted"),T("undo"),undoLast);break;}
    case"editProject":sheetEditProject(id);break;
    case"doEditProject":{var p=project(id);if(!p){closeSheet();break;}p.name=val("epName")||p.name;p.version=val("epVer");p.subtitle=val("epSub");p.status=SH._est||p.status;p.color=SH._ec||p.color;p.updatedAt=Date.now();save();closeSheet();render();break;}
    case"delItem":{var ty=el.getAttribute("data-t");pushUndo();tomb(id);S[ty]=(S[ty]||[]).filter(function(x){return x.id!==id});save();render();toastAction(T("deleted"),T("undo"),undoLast);break;}
    case"tfilter":S._taskFilter=el.getAttribute("data-f");render();break;
    case"tsort":S._sort=el.getAttribute("data-s");save();render();break;
    case"selMode":S._sel=!S._sel;S._selType=el.getAttribute("data-t")||"tasks";S._selIds=[];save();render();break;
    case"pick":{S._selIds=S._selIds||[];var pi=S._selIds.indexOf(id);if(pi>=0)S._selIds.splice(pi,1);else S._selIds.push(id);save();render();break;}
    case"bulkDone":{(S._selIds||[]).forEach(function(tid){var t=S.tasks.find(function(x){return x.id===tid});if(t)t.done=true});S._sel=false;S._selIds=[];save();render();break;}
    case"bulkDel":{var ids=S._selIds||[];if(ids.length){pushUndo();tomb(ids);var ty=S._selType||"tasks";
      if(ty==="projects"){S.projects=S.projects.filter(function(p){return ids.indexOf(p.id)<0});S.tasks=S.tasks.filter(function(t){return ids.indexOf(t.projectId)<0});S.notes=S.notes.filter(function(nn){return ids.indexOf(nn.projectId)<0});}
      else{S[ty]=(S[ty]||[]).filter(function(x){return ids.indexOf(x.id)<0});}
      S._sel=false;S._selIds=[];save();render();toastAction(T("deleted"),T("undo"),undoLast);}else{S._sel=false;save();render();}break;}
    case"bulkPin":{(S._selIds||[]).forEach(function(pid){var p=project(pid);if(p)p.pinned=!p.pinned});S._sel=false;S._selIds=[];save();render();break;}
    case"pfilter":S._pfilter=el.getAttribute("data-f");save();render();break;
    case"addNote":sheetNote(id,null);break;
    case"openNote":{var n=S.notes.find(function(x){return x.id===id});sheetNote(n.projectId,id);break;}
    case"doNote":{var pid=el.getAttribute("data-pid"),ti=document.getElementById("ntTitle").value.trim(),bo=document.getElementById("ntBody").value.trim();
      if(!ti&&!bo)return;if(id){var n=S.notes.find(function(x){return x.id===id});n.title=ti;n.body=bo;n.updatedAt=Date.now();}
      else{S.notes.push({id:uid(),title:ti||"—",body:bo,projectId:pid,createdAt:Date.now(),updatedAt:Date.now()});}
      save();closeSheet();toast(T("saved"));render();break;}
    case"delNote":{pushUndo();tomb(id);S.notes=S.notes.filter(function(x){return x.id!==id});save();closeSheet();render();toastAction(T("deleted"),T("undo"),undoLast);break;}
    case"delProject":{if(confirm(T("delete")+" — "+esc(project(id).name)+"؟")){tomb([id].concat(S.tasks.filter(function(t){return t.projectId===id}).map(function(t){return t.id}),S.notes.filter(function(n){return n.projectId===id}).map(function(n){return n.id})));S.projects=S.projects.filter(function(x){return x.id!==id});S.tasks=S.tasks.filter(function(t){return t.projectId!==id});S.notes=S.notes.filter(function(nn){return nn.projectId!==id});save();nav("projects");}break;}
    case"triageTask":{var it=S.inbox.find(function(x){return x.id===id});var sel=document.querySelector('[data-triage-proj="'+id+'"]');var pid=sel?sel.value:"";
      S.tasks.push({id:uid(),title:it.text,projectId:pid||null,done:false,isNext:false,createdAt:Date.now(),priority:S.tasks.length+1});
      S.inbox=S.inbox.filter(function(x){return x.id!==id});save();sheetTriage();break;}
    case"triageNote":{var it=S.inbox.find(function(x){return x.id===id});var sel=document.querySelector('[data-triage-proj="'+id+'"]');var pid=sel?sel.value:"";
      S.notes.push({id:uid(),title:it.text.slice(0,40),body:it.text,projectId:pid||null,createdAt:Date.now(),updatedAt:Date.now()});
      S.inbox=S.inbox.filter(function(x){return x.id!==id});save();sheetTriage();break;}
    case"triageDel":{S.inbox=S.inbox.filter(function(x){return x.id!==id});save();sheetTriage();break;}
    case"saveJournal":{var tk=todayKey();var v=document.getElementById("jnote").value;S.journal[tk]=S.journal[tk]||{};S.journal[tk].note=v;S.journal[tk].updatedAt=Date.now();save();toast(T("saved"));break;}
    case"setMood":{var tk=todayKey();S.journal[tk]=S.journal[tk]||{};S.journal[tk].mood=el.getAttribute("data-m");S.journal[tk].updatedAt=Date.now();save();render();break;}
    case"setEnergy":{var tk=todayKey();S.journal[tk]=S.journal[tk]||{};S.journal[tk].energy=el.getAttribute("data-e");S.journal[tk].updatedAt=Date.now();save();render();break;}
    case"tlfilter":S._tlf=el.getAttribute("data-f");render();break;
    case"toggleNotif":{if(!window.Notification){toast("—");break;}if(S.notifOn){S.notifOn=false;save();render();break;}Notification.requestPermission().then(function(pm){S.notifOn=(pm==="granted");save();render();toast(S.notifOn?T("notifOnMsg"):T("notifBlocked"));});break;}
    case"lang":S.lang=el.getAttribute("data-l");save();render();break;
    case"theme":S.theme=el.getAttribute("data-t");document.querySelector('meta[name=theme-color]').setAttribute("content",S.theme==="dark"?"#0B0C0F":"#F4F5F8");save();render();break;
    case"export":{var blob=new Blob([JSON.stringify(S,null,2)],{type:"application/json"});var u=URL.createObjectURL(blob);var a=document.createElement("a");a.href=u;a.download="continuum-backup.json";a.click();break;}
    case"signIn":{var em=val("authEmail"),pw=val("authPass");if(!em||!pw)return;CxSync.signIn(em,pw).then(function(r){toast(r&&r.error?(r.error.message||"error"):T("signedIn"))}).catch(function(){toast("error")});break;}
    case"signUp":{var em=val("authEmail"),pw=val("authPass");if(!em||!pw)return;CxSync.signUp(em,pw).then(function(r){toast(r&&r.error?(r.error.message||"error"):T("checkEmail"))}).catch(function(){toast("error")});break;}
    case"signOut":{CxSync.signOut().then(function(){toast(T("signedOut"));render();});break;}
    case"clear":{if(confirm(T("clearQ"))){S=seed();save();location.href="index.html";}break;}
  }
});
// status select change
document.addEventListener("change",function(e){
  var s=e.target.closest('[data-a="status"]');
  if(s){project(S.activePid).status=s.value;save();render();}
});
// search input
document.addEventListener("input",function(e){
  if(e.target.id==="searchInput"){S._q=e.target.value;var pos=e.target.selectionStart;renderMain();var ni=document.getElementById("searchInput");if(ni){ni.focus();try{ni.setSelectionRange(pos,pos)}catch(_){}}}
});
// drawer overlay close
document.getElementById("drawerBack").addEventListener("click",function(e){if(e.target===this)this.classList.remove("open")});
// enter to quick-add / ask
document.addEventListener("keydown",function(e){
  if(e.key==="Enter"&&e.target&&e.target.id==="qAdd"){e.preventDefault();var b=document.querySelector('[data-a="quickAddTask"]');if(b)b.click();}
  if(e.key==="Enter"&&e.target&&e.target.id==="askInput"){e.preventDefault();var b=document.querySelector('[data-a="doAsk"]');if(b)b.click();}
});

// ambient particles (always alive)
(function particles(){
  var c=document.getElementById("particles");if(!c||!c.getContext)return;var ctx=c.getContext("2d");if(!ctx)return;var ps=[],w,h;
  function size(){w=c.width=c.offsetWidth||window.innerWidth;h=c.height=c.offsetHeight||window.innerHeight;}
  function mk(){return{x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.3+.3,vx:(Math.random()-.5)*.14,vy:(Math.random()-.5)*.14,a:Math.random()*.25+.05,ph:Math.random()*6.28,ps:Math.random()*.01+.004}}
  function init(){size();ps=[];for(var i=0;i<34;i++)ps.push(mk())}
  function loop(){ctx.clearRect(0,0,w,h);for(var i=0;i<ps.length;i++){var p=ps[i];p.x+=p.vx;p.y+=p.vy;p.ph+=p.ps;if(p.x<-10)p.x=w+10;if(p.x>w+10)p.x=-10;if(p.y<-10)p.y=h+10;if(p.y>h+10)p.y=-10;var a=p.a*(.6+.4*Math.sin(p.ph));ctx.beginPath();ctx.arc(p.x,p.y,Math.max(.1,p.r),0,6.283);ctx.fillStyle="rgba(180,200,255,"+a+")";ctx.fill();}requestAnimationFrame(loop)}
  init();loop();window.addEventListener("resize",init);
})();

window.__PAGE__=window.__PAGE__||"home";
S.view=window.__PAGE__;
if(window.__PAGE__==="project"||window.__PAGE__==="focus"){try{var _pid=new URLSearchParams(location.search).get("id");if(_pid)S.activePid=_pid;}catch(e){}}
render();
if(window.CxSync){
  var _subDone=false,_lastAuthUid=null;
  CxSync.onAuth(function(u){
    var uid=u?(u.uid||u.email||"1"):null;
    if(uid===_lastAuthUid)return;   // ignore repeat fires (token refresh etc.)
    _lastAuthUid=uid;
    if(S.view==="profile")render();
    if(u){CxSync.pull().then(function(remote){
      if(remote&&remote.data){adoptRemote(remote.data);toast(T("synced"));} else {CxSync.push(cleanState());}
      if(CxSync.subscribe&&!_subDone){_subDone=true;CxSync.subscribe(function(rem){
        if(!rem||!rem.data)return;
        var merged=mergeStates(cleanState(),rem.data);
        if(syncSig(merged)!==syncSig(cleanState())){applyState(merged,false);}  // apply locally, DO NOT push (prevents echo loop)
      });}
    });}
  });
  CxSync.init();
}
try{ if(S.notifOn&&window.Notification&&Notification.permission==="granted"){ var _due=S.tasks.filter(function(t){return !t.done&&t.due&&startOfDay(t.due)<=startOfDay(Date.now())}).length; if(_due&&S._notifiedDay!==todayKey()){ S._notifiedDay=todayKey(); save(); new Notification("Continuum",{body:(S.lang==="ar"?(_due+" مهام مستحقّة النهاردة"):(_due+" tasks due today"))}); } } }catch(e){}
})();