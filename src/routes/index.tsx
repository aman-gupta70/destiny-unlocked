import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUp,
  Briefcase,
  Heart,
  Coins,
  TrendingUp,
  Compass,
  Sparkles,
  Star,
  CheckCircle2,
  Menu,
  X,
  MessageCircle,
  Hash,
  User,
  Target,
  Users,
  Wallet,
  Eye,
  Calendar,
  Lightbulb,
  FileText,
  Brain,
  Send,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { LeadDialogProvider, useLeadDialog, whatsappUrl } from "@/components/LeadDialog";
import heroImage from "@/assets/hero-cosmic.jpg";
import consultantImage from "@/assets/consultant.png";

export default function IndexPage() {
  return (
    <LeadDialogProvider>
      <PageShell />
    </LeadDialogProvider>
  );
}

function PageShell() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#090611] text-white">
      <CosmicBackground />
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Benefits />
        <HowItWorks />
        <About />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingActions />
      <StickyMobileCTA />
    </div>
  );
}

/* ---------- shared CTA ---------- */
function CTAButton({
  children,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const { open } = useLeadDialog();
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all";
  const styles =
    variant === "primary"
      ? "btn-glow h-12 px-6 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white hover:from-[#7C3AED] hover:to-[#C084FC]"
      : "h-12 px-6 border border-white/15 bg-white/5 text-white hover:bg-white/10 backdrop-blur-md";
  return (
    <button onClick={open} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  );
}

/* ---------- Background ---------- */
function CosmicBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#7C3AED] opacity-[0.18] blur-[120px]" />
      <div className="absolute top-[40%] right-[-200px] h-[500px] w-[500px] rounded-full bg-[#A855F7] opacity-[0.12] blur-[140px]" />
      <div className="absolute bottom-[-200px] left-[-150px] h-[500px] w-[500px] rounded-full bg-[#C084FC] opacity-[0.08] blur-[140px]" />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, white 0.5px, transparent 1px), radial-gradient(circle at 75% 60%, white 0.5px, transparent 1px), radial-gradient(circle at 45% 80%, white 0.5px, transparent 1px), radial-gradient(circle at 90% 20%, white 0.5px, transparent 1px)",
          backgroundSize: "350px 350px, 280px 280px, 420px 420px, 200px 200px",
        }}
      />
    </div>
  );
}

/* ---------- Navbar ---------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#benefits", label: "What's Inside" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#about", label: "About" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        scrolled ? "border-b border-white/5 bg-[#090611]/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#A855F7] shadow-[0_0_20px_rgba(168,85,247,0.5)]">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">Astero</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#A6A1B8] transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <CTAButton>Get Free Report</CTAButton>
        </div>

        <button
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/5 bg-[#090611]/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-[#A6A1B8] hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2">
              <CTAButton className="w-full">Get Free Report</CTAButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-[#C084FC] backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            Free Personalized Numerology Report
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Discover What Your{" "}
            <span className="text-gradient">Numbers Reveal</span> About Your Life
          </h1>

          <p className="mt-5 max-w-xl text-base text-[#A6A1B8] sm:text-lg">
            Receive a FREE personalized Numerology Report and uncover insights about your
            strengths, life path, relationships, career potential, and future opportunities.
          </p>

          <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
            {["Free Report", "Personalized Analysis", "Fast Response"].map((t) => (
              <li key={t} className="inline-flex items-center gap-1.5 text-sm text-white/80">
                <CheckCircle2 className="h-4 w-4 text-[#C084FC]" />
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton>
              Get My Free Report <ArrowRight className="h-4 w-4" />
            </CTAButton>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" /> Talk On WhatsApp
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4 border-t border-white/5 pt-6">
            <div className="flex -space-x-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-[#090611] bg-gradient-to-br from-[#7C3AED] to-[#A855F7]"
                />
              ))}
            </div>
            <div className="text-sm text-[#A6A1B8]">
              <div className="flex items-center gap-1 text-white">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-[#C084FC] text-[#C084FC]" />
                ))}
                <span className="ml-1 font-semibold">4.9/5</span>
              </div>
              <span>Trusted by 10,000+ seekers worldwide</span>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute inset-0 -z-10 rounded-full bg-[#7C3AED] opacity-30 blur-[100px]" />
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-[#120A22] shadow-[0_30px_80px_-20px_rgba(124,58,237,0.5)]">
            <img
              src={heroImage}
              alt="Cosmic numerology mandala with sacred geometry and numbers"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090611] via-transparent to-transparent" />
          </div>

          <FloatingNumberCard className="absolute -left-3 top-10 sm:-left-6" label="Life Path" value="7" />
          <FloatingNumberCard className="absolute -right-3 bottom-10 sm:-right-6" label="Destiny" value="3" />
        </div>
      </div>
    </section>
  );
}

function FloatingNumberCard({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={`glass-card flex items-center gap-3 rounded-2xl px-4 py-3 ${className}`}>
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#A855F7] text-lg font-bold">
        {value}
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-widest text-[#A6A1B8]">{label}</div>
        <div className="text-sm font-semibold">Number</div>
      </div>
    </div>
  );
}

/* ---------- Problems ---------- */
const PROBLEMS = [
  { icon: Briefcase, title: "Career Confusion", text: "Unsure of your next move or true calling." },
  { icon: Heart, title: "Relationship Challenges", text: "Struggles in love, family or partnerships." },
  { icon: Coins, title: "Financial Uncertainty", text: "Money decisions feel unclear or stuck." },
  { icon: TrendingUp, title: "Business Growth", text: "Want clarity on timing, branding and direction." },
  { icon: Compass, title: "Life Direction", text: "Searching for a deeper sense of purpose." },
  { icon: Brain, title: "Personal Development", text: "Ready to grow into your strongest self." },
];

function Problems() {
  return (
    <section className="relative py-20 sm:py-28">
      <SectionHeader
        eyebrow="The Crossroads"
        title="Are You Looking For Answers In Any Of These Areas?"
        subtitle="If any of these resonate, your numbers hold patterns worth exploring."
      />
      <div className="mx-auto mt-12 grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        {PROBLEMS.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="glass-card group relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-[#A855F7]/40"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#7C3AED] opacity-0 blur-3xl transition-opacity group-hover:opacity-20" />
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[#7C3AED]/30 to-[#A855F7]/20 ring-1 ring-white/10">
              <Icon className="h-5 w-5 text-[#C084FC]" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-[#A6A1B8]">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Benefits ---------- */
const BENEFITS = [
  { icon: Hash, title: "Life Path Number Analysis", text: "Decode the core blueprint of your life journey." },
  { icon: User, title: "Personality Insights", text: "Understand your natural style, drives and patterns." },
  { icon: Target, title: "Career Alignment", text: "Identify work that matches your strongest energy." },
  { icon: Users, title: "Relationship Patterns", text: "See compatibility, dynamics and growth zones." },
  { icon: Wallet, title: "Financial Tendencies", text: "Reveal your wealth blueprint and money rhythm." },
  { icon: Eye, title: "Hidden Strengths", text: "Surface gifts and talents you may have overlooked." },
  { icon: Calendar, title: "Future Opportunities", text: "Map upcoming cycles and high-leverage windows." },
  { icon: Lightbulb, title: "Personal Growth Guidance", text: "Practical next steps to evolve with clarity." },
];

function Benefits() {
  return (
    <section id="benefits" className="relative py-20 sm:py-28">
      <SectionHeader
        eyebrow="Inside Your Report"
        title="What Your Free Report Includes"
        subtitle="A complete, tailored analysis built around your unique numbers."
      />
      <div className="mx-auto mt-12 grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {BENEFITS.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="glass-card relative overflow-hidden rounded-2xl p-5 transition-all hover:-translate-y-1 hover:border-[#A855F7]/40"
          >
            <Icon className="h-6 w-6 text-[#C084FC]" />
            <h3 className="mt-4 text-base font-semibold leading-snug">{title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-[#A6A1B8]">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- How it works ---------- */
const STEPS = [
  { icon: Send, title: "Submit Your Details", text: "Share a few essential details about you." },
  { icon: Brain, title: "Numerology Analysis", text: "We calculate and interpret your unique chart." },
  { icon: FileText, title: "Receive Your Report", text: "Get your personalized report directly from us." },
  { icon: MessageCircle, title: "Book Consultation", text: "Go deeper with a one-on-one expert session." },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 sm:py-28">
      <SectionHeader
        eyebrow="How It Works"
        title="From Numbers To Clarity In 4 Steps"
        subtitle="A simple, refined process designed around you."
      />
      <div className="relative mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#7C3AED]/40 to-transparent lg:block" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className="glass-card relative overflow-hidden rounded-2xl p-6 text-center"
            >
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#A855F7] shadow-[0_0_30px_rgba(168,85,247,0.45)]">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <div className="mt-4 text-xs uppercase tracking-[0.2em] text-[#C084FC]">
                Step {i + 1}
              </div>
              <h3 className="mt-1 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-[#A6A1B8]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-[#7C3AED]/30 to-[#A855F7]/10 blur-2xl" />
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#120A22]">
            <img
              src={consultantImage}
              alt="Portrait of Astero numerology consultant"
              width={896}
              height={1152}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="glass-card absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl px-4 py-3">
            <ShieldCheck className="h-5 w-5 text-[#C084FC]" />
            <span className="text-sm font-medium">Certified · 12+ Years Experience</span>
          </div>
        </div>

        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-[#C084FC]">
            <Sparkles className="h-3.5 w-3.5" /> About Your Guide
          </div>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            Meet Your <span className="text-gradient">Numerology Guide</span>
          </h2>
          <p className="mt-4 text-[#A6A1B8]">
            With over a decade guiding professionals, founders and seekers, your consultant blends
            classical numerology with modern, practical insight. Every report is calculated and
            interpreted personally — never automated.
          </p>

          <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4">
            {[
              { v: "10k+", l: "Reports Delivered" },
              { v: "12+", l: "Years Experience" },
              { v: "4.9★", l: "Avg Rating" },
            ].map((s) => (
              <div key={s.l} className="glass-card rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-white sm:text-3xl">{s.v}</div>
                <div className="mt-1 text-xs text-[#A6A1B8]">{s.l}</div>
              </div>
            ))}
          </div>

          <div className="mt-7">
            <CTAButton>
              Get My Free Report <ArrowRight className="h-4 w-4" />
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
const TESTIMONIALS = [
  {
    name: "Aarav S.",
    role: "Founder, SaaS",
    text: "The report was uncannily accurate. It helped me name my company and pick a launch window that just worked.",
  },
  {
    name: "Priya M.",
    role: "Marketing Director",
    text: "I finally understood why certain career moves felt off. The clarity I got in a single session was incredible.",
  },
  {
    name: "James L.",
    role: "Investor",
    text: "Sceptic turned believer. The financial tendencies section explained patterns I'd repeated for years.",
  },
  {
    name: "Sara K.",
    role: "Designer",
    text: "Beautifully written, deeply personal. It felt like a roadmap rather than a horoscope.",
  },
  {
    name: "Daniel R.",
    role: "Student",
    text: "Helped me choose the right field of study with confidence. Worth every minute.",
  },
];

function Testimonials() {
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!api) return;
    const t = setInterval(() => api.scrollNext(), 4500);
    return () => clearInterval(t);
  }, [api]);

  return (
    <section className="relative py-20 sm:py-28">
      <SectionHeader
        eyebrow="Real Stories"
        title="Loved By Seekers Worldwide"
        subtitle="From founders to students, our reports help people move with clarity."
      />
      <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <Carousel
          opts={{ align: "start", loop: true }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {TESTIMONIALS.map((t) => (
              <CarouselItem
                key={t.name}
                className="pl-4 sm:basis-1/2 lg:basis-1/3"
              >
                <figure className="glass-card flex h-full flex-col rounded-2xl p-6">
                  <div className="flex items-center gap-1 text-[#C084FC]">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-white/90">
                    "{t.text}"
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3 border-t border-white/5 pt-4">
                    <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#7C3AED] to-[#A855F7] text-xs font-semibold">
                      {t.name
                        .split(" ")
                        .map((w) => w[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{t.name}</div>
                      <div className="text-xs text-[#A6A1B8]">{t.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const FAQS = [
  {
    q: "Is the report really free?",
    a: "Yes. Your personalized numerology report is completely free — no payment or credit card required.",
  },
  {
    q: "How is the report personalized?",
    a: "We calculate your chart using your full name and date of birth, then a real consultant interprets the results for your situation.",
  },
  {
    q: "How long does it take to receive my report?",
    a: "Most reports are delivered within 24–48 hours of submission.",
  },
  {
    q: "Is my information kept private?",
    a: "Absolutely. Your details are used only to prepare your report and are never shared or sold.",
  },
  {
    q: "Do I need to know anything about numerology?",
    a: "Not at all. The report is written in clear language with practical guidance you can apply immediately.",
  },
  {
    q: "Can I get a deeper consultation later?",
    a: "Yes. After your free report, you can choose to book a one-on-one consultation for in-depth guidance.",
  },
];

function FAQ() {
  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <SectionHeader
        eyebrow="FAQ"
        title="Questions, Answered"
        subtitle="Everything you need to know before claiming your free report."
      />
      <div className="mx-auto mt-10 max-w-3xl px-4 sm:px-6 lg:px-8">
        <Accordion type="single" collapsible className="space-y-3">
          {FAQS.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="glass-card rounded-2xl border-white/5 px-5"
            >
              <AccordionTrigger className="py-5 text-left text-base font-medium hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm text-[#A6A1B8]">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
function FinalCTA() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="glass-card relative overflow-hidden rounded-3xl p-8 text-center sm:p-14">
          <div className="absolute -top-32 left-1/2 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#7C3AED] opacity-30 blur-3xl" />
          <div className="absolute bottom-0 right-0 -z-0 h-48 w-48 rounded-full bg-[#A855F7] opacity-20 blur-3xl" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-[#C084FC]">
              <Sparkles className="h-3.5 w-3.5" /> Begin Your Journey
            </div>
            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              Your Numbers Tell A <span className="text-gradient">Story</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[#A6A1B8]">
              Discover the hidden insights behind your birth date and unlock greater clarity about
              your future.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CTAButton>
                Get My Free Report <ArrowRight className="h-4 w-4" />
              </CTAButton>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4" /> Chat On WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#A855F7] shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">Astero</span>
            </div>
            <p className="mt-4 text-sm text-[#A6A1B8]">
              Unlock your destiny through the ancient science of numerology. Get personalized insights and guidance for a better life.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-[#A6A1B8]">
              <li><a href="#top" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#benefits" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Testimonials</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-[#A6A1B8]">
              <li><a href="#" className="hover:text-white transition-colors">Free Numerology Report</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Name Correction</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Business Numerology</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Personal Consultation</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-sm text-[#A6A1B8]">
                <Mail className="h-4 w-4 text-[#C084FC]" />
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gupta.aman7079@gmail.com&su=Numerology%20Consultation&body=Hi%2C%20I%20would%20like%20to%20get%20a%20free%20numerology%20report" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">gupta.aman7079@gmail.com</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-[#A6A1B8]">
                <Phone className="h-4 w-4 text-[#C084FC]" />
                <a href="tel:+917079372324" className="hover:text-white transition-colors">+91 7079372324</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-[#A6A1B8]">
                <MapPin className="h-4 w-4 text-[#C084FC]" />
                <span>Mumbai, India</span>
              </li>
            </ul>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="h-4 w-4 text-white" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="h-4 w-4 text-white" />
              </a>
              <a href="https://www.linkedin.com/in/aman-kumar-gupta-42b995290/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="h-4 w-4 text-white" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/5 text-center text-xs text-[#A6A1B8]">
          © {new Date().getFullYear()} Astero Numerology. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* ---------- Floating + Sticky ---------- */
function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 600);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <>
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-24 right-4 z-30 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.5)] transition-transform hover:scale-105 sm:bottom-6"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-24 left-4 z-30 hidden h-11 w-11 place-items-center rounded-full border border-white/10 bg-[#120A22]/80 text-white backdrop-blur-md transition-all hover:border-[#A855F7]/50 sm:bottom-6 sm:grid"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
}

function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-white/5 bg-[#090611]/95 p-3 backdrop-blur-xl sm:hidden">
      <CTAButton className="w-full">
        Get My Free Report <ArrowRight className="h-4 w-4" />
      </CTAButton>
    </div>
  );
}

/* ---------- Section Header ---------- */
function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-[#C084FC]">
        {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-[#A6A1B8]">{subtitle}</p> : null}
    </div>
  );
}
