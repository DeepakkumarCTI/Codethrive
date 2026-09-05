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

import aboutBg from "../assets/about-bg.jpg";

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

function TypingText({
  children,
  className = "",
  speed = 40,
}) {
  return (
    <TypeAnimation
      sequence={[children, 1000]}
      speed={speed}
      cursor={true}
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

  return (
    <motion.div
      variants={fadeUp}
      className={`flex flex-col gap-3 sm:gap-4 ${person.offset} text-[#24332F]`}
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
        className="group relative w-full text-left cursor-pointer"
      >
        {/* Glow */}

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
          className="
            absolute
            -inset-2
            sm:-inset-4
            rounded-[3rem]
            sm:rounded-[5rem]
            bg-emerald-700/20
            blur-2xl
            sm:blur-3xl
            pointer-events-none
          "
        />

        {/* Hover Glow */}

        <div
          className="
            absolute
            -inset-2
            rounded-[2rem]
            sm:rounded-[3rem]
            bg-emerald-500/10
            blur-2xl
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-500
            pointer-events-none
          "
        />

        {/* Card */}

        <div
          className={`
            relative
            ${person.shape}
            overflow-hidden
            border
            border-hairline
            bg-[#F3F7F4]
            shadow-[0px_15px_35px_rgba(19,20,15,0.08)]
            sm:shadow-[0px_25px_60px_rgba(19,20,15,0.08)]
          `}
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
            className="
              absolute
              left-0
              right-0
              h-[1px]
              bg-emerald-400/60
              z-30
              pointer-events-none
            "
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
            className="
              w-full
              h-[210px]

              sm:h-[360px]
              md:h-[410px]
              lg:h-[440px]

              object-cover

              grayscale
              group-hover:grayscale-0

              transition-all
              duration-700

              group-hover:scale-105
            "
          />

          {/* Gradient */}

          <div
            className="
              absolute
              inset-0

              bg-gradient-to-t
              from-[#0D211B]/80
              via-black/10
              to-transparent

              opacity-80
              group-hover:opacity-90

              transition-opacity
              duration-500
            "
          />

          {/* Dev Badge */}

          <motion.div
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute

              top-2
              left-2

              sm:top-4
              sm:left-4

              z-20

              flex
              items-center
              gap-1

              sm:gap-2

              px-2
              py-1

              sm:px-3
              sm:py-1.5

              rounded-full

              bg-[#E7F0ED]/90
              backdrop-blur-md

              border
              border-emerald-900/10
            "
          >
            <span
              className="
                w-1
                h-1

                sm:w-1.5
                sm:h-1.5

                rounded-full
                bg-emerald-600
              "
            />

            <span
              className="
                font-mono

                text-[6px]
                sm:text-[8px]

                tracking-[1px]

                text-emerald-900/70
              "
            >
              DEV_{String(index + 1).padStart(2, "0")}
            </span>
          </motion.div>

          {/* Plus */}

          <motion.div
            animate={{
              rotate: expanded ? 90 : 0,
            }}
            className="
              absolute

              top-2
              right-2

              sm:top-4
              sm:right-4

              z-20

              w-7
              h-7

              sm:w-10
              sm:h-10

              rounded-full

              bg-white/90

              flex
              items-center
              justify-center

              text-ink
              shadow-lg
            "
          >
            {expanded ? (
              <Minus size={13} />
            ) : (
              <Plus size={13} />
            )}
          </motion.div>

          {/* Code Icon */}

          <motion.div
            className="
              absolute

              bottom-3
              right-3

              sm:bottom-5
              sm:right-5

              z-20

              w-7
              h-7

              sm:w-10
              sm:h-10

              rounded-lg
              sm:rounded-xl

              bg-emerald-900/70

              flex
              items-center
              justify-center

              text-emerald-300

              opacity-0
              group-hover:opacity-100

              transition-all
              duration-500
            "
          >
            <Code2
              size={14}
              strokeWidth={1.5}
            />
          </motion.div>

          {/* Name */}

          <div
            className="
              absolute

              bottom-3
              left-3
              right-3

              sm:bottom-5
              sm:left-5
              sm:right-5

              z-20
            "
          >
            <p
              className="
                font-body

                text-white/70

                text-[7px]
                sm:text-[10px]

                tracking-[0.7px]
                sm:tracking-[1.5px]

                uppercase

                mb-1
              "
            >
              {person.role}
            </p>

            <h3
              className="
                font-display
                font-semibold

                text-white

                text-base
                sm:text-2xl
                md:text-3xl

                tracking-[-0.5px]

                group-hover:text-emerald-300

                transition-colors
                duration-300
              "
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
            <div
              className="
                border-t
                border-hairline

                pt-4
                sm:pt-5

                flex
                flex-col

                gap-4
                sm:gap-5
              "
            >
              <p
                className="
                  font-body
                  text-clay

                  text-xs
                  sm:text-sm
                  md:text-base

                  leading-relaxed
                "
              >
                {person.bio}
              </p>

              <div
                className="
                  grid
                  grid-cols-2

                  gap-3
                  sm:gap-5

                  border-t
                  border-hairline

                  pt-4
                  sm:pt-5
                "
              >
                <div>
                  <p className="font-body text-emerald-800 text-[8px] sm:text-[10px] uppercase mb-1">
                    Focus
                  </p>

                  <p className="font-body text-ink text-xs sm:text-sm">
                    {person.focus}
                  </p>
                </div>

                <div>
                  <p className="font-body text-emerald-800 text-[8px] sm:text-[10px] uppercase mb-1">
                    Experience
                  </p>

                  <p className="font-body text-ink text-xs sm:text-sm">
                    {person.experience}
                  </p>
                </div>

                <div>
                  <p className="font-body text-emerald-800 text-[8px] sm:text-[10px] uppercase mb-1">
                    Education
                  </p>

                  <p className="font-body text-ink text-xs sm:text-sm">
                    {person.education}
                  </p>
                </div>

                <div>
                  <p className="font-body text-emerald-800 text-[8px] sm:text-[10px] uppercase mb-1">
                    Skills
                  </p>

                  <p className="font-body text-ink text-xs sm:text-sm">
                    {person.skills}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setExpanded(false)}
                className="
                  flex
                  items-center
                  gap-2

                  w-fit

                  font-body

                  text-[10px]
                  sm:text-xs

                  uppercase

                  text-clay
                  hover:text-emerald-800

                  transition-colors
                "
              >
                Close profile

                <ArrowDown
                  size={13}
                  className="rotate-180"
                />
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
    <div className="bg-sand w-full overflow-hidden">
      <Navbar />

      <main
        className="
          flex
          flex-col
          items-center

          gap-10
          sm:gap-12
          md:gap-14
          lg:gap-16

          pt-0

          pb-12
          md:pb-16
        "
      >

{/* ================================================= */}
{/* HERO */}
{/* ================================================= */}

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
  className="
    relative
    w-full
    overflow-hidden
    isolate
  "
>
  {/* =====================================================
      BACKGROUND VIDEO
  ===================================================== */}

  <div
    className="
      absolute
      inset-0
      z-0
      pointer-events-none
      overflow-hidden
    "
  >
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className="
        w-full
        h-full
        object-cover
        object-center
        scale-105
      "
    >
      <source src="/videos/About.mp4" type="video/mp4" />
    </video>
  </div>


  {/* =====================================================
      BASE DARK OVERLAY
      Makes text readable
  ===================================================== */}

  <div
    className="
      absolute
      inset-0
      z-[1]
      pointer-events-none

      bg-slate-950/55
    "
  />


  {/* =====================================================
      PRIMARY PREMIUM GRADIENT
      Navy → Emerald → Transparent
  ===================================================== */}

  <div
    className="
      absolute
      inset-0
      z-[2]
      pointer-events-none

      bg-gradient-to-r
      from-slate-950/90
      via-slate-900/65
      via-emerald-950/35
      to-transparent
    "
  />


  {/* =====================================================
      SECONDARY EMERALD / CYAN GRADIENT
  ===================================================== */}

  <div
    className="
      absolute
      inset-0
      z-[2]
      pointer-events-none

      bg-gradient-to-br
      from-emerald-500/15
      via-transparent
      to-cyan-500/15
    "
  />


  {/* =====================================================
      LEFT SIDE TEXT READABILITY GRADIENT
  ===================================================== */}

  <div
    className="
      absolute
      inset-y-0
      left-0
      z-[3]
      pointer-events-none

      w-[75%]

      bg-gradient-to-r
      from-slate-950/80
      via-slate-900/45
      to-transparent
    "
  />


  {/* =====================================================
      BOTTOM CINEMATIC GRADIENT
  ===================================================== */}

  <div
    className="
      absolute
      inset-x-0
      bottom-0
      z-[3]

      h-1/2

      pointer-events-none

      bg-gradient-to-t
      from-slate-950/50
      via-transparent
      to-transparent
    "
  />


  {/* =====================================================
      SOFT EMERALD GLOW
  ===================================================== */}

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
    className="
      absolute
      z-[4]
      pointer-events-none

      -top-32
      -left-24

      w-64
      h-64

      sm:w-96
      sm:h-96

      rounded-full

      bg-emerald-400/20

      blur-3xl
    "
  />


  {/* =====================================================
      CYAN GLOW
  ===================================================== */}

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
    className="
      absolute
      z-[4]
      pointer-events-none

      -bottom-32
      right-0

      w-64
      h-64

      sm:w-[28rem]
      sm:h-[28rem]

      rounded-full

      bg-cyan-400/15

      blur-3xl
    "
  />


  {/* =====================================================
      MAIN HERO CONTAINER
  ===================================================== */}

  <div
    className="
      relative
      z-10

      w-full
      max-w-[1440px]
      mx-auto

      grid
      grid-cols-2
      lg:grid-cols-12

      items-center

      gap-3
      sm:gap-6
      lg:gap-8

      px-3
      sm:px-6
      md:px-10
      lg:px-14
      xl:px-16

      pt-20
      sm:pt-24
      md:pt-28
      lg:pt-10

      pb-8
      sm:pb-12
      md:pb-14
      lg:pb-16
    "
  >


    {/* =====================================================
        HERO TEXT
    ===================================================== */}

    <motion.div
      variants={fadeUp}
      className="
        col-span-1
        lg:col-span-8

        flex
        flex-col
        justify-center

        gap-3
        sm:gap-5
        lg:gap-6

        min-w-0
      "
    >

      {/* =================================================
          HEADING
      ================================================= */}

      <h1
        className="
          font-display
          font-bold

          text-white

          text-[24px]
          sm:text-[46px]
          md:text-[68px]
          lg:text-[82px]
          xl:text-[92px]

          leading-[0.98]

          tracking-[-1px]
          sm:tracking-[-2px]
          lg:tracking-[-3px]

          max-w-[900px]

          break-words

          drop-shadow-[0_8px_25px_rgba(0,0,0,0.35)]
        "
      >
        <TypingText speed={35}>
          Designing the Architecture of tomorrow.
        </TypingText>
      </h1>


      {/* =================================================
          DESCRIPTION
      ================================================= */}

      <p
        className="
          font-body

          text-white/80

          text-[9px]
          sm:text-base
          md:text-lg
          lg:text-xl

          max-w-[650px]

          leading-[1.5]
          sm:leading-relaxed

          drop-shadow-[0_4px_16px_rgba(0,0,0,0.35)]
        "
      >
        We don&rsquo;t just build software; we craft digital spaces.
        Our approach treats every interface as a living environment,
        combining the stark precision of modern technology with the
        warmth of human intuition. Welcome to the new standard of
        digital elegance.
      </p>

    </motion.div>


    {/* =====================================================
        HERO IMAGE
    ===================================================== */}

    <motion.div
      variants={fadeUp}
      className="
        relative

        col-span-1
        lg:col-span-4

        min-w-0

        flex
        items-center
        justify-center
      "
    >


      {/* =================================================
          IMAGE GLOW
      ================================================= */}

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
        className="
          absolute

          -bottom-8
          -left-8

          sm:-bottom-12
          sm:-left-12

          w-32
          h-32

          sm:w-56
          sm:h-56

          rounded-full

          bg-emerald-400/25

          blur-3xl

          pointer-events-none
        "
      />


      {/* =================================================
          IMAGE CONTAINER
      ================================================= */}

      <motion.div
        whileHover={{
          y: -8,
          scale: 1.015,
        }}
        transition={{
          duration: 0.4,
        }}
        className="
          relative
          z-10
          pt-5

          w-full

          overflow-hidden

          rounded-tl-[1.5rem]
          rounded-tr-[2.5rem]
          rounded-bl-[2rem]
          rounded-br-[2.5rem]

          sm:rounded-tl-[3rem]
          sm:rounded-tr-[6rem]
          sm:rounded-bl-[5rem]
          sm:rounded-br-[6.5rem]

          border
          border-white/10

          shadow-[0px_25px_70px_rgba(0,0,0,0.45)]

          backdrop-blur-sm
        "
      >

        <img
          src={aboutHero}
          alt="Studio Tech architecture inspiration"
          className="
            w-full

            h-[180px]
            sm:h-[300px]
            md:h-[450px]
            lg:h-[500px]

            object-cover
            object-center
          "
        />


        {/* IMAGE GRADIENT */}

        <div
          className="
            absolute
            inset-0

            pointer-events-none

            bg-gradient-to-tr
            from-emerald-500/10
            via-transparent
            to-cyan-400/10
          "
        />

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
          className="
            w-full
            max-w-[1440px]

            px-3
            sm:px-6
            md:px-10
            lg:px-14
          "
        >
          <div
            className="
              grid
              grid-cols-2
              lg:grid-cols-12

              gap-4
              sm:gap-6
              lg:gap-8

              items-center
            "
          >
            {/* Mission Image */}

            <div
              className="
                col-span-1
                lg:col-span-4

                flex
                justify-center
              "
            >
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
                className="
                  relative

                  w-full

                  max-w-[170px]
                  sm:max-w-[250px]
                  md:max-w-[330px]
                  lg:max-w-[350px]

                  aspect-square

                  overflow-hidden

                  rounded-[1.25rem]
                  sm:rounded-[2rem]
                  md:rounded-[2.5rem]

                  shadow-[0_15px_35px_rgba(19,20,15,0.06)]

                  group
                "
              >
                <img
                  src="/images/mission.jpg"
                  alt="CodeThrive mission"
                  className="
                    w-full
                    h-full

                    object-cover
                    object-center

                    transition-transform
                    duration-700

                    group-hover:scale-105
                  "
                />

                <div
                  className="
                    absolute
                    inset-0

                    bg-gradient-to-t
                    from-[#0F5C4D]/30
                    via-transparent
                    to-white/5
                  "
                />

                <div
                  className="
                    absolute

                    bottom-2
                    left-2
                    right-2

                    sm:bottom-4
                    sm:left-4
                    sm:right-4

                    flex
                    items-center
                    justify-between
                  "
                >
                  <span
                    className="
                      font-body

                      text-[7px]
                      sm:text-[10px]

                      uppercase

                      text-white/80
                    "
                  >
                    Our Mission
                  </span>

                  <span
                    className="
                      w-4
                      h-4

                      sm:w-7
                      sm:h-7

                      rounded-full

                      border
                      border-white/30

                      bg-white/10
                    "
                  />
                </div>
              </motion.div>
            </div>

            {/* Mission Content */}

            <div
              className="
                col-span-1
                lg:col-span-8

                flex
                flex-col

                gap-2
                sm:gap-4
                lg:gap-5
              "
            >
              <p
                className="
                  font-body

                  text-emerald-800

                  text-[8px]
                  sm:text-xs
                  md:text-sm

                  tracking-[0.8px]

                  uppercase
                "
              >
                Our Mission
              </p>

              <h2
                className="
                  font-display
                  font-semibold

                  text-ink

                  text-[18px]
                  sm:text-3xl
                  md:text-5xl
                  lg:text-[58px]
                  xl:text-[64px]

                  leading-[1.05]

                  tracking-[-0.7px]
                  sm:tracking-[-1.5px]
                "
              >
                <TypingText speed={30}>
                  To blur the lines between physical reality and digital
                  capability, creating tools that feel like extensions of
                  thought.
                </TypingText>
              </h2>

              <motion.div
                initial={{
                  width: 0,
                  opacity: 0,
                }}
                whileInView={{
                  width: "55px",
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                }}
                className="
                  mt-1

                  h-[2px]

                  bg-gradient-to-r
                  from-emerald-700/60
                  to-transparent
                "
              />
            </div>
          </div>
        </motion.section>

        {/* ================================================= */}
        {/* THE MINDS BEHIND */}
        {/* ================================================= */}

        <section
          className="
            w-full
            max-w-[1440px]

            px-3
            sm:px-6
            md:px-10
            lg:px-14

            flex
            flex-col

            gap-4
            sm:gap-6
            md:gap-9
          "
        >
          {/* Heading */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
            className="
              flex
              flex-col

              gap-2
              sm:gap-4
            "
          >
            <div className="flex items-end justify-between">
              <div>
                <p
                  className="
                    font-body
                    text-emerald-800

                    text-[9px]
                    sm:text-xs

                    tracking-[1px]
                    sm:tracking-[1.5px]

                    uppercase

                    mb-1
                    sm:mb-2
                  "
                >
                  Our People
                </p>

                <h2
                  className="
                    font-display
                    font-bold

                    text-ink

                    text-[30px]
                    sm:text-5xl
                    md:text-6xl
                    lg:text-[76px]

                    leading-[0.92]

                    tracking-[-1.5px]
                    sm:tracking-[-2px]
                  "
                >
                  The Minds Behind
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
                <ArrowDown
                  size={26}
                  className="text-emerald-800"
                />
              </motion.div>
            </div>

            <div
              className="
                w-14
                sm:w-20

                h-0.5
                sm:h-1

                bg-emerald-800
              "
            />

            <p
              className="
                font-body
                text-clay

                text-xs
                sm:text-sm
                md:text-base
                lg:text-lg

                max-w-[650px]

                leading-relaxed
              "
            >
              Different disciplines. One shared obsession — creating
              digital experiences that are useful, beautiful and built
              to last.
            </p>
          </motion.div>

          {/* Team */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            variants={staggerContainer}
            className="
              grid

              grid-cols-2
              md:grid-cols-3

              gap-3
              sm:gap-5
              md:gap-6
              lg:gap-7

              items-start
            "
          >
            {TEAM.map((person, index) => (
              <motion.div
                key={person.name + index}
                variants={fadeUp}
                className="
                  relative
                  min-w-0
                "
              >
                <TeamCard
                  person={person}
                  index={index}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ================================================= */}
        {/* HOW WE THINK */}
        {/* ================================================= */}

        <section
          className="
            relative
            w-full
            max-w-[1440px]

            px-3
            sm:px-6
            md:px-10
            lg:px-14

            overflow-hidden
          "
        >
          {/* Background */}

          <div
            className="
              absolute
              inset-0

              -z-30

              bg-gradient-to-br
              from-[#F8FCFA]
              via-[#EEF7F3]
              to-[#E4F1EC]
            "
          />

          {/* Aurora */}

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
            className="
              absolute
              -z-20

              -top-[150px]
              -left-[150px]

              w-[500px]
              h-[500px]

              rounded-full

              bg-emerald-300/20

              blur-[100px]

              pointer-events-none
            "
          />

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
            className="
              absolute
              -z-20

              top-0
              -right-[250px]

              w-[600px]
              h-[600px]

              rounded-full

              bg-teal-300/20

              blur-[130px]

              pointer-events-none
            "
          />

          {/* Grid */}

          <motion.div
            animate={{
              backgroundPosition: [
                "0px 0px",
                "70px 70px",
              ],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              inset-0

              -z-10

              opacity-[0.18]

              bg-[linear-gradient(rgba(6,78,59,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(6,78,59,0.04)_1px,transparent_1px)]

              bg-[size:45px_45px]

              sm:bg-[size:55px_55px]

              pointer-events-none
            "
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
            className="
              relative
              z-10

              border-t
              border-hairline

              pt-7
              sm:pt-10
              md:pt-12
              lg:pt-14

              grid
              grid-cols-2
              lg:grid-cols-12

              gap-4
              sm:gap-6
              lg:gap-8
            "
          >
            {/* Left */}

            <motion.div
              variants={fadeUp}
              className="
                col-span-1
                lg:col-span-5
              "
            >
              <p
                className="
                  font-body
                  text-emerald-800

                  text-[8px]
                  sm:text-xs

                  tracking-[1px]

                  uppercase

                  mb-2
                  sm:mb-4
                "
              >
                How We Think
              </p>

              <h2
                className="
                  font-display
                  font-bold

                  text-ink

                  text-[24px]
                  sm:text-5xl
                  md:text-6xl
                  lg:text-[68px]

                  leading-[0.95]

                  tracking-[-1px]
                  sm:tracking-[-2px]

                  break-words
                "
              >
                <TypingText speed={50}>
                  Good technology should feel inevitable.
                </TypingText>
              </h2>
            </motion.div>

            {/* Right */}

            <motion.div
              variants={fadeUp}
              className="
                col-span-1
                lg:col-span-7

                flex
                flex-col
              "
            >
              {PRINCIPLES.map((principle) => (
                <motion.div
                  key={principle.number}
                  whileHover={{
                    x: 6,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    group

                    border-b
                    border-hairline

                    py-3
                    sm:py-4
                    md:py-5
                    lg:py-6

                    grid

                    grid-cols-[20px_1fr]
                    sm:grid-cols-[40px_1fr]

                    gap-2
                    sm:gap-4
                  "
                >
                  <span
                    className="
                      font-body
                      text-emerald-800

                      text-[8px]
                      sm:text-xs
                    "
                  >
                    {principle.number}
                  </span>

                  <div>
                    <h3
                      className="
                        font-display
                        font-semibold

                        text-ink

                        text-xs
                        sm:text-lg
                        md:text-xl
                        lg:text-2xl

                        leading-tight

                        mb-1
                        sm:mb-1.5

                        group-hover:text-emerald-800

                        transition-colors
                      "
                    >
                      {principle.title}
                    </h3>

                    <p
                      className="
                        font-body
                        text-clay

                        text-[9px]
                        sm:text-sm
                        md:text-base

                        leading-[1.45]
                        sm:leading-relaxed
                      "
                    >
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
          className="
            w-full
            max-w-[1440px]

            px-3
            sm:px-6
            md:px-10
            lg:px-14
          "
        >
          <div
            className="
              relative
              overflow-hidden

              rounded-[1.25rem]
              sm:rounded-[1.75rem]

              bg-ink

              px-4
              py-7

              sm:px-8
              sm:py-12

              md:px-12
              md:py-14

              lg:px-16
              lg:py-16
            "
          >
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
              className="
                absolute

                -right-10
                -top-10

                w-40
                h-40

                sm:w-60
                sm:h-60

                rounded-full

                bg-emerald-700

                blur-[60px]
              "
            />

            {/* Desktop Visual */}

            <div
              className="
                absolute

                right-0
                top-0
                bottom-0

                w-[42%]

                hidden
                md:flex

                items-center
                justify-center

                pointer-events-none
              "
            >
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute

                  w-[260px]
                  h-[260px]

                  lg:w-[340px]
                  lg:h-[340px]

                  rounded-full

                  border
                  border-emerald-400/10
                "
              >
                <div
                  className="
                    absolute

                    top-0
                    left-1/2

                    -translate-x-1/2
                    -translate-y-1/2

                    w-3
                    h-3

                    rounded-full

                    bg-emerald-400

                    shadow-[0_0_20px_rgba(52,211,153,0.8)]
                  "
                />
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
                className="
                  absolute

                  w-[200px]
                  h-[200px]

                  lg:w-[270px]
                  lg:h-[270px]

                  rounded-full

                  border
                  border-dashed
                  border-emerald-300/15
                "
              />

              <motion.div
                animate={{
                  scale: [1, 1.18, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="
                  absolute

                  w-20
                  h-20

                  lg:w-28
                  lg:h-28

                  rounded-full

                  bg-emerald-400/10

                  border
                  border-emerald-400/30
                "
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
                className="
                  absolute

                  w-10
                  h-10

                  lg:w-14
                  lg:h-14

                  rounded-full

                  bg-emerald-400/70

                  shadow-[0_0_40px_rgba(52,211,153,0.7)]
                "
              />
            </div>

            {/* Content */}

            <div
              className="
                relative
                z-10

                max-w-[900px]
              "
            >
              <p
                className="
                  font-body

                  text-white/50

                  text-[9px]
                  sm:text-xs

                  tracking-[1px]

                  uppercase

                  mb-2
                  sm:mb-4
                "
              >
                The next chapter
              </p>

              <h2
                className="
                  font-display
                  font-bold

                  text-white

                  text-[34px]
                  sm:text-5xl
                  md:text-6xl
                  lg:text-[72px]

                  leading-[0.95]

                  tracking-[-1px]
                  sm:tracking-[-2px]
                "
              >
                We are still
                <br />

                building what
                <br />

                <span className="text-emerald-400">
                  comes next.
                </span>
              </h2>

              <p
                className="
                  font-body

                  text-white/60

                  text-xs
                  sm:text-sm
                  md:text-base
                  lg:text-lg

                  max-w-[600px]

                  leading-relaxed

                  mt-3
                  sm:mt-5
                "
              >
                New ideas, new technology and new ways of thinking.
                That is what keeps Studio Tech moving forward.
              </p>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}