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
  contextRecovered:"تم استرجاع السياق",resumeYourWork:"استكمل شغلك",sessionSummary:"ملخّص الجلسة",accomplishments:"اللي اتعمل",continueLeft:"كمّل من حيث وقفت",sessionNotes:"ملاحظات الجلسة",recentCommits:"آخر Commits",recentDecisions:"آخر القرارات",blockersT:"العوائق",relevantDocs:"مستندات ذات صلة",reconstructed:function(n){return "اتجمّع من "+n+" إشارات · تحدّث الآن"},todaysFocus:"تركيز النهاردة",aiSuggestions:"اقتراحات الذكاء",estimate:"تقدير",pHigh:"عالي",pMed:"متوسط",pLow:"منخفض",dueToday:"النهاردة",dueTomorrow:"بكرة",due:"موعد",knowledge:"المعرفة",courses:"الكورسات",bookmarks:"العلامات",promptLib:"مكتبة البرومبت",servers:"السيرفرات",repositories:"المستودعات",timeline:"الخط الزمني",aiAssistant:"المساعد",askContinuum:"اسأل Continuum",askPh:"اسأل عن شغلك…",pinned:"مثبّت",workspaceSec:"مساحة العمل",systemSec:"النظام",logDecision:"سجّل قرار",addCommit:"أضف Commit",addBlocker:"أضف عائق",reason:"السبب",addBookmark:"أضف علامة",addCourse:"أضف كورس",addPrompt:"أضف برومبت",addServer:"أضف سيرفر",addRepo:"أضف مستودع",url:"الرابط",provider:"المصدر",items:"عناصر",noItems:"لسه فاضي.",priority:"الأولوية",mobileView:"موبايل",desktopView:"سطح المكتب",contextHealth:"صحّة السياق",contextHealthSub:"جاهزيتك ترجع لشغلك في ثانية",inFlow:"شغّال",openTasks:"مهام مفتوحة",focusWk:"تركيز/أسبوع",learning:"التعلّم",sessionHeat:"سخونة الجلسات",dayStreak:"يوم متتابع",select:"تحديد",selDone:"تم",byPrio:"الأولوية",byDue:"الموعد",byNew:"الأحدث",selected:"محدّد",complete:"إكمال",delSelQ:"تحذف المحدّد؟",focusMode:"وضع التركيز",start:"ابدأ",pause:"إيقاف",reset:"تصفير",exit:"خروج",aiInsights:"رؤى الذكاء",insTop:"أكتر مشروع نشط",insBlk:"عوائق مفتوحة",insFocus:"تركيز الأسبوع",inboxT:"الوارد",inboxSub:"استرجاع السياق ورؤى وتذكيرات",contextRecovery:"استرجاع السياق",reminders:"تذكيرات",inboxRaw:"ملتقَطات",inboxEmpty:"الوارد فاضي ✓",pin:"تثبيت",account:"الحساب",signIn:"دخول",signUp:"حساب جديد",signOut:"تسجيل خروج",email:"الإيميل",password:"كلمة السر",syncOff:"المزامنة السحابية مش مفعّلة — بص على FIREBASE_SETUP.md",syncHint:"الدخول بيحمّل نسختك السحابية على الجهاز ده.",synced:"اتزامن ✓",signedIn:"أهلاً بيك ✓",signedOut:"خرجت",checkEmail:"بص إيميلك لتأكيد الحساب",syncStatus:"الحالة",cloudGuest:"محلي (بدون حساب)",editTask:"تعديل المهمة",editProject:"تعديل المشروع",version:"الإصدار",subtitle:"الوصف",statusL:"الحالة",color:"اللون",undo:"تراجع",deleted:"اتحذف",restored:"رجع",mood:"المزاج",energy:"الطاقة",e_high:"عالية",e_mid:"وسط",e_low:"منخفضة",daySummary:"ملخّص اليوم",doneT:"اتعمل",pastEntries:"مدوّنات سابقة",yesterday:"إمبارح",notifs:"إشعارات المتصفّح",notifOnMsg:"الإشعارات مفعّلة ✓",notifBlocked:"المتصفّح رافض الإشعارات",work:"الشغل",workSub:"كل السايتس والريبوز اللي اشتغلت عليها",addSite:"ضيف سايت",editSite:"تعديل سايت",workEmpty:"لسه مفيش سايتس — ضيف أول واحد",siteName:"اسم السايت",liveUrl:"لينك مباشر (Live)",deployUrl:"لينك الديبلوي",repoUrl:"لينك الريبو (GitHub)",firebaseUrl:"لينك Firebase / Console",edit:"تعديل",copy:"نسخ",copied:"اتنسخ",currentL:"الدرس الحالي",totalL:"الإجمالي",details:"تفاصيل",openLink:"افتح اللينك",results:"نتيجة",welcomeSub:"خلّينا نبدأ — التطبيق هيفتكرلك كل حاجة.",welcomeTitle:"التطبيق بيفتكر، إنت مش لازم تفتكر",welcomeLine:"التقط أفكارك، اشتغل، والتطبيق يرجّعك لسياقك في ثانية.",loop_capture:"التقاط",loop_link:"ربط",loop_work:"شغل",loop_snapshot:"لقطة",loop_resume:"استئناف",captureL:"التقاط",getStarted:"يلا نبدأ",aiSettings:"الذكاء الاصطناعي",aiProviderNote:"اختر المزوّد (Anthropic أو Groq). مفتاحك بيتخزّن في المتصفّح بس ومابيتزامنش سحابيًا.",aiKey:"مفتاح الـ API",aiProvider:"المزوّد",close:"قفل",syncErr:"في مشكلة في المزامنة — هيحاول تاني",aiNetErr:"تعذّر الاتصال بالموديل (ممكن CORS أو النت). جرّب مزوّد تاني أو بعدين.",syncOnline:"متزامن ✓",syncSyncing:"بيزامن…",syncErrShort:"خطأ — هيعيد",importSnapshot:"استيراد سناپشوت",updateViaCapture:"تحديث بالالتقاط",describeAI:"اكتب بحرية",pasteJson:"الصق JSON",captureFreePh:"اكتب تفاصيل المشروع بحرية… الفيز الحالي، اللي خلصته بالمية، العوائق، اللينكات، أي أفكار",generate:"توليد",importNow:"استيراد",captureParseErr:"الرد مش JSON صالح — جرّب تاني",confirmMatch:"تأكيد المطابقة",looksLike:"شكله بيطابق",noGuess:"مش متأكد من التطابق — اختار يدوي",pickProject:"المشروع",newProjectOpt:"＋ مشروع جديد",confirmImport:"تأكيد",created:"اتعمل",updated:"اتحدّث",reorder:"ترتيب",reorderDone:"تم الترتيب",linkedBadge:"مرتبط",notesPage:"الملاحظات",installApp:"ثبّت التطبيق",installIosHint:"لتثبيت Continuum على الآيفون: دوس زر المشاركة في سفاري، وبعدين اختار \u00abإضافة إلى الشاشة الرئيسية\u00bb.",aiModel:"الموديل",aiSaved:"اتحفظ ✓",aiCleared:"اتمسح",aiEnabled:"الـ AI مفعّل ✓",aiThinking:"بيفكّر",aiOffHint:"فعّل الـ AI الحقيقي من الإعدادات (Profile) عشان إجابات أذكى.",aiErrHint:"في مشكلة في النداء — اتأكد من المفتاح والموديل.",timerMode:"مؤقّت",phWork:"شغل",phBreak:"راحة",calendar:"التقويم",addCal:"أضف للتقويم",profileT:"الملف",you:"أنت",kBookmark:"علامة",kReference:"مرجع",hoursT:"ساعات",companiesNav:"الشركات",companiesSub:"من أول تواصل لحد التسليم",newCompany:"شركة جديدة",companyName:"اسم الشركة",companiesEmpty:"لسه مفيش شركات — دوس + عشان تضيف أول واحدة",searchCoPh:"دوّر بالاسم، المجال، الدولة…",allLabel:"الكل",secOverview:"نظرة عامة",secIntel:"الاستكشاف",secAudit:"التدقيق",secDM:"أصحاب القرار",secOutreach:"التواصل",secProposal:"العرض",secDelivery:"التنفيذ",website:"الموقع",industry:"المجال",country:"الدولة",companySnapshot:"لمحة عن الشركة",productsServices:"المنتجات والخدمات",market:"السوق",competitors:"المنافسين",techStack:"التِك ستاك",researchSources:"مصادر البحث",masterAudit:"التدقيق الشامل",execSnapshot:"ملخص تنفيذي",topProblems:"أهم المشاكل",quickWins:"مكاسب سريعة",opportunities:"الفرص",roleFld:"الاسم / المنصب",linkedin:"لينكدإن",painPoints:"نقاط الألم",personalizedMsg:"رسالة مخصّصة",outreachStatus:"حالة التواصل",roleMarketing:"التسويق",roleSales:"المبيعات",roleProduct:"المنتج",roleTech:"التكنولوجيا",video:"فيديو",calls:"مكالمات",followUps:"متابعات",meetingNotes:"ملاحظات الاجتماع",scope:"نطاق العمل",pricing:"التسعير",propTimeline:"الجدول الزمني",deliverables:"المخرجات",proposalStatus:"حالة العرض",discovery:"الاكتشاف",brand:"الهوية البصرية",devPhase:"التطوير",launch:"الإطلاق",caseStudy:"دراسة حالة",csLead:"عميل محتمل",csResearch:"بحث",csAudit:"تدقيق",csOutreach:"تواصل",csMeeting:"اجتماع",csProposal:"عرض سعر",csWon:"اتكسبت",csLost:"اترفضت",csCompleted:"خلصت",pCritical:"حرج",osNotStarted:"لسه ما بدأناش",osContacted:"اتواصلنا",osReplied:"ردّ",osMeetingSet:"حددنا اجتماع",osNoResponse:"مفيش رد",prDraft:"مسوّدة",prSent:"اترسلت",prReview:"تحت المراجعة",prAccepted:"اتقبلت",prDeclined:"اترفضت",commercialReadiness:"جاهزية الشراء",decisionComplexity:"تعقيد القرار",outreachProbability:"احتمالية نجاح التواصل",secSignals:"إشارات الشراء",signalLabel:"الإشارة",ratingLbl:"التقييم",researchCompany:"شركة بالبحث",startResearch:"ابدأ البحث",researching:"بيدوّر على المعلومات…",secResearch:"بحث حي",reRunResearch:"أعد البحث",researchNeedsAnthropic:"البحث الحي محتاج Anthropic كمزوّد — غيّره من الإعدادات",researchEmpty:"لسه مفيش بحث — دوس \"أعد البحث\"",secIntelDb:"قاعدة معرفة الشركة",rawResearch:"البحث الخام",structuring:"بينظّم البيانات…",intelDbEmpty:"لسه مفيش قاعدة بيانات — البحث هيبنيها تلقائي",secStrategicAudit:"التدقيق الاستراتيجي",runStrategicAudit:"شغّل التدقيق الاستراتيجي",reRunStrategicAudit:"أعد التدقيق",analyzingStrategy:"بيحلّل الاستراتيجية…",strategicAuditGate:"شغّل الـ Research الأول عشان تبقى فيه قاعدة بيانات نحللها",strategicAuditEmpty:"لسه مفيش تدقيق استراتيجي — دوس تشغيل",secCommercialStrategy:"استراتيجية تجارية",runCommercialStrategy:"شغّل الاستراتيجية التجارية",reRunCommercialStrategy:"أعد التوليد",buildingStrategy:"بيبني الاستراتيجية…",commercialStrategyGate:"شغّل التدقيق الاستراتيجي الأول",commercialStrategyEmpty:"لسه مفيش استراتيجية تجارية — دوس تشغيل",secEngagement:"باقة التعامل مع العميل",runEngagement:"جهّز الباقة",reRunEngagement:"أعد التجهيز",buildingEngagement:"بيجهّز الباقة…",engagementGate:"شغّل الاستراتيجية التجارية الأول",engagementEmpty:"لسه مفيش باقة — دوس تشغيل",secSnapshot:"لمحة تنفيذية",researchCoverage:"نسبة اكتمال البيانات",strengthsLbl:"نقاط القوة",weaknessesLbl:"نقاط الضعف",threatsLbl:"التهديدات",leadership:"القيادة",missingInfo:"معلومات ناقصة",noKgYet:"لسه مفيش بيانات مستخرجة — هتتبني تلقائي مع تشغيل المراحل",employeesLbl:"عدد الموظفين",dealSize:"حجم الصفقة المتوقع",foundDm:"أصحاب قرار مكتشفين",importCompanySnapshot:"استيراد بيانات شركة",captureCoFreePh:"الصق أو اكتب بحرية أي معلومات عن الشركة… من موقعها، LinkedIn، تقارير، ملاحظات",pickCompany:"الشركة",newCompanyOpt:"＋ شركة جديدة"},
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
  contextRecovered:"Context recovered",resumeYourWork:"Resume your work",sessionSummary:"Session summary",accomplishments:"What you did",continueLeft:"Continue where you left off",sessionNotes:"Open session notes",recentCommits:"Recent commits",recentDecisions:"Recent decisions",blockersT:"Blockers",relevantDocs:"Relevant docs",reconstructed:function(n){return "Reconstructed from "+n+" signals · updated just now"},todaysFocus:"Today's focus",aiSuggestions:"AI suggestions",estimate:"estimate",pHigh:"HIGH",pMed:"MED",pLow:"LOW",dueToday:"Today",dueTomorrow:"Tomorrow",due:"due",knowledge:"Knowledge",courses:"Courses",bookmarks:"Bookmarks",promptLib:"Prompt Library",servers:"Servers",repositories:"Repositories",timeline:"Timeline",aiAssistant:"AI Assistant",askContinuum:"Ask Continuum",askPh:"Ask about your work…",pinned:"Pinned",workspaceSec:"Workspace",systemSec:"System",logDecision:"Log decision",addCommit:"Add commit",addBlocker:"Add blocker",reason:"Reason",addBookmark:"Add bookmark",addCourse:"Add course",addPrompt:"Add prompt",addServer:"Add server",addRepo:"Add repository",url:"URL",provider:"Provider",items:"items",noItems:"Nothing here yet.",priority:"Priority",mobileView:"Mobile",desktopView:"Desktop",contextHealth:"Context Health",contextHealthSub:"How ready you are to jump back in",inFlow:"In flow",openTasks:"Open tasks",focusWk:"Focus/wk",learning:"Learning",sessionHeat:"Session heat",dayStreak:"day streak",select:"Select",selDone:"Done",byPrio:"Priority",byDue:"Due",byNew:"Newest",selected:"selected",complete:"Complete",delSelQ:"Delete selected tasks?",focusMode:"Focus mode",start:"Start",pause:"Pause",reset:"Reset",exit:"Exit",aiInsights:"AI insights",insTop:"Most active project",insBlk:"Open blockers",insFocus:"Focus this week",inboxT:"Inbox",inboxSub:"Context recovery, insights & reminders",contextRecovery:"Context recovery",reminders:"Reminders",inboxRaw:"Captures",inboxEmpty:"Inbox is clear ✓",pin:"Pin",account:"Account",signIn:"Sign in",signUp:"Sign up",signOut:"Sign out",email:"Email",password:"Password",syncOff:"Cloud sync not set up — see FIREBASE_SETUP.md",syncHint:"Signing in loads your cloud copy onto this device.",synced:"Synced ✓",signedIn:"Welcome ✓",signedOut:"Signed out",checkEmail:"Check your email to confirm",syncStatus:"Status",cloudGuest:"Local (no account)",editTask:"Edit task",editProject:"Edit project",version:"Version",subtitle:"Subtitle",statusL:"Status",color:"Color",undo:"Undo",deleted:"Deleted",restored:"Restored",mood:"Mood",energy:"Energy",e_high:"High",e_mid:"Mid",e_low:"Low",daySummary:"Day summary",doneT:"Done",pastEntries:"Past entries",yesterday:"Yesterday",notifs:"Browser notifications",notifOnMsg:"Notifications on ✓",notifBlocked:"Browser blocked notifications",work:"Work",workSub:"All sites and repos you have worked on",addSite:"Add site",editSite:"Edit site",workEmpty:"No sites yet, add your first",siteName:"Site name",liveUrl:"Live URL",deployUrl:"Deploy URL",repoUrl:"Repo URL (GitHub)",firebaseUrl:"Firebase / Console URL",edit:"Edit",copy:"Copy",copied:"Copied",currentL:"Current lesson",totalL:"Total",details:"Details",openLink:"Open link",results:"results",welcomeSub:"Get started. The app remembers everything for you.",welcomeTitle:"The app does the remembering for you",welcomeLine:"Capture your thoughts, do the work, and jump right back into context.",loop_capture:"Capture",loop_link:"Link",loop_work:"Work",loop_snapshot:"Snapshot",loop_resume:"Resume",captureL:"Capture",getStarted:"Get started",aiSettings:"AI",aiProviderNote:"Choose a provider (Anthropic or Groq). Your key is stored only in this browser and is never synced.",aiKey:"API key",aiProvider:"Provider",close:"Close",syncErr:"Sync problem, retrying",aiNetErr:"Could not reach the model (CORS or network). Try another provider or later.",syncOnline:"Synced",syncSyncing:"Syncing",syncErrShort:"Error, retrying",importSnapshot:"Import snapshot",updateViaCapture:"Update via capture",describeAI:"Describe freely",pasteJson:"Paste JSON",captureFreePh:"Describe the project freely, current phase, whats done percent, blockers, links, ideas",generate:"Generate",importNow:"Import",captureParseErr:"Response was not valid JSON, try again",confirmMatch:"Confirm match",looksLike:"Looks like",noGuess:"Not sure of the match, pick manually",pickProject:"Project",newProjectOpt:"New project",confirmImport:"Confirm",created:"Created",updated:"Updated",reorder:"Reorder",reorderDone:"Done ordering",linkedBadge:"Linked",notesPage:"Notes",installApp:"Install app",installIosHint:"To install Continuum on iPhone: tap the Share button in Safari, then choose \u00abAdd to Home Screen\u00bb.",aiModel:"Model",aiSaved:"Saved",aiCleared:"Cleared",aiEnabled:"AI enabled",aiThinking:"Thinking",aiOffHint:"Enable real AI in Profile settings for smarter answers.",aiErrHint:"Request failed — check your key and model.",timerMode:"Timer",phWork:"Focus",phBreak:"Break",calendar:"Calendar",addCal:"Add to calendar",profileT:"Profile",you:"You",kBookmark:"Bookmark",kReference:"Reference",hoursT:"Hours",companiesNav:"Companies",companiesSub:"From first contact to delivery",newCompany:"New Company",companyName:"Company name",companiesEmpty:"No companies yet — tap + to add your first",searchCoPh:"Search name, industry, country…",allLabel:"All",secOverview:"Overview",secIntel:"Intelligence",secAudit:"Audit",secDM:"Decision Makers",secOutreach:"Outreach",secProposal:"Proposal",secDelivery:"Delivery",website:"Website",industry:"Industry",country:"Country",companySnapshot:"Company snapshot",productsServices:"Products & services",market:"Market",competitors:"Competitors",techStack:"Tech stack",researchSources:"Research sources",masterAudit:"Master audit",execSnapshot:"Executive snapshot",topProblems:"Top problems",quickWins:"Quick wins",opportunities:"Opportunities",roleFld:"Name / Title",linkedin:"LinkedIn",painPoints:"Pain points",personalizedMsg:"Personalized messaging",outreachStatus:"Outreach status",roleMarketing:"Marketing",roleSales:"Sales",roleProduct:"Product",roleTech:"Technology",video:"Video",calls:"Calls",followUps:"Follow ups",meetingNotes:"Meeting notes",scope:"Scope",pricing:"Pricing",propTimeline:"Timeline",deliverables:"Deliverables",proposalStatus:"Proposal status",discovery:"Discovery",brand:"Brand",devPhase:"Development",launch:"Launch",caseStudy:"Case study",csLead:"Lead",csResearch:"Research",csAudit:"Audit",csOutreach:"Outreach",csMeeting:"Meeting",csProposal:"Proposal",csWon:"Won",csLost:"Lost",csCompleted:"Completed",pCritical:"CRITICAL",osNotStarted:"Not started",osContacted:"Contacted",osReplied:"Replied",osMeetingSet:"Meeting set",osNoResponse:"No response",prDraft:"Draft",prSent:"Sent",prReview:"Under review",prAccepted:"Accepted",prDeclined:"Declined",commercialReadiness:"Commercial readiness",decisionComplexity:"Decision complexity",outreachProbability:"Outreach probability",secSignals:"Buying signals",signalLabel:"Signal",ratingLbl:"Rating",researchCompany:"Research Company",startResearch:"Start research",researching:"Researching…",secResearch:"Live Research",reRunResearch:"Re-run research",researchNeedsAnthropic:"Live research needs Anthropic as the provider — switch it in Settings",researchEmpty:"No research yet — tap \"Re-run research\"",secIntelDb:"Company Intelligence Database",rawResearch:"Raw research",structuring:"Structuring…",intelDbEmpty:"No structured database yet — running research will build it automatically",secStrategicAudit:"Strategic Audit",runStrategicAudit:"Run Strategic Audit",reRunStrategicAudit:"Re-run audit",analyzingStrategy:"Analyzing strategy…",strategicAuditGate:"Run research first so there's a database to analyze",strategicAuditEmpty:"No strategic audit yet — tap run",secCommercialStrategy:"Commercial Strategy",runCommercialStrategy:"Run Commercial Strategy",reRunCommercialStrategy:"Regenerate",buildingStrategy:"Building strategy…",commercialStrategyGate:"Run the strategic audit first",commercialStrategyEmpty:"No commercial strategy yet — tap run",secEngagement:"Engagement Package",runEngagement:"Build Engagement Package",reRunEngagement:"Rebuild",buildingEngagement:"Building package…",engagementGate:"Run the commercial strategy first",engagementEmpty:"No engagement package yet — tap run",secSnapshot:"Company Snapshot",researchCoverage:"Research coverage",strengthsLbl:"Strengths",weaknessesLbl:"Weaknesses",threatsLbl:"Threats",leadership:"Leadership",missingInfo:"Missing information",noKgYet:"No extracted data yet — this fills in automatically as pipeline stages run",employeesLbl:"Employees",dealSize:"Estimated deal size",foundDm:"Decision makers found",importCompanySnapshot:"Import Company Snapshot",captureCoFreePh:"Paste or freely describe anything about the company… from its website, LinkedIn, reports, notes",pickCompany:"Company",newCompanyOpt:"New company"}
};

/* ---------------- state ---------------- */
var KEY="continuum:v1";
var S=load();S.sites=S.sites||[];S._deleted=S._deleted||{};
if(!S.mode)S.mode="quick";
["projects","tasks","notes","bookmarks","courses","prompts","servers","repos","decisions","companies"].forEach(function(k){if(!Array.isArray(S[k]))S[k]=[]});
if(!S.journal)S.journal={};
S.projects.forEach(function(p){p.commits=p.commits||[];p.blockers=p.blockers||[];(p.sessions||[]).forEach(function(s){s.accomplishments=s.accomplishments||[]})});
S.companies.forEach(function(c){c.ov=c.ov||{};if(c.ov.commercialReadiness===undefined)c.ov.commercialReadiness="";if(c.ov.decisionComplexity===undefined)c.ov.decisionComplexity="";if(c.ov.outreachProbability===undefined)c.ov.outreachProbability="";if(!Array.isArray(c.sig))c.sig=[{label:"",stars:""},{label:"",stars:""},{label:"",stars:""},{label:"",stars:""},{label:"",stars:""}];if(c.research===undefined)c.research="";if(c.intelDb===undefined)c.intelDb="";if(c.strategicAudit===undefined)c.strategicAudit="";if(c.commercialStrategy===undefined)c.commercialStrategy="";if(c.engagementPackage===undefined)c.engagementPackage="";c.kg=Object.assign(defaultKg(),c.kg||{});});
function load(){
  try{var r=localStorage.getItem(KEY);if(r)return JSON.parse(r);}catch(e){}
  return seed();
}
function save(){try{S._localAt=Date.now();localStorage.setItem(KEY,JSON.stringify(S));}catch(e){} if(window.CxSync&&CxSync.loggedIn&&CxSync.loggedIn())CxSync.pushDebounced(cleanState);}
function seed(){
  var lang=(navigator.language||"ar").indexOf("ar")===0?"ar":"en";
  return {
    lang:lang, theme:"dark", mode:"advanced", uiView:"mobile", view:"home",
    projects:[], tasks:[], notes:[], bookmarks:[], courses:[], prompts:[], servers:[], repos:[], sites:[], decisions:[], inbox:[], companies:[], journal:{}, _deleted:{}
  };
}
function startOfDay(ts){var d=new Date(ts);d.setHours(0,0,0,0);return d.getTime()}
function T(k){var d=I18N[S.lang]||I18N.ar;return d[k];}

/* ---------------- helpers ---------------- */
function uid(){return Math.random().toString(36).slice(2,10)}
function esc(s){return(s==null?"":String(s)).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function project(id){return S.projects.find(function(p){return p.id===id})}
function company(id){return S.companies.find(function(c){return c.id===id})}
function defaultKg(){return {ceo:"",cmo:"",vpMarketing:"",industry:"",competitors:[],products:[],pricing:"",problems:[],strengths:[],weaknesses:[],buyingSignals:[],hiring:[],funding:"",acquisition:"",techStack:[],cms:"",analytics:[],socialLinks:[],employees:"",locations:[],partners:[],certifications:[],awards:[],recentNews:[],useCases:[],caseStudies:[],keywords:[],painPoints:[],recommendedServices:[],estimatedDealSize:"",decisionMakers:[],priority:""};}
function newCompanyObj(name){
  var now=Date.now();
  function dm(){return {role:"",linkedin:"",pain:"",msg:"",outStatus:"notStarted"}}
  function sig(){return {label:"",stars:""}}
  return {
    id:uid(),createdAt:now,updatedAt:now,
    ov:{name:name||"",website:"",industry:"",country:"",priority:"medium",status:"lead",next:"",commercialReadiness:"",decisionComplexity:"",outreachProbability:""},
    int:{snapshot:"",products:"",market:"",competitors:"",tech:"",sources:""},
    aud:{master:"",exec:"",problems:"",wins:"",opportunities:""},
    dm:{ceo:dm(),cmo:dm(),cro:dm(),marketing:dm(),sales:dm(),product:dm(),tech:dm()},
    sig:[sig(),sig(),sig(),sig(),sig()],
    out:{linkedin:"",email:"",video:"",calls:"",followups:"",notes:""},
    prop:{scope:"",pricing:"",timeline:"",deliverables:"",status:"draft"},
    del:{discovery:"",brand:"",website:"",dev:"",launch:"",caseStudy:""},
    notes:"",research:"",intelDb:"",strategicAudit:"",commercialStrategy:"",engagementPackage:"",
    kg:defaultKg()
  };
}
function coFieldSet(inputId,val){
  var c=company(S.activeCid);if(!c)return;
  if(inputId==="co_notes"){c.notes=val;c.updatedAt=Date.now();save();return;}
  if(inputId==="co_research"){c.research=val;c.updatedAt=Date.now();save();return;}
  if(inputId==="co_intelDb"){c.intelDb=val;c.updatedAt=Date.now();save();return;}
  if(inputId==="co_strategicAudit"){c.strategicAudit=val;c.updatedAt=Date.now();save();return;}
  if(inputId==="co_commercialStrategy"){c.commercialStrategy=val;c.updatedAt=Date.now();save();return;}
  if(inputId==="co_engagementPackage"){c.engagementPackage=val;c.updatedAt=Date.now();save();return;}
  var msig=inputId.match(/^co_sig_(\d)_label$/);
  if(msig){var si=+msig[1];if(c.sig&&c.sig[si]){c.sig[si].label=val;c.updatedAt=Date.now();save();}return;}
  var m=inputId.match(/^co_dm_([a-zA-Z]+)_([a-zA-Z]+)$/);
  if(m){if(c.dm[m[1]]){c.dm[m[1]][m[2]]=val;c.updatedAt=Date.now();save();}return;}
  var m2=inputId.match(/^co_([a-zA-Z]+)_([a-zA-Z]+)$/);
  if(m2&&c[m2[1]]){c[m2[1]][m2[2]]=val;c.updatedAt=Date.now();save();}
}
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
 user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6.5 8-6.5s8 2.5 8 6.5"/>',
 globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18"/>',
 building:'<rect x="5" y="3" width="14" height="18" rx="1.5"/><path d="M9 7.5h.01M15 7.5h.01M9 11.5h.01M15 11.5h.01M9 15.5h.01M15 15.5h.01M10.5 21v-4h3v4"/>'
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
  h+='<div class="eyebrow">✦ '+T("aiSettings")+'</div>'+aiCard();
  h+='<button class="btn btn-ghost btn-block" data-a="export" style="margin-top:10px">'+T("exportD")+'</button>';
  h+='<button class="btn btn-ghost btn-block" data-a="clear" style="color:var(--danger);margin-top:8px">'+T("clearD")+'</button>';
  return h;
}
function notifyFocus(msg){try{if(window.Notification&&Notification.permission==="granted"){new Notification("Continuum · "+T("focusMode"),{body:msg});}}catch(e){}try{toast(msg)}catch(e){}}
function pad2(n){return (n<10?"0":"")+n;}
function ymd(ts){var d=new Date(ts);return d.getFullYear()+pad2(d.getMonth()+1)+pad2(d.getDate());}
function gcalUrl(t){var start=ymd(t.due),end=ymd(t.due+86400000);var pr=project(t.projectId);return "https://calendar.google.com/calendar/render?action=TEMPLATE&text="+encodeURIComponent(t.title||"Task")+"&dates="+start+"/"+end+"&details="+encodeURIComponent("Continuum task"+(pr?" · "+pr.name:""));}
function icsFor(t){var uidv=(t.id||uid())+"@continuum";return "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Continuum//EN\nBEGIN:VEVENT\nUID:"+uidv+"\nDTSTAMP:"+ymd(Date.now())+"T000000Z\nDTSTART;VALUE=DATE:"+ymd(t.due)+"\nDTEND;VALUE=DATE:"+ymd(t.due+86400000)+"\nSUMMARY:"+String(t.title||"Task").replace(/[\r\n]+/g," ")+"\nEND:VEVENT\nEND:VCALENDAR";}
var Focus={t:0,run:false,iv:null,mode:"up",phase:"work",remain:1500,WORK:1500,BREAK:300,pomos:0,
  fmt:function(sec){var v=(sec==null?this.t:sec);var m=Math.floor(v/60),ss=v%60;return (m<10?"0":"")+m+":"+(ss<10?"0":"")+ss},
  disp:function(){return this.mode==="pomo"?this.fmt(this.remain<0?0:this.remain):this.fmt(this.t)},
  paint:function(){var c=document.getElementById("focusClock");if(c)c.textContent=this.disp();
    var b=document.getElementById("focusToggle");if(b)b.textContent=this.run?T("pause"):T("start");
    var ph=document.getElementById("focusPhase");if(ph)ph.textContent=this.mode==="pomo"?((this.phase==="work"?T("phWork"):T("phBreak"))+" · "+this.pomos+" 🍅"):"";},
  tick:function(){
    if(this.mode==="pomo"){this.remain--;
      if(this.remain<0){if(this.phase==="work"){this.pomos++;this.phase="break";this.remain=this.BREAK;notifyFocus(T("phBreak"));}else{this.phase="work";this.remain=this.WORK;notifyFocus(T("phWork"));}}
    }else{this.t++;}
    this.paint();},
  start:function(){if(this.run)return;this.run=true;var self=this;this.iv=setInterval(function(){self.tick()},1000);this.paint()},
  stop:function(){this.run=false;if(this.iv){clearInterval(this.iv);this.iv=null}this.paint()},
  toggle:function(){this.run?this.stop():this.start()},
  reset:function(){this.stop();this.t=0;this.phase="work";this.remain=this.WORK;this.pomos=0;this.paint()},
  setMode:function(m){this.stop();this.mode=m;this.t=0;this.phase="work";this.remain=this.WORK;this.pomos=0;},
  mount:function(){this.paint()}
};
try{window.Focus=Focus;}catch(e){}
function vFocus(){
  var p=project(S.activePid);if(!p)return '<div class="empty" style="padding:40px">—</div>';
  var s=(p.sessions&&p.sessions.length)?p.sessions[p.sessions.length-1]:null;
  var h='<div class="focus-wrap">';
  h+='<div class="focus-eyebrow">'+T("focusMode")+'</div>';
  h+='<h1 class="focus-title">'+esc(p.name)+'</h1>';
  if(p.nextAction)h+='<div class="focus-next">▸ '+esc(p.nextAction)+'</div>';
  h+='<div class="focus-modes"><button class="'+(Focus.mode==="up"?"on":"")+'" data-a="focusSetMode" data-fm="up">'+T("timerMode")+'</button><button class="'+(Focus.mode==="pomo"?"on":"")+'" data-a="focusSetMode" data-fm="pomo">🍅 Pomodoro</button></div>';
  h+='<div class="focus-clock" id="focusClock">'+Focus.disp()+'</div>';
  h+='<div class="focus-phase" id="focusPhase"></div>';
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
  ["projects","tasks","notes","bookmarks","courses","prompts","servers","repos","sites","decisions","inbox","companies"].forEach(function(c){out[c]=mergeColl(local[c],remote[c],tm);});
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
function editBtn(type,id){return '<button class="delx" data-a="editItem" data-t="'+type+'" data-id="'+id+'" title="'+T("edit")+'">✎</button>';}
function copyBtn(text){if(!text)return"";return '<button class="delx" data-a="copy" data-text="'+esc(text)+'" title="'+T("copy")+'">⧉</button>';}
function fld(idv,label,v){return '<div class="field"><label>'+label+'</label><input id="'+idv+'" value="'+esc(v||"")+'"></div>';}
function fldArea(idv,label,v){return '<div class="field"><label>'+label+'</label><textarea id="'+idv+'" style="width:100%;background:var(--bg-elevated);border:1px solid var(--border);border-radius:10px;padding:10px;color:var(--c-ink-900);outline:none;min-height:72px;resize:vertical;line-height:1.6;font-size:14px">'+esc(v||"")+'</textarea></div>';}
function sheetCourse(id){
  var c=S.courses.find(function(x){return x.id===id});if(!c)return;
  var pct=c.total?Math.round((c.current||0)/c.total*100):(c.progress||0);
  openSheet('<h3>'+esc(c.title)+'</h3>'+
    (c.provider?'<div class="ic-s" style="margin:-4px 0 10px">'+esc(c.provider)+'</div>':'')+
    '<div class="prog"><i style="width:'+pct+'%"></i></div><div class="ic-s" style="margin:6px 0 14px">'+pct+'% '+T("complete")+'</div>'+
    fld("csTitle2",T("noteTitle"),c.title)+fld("csProv2",T("provider"),c.provider)+
    fld("csCur",T("currentL"),c.current||0)+fld("csTot",T("totalL"),c.total||0)+
    fldArea("csDet",T("details"),c.details)+fld("csUrl2",T("url"),c.url)+
    '<div class="sheet-actions"><button class="btn btn-ghost" data-a="delItem" data-t="courses" data-id="'+id+'" style="flex:0;color:var(--danger)">'+T("delete")+'</button><button class="btn btn-primary" data-a="doCourse2" data-id="'+id+'">'+T("save")+'</button></div>');
}
function linkChip(type,url){if(!url)return"";var map={live:["Live","🌐","#3FBE86"],deploy:["Deploy","▲","#7B7BF0"],repo:["Repo","⎇","#E2A43A"],firebase:["Firebase","🔥","#F26761"]};var m=map[type]||["Link","↗","#8888aa"];var href=/^https?:\/\//.test(url)?url:("https://"+url);return '<a class="linkchip" href="'+esc(href)+'" target="_blank" rel="noopener" style="--lc:'+m[2]+'"><span class="lc-ic">'+m[1]+'</span>'+m[0]+'</a>';}
function vWork(){
  var h='<div class="greet">'+T("work")+'</div><div class="sub">'+T("workSub")+'</div>';
  h+='<button class="btn btn-ghost btn-block" data-a="newSite" style="margin-bottom:12px">'+svg(IC.plus)+' '+T("addSite")+'</button>';
  if(!S.sites||!S.sites.length)return h+empty(T("workEmpty"),"🌐");
  S.sites.slice().sort(function(a,b){return (b.updatedAt||b.createdAt)-(a.updatedAt||a.createdAt)}).forEach(function(w){
    h+='<div class="card site-card"><div class="row between"><div style="font-weight:700;color:var(--c-ink-900);font-size:15px">'+esc(w.name)+'</div><div class="row" style="gap:4px">'+editBtn("sites",w.id)+delBtn("sites",w.id)+'</div></div>'+
      (w.note?'<div class="ic-s" style="margin-top:4px">'+esc(w.note)+'</div>':'')+
      '<div class="linkchips">'+linkChip("live",w.live)+linkChip("deploy",w.deploy)+linkChip("repo",w.repo)+linkChip("firebase",w.firebase)+'</div></div>';
  });
  return h;
}
function sheetSite(id){
  var w=id?(S.sites.find(function(x){return x.id===id})||{}):{};
  openSheet('<h3>'+(id?T("editSite"):T("addSite"))+'</h3>'+
    fld("stName",T("siteName"),w.name)+fld("stNote",T("subtitle"),w.note)+
    fld("stLive",T("liveUrl"),w.live)+fld("stDeploy",T("deployUrl"),w.deploy)+
    fld("stRepo",T("repoUrl"),w.repo)+fld("stFire",T("firebaseUrl"),w.firebase)+
    '<div class="sheet-actions">'+(id?'<button class="btn btn-ghost" data-a="delItem" data-t="sites" data-id="'+id+'" style="flex:0;color:var(--danger)">'+T("delete")+'</button>':'')+'<button class="btn btn-primary" data-a="doSite" data-id="'+(id||"")+'">'+T("save")+'</button></div>');
  setTimeout(function(){var e=document.getElementById("stName");if(e)e.focus()},250);
}
var EDIT_FIELDS={
  bookmarks:[["title","noteTitle"],["url","url"]],
  courses:[["title","noteTitle"],["provider","provider"],["total","estimate"]],
  prompts:[["title","noteTitle"],["model","Model"],["body","Prompt"]],
  servers:[["name","noteTitle"],["host","Host"],["ports","Ports"],["notes","noteBody"]],
  repos:[["name","noteTitle"],["branch","Branch"],["url","url"]]
};
function sheetEditItem(type,id){
  var it=(S[type]||[]).find(function(x){return x.id===id});if(!it)return;
  var spec=EDIT_FIELDS[type]||[];
  openSheet('<h3>'+T("edit")+'</h3>'+spec.map(function(f,i){var lbl=T(f[1])||f[1];return fld("ei_"+i,lbl,it[f[0]]==null?"":String(it[f[0]]));}).join("")+
    '<div class="sheet-actions"><button class="btn btn-ghost" data-a="delItem" data-t="'+type+'" data-id="'+id+'" style="flex:0;color:var(--danger)">'+T("delete")+'</button><button class="btn btn-primary" data-a="doEditItem" data-t="'+type+'" data-id="'+id+'">'+T("save")+'</button></div>');
}
function sheetEditTask(id){
  var t=S.tasks.find(function(x){return x.id===id});if(!t)return;
  openSheet('<h3>'+T("editTask")+'</h3>'+
    '<div class="field"><input id="etTitle" value="'+esc(t.title)+'"></div>'+
    '<div class="field"><label>'+T("priority")+'</label><div class="chips" id="etPrio">'+["high","med","low"].map(function(p){return '<button class="chip'+(t.priority===p?" on":"")+'" data-p="'+p+'">'+T(p==="high"?"pHigh":p==="med"?"pMed":"pLow")+'</button>'}).join("")+'</div></div>'+
    '<div class="field"><label>'+T("due")+'</label><div class="chips" id="etDue">'+[["today",T("dueToday")],["tomorrow",T("dueTomorrow")],["none","—"]].map(function(d){return '<button class="chip'+(dueBucket(t.due)===d[0]?" on":"")+'" data-d="'+d[0]+'">'+d[1]+'</button>'}).join("")+'</div></div>'+
    (dueBucket(t.due)!=="none"?'<div class="field"><label>'+T("addCal")+'</label><div class="row" style="gap:8px"><button class="btn btn-ghost btn-sm" data-a="gcal" data-id="'+t.id+'" style="flex:1">📅 Google</button><button class="btn btn-ghost btn-sm" data-a="ics" data-id="'+t.id+'" style="flex:1">⬇ .ics</button></div></div>':"")+'<div class="sheet-actions"><button class="btn btn-ghost" data-a="delTask" data-id="'+t.id+'" style="flex:0;color:var(--danger)">'+T("delete")+'</button><button class="btn btn-primary" data-a="doEditTask" data-id="'+t.id+'">'+T("save")+'</button></div>');
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
function cleanState(){var o={},k;for(k in S){if(!Object.prototype.hasOwnProperty.call(S,k))continue;if(k.charAt(0)==="_")continue;if(k==="view"||k==="activePid"||k==="activeCid"||k==="back"||k==="uiView")continue;o[k]=S[k];}o.deleted=S._deleted||{};o._localAt=S._localAt||Date.now();return o;}
function syncSig(st){
  function coll(a){return (a||[]).slice().sort(function(x,y){return (x.id<y.id?-1:x.id>y.id?1:0)}).map(function(i){return i.id+":"+itemTime(i)});}
  var o={l:st.lang,t:st.theme,m:st.mode,j:{},d:st.deleted||st._deleted||{}},jj=st.journal||{};
  ["projects","tasks","notes","bookmarks","courses","prompts","servers","repos","sites","decisions","inbox","companies"].forEach(function(c){o[c]=coll(st[c]);});
  Object.keys(jj).sort().forEach(function(k){o.j[k]=(jj[k]&&jj[k].updatedAt)||1;});
  return JSON.stringify(o);
}
function applyState(merged,doPush){
  if(!merged)return;
  ["lang","theme","mode","projects","tasks","notes","bookmarks","courses","prompts","servers","repos","sites","decisions","inbox","companies","journal"].forEach(function(k){if(merged[k]!==undefined)S[k]=merged[k];});
  S._deleted=merged._deleted||merged.deleted||{};S._localAt=merged._localAt||Date.now();
  if(!S.mode)S.mode="advanced";
  ["projects","tasks","notes","bookmarks","courses","prompts","servers","repos","decisions","companies"].forEach(function(kk){if(!Array.isArray(S[kk]))S[kk]=[]});
  if(!S.journal)S.journal={};
  S.projects.forEach(function(p){p.commits=p.commits||[];p.blockers=p.blockers||[];(p.sessions||[]).forEach(function(sx){sx.accomplishments=sx.accomplishments||[]})});
  S.companies.forEach(function(c){c.ov=c.ov||{};if(c.ov.commercialReadiness===undefined)c.ov.commercialReadiness="";if(c.ov.decisionComplexity===undefined)c.ov.decisionComplexity="";if(c.ov.outreachProbability===undefined)c.ov.outreachProbability="";if(!Array.isArray(c.sig))c.sig=[{label:"",stars:""},{label:"",stars:""},{label:"",stars:""},{label:"",stars:""},{label:"",stars:""}];if(c.research===undefined)c.research="";if(c.intelDb===undefined)c.intelDb="";if(c.strategicAudit===undefined)c.strategicAudit="";if(c.commercialStrategy===undefined)c.commercialStrategy="";if(c.engagementPackage===undefined)c.engagementPackage="";c.kg=Object.assign(defaultKg(),c.kg||{});});
  if(doPush){save();}else{try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){}}
  render();
}
function adoptRemote(data){ if(!data)return; applyState(mergeStates(cleanState(),data),true); }
function accountCard(){
  if(!window.CxSync||!CxSync.configured()) return '<div class="card"><div class="ic-s">'+T("syncOff")+'</div></div>';
  var u=CxSync.user&&CxSync.user();
  if(u) return '<div class="card"><div class="set-row"><span class="k">'+esc(u.email||T("account"))+'</span><span class="ic-s">'+T("syncStatus")+': '+esc(syncStatusText(CxSync.status()))+'</span></div><button class="btn btn-ghost btn-block" data-a="signOut" style="margin-top:10px">'+T("signOut")+'</button></div>';
  return '<div class="card"><div class="field"><input id="authEmail" type="email" placeholder="'+T("email")+'" autocomplete="username"></div><div class="field"><input id="authPass" type="password" placeholder="'+T("password")+'" autocomplete="current-password"></div><div class="row" style="gap:8px"><button class="btn btn-primary" data-a="signIn" style="flex:1">'+T("signIn")+'</button><button class="btn btn-ghost" data-a="signUp" style="flex:1">'+T("signUp")+'</button></div><div class="ic-s" style="margin-top:10px">'+T("syncHint")+'</div></div>';
}
function aiConfigured(){return !!(S._aiKey&&window.fetch);}
function aiSystem(){return "You are Continuum, a personal memory-OS assistant. You help the user recall and reason about THEIR OWN projects, tasks, notes, decisions and work context. Answer concisely and practically. Reply in the SAME language and dialect as the question (Egyptian Arabic if the question is Arabic, else English). Use ONLY the CONTEXT provided; if the answer is not in the context, say you do not have that info. Do not invent projects or facts.";}
function aiContext(){
  var L=[];
  S.projects.slice().sort(function(a,b){return(b.lastWorkedAt||0)-(a.lastWorkedAt||0)}).slice(0,6).forEach(function(p){
    var ss=(p.sessions||[]);var sx=ss[ss.length-1];
    L.push("PROJECT: "+p.name+" ["+(p.status||"")+"]"+(p.nextAction?" | next: "+p.nextAction:"")+(sx&&sx.summary?" | last session: "+sx.summary:"")+((p.blockers&&p.blockers.length)?" | blockers: "+p.blockers.join("; "):""));
  });
  var tks=S.tasks.filter(function(t){return !t.done}).slice(0,12);
  if(tks.length)L.push("OPEN TASKS: "+tks.map(function(t){return t.title+(t.due?" (due "+new Date(t.due).toISOString().slice(0,10)+")":"")}).join("; "));
  var decs=S.decisions.slice(0,6);if(decs.length)L.push("DECISIONS: "+decs.map(function(d){return d.text}).join("; "));
  var nts=S.notes.slice(0,8);if(nts.length)L.push("NOTES: "+nts.map(function(n){return n.title}).join("; "));
  var sites=(S.sites||[]).slice(0,8);if(sites.length)L.push("SITES: "+sites.map(function(w){return w.name+(w.live?" ("+w.live+")":"")}).join("; "));
  var cos=(S.companies||[]).slice().sort(function(a,b){return(b.updatedAt||0)-(a.updatedAt||0)}).slice(0,10);
  if(cos.length)L.push("COMPANIES: "+cos.map(function(c){return c.ov.name+" ["+(c.ov.status||"lead")+"/"+(c.ov.priority||"medium")+"]"+(c.ov.next?" | next: "+c.ov.next:"")}).join("; "));
  return L.join("\n")||"(no data yet)";
}
function aiDefaultModel(prov){return prov==="groq"?"llama-3.3-70b-versatile":"claude-3-5-sonnet-latest";}
function aiChat(system,userText,withSearch,maxTokens){
  var key=S._aiKey,prov=S._aiProvider||"anthropic",model=S._aiModel||aiDefaultModel(prov);
  if(!key)return Promise.reject(new Error("no key"));
  if(withSearch&&prov!=="anthropic")return Promise.reject(new Error(T("researchNeedsAnthropic")));
  if(prov==="groq"){
    return fetch("https://api.groq.com/openai/v1/chat/completions",{
      method:"POST",
      headers:{"content-type":"application/json","authorization":"Bearer "+key},
      body:JSON.stringify({model:model,max_tokens:maxTokens||1024,messages:[{role:"system",content:system},{role:"user",content:userText}]})
    }).then(function(r){return r.json();}).then(function(d){
      if(d&&d.choices&&d.choices[0]&&d.choices[0].message)return d.choices[0].message.content;
      if(d&&d.error)throw new Error((d.error&&d.error.message)||"AI error");
      throw new Error("AI error");
    });
  }
  var body={model:model,max_tokens:maxTokens||(withSearch?8000:1024),system:system,messages:[{role:"user",content:userText}]};
  if(withSearch)body.tools=[{type:"web_search_20250305",name:"web_search"}];
  return fetch("https://api.anthropic.com/v1/messages",{
    method:"POST",
    headers:{"content-type":"application/json","x-api-key":key,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},
    body:JSON.stringify(body)
  }).then(function(r){return r.json();}).then(function(d){
    if(d&&d.error)throw new Error(d.error.message||"AI error");
    if(d&&d.content&&d.content.length){
      var txt=d.content.filter(function(b){return b.type==="text"}).map(function(b){return b.text}).join("\n\n");
      if(txt)return txt;
    }
    throw new Error("AI error");
  });
}
function runAsk(q){
  q=(q||"").trim();S._ask=q;S._aiErr="";
  if(!q){render();return;}
  if(aiConfigured()){
    S._aiLoading=true;S._aiAnswer="";render();
    aiChat(aiSystem(),"CONTEXT:\n"+aiContext()+"\n\nQUESTION: "+q).then(function(txt){
      S._aiLoading=false;S._aiAnswer=txt;render();
    }).catch(function(e){
      S._aiLoading=false;var _m=(e&&e.message)||"error";if(/failed to fetch|networkerror|load failed|cors/i.test(_m))_m=T("aiNetErr");S._aiErr=_m;render();
    });
  }else{save();render();}
}
function researchSystemPrompt(name,website){
  return `# ROLE

You are an elite Corporate Intelligence Researcher.

Your ONLY objective is to collect, organize, verify and structure every available piece of information about the target company.

DO NOT audit.
DO NOT critique.
DO NOT recommend.
DO NOT score.
DO NOT redesign.

Your job is to build the most complete intelligence package possible.

Think like someone preparing a confidential CEO briefing before a consulting engagement.

---

# TARGET COMPANY

Company: ${name}
Website: ${website||"(not provided — find it)"}

---

# OUTPUT REQUIREMENTS

Build a structured dossier using Markdown.

Use headings, tables, and bullet lists so it is easy to scan.

Avoid long paragraphs.

---

# SECTION 1 — Executive Snapshot
Company Name, Tagline, Founded, Headquarters, Legal Entity, Ownership, Parent Company, Subsidiaries, Founder(s), CEO, Leadership Team, Employees, Countries Served, Offices, Mission, Vision, Core Products, Core Industries, Business Model, Revenue Model, Estimated ARR (if available), Estimated Company Size, Estimated Customer Count, Estimated Enterprise Customers, Technology Category, Market Category, ICP, Target Personas, Competitive Position, One Paragraph Summary.

# SECTION 2 — Company Timeline
Founding, funding rounds, major launches, acquisitions, leadership changes, partnerships, awards, major product releases, market expansions, rebranding, legal events. Present as a chronological table.

# SECTION 3 — Products
For every product: Purpose, Target users, Core features, Differentiators, Pricing, Deployment, Supported platforms, Integrations, Architecture (if known).

# SECTION 4 — Industry Coverage
Which industries, which company sizes (SMB, Mid Market, Enterprise, Government, Healthcare, Financial, Manufacturing, Retail, etc).

# SECTION 5 — Technology Stack
Frontend, Backend, Infrastructure, Cloud, Hosting, Analytics, Marketing Stack, Tracking, CRM, Support, CMS, AI Models, Security, Third Party Services, Developer Tools, Known APIs, Integrations.

# SECTION 6 — Website Architecture
Sitemap and navigation hierarchy: landing pages, resources, blog, pricing, solutions, industries.

# SECTION 7 — Design System Snapshot
Brand, logo, typography, color palette, illustration style, photography, UI style, components, spacing, accessibility, dark mode, animations, design maturity observations (no critique).

# SECTION 8 — Marketing
SEO, content marketing, social media, newsletter, lead magnets, events, webinars, podcasts, case studies, whitepapers, videos, communities, advertising, PR, partnerships.

# SECTION 9 — Sales Motion
Inbound, outbound, PLG, sales led, partner led, marketplace, channel sales, affiliate, customer success, onboarding, free trial, demo, POC, enterprise sales.

# SECTION 10 — Customers
Named customers, enterprise logos, testimonials, reviews, case studies, success stories, industries, geography, customer segmentation.

# SECTION 11 — Pricing
Pricing model, plans, enterprise, usage pricing, seat pricing, free trial, free tier, discounts, implementation, professional services.

# SECTION 12 — Funding
Investors, funding rounds, valuation, acquisitions, parent company, financial news, growth/hiring/expansion signals.

# SECTION 13 — Hiring
Open positions, departments hiring, locations, leadership/AI/product/marketing/sales/engineering/growth hiring.

# SECTION 14 — Partnerships
Technology, cloud, channel, resellers, implementation, strategic, academic, government.

# SECTION 15 — Competitors
Direct competitors, indirect competitors, enterprise competitors, emerging startups, comparison table, market positioning.

# SECTION 16 — Public Reputation
Awards, analyst reports (Gartner, Forrester, IDC), news coverage, community sentiment (Glassdoor, G2, Capterra, Reddit, YouTube).

# SECTION 17 — Security
Compliance (SOC, ISO, HIPAA, GDPR, CCPA), data residency, security pages, trust center.

# SECTION 18 — AI
AI features, AI positioning, LLMs used, automation, GenAI, machine learning, agents, AI roadmap.

# SECTION 19 — Digital Assets
Website, landing pages, social accounts, YouTube, LinkedIn, GitHub, help center, knowledge base, documentation, status page, developer portal, API docs.

# SECTION 20 — Intelligence Summary
Summarize business, market, technology, growth, sales, product, leadership, brand, customers in concise executive bullets.

---

# RULES

Use only verifiable information. Separate Facts from Inference. Mark unknown information explicitly as "Unknown". Never invent numbers. Prefer official sources. Cross-reference multiple sources whenever possible. Include a source link next to claims whenever available.

No recommendations. No audit. No scoring. No consulting advice. No redesign ideas. Only collect intelligence.

The output should become the master knowledge base used by later AI agents for Strategy, Audit, Positioning, CRO, Sales, Branding, GTM and Consulting.`;
}
function intelligenceEngineSystemPrompt(){
  return `# ROLE

You are Continuum Intelligence Engine.

Your task is NOT to audit or critique the company.

Your task is to transform an unstructured research report into a structured intelligence database.

Think like the indexing engine behind Palantir, Notion AI and Bloomberg.

Every piece of information should become reusable structured knowledge.

Never recommend.
Never redesign.
Never score.
Never audit.

Only extract, organize and normalize.

---

# INPUT

You will receive a complete research report generated from live web research.

Treat that report as the source of truth.

Do not remove information. Do not summarize away important details. Extract everything possible.

---

# OUTPUT

Build the following structured database. Return Markdown. Use tables, callouts, and lists. Avoid long paragraphs. Do not use Mermaid or any diagram code blocks — use tables and nested lists instead, since the reader cannot render diagrams.

# 1. Executive Snapshot
Company, Website, Tagline, Founded, Headquarters, Employees, Countries, CEO, Leadership, Ownership, Parent Company, Business Model, Revenue Model, Target Market, Core Products, Core Industries, One Paragraph Summary.

# 2. Business Profile
Mission, Vision, Core Value Proposition, Positioning, Category, Primary ICP, Buyer Personas, Company Size Focus, Regions Served, Competitive Position.

# 3. Products
For every product: Name, Purpose, Problem Solved, Target User, Core Features, Pricing, Deployment, Integrations, AI Features, Links.

# 4. Market Intelligence
Industry, Market Category, Market Size, Growth Drivers, Market Trends, Emerging Technologies, Threats, Opportunities.

# 5. Technology Intelligence
Frontend, Backend, Cloud, Hosting, Infrastructure, AI Models, Analytics, CRM, Marketing Stack, Security Stack, Developer Stack, Integrations.

# 6. Leadership
Founder, CEO, Executives, Departments, Decision Makers, Hiring Leaders, Public Profiles.

# 7. Financial Intelligence
Funding, Investors, Acquisitions, Parent Company, Revenue Estimates, Growth Indicators, Expansion Signals, Hiring Signals.

# 8. Product Portfolio
List every product, group them, describe relationships as a nested list (no diagram).

# 9. Customers
Named Customers, Industries, Regions, Enterprise Accounts, Testimonials, Case Studies, Reviews.

# 10. Competitors
Direct, Indirect, Enterprise, Emerging — as a comparison table.

# 11. Partnerships
Technology, Cloud, Channel, Strategic, Government, Academic, Implementation.

# 12. Digital Presence
Website, LinkedIn, GitHub, YouTube, Help Center, API Docs, Knowledge Base, Status Page, Developer Portal, Social Media.

# 13. Marketing Assets
Blog, Case Studies, Events, Whitepapers, Lead Magnets, Videos, Webinars, Newsletter, Communities.

# 14. Sales Motion
Inbound, Outbound, PLG, Sales-led, Partner-led, Demo, Trial, POC, Enterprise Sales.

# 15. Hiring Intelligence
Open Roles, Hiring Departments, Expansion Areas, Leadership Hiring, Engineering, AI, Sales, Marketing.

# 16. Security
SOC, ISO, HIPAA, GDPR, CCPA, Data Residency, Trust Center, Compliance.

# 17. AI Capabilities
AI Features, GenAI, Automation, Agents, LLMs, Machine Learning, AI Positioning, Roadmap Signals.

# 18. Buying Signals
Extract every signal that may indicate the company could buy consulting services (funding, hiring, expansion, rebranding, acquisition, leadership changes, product launches, website redesign, marketing changes, enterprise push, international expansion). List every signal with Date, Evidence, Business Impact, Confidence — as a table.

# 19. Research Timeline
Generate a chronological timeline table from all research (Date, Event, Source).

# 20. Research Sources
List every source referenced, categorized as Official / Analyst / Community / Review Sites / News / Documentation.

# 21. Research Gaps
Identify information that could not be found. Mark it as Unknown. Never invent data.

---

# RULES

Everything must remain factual. Never audit. Never criticize. Never recommend. Never redesign. Never estimate unless explicitly stated in the source report.

Separate FACT, INFERENCE and UNKNOWN explicitly when a claim isn't a plain sourced fact.

The final result should become the permanent Company Intelligence Database used by later Continuum AI modules (Strategic Audit, Commercial Readiness, Decision Complexity, Consulting Opportunity, Outreach, Proposal Generation, Project Planning). Maximize structure and machine readability.`;
}
function strategicAuditSystemPrompt(){
  return `You are Continuum's Executive Strategy Engine.

You are NOT a researcher.
You already have a structured intelligence database about this company (provided in the user message).

Your task is to think like:

• McKinsey Partner
• Bain Growth Consultant
• BCG Strategy Consultant
• Former VP Marketing
• Former CRO
• Enterprise SaaS Advisor
• Brand Strategist
• UX Consultant
• Revenue Operations Consultant

Use ONLY the provided Intelligence Database.

Never invent facts.

If information is missing, explicitly say: "Insufficient public evidence."

=================================================
GOAL
=================================================

Produce a complete executive strategic audit.

Don't summarize. Think critically. Identify hidden problems. Explain WHY they matter commercially. Prioritize business impact over design opinions. Everything should be written for CEO level.

=================================================
OUTPUT
=================================================

# Executive Strategic Audit

## 1. Business Positioning
Evaluate: positioning clarity, ICP alignment, category definition, differentiation, premium perception, messaging consistency, competitive positioning, biggest positioning risk, biggest opportunity.

## 2. Messaging
Evaluate: headline strength, value proposition, clarity, emotional impact, jargon, proof, objections, trust, CTA language, missing messages.

## 3. Brand System
Evaluate: identity maturity, consistency, trust, enterprise readiness, visual hierarchy, scalability, brand perception, hidden weaknesses.

## 4. UX
Audit: homepage, navigation, information architecture, decision fatigue, conversion friction, trust leaks, accessibility, speed assumptions, content hierarchy.

## 5. Conversion
Evaluate: CTA, lead magnets, demo flow, pricing, forms, sales friction, proof, funnels, missing assets, conversion leaks.

## 6. Enterprise Sales Perspective
Pretend you are VP Sales. List: top objections, enterprise blockers, procurement concerns, security concerns, pricing concerns. Would you approve a 6-figure deal? Explain.

## 7. Executive Blind Spots
What does leadership probably NOT see? What internal assumptions are dangerous? Where is strategy drifting? What is the hidden risk?

## 8. Localization
Evaluate: international readiness, Arabic readiness, regional GTM, localization maturity, market expansion blockers.

## 9. Growth Opportunities
Rank opportunities, high ROI first. Explain business impact. Estimate implementation effort.

## 10. Consulting Opportunities
Rank all consulting services Continuum could sell. For every service provide: business impact, expected ROI, difficulty, estimated effort, priority.

## 11. Outreach Angle
Write a personalized outreach message. Use real observations. Avoid generic sales language.

## 12. Priority Scores
Give scores out of 10 for: Brand, Messaging, UX, Trust, Conversion, Enterprise Readiness, Localization, Growth Potential. Explain every score. Present as a table.

## 13. CEO Summary
Write a board-level executive summary. Include: top 3 risks, top 3 opportunities, recommended priorities, 24 month outlook. If you were CEO, what would you do first?

=================================================
FORMAT
=================================================

Professional markdown. Tables where useful. Clear hierarchy. No emojis. No filler. Every recommendation must include business reasoning. Every problem must explain revenue impact.`;
}
function runStrategicAudit(id){
  var c=company(id);if(!c)return;
  if(!c.intelDb){S._auditErr=T("strategicAuditGate");S._auditErrId=id;render();return;}
  if(!aiConfigured()){S._auditErr=T("aiOffHint");S._auditErrId=id;render();return;}
  S._auditing=id;S._auditErr="";S._auditErrId=null;render();
  aiChat(strategicAuditSystemPrompt(),"INTELLIGENCE DATABASE:\n\n"+c.intelDb,false,8000)
    .then(function(txt){
      S._auditing=null;
      var cc=company(id);if(cc){cc.strategicAudit=txt;cc.updatedAt=Date.now();save();runKnowledgeExtraction(id);}
      render();
    }).catch(function(e){
      S._auditing=null;
      var m=(e&&e.message)||"error";if(/failed to fetch|networkerror|load failed|cors/i.test(m))m=T("aiNetErr");
      S._auditErr=m;S._auditErrId=id;render();
    });
}
function commercialStrategySystemPrompt(){
  return `You are the Commercial Strategy Engine inside Continuum.

You have already received a complete strategic audit (provided in the user message).

DO NOT repeat the audit. DO NOT rewrite the findings.

Your job is to convert that audit into an actionable sales strategy.

You are now acting as:

- Enterprise Sales Director
- Brand Consultant
- CRO Consultant
- CEO Advisor
- GTM Strategist
- B2B Account Executive

Your output must be practical. Every recommendation must be tied directly to business impact.

==================================================
OUTPUT
==================================================

Return Markdown.

# 1. Executive Snapshot
One page. Include: company maturity, biggest commercial opportunity, biggest risk, why they would buy now, estimated project size, recommended first offer.

# 2. Commercial Readiness
Score from 1-10. Explain exactly why. Evaluate: funding, expansion, hiring, recent launches, product maturity, website maturity, marketing maturity, sales maturity, brand maturity, urgency, budget likelihood.

# 3. Decision Complexity
Score from 1-10. Explain: founder-led, marketing, brand, sales, product, engineering, procurement, legal, finance, executive approval. Estimate: number of stakeholders, estimated sales cycle, main blockers, how to reduce friction.

# 4. Buying Signals
List every buying signal discovered (hiring, funding, acquisition, rebranding, website redesign, expansion, new positioning, new product, leadership changes, events, partnerships, analyst reports, awards, technology shift). For every signal explain: why it matters, how recent, how it affects outreach, priority.

# 5. Risks of Inaction
Separate into: Revenue Risk, Brand Risk, Marketing Risk, Sales Risk, Conversion Risk, SEO Risk, Recruitment Risk, Operational Risk, Competitive Risk, Customer Risk. Each risk should include severity, business impact, recommendation.

# 6. Estimated Consulting Opportunities
Generate consulting packages. For every package include: problem, deliverables, business outcome, expected ROI, estimated duration, difficulty, estimated value. Sort by highest ROI.

# 7. Service Priority Matrix
Return a table. Columns: Service, Business Impact, ROI, Difficulty, Timeline, Strategic Importance, Priority.

# 8. Sales Entry Strategy
Recommend: best department, best decision maker, best first contact, best champion, best executive sponsor, best sequence (Cold Email, LinkedIn, Referral, Loom, Audit PDF, Workshop). Which should happen first.

# 9. Outreach Personalization
Write: LinkedIn opener, Cold Email, Loom script, 10-minute call opener, Follow-up #1, Follow-up #2, Follow-up #3, and persona-specific versions for CEO, CMO, VP Marketing, Head of Brand, Sales Director.

# 10. Objection Handling
Predict objections: Budget, Timing, Resources, Agency, Internal team, Already working [with someone], No priority, Not interested. For each: likely wording, hidden concern, best response.

# 11. Estimated Project Value
Break into phases. Columns: Phase, Scope, Estimated weeks, Estimated value, Upsell opportunity, Retainer opportunity, Expected lifetime value.

# 12. 90-Day Engagement Roadmap
Week-by-week, Week 1 through Week 12. Deliverables, milestones, client meetings, quick wins.

# 13. Win Probability
Estimate: chance of getting first meeting, chance of proposal, chance of closing. Reasons, weaknesses, strengths, how to improve probability.

# 14. Opportunity Scorecard
Return scores from 1-10 for: Commercial Readiness, Decision Complexity, Urgency, Brand Problems, Website Problems, Messaging Problems, Sales Problems, Marketing Problems, Buying Signals, Budget Probability, Consulting Fit, Retainer Potential, Expansion Potential, Strategic Value.

# 15. Final Recommendation
Should this company enter the active sales pipeline? Choose one: Priority A, Priority B, Priority C, Reject. Explain why.

==================================================
RULES
==================================================

Do NOT repeat the Strategic Audit. Reference it. Focus only on sales strategy. Think like a consultant trying to close a six-figure engagement. Every recommendation must have business reasoning. Avoid generic consulting advice. Prioritize practical execution.

Return clean Markdown. No JSON. No Mermaid. No placeholders.`;
}
function runCommercialStrategy(id){
  var c=company(id);if(!c)return;
  if(!c.strategicAudit){S._strategyErr=T("commercialStrategyGate");S._strategyErrId=id;render();return;}
  if(!aiConfigured()){S._strategyErr=T("aiOffHint");S._strategyErrId=id;render();return;}
  S._strategizing=id;S._strategyErr="";S._strategyErrId=null;render();
  aiChat(commercialStrategySystemPrompt(),"STRATEGIC AUDIT:\n\n"+c.strategicAudit,false,8000)
    .then(function(txt){
      S._strategizing=null;
      var cc=company(id);if(cc){cc.commercialStrategy=txt;cc.updatedAt=Date.now();save();runKnowledgeExtraction(id);}
      render();
    }).catch(function(e){
      S._strategizing=null;
      var m=(e&&e.message)||"error";if(/failed to fetch|networkerror|load failed|cors/i.test(m))m=T("aiNetErr");
      S._strategyErr=m;S._strategyErrId=id;render();
    });
}
function engagementPackageSystemPrompt(){
  return `You are the Engagement & Proposal Engine inside Continuum.

You have access to the full analysis already completed: Live Research, Intelligence Database, Strategic Audit, and Commercial Strategy (the most recent of these, Commercial Strategy, is provided in the user message).

Your responsibility is NOT analysis. Analysis is already complete.

Your responsibility is to convert all previous work into a complete client engagement package.

Think like:

• CEO
• Enterprise Sales Director
• Management Consultant
• Brand Consultant
• Proposal Writer
• Solution Architect
• Client Success Director

Everything you generate should be immediately usable with the client.

==================================================
OUTPUT
==================================================

Return clean Markdown.

==================================================
1. Executive Engagement Summary
==================================================
Summarize: current situation, business pain, opportunity, why now, expected business impact, recommended engagement, estimated value.

==================================================
2. Discovery Workshop Plan
==================================================
Prepare a complete discovery workshop. Include: objectives, participants, agenda, timeline, questions, expected deliverables, success criteria.

==================================================
3. Discovery Questions
==================================================
Generate questions for: CEO, CMO, Sales, Marketing, Product, Engineering, Customer Success, Finance, Operations, Legal, Procurement. Group them. Prioritize them.

==================================================
4. Proposal Structure
==================================================
Generate a complete proposal outline. Include: executive summary, current state, challenges, business goals, our approach, methodology, deliverables, timeline, pricing, ROI, next steps.

==================================================
5. Scope of Work
==================================================
Generate: objectives, deliverables, activities, responsibilities, out of scope, acceptance criteria.

==================================================
6. Phased Engagement
==================================================
Split into phases (e.g. Phase 1 Quick Wins, Phase 2 Positioning, Phase 3 Website, Phase 4 Sales Enablement, Phase 5 Growth). Each phase should include deliverables, duration, expected results.

==================================================
7. Deliverables
==================================================
Create detailed deliverables (e.g. Messaging Framework, Website Audit, Homepage Wireframe, Landing Pages, Brand Positioning, Brand Architecture, Design System, Sales Deck, Case Studies, Proposal Templates, ROI Calculator, LinkedIn Strategy, SEO Roadmap, Analytics Dashboard).

==================================================
8. Pricing Strategy
==================================================
Generate Good / Better / Best. For each include: price, scope, deliverables, ideal client, business value.

==================================================
9. ROI Projection
==================================================
Estimate: lead quality, conversion, sales cycle, CAC, pipeline, revenue impact, brand impact, marketing efficiency.

==================================================
10. Project Timeline
==================================================
Week-by-week. Include milestones, meetings, deliverables, dependencies, risks.

==================================================
11. Risk Management
==================================================
Predict: project risks, stakeholder risks, approval risks, technical risks, communication risks, timeline risks, budget risks. Include mitigation.

==================================================
12. Stakeholder Map
==================================================
Build: decision maker, champion, economic buyer, technical buyer, influencers, blockers. How to win each one.

==================================================
13. Objection Playbook
==================================================
Generate: likely objection, hidden concern, recommended response, supporting proof.

==================================================
14. Meeting Assets
==================================================
Generate: meeting agenda, opening script, closing script, follow-up email, meeting notes template, action items template.

==================================================
15. Proposal Presentation
==================================================
Generate a 10-slide executive presentation outline. Each slide should include: title, key message, talking points, suggested visual.

==================================================
16. Follow-up Campaign
==================================================
Generate a cadence: immediate follow-up, 3 days, 1 week, 2 weeks, 1 month — across LinkedIn, Email, Loom, Phone.

==================================================
17. Closing Strategy
==================================================
Recommend: best closing approach, negotiation strategy, discount strategy, pilot strategy, retainer strategy, expansion strategy.

==================================================
18. Long-Term Account Plan
==================================================
Generate: 90 days, 6 months, 12 months, expansion opportunities, cross-sell, upsell, renewal, referral.

==================================================
19. Success Metrics
==================================================
KPIs: business KPIs, marketing KPIs, sales KPIs, brand KPIs, project KPIs.

==================================================
20. Final Executive Recommendation
==================================================
Summarize: why this engagement will succeed, critical success factors, immediate next action, estimated project value, confidence level.

==================================================
RULES
==================================================

Do NOT repeat previous analysis. Do NOT rewrite the audit. Assume the analysis is already approved.

Everything must be implementation-ready. Every recommendation should produce measurable business value. Avoid generic consulting advice.

Return Markdown only. No JSON. No Mermaid. No placeholders.

Think like a Big Four consulting partner preparing a six-figure engagement.`;
}
function runEngagementPackage(id){
  var c=company(id);if(!c)return;
  if(!c.commercialStrategy){S._engageErr=T("engagementGate");S._engageErrId=id;render();return;}
  if(!aiConfigured()){S._engageErr=T("aiOffHint");S._engageErrId=id;render();return;}
  S._engaging=id;S._engageErr="";S._engageErrId=null;render();
  aiChat(engagementPackageSystemPrompt(),"COMMERCIAL STRATEGY:\n\n"+c.commercialStrategy,false,8000)
    .then(function(txt){
      S._engaging=null;
      var cc=company(id);if(cc){cc.engagementPackage=txt;cc.updatedAt=Date.now();save();runKnowledgeExtraction(id);}
      render();
    }).catch(function(e){
      S._engaging=null;
      var m=(e&&e.message)||"error";if(/failed to fetch|networkerror|load failed|cors/i.test(m))m=T("aiNetErr");
      S._engageErr=m;S._engageErrId=id;render();
    });
}
function pipelineContext(c){
  var parts=[];
  if(c.research)parts.push("RAW RESEARCH:\n"+c.research);
  if(c.intelDb)parts.push("INTELLIGENCE DATABASE:\n"+c.intelDb);
  if(c.strategicAudit)parts.push("STRATEGIC AUDIT:\n"+c.strategicAudit);
  if(c.commercialStrategy)parts.push("COMMERCIAL STRATEGY:\n"+c.commercialStrategy);
  if(c.engagementPackage)parts.push("ENGAGEMENT PACKAGE:\n"+c.engagementPackage);
  return parts.join("\n\n---\n\n");
}
function extractionSystemPrompt(){
  return `You are the Knowledge Extraction Engine inside Continuum.

You are internal infrastructure, not a user-facing feature. Nobody reads your prose — only your JSON is used.

Your ONLY job is to read everything known so far about a company (Live Research, Intelligence Database, Strategic Audit, Commercial Strategy, and/or Engagement Package — whichever sections are provided) and extract it into ONE strict JSON object.

Do not analyze. Do not recommend anything new. Do not invent facts — only extract what is actually stated or clearly implied in the provided text.

If a field cannot be determined from the text, use "" for a text field or [] for a list field. Never guess, never fabricate, never leave a key out.

Return ONLY the JSON object. No markdown code fences. No commentary before or after. No explanation.

Return exactly this shape (types matter — text fields are strings, the rest are arrays of short strings):
{"ceo":"","cmo":"","vpMarketing":"","industry":"","competitors":[],"products":[],"pricing":"","problems":[],"strengths":[],"weaknesses":[],"buyingSignals":[],"hiring":[],"funding":"","acquisition":"","techStack":[],"cms":"","analytics":[],"socialLinks":[],"employees":"","locations":[],"partners":[],"certifications":[],"awards":[],"recentNews":[],"useCases":[],"caseStudies":[],"keywords":[],"painPoints":[],"recommendedServices":[],"estimatedDealSize":"","decisionMakers":[],"priority":""}`;
}
function parseKgJSON(raw){
  var t=(raw||"").trim().replace(/^```json/i,"").replace(/^```/,"").replace(/```\s*$/,"").trim();
  var d=JSON.parse(t);
  var base=defaultKg();
  Object.keys(base).forEach(function(k){
    if(Array.isArray(base[k]))d[k]=Array.isArray(d[k])?d[k]:[];
    else d[k]=(typeof d[k]==="string")?d[k]:"";
  });
  return d;
}
function runKnowledgeExtraction(id){
  var c=company(id);if(!c)return;
  if(!aiConfigured())return;
  var ctx=pipelineContext(c);if(!ctx)return;
  aiChat(extractionSystemPrompt(),ctx,false,3000)
    .then(function(raw){
      var cc=company(id);if(!cc)return;
      try{cc.kg=parseKgJSON(raw);cc.updatedAt=Date.now();save();if(S.activeCid===id)render();}
      catch(e){/* silent: extraction is best-effort background enrichment, never surfaces errors to the user */}
    }).catch(function(){/* silent, same reasoning */});
}
function companyIntakeSchemaText(){
  return `# Company Snapshot Generator for Continuum

You are generating a **Company Snapshot** for my CRM (Continuum).

This snapshot has TWO purposes:

1. A beautiful executive report that a human can read.
2. A machine-readable JSON that Continuum can import directly.

The company information I will provide may come from research, websites, LinkedIn, reports, PDFs, notes, or raw text.

Your job is to organize everything.

---

# OBJECTIVES

Think like: McKinsey Consultant, Gartner Analyst, Enterprise Sales Consultant, Brand Strategist, B2B Growth Consultant.

Never invent information. If something is unknown write: Unknown. Never guess.

---

# OUTPUT STRUCTURE

Return EXACTLY TWO SECTIONS.

---

# SECTION 1

# 📊 Executive Company Snapshot

Create a highly visual dashboard. Prefer tables, KPI cards, checklists, progress bars, trees, timelines, matrices, SWOT, badges. Avoid walls of text. Maximum paragraph = 3 lines.

Include whenever possible: Executive KPIs (Company, Website, Industry, Founded, Employees, Revenue, Funding, Ownership, CEO, CMO, Priority, Expected Deal Size, Commercial Readiness, Decision Complexity); Company Overview (Mission, Vision, Business Model, Value Proposition); Products table; Services table; Industries badges; Buyer Personas table; Leadership table; Decision Makers table; Organization Structure (ASCII tree); Technology Stack (grouped table); Competitors (comparison table); Integrations (checklist); Partners table; Customers (named customers, industries, case studies, testimonials); Hiring Signals; Funding Timeline; News Timeline; Marketing (channels, SEO, content, social); Sales Motion; Pricing (known/estimated/unknown); Buying Signals (priority table); Risks (priority table); Opportunities (priority table); SWOT; Missing Information (checklist); Research Coverage (progress bars: Website, LinkedIn, Jobs, Customers, Technology, News, Leadership, Overall).

---

# SECTION 2

Return ONLY ONE JSON block, inside a \`\`\`json code fence. No explanation. No comments outside the fence. Use this exact schema:

\`\`\`json
{
  "action":"create",
  "matchCompanyId":"null",
  "matchConfidence":"none",
  "company":{
    "name":"","website":"","linkedin":"","industry":"","subcategory":"","hq":"","regions":[],
    "employees":"","founded":"","ownership":"","revenue":"","funding":"",
    "status":"prospect","priority":"high|medium|low",
    "overview":"","mission":"","vision":"","businessModel":"","valueProposition":"",
    "products":[],"services":[],"industries":[],"customers":[],"buyerPersonas":[],
    "leadership":[{"name":"","role":"","linkedin":""}],
    "decisionMakers":[{"name":"","role":"","priority":"high|medium|low"}],
    "competitors":[],"partners":[],
    "technology":{"frontend":[],"backend":[],"cloud":[],"database":[],"ai":[],"crm":[],"analytics":[],"cms":[]},
    "integrations":[],"pricing":"","salesMotion":"","marketingChannels":[],
    "buyingSignals":[],"risks":[],"opportunities":[],"strengths":[],"weaknesses":[],
    "news":[{"date":"","title":"","summary":""}],
    "timeline":[{"date":"","event":""}],
    "sources":[],"notes":"","nextAction":""
  }
}
\`\`\`

# RULES

Populate every field that can be verified. Leave unknown fields empty. Do not hallucinate. Do not omit keys. Arrays must always exist. Return valid JSON only inside the fence.

The JSON must be directly importable into Continuum without any manual editing. The executive report (Section 1) and the JSON (Section 2) must describe exactly the same company.`;
}
function companyIntakeSystemPrompt(scopedId){
  if(scopedId){
    var sc=company(scopedId);
    return companyIntakeSchemaText()+"\n\n---\n\nThis intake is for an EXISTING company: \""+(sc?sc.ov.name:"")+"\" (id: "+scopedId+"). Always set action=\"update\", matchCompanyId=\""+scopedId+"\", matchConfidence=\"exact\" regardless of what the input text says.";
  }
  var list=S.companies.map(function(cc){return cc.id+": "+cc.ov.name;}).join("\n")||"(no companies exist yet)";
  return companyIntakeSchemaText()+"\n\n---\n\nExisting companies right now (id: name):\n"+list+"\n\nSet action=\"create\" if this clearly does not match any existing company. Set action=\"update\" with the correct matchCompanyId if it clearly does. Set matchConfidence honestly — \"exact\" only if truly certain, otherwise \"fuzzy\" or \"none\".";
}
function extractJsonBlock(raw){
  var s=String(raw||"");
  var fenced=s.match(/```json\s*([\s\S]*?)```/i);
  if(fenced)return {json:fenced[1].trim(),report:s.slice(0,fenced.index).trim()};
  var start=s.indexOf("{");
  if(start<0)return {json:null,report:s.trim()};
  var depth=0,end=-1;
  for(var i=start;i<s.length;i++){
    if(s[i]==="{")depth++;
    else if(s[i]==="}"){depth--;if(depth===0){end=i;break;}}
  }
  if(end<0)return {json:null,report:s.trim()};
  return {json:s.slice(start,end+1),report:s.slice(0,start).trim()};
}
function parseCompanyIntakeJSON(raw){
  var split=extractJsonBlock(raw);
  if(!split.json)throw new Error("bad-shape");
  var d=JSON.parse(split.json);
  if(!d||!d.company||!d.company.name)throw new Error("bad-shape");
  var pj=d.company;
  ["regions","products","services","industries","customers","buyerPersonas","leadership","decisionMakers","competitors","partners","integrations","marketingChannels","buyingSignals","risks","opportunities","strengths","weaknesses","news","timeline","sources"].forEach(function(k){
    if(!Array.isArray(pj[k]))pj[k]=[];
  });
  pj.technology=pj.technology||{};
  ["frontend","backend","cloud","database","ai","crm","analytics","cms"].forEach(function(k){
    if(!Array.isArray(pj.technology[k]))pj.technology[k]=[];
  });
  return {parsed:d,report:split.report};
}
function mapIntakeToCompany(pj,c){
  if(pj.name)c.ov.name=pj.name;
  if(pj.website)c.ov.website=pj.website;
  if(pj.industry)c.ov.industry=pj.industry;
  if(pj.hq)c.ov.country=pj.hq;
  if(pj.priority==="high"||pj.priority==="medium"||pj.priority==="low")c.ov.priority=pj.priority;
  if(pj.nextAction)c.ov.next=pj.nextAction;
  if(pj.employees)c.kg.employees=pj.employees;
  if(pj.regions&&pj.regions.length)c.kg.locations=uniqStrings(c.kg.locations.concat(pj.regions));
  if((pj.products&&pj.products.length)||(pj.services&&pj.services.length))c.kg.products=uniqStrings(c.kg.products.concat(pj.products||[],pj.services||[]));
  if(pj.competitors&&pj.competitors.length)c.kg.competitors=uniqStrings(c.kg.competitors.concat(pj.competitors));
  if(pj.partners&&pj.partners.length)c.kg.partners=uniqStrings(c.kg.partners.concat(pj.partners));
  if(pj.buyingSignals&&pj.buyingSignals.length)c.kg.buyingSignals=uniqStrings(c.kg.buyingSignals.concat(pj.buyingSignals));
  if(pj.strengths&&pj.strengths.length)c.kg.strengths=uniqStrings(c.kg.strengths.concat(pj.strengths));
  if(pj.weaknesses&&pj.weaknesses.length)c.kg.weaknesses=uniqStrings(c.kg.weaknesses.concat(pj.weaknesses));
  if(pj.risks&&pj.risks.length)c.kg.problems=uniqStrings(c.kg.problems.concat(pj.risks));
  if(pj.linkedin)c.kg.socialLinks=uniqStrings(c.kg.socialLinks.concat([pj.linkedin]));
  if(pj.sources&&pj.sources.length)c.int.sources=c.int.sources?(c.int.sources+"\n"+pj.sources.join("\n")):pj.sources.join("\n");
  var tech=[];
  if(pj.technology){["frontend","backend","cloud","database","ai","crm","analytics","cms"].forEach(function(k){tech=tech.concat(pj.technology[k]||[]);});}
  tech=tech.concat(pj.integrations||[]);
  if(tech.length)c.kg.techStack=uniqStrings(c.kg.techStack.concat(tech));
  if(pj.news&&pj.news.length){
    var newsLines=pj.news.map(function(n){return [n.date,n.title,n.summary].filter(Boolean).join(" — ");}).filter(Boolean);
    if(newsLines.length)c.kg.recentNews=uniqStrings(c.kg.recentNews.concat(newsLines));
  }
  var dmNames=[];
  (pj.leadership||[]).forEach(function(p){
    if(!p||!p.name)return;
    var roleKey=matchDmRole(p.role);
    if(roleKey){c.dm[roleKey].role=p.name+(p.role?(" — "+p.role):"");if(p.linkedin)c.dm[roleKey].linkedin=p.linkedin;}
    dmNames.push(p.name+(p.role?(" — "+p.role):""));
  });
  (pj.decisionMakers||[]).forEach(function(p){
    if(!p||!p.name)return;
    dmNames.push(p.name+(p.role?(" — "+p.role):""));
  });
  if(dmNames.length)c.kg.decisionMakers=uniqStrings(c.kg.decisionMakers.concat(dmNames));
  if(pj.notes)c.notes=c.notes?(c.notes+"\n\n"+pj.notes):pj.notes;
}
function uniqStrings(arr){var seen={},out=[];(arr||[]).forEach(function(x){if(!x)return;var k=String(x).toLowerCase();if(!seen[k]){seen[k]=true;out.push(x);}});return out;}
function matchDmRole(role){
  var r=(role||"").toLowerCase();
  if(!r)return null;
  if(/\bceo\b|chief executive/.test(r))return"ceo";
  if(/\bcmo\b|chief marketing/.test(r))return"cmo";
  if(/\bcro\b|chief revenue/.test(r))return"cro";
  if(/marketing/.test(r))return"marketing";
  if(/sales/.test(r))return"sales";
  if(/product/.test(r))return"product";
  if(/tech|engineering|cto/.test(r))return"tech";
  return null;
}
function applyCompanyIntake(parsed,report,targetId){
  var pj=parsed.company||{};
  if(!targetId){
    var nc=newCompanyObj(pj.name||"—");
    mapIntakeToCompany(pj,nc);
    if(report)nc.research=report;
    S.companies.unshift(nc);
    save();
    return {ok:true,id:nc.id,name:nc.ov.name,created:true};
  }
  var c=company(targetId);
  if(!c)return {ok:false};
  mapIntakeToCompany(pj,c);
  if(report)c.research=c.research?(c.research+"\n\n---\n\n"+report):report;
  c.updatedAt=Date.now();
  save();
  return {ok:true,id:c.id,name:c.ov.name,created:false};
}
function runCompanyResearch(id){
  var c=company(id);if(!c)return;
  if(!aiConfigured()){S._researchErr=T("aiOffHint");S._researchErrId=id;render();return;}
  S._researching=id;S._researchStage="research";S._researchErr="";S._researchErrId=null;render();
  aiChat(researchSystemPrompt(c.ov.name,c.ov.website),"Research this company now using web search. Work through the sections in order and cite sources where you can.",true)
    .then(function(raw){
      var cc=company(id);if(cc){cc.research=raw;cc.updatedAt=Date.now();save();}
      S._researchStage="structuring";render();
      return aiChat(intelligenceEngineSystemPrompt(),"RESEARCH REPORT:\n\n"+raw,false,8000);
    })
    .then(function(structured){
      S._researching=null;S._researchStage=null;
      var cc2=company(id);if(cc2){cc2.intelDb=structured;cc2.updatedAt=Date.now();save();runKnowledgeExtraction(id);}
      render();
    }).catch(function(e){
      S._researching=null;S._researchStage=null;
      var m=(e&&e.message)||"error";if(/failed to fetch|networkerror|load failed|cors/i.test(m))m=T("aiNetErr");
      S._researchErr=m;S._researchErrId=id;render();
    });
}
function humanizeKey(k){return (k||"").replace(/([A-Z])/g," $1").replace(/^./,function(s){return s.toUpperCase();});}
function renderSnapshot(c){
  var kg=c.kg||defaultKg();
  var h="";

  var kpiRows=[
    [T("companyName"),c.ov.name],
    [T("website"),c.ov.website],
    [T("industry"),kg.industry||c.ov.industry],
    [T("country"),c.ov.country],
    ["CEO",kg.ceo],
    ["CMO",kg.cmo],
    [T("employeesLbl"),kg.employees],
    [T("dealSize"),kg.estimatedDealSize],
    [T("priority"),c.ov.priority?T(PR_LABEL[c.ov.priority]):""]
  ];
  h+='<table class="kpitbl">'+kpiRows.map(function(r){return '<tr><td>'+esc(r[0])+'</td><td>'+(r[1]?esc(r[1]):"—")+'</td></tr>';}).join("")+'</table>';

  var stages=[c.research,c.intelDb,c.strategicAudit,c.commercialStrategy,c.engagementPackage];
  var stagesFilled=stages.filter(Boolean).length;
  var kgKeys=Object.keys(kg);
  var kgFilled=kgKeys.filter(function(k){var v=kg[k];return Array.isArray(v)?v.length>0:!!v;}).length;
  var coveragePct=Math.round(((stagesFilled/5)*0.4+(kgFilled/kgKeys.length)*0.6)*100);
  h+='<div style="margin-top:14px"><div class="row between" style="margin-bottom:4px"><span style="font-size:11.5px;color:var(--c-ink-500)">'+T("researchCoverage")+'</span><span style="font-size:11.5px;font-family:var(--mono);color:var(--c-ink-700)">'+coveragePct+'%</span></div><div class="trackbar"><i style="width:'+coveragePct+'%"></i></div></div>';

  function chipRow(label,arr){
    if(!arr||!arr.length)return"";
    return '<div style="margin-top:12px"><div style="font-size:11px;color:var(--c-ink-500);text-transform:uppercase;letter-spacing:.04em;margin-bottom:6px">'+esc(label)+'</div><div style="display:flex;flex-wrap:wrap;gap:6px">'+arr.map(function(x){return '<span class="chip-sm">'+esc(x)+'</span>';}).join("")+'</div></div>';
  }
  h+=chipRow(T("competitors"),kg.competitors);
  h+=chipRow(T("techStack"),kg.techStack);
  h+=chipRow(T("secSignals"),kg.buyingSignals);

  function swotCell(label,arr){
    return '<div class="swotcell"><div class="lbl">'+esc(label)+'</div>'+((arr&&arr.length)?('<ul>'+arr.slice(0,5).map(function(x){return '<li>'+esc(x)+'</li>';}).join("")+'</ul>'):'<div style="color:var(--c-ink-300);font-size:12px">—</div>')+'</div>';
  }
  h+='<div class="swotgrid" style="margin-top:14px">'+
    swotCell(T("strengthsLbl"),kg.strengths)+
    swotCell(T("weaknessesLbl"),kg.weaknesses)+
    swotCell(T("opportunities"),kg.recommendedServices)+
    swotCell(T("threatsLbl"),kg.problems)+
    '</div>';

  var leaders=[];
  if(kg.ceo)leaders.push("CEO — "+kg.ceo);
  if(kg.cmo)leaders.push("CMO — "+kg.cmo);
  if(kg.vpMarketing)leaders.push("VP Marketing — "+kg.vpMarketing);
  (kg.decisionMakers||[]).forEach(function(x){leaders.push(x);});
  if(leaders.length)h+='<div style="margin-top:12px"><div style="font-size:11px;color:var(--c-ink-500);text-transform:uppercase;letter-spacing:.04em;margin-bottom:6px">'+T("leadership")+'</div><div style="display:flex;flex-wrap:wrap;gap:6px">'+leaders.map(function(x){return '<span class="chip-sm">'+esc(x)+'</span>';}).join("")+'</div></div>';

  var missing=kgKeys.filter(function(k){var v=kg[k];return Array.isArray(v)?v.length===0:!v;});
  if(kgFilled===0){
    h+='<div class="ic-s" style="color:var(--c-ink-500);margin-top:14px">'+T("noKgYet")+'</div>';
  }else if(missing.length){
    h+='<div style="margin-top:14px"><div style="font-size:11px;color:var(--c-ink-500);text-transform:uppercase;letter-spacing:.04em;margin-bottom:2px">'+T("missingInfo")+'</div>'+
      missing.map(function(k){return '<div class="missrow">☐ '+esc(humanizeKey(k))+'</div>';}).join("")+'</div>';
  }
  return h;
}
function mdToHtml(md){
  if(!md)return"";
  var lines=String(md).split("\n"),out=[],inList=false,tbl=null,inCode=false,codeBuf=[];
  function flushList(){if(inList){out.push("</ul>");inList=false;}}
  function flushTbl(){if(tbl){out.push(tbl);tbl=null;}}
  function flushCode(){if(codeBuf.length){out.push('<pre style="background:var(--bg-hover);border:1px solid var(--border);border-radius:8px;padding:10px 12px;overflow-x:auto;font-family:var(--mono);font-size:11.5px;white-space:pre-wrap;margin:8px 0">'+esc(codeBuf.join("\n"))+"</pre>");codeBuf=[];}}
  function inline(s){
    s=esc(s);
    s=s.replace(/\*\*(.+?)\*\*/g,"<b>$1</b>").replace(/\*(.+?)\*/g,"<i>$1</i>");
    s=s.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>');
    return s;
  }
  lines.forEach(function(raw){
    var l=raw.trim();
    if(/^```/.test(l)){
      if(inCode){flushCode();inCode=false;}
      else{flushList();flushTbl();inCode=true;}
      return;
    }
    if(inCode){codeBuf.push(raw);return;}
    if(/^\|.*\|$/.test(l)){
      if(/^\|[\s:|-]+\|$/.test(l))return;
      flushList();
      var cells=l.slice(1,-1).split("|").map(function(x){return inline(x.trim());});
      if(!tbl){tbl="<table class='md-tbl'><tr>"+cells.map(function(x){return "<th>"+x+"</th>";}).join("")+"</tr>";}
      else{tbl+="<tr>"+cells.map(function(x){return "<td>"+x+"</td>";}).join("")+"</tr>";}
      return;
    }
    flushTbl();
    if(!l){flushList();return;}
    var h=l.match(/^(#{1,4})\s+(.*)$/);
    if(h){flushList();var lvl=h[1].length,sz=lvl===1?15:lvl===2?13.5:12.5;out.push('<div style="font-weight:700;font-size:'+sz+'px;color:var(--c-ink-900);margin:14px 0 6px">'+inline(h[2])+"</div>");return;}
    if(/^(-{3,}|\*{3,})$/.test(l)){flushList();out.push('<div style="height:1px;background:var(--border);margin:10px 0"></div>');return;}
    var li=l.match(/^[-*]\s+(.*)$/);
    if(li){if(!inList){out.push("<ul style='margin:4px 0;padding-inline-start:18px'>");inList=true;}out.push("<li style='margin-bottom:3px'>"+inline(li[1])+"</li>");return;}
    flushList();
    out.push('<div style="margin-bottom:8px">'+inline(l)+"</div>");
  });
  flushList();flushTbl();flushCode();
  return out.join("");
}
function aiCard(){
  var on=!!S._aiKey,prov=S._aiProvider||"anthropic";
  return '<div class="card"><div class="ic-s" style="margin-bottom:10px">'+T("aiProviderNote")+'</div>'+
    '<div class="field"><label>'+T("aiProvider")+'</label><div class="seg"><button class="'+(prov==="anthropic"?"on":"")+'" data-a="aiProv" data-p="anthropic">Anthropic</button><button class="'+(prov==="groq"?"on":"")+'" data-a="aiProv" data-p="groq">Groq</button></div></div>'+
    '<div class="field"><label>'+T("aiKey")+'</label><input id="aiKey" type="password" placeholder="'+(prov==="groq"?"gsk_...":"sk-ant-...")+'" value="'+(on?"••••••••••":"")+'" autocomplete="off"></div>'+
    '<div class="field"><label>'+T("aiModel")+'</label><input id="aiModel" value="'+esc(S._aiModel||aiDefaultModel(prov))+'" autocomplete="off"></div>'+
    '<div class="row" style="gap:8px"><button class="btn btn-primary" data-a="saveAiKey" style="flex:1">'+T("save")+'</button>'+(on?'<button class="btn btn-ghost" data-a="clearAiKey" style="color:var(--danger)">'+T("delete")+'</button>':'')+'</div>'+
    (on?'<div class="ic-s" style="margin-top:8px;color:#3FBE86">'+T("aiEnabled")+' · '+esc(prov)+'</div>':'')+'</div>';
}
function closeDrawerX(){var db=document.getElementById("drawerBack");if(!db)return;if(history.state&&history.state.drawer){try{history.back();return;}catch(e){}}db.classList.remove("open");}
function syncStatusText(st){return st==="online"?T("syncOnline"):st==="syncing"?T("syncSyncing"):st==="error"?T("syncErrShort"):"—";}
function captureSchemaText(){
  return 'رجّع الـ JSON بالشكل ده بالظبط، من غير أي markdown fences ومن غير أي شرح أو تعليق:\n'+
  '{"action":"create|update","matchProjectId":"id or null","matchedName":"name or null","matchConfidence":"exact|fuzzy|none",'+
  '"project":{"name":"","subtitle":"","status":"active|paused|done",'+
  '"phases":[{"name":"","status":"done|current|upcoming","percent":0}],'+
  '"percentComplete":0,"nextAction":"","blockers":[""],"ideas":[""],'+
  '"decisions":[{"text":"","reason":"","status":"decided|pending"}],'+
  '"links":{"live":"","repo":"","deploy":"","firebase":""}}}\n'+
  '(أسماء الحقول وقيم enum زي create/update/done/current/upcoming/decided/pending لازم تفضل بالإنجليزي بالظبط زي ما هي فوق — دي مش نص، دي مفاتيح تقنية بيقرا بيها التطبيق.)';
}
function captureSystemPrompt(scopedId){
  var base="إنت \"Project Intake Parser\" لتطبيق Continuum، وهو تطبيق شخصي لإدارة الذاكرة والمشاريع (Memory OS). مهمتك تحوّل وصف المستخدم الحر عن مشروعه لـ JSON مطابق تمامًا للشكل تحت. خلّي كل القيم النصية بنفس اللغة أو اللهجة اللي كتب بيها المستخدم بالظبط، من غير ما تترجمها. متخترعش أي حقيقة مش مذكورة في النص؛ استخدم مصفوفات أو نصوص فاضية لو حاجة مش معروفة.\n\n"+captureSchemaText();
  if(scopedId){
    var sp=project(scopedId);
    return base+"\n\nالالتقاط ده مخصّص لمشروع موجود بالفعل: \""+(sp?sp.name:"")+"\" (id: "+scopedId+"). خلّي دايمًا action=update و matchProjectId=\""+scopedId+"\" و matchConfidence=exact مهما كان النص اللي هيتكتب.";
  }
  var list=S.projects.map(function(pp){return pp.id+": "+pp.name;}).join("\n")||"(مفيش مشاريع موجودة لحد دلوقتي)";
  return base+"\n\nالمشاريع الموجودة حاليًا (id: الاسم):\n"+list+"\n\nحدّد action=create لو واضح إن ده مش مطابق لأي مشروع من الموجودين؛ وحدّد action=update مع الـ matchProjectId الصح لو فعلًا مطابق لمشروع موجود. حدّد matchConfidence بصدق — exact بس لو متأكد فعلًا، غير كده fuzzy أو none.";
}
function parseSnapshotJSON(raw){
  var t=(raw||"").trim().replace(/^```json/i,"").replace(/^```/,"").replace(/```\s*$/,"").trim();
  var d=JSON.parse(t);
  if(!d||!d.project||!d.project.name)throw new Error("bad-shape");
  d.project.phases=Array.isArray(d.project.phases)?d.project.phases:[];
  d.project.blockers=Array.isArray(d.project.blockers)?d.project.blockers:[];
  d.project.ideas=Array.isArray(d.project.ideas)?d.project.ideas:[];
  d.project.decisions=Array.isArray(d.project.decisions)?d.project.decisions:[];
  d.project.links=d.project.links||{};
  return d;
}
function currentPhaseName(phases){var c=(phases||[]).find(function(x){return x.status==="current"});if(c)return c.name;return (phases&&phases.length)?phases[phases.length-1].name:"";}
function phasesAvgPercent(phases){if(!phases||!phases.length)return null;var s=0;phases.forEach(function(x){s+=(x.status==="done"?100:(x.percent||0))});return Math.round(s/phases.length);}
function applySnapshot(parsed,targetId){
  var pj=parsed.project||{},phases=pj.phases||[];
  var overall=(pj.percentComplete!=null?pj.percentComplete:phasesAvgPercent(phases));
  var stageLabel=currentPhaseName(phases);
  function writeLinkedSite(pid,links,name){
    if(!links)return;var has=links.live||links.repo||links.deploy||links.firebase;if(!has)return;
    S.sites=S.sites||[];
    var site=S.sites.find(function(x){return x.projectId===pid});
    if(site){if(links.live)site.live=links.live;if(links.repo)site.repo=links.repo;if(links.deploy)site.deploy=links.deploy;if(links.firebase)site.firebase=links.firebase;site.updatedAt=Date.now();}
    else{S.sites.unshift({id:uid(),projectId:pid,name:name||"—",live:links.live||"",repo:links.repo||"",deploy:links.deploy||"",firebase:links.firebase||"",createdAt:Date.now(),updatedAt:Date.now()});}
  }
  function replaceIdeas(pid,ideas){
    var oldIds=S.notes.filter(function(n){return n.projectId===pid&&n.src==="capture"}).map(function(n){return n.id;});
    if(oldIds.length){tomb(oldIds);S.notes=S.notes.filter(function(n){return oldIds.indexOf(n.id)<0;});}
    (ideas||[]).forEach(function(txt){if(!txt)return;S.notes.push({id:uid(),title:String(txt).slice(0,60),body:String(txt),projectId:pid,src:"capture",createdAt:Date.now(),updatedAt:Date.now()});});
  }
  function replaceDecisions(pid,decs){
    var oldIds=S.decisions.filter(function(d){return d.projectId===pid&&d.src==="capture"}).map(function(d){return d.id;});
    if(oldIds.length){tomb(oldIds);S.decisions=S.decisions.filter(function(d){return oldIds.indexOf(d.id)<0;});}
    (decs||[]).forEach(function(d){if(!d||!d.text)return;S.decisions.unshift({id:uid(),text:d.text,reason:d.reason||"",projectId:pid,status:d.status==="pending"?"pending":"decided",src:"capture",at:Date.now()});});
  }
  if(!targetId){
    var palette=["#7B7BF0","#3FBE86","#E2A43A","#F26761","#36D6E8","#F472B6"];
    var np={id:uid(),name:pj.name||"—",icon:"◈",color:palette[S.projects.length%palette.length],pinned:false,
      subtitle:pj.subtitle||"",status:pj.status||"active",stage:stageLabel,phases:phases,
      nextAction:pj.nextAction||"",repo:"",blockers:(pj.blockers||[]).slice(),commits:[],sessions:[],
      progress:(overall!=null?overall:0),createdAt:Date.now(),updatedAt:Date.now(),lastWorkedAt:Date.now()};
    S.projects.unshift(np);
    writeLinkedSite(np.id,pj.links,pj.name);
    replaceIdeas(np.id,pj.ideas);
    replaceDecisions(np.id,pj.decisions);
    save();
    return {ok:true,id:np.id,name:np.name,created:true};
  }
  var p=project(targetId);
  if(!p)return {ok:false};
  p.name=pj.name||p.name;
  if(pj.subtitle!=null)p.subtitle=pj.subtitle;
  p.status=pj.status||p.status;
  p.phases=phases;
  if(phases.length)p.stage=stageLabel;
  if(overall!=null)p.progress=overall;
  if(pj.nextAction!=null)p.nextAction=pj.nextAction;
  p.blockers=(pj.blockers||[]).slice();
  writeLinkedSite(p.id,pj.links,pj.name);
  replaceIdeas(p.id,pj.ideas);
  replaceDecisions(p.id,pj.decisions);
  p.lastWorkedAt=Date.now();p.updatedAt=Date.now();
  save();
  return {ok:true,id:p.id,name:p.name,created:false};
}
function proceedWithParsed(parsed,scopedId){
  if(scopedId){
    var r=applySnapshot(parsed,scopedId);closeSheet();
    if(r&&r.ok){toast(T("updated")+": "+r.name);open(r.id);}else render();
    return;
  }
  var pid=parsed.matchProjectId,exists=pid&&project(pid);
  if(parsed.action==="update"&&exists&&parsed.matchConfidence==="exact"){
    var r2=applySnapshot(parsed,pid);closeSheet();
    if(r2&&r2.ok){toast(T("updated")+": "+r2.name);open(r2.id);}
    return;
  }
  if(parsed.action==="create"){
    var r3=applySnapshot(parsed,null);closeSheet();
    if(r3&&r3.ok){toast(T("created")+": "+r3.name);open(r3.id);}
    return;
  }
  sheetConfirmMatch(parsed);
}
function sheetConfirmMatch(parsed){
  var guessId=parsed.matchProjectId&&project(parsed.matchProjectId)?parsed.matchProjectId:null;
  var guessName=guessId?project(guessId).name:(parsed.matchedName||null);
  var opts=S.projects.map(function(pp){return '<option value="'+pp.id+'">'+esc(pp.name)+'</option>';}).join("");
  openSheet('<h3>'+T("confirmMatch")+'</h3>'+
    '<div class="ic-s" style="margin-bottom:10px">'+(guessName?(T("looksLike")+' "'+esc(guessName)+'"'):T("noGuess"))+'</div>'+
    '<div class="field"><label>'+T("pickProject")+'</label><select id="cmSelect"><option value="">'+T("newProjectOpt")+'</option>'+opts+'</select></div>'+
    '<div class="sheet-actions"><button class="btn btn-ghost" data-a="closeSheet">'+T("cancel")+'</button><button class="btn btn-primary" data-a="doConfirmMatch">'+T("confirmImport")+'</button></div>');
  SH._pendingSnapshot=parsed;
  setTimeout(function(){var sel=document.getElementById("cmSelect");if(sel&&guessId)sel.value=guessId;},50);
}
function sheetImportSnapshot(scopedId){
  var mode=SH._capMode||"ai",canAI=aiConfigured(),sp=scopedId?project(scopedId):null;
  var idAttr=scopedId||"";
  var body='<h3>'+(sp?(T("updateViaCapture")+" — "+esc(sp.name)):T("importSnapshot"))+'</h3>'+
    '<div class="seg" style="margin-bottom:12px">'+
      '<button class="'+(mode==="ai"?"on":"")+'" data-a="capMode" data-m="ai" data-id="'+idAttr+'">'+T("describeAI")+'</button>'+
      '<button class="'+(mode==="json"?"on":"")+'" data-a="capMode" data-m="json" data-id="'+idAttr+'">'+T("pasteJson")+'</button>'+
    '</div>';
  if(mode==="ai"){
    body+='<textarea id="capFree" class="cap-textarea" placeholder="'+T("captureFreePh")+'">'+esc(SH._capFree||"")+'</textarea>';
    if(canAI){
      body+='<button class="btn btn-primary btn-block" data-a="doCaptureAI" data-id="'+idAttr+'" style="margin-top:10px">✦ '+T("generate")+'</button>';
    }else{
      body+='<div class="ic-s" style="margin-top:10px">'+T("aiOffHint")+'</div>';
    }
  }else{
    body+='<textarea id="capJson" class="cap-textarea mono" placeholder=\'{"action":"create",...}\'>'+esc(SH._capJson||"")+'</textarea>'+
      '<button class="btn btn-primary btn-block" data-a="doCaptureJSON" data-id="'+idAttr+'" style="margin-top:10px">'+T("importNow")+'</button>';
  }
  if(SH._capLoading)body+='<div class="askans ai-thinking" style="margin-top:10px">✦ '+T("aiThinking")+'<span class="dots"><i></i><i></i><i></i></span></div>';
  if(SH._capErr)body+='<div class="ic-s" style="color:var(--danger);margin-top:8px">'+esc(SH._capErr)+'</div>';
  body+='<button class="btn btn-ghost btn-block" data-a="closeSheet" style="margin-top:10px">'+T("cancel")+'</button>';
  openSheet(body);
  setTimeout(function(){var e=document.getElementById("capFree")||document.getElementById("capJson");if(e)e.focus()},250);
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
  var body='<div class="brand"><span class="brand-l">'+LOGO+T("app")+'</span><button class="drawer-x" data-a="closeDrawer" title="'+T("close")+'">✕</button></div>'+
    '<div class="modeswitch">'+
      '<button class="'+(!adv?"on":"")+'" data-a="setMode" data-m="quick">'+T("quick")+'<span class="d">'+T("simpleTasks")+'</span></button>'+
      '<button class="'+(adv?"on":"")+'" data-a="setMode" data-m="advanced">'+T("advanced")+'<span class="d">'+T("fullSystem")+'</span></button>'+
    '</div>'+
    '<div class="viewswitch">'+
      '<button class="'+(S.uiView==="mobile"?"on":"")+'" data-a="setView" data-vw="mobile">'+svg(IC.smartphone)+T("mobileView")+'</button>'+
      '<button class="'+(S.uiView==="desktop"?"on":"")+'" data-a="setView" data-vw="desktop">'+svg(IC.monitor)+T("desktopView")+'</button>'+
    '</div>';
  if(adv){
    body+='<div class="dsec">'+T("workspaceSec")+'</div>'+link("home",IC.home,"home")+link("projects",IC.folder,"projects")+link("companies",IC.building,"companiesNav")+link("tasks",IC.check,"tasks")+link("journal",IC.cal,"journal")+link("timeline",IC.clock,"timeline");
    body+='<div class="dsec">'+T("knowledge")+'</div>'+link("knowledge",IC.book,"notesPage")+link("courses",IC.cap,"courses")+link("bookmarks",IC.mark,"bookmarks")+link("prompts",IC.spark,"promptLib");
    body+='<div class="dsec">'+T("systemSec")+'</div>'+link("servers",IC.server,"servers")+link("repos",IC.git,"repositories")+link("work",IC.globe,"work")+link("assistant",IC.spark,"aiAssistant")+link("inbox",IC.bell,"inboxT")+link("profile",IC.user,"profileT")+link("search",IC.search,"searchLabel")+link("settings",IC.settings,"settings");
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
  m.innerHTML=({qtoday:vQuickToday,qtasks:vQuickTasks,home:vHome,projects:vProjects,project:vProject,tasks:vTasks,journal:vJournal,search:vSearch,settings:vSettings,timeline:vTimeline,knowledge:vKnowledge,bookmarks:vBookmarks,courses:vCourses,prompts:vPrompts,servers:vServers,repos:vRepos,work:vWork,assistant:vAssistant,focus:vFocus,inbox:vInbox,profile:vProfile,companies:vCompanies,company:vCompany}[v]||vQuickToday)();
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
function projectSortFn(a,b){
  var ao=(a.order==null?1e15:a.order),bo=(b.order==null?1e15:b.order);
  if(ao!==bo)return ao-bo;
  return (b.lastWorkedAt||b.createdAt)-(a.lastWorkedAt||a.createdAt);
}
function projectHasLink(p){var s=(S.sites||[]).find(function(x){return x.projectId===p.id});return !!(s&&(s.live||s.repo||s.deploy||s.firebase));}
function ensureOrder(list){list.forEach(function(p,i){p.order=i;});}
function moveProject(id,dir){
  var filt=S._pfilter||"all";
  var list=S.projects.slice().sort(projectSortFn);
  if(filt!=="all")list=list.filter(function(p){return p.status===filt});
  ensureOrder(list);
  var idx=list.findIndex(function(p){return p.id===id;});
  if(idx<0)return;
  var swapIdx=idx+dir;
  if(swapIdx<0||swapIdx>=list.length)return;
  var a=list[idx],b=list[swapIdx],tmp=a.order;a.order=b.order;b.order=tmp;
  a.updatedAt=Date.now();b.updatedAt=Date.now();
  save();render();
}
function vProjects(){
  var sel=S._sel&&S._selType==="projects",reo=!!S._reorder;
  var h='<div class="greet" style="display:flex;align-items:center;justify-content:space-between"><span>'+T("projects")+'</span><div class="row" style="gap:6px">'+(S.projects.length?'<button class="btn btn-ghost btn-sm" data-a="reorderMode">'+(reo?T("reorderDone"):("↕ "+T("reorder")))+'</button><button class="btn btn-ghost btn-sm" data-a="selMode" data-t="projects">'+(sel?T("selDone"):T("select"))+'</button>':'')+'</div></div>';
  var filt=S._pfilter||"all";
  h+='<div class="opts"><div class="seg">'+["all","active","paused","done"].map(function(f){return '<button class="'+(filt===f?"on":"")+'" data-a="pfilter" data-f="'+f+'">'+T(f==="all"?"allTasks":(f==="done"?"dstatus":f))+'</button>'}).join("")+'</div></div>';
  h+='<div class="row" style="gap:8px;margin-bottom:12px"><button class="btn btn-ghost" style="flex:1" data-a="newProject">'+svg(IC.plus,"")+' '+T("newProject")+'</button><button class="btn btn-ghost" style="flex:1" data-a="importSnapshot">📥 '+T("importSnapshot")+'</button></div>';
  if(!S.projects.length)return h+'<div class="empty"><div class="big">◈</div>'+T("projectsEmpty")+'</div>';
  if(sel)h+=bulkBar(true,false);
  var list=S.projects.slice().sort(projectSortFn);
  if(filt!=="all")list=list.filter(function(p){return p.status===filt});
  if(!list.length)return h+'<div class="empty" style="padding:26px">'+T("noItems")+'</div>';
  var selIds=S._selIds||[];
  list.forEach(function(p,idx){var pr=progressOf(p);var linked=projectHasLink(p);
    var badge=linked?'<span class="linkedbadge" title="'+T("linkedBadge")+'">🔗</span>':'';
    if(reo){
      h+='<div class="card reorder-row"><div class="reorder-arrows"><button class="rarrow" data-a="moveProj" data-dir="-1" data-id="'+p.id+'" '+(idx===0?"disabled":"")+'>▲</button><button class="rarrow" data-a="moveProj" data-dir="1" data-id="'+p.id+'" '+(idx===list.length-1?"disabled":"")+'>▼</button></div><div style="flex:1;min-width:0"><div class="row between"><span style="font-weight:600;color:var(--c-ink-900)">'+(p.pinned?"📌 ":"")+esc(p.name)+badge+'</span><span class="pill '+p.status+'">'+T(p.status==="done"?"dstatus":p.status)+'</span></div></div></div>';
    }else if(sel){var on=selIds.indexOf(p.id)>=0;
      h+='<div class="card '+(on?"selon":"")+'" data-a="pick" data-id="'+p.id+'" style="display:flex;gap:12px;align-items:center"><button class="pickbox '+(on?"on":"")+'">'+(on?svg(IC.check):"")+'</button><div style="flex:1;min-width:0"><div class="row between"><span style="font-weight:600;color:var(--c-ink-900)">'+(p.pinned?"📌 ":"")+esc(p.name)+badge+'</span><span class="pill '+p.status+'">'+T(p.status==="done"?"dstatus":p.status)+'</span></div><div class="prog"><i style="width:'+pr+'%"></i></div></div></div>';
    }else{
      h+='<div class="card tap" data-a="open" data-id="'+p.id+'"><div class="row between"><div class="row" style="gap:9px"><span style="color:'+(p.color||"var(--accent)")+'">'+esc(p.icon||"◈")+'</span><span style="font-weight:600;color:var(--c-ink-900)">'+(p.pinned?"📌 ":"")+esc(p.name)+badge+'</span></div><span class="pill '+p.status+'">'+T(p.status==="done"?"dstatus":p.status)+'</span></div>'+(p.nextAction?'<div style="font-size:13px;color:var(--c-ink-500);margin-top:8px">▸ '+esc(p.nextAction)+'</div>':'')+'<div class="prog"><i style="width:'+pr+'%"></i></div><div class="m" style="font-family:var(--mono);font-size:11px;color:var(--c-ink-300);margin-top:8px">'+pr+'% · '+T("lastWorked")+' '+rel(p.lastWorkedAt||p.createdAt)+'</div></div>';
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
  if(p.phases&&p.phases.length){
    h+='<div class="phase-stepper">'+p.phases.map(function(ph){
      var cls=ph.status==="done"?"done":(ph.status==="current"?"current":"upcoming");
      var right=ph.status==="current"?'<span class="phase-pct">'+(ph.percent||0)+'%</span>':(ph.status==="done"?'<span class="phase-pct">✓</span>':'');
      return '<div class="phase-row '+cls+'"><span class="phase-dot"></span><span class="phase-nm">'+esc(ph.name)+'</span>'+right+'</div>';
    }).join("")+'</div>';
  }
  var linkedSite=(S.sites||[]).find(function(x){return x.projectId===p.id});
  if(linkedSite){h+='<div class="linkchips" style="margin-top:10px">'+linkChip("live",linkedSite.live)+linkChip("deploy",linkedSite.deploy)+linkChip("repo",linkedSite.repo)+linkChip("firebase",linkedSite.firebase)+'</div>';}
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
  h+='<button class="btn btn-ghost btn-block" data-a="importSnapshot" data-id="'+p.id+'" style="margin-top:16px">📥 '+T("updateViaCapture")+'</button>';
  h+='<button class="btn btn-ghost btn-block" data-a="editProject" data-id="'+p.id+'" style="margin-top:8px">'+T("editProject")+'</button>';
  h+='<button class="btn btn-ghost btn-block" data-a="delProject" data-id="'+p.id+'" style="margin-top:8px;color:var(--danger);border-color:transparent">'+T("delete")+'</button>';
  return h;
}
/* ---- Companies ---- */
var CS_LABEL={lead:"csLead",research:"csResearch",audit:"csAudit",outreach:"csOutreach",meeting:"csMeeting",proposal:"csProposal",won:"csWon",lost:"csLost",completed:"csCompleted"};
var CS_ORDER=["lead","research","audit","outreach","meeting","proposal","won","lost","completed"];
var PR_LABEL={low:"pLow",medium:"pMed",high:"pHigh",critical:"pCritical"};
function vCompanies(){
  var h='<div class="greet" style="display:flex;align-items:center;justify-content:space-between"><span>'+T("companiesNav")+'</span><div class="row" style="gap:6px"><button class="btn btn-ghost btn-sm" data-a="coCapMode" data-m="ai">📥 '+T("importCompanySnapshot")+'</button><button class="btn btn-ghost btn-sm" data-a="researchCompanySheet">🔍 '+T("researchCompany")+'</button><button class="btn btn-ghost btn-sm" data-a="newCompanySheet">'+svg(IC.plus,"")+' '+T("newCompany")+'</button></div></div>';
  h+='<div class="sub">'+T("companiesSub")+'</div>';
  h+='<div class="field" style="margin-bottom:10px"><input id="coSearch" placeholder="'+T("searchCoPh")+'" value="'+esc(S._cq||"")+'"></div>';
  var filt=S._cstatus||"all";
  h+='<div class="opts"><select id="coStatusFilter" style="background:var(--bg-elevated);border:1px solid var(--border);border-radius:var(--r-sm);padding:7px 10px;color:var(--c-ink-700);font-size:13px"><option value="all">'+T("allLabel")+'</option>'+CS_ORDER.map(function(s){return '<option value="'+s+'" '+(filt===s?"selected":"")+'>'+T(CS_LABEL[s])+'</option>'}).join("")+'</select></div>';
  if(!S.companies.length)return h+'<div class="empty"><div class="big">◈</div>'+T("companiesEmpty")+'</div>';
  var list=S.companies.slice();
  var q=(S._cq||"").toLowerCase();
  if(q)list=list.filter(function(c){return (c.ov.name+" "+c.ov.industry+" "+c.ov.country).toLowerCase().indexOf(q)>=0});
  if(filt!=="all")list=list.filter(function(c){return c.ov.status===filt});
  list.sort(function(a,b){return (b.updatedAt||0)-(a.updatedAt||0)});
  if(!list.length)return h+'<div class="empty" style="padding:26px">'+T("noItems")+'</div>';
  list.forEach(function(c){
    var meta=[c.ov.industry,c.ov.country].filter(Boolean).join(" · ");
    var pv=c.ov.priority||"medium";
    h+='<div class="card tap" data-a="openCompany" data-id="'+c.id+'"><div class="row between"><span style="font-weight:600;color:var(--c-ink-900)">'+esc(c.ov.name||"—")+'</span><span class="pill '+esc(c.ov.status)+'">'+T(CS_LABEL[c.ov.status]||"csLead")+'</span></div>'+
      (meta?'<div style="font-size:13px;color:var(--c-ink-500);margin-top:8px">'+esc(meta)+'</div>':'')+
      (c.ov.next?'<div style="font-size:13px;color:var(--c-ink-500);margin-top:4px">▸ '+esc(c.ov.next)+'</div>':'')+
      '<div class="m" style="font-family:var(--mono);font-size:11px;color:var(--c-ink-300);margin-top:8px">'+T(PR_LABEL[pv])+' · '+rel(c.updatedAt)+'</div></div>';
  });
  return h;
}
function vCompany(){
  var c=company(S.activeCid);if(!c)return vCompanies();
  var h="";
  h+='<div class="row between"><span id="coTitle" style="font-weight:700;font-size:20px;color:var(--c-ink-900)">'+esc(c.ov.name||"—")+'</span>'+
     '<select class="pill '+esc(c.ov.status)+'" data-a="coStatus" style="border:none;padding:4px 8px;font-family:var(--mono)">'+
     CS_ORDER.map(function(s){return '<option value="'+s+'" '+(c.ov.status===s?"selected":"")+'>'+T(CS_LABEL[s])+'</option>'}).join("")+'</select></div>';
  var prios=["low","medium","high","critical"];
  h+='<div class="row" style="margin-top:10px;gap:8px;align-items:center"><span style="font-size:12px;color:var(--c-ink-500)">'+T("priority")+'</span><select data-a="coPriority" style="border:1px solid var(--border);background:var(--bg-elevated);border-radius:var(--r-sm);padding:5px 9px;color:var(--c-ink-700);font-size:13px">'+
     prios.map(function(p){return '<option value="'+p+'" '+((c.ov.priority||"medium")===p?"selected":"")+'>'+T(PR_LABEL[p])+'</option>'}).join("")+'</select></div>';
  h+='<button class="btn btn-ghost btn-sm" data-a="coCapMode" data-m="ai" data-id="'+c.id+'" style="margin-top:8px">📥 '+T("updateViaCapture")+'</button>';

  h+='<div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin-top:14px">';
  [["commercialReadiness"],["decisionComplexity"]].forEach(function(pair){
    var k=pair[0],v=c.ov[k];
    h+='<div class="scorecard"><div class="lbl">'+T(k)+'</div><select data-a="coScore" data-field="'+k+'"><option value="">—</option>'+
      [0,1,2,3,4,5,6,7,8,9,10].map(function(n){return '<option value="'+n+'" '+(String(v)===String(n)?"selected":"")+'>'+n+'/10</option>'}).join("")+
      '</select><div class="trackbar"><i style="width:'+(v?(+v*10):0)+'%"></i></div></div>';
  });
  var op=c.ov.outreachProbability;
  h+='<div class="scorecard"><div class="lbl">'+T("outreachProbability")+'</div><select data-a="coScore" data-field="outreachProbability"><option value="">—</option>'+
    [0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100].map(function(n){return '<option value="'+n+'" '+(String(op)===String(n)?"selected":"")+'>'+n+'%</option>'}).join("")+
    '</select><div class="trackbar"><i style="width:'+(op?+op:0)+'%"></i></div></div>';
  h+='</div>';

  h+='<div class="eyebrow">📇 '+T("secSnapshot")+'</div>';
  h+='<div class="card">'+renderSnapshot(c)+'</div>';

  h+='<div class="eyebrow">01 · '+T("secOverview")+'</div>';
  h+=fld("co_ov_name",T("companyName"),c.ov.name);
  h+=fld("co_ov_website",T("website"),c.ov.website);
  h+=fld("co_ov_industry",T("industry"),c.ov.industry);
  h+=fld("co_ov_country",T("country"),c.ov.country);
  h+=fld("co_ov_next",T("nextAction"),c.ov.next);

  h+='<div class="eyebrow">'+T("secResearch")+'</div>';
  var researching=(S._researching===c.id);
  var stageLabel=researching?(S._researchStage==="structuring"?T("structuring"):T("researching")):("↻ "+T("reRunResearch"));
  h+='<div class="row between" style="margin-bottom:10px;align-items:center"><span style="font-size:12px;color:var(--c-ink-500)">🔍 '+T("secResearch")+'</span>'+
     '<button class="btn btn-ghost btn-sm" data-a="runResearch" data-id="'+c.id+'" '+(researching?"disabled":"")+'>'+stageLabel+'</button></div>';
  if(S._researchErr&&S._researchErrId===c.id)h+='<div class="ic-s" style="color:var(--danger);margin-bottom:10px">'+esc(S._researchErr)+'</div>';

  h+='<div style="font-size:11px;color:var(--c-ink-500);text-transform:uppercase;letter-spacing:.04em;margin-bottom:6px">🧠 '+T("secIntelDb")+'</div>';
  if(c.intelDb){h+='<div class="card" style="margin-bottom:10px;line-height:1.55;border-left:3px solid var(--ai)">'+mdToHtml(c.intelDb)+'</div>';}
  else if(!researching){h+='<div class="ic-s" style="color:var(--c-ink-500);margin-bottom:10px">'+T("intelDbEmpty")+'</div>';}
  h+=fldArea("co_intelDb",T("secIntelDb"),c.intelDb);

  h+='<div style="font-size:11px;color:var(--c-ink-500);text-transform:uppercase;letter-spacing:.04em;margin:14px 0 6px">'+T("rawResearch")+'</div>';
  if(c.research){h+='<div class="card" style="margin-bottom:10px;line-height:1.55">'+mdToHtml(c.research)+'</div>';}
  else if(!researching){h+='<div class="ic-s" style="color:var(--c-ink-500);margin-bottom:10px">'+T("researchEmpty")+'</div>';}
  h+=fldArea("co_research",T("rawResearch"),c.research);

  h+='<div class="eyebrow">'+T("secStrategicAudit")+'</div>';
  var auditing=(S._auditing===c.id);
  var hasIntel=!!c.intelDb;
  var auditBtnLabel=auditing?T("analyzingStrategy"):(c.strategicAudit?"↻ "+T("reRunStrategicAudit"):T("runStrategicAudit"));
  h+='<div class="row between" style="margin-bottom:10px;align-items:center"><span style="font-size:12px;color:var(--c-ink-500)">🎯 '+T("secStrategicAudit")+'</span>'+
     (hasIntel?'<button class="btn btn-ghost btn-sm" data-a="runStrategicAudit" data-id="'+c.id+'" '+(auditing?"disabled":"")+'>'+auditBtnLabel+'</button>':'')+'</div>';
  if(!hasIntel){h+='<div class="ic-s" style="color:var(--c-ink-500);margin-bottom:10px">'+T("strategicAuditGate")+'</div>';}
  if(S._auditErr&&S._auditErrId===c.id)h+='<div class="ic-s" style="color:var(--danger);margin-bottom:10px">'+esc(S._auditErr)+'</div>';
  if(c.strategicAudit){h+='<div class="card" style="margin-bottom:10px;line-height:1.55;border-left:3px solid var(--accent)">'+mdToHtml(c.strategicAudit)+'</div>';}
  else if(hasIntel&&!auditing){h+='<div class="ic-s" style="color:var(--c-ink-500);margin-bottom:10px">'+T("strategicAuditEmpty")+'</div>';}
  h+=fldArea("co_strategicAudit",T("secStrategicAudit"),c.strategicAudit);

  h+='<div class="eyebrow">'+T("secCommercialStrategy")+'</div>';
  var strategizing=(S._strategizing===c.id);
  var hasAudit=!!c.strategicAudit;
  var stratBtnLabel=strategizing?T("buildingStrategy"):(c.commercialStrategy?"↻ "+T("reRunCommercialStrategy"):T("runCommercialStrategy"));
  h+='<div class="row between" style="margin-bottom:10px;align-items:center"><span style="font-size:12px;color:var(--c-ink-500)">💰 '+T("secCommercialStrategy")+'</span>'+
     (hasAudit?'<button class="btn btn-ghost btn-sm" data-a="runCommercialStrategy" data-id="'+c.id+'" '+(strategizing?"disabled":"")+'>'+stratBtnLabel+'</button>':'')+'</div>';
  if(!hasAudit){h+='<div class="ic-s" style="color:var(--c-ink-500);margin-bottom:10px">'+T("commercialStrategyGate")+'</div>';}
  if(S._strategyErr&&S._strategyErrId===c.id)h+='<div class="ic-s" style="color:var(--danger);margin-bottom:10px">'+esc(S._strategyErr)+'</div>';
  if(c.commercialStrategy){h+='<div class="card" style="margin-bottom:10px;line-height:1.55;border-left:3px solid var(--success)">'+mdToHtml(c.commercialStrategy)+'</div>';}
  else if(hasAudit&&!strategizing){h+='<div class="ic-s" style="color:var(--c-ink-500);margin-bottom:10px">'+T("commercialStrategyEmpty")+'</div>';}
  h+=fldArea("co_commercialStrategy",T("secCommercialStrategy"),c.commercialStrategy);

  h+='<div class="eyebrow">'+T("secEngagement")+'</div>';
  var engaging=(S._engaging===c.id);
  var hasStrategy=!!c.commercialStrategy;
  var engageBtnLabel=engaging?T("buildingEngagement"):(c.engagementPackage?"↻ "+T("reRunEngagement"):T("runEngagement"));
  h+='<div class="row between" style="margin-bottom:10px;align-items:center"><span style="font-size:12px;color:var(--c-ink-500)">📋 '+T("secEngagement")+'</span>'+
     (hasStrategy?'<button class="btn btn-ghost btn-sm" data-a="runEngagement" data-id="'+c.id+'" '+(engaging?"disabled":"")+'>'+engageBtnLabel+'</button>':'')+'</div>';
  if(!hasStrategy){h+='<div class="ic-s" style="color:var(--c-ink-500);margin-bottom:10px">'+T("engagementGate")+'</div>';}
  if(S._engageErr&&S._engageErrId===c.id)h+='<div class="ic-s" style="color:var(--danger);margin-bottom:10px">'+esc(S._engageErr)+'</div>';
  if(c.engagementPackage){h+='<div class="card" style="margin-bottom:10px;line-height:1.55;border-left:3px solid var(--warning)">'+mdToHtml(c.engagementPackage)+'</div>';}
  else if(hasStrategy&&!engaging){h+='<div class="ic-s" style="color:var(--c-ink-500);margin-bottom:10px">'+T("engagementEmpty")+'</div>';}
  h+=fldArea("co_engagementPackage",T("secEngagement"),c.engagementPackage);

  h+='<div class="eyebrow">02 · '+T("secIntel")+'</div>';
  h+=fldArea("co_int_snapshot",T("companySnapshot"),c.int.snapshot);
  h+=fldArea("co_int_products",T("productsServices"),c.int.products);
  h+=fldArea("co_int_market",T("market"),c.int.market);
  h+=fldArea("co_int_competitors",T("competitors"),c.int.competitors);
  h+=fld("co_int_tech",T("techStack"),c.int.tech);
  h+=fldArea("co_int_sources",T("researchSources"),c.int.sources);

  h+='<div class="eyebrow">03 · '+T("secAudit")+'</div>';
  h+='<div class="card" style="margin-bottom:10px">'+fldArea("co_aud_master",T("masterAudit"),c.aud.master)+fldArea("co_aud_exec",T("execSnapshot"),c.aud.exec)+'</div>';
  h+='<div class="card" style="margin-bottom:10px;border-left:3px solid var(--danger)">'+fldArea("co_aud_problems",T("topProblems"),c.aud.problems)+'</div>';
  h+='<div class="card" style="border-left:3px solid var(--success)">'+fldArea("co_aud_wins",T("quickWins"),c.aud.wins)+fldArea("co_aud_opportunities",T("opportunities"),c.aud.opportunities)+'</div>';

  h+='<div class="eyebrow">'+T("secSignals")+'</div>';
  (c.sig||[]).forEach(function(s,i){
    h+='<div class="sigrow"><input id="co_sig_'+i+'_label" placeholder="'+esc(T("signalLabel")+" "+(i+1))+'" value="'+esc(s.label||"")+'">'+
      '<select data-a="coSigStars" data-idx="'+i+'"><option value="">—</option>'+
      [1,2,3,4,5].map(function(n){return '<option value="'+n+'" '+(String(s.stars)===String(n)?"selected":"")+'>'+"★".repeat(n)+"☆".repeat(5-n)+'</option>'}).join("")+
      '</select></div>';
  });

  h+='<div class="eyebrow">04 · '+T("secDM")+'</div>';
  var roles=[["ceo","CEO"],["cmo","CMO"],["cro","CRO"],["marketing",T("roleMarketing")],["sales",T("roleSales")],["product",T("roleProduct")],["tech",T("roleTech")]];
  var osKeys=["notStarted","contacted","replied","meetingSet","noResponse"];
  var osLabel={notStarted:"osNotStarted",contacted:"osContacted",replied:"osReplied",meetingSet:"osMeetingSet",noResponse:"osNoResponse"};
  roles.forEach(function(r){
    var key=r[0],label=r[1],d=c.dm[key];
    h+='<div class="card" style="margin-bottom:10px"><div class="row between" style="margin-bottom:10px"><span style="font-weight:700;color:var(--c-ink-900);font-family:var(--mono);font-size:12.5px">'+esc(label)+'</span>'+
      '<select data-a="coDmStatus" data-role="'+key+'" style="border:1px solid var(--border);background:var(--bg-elevated);border-radius:var(--r-sm);padding:4px 8px;color:var(--c-ink-700);font-size:12px">'+
      osKeys.map(function(k){return '<option value="'+k+'" '+((d.outStatus||"notStarted")===k?"selected":"")+'>'+T(osLabel[k])+'</option>'}).join("")+'</select></div>'+
      fld("co_dm_"+key+"_role",T("roleFld"),d.role)+
      fld("co_dm_"+key+"_linkedin",T("linkedin"),d.linkedin)+
      fldArea("co_dm_"+key+"_pain",T("painPoints"),d.pain)+
      fldArea("co_dm_"+key+"_msg",T("personalizedMsg"),d.msg)+
      '</div>';
  });

  h+='<div class="eyebrow">05 · '+T("secOutreach")+'</div>';
  h+=fld("co_out_linkedin",T("linkedin"),c.out.linkedin);
  h+=fld("co_out_email",T("email"),c.out.email);
  h+=fld("co_out_video",T("video"),c.out.video);
  h+=fldArea("co_out_calls",T("calls"),c.out.calls);
  h+=fldArea("co_out_followups",T("followUps"),c.out.followups);
  h+=fldArea("co_out_notes",T("meetingNotes"),c.out.notes);

  h+='<div class="eyebrow">06 · '+T("secProposal")+'</div>';
  var prKeys=["draft","sent","review","accepted","declined"];
  var prLabel={draft:"prDraft",sent:"prSent",review:"prReview",accepted:"prAccepted",declined:"prDeclined"};
  h+='<div class="row" style="margin-bottom:10px;gap:8px;align-items:center"><span style="font-size:12px;color:var(--c-ink-500)">'+T("proposalStatus")+'</span><select data-a="coProposalStatus" style="border:1px solid var(--border);background:var(--bg-elevated);border-radius:var(--r-sm);padding:5px 9px;color:var(--c-ink-700);font-size:13px">'+
    prKeys.map(function(k){return '<option value="'+k+'" '+((c.prop.status||"draft")===k?"selected":"")+'>'+T(prLabel[k])+'</option>'}).join("")+'</select></div>';
  h+=fldArea("co_prop_scope",T("scope"),c.prop.scope);
  h+=fld("co_prop_pricing",T("pricing"),c.prop.pricing);
  h+=fld("co_prop_timeline",T("propTimeline"),c.prop.timeline);
  h+=fldArea("co_prop_deliverables",T("deliverables"),c.prop.deliverables);

  h+='<div class="eyebrow">07 · '+T("secDelivery")+'</div>';
  h+=fldArea("co_del_discovery",T("discovery"),c.del.discovery);
  h+=fldArea("co_del_brand",T("brand"),c.del.brand);
  h+=fld("co_del_website",T("website"),c.del.website);
  h+=fldArea("co_del_dev",T("devPhase"),c.del.dev);
  h+=fldArea("co_del_launch",T("launch"),c.del.launch);
  h+=fldArea("co_del_caseStudy",T("caseStudy"),c.del.caseStudy);

  h+='<div class="eyebrow">08 · '+T("notesPage")+'</div>';
  h+=fldArea("co_notes",T("notesPage"),c.notes);

  h+='<button class="btn btn-ghost btn-block" data-a="delItem" data-t="companies" data-id="'+c.id+'" style="margin-top:16px;color:var(--danger);border-color:transparent">'+T("delete")+'</button>';
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
  var raw=(S._q||"").trim(),q=raw.toLowerCase(),terms=q.split(/\s+/).filter(Boolean),filt=S._sfilter||"all";
  var h='<input class="search-in" id="searchInput" placeholder="'+T("searchPh")+'" value="'+esc(S._q||"")+'" autocomplete="off">';
  var types=[["all",T("allTasks")],["projects",T("projects")],["companies",T("companiesNav")],["tasks",T("tasks")],["notes",T("notesT")],["bookmarks",T("bookmarks")],["courses",T("courses")],["prompts",T("promptLib")],["servers",T("servers")],["repos",T("repositories")],["sites",T("work")]];
  h+='<div class="opts" style="margin-top:10px"><div class="seg" style="flex-wrap:wrap">'+types.map(function(t){return '<button class="'+(filt===t[0]?"on":"")+'" data-a="sfilter" data-f="'+t[0]+'">'+t[1]+'</button>'}).join("")+'</div></div>';
  if(!terms.length)return h+'<div class="empty" style="padding:30px">'+svg(IC.search)+'<div style="margin-top:12px;color:var(--c-ink-300);font-size:14px">'+T("searchPh")+'</div></div>';
  function match(text){text=(text||"").toLowerCase();return terms.every(function(t){return text.indexOf(t)>=0});}
  function hl(str){var out=esc(str||"");terms.forEach(function(t){if(!t)return;var re=new RegExp("("+t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","ig");out=out.replace(re,"<mark>$1</mark>");});return out;}
  var groups=[];
  function grp(key,label,items,rowFn){if((filt==="all"||filt===key)&&items.length){groups.push({label:label,count:items.length,html:items.map(rowFn).join("")});}}
  grp("projects",T("projects"),S.projects.filter(function(p){return match(p.name+" "+(p.nextAction||"")+" "+(p.subtitle||"")+" "+(p.version||""))}),function(p){return '<div class="item tap" data-a="open" data-id="'+p.id+'"><div class="ico" style="color:'+(p.color||"var(--accent)")+'">◈</div><div class="body"><div class="t">'+hl(p.name)+'</div>'+(p.nextAction?'<div class="m">▸ '+esc(p.nextAction)+'</div>':'')+'</div>'+svg(IC.chev,"flip go")+'</div>';});
  grp("companies",T("companiesNav"),(S.companies||[]).filter(function(c){return match(c.ov.name+" "+(c.ov.industry||"")+" "+(c.ov.country||"")+" "+(c.ov.next||""))}),function(c){return '<div class="item tap" data-a="openCompany" data-id="'+c.id+'"><div class="ico">'+svg(IC.building)+'</div><div class="body"><div class="t">'+hl(c.ov.name)+'</div>'+(c.ov.industry?'<div class="m">'+esc(c.ov.industry)+'</div>':'')+'</div>'+svg(IC.chev,"flip go")+'</div>';});
  grp("tasks",T("tasks"),S.tasks.filter(function(t){return match(t.title)}),function(t){var p=project(t.projectId);return '<div class="item tap" data-a="editTask" data-id="'+t.id+'"><div class="ico">'+(t.done?"✓":"○")+'</div><div class="body"><div class="t">'+hl(t.title)+'</div>'+(p?'<div class="m">'+esc(p.name)+'</div>':'')+'</div></div>';});
  grp("notes",T("notesT"),S.notes.filter(function(n){return match(n.title+" "+(n.body||""))}),function(n){var p=project(n.projectId);return '<div class="item tap" data-a="openNote" data-id="'+n.id+'"><div class="ico">📝</div><div class="body"><div class="t">'+hl(n.title)+'</div>'+(n.body?'<div class="m">'+esc(n.body.slice(0,80))+'</div>':'')+'</div></div>';});
  grp("bookmarks",T("bookmarks"),S.bookmarks.filter(function(b){return match(b.title+" "+(b.url||"")+" "+(b.topic||""))}),function(b){return '<div class="item"><div class="ico">🔖</div><div class="body tap" data-a="openBk" data-id="'+b.id+'"><div class="t">'+hl(b.title)+'</div>'+(b.url?'<div class="m">'+esc(b.url)+'</div>':'')+'</div></div>';});
  grp("courses",T("courses"),S.courses.filter(function(c){return match(c.title+" "+(c.provider||"")+" "+(c.details||""))}),function(c){return '<div class="item tap" data-a="openCourse" data-id="'+c.id+'"><div class="ico">🎓</div><div class="body"><div class="t">'+hl(c.title)+'</div>'+(c.provider?'<div class="m">'+esc(c.provider)+'</div>':'')+'</div></div>';});
  grp("prompts",T("promptLib"),S.prompts.filter(function(p){return match(p.title+" "+(p.model||"")+" "+(p.body||""))}),function(p){return '<div class="item"><div class="ico">✦</div><div class="body"><div class="t">'+hl(p.title)+'</div>'+(p.body?'<div class="m">'+esc(p.body.slice(0,80))+'</div>':'')+'</div>'+copyBtn(p.body||"")+'</div>';});
  grp("servers",T("servers"),S.servers.filter(function(v){return match(v.name+" "+(v.host||"")+" "+(v.notes||""))}),function(v){return '<div class="item"><div class="ico">🖥</div><div class="body"><div class="t">'+hl(v.name)+'</div>'+(v.host?'<div class="m">'+esc(v.host)+'</div>':'')+'</div>'+copyBtn(v.host||"")+'</div>';});
  grp("repos",T("repositories"),S.repos.filter(function(r){return match(r.name+" "+(r.branch||"")+" "+(r.url||""))}),function(r){return '<div class="item"><div class="ico">⎇</div><div class="body"><div class="t">'+hl(r.name)+'</div>'+(r.url?'<div class="m">'+esc(r.url)+'</div>':'')+'</div>'+copyBtn(r.url||"")+'</div>';});
  grp("sites",T("work"),(S.sites||[]).filter(function(w){return match(w.name+" "+(w.note||"")+" "+(w.live||"")+" "+(w.repo||"")+" "+(w.deploy||""))}),function(w){return '<div class="item tap" data-a="editItem" data-t="sites" data-id="'+w.id+'"><div class="ico">🌐</div><div class="body"><div class="t">'+hl(w.name)+'</div>'+((w.live||w.repo)?'<div class="m">'+esc(w.live||w.repo)+'</div>':'')+'</div></div>';});
  var total=groups.reduce(function(a,g){return a+g.count},0);
  if(!total)return h+'<div class="empty" style="padding:30px">'+T("noResults")+'</div>';
  h+='<div class="ic-s" style="margin:10px 2px 2px">'+total+' '+T("results")+'</div>';
  groups.forEach(function(g){h+='<div class="sec-label">'+g.label+' <span class="cnt">'+g.count+'</span></div>'+g.html;});
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
function welcomePanel(){
  var steps=[["capture","＋"],["link","⇄"],["work","▶"],["snapshot","⎙"],["resume","↺"]];
  var loop='<div class="loopchips">'+steps.map(function(x,i){return '<span class="loopchip">'+x[1]+' '+T("loop_"+x[0])+'</span>'+(i<steps.length-1?'<span class="looparr">→</span>':'')}).join("")+'</div>';
  return '<div class="welcome"><div class="wc-badge">◈ CONTINUUM</div>'+
    '<div class="wc-title">'+T("welcomeTitle")+'</div>'+
    '<div class="wc-sub">'+T("welcomeLine")+'</div>'+loop+
    '<div class="wc-actions">'+
      '<button class="btn btn-primary" data-a="newProject">'+T("startProject")+'</button>'+
      '<button class="btn btn-ghost" data-a="capture">＋ '+T("captureL")+'</button>'+
      '<button class="btn btn-ghost" data-a="go" data-v="work">🌐 '+T("addSite")+'</button>'+
    '</div></div>';
}
function vHome(){
  var withSess=S.projects.filter(function(p){return p.sessions&&p.sessions.length}).sort(function(a,b){return(b.lastWorkedAt||0)-(a.lastWorkedAt||0)});
  if(!withSess.length){
    var totalItems=S.projects.length+S.tasks.length+S.notes.length+(S.sites?S.sites.length:0)+S.bookmarks.length+S.courses.length;
    var mn='<div class="greet">'+T(greetKey())+'</div><div class="sub">'+(totalItems?T("nothingSub"):T("welcomeSub"))+'</div>';
    mn+=welcomePanel();
    var focus0=S.tasks.filter(function(t){return !t.done}).sort(function(a,b){return((a.due||9e15)-(b.due||9e15))||(prioRank(b.priority)-prioRank(a.priority))});
    if(focus0.length){mn+='<div class="eyebrow between2"><span>'+T("todaysFocus")+'</span><span class="cntlite">'+focus0.length+' '+T("items")+'</span></div>';
      focus0.slice(0,6).forEach(function(t){var pr=project(t.projectId);mn+='<div class="item task"><button class="check '+(t.done?"on":"")+'" data-a="toggle" data-id="'+t.id+'">'+svg(IC.check)+'</button><div class="body"><div class="t">'+esc(t.title)+'</div><div class="m">'+(pr?esc(pr.name)+' · ':'')+(t.due?T("due")+' '+dueLabel(t.due):'')+'</div></div>'+prioPill(t.priority)+'</div>';});}
    return mn;
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
      h+='<div class="item"><div class="ico">🔖</div><div class="body tap" data-a="openBk" data-id="'+b.id+'"><div class="t">'+esc(b.title)+'</div><div class="m">'+esc(b.url||b.topic||"")+'</div></div><div class="row" style="gap:4px">'+copyBtn(b.url||"")+editBtn("bookmarks",b.id)+delBtn("bookmarks",b.id)+'</div></div>';
    }
  });
  return h;
}
function vCourses(){
  var h='<div class="greet">'+T("courses")+'</div><div style="height:8px"></div><button class="btn btn-ghost btn-block" data-a="newCourse" style="margin-bottom:12px">'+svg(IC.plus)+' '+T("addCourse")+'</button>';
  if(!S.courses.length)return h+empty(T("noItems"),"🎓");
  S.courses.forEach(function(c){var pr=c.total?Math.round((c.current||0)/c.total*100):(c.progress||0);
    h+='<div class="card tap" data-a="openCourse" data-id="'+c.id+'"><div class="row between"><div style="font-weight:600;color:var(--c-ink-900)">'+esc(c.title)+'</div><div class="st">'+pr+'%</div>'+delBtn("courses",c.id)+'</div>'+(c.provider?'<div class="m" style="font-family:var(--mono);font-size:12px;color:var(--c-ink-500);margin-top:2px">'+esc(c.provider)+(c.total?' · '+(c.current||0)+'/'+c.total:'')+'</div>':'')+'<div class="prog"><i style="width:'+pr+'%"></i></div></div>'});
  return h;
}
function vPrompts(){
  var h='<div class="greet">'+T("promptLib")+'</div><div style="height:8px"></div><button class="btn btn-ghost btn-block" data-a="newPrompt" style="margin-bottom:12px">'+svg(IC.plus)+' '+T("addPrompt")+'</button>';
  if(!S.prompts.length)return h+empty(T("noItems"),"✦");
  S.prompts.forEach(function(p){h+='<div class="card"><div class="row between"><div style="font-weight:600;color:var(--c-ink-900)">'+esc(p.title)+'</div><div class="st">'+esc(p.model||"")+'</div>'+copyBtn(p.body||"")+editBtn("prompts",p.id)+delBtn("prompts",p.id)+'</div><div style="font-size:13px;color:var(--c-ink-500);margin-top:6px;font-family:var(--mono)">'+esc(p.body||"")+'</div></div>'});
  return h;
}
function vServers(){
  var h='<div class="greet">'+T("servers")+'</div><div style="height:8px"></div><button class="btn btn-ghost btn-block" data-a="newServer" style="margin-bottom:12px">'+svg(IC.plus)+' '+T("addServer")+'</button>';
  if(!S.servers.length)return h+empty(T("noItems"),"🖧");
  S.servers.forEach(function(s){h+='<div class="card"><div class="row between"><div style="font-weight:600;color:var(--c-ink-900)">'+esc(s.name)+'</div><div class="row" style="gap:4px">'+copyBtn(s.host||"")+editBtn("servers",s.id)+delBtn("servers",s.id)+'</div></div><div class="m" style="font-family:var(--mono);font-size:12px;color:var(--c-ink-500);margin-top:2px">'+esc(s.host||"")+(s.ports?' · '+esc(s.ports):'')+'</div>'+(s.notes?'<div style="font-size:13px;color:var(--c-ink-500);margin-top:6px">'+esc(s.notes)+'</div>':'')+'</div>'});
  return h;
}
function vRepos(){
  var h='<div class="greet">'+T("repositories")+'</div><div style="height:8px"></div><button class="btn btn-ghost btn-block" data-a="newRepo" style="margin-bottom:12px">'+svg(IC.plus)+' '+T("addRepo")+'</button>';
  if(!S.repos.length)return h+empty(T("noItems"),"⎇");
  S.repos.forEach(function(r){var pr=project(r.projectId),cms=pr?(pr.commits||[]):[];
    h+='<div class="card"><div class="row between"><div style="font-weight:600;color:var(--c-ink-900)">'+esc(r.name)+'</div><div class="st mono2">'+esc(r.branch||"")+'</div><div class="row" style="gap:4px">'+copyBtn(r.url||"")+editBtn("repos",r.id)+delBtn("repos",r.id)+'</div></div>'+(r.url?'<div class="m" style="font-family:var(--mono);font-size:12px;color:var(--c-ink-500);margin-top:2px">'+esc(r.url)+'</div>':'')+cms.slice(0,3).map(function(c){return '<div class="sig" style="margin-top:6px"><span class="mono2">'+esc(c.hash)+'</span><span class="sigt">'+esc(c.msg)+'</span><span class="sigw">'+rel(c.at)+'</span></div>'}).join("")+'</div>'});
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
  if(aiConfigured()){
    if(S._aiLoading)h+='<div class="askans ai-thinking">✦ '+T("aiThinking")+'<span class="dots"><i></i><i></i><i></i></span></div>';
    else if(S._aiErr)h+='<div class="askans" style="color:var(--danger)">✦ '+esc(S._aiErr)+'<div class="ic-s" style="margin-top:6px;color:var(--c-ink-300)">'+T("aiErrHint")+'</div></div>';
    else if(S._aiAnswer)h+='<div class="askans ai-ans">'+esc(S._aiAnswer).replace(/\n/g,"<br>")+'</div>';
  }else{
    if(q)h+='<div class="askans">'+answer(q)+'</div>';
    h+='<div class="ic-s" style="margin-top:12px">✦ '+T("aiOffHint")+'</div>';
  }
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
function sheetNewCompany(){
  openSheet('<h3>'+T("newCompany")+'</h3><div class="field"><label>'+T("companyName")+'</label><input id="ncName" placeholder="'+T("companyName")+'"></div>'+
    '<div class="sheet-actions"><button class="btn btn-ghost" data-a="closeSheet">'+T("cancel")+'</button><button class="btn btn-primary" data-a="doNewCompany">'+T("create")+'</button></div>');
  setTimeout(function(){var e=document.getElementById("ncName");if(e)e.focus()},250);
}
function sheetResearchCompany(){
  openSheet('<h3>'+T("researchCompany")+'</h3><div class="field"><label>'+T("companyName")+'</label><input id="rcName" placeholder="'+T("companyName")+'"></div>'+
    '<div class="field"><label>'+T("website")+'</label><input id="rcWebsite" placeholder="https://…"></div>'+
    (aiConfigured()&&(S._aiProvider||"anthropic")!=="anthropic"?'<div class="ic-s" style="color:var(--warning);margin-bottom:8px">'+T("researchNeedsAnthropic")+'</div>':"")+
    '<div class="sheet-actions"><button class="btn btn-ghost" data-a="closeSheet">'+T("cancel")+'</button><button class="btn btn-primary" data-a="doResearchCompany">'+T("startResearch")+'</button></div>');
  setTimeout(function(){var e=document.getElementById("rcName");if(e)e.focus()},250);
}
function sheetCompanyIntake(scopedId){
  var mode=SH._coCapMode||"ai",canAI=aiConfigured(),sp=scopedId?company(scopedId):null;
  var idAttr=scopedId||"";
  var body='<h3>'+(sp?(T("updateViaCapture")+" — "+esc(sp.ov.name)):T("importCompanySnapshot"))+'</h3>'+
    '<div class="seg" style="margin-bottom:12px">'+
      '<button class="'+(mode==="ai"?"on":"")+'" data-a="coCapMode" data-m="ai" data-id="'+idAttr+'">'+T("describeAI")+'</button>'+
      '<button class="'+(mode==="json"?"on":"")+'" data-a="coCapMode" data-m="json" data-id="'+idAttr+'">'+T("pasteJson")+'</button>'+
    '</div>';
  if(mode==="ai"){
    body+='<textarea id="coCapFree" class="cap-textarea" placeholder="'+T("captureCoFreePh")+'">'+esc(SH._coCapFree||"")+'</textarea>';
    if(canAI){
      body+='<button class="btn btn-primary btn-block" data-a="doCoCapAI" data-id="'+idAttr+'" style="margin-top:10px">✦ '+T("generate")+'</button>';
    }else{
      body+='<div class="ic-s" style="margin-top:10px">'+T("aiOffHint")+'</div>';
    }
  }else{
    body+='<textarea id="coCapJson" class="cap-textarea mono" placeholder=\'{"action":"create",...}\'>'+esc(SH._coCapJson||"")+'</textarea>'+
      '<button class="btn btn-primary btn-block" data-a="doCoCapJSON" data-id="'+idAttr+'" style="margin-top:10px">'+T("importNow")+'</button>';
  }
  if(SH._coCapLoading)body+='<div class="askans ai-thinking" style="margin-top:10px">✦ '+T("aiThinking")+'<span class="dots"><i></i><i></i><i></i></span></div>';
  if(SH._coCapErr)body+='<div class="ic-s" style="color:var(--danger);margin-top:8px">'+esc(SH._coCapErr)+'</div>';
  body+='<button class="btn btn-ghost btn-block" data-a="closeSheet" style="margin-top:10px">'+T("cancel")+'</button>';
  openSheet(body);
  setTimeout(function(){var e=document.getElementById("coCapFree")||document.getElementById("coCapJson");if(e)e.focus()},250);
}
function sheetCompanyConfirmMatch(parsed,report){
  var guessId=parsed.matchCompanyId&&company(parsed.matchCompanyId)?parsed.matchCompanyId:null;
  var guessName=guessId?company(guessId).ov.name:null;
  var opts=S.companies.map(function(cc){return '<option value="'+cc.id+'">'+esc(cc.ov.name)+'</option>';}).join("");
  openSheet('<h3>'+T("confirmMatch")+'</h3>'+
    '<div class="ic-s" style="margin-bottom:10px">'+(guessName?(T("looksLike")+' "'+esc(guessName)+'"'):T("noGuess"))+'</div>'+
    '<div class="field"><label>'+T("pickCompany")+'</label><select id="ccmSelect"><option value="">'+T("newCompanyOpt")+'</option>'+opts+'</select></div>'+
    '<div class="sheet-actions"><button class="btn btn-ghost" data-a="closeSheet">'+T("cancel")+'</button><button class="btn btn-primary" data-a="doConfirmCompanyMatch">'+T("confirmImport")+'</button></div>');
  SH._pendingCompanySnapshot=parsed;SH._pendingCompanyReport=report;
  setTimeout(function(){var sel=document.getElementById("ccmSelect");if(sel&&guessId)sel.value=guessId;},50);
}
function proceedWithCompanyParsed(parsed,report,scopedId){
  if(scopedId){
    var r=applyCompanyIntake(parsed,report,scopedId);closeSheet();
    if(r&&r.ok){toast(T("updated")+": "+r.name);openCompany(r.id);}else render();
    return;
  }
  var cid=parsed.matchCompanyId,exists=cid&&company(cid);
  if(parsed.action==="update"&&exists&&parsed.matchConfidence==="exact"){
    var r2=applyCompanyIntake(parsed,report,cid);closeSheet();
    if(r2&&r2.ok){toast(T("updated")+": "+r2.name);openCompany(r2.id);}
    return;
  }
  if(parsed.action==="create"){
    var r3=applyCompanyIntake(parsed,report,null);closeSheet();
    if(r3&&r3.ok){toast(T("created")+": "+r3.name);openCompany(r3.id);}
    return;
  }
  sheetCompanyConfirmMatch(parsed,report);
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
var FILE={home:"index.html",projects:"projects.html",project:"project.html",tasks:"tasks.html",journal:"journal.html",timeline:"timeline.html",knowledge:"knowledge.html",bookmarks:"bookmarks.html",courses:"courses.html",prompts:"prompts.html",servers:"servers.html",repos:"repos.html",work:"work.html",assistant:"assistant.html",search:"search.html",settings:"settings.html",focus:"focus.html",inbox:"inbox.html",profile:"profile.html",qtoday:"index.html",qtasks:"tasks.html",companies:"companies.html",company:"company.html"};
function nav(view,id){var f=FILE[view]||"index.html";location.href=f+((view==="project"||view==="company")&&id?("?id="+encodeURIComponent(id)):"");}
function go(view){nav(view)}
function open(id){nav("project",id)}
function openCompany(id){nav("company",id)}

document.addEventListener("click",function(e){
  var el=e.target.closest("[data-a]");if(!el)return;
  var a=el.getAttribute("data-a"),id=el.getAttribute("data-id");
  switch(a){
    case"go":go(el.getAttribute("data-v"));break;
    case"back":{if(history.length>1){history.back()}else{nav("home")}break;}
    case"open":open(id);break;
    case"openCompany":openCompany(id);break;
    case"newCompanySheet":sheetNewCompany();break;
    case"doNewCompany":{var nm=val("ncName");if(!nm)return;var nc=newCompanyObj(nm);S.companies.unshift(nc);save();closeSheet();openCompany(nc.id);break;}
    case"researchCompanySheet":sheetResearchCompany();break;
    case"doResearchCompany":{var rnm=val("rcName");if(!rnm)return;var rweb=val("rcWebsite");var rc=newCompanyObj(rnm);rc.ov.website=rweb;S.companies.unshift(rc);save();closeSheet();location.href="company.html?id="+encodeURIComponent(rc.id)+"&research=1";break;}
    case"runResearch":runCompanyResearch(id);break;
    case"runStrategicAudit":runStrategicAudit(id);break;
    case"runCommercialStrategy":runCommercialStrategy(id);break;
    case"runEngagement":runEngagementPackage(id);break;
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
    case"doAsk":{var e=document.getElementById("askInput");runAsk(e?e.value:"");setTimeout(function(){var x=document.getElementById("askInput");if(x)x.focus()},0);break;}
    case"askChip":runAsk(el.getAttribute("data-q"));break;
    case"saveAiKey":{var k=val("aiKey");if(k&&k.indexOf("•")<0)S._aiKey=k;var mdl=val("aiModel");if(mdl)S._aiModel=mdl;save();render();toast(T("aiSaved"));break;}
    case"clearAiKey":{S._aiKey="";S._aiAnswer="";save();render();toast(T("aiCleared"));break;}
    case"aiProv":{S._aiProvider=el.getAttribute("data-p");S._aiModel="";save();render();break;}
    case"capture":sheetCapture();break;
    case"menu":{document.getElementById("drawerBack").classList.add("open");try{if(!(history.state&&history.state.drawer))history.pushState({drawer:1},"");}catch(e){}break;}
    case"closeDrawer":closeDrawerX();break;
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
    case"importSnapshot":SH._capMode="ai";SH._capFree="";SH._capJson="";SH._capErr="";SH._capLoading=false;sheetImportSnapshot(id||null);break;
    case"capMode":{SH._capMode=el.getAttribute("data-m");SH._capErr="";sheetImportSnapshot(el.getAttribute("data-id")||null);break;}
    case"doCaptureAI":{var sid=id||null;var ta=document.getElementById("capFree");var txt=ta?ta.value:"";SH._capFree=txt;if(!txt.trim())break;
      SH._capLoading=true;SH._capErr="";sheetImportSnapshot(sid);
      aiChat(captureSystemPrompt(sid),txt).then(function(raw){
        SH._capLoading=false;
        try{var parsed=parseSnapshotJSON(raw);proceedWithParsed(parsed,sid);}
        catch(e){SH._capErr=T("captureParseErr");sheetImportSnapshot(sid);}
      }).catch(function(e){
        SH._capLoading=false;var m=(e&&e.message)||"error";
        if(/failed to fetch|networkerror|load failed|cors/i.test(m))m=T("aiNetErr");
        SH._capErr=m;sheetImportSnapshot(sid);
      });
      break;}
    case"doCaptureJSON":{var sid=id||null;var tj=document.getElementById("capJson");var txt2=tj?tj.value:"";SH._capJson=txt2;
      try{var parsed2=parseSnapshotJSON(txt2);proceedWithParsed(parsed2,sid);}
      catch(e){SH._capErr=T("captureParseErr");sheetImportSnapshot(sid);}
      break;}
    case"doConfirmMatch":{var pend=SH._pendingSnapshot;if(!pend){closeSheet();break;}
      var chosen=val("cmSelect")||null;var rr=applySnapshot(pend,chosen);closeSheet();
      if(rr&&rr.ok){toast((chosen?T("updated"):T("created"))+": "+rr.name);open(rr.id);}else render();
      break;}
    case"coCapMode":{SH._coCapMode=el.getAttribute("data-m");SH._coCapErr="";sheetCompanyIntake(el.getAttribute("data-id")||null);break;}
    case"doCoCapAI":{var csid=id||null;var cta=document.getElementById("coCapFree");var ctxt=cta?cta.value:"";SH._coCapFree=ctxt;if(!ctxt.trim())break;
      SH._coCapLoading=true;SH._coCapErr="";sheetCompanyIntake(csid);
      aiChat(companyIntakeSystemPrompt(csid),ctxt,false,8000).then(function(raw){
        SH._coCapLoading=false;
        try{var res=parseCompanyIntakeJSON(raw);proceedWithCompanyParsed(res.parsed,res.report,csid);}
        catch(e){SH._coCapErr=T("captureParseErr");sheetCompanyIntake(csid);}
      }).catch(function(e){
        SH._coCapLoading=false;var cm=(e&&e.message)||"error";
        if(/failed to fetch|networkerror|load failed|cors/i.test(cm))cm=T("aiNetErr");
        SH._coCapErr=cm;sheetCompanyIntake(csid);
      });
      break;}
    case"doCoCapJSON":{var csid2=id||null;var ctj=document.getElementById("coCapJson");var ctxt2=ctj?ctj.value:"";SH._coCapJson=ctxt2;
      try{var res2=parseCompanyIntakeJSON(ctxt2);proceedWithCompanyParsed(res2.parsed,res2.report,csid2);}
      catch(e){SH._coCapErr=T("captureParseErr");sheetCompanyIntake(csid2);}
      break;}
    case"doConfirmCompanyMatch":{var cpend=SH._pendingCompanySnapshot;if(!cpend){closeSheet();break;}
      var cchosen=val("ccmSelect")||null;var crr=applyCompanyIntake(cpend,SH._pendingCompanyReport,cchosen);closeSheet();
      if(crr&&crr.ok){toast((cchosen?T("updated"):T("created"))+": "+crr.name);openCompany(crr.id);}else render();
      break;}
    case"resume":{var p=project(id);p.lastWorkedAt=Date.now();p.status="active";save();toast(T("resumed"));open(id);break;}
    case"focus":{var fp=project(id);if(fp){fp.lastWorkedAt=Date.now();fp.status="active";save();}nav("focus",id);break;}
    case"focusToggle":Focus.toggle();break;
    case"focusReset":Focus.reset();break;
    case"focusSetMode":{Focus.setMode(el.getAttribute("data-fm"));render();break;}
    case"gcal":{var t=S.tasks.find(function(x){return x.id===id});if(t&&t.due){try{window.open(gcalUrl(t),"_blank","noopener");}catch(e){}}break;}
    case"ics":{var t=S.tasks.find(function(x){return x.id===id});if(t&&t.due){try{var blob=new Blob([icsFor(t)],{type:"text/calendar"});var u=URL.createObjectURL(blob);var a=document.createElement("a");a.href=u;a.download=(String(t.title||"task").replace(/[^a-z0-9]+/gi,"-").slice(0,40)||"task")+".ics";a.click();}catch(e){}}break;}
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
    case"reorderMode":S._reorder=!S._reorder;S._sel=false;render();break;
    case"moveProj":{moveProject(id,parseInt(el.getAttribute("data-dir"),10));break;}
    case"newSite":sheetSite(null);break;
    case"doSite":{var o={name:val("stName")||"—",note:val("stNote"),live:val("stLive"),deploy:val("stDeploy"),repo:val("stRepo"),firebase:val("stFire")};var w=id?S.sites.find(function(x){return x.id===id}):null;if(w){w.name=o.name;w.note=o.note;w.live=o.live;w.deploy=o.deploy;w.repo=o.repo;w.firebase=o.firebase;w.updatedAt=Date.now();}else{S.sites.unshift({id:uid(),name:o.name,note:o.note,live:o.live,deploy:o.deploy,repo:o.repo,firebase:o.firebase,createdAt:Date.now(),updatedAt:Date.now()});}save();closeSheet();render();break;}
    case"editItem":{var ty=el.getAttribute("data-t");if(ty==="sites")sheetSite(id);else sheetEditItem(ty,id);break;}
    case"doEditItem":{var ty=el.getAttribute("data-t");var it=(S[ty]||[]).find(function(x){return x.id===id});if(!it){closeSheet();break;}var spec=EDIT_FIELDS[ty]||[];spec.forEach(function(f,i){var v=val("ei_"+i);if(f[0]==="total")v=parseInt(v)||0;it[f[0]]=v;});it.updatedAt=Date.now();save();closeSheet();render();break;}
    case"openCourse":sheetCourse(id);break;
    case"doCourse2":{var c=S.courses.find(function(x){return x.id===id});if(!c){closeSheet();break;}c.title=val("csTitle2")||c.title;c.provider=val("csProv2");c.current=parseInt(val("csCur"))||0;c.total=parseInt(val("csTot"))||0;c.details=val("csDet");c.url=val("csUrl2");c.progress=c.total?Math.round(c.current/c.total*100):0;c.updatedAt=Date.now();save();closeSheet();render();break;}
    case"openBk":{var bk=S.bookmarks.find(function(x){return x.id===id});if(bk&&bk.url){var u=/^https?:\/\//.test(bk.url)?bk.url:("https://"+bk.url);try{window.open(u,"_blank","noopener");}catch(e){}}break;}
    case"copy":{var tx=el.getAttribute("data-text")||"";if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(tx).then(function(){toast(T("copied"))},function(){toast(T("copied"))});}else{try{var ta=document.createElement("textarea");ta.value=tx;document.body.appendChild(ta);ta.select();document.execCommand("copy");document.body.removeChild(ta);toast(T("copied"));}catch(e){}}break;}
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
    case"sfilter":{S._sfilter=el.getAttribute("data-f");renderMain();var ni=document.getElementById("searchInput");if(ni){ni.focus();var vp=ni.value.length;try{ni.setSelectionRange(vp,vp)}catch(_){}}break;}
    case"toggleNotif":{if(!window.Notification){toast("—");break;}if(S.notifOn){S.notifOn=false;save();render();break;}Notification.requestPermission().then(function(pm){S.notifOn=(pm==="granted");save();render();toast(S.notifOn?T("notifOnMsg"):T("notifBlocked"));});break;}
    case"pwaInstall":{if(!_pwaEvt){pwaRemove();break;}var ev=_pwaEvt;_pwaEvt=null;ev.prompt();ev.userChoice.then(function(r){if(r&&r.outcome==="accepted"){pwaRemove();}else{pwaRemove();}}).catch(function(){pwaRemove();});break;}
    case"pwaIosClose":{try{sessionStorage.setItem("pwaIosDismissed","1");}catch(e){}pwaRemove();break;}
    case"lang":S.lang=el.getAttribute("data-l");save();render();break;
    case"theme":S.theme=el.getAttribute("data-t");document.querySelector('meta[name=theme-color]').setAttribute("content",S.theme==="dark"?"#0B0C0F":"#F4F5F8");save();render();break;
    case"export":{var blob=new Blob([JSON.stringify(S,null,2)],{type:"application/json"});var u=URL.createObjectURL(blob);var a=document.createElement("a");a.href=u;a.download="continuum-backup.json";a.click();break;}
    case"signIn":{var em=val("authEmail"),pw=val("authPass");if(!em||!pw)return;CxSync.signIn(em,pw).then(function(r){toast(r&&r.error?(r.error.message||"error"):T("signedIn"))}).catch(function(){toast("error")});break;}
    case"signUp":{var em=val("authEmail"),pw=val("authPass");if(!em||!pw)return;CxSync.signUp(em,pw).then(function(r){toast(r&&r.error?(r.error.message||"error"):T("checkEmail"))}).catch(function(){toast("error")});break;}
    case"signOut":{CxSync.signOut().then(function(){toast(T("signedOut"));render();});break;}
    case"clear":{if(confirm(T("clearQ"))){var _del=S._deleted||{};["projects","tasks","notes","bookmarks","courses","prompts","servers","repos","sites","decisions","inbox","companies"].forEach(function(c){(S[c]||[]).forEach(function(x){if(x&&x.id)_del[x.id]=Date.now();})});S=seed();S._deleted=_del;save();location.href="index.html";}break;}
  }
});
// status select change
document.addEventListener("change",function(e){
  var s=e.target.closest('[data-a="status"]');
  if(s){project(S.activePid).status=s.value;save();render();}
  var cs=e.target.closest('[data-a="coStatus"]');
  if(cs){var cc=company(S.activeCid);if(cc){cc.ov.status=cs.value;cc.updatedAt=Date.now();save();render();}}
  var cp=e.target.closest('[data-a="coPriority"]');
  if(cp){var cc2=company(S.activeCid);if(cc2){cc2.ov.priority=cp.value;cc2.updatedAt=Date.now();save();render();}}
  var cps=e.target.closest('[data-a="coProposalStatus"]');
  if(cps){var cc3=company(S.activeCid);if(cc3){cc3.prop.status=cps.value;cc3.updatedAt=Date.now();save();render();}}
  var cds=e.target.closest('[data-a="coDmStatus"]');
  if(cds){var cc4=company(S.activeCid);if(cc4&&cc4.dm[cds.getAttribute("data-role")]){cc4.dm[cds.getAttribute("data-role")].outStatus=cds.value;cc4.updatedAt=Date.now();save();render();}}
  var csc=e.target.closest('[data-a="coScore"]');
  if(csc){var cc5=company(S.activeCid);if(cc5){cc5.ov[csc.getAttribute("data-field")]=csc.value;cc5.updatedAt=Date.now();save();render();}}
  var css=e.target.closest('[data-a="coSigStars"]');
  if(css){var cc6=company(S.activeCid);var si=+css.getAttribute("data-idx");if(cc6&&cc6.sig&&cc6.sig[si]){cc6.sig[si].stars=css.value;cc6.updatedAt=Date.now();save();render();}}
  var cf=e.target.closest('#coStatusFilter');
  if(cf){S._cstatus=cf.value;renderMain();}
});
// search input
document.addEventListener("input",function(e){
  if(e.target.id==="searchInput"){S._q=e.target.value;var pos=e.target.selectionStart;renderMain();var ni=document.getElementById("searchInput");if(ni){ni.focus();try{ni.setSelectionRange(pos,pos)}catch(_){}}}
  if(e.target.id==="capFree")SH._capFree=e.target.value;
  if(e.target.id==="capJson")SH._capJson=e.target.value;
  if(e.target.id==="coSearch"){S._cq=e.target.value;var cpos=e.target.selectionStart;renderMain();var nc=document.getElementById("coSearch");if(nc){nc.focus();try{nc.setSelectionRange(cpos,cpos)}catch(_){}}}
  if(e.target.id==="co_ov_name"){var ct=document.getElementById("coTitle");if(ct)ct.textContent=e.target.value||"—";}
});
// companies: autosave text fields on blur (id prefix co_), no re-render so focus/tab flow stays intact
document.addEventListener("focusout",function(e){
  if(e.target && e.target.id && e.target.id.indexOf("co_")===0)coFieldSet(e.target.id,e.target.value);
});
// drawer overlay close
document.getElementById("drawerBack").addEventListener("click",function(e){if(e.target===this)closeDrawerX()});
window.addEventListener("popstate",function(){var db=document.getElementById("drawerBack");if(db)db.classList.remove("open");});
(function(){var db=document.getElementById("drawerBack");if(!db)return;var x0=null;
  db.addEventListener("touchstart",function(e){x0=(e.target.closest&&e.target.closest(".drawer"))?e.touches[0].clientX:null;},{passive:true});
  db.addEventListener("touchend",function(e){if(x0==null)return;var dx=e.changedTouches[0].clientX-x0,rtl=document.documentElement.getAttribute("dir")==="rtl";if((rtl&&dx>60)||(!rtl&&dx<-60))closeDrawerX();x0=null;},{passive:true});
})();
// enter to quick-add / ask
document.addEventListener("keydown",function(e){
  if(e.key==="Enter"&&e.target&&e.target.id==="qAdd"){e.preventDefault();var b=document.querySelector('[data-a="quickAddTask"]');if(b)b.click();}
  if(e.key==="Enter"&&e.target&&e.target.id==="askInput"){e.preventDefault();var b=document.querySelector('[data-a="doAsk"]');if(b)b.click();}
  if(e.key==="Escape"){var db=document.getElementById("drawerBack");if(db&&db.classList.contains("open"))closeDrawerX();}
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
if(window.__PAGE__==="company"){try{var _cid=new URLSearchParams(location.search).get("id");if(_cid)S.activeCid=_cid;if(_cid&&new URLSearchParams(location.search).get("research")==="1")setTimeout(function(){runCompanyResearch(_cid);},0);}catch(e){}}
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
  CxSync.onStatus(function(st){
    if(st==="error"){var nt=Date.now();if(!window.__syncErrAt||nt-window.__syncErrAt>8000){window.__syncErrAt=nt;try{toast(T("syncErr"));}catch(e){}}if(S.view==="profile")render();}
    else if(st==="online"&&S.view==="profile")render();
  });
  CxSync.init();
}
function pwaStandalone(){try{return window.matchMedia&&window.matchMedia("(display-mode: standalone)").matches||navigator.standalone===true;}catch(e){return false;}}
var _pwaEvt=null,_pwaBox=null;
function pwaRemove(){if(_pwaBox&&_pwaBox.parentNode){_pwaBox.parentNode.removeChild(_pwaBox);}_pwaBox=null;}
function pwaShowInstallBtn(){
  pwaRemove();
  var b=document.createElement("div");b.className="pwa-install-btn";b.setAttribute("data-a","pwaInstall");
  b.innerHTML='<span class="pwa-ic">⇩</span><span>'+T("installApp")+'</span>';
  document.body.appendChild(b);_pwaBox=b;
}
function pwaShowIosHint(){
  pwaRemove();
  var b=document.createElement("div");b.className="pwa-ios-hint";
  b.innerHTML='<span class="pwa-ic">⇧</span><p>'+T("installIosHint")+'</p><button data-a="pwaIosClose" aria-label="close">✕</button>';
  document.body.appendChild(b);_pwaBox=b;
}
function pwaInit(){
  if(pwaStandalone())return;
  try{
    window.addEventListener("beforeinstallprompt",function(e){
      e.preventDefault();_pwaEvt=e;pwaShowInstallBtn();
    });
    window.addEventListener("appinstalled",function(){_pwaEvt=null;pwaRemove();});
  }catch(e){}
  try{
    var isIos=/iphone|ipad|ipod/i.test(navigator.userAgent||"");
    if(isIos&&sessionStorage.getItem("pwaIosDismissed")!=="1"){pwaShowIosHint();}
  }catch(e){}
}
if("serviceWorker" in navigator){try{navigator.serviceWorker.register("sw.js").catch(function(){});}catch(e){}}
try{pwaInit();}catch(e){}
try{ if(S.notifOn&&window.Notification&&Notification.permission==="granted"){ var _due=S.tasks.filter(function(t){return !t.done&&t.due&&startOfDay(t.due)<=startOfDay(Date.now())}).length; if(_due&&S._notifiedDay!==todayKey()){ S._notifiedDay=todayKey(); save(); new Notification("Continuum",{body:(S.lang==="ar"?(_due+" مهام مستحقّة النهاردة"):(_due+" tasks due today"))}); } } }catch(e){}
})();