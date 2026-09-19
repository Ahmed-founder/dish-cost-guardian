"use client";

import {
  ArrowLeft,
  BookOpenText,
  Buildings,
  ChartLine,
  CheckCircle,
  ClipboardText,
  CookingPot,
  CreditCard,
  Package,
  Plugs,
  Scan,
  ShoppingCart,
  Sparkle,
} from "@phosphor-icons/react";
import { motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function SectionHeading({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className="mx-auto max-w-[680px] text-center"
      initial={reduced ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-paper/70 px-3 py-1 text-[12px] text-muted backdrop-blur-md">
        <span className="size-1.5 rounded-full bg-brand" />
        {eyebrow}
      </span>
      <h2 className="mt-5 text-[30px] font-light leading-[1.2] tracking-[-0.01em] text-ink sm:text-[40px]">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-[560px] text-[15px] leading-[1.9] text-muted sm:text-base">
        {desc}
      </p>
    </motion.div>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

const features = [
  {
    icon: Package,
    title: "مخزون دقيق لحظة بلحظة",
    desc: "تتبّع الكميات والوحدات وحدود إعادة الطلب لكل فرع، مع تنبيه فوري قبل نفاد أي صنف.",
  },
  {
    icon: BookOpenText,
    title: "وصفات وتكلفة كل طبق",
    desc: "اربط المكوّنات بالوصفة واحسب تكلفة الطبق وهامشه تلقائياً كلما تغيّرت أسعار الموردين.",
  },
  {
    icon: Scan,
    title: "قراءة الفواتير بالذكاء الاصطناعي",
    desc: "صوّر فاتورة المورد ويستخرج النظام الأصناف والكميات والأسعار ويحدّث المخزون.",
  },
  {
    icon: CookingPot,
    title: "مطبخ مركزي وتحويلات",
    desc: "أنتج في المطبخ المركزي ووزّع على الفروع مع متابعة كل طلب تحويل حتى الاستلام.",
  },
  {
    icon: ShoppingCart,
    title: "مشتريات وموردون",
    desc: "أنشئ أوامر الشراء، قارن أسعار الموردين، واعتمد الطلبات بصلاحيات واضحة.",
  },
  {
    icon: ClipboardText,
    title: "جرد بلا فوضى",
    desc: "جرد دوري من الجوال، مع احتساب الفروقات والهدر وتقرير مطابقة جاهز.",
  },
  {
    icon: Buildings,
    title: "تعدد الفروع",
    desc: "لوحة موحّدة لكل الفروع، وصلاحيات مختلفة لمدير الفرع والشيف والمحاسب.",
  },
  {
    icon: ChartLine,
    title: "تقارير تفهمها",
    desc: "تكلفة الطعام، الهدر، حركة الأصناف، والأرباح لكل طبق — بالعربي وبأرقام واضحة.",
  },
  {
    icon: Plugs,
    title: "يشتغل جنب الكاشير",
    desc: "اربط نظام نقاط البيع ليُخصم المخزون تلقائياً مع كل طلب يُباع.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative mx-auto max-w-[1200px] scroll-mt-24 px-5 py-20 lg:px-6 lg:py-28">
      <SectionHeading
        eyebrow="المميزات"
        title="كل ما يحتاجه مطبخك في مكان واحد"
        desc="من استلام الفاتورة حتى تكلفة الطبق النهائية — نظام واحد يربط المخزون بالوصفات بالفروع."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={(i % 3) * 0.07}>
            <div className="group h-full rounded-card border border-hairline bg-paper/85 p-6 backdrop-blur-md transition-shadow hover:shadow-panel">
              <span className="flex size-10 items-center justify-center rounded-ui bg-canvas text-ink transition-colors group-hover:text-brand">
                <f.icon size={20} weight="regular" />
              </span>
              <h3 className="mt-5 text-[17px] font-medium text-ink">{f.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.9] text-muted">{f.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const steps = [
  {
    title: "اربط فروعك وأصنافك",
    desc: "استورد قائمة الأصناف والموردين والفروع، أو ابدأ من قوالب جاهزة للمطاعم السعودية.",
  },
  {
    title: "ابنِ وصفاتك وسعّرها",
    desc: "أدخل مكوّنات كل طبق ليحسب النظام التكلفة والهامش ويحدّثها مع كل تغيّر سعر.",
  },
  {
    title: "شغّل يومك على النظام",
    desc: "فواتير تُقرأ آلياً، تحويلات بين الفروع، وخصم تلقائي للمخزون مع كل بيع.",
  },
  {
    title: "قرّر بأرقام واضحة",
    desc: "تقارير أسبوعية لتكلفة الطعام والهدر تكشف وين يروح كل ريال في المطبخ.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative scroll-mt-24 border-y border-hairline bg-paper/60 backdrop-blur-sm">
      <div className="mx-auto max-w-[1200px] px-5 py-20 lg:px-6 lg:py-28">
        <SectionHeading
          eyebrow="كيف يعمل"
          title="جاهز خلال يوم واحد"
          desc="أربع خطوات بسيطة من التسجيل حتى أول تقرير تكلفة طعام دقيق."
        />
        <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <li className="relative h-full rounded-card border border-hairline bg-paper p-6">
                <span className="absolute -top-px start-6 h-0.5 w-10 bg-brand" />
                <span className="font-latin text-[13px] font-semibold text-brand">
                  0{i + 1}
                </span>
                <h3 className="mt-4 text-[17px] font-medium text-ink">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.9] text-muted">{s.desc}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

const plans = [
  {
    name: "البداية",
    price: "٣٩٩",
    note: "فرع واحد",
    desc: "للمطاعم الصغيرة اللي تبدأ بتنظيم مخزونها.",
    items: ["مخزون ووصفات", "تكلفة الأطباق", "٣ مستخدمين", "تقارير أساسية"],
    cta: "ابدأ مجاناً",
    featured: false,
  },
  {
    name: "النمو",
    price: "٧٩٩",
    note: "حتى ٥ فروع",
    desc: "للسلاسل الناشئة مع مطبخ مركزي وتحويلات.",
    items: [
      "كل مميزات البداية",
      "قراءة الفواتير بالذكاء الاصطناعي",
      "المطبخ المركزي والتحويلات",
      "ربط نقاط البيع",
      "مستخدمون غير محدودين",
    ],
    cta: "ابدأ تجربتك المجانية",
    featured: true,
  },
  {
    name: "المؤسسات",
    price: "حسب الطلب",
    note: "فروع غير محدودة",
    desc: "للسلاسل الكبيرة باحتياجات تكامل وصلاحيات خاصة.",
    items: ["كل مميزات النمو", "تكاملات مخصصة", "صلاحيات متقدمة", "مدير حساب مخصص"],
    cta: "تواصل معنا",
    featured: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative mx-auto max-w-[1200px] scroll-mt-24 px-5 py-20 lg:px-6 lg:py-28">
      <SectionHeading
        eyebrow="الأسعار"
        title="أسعار واضحة بالريال"
        desc="جرّب ١٤ يوم مجاناً بدون بطاقة ائتمان، وغيّر باقتك متى ما احتجت."
      />
      <div className="mt-12 grid items-start gap-4 lg:grid-cols-3">
        {plans.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.07}>
            <div
              className={`h-full rounded-card border p-7 ${
                p.featured
                  ? "border-ink/15 bg-paper shadow-panel"
                  : "border-hairline bg-paper/80 backdrop-blur-md"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-[17px] font-medium text-ink">{p.name}</h3>
                {p.featured && (
                  <span className="rounded-full bg-brand px-2.5 py-0.5 text-[11px] font-bold text-paper">
                    الأكثر اختياراً
                  </span>
                )}
              </div>
              <p className="mt-2 text-[13px] text-muted">{p.desc}</p>
              <div className="mt-6 flex items-end gap-2">
                <span className="text-[34px] font-semibold leading-none text-ink">{p.price}</span>
                {p.price !== "حسب الطلب" && (
                  <span className="pb-1 text-[13px] text-muted">ر.س / شهرياً</span>
                )}
              </div>
              <p className="mt-1.5 text-[12px] text-muted">{p.note}</p>
              <Button
                variant={p.featured ? "hero" : "heroOutline"}
                size="hero"
                className="mt-6 w-full"
              >
                {p.cta}
              </Button>
              <ul className="mt-7 space-y-3 border-t border-hairline pt-6">
                {p.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[14px] text-ink">
                    <CheckCircle size={16} weight="bold" className="mt-0.5 shrink-0 text-success" />
                    <span className="leading-[1.7]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-6 flex items-center justify-center gap-2 text-[13px] text-muted">
        <CreditCard size={15} /> الأسعار لا تشمل ضريبة القيمة المضافة
      </p>
    </section>
  );
}

const faqs = [
  {
    q: "هل النظام عربي بالكامل؟",
    a: "نعم، الواجهة والتقارير والفواتير كلها بالعربية ومن اليمين إلى اليسار، مع دعم الأرقام والوحدات المحلية.",
  },
  {
    q: "هل يرتبط بنظام الكاشير الحالي؟",
    a: "نعم، نوفّر ربطاً مع أنظمة نقاط البيع الشائعة ليُخصم المخزون تلقائياً مع كل طلب مباع، وفريقنا يساعدك في الإعداد.",
  },
  {
    q: "كيف تتم قراءة فواتير الموردين؟",
    a: "ارفع صورة أو ملف الفاتورة، ويستخرج النظام الأصناف والكميات والأسعار ويعرضها للمراجعة قبل اعتمادها وتحديث المخزون.",
  },
  {
    q: "كم يستغرق الإعداد؟",
    a: "عادة يوم عمل واحد لفرع واحد بعد تجهيز قائمة الأصناف والوصفات، ونساعدك في استيراد بياناتك.",
  },
  {
    q: "هل بياناتي آمنة؟",
    a: "بياناتك معزولة لكل منشأة، مع نسخ احتياطي دوري وصلاحيات دقيقة تحدد ما يراه كل مستخدم.",
  },
  {
    q: "هل أقدر ألغي الاشتراك؟",
    a: "نعم، الاشتراك شهري وتقدر تلغيه أو تغيّر باقتك في أي وقت بدون رسوم إضافية.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="relative scroll-mt-24 border-t border-hairline bg-paper/60 backdrop-blur-sm">
      <div className="mx-auto max-w-[820px] px-5 py-20 lg:px-6 lg:py-28">
        <SectionHeading
          eyebrow="الأسئلة الشائعة"
          title="أسئلة يسألها أصحاب المطاعم"
          desc="ما لقيت جوابك؟ فريقنا جاهز يرد عليك خلال ساعات العمل."
        />
        <div className="mt-10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="border-b border-hairline"
              >
                <AccordionTrigger className="py-5 text-start text-[16px] font-medium text-ink hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[14px] leading-[1.9] text-muted">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export function CtaSection() {
  return (
    <section className="relative mx-auto max-w-[1200px] px-5 py-20 lg:px-6 lg:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[var(--radius-panel)] border border-hairline bg-ink px-6 py-16 text-center sm:px-12">
          <div className="hero-glow pointer-events-none absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-paper/15 px-3 py-1 text-[12px] text-paper/70">
              <Sparkle size={13} weight="bold" className="text-brand" />
              جاهز تبدأ؟
            </span>
            <h2 className="mx-auto mt-5 max-w-[620px] text-[30px] font-light leading-[1.25] text-paper sm:text-[40px]">
              خلّ مطبخك يشتغل بأرقام،
              <span className="block font-bold">مو بتخمين</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[520px] text-[15px] leading-[1.9] text-paper/70">
              ابدأ تجربتك المجانية ١٤ يوم، وشوف تكلفة كل طبق في مطعمك من أول أسبوع.
            </p>
            <div className="mx-auto mt-8 flex max-w-md flex-col justify-center gap-3 sm:max-w-none sm:flex-row">
              <Button variant="hero" size="hero" className="w-full border border-paper/15 sm:w-auto">
                ابدأ تجربتك المجانية <ArrowLeft size={17} />
              </Button>
              <Button variant="heroOutline" size="hero" className="w-full sm:w-auto">
                احجز عرضاً توضيحياً
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

const footerCols = [
  { title: "المنتج", items: ["المميزات", "الأسعار", "كيف يعمل", "الأسئلة الشائعة"] },
  { title: "الحلول", items: ["المطاعم المستقلة", "السلاسل", "المطبخ المركزي", "المقاهي"] },
  { title: "الشركة", items: ["من نحن", "تواصل معنا", "الشروط والأحكام", "سياسة الخصوصية"] },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-paper/70 backdrop-blur-sm">
      <div className="mx-auto max-w-[1200px] px-5 py-14 lg:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <span className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-logo bg-ink text-brand">
                <CookingPot size={17} weight="bold" />
              </span>
              <span className="font-latin text-[15px] font-semibold text-ink">[BRAND]</span>
            </span>
            <p className="mt-4 max-w-[280px] text-[13px] leading-[1.9] text-muted">
              نظام عربي لإدارة المخزون والوصفات والمطبخ المركزي والمشتريات لمطاعم الخليج.
            </p>
          </div>
          {footerCols.map((col) => (
            <div key={col.title}>
              <h3 className="text-[13px] font-medium text-ink">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[13px] text-muted transition-colors hover:text-ink">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-hairline pt-6 text-[12px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© ٢٠٢٦ [BRAND]. جميع الحقوق محفوظة.</span>
          <span className="font-latin">app.brand.sa</span>
        </div>
      </div>
    </footer>
  );
}
