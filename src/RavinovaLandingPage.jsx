import React from "react";
import { motion } from "framer-motion";
import {
  Play,
  Music2,
  Radio,
  CalendarDays,
  Headphones,
  ArrowUpRight,
  Sparkles,
  Mail,
  Code2,
  MonitorSmartphone,
  ServerCog,
} from "lucide-react";
const Button = ({ children, className = "", variant = "default", size, ...props }) => {
  const base = "inline-flex items-center justify-center transition disabled:pointer-events-none disabled:opacity-50";
  const iconSize = size === "icon" ? "h-11 w-11" : "";
  return (
    <button className={`${base} ${iconSize} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Card = ({ children, className = "", ...props }) => (
  <div className={className} {...props}>{children}</div>
);

const CardContent = ({ children, className = "", ...props }) => (
  <div className={className} {...props}>{children}</div>
);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const releases = [
  {
    title: "Pearl Harmonics",
    type: "Signature Identity",
    mood: "Futuristic / Emotional / Cinematic EDM",
  },
  {
    title: "Nova Signal 01",
    type: "Concept Release",
    mood: "Progressive / Festival Energy",
  },
  {
    title: "Afterglow Protocol",
    type: "Visual Track",
    mood: "Melodic / Dark Electronic",
  },
];

const services = [
  {
    icon: Music2,
    title: "Music Releases",
    text: "Original tracks, remixes, concept releases, and cinematic electronic productions under the RAVINOVA identity.",
  },
  {
    icon: Headphones,
    title: "Pearl Harmonics",
    text: "Your signature sonic world: emotional harmonies, futuristic textures, and sound design built around your artist DNA.",
  },
  {
    icon: Radio,
    title: "EPK & Booking",
    text: "A clean professional hub for labels, promoters, collaborators, press, and event bookings.",
  },
];

const universe = [
  "Nova Signals",
  "Pearl Harmonics",
  "Visual Worlds",
  "Creative Tech",
];

const techStack = [
  "React",
  "Tailwind CSS",
  "Node.js",
  "APIs",
  "UI/UX",
  "Full-Stack Web",
];

export default function RavinovaLandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-purple-700/30 blur-[130px]" />
        <div className="absolute right-[-120px] top-[220px] h-[380px] w-[380px] rounded-full bg-cyan-500/20 blur-[110px]" />
        <div className="absolute bottom-[-120px] left-[-120px] h-[420px] w-[420px] rounded-full bg-red-500/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
      </div>

      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="#home" className="group flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/15 bg-white/10 shadow-2xl shadow-purple-500/20 backdrop-blur">
            <Sparkles className="h-5 w-5 text-cyan-300" />
          </div>
          <div>
            <p className="text-lg font-black tracking-[0.28em]">RAVINOVA</p>
            <p className="text-xs uppercase tracking-[0.25em] text-white/45">Artist Portfolio</p>
          </div>
        </a>

        <div className="hidden items-center gap-8 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white/70 backdrop-blur md:flex">
          <a href="#music" className="transition hover:text-white">Music</a>
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#portfolio" className="transition hover:text-white">Portfolio</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </div>

        <Button className="hidden rounded-full bg-white px-6 font-semibold text-black hover:bg-cyan-200 md:inline-flex">
          Book Now
        </Button>
      </nav>

      <section id="home" className="relative z-10 mx-auto grid min-h-[82vh] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.12fr_0.88fr]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
            Electronic Artist • Producer • Sound Designer
          </div>

          <h1 className="text-6xl font-black leading-[0.9] tracking-[-0.08em] sm:text-7xl lg:text-8xl">
            SOUND FROM
            <span className="block bg-gradient-to-r from-cyan-200 via-purple-300 to-red-300 bg-clip-text text-transparent">
              ANOTHER DIMENSION.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">
            RAVINOVA creates futuristic electronic music, cinematic textures, and high-energy soundscapes built for stages, visuals, brands, and emotional storytelling.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button className="h-14 rounded-full bg-cyan-300 px-8 text-base font-bold text-black hover:bg-cyan-200">
              <Play className="mr-2 h-5 w-5 fill-black" />
              Listen Now
            </Button>
            <Button variant="outline" className="h-14 rounded-full border-white/20 bg-white/5 px-8 text-base text-white hover:bg-white hover:text-black">
              View Portfolio
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 text-center">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <p className="text-2xl font-black">EDM</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-white/45">Core Sound</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <p className="text-2xl font-black">Cinematic</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-white/45">Mood</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <p className="text-2xl font-black">SL</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-white/45">Origin</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[480px]"
        >
          <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-cyan-400/40 via-purple-500/40 to-red-400/40 blur-3xl" />
          <div className="relative overflow-hidden rounded-[3rem] border border-white/15 bg-black/50 p-5 shadow-2xl backdrop-blur-xl">
            <div className="aspect-[4/5] overflow-hidden rounded-[2.4rem] bg-[radial-gradient(circle_at_50%_18%,rgba(103,232,249,0.35),transparent_28%),radial-gradient(circle_at_24%_70%,rgba(168,85,247,0.35),transparent_24%),linear-gradient(145deg,#151515,#020202)]">
              <div className="flex h-full flex-col justify-between p-8">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/70">
                    Live Signal
                  </span>
                  <span className="h-3 w-3 rounded-full bg-red-400 shadow-[0_0_22px_rgba(248,113,113,0.95)]" />
                </div>

                <div className="space-y-3">
                  {[50, 78, 36, 92, 62, 84, 44, 70, 58, 96, 42, 74].map((height, index) => (
                    <motion.div
                      key={index}
                      initial={{ width: "20%" }}
                      animate={{ width: `${height}%` }}
                      transition={{ duration: 1.4, repeat: Infinity, repeatType: "mirror", delay: index * 0.05 }}
                      className="h-2 rounded-full bg-gradient-to-r from-cyan-300 via-purple-300 to-red-300"
                    />
                  ))}
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-white/45">Now Playing</p>
                  <h2 className="mt-3 text-4xl font-black tracking-[-0.08em]">RAVINOVA</h2>
                  <p className="mt-2 text-white/55">Frequency: Future / Emotion / Energy</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="music" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">Latest Signals</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.06em] md:text-6xl">Music & Releases</h2>
          </div>
          <p className="max-w-xl text-white/55">Replace these cards with your real Spotify, SoundCloud, YouTube, or Audiomack links when your releases are ready.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {releases.map((item, index) => (
            <Card key={item.title} className="group overflow-hidden rounded-[2rem] border-white/10 bg-white/[0.04] text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.07]">
              <CardContent className="p-0">
                <div className="h-56 bg-[radial-gradient(circle_at_30%_20%,rgba(103,232,249,0.35),transparent_28%),radial-gradient(circle_at_75%_65%,rgba(168,85,247,0.35),transparent_30%),linear-gradient(135deg,#151515,#050505)] p-6">
                  <div className="flex h-full flex-col justify-between">
                    <span className="w-fit rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-widest text-white/60">{item.type}</span>
                    <div className="flex items-end justify-between">
                      <span className="text-7xl font-black text-white/10">0{index + 1}</span>
                      <Button size="icon" className="rounded-full bg-white text-black hover:bg-cyan-200">
                        <Play className="h-5 w-5 fill-black" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black tracking-[-0.04em]">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/55">{item.mood}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="about" className="relative z-10 border-y border-white/10 bg-white/[0.03] py-24 backdrop-blur">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-purple-300">RAVINOVA Universe</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.06em] md:text-6xl">A world around sound, visuals, and identity.</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-white/65">
            <p>
              RAVINOVA is not just a portfolio. It is an artist universe built around futuristic electronic music, Pearl Harmonics, cinematic visuals, and live-performance energy.
            </p>
            <p>
              The direction combines a strong fan-world concept with a clean professional DJ/producer platform for releases, bookings, EPK, videos, and future merch.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-2">
              {universe.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white/70">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-5 lg:grid-cols-4">
          <div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-7 lg:col-span-2">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-200">Featured Release</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.06em] md:text-5xl">Pearl Harmonics</h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/60">
              Use this section for your newest track, upcoming release, music video, or main identity statement. This should become the first serious music highlight on the site.
            </p>
            <Button className="mt-7 h-12 rounded-full bg-white px-6 font-bold text-black hover:bg-cyan-200">
              Play Featured Track
              <Play className="ml-2 h-4 w-4 fill-black" />
            </Button>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-purple-200">For Fans</p>
            <h3 className="mt-4 text-2xl font-black">Join the Signal</h3>
            <p className="mt-4 text-sm leading-6 text-white/55">Future fan signup, exclusive drops, behind-the-scenes, and early release access.</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-200">For Industry</p>
            <h3 className="mt-4 text-2xl font-black">Book / EPK</h3>
            <p className="mt-4 text-sm leading-6 text-white/55">Professional contact point for labels, events, brands, media, and collaborations.</p>
          </div>
        </div>
      </section>

      <section id="tech" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">Creative Technology</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.06em] md:text-6xl">Full‑Stack Developer</h2>
          </div>
          <p className="max-w-xl text-white/55">
            Beyond music, RAVINOVA also builds digital products, artist websites, creative platforms, and modern web experiences.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur">
            <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-cyan-300/10">
              <Code2 className="h-7 w-7 text-cyan-200" />
            </div>
            <h3 className="text-3xl font-black tracking-[-0.05em]">Music meets software.</h3>
            <p className="mt-4 leading-7 text-white/55">
              This section presents your technical side without breaking the artist brand: full-stack development, frontend design, backend logic, APIs, and digital systems for creative businesses.
            </p>
            <Button className="mt-7 h-12 rounded-full bg-white px-6 font-bold text-black hover:bg-cyan-200">
              View Developer Work
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-black/30 p-7">
              <MonitorSmartphone className="h-8 w-8 text-purple-200" />
              <h4 className="mt-5 text-xl font-black">Frontend Experiences</h4>
              <p className="mt-3 text-sm leading-6 text-white/55">Responsive websites, landing pages, interfaces, artist portfolios, and brand-focused UI systems.</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-black/30 p-7">
              <ServerCog className="h-8 w-8 text-red-200" />
              <h4 className="mt-5 text-xl font-black">Backend Systems</h4>
              <p className="mt-3 text-sm leading-6 text-white/55">APIs, dashboards, database-connected apps, booking systems, admin panels, and automation flows.</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-black/30 p-7 md:col-span-2">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/45">Current Stack</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {techStack.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/70">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-300">Creative Work</p>
          <h2 className="mt-3 text-4xl font-black tracking-[-0.06em] md:text-6xl">Portfolio Direction</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="rounded-[2rem] border-white/10 bg-white/[0.04] text-white backdrop-blur">
                <CardContent className="p-7">
                  <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-white/10">
                    <Icon className="h-7 w-7 text-cyan-200" />
                  </div>
                  <h3 className="text-2xl font-black tracking-[-0.04em]">{service.title}</h3>
                  <p className="mt-4 leading-7 text-white/55">{service.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
        <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-cyan-300/15 via-purple-400/15 to-red-400/15 p-8 backdrop-blur md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-200">Next Move</p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.06em] md:text-6xl">Launch the RAVINOVA universe.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
                Use this page as your official artist landing page, then expand into music releases, EPK, booking, gallery, events, and merch.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Button className="h-14 rounded-full bg-white px-8 font-bold text-black hover:bg-cyan-200">
                <Mail className="mr-2 h-5 w-5" />
                Contact
              </Button>
              <Button variant="outline" className="h-14 rounded-full border-white/20 bg-black/20 px-8 text-white hover:bg-white hover:text-black">
                Download EPK
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="relative z-10 border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-xl font-black tracking-[0.25em]">RAVINOVA</p>
            <p className="mt-2 text-sm text-white/45">© 2026 RAVINOVA. All rights reserved.</p>
          </div>
          <div className="flex gap-3">
            <Button size="icon" variant="outline" className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white hover:text-black">
              <span className="text-xs font-black">IG</span>
            </Button>
            <Button size="icon" variant="outline" className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white hover:text-black">
              <span className="text-xs font-black">YT</span>
            </Button>
            <Button size="icon" variant="outline" className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white hover:text-black">
              <CalendarDays className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </footer>
    </main>
  );
}
