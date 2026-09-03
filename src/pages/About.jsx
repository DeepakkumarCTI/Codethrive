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
      "rounded-tl-[3rem] rounded-tr-[6rem] rounded-bl-[5rem] rounded-br-[6.5rem]",
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
      "rounded-tl-[6rem] rounded-tr-[3rem] rounded-bl-[6.5rem] rounded-br-[5rem]",
    bio: "A product designer who believes great interfaces should feel natural before they are noticed. Focused on creating clean, meaningful and human-centered experiences.",
    focus: "Product Design",
    experience: "4+ Years",
    education: "Design / Engineering",
    skills: "Figma · UI · UX · Research",
  },

  {
    name: "Alex",
    role: "Software Engineer",
    image: team2,
    offset: "md:translate-y-5",
    shape:
      "rounded-tl-[4rem] rounded-tr-[5rem] rounded-bl-[3rem] rounded-br-[7rem]",
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
// TYPING HEADING
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
      className={`flex flex-col gap-4 ${person.offset} text-[#24332F]`}
    >
      {/* ================================================= */}
      {/* DEVELOPER CARD */}
      {/* ================================================= */}

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
        {/* ================= MAIN GLOW ================= */}

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
            -inset-4
            rounded-[5rem]
            bg-emerald-700/20
            blur-3xl
            pointer-events-none
          "
        />

        {/* ================= HOVER GLOW ================= */}

        <div
          className="
            absolute
            -inset-2
            rounded-[3rem]
            bg-emerald-500/10
            blur-2xl
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-500
            pointer-events-none
          "
        />

        {/* ================= IMAGE CONTAINER ================= */}

        <div
          className={`
            relative
            ${person.shape}
            overflow-hidden
            border
            border-hairline
            bg-[#F3F7F4]
            shadow-[0px_25px_60px_rgba(19,20,15,0.08)]
          `}
        >
          {/* ================= SCANNING LINE ================= */}

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
              shadow-[0_0_12px_rgba(52,211,153,0.5)]
            "
          />

          {/* ================= SOFT GREEN GLOW ================= */}

          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              -top-10
              -right-10
              w-40
              h-40
              rounded-full
              bg-emerald-400/20
              blur-3xl
              z-10
              pointer-events-none
            "
          />

          {/* ================= DEVELOPER IMAGE ================= */}

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
              h-[300px]
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

          {/* ================= IMAGE GRADIENT ================= */}

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

          {/* ================= BACKGROUND CODE ================= */}

          <div
            className="
              absolute
              inset-0
              z-10
              pointer-events-none
              overflow-hidden
              opacity-[0.12]
              font-mono
              text-[9px]
              leading-5
              text-white
              select-none
            "
          >
            <div className="absolute top-5 left-5 rotate-[-5deg]">
              {"<Developer />"}
              <br />
              {"const build = () => {"}
              <br />
              {"  return code;"}
              <br />
              {"};"}
            </div>

            <div className="absolute bottom-20 right-4 rotate-[4deg] text-right">
              {"npm run build"}
              <br />
              {"git commit -m"}
              <br />
              {"deploy();"}
            </div>
          </div>

          {/* ================= DEV BADGE ================= */}

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
              top-4
              left-4
              z-20
              flex
              items-center
              gap-2
              px-3
              py-1.5
              rounded-full
              bg-[#E7F0ED]/90
              backdrop-blur-md
              border
              border-emerald-900/10
              shadow-lg
            "
          >
            <motion.span
              animate={{
                opacity: [1, 0.35, 1],
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="
                w-1.5
                h-1.5
                rounded-full
                bg-emerald-600
              "
            />

            <span
              className="
                font-mono
                text-[8px]
                tracking-[1.5px]
                text-emerald-900/70
              "
            >
              DEV_{String(index + 1).padStart(2, "0")}
            </span>
          </motion.div>

          {/* ================= PLUS / MINUS ================= */}

          <motion.div
            animate={{
              rotate: expanded ? 90 : 0,
            }}
            className="
              absolute
              top-4
              right-4
              z-20
              w-10
              h-10
              rounded-full
              bg-white/90
              backdrop-blur-sm
              flex
              items-center
              justify-center
              text-ink
              shadow-lg
            "
          >
            {expanded ? (
              <Minus size={17} />
            ) : (
              <Plus size={17} />
            )}
          </motion.div>

          {/* ================= CODE ICON ================= */}

          <motion.div
            className="
              absolute
              bottom-5
              right-5
              z-20
              w-10
              h-10
              rounded-xl
              bg-emerald-900/70
              backdrop-blur-md
              border
              border-white/10
              flex
              items-center
              justify-center
              text-emerald-300
              opacity-0
              translate-y-2
              group-hover:opacity-100
              group-hover:translate-y-0
              transition-all
              duration-500
            "
          >
            <Code2
              size={18}
              strokeWidth={1.5}
            />
          </motion.div>

          {/* ================= NAME ================= */}

          <div
            className="
              absolute
              bottom-5
              left-5
              right-5
              z-20
            "
          >
            <p
              className="
                font-body
                text-white/70
                text-[10px]
                tracking-[1.5px]
                uppercase
                mb-1.5
              "
            >
              {person.role}
            </p>

            <h3
              className="
                font-display
                font-semibold
                text-white
                text-2xl
                md:text-3xl
                lg:text-[32px]
                tracking-[-0.8px]
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

      {/* ================================================= */}
      {/* PROFILE DETAILS */}
      {/* ================================================= */}

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
                pt-5
                flex
                flex-col
                gap-5
              "
            >
              {/* Bio */}

              <p
                className="
                  font-body
                  text-clay
                  text-sm
                  md:text-base
                  leading-relaxed
                "
              >
                {person.bio}
              </p>

              {/* Details */}

              <div
                className="
                  grid
                  grid-cols-2
                  gap-y-5
                  gap-x-5
                  border-t
                  border-hairline
                  pt-5
                "
              >
                <div>
                  <p className="font-body text-emerald-800 text-[10px] tracking-[1px] uppercase mb-1">
                    Focus
                  </p>

                  <p className="font-body text-ink text-sm">
                    {person.focus}
                  </p>
                </div>

                <div>
                  <p className="font-body text-emerald-800 text-[10px] tracking-[1px] uppercase mb-1">
                    Experience
                  </p>

                  <p className="font-body text-ink text-sm">
                    {person.experience}
                  </p>
                </div>

                <div>
                  <p className="font-body text-emerald-800 text-[10px] tracking-[1px] uppercase mb-1">
                    Education
                  </p>

                  <p className="font-body text-ink text-sm">
                    {person.education}
                  </p>
                </div>

                <div>
                  <p className="font-body text-emerald-800 text-[10px] tracking-[1px] uppercase mb-1">
                    Skills
                  </p>

                  <p className="font-body text-ink text-sm">
                    {person.skills}
                  </p>
                </div>
              </div>

              {/* Close */}

              <button
                type="button"
                onClick={() => setExpanded(false)}
                className="
                  group
                  flex
                  items-center
                  gap-2
                  w-fit
                  font-body
                  text-xs
                  tracking-[1.2px]
                  uppercase
                  text-clay
                  hover:text-emerald-800
                  transition-colors
                "
              >
                Close profile

                <ArrowDown
                  size={14}
                  className="
                    rotate-180
                    transition-transform
                    group-hover:-translate-y-1
                  "
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

    gap-12
    md:gap-14
    lg:gap-16

    pt-0

    pb-12
    md:pb-16
  "
>
      >
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
    max-w-[1440px]
    mx-auto

    overflow-hidden

    px-3
    sm:px-6
    md:px-10
    lg:px-14

    pt-0
    pb-10
    sm:pb-14
    lg:pb-16

    grid
    grid-cols-2
    lg:grid-cols-12

    gap-3
    sm:gap-6
    lg:gap-8

    items-center
  "
>
  {/* =====================================================
      BACKGROUND IMAGE
  ===================================================== */}

  <div
    className="
      absolute
      inset-0
      z-0
      pointer-events-none
    "
  >
    <img
      src={aboutBg}
      alt=""
      className="
        w-full
        h-full
        object-cover
        object-center
        opacity-[0.16]
      "
    />
  </div>

  {/* =====================================================
      BACKGROUND OVERLAY
  ===================================================== */}

  <div
    className="
      absolute
      inset-0
      z-[1]
      pointer-events-none

      bg-gradient-to-r

      from-white/10
      via-white/5
      to-white/10

      lg:from-white/10
      lg:via-white/5
      lg:to-white/10
    "
  />

  {/* =====================================================
      SOFT BACKGROUND GLOW
  ===================================================== */}

  <motion.div
    animate={{
      scale: [1, 1.08, 1],
      opacity: [0.15, 0.3, 0.15],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      z-[1]
      pointer-events-none

      -top-20
      -left-20

      w-40
      h-40

      sm:w-64
      sm:h-64

      rounded-full
      bg-emerald-200/0
      blur-3xl
    "
  />

  {/* =====================================================
      HERO TEXT
  ===================================================== */}

  <motion.div
    variants={fadeUp}
    className="
      relative
      z-10

      opacity-70

      col-span-1
      lg:col-span-8

      flex
      flex-col

      gap-3
      sm:gap-5
      lg:gap-6
    "
  >
    <h1
      className="
        font-display
        font-bold
        text-ink

        text-[25px]
        sm:text-[46px]
        md:text-[68px]
        lg:text-[82px]
        xl:text-[92px]

        leading-[0.98]

        tracking-[-1.2px]
        sm:tracking-[-2px]
        lg:tracking-[-3px]

        max-w-[900px]
      "
    >
      <TypingText speed={35}>
        Designing the Architecture of tomorrow.
      </TypingText>
    </h1>

    <p
      className="
        font-body
        text-clay

        text-[9px]
        sm:text-base
        md:text-lg
        lg:text-xl

        max-w-[650px]

        leading-[1.5]
        sm:leading-relaxed
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
      z-10

      col-span-1
      lg:col-span-4
    "
  >
    {/* Glow */}

    <motion.div
      animate={{
        scale: [1, 1.06, 1],
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute

        -bottom-6
        -left-6

        w-20
        h-20

        sm:-bottom-10
        sm:-left-10

        sm:w-40
        sm:h-40

        rounded-full

        bg-emerald-100/50

        blur-3xl
      "
    />

    {/* Image */}

    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.4,
      }}
      className="
        relative
        overflow-hidden

        rounded-tl-[1.5rem]
        rounded-tr-[2.5rem]
        rounded-bl-[2rem]
        rounded-br-[2.5rem]

        sm:rounded-tl-[3rem]
        sm:rounded-tr-[6rem]
        sm:rounded-bl-[5rem]
        sm:rounded-br-[6.5rem]

        shadow-[0px_20px_40px_0px_rgba(19,20,15,0.04)]
        sm:shadow-[0px_35px_70px_0px_rgba(19,20,15,0.04)]
      "
    >
      <img
        src={aboutHero}
        alt="Studio Tech architecture inspiration"
        className="
          w-full

          h-[210px]
          sm:h-[300px]
          md:h-[450px]
          lg:h-[500px]

          object-cover
        "
      />
    </motion.div>
  </motion.div>
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

      gap-3
      sm:gap-6
      lg:gap-8

      items-center
    "
  >
    {/* =====================================================
        MISSION IMAGE
    ===================================================== */}

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
          amount: 0.2,
        }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        whileHover={{
          y: -6,
        }}
        className="
          relative

          w-full

          max-w-[145px]
          sm:max-w-[250px]
          md:max-w-[330px]
          lg:max-w-[350px]

          aspect-square

          overflow-hidden

          rounded-[1.25rem]
          sm:rounded-[2rem]
          md:rounded-[2.5rem]

          shadow-[0_15px_35px_rgba(19,20,15,0.06)]
          sm:shadow-[0_25px_60px_rgba(19,20,15,0.08)]

          group
        "
      >
        {/* =================================================
            IMAGE
        ================================================= */}

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

        {/* =================================================
            SOFT IMAGE OVERLAY
        ================================================= */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-t
            from-[#0F5C4D]/30
            via-transparent
            to-white/5

            pointer-events-none
          "
        />

        {/* =================================================
            IMAGE GLOW
        ================================================= */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute

            -bottom-8
            -right-8

            w-24
            h-24

            sm:w-36
            sm:h-36

            rounded-full

            bg-emerald-300/20

            blur-3xl

            pointer-events-none
          "
        />

        {/* =================================================
            IMAGE LABEL
        ================================================= */}

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

              text-[6px]
              sm:text-[9px]
              md:text-[10px]

              tracking-[0.6px]
              sm:tracking-[1px]

              uppercase

              text-white/80
            "
          >
            Our Mission
          </span>

          <span
            className="
              w-5
              h-5

              sm:w-7
              sm:h-7

              rounded-full

              border
              border-white/30

              bg-white/10

              backdrop-blur-sm
            "
          />
        </div>

        {/* =================================================
            IMAGE BORDER
        ================================================= */}

        <div
          className="
            absolute
            inset-0

            rounded-[1.25rem]
            sm:rounded-[2rem]
            md:rounded-[2.5rem]

            border
            border-white/20

            pointer-events-none
          "
        />
      </motion.div>
    </div>

    {/* =====================================================
        MISSION CONTENT
    ===================================================== */}

    <div
      className="
        col-span-1
        lg:col-span-8

        flex
        flex-col

        gap-2.5
        sm:gap-4
        lg:gap-5
      "
    >
      {/* LABEL */}

      <motion.p
        initial={{
          opacity: 0,
          x: -15,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
        }}
        className="
          font-body

          text-emerald-800

          text-[6px]
          sm:text-xs
          md:text-sm

          tracking-[0.8px]
          sm:tracking-[1.2px]

          uppercase
        "
      >
        Our Mission
      </motion.p>

      {/* HEADING */}

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

          max-w-[850px]
        "
      >
        <TypingText speed={30}>
          To blur the lines between physical reality and digital
          capability, creating tools that feel like extensions of
          thought.
        </TypingText>
      </h2>

      {/* SMALL ACCENT */}

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
          delay: 0.2,
        }}
        className="
          mt-1
          sm:mt-2

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

    gap-3
    sm:gap-6
    md:gap-9

    -mb-6
    sm:mb-0
  "
>
  {/* Section Heading */}

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

            text-[32px]
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

        text-[10px]
        sm:text-sm
        md:text-base
        lg:text-lg

        max-w-[650px]

        leading-[1.4]
        sm:leading-relaxed
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
      sm:grid-cols-2
      md:grid-cols-3

      gap-x-3
      gap-y-2

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
        className={`
          relative

          ${
            index % 2 === 1
              ? "translate-y-3 sm:translate-y-0"
              : "translate-y-0"
          }

          md:translate-y-0
        `}
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
  {/* =========================================
      ANIMATED EMERALD BACKGROUND
  ========================================== */}

  {/* Base emerald-tinted background */}
  <div
    className="
      absolute
      inset-0
      -z-20

      bg-gradient-to-br
      from-[#F8FCFA]
      via-[#EEF7F3]
      to-[#E4F1EC]
    "
  />

  {/* Soft Emerald Glow - Top Left */}
  <motion.div
    animate={{
      x: [0, 35, -15, 0],
      y: [0, 20, -15, 0],
      scale: [1, 1.08, 0.96, 1],
      opacity: [0.45, 0.6, 0.4, 0.45],
    }}
    transition={{
      duration: 14,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      -z-10

      top-[-140px]
      left-[-120px]

      sm:top-[-180px]
      sm:left-[-160px]

      md:top-[-220px]
      md:left-[-180px]

      w-[280px]
      h-[280px]

      sm:w-[400px]
      sm:h-[400px]

      md:w-[500px]
      md:h-[500px]

      rounded-full

      bg-emerald-300/[0.10]

      blur-[80px]
      sm:blur-[110px]
      md:blur-[140px]

      pointer-events-none
    "
  />

  {/* Soft Emerald Glow - Right */}
  <motion.div
    animate={{
      x: [0, -30, 20, 0],
      y: [0, 25, -20, 0],
      scale: [1, 0.94, 1.07, 1],
      opacity: [0.35, 0.55, 0.38, 0.35],
    }}
    transition={{
      duration: 17,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      -z-10

      top-[10%]
      right-[-130px]

      sm:right-[-180px]

      md:right-[-220px]

      w-[280px]
      h-[280px]

      sm:w-[420px]
      sm:h-[420px]

      md:w-[560px]
      md:h-[560px]

      rounded-full

      bg-teal-300/[0.08]

      blur-[90px]
      sm:blur-[120px]
      md:blur-[150px]

      pointer-events-none
    "
  />

  {/* Bottom Emerald Glow */}
  <motion.div
    animate={{
      x: [-40, 40, -40],
      scale: [1, 1.08, 1],
      opacity: [0.25, 0.45, 0.25],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      -z-10

      bottom-[-150px]
      left-1/2
      -translate-x-1/2

      w-[300px]
      h-[200px]

      sm:w-[500px]
      sm:h-[280px]

      md:w-[700px]
      md:h-[350px]

      rounded-full

      bg-emerald-400/[0.07]

      blur-[90px]
      sm:blur-[120px]
      md:blur-[150px]

      pointer-events-none
    "
  />

  {/* =========================================
      MOVING GRID
  ========================================== */}

  <motion.div
    animate={{
      backgroundPosition: [
        "0px 0px",
        "45px 45px",
      ],
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
      absolute
      inset-0
      -z-10

      opacity-[0.16]

      bg-[linear-gradient(rgba(6,78,59,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(6,78,59,0.035)_1px,transparent_1px)]

      bg-[size:45px_45px]

      sm:bg-[size:55px_55px]

      md:bg-[size:70px_70px]

      pointer-events-none
    "
  />

  {/* =========================================
      LARGE ROTATING RING - RIGHT
  ========================================== */}

  <motion.div
    animate={{
      rotate: 360,
    }}
    transition={{
      duration: 45,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
      absolute
      -z-10

      top-[15%]
      right-[-160px]

      sm:right-[-210px]

      md:right-[-250px]

      w-[320px]
      h-[320px]

      sm:w-[480px]
      sm:h-[480px]

      md:w-[620px]
      md:h-[620px]

      rounded-full

      border
      border-emerald-800/[0.045]

      pointer-events-none
    "
  >
    <div
      className="
        absolute

        top-1/2
        left-0

        w-2
        h-2

        sm:w-3
        sm:h-3

        rounded-full

        bg-emerald-700/[0.18]

        blur-[1px]
      "
    />
  </motion.div>

  {/* =========================================
      LARGE ROTATING RING - LEFT
  ========================================== */}

  <motion.div
    animate={{
      rotate: -360,
    }}
    transition={{
      duration: 60,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
      absolute
      -z-10

      top-[35%]
      left-[-180px]

      sm:left-[-250px]

      md:left-[-300px]

      w-[360px]
      h-[360px]

      sm:w-[520px]
      sm:h-[520px]

      md:w-[680px]
      md:h-[680px]

      rounded-full

      border
      border-emerald-900/[0.035]

      pointer-events-none
    "
  />

  {/* =========================================
      SMALL FLOATING PARTICLES
  ========================================== */}

  <motion.div
    animate={{
      y: [0, -20, 0],
      x: [0, 10, 0],
      opacity: [0.15, 0.4, 0.15],
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      -z-10

      top-[20%]
      left-[42%]

      w-2
      h-2

      sm:w-3
      sm:h-3

      rounded-full

      bg-emerald-700/[0.18]

      pointer-events-none
    "
  />

  <motion.div
    animate={{
      y: [0, 18, 0],
      x: [0, -12, 0],
      opacity: [0.12, 0.35, 0.12],
    }}
    transition={{
      duration: 9,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1,
    }}
    className="
      absolute
      -z-10

      top-[70%]
      right-[35%]

      w-2
      h-2

      sm:w-3
      sm:h-3

      rounded-full

      bg-teal-700/[0.16]

      pointer-events-none
    "
  />

  <motion.div
    animate={{
      y: [0, -15, 0],
      opacity: [0.1, 0.3, 0.1],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 2,
    }}
    className="
      absolute
      -z-10

      top-[48%]
      left-[65%]

      w-1.5
      h-1.5

      sm:w-2
      sm:h-2

      rounded-full

      bg-emerald-800/[0.18]

      pointer-events-none
    "
  />

  {/* =========================================
      CONTENT
  ========================================== */}

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

      gap-3
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
          sm:tracking-[1.5px]

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

          max-w-[550px]
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

            py-2.5
            sm:py-4
            md:py-5
            lg:py-6

            grid

            grid-cols-[18px_1fr]
            sm:grid-cols-[40px_1fr]

            gap-2
            sm:gap-4

            cursor-default
          "
        >
          {/* Number */}

          <span
            className="
              font-body
              text-emerald-800

              text-[8px]
              sm:text-xs

              tracking-[0.5px]
              sm:tracking-[1px]
            "
          >
            {principle.number}
          </span>

          {/* Content */}

          <div>
            <h3
              className="
                font-display
                font-semibold
                text-ink

                text-[11px]
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

                text-[7px]
                sm:text-sm
                md:text-base

                leading-[1.45]
                sm:leading-relaxed

                max-w-[620px]
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
      py-6

      sm:px-8
      sm:py-12

      md:px-12
      md:py-14

      lg:px-16
      lg:py-16
    "
  >
    {/* Emerald Glow */}

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

        sm:-right-16
        sm:-top-16

        sm:w-60
        sm:h-60

        rounded-full
        bg-emerald-700

        blur-[60px]
        sm:blur-[90px]
      "
    />

    <div
      className="
        relative
        max-w-[900px]
      "
    >
      {/* Label */}

      <p
        className="
          font-body
          text-white/50

          text-[8px]
          sm:text-xs

          tracking-[1px]
          sm:tracking-[1.5px]

          uppercase

          mb-2
          sm:mb-4
        "
      >
        The next chapter
      </p>

      {/* Heading */}

      <h2
        className="
          font-display
          font-bold
          text-white

          text-[30px]
          sm:text-5xl
          md:text-6xl
          lg:text-[72px]

          leading-[0.92]

          tracking-[-1.2px]
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

      {/* Description */}

      <p
        className="
          font-body
          text-white/60

          text-[9px]
          sm:text-sm
          md:text-base
          lg:text-lg

          max-w-[600px]

          leading-[1.4]
          sm:leading-relaxed

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