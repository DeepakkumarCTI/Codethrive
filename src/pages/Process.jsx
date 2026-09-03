
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

import {
  stepDiscover,
  stepDefine,
  stepDesign,
  stepDevelop,
  stepLaunch,
} from "../assets/figmaImages.js";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const STEPS = [
  {
    number: "01",
    title: "Discover",
    desc: "We immerse ourselves in your ecosystem. Mapping constraints, unearthing latent opportunities, and defining the foundational narrative before a single pixel is placed.",
    listLabel: "Key Deliverables",
    list: [
      "User Personas & Journey Maps",
      "Competitive Landscape Analysis",
      "Strategic Foundation Document",
    ],
    image: stepDiscover,
    side: "right",
  },

  {
    number: "02",
    title: "Define",
    desc: "Synthesizing discovery into a rigid structural blueprint. We establish the architectural rules, visual tokens, and interaction patterns that will govern the product's identity.",
    listLabel: "Outcomes",
    list: [
      "Information Architecture",
      "Wireframes & User Flows",
      "Design System Architecture",
    ],
    image: stepDefine,
    side: "left",
  },

  {
    number: "03",
    title: "Design",
    desc: "Breathing life into the blueprint. We layer glassmorphism, ambient typography, and expansive whitespace to create interfaces that feel composed rather than assembled.",
    listLabel: "Key Deliverables",
    list: [
      "High-Fidelity Mocks",
      "Interactive Prototypes",
      "Micro-interaction Specs",
    ],
    image: stepDesign,
    side: "right",
  },

  {
    number: "04",
    title: "Develop",
    desc: "Executing with technical precision. Translating the visual language into performant, scalable code while maintaining the integrity of every micro-interaction and shadow.",
    listLabel: "Outcomes",
    list: [
      "Production-Ready Code",
      "Component Libraries",
      "Performance Optimization",
    ],
    image: stepDevelop,
    side: "left",
  },

  {
    number: "05",
    title: "Launch",
    desc: "The transition from private canvas to public utility. We ensure a flawless deployment, monitoring performance and user engagement as the digital architecture meets reality.",
    listLabel: "Key Deliverables",
    list: [
      "Deployment Strategy",
      "Analytics Setup",
      "Post-Launch Support",
    ],
    image: stepLaunch,
    side: "right",
  },
];


/* =========================================================
   DELIVERABLE CARD
========================================================= */

function DeliverableCard({ label, items, align }) {
  return (
    <div
      className={`
        bg-emerald-50/60
        border
        border-emerald-900/10
        rounded-lg

        p-6

        max-w-[384px]
        w-full

        flex
        flex-col
        gap-3

        ${
          align === "right"
            ? "items-end text-right"
            : "items-start text-left"
        }

        transition-all
        duration-500

        hover:bg-emerald-50
        hover:border-emerald-800/20
      `}
    >
      <p
        className="
          font-body
          text-emerald-800

          text-sm
          md:text-base

          tracking-[1.6px]

          uppercase
        "
      >
        {label}
      </p>

      <ul className="flex flex-col gap-2 w-full">
        {items.map((item) => (
          <li
            key={item}
            className="
              font-body
              text-clay
              text-sm

              transition-colors
              duration-300

              hover:text-emerald-800
            "
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}


/* =========================================================
   STEP IMAGE
========================================================= */

function StepImage({ src, alt }) {
  return (
    <div
      className="
        group

        w-full

        rounded-xl
        overflow-hidden

        shadow-[0px_40px_80px_0px_rgba(19,20,15,0.04)]

        bg-white

        transition-all
        duration-700

        hover:-translate-y-2
        hover:shadow-[0px_45px_90px_rgba(6,78,59,0.10)]
      "
    >
      <img
        src={src}
        alt={alt}
        className="
          w-full

          h-[240px]
          md:h-[360px]

          object-cover

          opacity-90

          transition-transform
          duration-[1000ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]

          group-hover:scale-105
        "
      />
    </div>
  );
}


/* =========================================================
   TIMELINE STEP
========================================================= */

function TimelineStep({ step, index, progress }) {
  /*
    Each point gets a progress value.

    Example:
    Step 01 → 0%
    Step 02 → 25%
    Step 03 → 50%
    Step 04 → 75%
    Step 05 → 100%
  */

  const stepProgress = index / (STEPS.length - 1);

  const distance = Math.abs(progress - stepProgress);

  const isActive = distance < 0.12;

  return (
    <div
      className="
        relative

        flex
        flex-col

        md:flex-row

        items-center

        gap-8
        md:gap-0
      "
    >

      {/* =================================================
          RIGHT SIDE
      ================================================= */}

      {step.side === "right" ? (
        <>

          {/* TEXT */}

          <div
            className="
              w-full
              md:w-1/2

              md:pr-20

              flex
              flex-col
              gap-4

              md:items-end
              md:text-right
            "
          >

            <p
              className="
                font-display

                text-emerald-200

                text-6xl
                md:text-8xl

                leading-none

                transition-all
                duration-500
              "
            >
              {step.number}
            </p>

            <h2
              className="
                font-display
                font-semibold

                text-ink

                text-3xl
                md:text-5xl

                tracking-[-0.96px]

                transition-colors
                duration-500

                hover:text-emerald-800
              "
            >
              {step.title}
            </h2>

            <p
              className="
                font-body
                text-clay

                text-base

                max-w-[448px]

                leading-relaxed
              "
            >
              {step.desc}
            </p>

            <DeliverableCard
              label={step.listLabel}
              items={step.list}
              align="right"
            />

          </div>


          {/* =================================================
              TIMELINE POINT
          ================================================= */}

          <motion.div
            animate={{
              scale: isActive ? 1.45 : 1,
              boxShadow: isActive
                ? "0 0 0 8px rgba(6,78,59,0.12), 0 0 25px rgba(6,78,59,0.30)"
                : "0 0 0 8px rgba(245,245,240,1)",
            }}
            transition={{
              duration: 0.4,
            }}
            className="
              hidden
              md:block

              absolute

              left-1/2
              top-1/2

              -translate-x-1/2
              -translate-y-1/2

              w-4
              h-4

              rounded-full

              bg-emerald-800

              z-20
            "
          />


          {/* IMAGE */}

          <div
            className="
              w-full
              md:w-1/2

              md:pl-20
            "
          >
            <StepImage
              src={step.image}
              alt={step.title}
            />
          </div>

        </>
      ) : (

        /* =================================================
           LEFT SIDE
        ================================================= */

        <>

          {/* IMAGE */}

          <div
            className="
              w-full
              md:w-1/2

              md:pr-20

              order-2
              md:order-1
            "
          >
            <StepImage
              src={step.image}
              alt={step.title}
            />
          </div>


          {/* TIMELINE POINT */}

          <motion.div
            animate={{
              scale: isActive ? 1.45 : 1,
              boxShadow: isActive
                ? "0 0 0 8px rgba(6,78,59,0.12), 0 0 25px rgba(6,78,59,0.30)"
                : "0 0 0 8px rgba(245,245,240,1)",
            }}
            transition={{
              duration: 0.4,
            }}
            className="
              hidden
              md:block

              absolute

              left-1/2
              top-1/2

              -translate-x-1/2
              -translate-y-1/2

              w-4
              h-4

              rounded-full

              bg-emerald-800

              z-20
            "
          />


          {/* TEXT */}

          <div
            className="
              w-full
              md:w-1/2

              md:pl-20

              order-1
              md:order-2

              flex
              flex-col
              gap-4
            "
          >

            <p
              className="
                font-display

                text-emerald-200

                text-6xl
                md:text-8xl

                leading-none
              "
            >
              {step.number}
            </p>

            <h2
              className="
                font-display
                font-semibold

                text-ink

                text-3xl
                md:text-5xl

                tracking-[-0.96px]

                transition-colors
                duration-500

                hover:text-emerald-800
              "
            >
              {step.title}
            </h2>

            <p
              className="
                font-body
                text-clay

                text-base

                max-w-[448px]

                leading-relaxed
              "
            >
              {step.desc}
            </p>

            <DeliverableCard
              label={step.listLabel}
              items={step.list}
              align="left"
            />

          </div>

        </>
      )}
    </div>
  );
}


/* =========================================================
   PROCESS
========================================================= */

export default function Process() {

  const timelineRef = useRef(null);

  /*
    Track the timeline section while scrolling.

    progress:
    0 → top of timeline
    1 → bottom of timeline
  */

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 30%", "end 70%"],
  });


  /*
    Convert progress into line height.
  */

  const lineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );


  return (
    <div
      className="
        bg-sand
        w-full
        overflow-hidden
      "
    >

      <Navbar />


      <main className="pt-32">


        {/* =================================================
            HERO
        ================================================= */}

<section
  className="
    relative
    w-full
    max-w-[1440px]

    mx-auto

    px-4
    sm:px-6
    md:px-20

    pb-10
    sm:pb-16

    flex
    flex-col

    gap-4
    sm:gap-6

    items-start

    text-left

    overflow-hidden
  "
>
  {/* =========================================
      BACKGROUND VIDEO
  ========================================== */}

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

      scale-[1.03]
    "
  >
    <source
      src="/videos/digital-background1.mp4"
      type="video/mp4"
    />
  </video>

  {/* =========================================
      VIDEO OVERLAY
  ========================================== */}

  <div
    className="
      absolute
      inset-0

      bg-[#F5FAF7]/80
      sm:bg-[#F5FAF7]/76
      md:bg-[#F5FAF7]/72

      pointer-events-none
    "
  />

  {/* =========================================
      SOFT EMERALD AMBIENT GLOW
  ========================================== */}

  <div
    className="
      absolute
      top-[-120px]
      right-[-100px]

      sm:top-[-160px]
      sm:right-[-140px]

      w-[260px]
      h-[260px]

      sm:w-[380px]
      sm:h-[380px]

      rounded-full

      bg-emerald-300/[0.08]

      blur-[100px]

      pointer-events-none
    "
  />

  <div
    className="
      absolute
      bottom-[-140px]
      left-[-100px]

      sm:bottom-[-180px]
      sm:left-[-150px]

      w-[300px]
      h-[300px]

      sm:w-[450px]
      sm:h-[450px]

      rounded-full

      bg-emerald-400/[0.06]

      blur-[110px]

      pointer-events-none
    "
  />

  {/* =========================================
      CONTENT
  ========================================== */}

  <div
    className="
      relative
      z-10

      w-full

      flex
      flex-col

      gap-4
      sm:gap-6

      items-start

      text-left
    "
  >
    {/* LABEL */}

    <p
      className="
        font-body

        text-emerald-800

        text-[9px]
        sm:text-xs

        tracking-[1px]
        sm:tracking-[1.2px]

        uppercase
      "
    >
      Our Methodology
    </p>

    {/* HEADING */}

    <h1
      className="
        font-display
        font-bold

        text-ink

        text-[38px]
        sm:text-7xl
        lg:text-[120px]

        leading-[0.92]

        tracking-[-1.8px]
        sm:tracking-[-2px]
        lg:tracking-[-4.8px]

        max-w-[1050px]
      "
    >
      The Architecture of Creation.
    </h1>

    {/* DESCRIPTION */}

    <p
      className="
        font-body

        text-clay

        text-[13px]
        sm:text-lg
        md:text-xl

        max-w-[672px]

        pt-1
        sm:pt-2

        leading-relaxed
      "
    >
      We don&rsquo;t just build products; we compose experiences. Our
      process is a fluid journey from abstract ambiguity to absolute
      precision, treating empty space as a luxury material.
    </p>
  </div>
</section>
{/* =================================================
    TIMELINE
================================================= */}



<section
  ref={timelineRef}
  className="
    w-full
    max-w-[1440px]
    mx-auto

    px-3
    sm:px-6
    md:px-20

    pb-8
    sm:pb-16
    md:pb-20
  "
>
  <div
    className="
      relative

      flex
      flex-col

      gap-3
      sm:gap-6
      md:gap-32

      /* MOBILE LEFT TIMELINE SPACE */
      pl-7
      sm:pl-9

      /* DESKTOP ORIGINAL */
      md:pl-0
    "
  >

    {/* =================================================
        MOBILE BASE TIMELINE — LEFT
    ================================================= */}

    <div
      className="
        md:hidden

        absolute

        top-0
        bottom-0

        left-3
        sm:left-4

        w-[2px]

        bg-emerald-900/10

        z-0
      "
    />


    {/* =================================================
        MOBILE ANIMATED PROGRESS LINE — LEFT
    ================================================= */}

    <motion.div
      style={{
        height: lineHeight,
      }}
      className="
        md:hidden

        absolute

        top-0

        left-3
        sm:left-4

        -translate-x-1/2

        w-[3px]

        bg-emerald-800

        rounded-full

        z-10

        origin-top

        shadow-[0_0_10px_rgba(6,78,59,0.25)]
      "
    />


    {/* =================================================
        DESKTOP BASE TIMELINE — CENTER
    ================================================= */}

    <div
      className="
        hidden
        md:block

        absolute

        top-0
        bottom-0

        left-1/2

        -translate-x-1/2

        w-[2px]

        bg-emerald-900/10

        z-0
      "
    />


    {/* =================================================
        DESKTOP ANIMATED PROGRESS LINE — CENTER
    ================================================= */}

    <motion.div
      style={{
        height: lineHeight,
      }}
      className="
        hidden
        md:block

        absolute

        top-0

        left-1/2

        -translate-x-1/2

        w-[3px]

        bg-emerald-800

        rounded-full

        z-10

        origin-top

        shadow-[0_0_12px_rgba(6,78,59,0.25)]
      "
    />


    {/* =================================================
        TIMELINE STEPS
    ================================================= */}

    {STEPS.map((step, index) => (
      <div
        key={step.number}
        className="
          relative
          z-20

          w-full
          min-w-0

          /* MOBILE */
          scale-[0.84]
          origin-top

          -my-6

          /* SMALL TABLET */
          sm:scale-[0.92]
          sm:-my-3

          /* DESKTOP — ORIGINAL */
          md:scale-100
          md:my-0
        "
      >
        <TimelineStep
          step={step}
          index={index}
          progress={scrollYProgress}
        />
      </div>
    ))}

  </div>
</section>





      </main>


      <Footer />

    </div>
  );
}

