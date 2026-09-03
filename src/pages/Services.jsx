import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/* =========================================================
   TECHNOLOGY STACK
========================================================= */

const STACK = [
  {
    name: "MongoDB",
    image: "/tech/mongodb.png",
  },
  {
    name: "React",
    image: "/tech/react.png",
  },
  {
    name: "Node.js",
    image: "/tech/nodejs.png",
  },
  {
    name: "PostgreSQL",
    image: "/tech/postgresql.png",
  },
  {
    name: "Python",
    image: "/tech/python.png",
  },
  {
    name: "Java",
    image: "/tech/java.png",
  },
  {
    name: "Docker",
    image: "/tech/docker.png",
  },
  {
    name: "AWS",
    image: "/tech/aws.png",
  },
  {
    name: "Git",
    image: "/tech/git.png",
  },
  {
    name: "JavaScript",
    image: "/tech/javascript.png",
  },
  {
    name: "Tailwind CSS",
    image: "/tech/tailwind.png",
  },
  {
    name: "Figma",
    image: "/tech/figma.png",
  },
  {
    name: "Angular",
    image: "/tech/angular.png",
  },
  {
    name: "Bootstrap",
    image: "/tech/bootstrap.png",
  },
];

/* =========================================================
   SERVICES
========================================================= */

const SERVICES = [
  {
    number: "01",
    name: "Web Development",
    desc: "High-performance, accessible, and stunning web applications built on modern architectures. We prioritize speed, SEO, and flawless user experiences across all devices.",
    tags: [
      "React / Next.js",
      "Headless CMS",
      "WebGL / Three.js",
      "Serverless",
      "GraphQL APIs",
      "Edge Computing",
    ],
    image: "/services/web-development.jpg",
    layout: "text-left",
  },

  {
    number: "02",
    name: "Mobile Applications",
    desc: "Native and cross-platform mobile experiences that feel intuitive and responsive. We design for the human hand, ensuring every swipe and tap feels natural.",
    tags: [
      "iOS / Swift",
      "Android / Kotlin",
      "React Native",
    ],
    image: "/services/mobile-applications.jpg",
    layout: "image-left",
  },

  {
    number: "03",
    name: "UI/UX Design",
    desc: "Our design philosophy centers on editorial minimalism. We strip away the unnecessary to reveal clear, compelling interfaces that guide users effortlessly through complex workflows.",
    tags: [
      "Design Systems",
      "User Research",
      "Prototyping",
      "Interaction Design",
      "Usability Testing",
      "Visual Identity",
    ],
    image: "/services/ui-ux-design.jpg",
    layout: "text-left",
  },

  {
    number: "04",
    name: "AI & ML",
    desc: "Integrating intelligent systems to automate processes, generate insights, and create personalized experiences. We build AI solutions that augment human capabilities.",
    tags: [
      "Predictive Models",
      "NLP & LLMs",
      "Computer Vision",
    ],
    image: "/services/ai-ml.jpg",
    layout: "image-left",
  },

  {
    number: "05",
    name: "Cloud & DevOps",
    desc: "Scalable, secure infrastructure designed for continuous delivery. We ensure your digital products are resilient, fast, and always available.",
    tags: [
      "AWS / GCP / Azure",
      "CI/CD Pipelines",
      "Microservices",
      "Infrastructure as Code",
      "Monitoring",
      "Security",
    ],
    image: "/services/cloud-devops.jpg",
    layout: "text-left",
  },

  {
    number: "06",
    name: "Enterprise Solutions",
    desc: "Complex business challenges solved through custom software ecosystems. We build platforms that integrate seamlessly with your operations to drive growth.",
    tags: [
      "Custom ERP/CRM",
      "Data Analytics",
      "API Integrations",
    ],
    image: "/services/enterprise-solutions.jpg",
    layout: "image-left",
  },
];

/* =========================================================
   SERVICE ROW
========================================================= */

function ServiceRow({ service, index }) {
  /* =======================================================
     IMAGE
  ======================================================= */

  const imageBlock = (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.94,
        y: 40,
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
        delay: 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        group

        w-1/2
        lg:w-4/12

        shrink-0
        min-w-0

        h-[190px]
        sm:h-[230px]

        lg:h-auto
        lg:aspect-[4/3]

        rounded-xl

        overflow-hidden

        bg-emerald-50

        shadow-[0px_20px_20px_0px_rgba(19,20,15,0.05)]

        transition-all
        duration-500

        hover:-translate-y-2

        hover:shadow-[0px_30px_50px_0px_rgba(6,78,59,0.15)]

        order-1
        lg:order-none
      "
    >
      <img
        src={service.image}
        alt={service.name}
        loading="lazy"
        className="
          block

          w-full
          h-full

          object-cover

          transition-transform
          duration-[1000ms]

          ease-[cubic-bezier(0.16,1,0.3,1)]

          group-hover:scale-110
        "
      />
    </motion.div>
  );

  /* =======================================================
     TEXT
  ======================================================= */

  const textBlock = (
    <motion.div
      initial={{
        opacity: 0,
        x: service.layout === "image-left" ? 50 : -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        delay: 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        flex-1

        w-1/2
        lg:w-6/12

        min-w-0

        h-[190px]
        sm:h-[230px]

        lg:h-auto

        overflow-hidden

        flex
        flex-col

        justify-center

        gap-2
        sm:gap-3
        lg:gap-4

        order-2
        lg:order-none
      "
    >
      {/* SERVICE NAME */}

      <h3
        className="
          font-display
          font-semibold

          text-ink

          text-[17px]
          sm:text-2xl

          md:text-3xl
          lg:text-5xl

          leading-[1.05]

          tracking-[-0.5px]
          lg:tracking-[-0.96px]

          transition-all
          duration-300

          hover:text-emerald-800
          hover:translate-x-1

          line-clamp-2
        "
      >
        {service.name}
      </h3>

      {/* DESCRIPTION */}

      <p
        className="
          font-body

          text-clay

          text-[9px]
          sm:text-xs

          md:text-sm
          lg:text-base

          max-w-full
          lg:max-w-[448px]

          leading-[1.45]
          sm:leading-relaxed

          line-clamp-4

          overflow-hidden
        "
      >
        {service.desc}
      </p>

      {/* TAGS */}

      <div
        className="
          grid

          grid-cols-1
          lg:grid-cols-2

          gap-x-4

          gap-y-1
          sm:gap-y-2

          pt-1
          sm:pt-2

          overflow-hidden
        "
      >
        {service.tags.map((tag, tagIndex) => (
          <motion.div
            key={tag}
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
              duration: 0.4,
              delay: 0.25 + tagIndex * 0.05,
            }}
            className="
              group/tag

              flex
              items-center

              gap-2
              sm:gap-3

              min-w-0

              cursor-default

              overflow-hidden
            "
          >
            <span
              className="
                w-3
                sm:w-5
                lg:w-6

                h-px

                bg-emerald-800

                shrink-0

                transition-all
                duration-300

                group-hover/tag:w-9
                group-hover/tag:h-[2px]
              "
            />

            <span
              className="
                min-w-0

                font-body

                text-ink

                text-[7px]
                sm:text-[9px]

                md:text-[10px]
                lg:text-xs

                tracking-[0.3px]
                sm:tracking-[0.6px]

                uppercase

                truncate

                transition-colors
                duration-300

                group-hover/tag:text-emerald-800
              "
            >
              {tag}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  /* =======================================================
     MAIN ROW
  ======================================================= */

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 70,
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
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        border-t
        border-hairline

        py-6
        sm:py-8

        lg:py-12

        flex
        flex-row

        items-stretch

        lg:items-center

        gap-2
        sm:gap-3

        lg:gap-8

        overflow-hidden

        transition-all
        duration-500
      "
    >
      {/* ===================================================
          LEFT NUMBER — DESKTOP ONLY
      =================================================== */}

      <motion.span
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
          delay: 0.2,
        }}
        className="
          hidden
          lg:block

          lg:w-1/12

          shrink-0

          font-display

          text-emerald-100

          text-6xl

          select-none

          transition-colors
          duration-500

          hover:text-emerald-300
        "
      >
        {service.number}
      </motion.span>

      {/* ===================================================
          IMAGE LEFT / TEXT RIGHT
      =================================================== */}

      {service.layout === "image-left" ? (
        <>
          {imageBlock}

          {textBlock}

          {/* RIGHT NUMBER — DESKTOP ONLY */}

          <span
            className="
              hidden
              lg:block

              lg:w-1/12

              shrink-0

              font-display

              text-emerald-200

              text-6xl

              text-right

              select-none

              transition-colors
              duration-500

              hover:text-emerald-400
            "
          >
            {service.number}
          </span>
        </>
      ) : (
        <>
          {/* LEFT NUMBER — DESKTOP ONLY */}

          <span
            className="
              hidden
              lg:block

              lg:w-1/12

              shrink-0

              font-display

              text-emerald-200

              text-6xl

              select-none

              transition-colors
              duration-500

              hover:text-emerald-400
            "
          >
            {service.number}
          </span>

          {textBlock}

          {imageBlock}
        </>
      )}
    </motion.div>
  );
}

/* =========================================================
   TECHNOLOGY CARD
========================================================= */

function TechnologyCard({ tech, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        group

        flex
        flex-col

        items-center

        gap-3
        sm:gap-4

        cursor-default

        p-1
        sm:p-3
      "
    >
      {/* =====================================================
          LOGO AREA
      ===================================================== */}

      <div
        className="
          relative

          w-14
          h-14

          sm:w-[72px]
          sm:h-[72px]

          md:w-20
          md:h-20

          flex
          items-center
          justify-center
        "
      >
        {/* OUTER ROTATING BORDER */}

        <div
          className="
            absolute
            inset-0

            rounded-2xl

            border
            border-emerald-800/25

            animate-[spin_6s_linear_infinite]

            transition-all
            duration-500

            group-hover:border-emerald-800/70
            group-hover:scale-110
          "
        />

        {/* DASHED ROTATING BORDER */}

        <div
          className="
            absolute

            inset-[5px]

            rounded-xl

            border
            border-dashed

            border-emerald-700/20

            animate-[spin_8s_linear_infinite_reverse]

            transition-all
            duration-500

            group-hover:border-emerald-700/60
            group-hover:rotate-180
          "
        />

        {/* GLOW */}

        <div
          className="
            absolute

            inset-1

            rounded-full

            bg-emerald-600/10

            blur-xl

            opacity-70

            animate-pulse

            transition-all
            duration-500

            group-hover:bg-emerald-500/20
            group-hover:opacity-100
          "
        />

        {/* REAL TECHNOLOGY LOGO */}

        <motion.div
          animate={{
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.12,
          }}
          className="
            relative
            z-10

            w-10
            h-10

            sm:w-12
            sm:h-12

            md:w-14
            md:h-14

            rounded-xl

            bg-white

            border
            border-emerald-800/10

            flex
            items-center
            justify-center

            overflow-hidden

            shadow-[0px_8px_25px_rgba(6,78,59,0.08)]

            transition-all
            duration-500

            group-hover:scale-110

            group-hover:shadow-[0px_12px_35px_rgba(6,78,59,0.22)]
          "
        >
          <img
            src={tech.image}
            alt={`${tech.name} logo`}
            loading="lazy"
            className="
              w-7
              h-7

              sm:w-8
              sm:h-8

              md:w-10
              md:h-10

              object-contain

              transition-all
              duration-500

              group-hover:scale-110
            "
          />
        </motion.div>
      </div>

      {/* TECHNOLOGY NAME */}

      <p
        className="
          font-body

          text-clay

          text-[9px]
          sm:text-xs
          md:text-sm

          tracking-[0.4px]
          sm:tracking-[0.6px]

          text-center

          whitespace-nowrap

          transition-all
          duration-300

          group-hover:text-emerald-800

          group-hover:-translate-y-1
        "
      >
        {tech.name}
      </p>
    </motion.div>
  );
}

/* =========================================================
   SERVICES PAGE
========================================================= */

export default function Services() {
  return (
    <div
      className="
        bg-sand

        w-full

        overflow-hidden
      "
    >
      <Navbar />

      <main
        className="
          flex
          flex-col

          items-center

          gap-14
          sm:gap-20

          pt-28
          sm:pt-32
          lg:pt-36

          pb-16
          sm:pb-24
        "
      >
        {/* =====================================================
            HERO
        ===================================================== */}

        <section
          className="
            relative
            overflow-hidden

            w-full

            min-h-[520px]
            sm:min-h-[620px]
            md:min-h-[680px]
            lg:min-h-[720px]

            flex
            items-center

            px-4
            sm:px-8
            md:px-12
            lg:px-16
            xl:px-20

            py-14
            sm:py-20
            lg:py-24
          "
        >
          {/* BACKGROUND VIDEO */}

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
            "
          >
            <source
              src="/videos/digital-background1.mp4"
              type="video/mp4"
            />
          </video>

          {/* DARK OVERLAY */}

          <div
            className="
              absolute
              inset-0

              bg-[#061A16]/65

              sm:bg-[#061A16]/60

              lg:bg-[#061A16]/55

              pointer-events-none
            "
          />

          {/* EXTRA GRADIENT */}

          <div
            className="
              absolute
              inset-0

              bg-gradient-to-r

              from-[#061A16]/80
              via-[#061A16]/45
              to-[#061A16]/30

              pointer-events-none
            "
          />

          {/* TOP RIGHT GLOW */}

          <motion.div
            className="
              absolute
              pointer-events-none

              -top-24
              -right-24

              sm:-top-32
              sm:-right-32

              w-56
              h-56

              sm:w-80
              sm:h-80

              rounded-full

              bg-emerald-400/20

              blur-3xl
            "
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.25, 0.55, 0.25],
              x: [0, -20, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* BOTTOM LEFT GLOW */}

          <motion.div
            className="
              absolute
              pointer-events-none

              -bottom-28
              -left-28

              sm:-bottom-40
              sm:-left-40

              w-64
              h-64

              sm:w-96
              sm:h-96

              rounded-full

              bg-emerald-500/15

              blur-3xl
            "
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.4, 0.15],
              x: [0, 25, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* CONTENT */}

          <div
            className="
              relative
              z-10

              w-full
              max-w-[1440px]

              mx-auto

              grid

              grid-cols-1

              lg:grid-cols-12

              gap-10
              sm:gap-12
              lg:gap-10

              items-center
            "
          >
            {/* LEFT */}

            <motion.div
              initial={{
                opacity: 0,
                y: 60,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                col-span-1
                lg:col-span-8

                flex
                flex-col

                gap-3
                sm:gap-5
                lg:gap-6

                min-w-0
              "
            >
              {/* LABEL */}

              <motion.p
                animate={{
                  opacity: [0.65, 1, 0.65],
                  textShadow: [
                    "0 0 0px rgba(52,211,153,0)",
                    "0 0 12px rgba(52,211,153,0.6)",
                    "0 0 0px rgba(52,211,153,0)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  font-body
                  font-semibold

                  text-emerald-300

                  text-[9px]
                  sm:text-xs

                  tracking-[1.8px]
                  sm:tracking-[3px]

                  uppercase

                  mb-1
                  sm:mb-2
                "
              >
                Our Expertise
              </motion.p>

              {/* HEADING */}

              <h1
                className="
                  font-display

                  text-[48px]
                  sm:text-[76px]
                  md:text-[100px]
                  lg:text-[140px]

                  leading-[0.86]

                  tracking-[-2.5px]
                  sm:tracking-[-4px]
                  lg:tracking-[-7px]
                "
              >
                <motion.span
                  initial={{
                    opacity: 0,
                    x: -40,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    block

                    font-bold

                    text-white

                    drop-shadow-[0_5px_25px_rgba(0,0,0,0.35)]
                  "
                >
                  Digital
                </motion.span>

                <motion.span
                  initial={{
                    opacity: 0,
                    x: -40,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: 0.18,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    block

                    font-light

                    text-emerald-300

                    transition-all
                    duration-500

                    hover:text-white

                    drop-shadow-[0_5px_25px_rgba(16,185,129,0.35)]
                  "
                >
                  Craft.
                </motion.span>
              </h1>

              {/* ACCENT */}

              <motion.div
                animate={{
                  width: [40, 85, 40],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  h-[2px]

                  bg-emerald-300

                  rounded-full

                  shadow-[0_0_16px_rgba(52,211,153,0.8)]

                  mt-1
                "
              />
            </motion.div>

            {/* RIGHT */}

            <motion.div
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                col-span-1
                lg:col-span-4

                flex
                items-center

                min-w-0
              "
            >
              <div
                className="
                  relative

                  w-full
                  max-w-[520px]

                  p-4
                  sm:p-5
                  lg:p-0
                "
              >
                {/* MOBILE GLASS */}

                <div
                  className="
                    absolute
                    inset-0

                    rounded-2xl

                    bg-black/10

                    border
                    border-white/10

                    backdrop-blur-[2px]

                    lg:hidden
                  "
                />

                {/* DESCRIPTION */}

                <p
                  className="
                    relative

                    font-body

                    text-white/85

                    text-[12px]
                    sm:text-sm
                    md:text-lg
                    lg:text-xl

                    leading-[1.65]
                    sm:leading-[1.7]

                    max-w-[500px]
                  "
                >
                  We don&rsquo;t just build software. We engineer premium
                  digital experiences that elevate brands and drive
                  enterprise transformation. Our approach combines
                  meticulous design with robust, scalable architecture.
                </p>

                {/* DESCRIPTION ACCENT */}

                <motion.div
                  animate={{
                    width: [30, 65, 30],
                    opacity: [0.35, 1, 0.35],
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    mt-4
                    sm:mt-5

                    h-[2px]

                    bg-emerald-300

                    rounded-full

                    shadow-[0_0_14px_rgba(52,211,153,0.8)]
                  "
                />
              </div>
            </motion.div>
          </div>

          {/* BOTTOM LIGHT */}

          <motion.div
            className="
              absolute

              bottom-0
              left-0

              h-[1px]

              bg-emerald-300

              shadow-[0_0_18px_rgba(52,211,153,0.8)]

              pointer-events-none
            "
            animate={{
              width: ["0%", "100%", "0%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* CORNER LIGHT */}

          <motion.div
            className="
              absolute

              bottom-5
              right-5

              sm:bottom-8
              sm:right-8

              w-2
              h-2

              rounded-full

              bg-emerald-300

              shadow-[0_0_15px_rgba(52,211,153,0.9)]

              pointer-events-none
            "
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </section>

        {/* =====================================================
            SERVICES
        ===================================================== */}
{/* =====================================================
    SERVICES
===================================================== */}

<section
  className="
    w-full
    max-w-[1440px]

    px-2
    sm:px-6
    md:px-20
  "
>
  <div className="w-full">
    {SERVICES.map((service, index) => (
      <div
        key={service.number}
        className="
          relative

          w-full
          min-w-0

          overflow-hidden

          rounded-2xl
          sm:rounded-3xl

          p-[1.5px]
        "
      >
        {/* =================================================
            ROTATING ANIMATED BORDER
        ================================================= */}

        <div
          className="
            absolute
            inset-0

            rounded-2xl
            sm:rounded-3xl

bg-[conic-gradient(
  from_0deg,
  transparent_0deg,
  transparent_30deg,
  rgba(16,185,129,0.04)_60deg,
  rgba(16,185,129,0.20)_90deg,
  rgba(52,211,153,0.10)_120deg,
  transparent_160deg,
  transparent_360deg
)]
            animate-[serviceBorderRotate_4s_linear_infinite]
          "
        />

        {/* =================================================
            SECOND BORDER GLOW
        ================================================= */}

        <div
          className="
            absolute
            inset-[1px]

            rounded-2xl
            sm:rounded-3xl

            border
            border-emerald-500/10

            pointer-events-none
          "
        />

        {/* =================================================
            OUTER CONTINUOUS GLOW
        ================================================= */}

        <div
          className="
            absolute

            -inset-3

            rounded-[30px]
            sm:rounded-[40px]

            bg-emerald-500/10

            blur-2xl

            opacity-50

            pointer-events-none

            animate-[serviceOuterGlow_3.5s_ease-in-out_infinite]
          "
        />

        {/* =================================================
            MOVING LIGHT EFFECT
        ================================================= */}

        <div
          className="
            absolute

            -top-[2px]
            left-[-20%]

            w-[20%]
            h-[3px]

            rounded-full

            bg-emerald-300

            shadow-[0_0_12px_rgba(52,211,153,0.9)]

            pointer-events-none

            animate-[serviceTopLight_4s_linear_infinite]
          "
        />

        {/* =================================================
            MOVING SIDE LIGHT
        ================================================= */}

        <div
          className="
            absolute

            top-[-20%]
            right:-[2px]

            w-[3px]
            h-[20%]

            rounded-full

            bg-emerald-300

            shadow-[0_0_12px_rgba(52,211,153,0.9)]

            pointer-events-none

            animate-[serviceSideLight_4s_linear_infinite]
          "
        />

        {/* =================================================
            SERVICE CONTENT
        ================================================= */}

        <div
          className="
            relative
            z-10

            w-full

            overflow-hidden

            rounded-[calc(1rem-1px)]
            sm:rounded-[calc(1.5rem-1px)]
          "
        >
          <ServiceRow
            service={service}
            index={index}
          />
        </div>
      </div>
    ))}
  </div>

  {/* =====================================================
      BORDER ANIMATIONS
  ===================================================== */}

  <style>{`

    /* ================================================
       MAIN ROTATING BORDER
    ================================================ */

    @keyframes serviceBorderRotate {

      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }

    }


    /* ================================================
       OUTER GLOW
    ================================================ */

    @keyframes serviceOuterGlow {

      0%,
      100% {
        opacity: 0.25;
        transform: scale(0.995);
      }

      50% {
        opacity: 0.65;
        transform: scale(1.01);
      }

    }


    /* ================================================
       TOP BORDER LIGHT
    ================================================ */

    @keyframes serviceTopLight {

      0% {
        left: -20%;
        opacity: 0;
      }

      10% {
        opacity: 1;
      }

      45% {
        left: 100%;
        opacity: 1;
      }

      50% {
        opacity: 0;
      }

      100% {
        left: 120%;
        opacity: 0;
      }

    }


    /* ================================================
       RIGHT BORDER LIGHT
    ================================================ */

    @keyframes serviceSideLight {

      0% {
        top: -20%;
        opacity: 0;
      }

      10% {
        opacity: 1;
      }

      45% {
        top: 100%;
        opacity: 1;
      }

      50% {
        opacity: 0;
      }

      100% {
        top: 120%;
        opacity: 0;
      }

    }

  `}</style>
</section>

        {/* =====================================================
            TECHNOLOGY STACK
        ===================================================== */}

        <section
          className="
            w-full
            max-w-[1440px]

            px-3
            sm:px-6
            md:px-20
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 60,
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
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              overflow-hidden

              rounded-2xl
              sm:rounded-3xl

              bg-gradient-to-b
              from-emerald-100
              to-white

              shadow-[0px_40px_80px_0px_rgba(19,20,15,0.02)]

              px-3
              sm:px-6
              md:px-20

              py-8
              sm:py-12
              md:py-24

              flex
              flex-col

              gap-7
              sm:gap-10
              md:gap-12

              items-center
            "
          >
            {/* TOP GLOW */}

            <div
              className="
                pointer-events-none
                absolute

                -top-14
                -right-14

                w-36
                h-36

                sm:-top-24
                sm:-right-24

                sm:w-64
                sm:h-64

                rounded-full

                bg-emerald-800/10

                blur-[55px]
                sm:blur-[90px]

                animate-pulse
              "
            />

            {/* BOTTOM GLOW */}

            <div
              className="
                pointer-events-none
                absolute

                -bottom-16
                -left-14

                w-40
                h-40

                sm:-bottom-32
                sm:-left-24

                sm:w-72
                sm:h-72

                rounded-full

                bg-emerald-700/10

                blur-[65px]
                sm:blur-[100px]

                animate-pulse
              "
            />

            {/* HEADING */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
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
              }}
              className="
                relative

                flex
                flex-col

                gap-2
                sm:gap-4

                items-center

                text-center
              "
            >
              <p
                className="
                  font-body
                  text-emerald-800

                  text-[8px]
                  sm:text-xs

                  tracking-[1px]
                  sm:tracking-[1.2px]

                  uppercase
                "
              >
                The Foundation
              </p>

              <h2
                className="
                  font-display
                  font-bold
                  text-ink

                  text-[27px]
                  sm:text-4xl
                  md:text-6xl
                  lg:text-[80px]

                  leading-none

                  tracking-[-1.5px]
                  sm:tracking-[-2px]
                  lg:tracking-[-4px]
                "
              >
                Technology Stack
              </h2>

              <motion.div
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: 50,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                }}
                className="
                  h-[2px]

                  rounded-full

                  bg-emerald-800

                  sm:w-[70px]
                "
              />
            </motion.div>

            {/* TECHNOLOGY GRID */}

            <div
              className="
                relative
                z-10

                grid

                grid-cols-6

                lg:grid-cols-7

                gap-x-0
                sm:gap-x-5
                md:gap-x-8

                gap-y-6
                sm:gap-y-8
                md:gap-y-12

                w-full
                max-w-[1000px]

                items-center
                justify-items-center
              "
            >
              {STACK.map((tech, index) => (
                <div
                  key={tech.name}
                  className="
                    w-full

                    flex
                    justify-center

                    scale-[0.88]
                    sm:scale-90
                    md:scale-100

                    origin-center
                  "
                >
                  <TechnologyCard
                    tech={tech}
                    index={index}
                  />
                </div>
              ))}
            </div>

            {/* TECHNOLOGY ANIMATION */}

            <style>{`
              @keyframes techPulse {
                0%,
                100% {
                  transform: scale(1);
                }

                50% {
                  transform: scale(1.08);
                }
              }
            `}</style>
          </motion.div>
        </section>

        {/* =====================================================
            CTA
        ===================================================== */}

        <section
          className="
            w-full
            max-w-[1120px]

            px-3
            sm:px-6
            md:px-0
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 60,
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
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              w-full
              overflow-hidden

              rounded-2xl
              sm:rounded-3xl

              backdrop-blur-[12px]

              bg-white/55

              border
              border-white

              shadow-[0px_20px_50px_0px_rgba(19,20,15,0.05)]
              sm:shadow-[0px_25px_60px_0px_rgba(19,20,15,0.04)]

              px-5
              sm:px-8
              md:px-16
              lg:px-24

              py-10
              sm:py-14
              md:py-20
              lg:py-24

              flex
              flex-col

              items-center

              gap-5
              sm:gap-6
              md:gap-8

              text-center
            "
          >
            {/* BACKGROUND GRADIENT */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0

                bg-gradient-to-br

                from-emerald-400/20
                via-white/40
                to-transparent

                sm:from-emerald-400/30
              "
            />

            {/* TOP GLOW */}

            <div
              className="
                pointer-events-none
                absolute

                -top-20
                -right-16

                w-40
                h-40

                sm:-top-24
                sm:right-10
                sm:w-64
                sm:h-64

                rounded-full

                bg-emerald-500/10

                blur-[55px]
                sm:blur-[90px]

                animate-pulse
              "
            />

            {/* BOTTOM GLOW */}

            <div
              className="
                pointer-events-none
                absolute

                -bottom-20
                -left-16

                w-32
                h-32

                sm:w-52
                sm:h-52

                rounded-full

                bg-emerald-300/10

                blur-[50px]
                sm:blur-[75px]
              "
            />

            {/* HEADING */}

            <h2
              className="
                relative
                z-10

                font-display
                font-bold
                text-ink

                text-[36px]
                leading-[0.95]

                sm:text-5xl
                sm:leading-none

                md:text-6xl

                lg:text-[80px]

                tracking-[-1.8px]
                sm:tracking-[-2.5px]
                lg:tracking-[-4px]

                max-w-full
              "
            >
              Ready to build?
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
                relative
                z-10

                font-body
                text-clay

                text-[13px]
                leading-[1.65]

                sm:text-base
                sm:leading-relaxed

                md:text-xl

                max-w-[560px]
                md:max-w-[620px]

                px-1
                sm:px-0
              "
            >
              Let&rsquo;s discuss how our engineering and design teams can
              accelerate your next project.
            </p>

            {/* CTA */}

            <motion.a
              href="/contact"
              whileHover={{
                scale: 1.05,
                y: -4,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                relative
                z-10

                inline-flex
                items-center
                justify-center

                gap-2

                bg-emerald-800
                hover:bg-emerald-900

                transition-all
                duration-300

                hover:shadow-[0px_15px_35px_rgba(6,78,59,0.25)]

                text-white

                font-body
                font-medium

                text-[10px]
                sm:text-sm

                tracking-[1px]
                sm:tracking-[1.3px]

                uppercase

                rounded-full

                px-5
                py-3

                sm:px-7
                sm:py-3.5

                md:px-9
                md:py-4.5
              "
            >
              <span>Start a Conversation</span>

              <ArrowUpRight
                size={15}
                className="
                  shrink-0

                  sm:w-[18px]
                  sm:h-[18px]
                "
              />
            </motion.a>
          </motion.div>
        </section>
      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer
        tagline="Architecture for the digital age. Crafting premium software solutions."
      />
    </div>
  );
}