import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
} from "framer-motion";

import {
  ArrowUpRight,
  Plus,
  Minus,
  Trophy,
  Sparkles,
} from "lucide-react";

import { TypeAnimation } from "react-type-animation";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// =====================================================
// AWARDS DATA
// =====================================================

const AWARDS = [
  {
    year: "2026",
    number: "01",
    title: "Digital Experience Award",
    organization: "Awwwards",
    category: "Web Design",
    description:
      "Recognized for creating a digital experience that combines strong visual direction, intuitive interaction and thoughtful technology.",
    project: "Studio Tech Digital Experience",
    level: "Honorable Mention",
  },

  {
    year: "2025",
    number: "02",
    title: "CSS Design Award",
    organization: "CSS Design Awards",
    category: "Creative Development",
    description:
      "Awarded for an experimental interface that explores the relationship between motion, typography and digital architecture.",
    project: "Architectural Portfolio",
    level: "Special Kudos",
  },

  {
    year: "2025",
    number: "03",
    title: "Best Digital Product",
    organization: "Design Excellence",
    category: "Product Design",
    description:
      "Recognized for transforming a complex product ecosystem into a simple, accessible and engaging digital experience.",
    project: "Product Experience System",
    level: "Winner",
  },

  {
    year: "2024",
    number: "04",
    title: "Creative Web Studio",
    organization: "CSS Winner",
    category: "Studio Website",
    description:
      "Selected for a distinctive studio identity that brings together editorial typography, interaction and modern web technology.",
    project: "Studio Tech Website",
    level: "Special Recognition",
  },

  {
    year: "2024",
    number: "05",
    title: "Innovation in Technology",
    organization: "Digital Awards",
    category: "Technology",
    description:
      "Recognized for developing a technology-driven solution that improves usability while maintaining a strong visual identity.",
    project: "Digital Innovation Platform",
    level: "Finalist",
  },
];

// =====================================================
// STATS
// =====================================================

const STATS = [
  {
    value: "12+",
    label: "Projects",
  },
  {
    value: "08",
    label: "Recognitions",
  },
  {
    value: "05",
    label: "Years Creating",
  },
  {
    value: "10",
    label: "Industries",
  },
];

// =====================================================
// ANIMATION
// =====================================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// =====================================================
// ANIMATED STAT NUMBER
// =====================================================

function AnimatedNumber({ value, index }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.6,
  });

  const finalNumber = value.replace("+", "");

  const sequences = [
    [
      "0",
      70,
      "2",
      70,
      "4",
      70,
      "6",
      70,
      "7",
      70,
      "8",
      70,
      "9",
      70,
      "10",
      70,
      "11",
      70,
      "12+",
    ],

    [
      "0",
      75,
      "1",
      75,
      "2",
      75,
      "3",
      75,
      "4",
      75,
      "5",
      75,
      "6",
      75,
      "7",
      75,
      "8",
    ],

    [
      "0",
      80,
      "9",
      80,
      "3",
      80,
      "7",
      80,
      "1",
      80,
      "8",
      80,
      "4",
      80,
      "6",
      80,
      "2",
      80,
      "05",
    ],

    [
      "0",
      85,
      "8",
      85,
      "3",
      85,
      "9",
      85,
      "1",
      85,
      "6",
      85,
      "2",
      85,
      "7",
      85,
      "04",
    ],
  ];

  return (
    <span
      ref={ref}
      className="inline-block min-w-[75px]"
    >
      {isInView ? (
        <TypeAnimation
          key={`stat-${index}`}
          sequence={
            sequences[index] || [
              "0",
              80,
              finalNumber,
            ]
          }
          speed={100}
          repeat={0}
          cursor={false}
          className="inline-block"
        />
      ) : (
        <span className="opacity-0">0</span>
      )}
    </span>
  );
}

// =====================================================
// AWARD CARD
//
// IMPORTANT:
// Details are now an ABSOLUTE OVERLAY.
// The card height NEVER changes.
// Animation:
// bottom-right -> center/up
// =====================================================

function AwardCard({ award, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      className="
        group
        relative
        w-full
        h-full
      "
    >
      {/* =================================================
          SOFT CARD GLOW
      ================================================= */}

      <motion.div
        animate={{
          opacity: [0.04, 0.12, 0.04],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 4 + index,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -inset-4
          rounded-[2rem]
          bg-emerald-800/20
          blur-3xl
        "
      />

      {/* =================================================
          MAIN CARD
      ================================================= */}

      <motion.div
        whileHover={{
          y: -6,
        }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          h-full
          min-h-[430px]
          sm:min-h-[460px]
          md:min-h-[500px]

          rounded-[1.75rem]

          border
          border-hairline

          bg-white/30

          overflow-hidden
        "
      >
        {/* =================================================
            CARD TOP CONTENT
        ================================================= */}

        <button
          type="button"
          onClick={() =>
            setExpanded((prev) => !prev)
          }
          aria-expanded={expanded}
          className="
            relative
            z-10

            w-full
            h-full
            min-h-[430px]
            sm:min-h-[460px]
            md:min-h-[500px]

            text-left
            cursor-pointer

            p-5
            sm:p-6
            md:p-8

            flex
            flex-col
          "
        >
          {/* =================================================
              NUMBER + YEAR
          ================================================= */}

          <div
            className="
              flex
              items-start
              justify-between
              gap-5
            "
          >
            <span
              className="
                font-display
                text-emerald-800/60
                text-xs
                sm:text-sm
                tracking-[1px]
              "
            >
              {award.number}
            </span>

            <span
              className="
                font-body
                text-clay
                text-[10px]
                sm:text-xs
                tracking-[1.2px]
                uppercase
              "
            >
              {award.year}
            </span>
          </div>

          {/* =================================================
              TROPHY
          ================================================= */}

          <motion.div
            whileHover={{
              rotate: 8,
              scale: 1.08,
            }}
            className="
              mt-8
              sm:mt-10

              mb-6
              sm:mb-7

              w-11
              h-11

              sm:w-12
              sm:h-12

              shrink-0

              rounded-full

              border
              border-hairline

              bg-white

              flex
              items-center
              justify-center

              text-emerald-800

              transition-all
              duration-500

              group-hover:bg-emerald-800
              group-hover:text-white
              group-hover:border-emerald-800
            "
          >
            <Trophy
              size={18}
            />
          </motion.div>

          {/* =================================================
              CATEGORY
          ================================================= */}

          <p
            className="
              font-body
              text-emerald-800

              text-[9px]
              sm:text-[10px]

              tracking-[1.5px]

              uppercase

              mb-2
              sm:mb-3
            "
          >
            {award.category}
          </p>

          {/* =================================================
              TITLE
          ================================================= */}

          <h3
            className="
              font-display
              font-semibold
              text-ink

              text-xl
              sm:text-2xl
              md:text-3xl

              leading-tight

              tracking-[-0.6px]
              sm:tracking-[-0.8px]

              pr-4

              group-hover:text-emerald-800

              transition-colors
              duration-300
            "
          >
            {award.title}
          </h3>

          {/* =================================================
              ORGANIZATION
          ================================================= */}

          <p
            className="
              font-body
              text-clay

              text-xs
              sm:text-sm

              mt-3
            "
          >
            {award.organization}
          </p>

          {/* =================================================
              SPACER
          ================================================= */}

          <div className="flex-1" />

          {/* =================================================
              VIEW DETAILS
          ================================================= */}

          <div
            className="
              mt-7
              pt-5

              border-t
              border-hairline

              flex
              items-center
              justify-between
              gap-3
            "
          >
            <span
              className="
                font-body
                text-[9px]
                sm:text-xs

                tracking-[1px]

                uppercase

                text-clay
              "
            >
              {expanded
                ? "Close details"
                : "View details"}
            </span>

            {/* =================================================
                PLUS / MINUS BUTTON
            ================================================= */}

            <motion.span
              animate={{
                rotate: expanded ? 45 : 0,
                scale: expanded ? 1.05 : 1,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                shrink-0

                w-9
                h-9

                rounded-full

                border
                border-hairline

                flex
                items-center
                justify-center

                text-ink

                bg-white/40

                transition-colors
                duration-300

                group-hover:border-emerald-700/30
                group-hover:text-emerald-800
              "
            >
              {expanded ? (
                <Minus size={15} />
              ) : (
                <Plus size={15} />
              )}
            </motion.span>
          </div>
        </button>

        {/* =================================================
            EXPANDED DETAILS OVERLAY

            IMPORTANT:
            No height animation.
            No layout animation.

            It sits ABOVE the card and enters
            from the bottom-right corner.
        ================================================= */}

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{
                opacity: 0,
                x: 55,
                y: 55,
                scale: 0.88,
                transformOrigin: "100% 100%",
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                x: 55,
                y: 55,
                scale: 0.88,
                transformOrigin: "100% 100%",
              }}
              transition={{
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                absolute
                inset-0

                z-50

                overflow-hidden

                rounded-[1.7rem]

                bg-[#EAF4F0]/[0.98]

                backdrop-blur-xl

                border
                border-emerald-800/[0.10]

                shadow-[0_25px_70px_rgba(6,78,59,0.15)]
              "
            >
              {/* =================================================
                  OVERLAY GLOW
              ================================================= */}

              <motion.div
                animate={{
                  scale: [1, 1.12, 1],
                  opacity: [0.08, 0.16, 0.08],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute

                  -right-20
                  -top-20

                  w-48
                  h-48

                  rounded-full

                  bg-emerald-400/10

                  blur-[55px]

                  pointer-events-none
                "
              />

              {/* =================================================
                  OVERLAY GRID
              ================================================= */}

              <div
                className="
                  absolute
                  inset-0

                  opacity-[0.10]

                  pointer-events-none

                  bg-[linear-gradient(rgba(6,78,59,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(6,78,59,0.04)_1px,transparent_1px)]

                  bg-[size:40px_40px]
                "
              />

              {/* =================================================
                  DETAILS CONTENT
              ================================================= */}

              <div
                className="
                  relative
                  z-10

                  h-full

                  overflow-y-auto

                  p-5
                  sm:p-6
                  md:p-8

                  flex
                  flex-col
                "
              >
                {/* =================================================
                    TOP BAR
                ================================================= */}

                <div
                  className="
                    flex
                    items-start
                    justify-between
                    gap-4
                  "
                >
                  <div>
                    <p
                      className="
                        font-body
                        text-emerald-800

                        text-[9px]
                        sm:text-[10px]

                        tracking-[1.5px]

                        uppercase

                        mb-2
                      "
                    >
                      {award.number} · {award.year}
                    </p>

                    <p
                      className="
                        font-body
                        text-clay

                        text-[10px]
                        sm:text-xs

                        tracking-[1px]

                        uppercase
                      "
                    >
                      {award.category}
                    </p>
                  </div>

                  {/* =================================================
                      CLOSE BUTTON
                  ================================================= */}

                  <motion.button
                    type="button"
                    onClick={() =>
                      setExpanded(false)
                    }
                    whileHover={{
                      scale: 1.08,
                      rotate: 90,
                    }}
                    whileTap={{
                      scale: 0.94,
                    }}
                    className="
                      shrink-0

                      w-9
                      h-9

                      rounded-full

                      border
                      border-emerald-800/[0.12]

                      bg-white/60

                      flex
                      items-center
                      justify-center

                      text-ink

                      hover:bg-white
                      hover:text-emerald-800

                      transition-colors
                      duration-300
                    "
                    aria-label="Close award details"
                  >
                    <Minus
                      size={15}
                    />
                  </motion.button>
                </div>

                {/* =================================================
                    SMALL DIVIDER
                ================================================= */}

                <motion.div
                  initial={{
                    width: 0,
                  }}
                  animate={{
                    width: "42px",
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15,
                  }}
                  className="
                    h-[2px]

                    bg-emerald-800/60

                    mt-6
                    sm:mt-7
                  "
                />

                {/* =================================================
                    TITLE
                ================================================= */}

                <h3
                  className="
                    font-display
                    font-semibold
                    text-ink

                    text-2xl
                    sm:text-3xl

                    leading-tight

                    tracking-[-0.8px]

                    mt-5
                    sm:mt-6
                  "
                >
                  {award.title}
                </h3>

                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                <p
                  className="
                    font-body
                    text-clay

                    text-xs
                    sm:text-sm
                    md:text-base

                    leading-[1.7]

                    mt-5
                    sm:mt-6
                  "
                >
                  {award.description}
                </p>

                {/* =================================================
                    PROJECT
                ================================================= */}

                <div
                  className="
                    mt-7
                    sm:mt-8

                    pt-5
                    sm:pt-6

                    border-t
                    border-hairline
                  "
                >
                  <p
                    className="
                      font-body
                      text-emerald-800

                      text-[9px]
                      sm:text-xs

                      tracking-[1.5px]

                      uppercase

                      mb-2
                    "
                  >
                    Project
                  </p>

                  <p
                    className="
                      font-display
                      font-semibold
                      text-ink

                      text-base
                      sm:text-lg
                      md:text-xl

                      leading-snug
                    "
                  >
                    {award.project}
                  </p>
                </div>

                {/* =================================================
                    RECOGNITION
                ================================================= */}

                <div
                  className="
                    mt-6
                    sm:mt-7
                  "
                >
                  <p
                    className="
                      font-body
                      text-emerald-800

                      text-[9px]
                      sm:text-xs

                      tracking-[1.5px]

                      uppercase

                      mb-2
                    "
                  >
                    Recognition
                  </p>

                  <p
                    className="
                      font-display
                      font-semibold
                      text-ink

                      text-base
                      sm:text-lg
                      md:text-xl

                      leading-snug
                    "
                  >
                    {award.level}
                  </p>
                </div>

                {/* =================================================
                    BOTTOM SPACER
                ================================================= */}

                <div className="flex-1 min-h-5" />

                {/* =================================================
                    BOTTOM INDICATOR
                ================================================= */}

                <div
                  className="
                    flex
                    items-center
                    gap-2

                    pt-4
                  "
                >
                  <span
                    className="
                      w-1.5
                      h-1.5

                      rounded-full

                      bg-emerald-700/50
                    "
                  />

                  <span
                    className="
                      font-body
                      text-[9px]
                      sm:text-[10px]

                      tracking-[1px]

                      uppercase

                      text-clay
                    "
                  >
                    Recognition details
                  </span>
                </div>
              </div>

              {/* =================================================
                  BOTTOM ACCENT
              ================================================= */}

              <motion.div
                initial={{
                  width: "20%",
                }}
                animate={{
                  width: "65%",
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  absolute

                  bottom-0
                  left-0

                  h-[2px]

                  bg-gradient-to-r
                  from-emerald-700/60
                  via-teal-500/40
                  to-transparent
                "
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

// =====================================================
// AWARDS PAGE
// =====================================================

export default function Awards() {

  const [activeAward, setActiveAward] = useState(null);
  return (
    <div
      className="
        bg-sand

        w-full
        min-h-screen

        overflow-hidden
      "
    >
      <Navbar />

      
<main
  className="
    flex
    flex-col
    items-center

    gap-0

    pt-0
    pb-0

    m-0
    p-0
  "
>




        {/* =================================================
            HERO
        ================================================= */}

      
<motion.section
  initial="hidden"
  animate="visible"
  variants={stagger}
  className="
    relative
    w-full
    min-h-screen
    overflow-hidden
    flex
    items-center
    bg-[#071714]
    m-0
    p-0
  "
>
  {/* =================================================
      BACKGROUND VIDEO
  ================================================= */}
  <video
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
    className="
      absolute
      inset-0
      w-full
      h-full
      object-cover
      pointer-events-none
      select-none
      scale-[1.04]
      opacity-[0.72]
    "
  >
    <source
      src="/videos/awards.mp4"
      type="video/mp4"
    />
  </video>

  {/* =================================================
      DARK OVERLAY
  ================================================= */}
  <div
    className="
      absolute
      inset-0
      pointer-events-none
      bg-black/30
    "
  />

  {/* =================================================
      LEFT TEXT PROTECTION
  ================================================= */}
  <div
    className="
      absolute
      inset-0
      pointer-events-none
      bg-gradient-to-r
      from-[#03110E]/95
      via-[#03110E]/75
      via-[55%]
      to-[#03110E]/10
    "
  />

  {/* =================================================
      BOTTOM DARK GRADIENT
  ================================================= */}
  <div
    className="
      absolute
      inset-x-0
      bottom-0
      h-[35%]
      pointer-events-none
      bg-gradient-to-t
      from-[#03110E]/75
      to-transparent
    "
  />

  {/* =================================================
      GREEN ATMOSPHERIC GLOW
  ================================================= */}
  <motion.div
    animate={{
      scale: [1, 1.12, 1],
      opacity: [0.15, 0.24, 0.15],
      x: [0, 20, 0],
      y: [0, -15, 0],
    }}
    transition={{
      duration: 9,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      right-[-120px]
      top-[5%]
      w-[420px]
      h-[420px]
      sm:w-[520px]
      sm:h-[520px]
      md:w-[700px]
      md:h-[700px]
      rounded-full
      bg-emerald-500/[0.08]
      blur-[100px]
      pointer-events-none
    "
  />

  {/* =================================================
      SECOND SOFT GLOW
  ================================================= */}
  <motion.div
    animate={{
      scale: [1, 1.08, 1],
      opacity: [0.06, 0.13, 0.06],
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      left-[-180px]
      bottom-[-180px]
      w-[420px]
      h-[420px]
      sm:w-[520px]
      sm:h-[520px]
      rounded-full
      bg-emerald-400/[0.10]
      blur-[100px]
      pointer-events-none
    "
  />

  {/* =================================================
      ANIMATED HORIZONTAL LIGHT
  ================================================= */}
  <motion.div
    animate={{
      x: ["-20%", "120%"],
      opacity: [0, 0.18, 0],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
      absolute
      top-[28%]
      left-0
      w-[240px]
      sm:w-[360px]
      md:w-[500px]
      h-px
      bg-gradient-to-r
      from-transparent
      via-emerald-300/40
      to-transparent
      blur-[1px]
      pointer-events-none
    "
  />

  {/* =================================================
      HERO CONTENT
  ================================================= */}
  <div
    className="
      relative
      z-10
      w-full
      px-5
      sm:px-8
      md:px-12
      lg:px-16
      xl:px-20
      py-16
      sm:py-20
      md:py-24
      lg:py-28
    "
  >
    <div className="max-w-[820px]">

      {/* =================================================
          EYEBROW
      ================================================= */}
      <motion.div
        variants={fadeUp}
        className="
          flex
          items-center
          gap-3
          mb-4
          sm:mb-5
          md:mb-6
        "
      >
        <motion.span
          animate={{
            scale: [1, 1.35, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            w-2
            h-2
            rounded-full
            bg-emerald-400
            shadow-[0_0_12px_rgba(52,211,153,0.45)]
          "
        />

        <span
          className="
            font-body
            text-emerald-300
            text-[9px]
            sm:text-[11px]
            md:text-xs
            tracking-[3px]
            uppercase
          "
        >
          Recognition & Craft
        </span>
      </motion.div>

      {/* =================================================
          HERO HEADING
      ================================================= */}
      <motion.h1
        variants={fadeUp}
        className="
          font-display
          font-bold
          text-white
          text-[46px]
          sm:text-[64px]
          md:text-[82px]
          lg:text-[100px]
          xl:text-[112px]
          leading-[0.9]
          tracking-[-2.5px]
          sm:tracking-[-3px]
          md:tracking-[-4px]
          lg:tracking-[-5px]
        "
      >
        <TypeAnimation
          sequence={[
            "Work",
            300,
            "Work worth",
            450,
            "Work worth.",
            300,
            "Work worth",
            250,
            "Work worth",
          ]}
          wrapper="span"
          speed={45}
          repeat={0}
          cursor={false}
        />

        <br />

        <motion.span
          animate={{
            opacity: [0.72, 1, 0.72],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            font-normal
            text-emerald-300
            drop-shadow-[0_0_25px_rgba(52,211,153,0.12)]
          "
        >
          remembering.
        </motion.span>
      </motion.h1>

      {/* =================================================
          DESCRIPTION
      ================================================= */}
      <motion.p
        variants={fadeUp}
        className="
          mt-6
          sm:mt-7
          md:mt-8
          max-w-[540px]
          font-body
          text-white/65
          text-sm
          sm:text-base
          md:text-lg
          leading-[1.7]
        "
      >
        Awards are not the reason we create.
        <br className="hidden sm:block" />

        They are simply a reflection of the
        <br className="hidden sm:block" />

        care, curiosity and craft we bring to
        <br className="hidden sm:block" />

        every project.
      </motion.p>

      {/* =================================================
          EXPLORE
      ================================================= */}
      <motion.div
        variants={fadeUp}
        className="
          flex
          items-center
          gap-4
          mt-7
          sm:mt-9
          md:mt-10
        "
      >
        <motion.div
          animate={{
            y: [0, 7, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            relative
            w-11
            h-11
            sm:w-12
            sm:h-12
            rounded-full
            border
            border-white/20
            bg-white/[0.06]
            backdrop-blur-md
            flex
            items-center
            justify-center
            shadow-[0_0_25px_rgba(52,211,153,0.08)]
          "
        >
          <motion.span
            animate={{
              y: [0, 4, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              text-emerald-300
              text-lg
            "
          >
            ↓
          </motion.span>
        </motion.div>

        <span
          className="
            font-body
            text-white/50
            text-[9px]
            sm:text-[10px]
            md:text-xs
            tracking-[2px]
            uppercase
          "
        >
          Explore our recognition
        </span>
      </motion.div>

    </div>
  </div>

  {/* =================================================
      TOP RIGHT DECORATIVE RING
  ================================================= */}
  <motion.div
    animate={{
      rotate: 360,
    }}
    transition={{
      duration: 30,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
      absolute
      right-[-120px]
      sm:right-[-100px]
      md:right-[-150px]
      top-[12%]
      w-[260px]
      h-[260px]
      sm:w-[340px]
      sm:h-[340px]
      md:w-[480px]
      md:h-[480px]
      rounded-full
      border
      border-emerald-300/[0.08]
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
        rounded-full
        bg-emerald-300/40
        shadow-[0_0_15px_rgba(52,211,153,0.25)]
      "
    />
  </motion.div>

  {/* =================================================
      FLOATING DOTS
  ================================================= */}
  <motion.div
    animate={{
      y: [0, -15, 0],
      opacity: [0.25, 0.6, 0.25],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      right-[12%]
      bottom-[18%]
      w-2
      h-2
      rounded-full
      bg-emerald-300/50
      shadow-[0_0_15px_rgba(52,211,153,0.3)]
      pointer-events-none
    "
  />

  <motion.div
    animate={{
      y: [0, 12, 0],
      opacity: [0.15, 0.45, 0.15],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1,
    }}
    className="
      absolute
      right-[25%]
      top-[22%]
      w-1.5
      h-1.5
      rounded-full
      bg-emerald-300/40
      pointer-events-none
    "
  />

  {/* =================================================
      BOTTOM EDGE GLOW
  ================================================= */}
  <motion.div
    animate={{
      opacity: [0.2, 0.5, 0.2],
      scaleX: [0.9, 1, 0.9],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      bottom-0
      left-[8%]
      right-[8%]
      h-px
      bg-gradient-to-r
      from-transparent
      via-emerald-400/25
      to-transparent
      pointer-events-none
    "
  />
</motion.section>



        {/* =================================================
            STATS / IMPACT
        ================================================= */}
{/* =========================================================
    IMPACT / STATS SECTION
========================================================= */}

<motion.section
  initial={{
    opacity: 0,
  }}
  whileInView={{
    opacity: 1,
  }}
  viewport={{
    once: true,
    amount: 0.1,
  }}
  transition={{
    duration: 0.8,
  }}
  className="
    relative
    w-full
    overflow-hidden

    py-14
    sm:py-16
    md:py-24

    bg-gradient-to-br
    from-[#F8FCFA]
    via-[#EDF7F3]
    to-[#E2F0EB]
  "
>
  {/* =================================================
      TOP RIGHT GLOW
  ================================================= */}

  <motion.div
    animate={{
      x: [0, 25, 0],
      y: [0, -20, 0],
      scale: [1, 1.08, 1],
      opacity: [0.35, 0.55, 0.35],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      pointer-events-none

      -top-40
      -right-40

      sm:-top-48
      sm:-right-48

      md:-top-64
      md:-right-64

      w-[300px]
      h-[300px]

      sm:w-[420px]
      sm:h-[420px]

      md:w-[600px]
      md:h-[600px]

      rounded-full

      bg-emerald-400/[0.10]

      blur-[100px]
    "
  />

  {/* =================================================
      BOTTOM LEFT GLOW
  ================================================= */}

  <motion.div
    animate={{
      x: [0, -20, 0],
      y: [0, 15, 0],
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
      pointer-events-none

      -bottom-40
      -left-40

      sm:-bottom-52
      sm:-left-52

      md:-bottom-64
      md:-left-64

      w-[320px]
      h-[320px]

      sm:w-[440px]
      sm:h-[440px]

      md:w-[600px]
      md:h-[600px]

      rounded-full

      bg-teal-400/[0.08]

      blur-[110px]
    "
  />

  {/* =================================================
      CENTER GLOW
  ================================================= */}

  <motion.div
    animate={{
      scale: [1, 1.15, 1],
      opacity: [0.08, 0.16, 0.08],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      pointer-events-none

      top-[45%]
      left-1/2

      w-[240px]
      h-[240px]

      sm:w-[340px]
      sm:h-[340px]

      md:w-[480px]
      md:h-[480px]

      rounded-full

      bg-emerald-300/[0.08]

      blur-[100px]

      -translate-x-1/2
      -translate-y-1/2
    "
  />

  {/* =================================================
      BACKGROUND GRID
  ================================================= */}

  <div
    className="
      absolute
      inset-0

      pointer-events-none

      opacity-[0.22]

      bg-[linear-gradient(rgba(6,78,59,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(6,78,59,0.035)_1px,transparent_1px)]

      bg-[size:55px_55px]
    "
  />

  {/* =================================================
      ROTATING CIRCLE
  ================================================= */}

  <motion.div
    animate={{
      rotate: 360,
    }}
    transition={{
      duration: 35,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
      absolute
      pointer-events-none

      right-[-100px]
      top-[18%]

      w-[220px]
      h-[220px]

      sm:w-[300px]
      sm:h-[300px]

      md:w-[420px]
      md:h-[420px]

      rounded-full

      border
      border-emerald-800/[0.06]
    "
  >
    <motion.span
      animate={{
        scale: [1, 1.4, 1],
        opacity: [0.2, 0.5, 0.2],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute

        top-[10%]
        left-1/2

        w-2
        h-2

        rounded-full

        bg-emerald-700/30

        shadow-[0_0_15px_rgba(6,78,59,0.2)]
      "
    />
  </motion.div>

  {/* =================================================
      CONTENT CONTAINER
      Background remains full width,
      content stays max 1440px.
  ================================================= */}

  <div
    className="
      relative
      z-20

      w-full
      max-w-[1440px]

      mx-auto

      px-3
      sm:px-6
      md:px-20
    "
  >
    {/* =================================================
        HEADING
    ================================================= */}

    <motion.div
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        flex
        flex-col

        md:flex-row
        md:items-end
        md:justify-between

        gap-5
        sm:gap-7

        mb-10
        sm:mb-14
        md:mb-16
      "
    >
      <div>
        {/* LABEL */}

        <motion.p
          initial={{
            opacity: 0,
            x: -20,
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

            text-[10px]
            sm:text-xs
            md:text-sm

            tracking-[2px]

            uppercase

            mb-3
            sm:mb-4
          "
        >
          By The Numbers
        </motion.p>

        {/* HEADING */}

        <h2
          className="
            font-display
            font-bold
            text-ink

            text-[38px]
            sm:text-5xl
            md:text-6xl
            lg:text-[78px]

            leading-[0.9]

            tracking-[-2px]
            sm:tracking-[-3px]
          "
        >
          Impact in
          <br />

          <motion.span
            animate={{
              opacity: [0.75, 1, 0.75],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              font-normal
              text-emerald-800
            "
          >
            numbers.
          </motion.span>
        </h2>
      </div>

      {/* DESCRIPTION */}

      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
          delay: 0.2,
        }}
        className="
          font-body
          text-clay

          text-[12px]
          sm:text-base
          md:text-lg

          max-w-[420px]

          leading-relaxed
        "
      >
        Every project, recognition and collaboration
        adds another chapter to the work we create
        together.
      </motion.p>
    </motion.div>

    {/* =================================================
        STATS
    ================================================= */}

    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      transition={{
        duration: 0.9,
        delay: 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        relative

        border-y
        border-emerald-900/[0.10]

        grid
        grid-cols-2
        lg:grid-cols-4

        bg-white/[0.28]

        backdrop-blur-sm

        shadow-[0_20px_60px_rgba(6,78,59,0.05)]
      "
    >
      {STATS.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.65,
            delay: 0.2 + index * 0.12,
            ease: [0.16, 1, 0.3, 1],
          }}
          whileHover={{
            y: -5,
            backgroundColor: "rgba(255,255,255,0.45)",
          }}
          className={`
            relative
            overflow-hidden
            group

            cursor-default

            p-5
            sm:p-7
            md:p-10
            lg:p-12

            border-emerald-900/[0.08]

            ${index < 3 ? "border-r" : ""}

            ${index < 2
              ? "border-b lg:border-b-0"
              : ""}

            ${index === 2
              ? "border-b lg:border-b-0"
              : ""}

            ${index === 1
              ? "lg:border-r"
              : ""}

            ${index === 3
              ? "border-r-0"
              : ""}
          `}
        >
          {/* GLOW */}

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.08, 0.16, 0.08],
            }}
            transition={{
              duration: 5 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none

              absolute

              -right-10
              -top-10

              w-32
              h-32

              rounded-full

              bg-emerald-400/[0.08]

              blur-3xl
            "
          />

          {/* CORNER DOT */}

          <motion.span
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.45, 0.2],
            }}
            transition={{
              duration: 3 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute

              top-5
              right-5

              w-1.5
              h-1.5

              rounded-full

              bg-emerald-700/30
            "
          />

          {/* NUMBER */}

          <div
            className="
              relative
              z-10
            "
          >
            <p
              className="
                font-display
                font-bold
                text-ink

                text-[42px]
                sm:text-6xl
                md:text-7xl
                lg:text-[76px]

                leading-none

                tracking-[-2px]
                sm:tracking-[-3px]
              "
            >
              <AnimatedNumber
                value={stat.value}
                index={index}
              />
            </p>

            {/* LABEL */}

            <p
              className="
                font-body
                text-emerald-800

                text-[9px]
                sm:text-xs
                md:text-sm

                tracking-[1px]
                sm:tracking-[1.5px]

                uppercase

                mt-4
                sm:mt-5

                transition-transform
                duration-300

                group-hover:translate-x-1
              "
            >
              {stat.label}
            </p>

            {/* LINE */}

            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: "32px",
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.45 + index * 0.12,
              }}
              className="
                h-[2px]

                bg-emerald-800/60

                mt-4
                sm:mt-5
              "
            />
          </div>

          {/* MOVING LIGHT */}

          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
              delay: index * 0.5,
            }}
            className="
              absolute

              bottom-0
              left-0

              w-[80px]

              h-px

              bg-gradient-to-r
              from-transparent
              via-emerald-500/25
              to-transparent

              pointer-events-none
            "
          />
        </motion.div>
      ))}
    </motion.div>
  </div>

  {/* =================================================
      BOTTOM GLOW
  ================================================= */}

  <motion.div
    animate={{
      opacity: [0.15, 0.4, 0.15],
      scaleX: [0.85, 1, 0.85],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute

      bottom-0
      left-[8%]
      right-[8%]

      h-px

      bg-gradient-to-r
      from-transparent
      via-emerald-600/25
      to-transparent

      pointer-events-none
    "
  />
</motion.section>


{/* =========================================================
    AWARDS / RECOGNITION SECTION
========================================================= */}

<section
  className="
    relative
    w-full
    overflow-hidden

    py-8
    sm:py-10
    md:py-14
    lg:py-16

    bg-gradient-to-br
    from-[#F8FCFA]
    via-[#F1F7F4]
    to-[#E8F1ED]
  "
>
  {/* =================================================
      TOP RIGHT GLOW
  ================================================= */}

  <motion.div
    animate={{
      x: [0, 30, 0],
      y: [0, -20, 0],
      scale: [1, 1.08, 1],
      opacity: [0.16, 0.25, 0.16],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      pointer-events-none

      -top-40
      -right-40

      sm:-top-48
      sm:-right-48

      md:-top-60
      md:-right-60

      w-[240px]
      h-[240px]

      sm:w-[360px]
      sm:h-[360px]

      md:w-[500px]
      md:h-[500px]

      rounded-full

      bg-emerald-400/[0.06]

      blur-[70px]
      sm:blur-[90px]
    "
  />

  {/* =================================================
      BOTTOM LEFT GLOW
  ================================================= */}

  <motion.div
    animate={{
      x: [0, -20, 0],
      y: [0, 20, 0],
      scale: [1, 1.1, 1],
      opacity: [0.10, 0.20, 0.10],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      pointer-events-none

      -bottom-40
      -left-40

      sm:-bottom-48
      sm:-left-48

      w-[250px]
      h-[250px]

      sm:w-[400px]
      sm:h-[400px]

      rounded-full

      bg-teal-400/[0.05]

      blur-[70px]
      sm:blur-[90px]
    "
  />

  {/* =================================================
      CENTER GLOW
  ================================================= */}

  <motion.div
    animate={{
      scale: [1, 1.08, 1],
      opacity: [0.04, 0.09, 0.04],
    }}
    transition={{
      duration: 9,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      pointer-events-none

      top-[42%]
      left-1/2

      -translate-x-1/2
      -translate-y-1/2

      w-[180px]
      h-[180px]

      sm:w-[300px]
      sm:h-[300px]

      md:w-[450px]
      md:h-[450px]

      rounded-full

      bg-emerald-300/[0.04]

      blur-[80px]
    "
  />

  {/* =================================================
      SUBTLE GRID
  ================================================= */}

  <div
    className="
      absolute
      inset-0
      pointer-events-none

      opacity-[0.10]

      bg-[linear-gradient(rgba(6,78,59,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(6,78,59,0.035)_1px,transparent_1px)]

      bg-[size:45px_45px]
      sm:bg-[size:60px_60px]
    "
  />

  {/* =================================================
      CONTENT CONTAINER
  ================================================= */}

  <motion.div
    initial={{
      opacity: 0,
    }}
    whileInView={{
      opacity: 1,
    }}
    viewport={{
      once: true,
      amount: 0.1,
    }}
    transition={{
      duration: 0.8,
    }}
    className="
      relative
      z-10

      w-full
      max-w-[1440px]

      mx-auto

      px-3
      sm:px-6
      md:px-12
      lg:px-16
    "
  >
    {/* =================================================
        SECTION HEADING
    ================================================= */}

    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        mb-7
        sm:mb-9
        md:mb-11
      "
    >
      {/* SMALL LABEL */}

      <motion.div
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
          flex
          items-center
          gap-2
          mb-3
        "
      >
        <span
          className="
            w-5
            sm:w-7
            h-px

            bg-emerald-700/40
          "
        />

        <span
          className="
            font-body
            text-emerald-800

            text-[8px]
            sm:text-[10px]
            md:text-xs

            tracking-[1.5px]
            md:tracking-[2px]

            uppercase
          "
        >
          Recognition
        </span>
      </motion.div>

      {/* HEADING + DESCRIPTION */}

      <div
        className="
          flex
          flex-col

          md:flex-row
          md:items-end
          md:justify-between

          gap-4
          md:gap-8
        "
      >
        <h2
          className="
            font-display
            font-bold
            text-ink

            text-[30px]
            sm:text-4xl
            md:text-5xl
            lg:text-6xl

            tracking-[-1.5px]
            sm:tracking-[-2px]

            leading-[0.95]
          "
        >
          Recognition
          <br className="sm:hidden" />

          <span className="text-emerald-800/80">
            {" "}That Matters.
          </span>
        </h2>

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="
            font-body
            text-clay

            text-[10px]
            sm:text-xs
            md:text-sm
            lg:text-base

            max-w-[390px]

            leading-relaxed
          "
        >
          A collection of awards and milestones that
          reflect our commitment to thoughtful design,
          technology, and meaningful digital experiences.
        </motion.p>
      </div>

      {/* HEADING ACCENT */}

      <motion.div
        initial={{
          width: 0,
          opacity: 0,
        }}
        whileInView={{
          width: "60px",
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
          delay: 0.25,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          mt-4
          sm:mt-5

          h-[2px]

          bg-gradient-to-r
          from-emerald-700/60
          via-teal-500/35
          to-transparent
        "
      />
    </motion.div>

    {/* =================================================
        AWARDS GRID
    ================================================= */}

    <div
      className="
        grid

        grid-cols-2
        sm:grid-cols-2
        lg:grid-cols-3

        gap-2.5
        sm:gap-4
        md:gap-5

        items-stretch
      "
    >
      {AWARDS.map((award, index) => {
        const isActive = activeAward === award.number;

        return (
          <motion.div
            key={award.number}
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.98,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.07,
              ease: [0.16, 1, 0.3, 1],
            }}
            onClick={() =>
              setActiveAward(
                isActive ? null : award.number
              )
            }
            className="
              relative
              w-full
              group
              cursor-pointer

              rounded-xl
              sm:rounded-2xl

              p-[1.5px]

              overflow-hidden

              shadow-[0_8px_25px_rgba(6,78,59,0.07)]

              transition-all
              duration-500

              hover:-translate-y-1

              hover:shadow-[0_15px_40px_rgba(6,78,59,0.12)]
            "
          >
            {/* =================================================
                CONTINUOUS ANIMATED BORDER
            ================================================= */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                inset-[-150%]

                pointer-events-none

                bg-[conic-gradient(from_0deg,transparent_0deg,transparent_250deg,rgba(6,78,59,0.08)_275deg,rgba(16,185,129,0.60)_315deg,rgba(45,212,191,1)_335deg,rgba(6,78,59,0.12)_350deg,transparent_360deg)]
              "
            />

            {/* STATIC BORDER */}

            <div
              className="
                absolute
                inset-0

                rounded-xl
                sm:rounded-2xl

                border
                border-emerald-900/15

                pointer-events-none
              "
            />

            {/* =================================================
                CARD BODY
            ================================================= */}

            <motion.div
              layout
              className="
                relative
                z-10

                w-full

                min-h-[165px]
                sm:min-h-[185px]
                md:min-h-[205px]

                rounded-[10px]
                sm:rounded-[14px]

                overflow-hidden

                bg-[#F9FCFA]

                border
                border-white

                transition-all
                duration-500

                group-hover:bg-white
              "
            >
              {/* ACTIVE GLOW */}

              <motion.div
                animate={{
                  opacity: isActive ? 0.14 : 0.04,
                  scale: isActive ? 1.15 : 1,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="
                  absolute

                  -top-16
                  -right-16

                  w-36
                  h-36

                  rounded-full

                  bg-emerald-400

                  blur-[50px]

                  pointer-events-none
                "
              />

              {/* TOP SHINE */}

              <div
                className="
                  absolute
                  top-0
                  left-0
                  right-0

                  h-px

                  bg-gradient-to-r
                  from-transparent
                  via-emerald-500/40
                  to-transparent

                  pointer-events-none
                "
              />

              {/* DECORATIVE CORNER */}

              <div
                className="
                  absolute

                  top-3
                  right-3

                  sm:top-4
                  sm:right-4

                  w-6
                  h-6

                  sm:w-7
                  sm:h-7

                  border-t
                  border-r

                  border-emerald-700/15

                  rounded-tr-md

                  pointer-events-none
                "
              />

              {/* =================================================
                  CARD CONTENT
              ================================================= */}

              <motion.div
                layout
                className="
                  relative
                  z-20

                  w-full

                  min-h-[165px]
                  sm:min-h-[185px]
                  md:min-h-[205px]

                  flex
                  items-center
                  justify-center

                  px-3
                  sm:px-4
                  md:px-5

                  py-4
                  sm:py-5
                "
              >
                {/* =================================================
                    NORMAL CARD
                ================================================= */}

                {!isActive && (
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    className="
                      w-full
                      text-center
                    "
                  >
                    {/* ICON */}

                    <div
                      className="
                        flex
                        justify-center

                        mb-3
                        sm:mb-4

                        [&_svg]:w-7
                        [&_svg]:h-7

                        sm:[&_svg]:w-8
                        sm:[&_svg]:h-8

                        [&_svg]:text-emerald-700/70

                        [&_svg]:transition-all
                        [&_svg]:duration-500

                        group-hover:[&_svg]:text-emerald-600
                        group-hover:[&_svg]:scale-110
                      "
                    >
                      {award.icon}
                    </div>

                    {/* YEAR */}

                    <div
                      className="
                        text-[9px]
                        sm:text-[10px]

                        font-semibold
                        tracking-[1.5px]

                        uppercase

                        text-emerald-700/60

                        mb-1
                      "
                    >
                      {award.year}
                    </div>

                    {/* TITLE */}

                    <h3
                      className="
                        font-display
                        font-bold

                        text-sm
                        sm:text-base
                        md:text-lg

                        leading-tight

                        text-ink

                        px-1
                      "
                    >
                      {award.title}
                    </h3>

                    {/* ORGANIZATION */}

                    <p
                      className="
                        font-body

                        text-[9px]
                        sm:text-[10px]
                        md:text-xs

                        text-clay

                        mt-1
                      "
                    >
                      {award.organization}
                    </p>

                    {/* BOTTOM NUMBER */}

                    <div
                      className="
                        mt-3
                        sm:mt-4

                        pt-2
                        sm:pt-3

                        border-t
                        border-emerald-900/10

                        flex
                        items-center
                        justify-between
                      "
                    >
                      <span
                        className="
                          text-[8px]
                          sm:text-[9px]

                          uppercase
                          tracking-[1px]

                          text-emerald-700/50
                        "
                      >
                        {award.category}
                      </span>

                      <span
                        className="
                          text-[9px]
                          sm:text-[10px]

                          font-bold

                          text-emerald-800/35
                        "
                      >
                        {award.number}
                      </span>
                    </div>
                  </motion.div>
                )}

                {/* =================================================
                    ACTIVE DETAILS
                ================================================= */}

                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: 10,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="
                        w-full
                        text-left

                        max-h-[190px]
                        sm:max-h-[210px]
                        md:max-h-[230px]

                        overflow-y-auto

                        pr-1

                        scrollbar-thin
                      "
                    >
                      {/* TOP ROW */}

                      <div
                        className="
                          flex
                          items-center
                          justify-between

                          mb-2
                        "
                      >
                        <span
                          className="
                            text-[8px]
                            sm:text-[9px]

                            font-semibold

                            tracking-[1.5px]

                            uppercase

                            text-emerald-700/70
                          "
                        >
                          Recognition
                        </span>

                        <span
                          className="
                            text-[9px]
                            sm:text-[10px]

                            font-bold

                            text-emerald-800/40
                          "
                        >
                          {award.number}
                        </span>
                      </div>

                      {/* ICON */}

                      <div
                        className="
                          mb-2

                          [&_svg]:w-6
                          [&_svg]:h-6

                          sm:[&_svg]:w-7
                          sm:[&_svg]:h-7

                          [&_svg]:text-emerald-700
                        "
                      >
                        {award.icon}
                      </div>

                      {/* TITLE */}

                      <h3
                        className="
                          font-display
                          font-bold

                          text-base
                          sm:text-lg
                          md:text-xl

                          leading-tight

                          text-ink

                          mb-1.5
                        "
                      >
                        {award.title}
                      </h3>

                      {/* ORGANIZATION */}

                      <p
                        className="
                          font-body

                          text-[9px]
                          sm:text-[10px]

                          font-medium

                          text-emerald-700/70

                          mb-2
                        "
                      >
                        {award.organization}
                      </p>

                      {/* DESCRIPTION */}

                      <p
                        className="
                          font-body

                          text-[10px]
                          sm:text-xs

                          leading-relaxed

                          text-clay
                        "
                      >
                        {award.description ||
                          "A meaningful milestone that reflects our commitment to quality, thoughtful design, and creating work that makes a lasting impression."}
                      </p>

                      {/* PROJECT */}

                      {award.project && (
                        <div className="mt-2">
                          <span
                            className="
                              text-[8px]
                              uppercase
                              tracking-[1px]

                              text-emerald-700/50
                            "
                          >
                            Project
                          </span>

                          <p
                            className="
                              text-[9px]
                              sm:text-[10px]

                              font-medium

                              text-ink

                              mt-0.5
                            "
                          >
                            {award.project}
                          </p>
                        </div>
                      )}

                      {/* LEVEL */}

                      {award.level && (
                        <div className="mt-2">
                          <span
                            className="
                              text-[8px]
                              uppercase
                              tracking-[1px]

                              text-emerald-700/50
                            "
                          >
                            Level
                          </span>

                          <p
                            className="
                              text-[9px]
                              sm:text-[10px]

                              font-medium

                              text-ink

                              mt-0.5
                            "
                          >
                            {award.level}
                          </p>
                        </div>
                      )}

                      {/* CLOSE */}

                      <div
                        className="
                          mt-3

                          flex
                          items-center
                          gap-1.5

                          text-[8px]
                          sm:text-[9px]

                          uppercase
                          tracking-[1px]

                          text-emerald-700/50
                        "
                      >
                        <span
                          className="
                            w-4
                            h-px

                            bg-emerald-700/30
                          "
                        />

                        Click to close
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* =================================================
                  BOTTOM ACTIVE LINE
              ================================================= */}

              <motion.div
                animate={{
                  width: isActive ? "100%" : "22%",
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  absolute

                  bottom-0
                  left-0

                  h-[2px]

                  bg-gradient-to-r
                  from-emerald-700
                  via-teal-500
                  to-transparent

                  pointer-events-none
                "
              />

              {/* =================================================
                  STATUS DOT
              ================================================= */}

              <motion.span
                animate={{
                  opacity: isActive
                    ? [0.4, 1, 0.4]
                    : [0.15, 0.4, 0.15],

                  scale: isActive
                    ? [1, 1.3, 1]
                    : [1, 1.15, 1],
                }}
                transition={{
                  duration: isActive
                    ? 1.5
                    : 3 + index,

                  repeat: Infinity,

                  ease: "easeInOut",
                }}
                className="
                  absolute

                  bottom-3
                  right-3

                  sm:bottom-4
                  sm:right-4

                  w-1
                  h-1

                  sm:w-1.5
                  sm:h-1.5

                  rounded-full

                  bg-emerald-600

                  pointer-events-none
                "
              />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  </motion.div>

  {/* =================================================
      BOTTOM LIGHT
  ================================================= */}

  <motion.div
    animate={{
      opacity: [0.10, 0.25, 0.10],
      scaleX: [0.85, 1, 0.85],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute

      bottom-0
      left-[8%]
      right-[8%]

      h-px

      bg-gradient-to-r
      from-transparent
      via-emerald-600/25
      to-transparent

      pointer-events-none
    "
  />
</section>

{/* ==================================Digital experience award section=============================================== */}

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
            md:px-20
            mt-10
            bg-w-full
          "
        >
          <div
            className="
              relative
              overflow-hidden

              rounded-[1.5rem]
              sm:rounded-[2rem]
              md:rounded-[2.5rem]

              bg-ink

              p-5
              sm:p-7
              md:p-14
              lg:p-20
            "
          >
            {/* GLOW */}

            <motion.div
              animate={{
                x: [-80, 80, -80],
                y: [20, -30, 20],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute

                right-0
                top-0

                w-60
                h-60

                sm:w-80
                sm:h-80

                md:w-96
                md:h-96

                rounded-full

                bg-emerald-600/300

                blur-[100px]
              "
            />

            {/* SECONDARY GLOW */}

            <motion.div
              animate={{
                x: [50, -50, 50],
                y: [-20, 40, -20],
                opacity: [0.08, 0.18, 0.08],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute

                left-1/3
                bottom-0

                w-52
                h-52

                sm:w-64
                sm:h-64

                md:w-72
                md:h-72

                rounded-full

                bg-emerald-500/20

                blur-[100px]
              "
            />

            <div
              className="
                relative

                grid
                grid-cols-1
                lg:grid-cols-12

                gap-5
                sm:gap-8
                md:gap-12

                items-center
              "
            >
              {/* LEFT */}

              <div
                className="
                  lg:col-span-7
                "
              >
                <p
                  className="
                    font-body
                    text-white/50

                    text-[9px]
                    sm:text-xs

                    tracking-[1.5px]

                    uppercase

                    mb-3
                    sm:mb-5
                    md:mb-6
                  "
                >
                  Featured Recognition
                </p>

                <h2
                  className="
                    font-display
                    font-bold
                    text-white

                    text-[32px]
                    sm:text-4xl
                    md:text-6xl

                    leading-[0.95]

                    tracking-[-1.5px]
                    md:tracking-[-2px]
                  "
                >
                  Digital
                  <br />

                  Experience
                  <br />

                  <motion.span
                    animate={{
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      text-emerald-400
                    "
                  >
                    Award.
                  </motion.span>
                </h2>

                <p
                  className="
                    font-body
                    text-white/60

                    text-[11px]
                    sm:text-sm
                    md:text-lg

                    max-w-[540px]

                    leading-relaxed

                    mt-4
                    sm:mt-6
                    md:mt-8
                  "
                >
                  A recognition of our approach to combining
                  technology, interaction and visual
                  storytelling into one cohesive digital
                  experience.
                </p>
              </div>

              {/* TROPHY */}

              <div
                className="
                  lg:col-span-5

                  flex
                  justify-center

                  mt-1
                  sm:mt-2
                  md:mt-0
                "
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [-2, 2, -2],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    relative

                    w-28
                    h-28

                    sm:w-40
                    sm:h-40

                    md:w-64
                    md:h-64

                    rounded-full

                    border
                    border-white/10

                    flex
                    items-center
                    justify-center
                  "
                >
                  {/* GLOW */}

                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.12, 0.28, 0.12],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="
                      absolute

                      inset-3
                      sm:inset-4
                      md:inset-5

                      rounded-full

                      bg-emerald-500

                      blur-3xl
                    "
                  />

                  {/* INNER CIRCLE */}

                  <div
                    className="
                      relative

                      w-20
                      h-20

                      sm:w-24
                      sm:h-24

                      md:w-36
                      md:h-36

                      rounded-full

                      bg-white/5

                      border
                      border-white/10

                      flex
                      items-center
                      justify-center
                    "
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 8, -8, 0],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Trophy
                        size={34}
                        className="
                          text-emerald-400

                          sm:w-10
                          sm:h-10

                          md:w-12
                          md:h-12
                        "
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>


        {/* =================================================
            CLOSING
        ================================================= */}

        <motion.section
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            w-full
            max-w-[1440px]

            px-3
            sm:px-6
            md:px-20
            mb-10
            pb-10
          "
        >
          <div
            className="
              border-t
              border-hairline

              pt-8
              sm:pt-12
              md:pt-24

              flex
              flex-col

              md:flex-row
              md:items-end
              md:justify-between

              gap-6
              sm:gap-8
              md:gap-10
            "
          >
            <div>
              {/* SPARKLE */}

              <motion.div
                animate={{
                  rotate: [0, 8, -8, 0],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  w-9
                  h-9

                  sm:w-10
                  sm:h-10

                  md:w-12
                  md:h-12

                  rounded-full

                  border
                  border-hairline

                  flex
                  items-center
                  justify-center

                  text-emerald-800

                  mb-4
                  sm:mb-5
                  md:mb-6
                "
              >
                <Sparkles
                  size={14}
                  className="
                    sm:w-4
                    sm:h-4

                    md:w-[18px]
                    md:h-[18px]
                  "
                />
              </motion.div>

              <h2
                className="
                  font-display
                  font-bold
                  text-ink

                  text-[30px]
                  sm:text-4xl
                  md:text-6xl

                  tracking-[-1.5px]
                  md:tracking-[-2px]

                  leading-[0.95]
                "
              >
                The next award
                <br />

                <span
                  className="
                    font-normal
                    text-emerald-800
                  "
                >
                  could be yours.
                </span>
              </h2>
            </div>

            {/* CTA */}

            <motion.a
              href="/services"
              whileHover={{
                y: -5,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                group

                inline-flex
                items-center
                justify-center

                gap-2
                sm:gap-3

                bg-emerald-800
                hover:bg-emerald-900

                text-white

                rounded-full

                px-5
                py-3

                sm:px-6
                sm:py-3.5

                md:px-7
                md:py-4

                font-display
                font-bold

                text-[11px]
                sm:text-sm
                md:text-base

                w-fit

                transition-colors
                duration-300
              "
            >
              Explore our work

              <ArrowUpRight
                size={15}
                className="
                  sm:w-4
                  sm:h-4

                  md:w-[18px]
                  md:h-[18px]

                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </motion.a>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}