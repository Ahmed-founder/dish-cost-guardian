"use client";

import { useEffect, useState } from "react";
import {
  ArrowLeft,
  BookOpenText,
  CaretDown,
  ChartLine,
  Check,
  CheckCircle,
  ClipboardText,
  CookingPot,
  House,
  List,
  Package,
  PlayCircle,
  ShoppingCart,
  Sparkle,
  X,
} from "@phosphor-icons/react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  CtaSection,
  FaqSection,
  FeaturesSection,
  HowItWorksSection,
  PricingSection,
  SiteFooter,
} from "@/components/landing-sections";

const links = [
  { label: "المميزات", href: "#features" },
  { label: "الأسعار", href: "#pricing" },
  { label: "كيف يعمل", href: "#how-it-works" },
  { label: "الأسئلة الشائعة", href: "#faq" },
];
const headline = [
  { text: "اعرف وين يروح كل ريال", weight: "font-light" },
  { text: "في مطبخـــك", weight: "font-bold" },
];

function Brand() {
  return (
    <a href="#" className="flex shrink-0 items-center gap-2" aria-label="[BRAND] الرئيسية">
      <span className="flex size-7 items-center justify-center rounded-logo bg-ink text-brand">
        <CookingPot size={17} weight="bold" />
      </span>
      <span className="font-latin text-[15px] font-semibold text-ink">[BRAND]</span>
    </a>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-hairline bg-paper/70 backdrop-blur-xl" : "border-b border-transparent"}`}>
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 lg:px-6" aria-label="التنقل الرئيسي">
        <Brand />
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-muted transition-colors hover:text-ink">{link.label}</a>
          ))}
        </div>
        <div className="hidden items-center gap-5 md:flex">
          <a href="#" className="text-sm text-ink transition-opacity hover:opacity-60">تسجيل الدخول</a>
          <Button variant="nav" size="sm" className="px-4">ابدأ مجاناً</Button>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="فتح القائمة" onClick={() => setOpen(true)}>
          <List size={22} weight="bold" />
        </Button>
      </nav>
      {open && (
        <div className="fixed inset-0 z-[60] md:hidden" role="dialog" aria-modal="true" aria-label="قائمة التنقل">
          <button className="absolute inset-0 bg-ink/20 backdrop-blur-sm" onClick={() => setOpen(false)} aria-label="إغلاق القائمة" />
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-y-0 start-0 w-[82%] max-w-sm bg-paper p-6 shadow-panel">
            <div className="flex items-center justify-between"><Brand /><Button variant="ghost" size="icon" aria-label="إغلاق القائمة" onClick={() => setOpen(false)}><X size={20} /></Button></div>
            <div className="mt-12 flex flex-col divide-y divide-hairline">
              {links.map((link) => <a key={link.href} href={link.href} className="py-4 text-base text-ink" onClick={() => setOpen(false)}>{link.label}</a>)}
            </div>
            <div className="mt-8 grid gap-3"><Button variant="hero" size="hero">ابدأ مجاناً</Button><Button variant="heroOutline" size="hero">تسجيل الدخول</Button></div>
          </motion.div>
        </div>
      )}
    </header>
  );
}

const navItems = [
  ["الرئيسية", House], ["المخزون", Package], ["الوصفات", BookOpenText],
  ["المشتريات", ShoppingCart], ["المطبخ المركزي", CookingPot],
  ["الجرد", ClipboardText], ["التقارير", ChartLine],
] as const;

const stats = [
  ["قيمة المخزون", "48,230 ر.س"], ["تكلفة الطعام", "28.4%"],
  ["الهدر هذا الأسبوع", "1,120 ر.س"], ["طلبات توريد مفتوحة", "6"],
];

function DashboardSidebar() {
  return (
    <aside className="hidden w-52 shrink-0 border-e border-hairline bg-paper p-4 md:block">
      <button className="flex w-full items-center justify-between rounded-ui border border-hairline px-3 py-2.5 text-[13px] font-medium text-ink">
        فرع الرياض <CaretDown size={13} />
      </button>
      <div className="mt-5 space-y-1">
        {navItems.map(([label, Icon], index) => (
          <div key={label} className={`relative flex items-center gap-2.5 rounded-ui px-3 py-2 text-[13px] ${index === 0 ? "bg-canvas font-medium text-ink" : "text-muted"}`}>
            {index === 0 && <span className="absolute inset-y-2 start-0 w-0.5 rounded-full bg-brand" />}
            <Icon size={16} weight={index === 0 ? "bold" : "regular"} />{label}
          </div>
        ))}
      </div>
    </aside>
  );
}

function AreaChart() {
  const reduced = useReducedMotion();
  return (
    <div className="min-w-0 rounded-ui border border-hairline bg-paper p-4 md:col-span-3">
      <div className="mb-4 flex items-center justify-between"><h3 className="text-[13px] font-medium text-ink">تكلفة الطعام مقابل المبيعات</h3><span className="font-latin text-[10px] text-muted">SAR</span></div>
      <svg viewBox="0 0 620 180" className="h-[150px] w-full overflow-visible" role="img" aria-label="رسم تكلفة الطعام خلال سبعة أيام">
        <defs><linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="var(--brand)" stopOpacity=".22"/><stop offset="100%" stopColor="var(--brand)" stopOpacity="0"/></linearGradient></defs>
        {[25, 65, 105, 145].map((y) => <line key={y} x1="18" x2="603" y1={y} y2={y} stroke="var(--hairline)" strokeWidth="1" />)}
        <path d="M18 128 C75 116,92 135,126 104 S191 87,221 99 S278 68,320 77 S371 101,410 64 S477 53,512 70 S570 42,603 48" fill="none" stroke="var(--muted)" strokeOpacity=".45" strokeWidth="1.5" strokeDasharray="5 6" />
        <motion.path d="M18 142 C58 139,90 119,126 125 S184 97,221 110 S280 73,320 89 S377 81,410 56 S468 75,512 49 S570 37,603 26 L603 160 L18 160 Z" fill="url(#chartFill)" initial={reduced ? false : { opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: .8 }} />
        <motion.path d="M18 142 C58 139,90 119,126 125 S184 97,221 110 S280 73,320 89 S377 81,410 56 S468 75,512 49 S570 37,603 26" fill="none" stroke="var(--brand)" strokeWidth="2.5" strokeLinecap="round" initial={reduced ? false : { pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }} />
        {[[18,"السبت"],[115,"الأحد"],[212,"الإثنين"],[309,"الثلاثاء"],[406,"الأربعاء"],[503,"الخميس"],[585,"الجمعة"]].map(([x, day]) => <text key={day} x={x} y="177" textAnchor="middle" fontSize="10" fill="var(--muted)" fontFamily="IBM Plex Sans Arabic">{day}</text>)}
      </svg>
    </div>
  );
}

function StockTable() {
  const rows = [["صدر دجاج","12 كجم","منخفض",false],["طماطم","30 كجم","متوفر",true],["خبز صامولي","140 حبة","متوفر",true],["زيت قلي","8 لتر","منخفض",false]] as const;
  return (
    <div className="min-w-0 rounded-ui border border-hairline bg-paper p-4 md:col-span-2">
      <h3 className="mb-3 text-[13px] font-medium text-ink">أصناف تحت الحد الأدنى</h3>
      <div className="grid grid-cols-[1.3fr_.8fr_.8fr] border-b border-hairline pb-2 text-[10px] text-muted"><span>الصنف</span><span>الكمية</span><span>الحالة</span></div>
      {rows.map(([name, amount, status, okay]) => <div key={name} className="grid grid-cols-[1.3fr_.8fr_.8fr] items-center border-b border-hairline py-2.5 text-[11px] last:border-0"><span className="truncate text-ink">{name}</span><span className="font-latin text-muted">{amount}</span><span><span className={`inline-flex rounded-ui px-1.5 py-1 text-[10px] ${okay ? "bg-success-soft text-success" : "bg-danger-soft text-danger"}`}>{status}</span></span></div>)}
    </div>
  );
}

function Dashboard() {
  return (
    <div className="flex h-full min-h-[510px] bg-canvas text-start">
      <DashboardSidebar />
      <div className="min-w-0 flex-1 p-3 sm:p-5">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-base font-bold text-ink">لوحة التحكم</h2>
          <div className="flex w-fit rounded-ui bg-surface p-1 text-[10px] text-muted sm:text-[11px]"><span className="rounded-ui border border-hairline bg-paper px-2.5 py-1 text-ink">اليوم</span><span className="px-2.5 py-1">هذا الأسبوع</span><span className="px-2.5 py-1">الشهر</span></div>
        </div>
        <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
          {stats.map(([label, value], index) => <div key={label} className="min-w-0 rounded-ui border border-hairline bg-paper p-3"><div className="truncate text-[10px] text-muted sm:text-xs">{label}</div><div className="mt-2 flex flex-wrap items-center gap-1.5 font-latin text-[15px] font-medium text-ink sm:text-[20px]"><span>{value}</span>{index === 1 && <span className="rounded-ui bg-success-soft px-1.5 py-0.5 text-[9px] text-success">↓ 2.1%</span>}</div></div>)}
        </div>
        <div className="mt-3 grid gap-3 md:grid-cols-5"><AreaChart /><StockTable /></div>
      </div>
    </div>
  );
}

function InvoiceCard() {
  const reduced = useReducedMotion();
  return (
    <motion.div animate={reduced ? false : { y: [0, -6, 0, 6, 0] }} transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut" }} className="glass-card relative w-full p-4 lg:absolute lg:-start-10 lg:top-16 lg:w-[258px]">
      <div className="flex items-center gap-2 text-xs font-medium text-ink"><Sparkle size={16} className="text-brand" weight="bold" />قراءة فاتورة المورد<span className="rounded-ui bg-brand-soft px-1.5 py-0.5 font-latin text-[9px] font-bold text-brand">AI</span></div>
      <div className="relative mt-3 h-24 overflow-hidden rounded-ui border border-hairline bg-paper p-3">
        <div className="space-y-2">{["w-16","w-full","w-4/5","w-2/3","w-full"].map((w,i) => <div key={i} className={`h-1.5 rounded-full bg-surface ${w}`} />)}</div>
        <motion.span initial={reduced ? false : { top: "8%" }} animate={reduced ? { top: "55%" } : { top: ["8%","88%","8%"] }} transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }} className="scan-line absolute inset-x-2 h-px bg-brand" />
      </div>
      <div className="mt-3 space-y-2 text-[10px] text-muted">
        {["المورد: مؤسسة الوادي للدواجن","الإجمالي: 3,450.00 ر.س","تمت قراءة 7 أصناف"].map((item,i) => <motion.div key={item} initial={reduced ? false : { opacity: 0, x: 8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: .5 + i * .25 }} className="flex items-center gap-1.5"><Check size={11} className="text-success" weight="bold" />{item}</motion.div>)}
      </div>
    </motion.div>
  );
}

function AutomationToast() {
  const reduced = useReducedMotion();
  return <motion.div initial={reduced ? false : { opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 1, duration: .55 }} animate={reduced ? false : { y: [0, 5, 0, -5, 0] }} className="glass-card flex w-full items-start gap-3 p-4 lg:absolute lg:-end-7 lg:bottom-12 lg:w-[272px]"><CheckCircle size={21} className="mt-0.5 shrink-0 text-success" weight="bold"/><div><p className="text-[12px] leading-5 text-ink">تم خصم مكونات 42 طبق من المخزون تلقائياً</p><p className="mt-1 font-latin text-[10px] text-muted">قبل ثانيتين</p></div></motion.div>;
}

function SupplyCard() {
  const reduced = useReducedMotion();
  return <motion.div animate={reduced ? false : { y: [0, 6, 0, -6, 0] }} transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }} className="glass-card absolute -end-8 top-[45%] hidden w-[225px] p-3 lg:block"><div className="flex items-center justify-between gap-2 text-[10px] text-ink"><span>المطبخ المركزي</span><span className="relative h-px flex-1 border-t border-dashed border-muted/40"><motion.i animate={reduced ? false : { insetInlineStart: ["0%","90%"] }} transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }} className="absolute -top-1 size-2 rounded-full bg-brand shadow-brand" /></span><span>فرع جدة</span></div><span className="mt-2 inline-flex rounded-ui bg-brand-soft px-1.5 py-1 text-[9px] text-brand">قيد التجهيز</span></motion.div>;
}

function CostCard() {
  const reduced = useReducedMotion();
  return <motion.div animate={reduced ? false : { y: [0, -5, 0, 5, 0] }} transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }} className="glass-card absolute -start-5 bottom-8 hidden w-[190px] p-3 lg:block"><p className="text-[10px] text-muted">تكلفة طبق · برجر كلاسيك</p><p className="mt-1.5 font-latin text-[13px] font-medium text-ink">9.80 ر.س · <span className="text-success">هامش 67%</span></p></motion.div>;
}

function ProductMockup() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const rotateX = useTransform(scrollYProgress, [0, .22], reduced ? [0, 0] : [18, 0]);
  const scale = useTransform(scrollYProgress, [0, .22], reduced ? [1, 1] : [.94, 1]);
  const opacity = useTransform(scrollYProgress, [0, .16], reduced ? [1, 1] : [.9, 1]);
  return (
    <div className="relative mx-auto mt-16 w-full max-w-[1120px] px-1 sm:px-5 lg:px-0" style={{ perspective: "1600px" }}>
      <motion.div style={{ rotateX, scale, opacity, transformOrigin: "top center" }} className="browser-frame overflow-hidden border border-hairline bg-paper">
        <div className="relative flex h-10 items-center justify-center border-b border-hairline bg-paper">
          <div className="absolute start-3 flex gap-1.5" dir="ltr"><span className="size-2.5 rounded-full bg-dot"/><span className="size-2.5 rounded-full bg-dot"/><span className="size-2.5 rounded-full bg-dot"/></div>
          <div className="rounded-full border border-hairline bg-canvas px-5 py-1 font-mono text-[10px] text-muted sm:text-xs">app.[brand].sa</div>
        </div>
        <Dashboard />
      </motion.div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:mt-0 lg:block"><InvoiceCard /><AutomationToast /></div>
      <SupplyCard /><CostCard />
    </div>
  );
}

function HeroWords() {
  const reduced = useReducedMotion();
  let count = 0;
  return <h1 className="text-balance text-[38px] leading-[1.15] tracking-[-0.01em] text-ink sm:text-5xl lg:text-[64px]">{headline.map((line) => <span key={line.text} className={`block ${line.weight}`}>{line.text.split(" ").map((word) => { const delay = count++ * .07; return <motion.span key={`${word}-${delay}`} className="inline-block" initial={reduced ? false : { opacity: .12, filter: "blur(8px)", y: 10 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} transition={{ delay: .12 + delay, duration: .7, ease: [0.22, 1, 0.36, 1] }}>{word}&nbsp;</motion.span>; })}</span>)}</h1>;
}

export function RestaurantHero() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-page-gradient">
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <Navbar />
      <section className="relative mx-auto px-4 pb-24 pt-[120px] sm:px-6 lg:pb-32">
        <div className="hero-glow pointer-events-none absolute start-1/2 top-[520px] -translate-x-1/2" />
        <div className="relative mx-auto max-w-[880px] text-center">
          <motion.a href="#" whileHover={{ y: -2 }} className="inline-flex max-w-full items-center gap-2 rounded-full border border-hairline bg-paper/70 px-3 py-1.5 text-[12px] text-ink backdrop-blur-md sm:text-[13px]"><span className="rounded-full bg-brand px-2 py-0.5 text-[10px] font-bold text-paper">جديد</span><span className="truncate">اقرأ فواتير الموردين بالذكاء الاصطناعي</span><ArrowLeft size={14} /></motion.a>
          <div className="mt-7"><HeroWords /></div>
          <p className="mx-auto mt-6 max-w-[620px] text-[16px] leading-[1.8] text-muted sm:text-lg">نظام عربي لإدارة المخزون والوصفات والمطبخ المركزي والمشتريات لكل فروعك — يحسب تكلفة كل طبق، ويقرأ فواتير الموردين بالذكاء الاصطناعي، ويشتغل جنب نظام الكاشير حقك.</p>
          <div className="mx-auto mt-8 flex max-w-md flex-col justify-center gap-3 sm:max-w-none sm:flex-row">
            <Button variant="hero" size="hero" className="w-full sm:w-auto">ابدأ تجربتك المجانية <ArrowLeft size={17} /></Button>
            <Button variant="heroOutline" size="hero" className="w-full sm:w-auto">احجز عرضاً توضيحياً <PlayCircle size={18} /></Button>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[12px] text-muted sm:text-[13px]">{["تجربة مجانية ١٤ يوم","بدون بطاقة ائتمان","إعداد خلال يوم واحد","عربي بالكامل"].map(item => <span key={item} className="flex items-center gap-1.5"><CheckCircle size={14} className="text-success" weight="bold" />{item}</span>)}</div>
        </div>
        <ProductMockup />
      </section>
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
      <SiteFooter />
    </main>
  );
}