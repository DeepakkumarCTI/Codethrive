import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Plus, Minus, Code2 } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import aboutHero from "../assets/web.jpg";
import team2 from "../assets/team-2.jpg";
import team1 from "../assets/team-1.jpg";
import team3 from "../assets/team-3.jpg";

// =====================================================
// TEAM DATA
// =====================================================

const TEAM = [
  {
    name: "John",
    role: "Software Developer",
    image: team2,
    offset: "md:translate-y-0",
    shape:
      "rounded-tl-[2rem] rounded-tr-[3rem] rounded-bl-[2.5rem] rounded-br-[3.5rem] sm:rounded-tl-[3rem] sm:rounded-tr-[6rem] sm:rounded-bl-[5rem] sm:rounded-br-[6.5rem]",
    bio: "A passionate software developer focused on creating thoughtful digital experiences and scalable solutions. I enjoy turning complex problems into simple, intuitive products.",
    focus: "Frontend Development",
    experience: "3+ Years",
    education: "B.Tech / B.E.",
    skills: "React · JavaScript · Tailwind",
  },
  {
    name: "Sarah",
    role: "UI/UX Designer",
    image: team3,
    offset: "md:translate-y-10",
    shape:
      "rounded-tl-[3rem] rounded-tr-[2rem] rounded-bl-[3.5rem] rounded-br-[2.5rem] sm:rounded-tl-[6rem] sm:rounded-tr-[3rem] sm:rounded-bl-[6.5rem] sm:rounded-br-[5rem]",
    bio: "A product designer who believes great interfaces should feel natural before they are noticed. Focused on creating clean, meaningful and human-centered experiences.",
    focus: "Product Design",
    experience: "4+ Years",
    education: "Design / Engineering",
    skills: "Figma · UI · UX · Research",
  },
  {
    name: "Alex",
    role: "Software Engineer",
    image: team1 || team2,
    offset: "md:translate-y-5",
    shape:
      "rounded-tl-[2.5rem] rounded-tr-[3rem] rounded-bl-[2rem] rounded-br-[4rem] sm:rounded-tl-[4rem] sm:rounded-tr-[5rem] sm:rounded-bl-[3rem] sm:rounded-br-[7rem]",
    bio: "A technology enthusiast focused on building reliable systems and transforming ideas into production-ready digital products with clean and maintainable architecture.",
    focus: "Full Stack Development",
    experience: "5+ Years",
    education: "B.Tech / B.E.",
    skills: "Node.js · React · APIs · SQL",
  },
];

// =====================================================
// THINKING PRINCIPLES
// =====================================================

const PRINCIPLES = [
  {
    number: "01",
    title: "Start with people",
    description:
      "Technology should adapt to people, not the other way around. We begin by understanding the people who will actually use what we build.",
  },
  {
    number: "02",
    title: "Make complexity invisible",
    description:
      "Behind every simple experience is thoughtful engineering. We remove unnecessary complexity so the final product feels effortless.",
  },
  {
    number: "03",
    title: "Build with intention",
    description:
      "Every interaction, component and decision has a purpose. We care about the small details because they shape the complete experience.",
  },
  {
    number: "04",
    title: "Keep moving forward",
    description:
      "Digital products are never truly finished. We continuously learn, experiment and improve what we create.",
  },
];

// =====================================================
// ANIMATION VARIANTS
// =====================================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// =====================================================
// TYPING TEXT
// =====================================================

function TypingText({ children, className = "", speed = 40 }) {
  return (
    <TypeAnimation
      sequence={[children, 1000]}
      speed={speed}
      cursor
      repeat={0}
      className={className}
    />
  );
}

// =====================================================
// TEAM CARD
// =====================================================

function TeamCard({ person, index }) {
  const [expanded, setExpanded] = useState(false);

  const cardColors = [
    {
      glow: "bg-violet-500/25",
      hover: "bg-violet-400/15",
      badge: "bg-violet-100/90",
      dot: "bg-violet-600",
      badgeText: "text-violet-900/80",
      icon: "bg-violet-950/75",
      iconText: "text-violet-200",
      hoverText: "group-hover:text-violet-300",
      label: "text-violet-700",
    },
    {
      glow: "bg-pink-500/25",
      hover: "bg-pink-400/15",
      badge: "bg-pink-100/90",
      dot: "bg-pink-600",
      badgeText: "text-pink-900/80",
      icon: "bg-pink-950/75",
      iconText: "text-pink-200",
      hoverText: "group-hover:text-pink-300",
      label: "text-pink-700",
    },
    {
      glow: "bg-cyan-500/25",
      hover: "bg-cyan-400/15",
      badge: "bg-cyan-100/90",
      dot: "bg-cyan-600",
      badgeText: "text-cyan-950/80",
      icon: "bg-cyan-950/75",
      iconText: "text-cyan-200",
      hoverText: "group-hover:text-cyan-300",
      label: "text-cyan-700",
    },
  ];

  const colors = cardColors[index % cardColors.length];

  return (
    <motion.div
      variants={fadeUp}
      className={`flex flex-col gap-3 sm:gap-4 ${person.offset} text-slate-900`}
    >
      <motion.button
        type="button"
        onClick={() => setExpanded(!expanded)}
        whileHover={{ y: -8 }}
        whileTap={{ scale: 0.985 }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 18,
        }}
        className="group relative w-full cursor-pointer text-left"
      >
        {/* Animated Glow */}
        <motion.div
          animate={{
            scale: [1, 1.06, 1],
            opacity: [0.18, 0.38, 0.18],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute -inset-2 rounded-[3rem] blur-2xl pointer-events-none sm:-inset-4 sm:rounded-[5rem] sm:blur-3xl ${colors.glow}`}
        />

        {/* Hover Glow */}
        <div
          className={`absolute -inset-2 rounded-[2rem] blur-2xl opacity-0 transition-opacity duration-500 pointer-events-none group-hover:opacity-100 sm:rounded-[3rem] ${colors.hover}`}
        />

        {/* Card */}
        <div
          className={`relative overflow-hidden border border-white/70 bg-white/90 shadow-[0_20px_60px_rgba(76,29,149,0.14)] backdrop-blur-xl ${person.shape}`}
        >
          {/* Scan Line */}
          <motion.div
            initial={{ top: "-5%" }}
            animate={{ top: "105%" }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              repeatDelay: index * 0.7,
              ease: "linear",
            }}
            className="absolute left-0 right-0 z-30 h-[2px] bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 pointer-events-none"
          />

          {/* Image */}
          <motion.img
            src={person.image}
            alt={person.name}
            animate={{
              scale: expanded ? 1.04 : 1,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-[210px] w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 sm:h-[360px] md:h-[410px] lg:h-[440px]"
          />

          {/* Image Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-violet-950/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

          {/* Developer Badge */}
          <motion.div
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`absolute left-2 top-2 z-20 flex items-center gap-1 rounded-full border border-white/50 px-2 py-1 backdrop-blur-md sm:left-4 sm:top-4 sm:gap-2 sm:px-3 sm:py-1.5 ${colors.badge}`}
          >
            <span
              className={`h-1 w-1 rounded-full sm:h-1.5 sm:w-1.5 ${colors.dot}`}
            />

            <span
              className={`font-mono text-[6px] tracking-[1px] sm:text-[8px] ${colors.badgeText}`}
            >
              DEV_{String(index + 1).padStart(2, "0")}
            </span>
          </motion.div>

          {/* Expand Button */}
          <motion.div
            animate={{
              rotate: expanded ? 90 : 0,
            }}
            className="absolute right-2 top-2 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg sm:right-4 sm:top-4 sm:h-10 sm:w-10"
          >
            {expanded ? <Minus size={13} /> : <Plus size={13} />}
          </motion.div>

          {/* Code Icon */}
          <motion.div
            className={`absolute bottom-3 right-3 z-20 flex h-7 w-7 items-center justify-center rounded-lg opacity-0 transition-all duration-500 group-hover:opacity-100 sm:bottom-5 sm:right-5 sm:h-10 sm:w-10 sm:rounded-xl ${colors.icon} ${colors.iconText}`}
          >
            <Code2 size={14} strokeWidth={1.5} />
          </motion.div>

          {/* Name */}
          <div className="absolute bottom-3 left-3 right-3 z-20 sm:bottom-5 sm:left-5 sm:right-5">
            <p className="mb-1 font-body text-[7px] uppercase tracking-[0.7px] text-white/75 sm:text-[10px] sm:tracking-[1.5px]">
              {person.role}
            </p>

            <h3
              className={`font-display text-base font-semibold tracking-[-0.5px] text-white transition-colors duration-300 sm:text-2xl md:text-3xl ${colors.hoverText}`}
            >
              {person.name}
            </h3>
          </div>
        </div>
      </motion.button>

      {/* Details */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              height: "auto",
              y: 0,
            }}
            exit={{
              opacity: 0,
              height: 0,
              y: -10,
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-4 border-t border-slate-200 pt-4 sm:gap-5 sm:pt-5">
              <p className="font-body text-xs leading-relaxed text-slate-600 sm:text-sm md:text-base">
                {person.bio}
              </p>

              <div className="grid grid-cols-2 gap-3 border-t border-slate-200 pt-4 sm:gap-5 sm:pt-5">
                <div>
                  <p
                    className={`mb-1 font-body text-[8px] uppercase sm:text-[10px] ${colors.label}`}
                  >
                    Focus
                  </p>
                  <p className="font-body text-xs text-slate-900 sm:text-sm">
                    {person.focus}
                  </p>
                </div>

                <div>
                  <p
                    className={`mb-1 font-body text-[8px] uppercase sm:text-[10px] ${colors.label}`}
                  >
                    Experience
                  </p>
                  <p className="font-body text-xs text-slate-900 sm:text-sm">
                    {person.experience}
                  </p>
                </div>

                <div>
                  <p
                    className={`mb-1 font-body text-[8px] uppercase sm:text-[10px] ${colors.label}`}
                  >
                    Education
                  </p>
                  <p className="font-body text-xs text-slate-900 sm:text-sm">
                    {person.education}
                  </p>
                </div>

                <div>
                  <p
                    className={`mb-1 font-body text-[8px] uppercase sm:text-[10px] ${colors.label}`}
                  >
                    Skills
                  </p>
                  <p className="font-body text-xs text-slate-900 sm:text-sm">
                    {person.skills}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setExpanded(false)}
                className="flex w-fit items-center gap-2 font-body text-[10px] uppercase text-slate-600 transition-colors hover:text-violet-700 sm:text-xs"
              >
                Close profile
                <ArrowDown size={13} className="rotate-180" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// =====================================================
// ABOUT PAGE
// =====================================================

export default function About() {
  return (
    <div className="w-full overflow-hidden bg-gradient-to-br from-amber-50 via-purple-50 to-cyan-50">
      <Navbar />

      <main className="flex flex-col items-center gap-10 pb-12 sm:gap-12 md:gap-14 md:pb-16 lg:gap-16">
        {/* ================================================= */}
        {/* HERO */}
        {/* ================================================= */}

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={staggerContainer}
          className="relative isolate w-full overflow-hidden"
        >
          {/* Background Video */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="h-full w-full scale-105 object-cover object-center"
            >
              <source src="/videos/About.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 z-[1] bg-slate-950/60 pointer-events-none" />

          {/* Premium Gradient */}
          <div className="absolute inset-0 z-[2] bg-gradient-to-r from-slate-950/95 via-indigo-950/75 to-transparent pointer-events-none" />

          {/* Color Gradient */}
          <div className="absolute inset-0 z-[2] bg-gradient-to-br from-violet-600/25 via-transparent to-cyan-500/25 pointer-events-none" />

          {/* Left Readability Overlay */}
          <div className="absolute inset-y-0 left-0 z-[3] w-[78%] bg-gradient-to-r from-slate-950/90 via-indigo-950/50 to-transparent pointer-events-none" />

          {/* Bottom Gradient */}
          <div className="absolute inset-x-0 bottom-0 z-[3] h-1/2 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

          {/* Violet Glow */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-24 -top-32 z-[4] h-64 w-64 rounded-full bg-violet-500/30 blur-3xl pointer-events-none sm:h-96 sm:w-96"
          />

          {/* Cyan Glow */}
          <motion.div
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.08, 0.25, 0.08],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-32 right-0 z-[4] h-64 w-64 rounded-full bg-cyan-400/25 blur-3xl pointer-events-none sm:h-[28rem] sm:w-[28rem]"
          />

          {/* Hero Container */}
          <div className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-2 items-center gap-3 px-3 pb-8 pt-20 sm:gap-6 sm:px-6 sm:pb-12 sm:pt-24 md:px-10 md:pb-14 md:pt-28 lg:grid-cols-12 lg:gap-8 lg:px-14 lg:pb-16 lg:pt-10 xl:px-16">
            {/* Hero Text */}
            <motion.div
              variants={fadeUp}
              className="relative col-span-1 flex min-w-0 flex-col justify-center gap-3 sm:gap-5 lg:col-span-8 lg:gap-6"
            >
              {/* Heading Glow */}
              <div className="absolute -left-10 top-[25%] h-[220px] w-[220px] rounded-full bg-violet-500/20 blur-[90px] opacity-80 pointer-events-none sm:h-[320px] sm:w-[320px] lg:h-[420px] lg:w-[420px]" />

              {/* Heading */}
              <h1 className="relative z-10 max-w-[900px] break-words font-display text-[24px] font-bold leading-[0.98] tracking-[-1px] text-white drop-shadow-[0_8px_25px_rgba(0,0,0,0.35)] sm:text-[46px] sm:tracking-[-2px] md:text-[68px] lg:text-[82px] lg:tracking-[-3px] xl:text-[92px]">
                <span>Designing the </span>

                <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 bg-clip-text text-transparent drop-shadow-[0_0_22px_rgba(167,139,250,0.4)]">
                  Architecture
                </span>

                <span> of tomorrow.</span>
              </h1>

              {/* Description */}
              <p className="relative z-10 max-w-[650px] font-body text-[9px] leading-[1.5] text-white/80 drop-shadow-[0_4px_16px_rgba(0,0,0,0.35)] sm:text-base sm:leading-relaxed md:text-lg lg:text-xl">
                We don&rsquo;t just build software; we craft digital spaces.
                Our approach treats every interface as a living environment,
                combining the stark precision of modern technology with the
                warmth of human intuition. Welcome to the{" "}
                <span className="font-medium text-cyan-300 drop-shadow-[0_0_10px_rgba(103,232,249,0.35)]">
                  new standard of digital elegance.
                </span>
              </p>

              {/* Accent Line */}
              <motion.div
                initial={{
                  width: 0,
                  opacity: 0,
                }}
                whileInView={{
                  width: "90px",
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                }}
                className="relative z-10 h-[2px] bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 shadow-[0_0_16px_rgba(103,232,249,0.7)]"
              />
            </motion.div>

            {/* Hero Image */}
            <motion.div
              variants={fadeUp}
              className="relative col-span-1 flex min-w-0 items-center justify-center lg:col-span-4"
            >
              {/* Image Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.2, 0.45, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-cyan-400/30 blur-3xl pointer-events-none sm:-bottom-12 sm:-left-12 sm:h-56 sm:w-56"
              />

              {/* Image Container */}
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.015,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="relative z-10 w-full overflow-hidden rounded-tl-[1.5rem] rounded-tr-[2.5rem] rounded-bl-[2rem] rounded-br-[2.5rem] border border-cyan-300/30 bg-white/10 pt-5 shadow-[0_25px_70px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:rounded-tl-[3rem] sm:rounded-tr-[6rem] sm:rounded-bl-[5rem] sm:rounded-br-[6.5rem]"
              >
                <img
                  src={aboutHero}
                  alt="Studio Tech architecture inspiration"
                  className="h-[180px] w-full object-cover object-center sm:h-[300px] md:h-[450px] lg:h-[500px]"
                />

                <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/30 via-transparent to-cyan-400/20 pointer-events-none" />

                <div className="absolute inset-0 rounded-tl-[1.5rem] rounded-tr-[2.5rem] rounded-bl-[2rem] rounded-br-[2.5rem] shadow-[inset_0_0_45px_rgba(103,232,249,0.18)] pointer-events-none sm:rounded-tl-[3rem] sm:rounded-tr-[6rem] sm:rounded-bl-[5rem] sm:rounded-br-[6.5rem]" />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* ================================================= */}
        {/* MISSION */}
        {/* ================================================= */}

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={fadeUp}
          className="relative w-full max-w-[1440px] px-3 sm:px-6 md:px-10 lg:px-14"
        >
          <div className="grid grid-cols-2 items-center gap-4 sm:gap-6 lg:grid-cols-12 lg:gap-10">
            {/* Mission Image */}
            <div className="col-span-1 flex justify-center lg:col-span-4">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.94,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group relative aspect-square w-full max-w-[170px] overflow-hidden rounded-[1.25rem] border border-white/80 bg-white/80 shadow-[0_20px_50px_rgba(124,58,237,0.12)] sm:max-w-[250px] sm:rounded-[2rem] md:max-w-[330px] md:rounded-[2.5rem] lg:max-w-[350px]"
              >
                <img
                  src="/images/mission.jpg"
                  alt="CodeThrive mission"
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-violet-950/45 via-transparent to-cyan-300/10" />

                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between sm:bottom-4 sm:left-4 sm:right-4">
                  <span className="font-body text-[7px] uppercase tracking-[0.8px] text-white/90 sm:text-[10px]">
                    Our Mission
                  </span>

                  <span className="h-4 w-4 rounded-full border border-white/40 bg-white/20 backdrop-blur-sm sm:h-7 sm:w-7" />
                </div>
              </motion.div>
            </div>

            {/* Mission Content */}
            <div className="relative col-span-1 flex flex-col gap-2 sm:gap-4 lg:col-span-8 lg:gap-5 lg:pl-4">
              <div className="absolute -left-8 top-1/2 h-[180px] w-[180px] -translate-y-1/2 rounded-full bg-violet-400/15 blur-[80px] pointer-events-none sm:h-[240px] sm:w-[240px] lg:h-[320px] lg:w-[320px]" />

              <p className="relative z-10 font-body text-[8px] font-medium uppercase tracking-[1.2px] text-violet-700 sm:text-xs md:text-sm">
                Our Mission
              </p>

              <div className="relative z-10">
                <div className="absolute inset-0 -z-10 rounded-full bg-violet-400/15 blur-[45px]" />

                <h2 className="font-display text-[16px] font-semibold leading-[1.12] tracking-[-0.5px] text-slate-900 sm:text-2xl md:text-4xl lg:text-[42px] lg:tracking-[-1.2px] xl:text-[48px]">
                  <TypingText speed={30}>
                    To blur the lines between physical reality and digital
                    capability, creating tools that feel like extensions of
                    thought.
                  </TypingText>
                </h2>
              </div>

              <motion.div
                initial={{
                  width: 0,
                  opacity: 0,
                }}
                whileInView={{
                  width: "65px",
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                }}
                className="relative z-10 mt-1 h-[2px] bg-gradient-to-r from-violet-600 via-pink-400 to-transparent shadow-[0_0_14px_rgba(139,92,246,0.35)] sm:mt-2"
              />
            </div>
          </div>
        </motion.section>

        {/* ================================================= */}
        {/* THE MINDS BEHIND */}
        {/* ================================================= */}

        <section className="relative w-full max-w-[1440px] overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] bg-gradient-to-br from-[#FFF1E6] via-[#E0F2FE] to-[#E0E7FF] px-3 py-5 sm:px-6 sm:py-10 md:px-10 md:py-14 lg:px-14 lg:py-16">
  {/* Background gradient decorations */}

  <div className="pointer-events-none absolute -left-24 -top-24 h-[180px] w-[180px] rounded-full bg-[#F97316]/20 blur-3xl sm:-left-32 sm:-top-32 sm:h-[380px] sm:w-[380px]" />

  <div className="pointer-events-none absolute -bottom-24 -right-24 h-[220px] w-[220px] rounded-full bg-[#06B6D4]/20 blur-3xl sm:-bottom-40 sm:-right-32 sm:h-[450px] sm:w-[450px]" />

  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6366F1]/10 blur-3xl sm:h-[400px] sm:w-[400px]" />

  <div className="relative z-10 flex w-full flex-col gap-5 sm:gap-8 md:gap-10">
    {/* Heading */}

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.05,
        margin: "0px 0px -30px 0px",
      }}
      variants={fadeUp}
      className="flex flex-col gap-3 sm:gap-4"
    >
      <div className="flex items-end justify-between gap-3">
        <div>
          <p className="mb-2 font-body text-[8px] uppercase tracking-[1px] text-orange-600 sm:mb-3 sm:text-xs sm:tracking-[1.5px]">
            What We Bring
          </p>

          <h2 className="font-display text-[26px] font-bold leading-[0.95] tracking-[-1px] text-slate-900 sm:text-5xl sm:tracking-[-2px] md:text-6xl lg:text-[76px]">
            Ideas Into
            <br />

            <span className="bg-gradient-to-r from-orange-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent">
              Digital Impact.
            </span>
          </h2>
        </div>

        <motion.div
          animate={{
            y: [0, 7, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="hidden md:flex"
        >
          <ArrowDown size={28} className="text-cyan-600" />
        </motion.div>
      </div>

      <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 via-cyan-500 to-indigo-500 sm:h-1 sm:w-24" />

      <p className="max-w-[700px] font-body text-[11px] leading-relaxed text-slate-700 sm:text-sm md:text-base lg:text-lg">
        We bring together creativity, technology and strategy to transform
        ambitious ideas into digital experiences that create real value.
      </p>
    </motion.div>

    {/* Animated Content Cards */}

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.01,
        margin: "0px 0px -20px 0px",
      }}
      variants={staggerContainer}
      className="grid grid-cols-3 items-stretch gap-2 sm:gap-5 md:gap-6 lg:gap-7"
    >
      {[
        {
          title: "Creative Thinking",
          description:
            "Fresh ideas and thoughtful design that make every digital experience memorable.",
          icon: "✦",
          gradient: "from-orange-500 to-amber-400",
        },
        {
          title: "Smart Technology",
          description:
            "Reliable and scalable solutions built with modern tools and clean development practices.",
          icon: "⌘",
          gradient: "from-cyan-500 to-blue-500",
        },
        {
          title: "Meaningful Results",
          description:
            "Digital products focused on usability, performance and long-term business growth.",
          icon: "↗",
          gradient: "from-indigo-500 to-purple-500",
        },
      ].map((item, index) => (
        <motion.div
          key={item.title}
          variants={fadeUp}
          className="group relative min-w-0"
        >
          <div className="relative flex h-full min-h-[190px] flex-col overflow-hidden rounded-[1rem] border border-white/80 bg-white/65 p-2.5 shadow-[0_12px_28px_rgba(15,23,42,0.06)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:bg-white/80 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)] sm:min-h-[270px] sm:rounded-[1.75rem] sm:p-6 lg:min-h-[300px] lg:p-7">
            {/* Card glow */}

            <div
              className={`pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-gradient-to-br ${item.gradient} opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40 sm:-right-12 sm:-top-12 sm:h-32 sm:w-32 sm:blur-3xl`}
            />

            {/* Animated icon */}

            <motion.div
              animate={{
                y: [0, -4, 0],
                rotate: [0, 3, 0, -3, 0],
              }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`relative mb-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${item.gradient} text-base font-bold text-white shadow-md sm:mb-5 sm:h-14 sm:w-14 sm:rounded-2xl sm:text-3xl`}
            >
              {item.icon}
            </motion.div>

            <p className="relative mb-1 font-body text-[7px] font-semibold uppercase tracking-[1px] text-slate-500 sm:mb-2 sm:text-xs sm:tracking-[1.5px]">
              0{index + 1}
            </p>

            <h3 className="relative font-display text-[11px] font-bold leading-tight tracking-[-0.3px] text-slate-900 sm:text-2xl sm:tracking-[-0.5px]">
              {item.title}
            </h3>

            <p className="relative mt-2 flex-1 font-body text-[8px] leading-[1.35] text-slate-600 sm:mt-3 sm:text-sm sm:leading-relaxed md:text-base">
              {item.description}
            </p>

            <div
              className={`relative mt-3 h-0.5 w-7 rounded-full bg-gradient-to-r ${item.gradient} transition-all duration-500 group-hover:w-12 sm:mt-5 sm:h-1 sm:w-12 sm:group-hover:w-20`}
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

        {/* ================================================= */}
        {/* HOW WE THINK */}
        {/* ================================================= */}

        <section className="relative w-full max-w-[1440px] overflow-hidden px-3 sm:px-6 md:px-10 lg:px-14">
  {/* Gradient Background */}
  <div className="absolute inset-0 -z-30 bg-gradient-to-br from-[#EDE9FE] via-[#F5D0FE] to-[#CFFAFE]" />

  {/* Soft Color Overlay */}
  <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-r from-[#DDD6FE]/40 via-transparent to-[#A5F3FC]/40" />

  {/* Aurora - Violet */}
  <motion.div
    animate={{
      x: [0, 80, 30, -20, 0],
      y: [0, 40, 70, 20, 0],
      scale: [1, 1.15, 1],
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="pointer-events-none absolute -left-[150px] -top-[150px] z-[-10] h-[500px] w-[500px] rounded-full bg-violet-400/20 blur-[100px]"
  />

  {/* Aurora - Cyan */}
  <motion.div
    animate={{
      x: [0, -80, 0],
      y: [0, 60, 0],
      scale: [1, 1.12, 1],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="pointer-events-none absolute -right-[250px] top-0 z-[-10] h-[600px] w-[600px] rounded-full bg-cyan-400/20 blur-[130px]"
  />

  {/* Animated Grid */}
  <motion.div
    animate={{
      backgroundPosition: ["0px 0px", "70px 70px"],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    }}
    className="pointer-events-none absolute inset-0 z-[-5] bg-[linear-gradient(rgba(124,58,237,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.08)_1px,transparent_1px)] bg-[size:45px_45px] opacity-60 sm:bg-[size:55px_55px]"
  />

  {/* Content */}
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{
      once: true,
      amount: 0.15,
    }}
    variants={staggerContainer}
    className="relative z-10 grid grid-cols-1 gap-8 border-t border-violet-200/70 pt-8 sm:gap-10 sm:pt-10 md:gap-12 md:pt-12 lg:grid-cols-12 lg:gap-16 lg:pt-14"
  >
    {/* Left Content */}
    <motion.div
      variants={fadeUp}
      className="col-span-1 lg:col-span-5"
    >
      <p className="mb-3 font-body text-[9px] uppercase tracking-[1.5px] text-violet-700 sm:mb-4 sm:text-xs">
        How We Think
      </p>

      <h2 className="max-w-[560px] break-words font-display text-[32px] font-bold leading-[1] tracking-[-1.5px] text-slate-900 sm:text-5xl sm:tracking-[-2px] md:text-6xl lg:text-[68px]">
        <TypingText speed={50}>
          Good technology should feel inevitable.
        </TypingText>
      </h2>
    </motion.div>

    {/* Right Content */}
    <motion.div
      variants={fadeUp}
      className="col-span-1 flex flex-col lg:col-span-7"
    >
      {PRINCIPLES.map((principle, index) => (
        <motion.div
          key={principle.number}
          whileHover={{
            x: 6,
          }}
          transition={{
            duration: 0.25,
          }}
          className="group grid grid-cols-[28px_minmax(0,1fr)] gap-3 border-b border-violet-200/70 py-4 first:pt-0 last:pb-0 sm:grid-cols-[40px_minmax(0,1fr)] sm:gap-5 sm:py-5 md:py-6"
        >
          <span
            className={`pt-1 font-body text-[9px] font-medium sm:text-xs ${
              index % 2 === 0 ? "text-violet-700" : "text-pink-600"
            }`}
          >
            {principle.number}
          </span>

          <div className="min-w-0">
            <h3
              className={`mb-1.5 font-display text-sm font-semibold leading-tight text-slate-900 transition-colors sm:mb-2 sm:text-lg md:text-xl lg:text-2xl ${
                index % 2 === 0
                  ? "group-hover:text-violet-700"
                  : "group-hover:text-pink-600"
              }`}
            >
              {principle.title}
            </h3>

            <p className="max-w-[650px] font-body text-[10px] leading-[1.55] text-slate-600 sm:text-sm sm:leading-relaxed md:text-base">
              {principle.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
</section>
        {/* ================================================= */}
        {/* FINAL STATEMENT */}
        {/* ================================================= */}

        <motion.section
          initial={{
            opacity: 0,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
          }}
          className="w-full max-w-[1440px] px-3 sm:px-6 md:px-10 lg:px-14"
        >
          <div className="relative overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-indigo-950 via-violet-950 to-fuchsia-950 px-4 py-7 shadow-[0_25px_80px_rgba(76,29,149,0.3)] sm:rounded-[1.75rem] sm:px-8 sm:py-12 md:px-12 md:py-14 lg:px-16 lg:py-16">
            {/* Glow */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.1, 0.25, 0.1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400 blur-[60px] sm:h-60 sm:w-60"
            />

            {/* Desktop Visual */}
            <div className="absolute bottom-0 right-0 top-0 hidden w-[42%] items-center justify-center pointer-events-none md:flex">
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[260px] w-[260px] rounded-full border border-cyan-300/20 lg:h-[340px] lg:w-[340px]"
              >
                <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.9)]" />
              </motion.div>

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[200px] w-[200px] rounded-full border border-dashed border-pink-300/25 lg:h-[270px] lg:w-[270px]"
              />

              <motion.div
                animate={{
                  scale: [1, 1.18, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute h-20 w-20 rounded-full border border-violet-300/40 bg-violet-400/10 lg:h-28 lg:w-28"
              />

              <motion.div
                animate={{
                  scale: [1, 1.12, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute h-10 w-10 rounded-full bg-gradient-to-r from-cyan-300 via-violet-400 to-pink-400 shadow-[0_0_40px_rgba(167,139,250,0.8)] lg:h-14 lg:w-14"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-[900px]">
              <p className="mb-2 font-body text-[9px] uppercase tracking-[1px] text-white/55 sm:mb-4 sm:text-xs">
                The next chapter
              </p>

              <h2 className="font-display text-[34px] font-bold leading-[0.95] tracking-[-1px] text-white sm:text-5xl sm:tracking-[-2px] md:text-6xl lg:text-[72px]">
                We are still
                <br />
                building what
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 bg-clip-text text-transparent">
                  comes next.
                </span>
              </h2>

              <p className="mt-3 max-w-[600px] font-body text-xs leading-relaxed text-white/65 sm:mt-5 sm:text-sm md:text-base lg:text-lg">
                New ideas, new technology and new ways of thinking. That is
                what keeps Studio Tech moving forward.
              </p>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}