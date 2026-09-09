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


name: "Healthcare",

desc:
  "We provide innovative healthcare solutions to hospitals, clinics, and HealthTech startups to improve patient care, streamline workflows, and enhance operational efficiency.",

tags: [
  "EHR Systems",
  "Telemedicine Platforms",
  "Patient Management Apps",
  "Hospital Workflow Automation",
],

image: "/services/healthcare.jpg",

layout: "text-left",


},

{
number: "02",


name: "Education & EdTech",

desc:
  "Our solutions help educational institutions and EdTech companies enhance learning experiences, improve student engagement, and streamline academic operations with modern technology.",

tags: [
  "Learning Management Systems",
  "Virtual Classrooms",
  "Online Assessment Platforms",
  "Educational Mobile Apps",
],

image: "/services/education-edtech.jpg",

layout: "image-left",


},

{
number: "03",


name: "Retail & E-Commerce",

desc:
  "We enable retail and e-commerce businesses to boost sales, improve customer engagement, and streamline operations through powerful digital commerce solutions.",

tags: [
  "E-Commerce Websites",
  "POS Integrations",
  "Inventory Management Systems",
  "Customer Loyalty Apps",
],

image: "/services/retail-ecommerce.jpg",

layout: "text-left",


},

{
number: "04",


name: "Enterprise Systems",

desc:
  "We deliver robust enterprise software solutions that streamline business operations, automate internal workflows, and improve collaboration across organizations.",

tags: [
  "ERP Solutions",
  "CRM Systems",
  "Internal Workflow Automation",
  "HR Management Tools",
],

image: "/services/enterprise-systems.jpg",

layout: "image-left",


},

{
number: "05",


name: "Startups & SaaS",

desc:
  "We help startups and SaaS companies launch, scale, and evolve digital products quickly with tailored software development, cloud solutions, and reliable technology infrastructure.",

tags: [
  "SaaS Platforms",
  "MVP Development",
  "Cloud Infrastructure",
  "API Integrations",
],

image: "/services/startups-saas.jpg",

layout: "text-left",


},

{
number: "06",


name: "Finance & Banking",

desc:
  "Our secure technology solutions help banking, fintech, insurance, and financial service providers improve operations, protect transactions, and enhance customer experiences.",

tags: [
  "Banking Apps",
  "Fintech Platforms",
  "Payment Gateways",
  "Fraud Detection Systems",
],

image: "/services/finance-banking.jpg",

layout: "image-left",


},

{
number: "07",


name: "Hotels & Hospitality",

desc:
  "We help hotels and hospitality businesses deliver better guest experiences while streamlining reservations, property operations, events, and hospitality management.",

tags: [
  "Property Management Systems",
  "Booking Engines",
  "Guest Experience Apps",
  "Restaurant & Event Management",
],

image: "/services/hotels-hospitality.jpg",

layout: "text-left",


},

{
number: "08",


name: "Manufacturing & Industrial",

desc:
  "We provide manufacturing and industrial companies with modern software solutions for process automation, production tracking, quality control, and resource management.",

tags: [
  "Production Management Systems",
  "Inventory Tracking",
  "IoT-Enabled Monitoring",
  "Quality Control Software",
],

image: "/services/manufacturing-industrial.jpg",

layout: "image-left",


},

{
number: "09",


name: "Travel & Tourism",

desc:
  "We help travel and tourism businesses create seamless booking experiences, manage itineraries efficiently, and deliver personalized customer journeys.",

tags: [
  "Booking Platforms",
  "Travel Itinerary Management",
  "Tourism Mobile Apps",
  "Customer Loyalty Systems",
],

image: "/services/travel-tourism.jpg",

layout: "text-left",


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

  pr-4
  sm:pr-6
  md:pr-10
  lg:pr-12
  xl:pr-16

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
      {/* LEFT NUMBER */}

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

      {/* IMAGE LEFT / TEXT RIGHT */}

      {service.layout === "image-left" ? (
        <>
          {imageBlock}

          {textBlock}

          {/* RIGHT NUMBER */}

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
          {/* LEFT NUMBER */}

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
      {/* LOGO AREA */}

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

        {/* TECHNOLOGY LOGO */}

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
        w-full
        min-h-screen

        bg-sand

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

          pb-16
          sm:pb-24

          w-full
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
    m-0
    bg-gradient-to-br
    from-[#07111F]
    via-[#172554]
    to-[#052E2B]
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
      src="/videos/work.mp4"
      type="video/mp4"
    />
  </video>

  {/* DARK NEON OVERLAY */}

  <div
    className="
      absolute
      inset-0
      bg-[#050816]/75
      sm:bg-[#050816]/65
      lg:bg-[#050816]/55
      pointer-events-none
    "
  />

  {/* MULTI-COLOR GRADIENT OVERLAY */}

  <div
    className="
      absolute
      inset-0
      bg-gradient-to-r
      from-[#020617]/95
      via-[#312E81]/45
      to-[#064E3B]/55
      pointer-events-none
    "
  />

  {/* TOP RIGHT PINK GLOW */}

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
      bg-fuchsia-500/25
      blur-3xl
    "
    animate={{
      scale: [1, 1.25, 1],
      opacity: [0.25, 0.65, 0.25],
      x: [0, -20, 0],
      y: [0, 20, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* BOTTOM LEFT LIME GLOW */}

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
      bg-lime-400/20
      blur-3xl
    "
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.2, 0.55, 0.2],
      x: [0, 25, 0],
      y: [0, -15, 0],
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* CENTER CYAN GLOW */}

  <motion.div
    className="
      absolute
      pointer-events-none
      top-1/2
      left-1/2
      -translate-x-1/2
      -translate-y-1/2
      w-72
      h-72
      sm:w-[460px]
      sm:h-[460px]
      rounded-full
      bg-cyan-400/10
      blur-[110px]
    "
    animate={{
      scale: [1, 1.15, 1],
      opacity: [0.2, 0.5, 0.2],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* FLOATING NEON ORBS */}

  <motion.div
    className="
      absolute
      top-[18%]
      left-[8%]
      w-2
      h-2
      sm:w-4
      sm:h-4
      rounded-full
      bg-yellow-300
      shadow-[0_0_22px_7px_rgba(253,224,71,0.65)]
      pointer-events-none
    "
    animate={{
      y: [0, -20, 0],
      opacity: [0.35, 1, 0.35],
      scale: [0.8, 1.3, 0.8],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  <motion.div
    className="
      absolute
      bottom-[20%]
      right-[10%]
      w-2
      h-2
      sm:w-4
      sm:h-4
      rounded-full
      bg-green-300
      shadow-[0_0_22px_7px_rgba(134,239,172,0.65)]
      pointer-events-none
    "
    animate={{
      y: [0, 20, 0],
      opacity: [0.35, 1, 0.35],
      scale: [0.8, 1.3, 0.8],
    }}
    transition={{
      duration: 3.5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* HERO CONTENT */}

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
            "0 0 0px rgba(253,224,71,0)",
            "0 0 14px rgba(253,224,71,0.85)",
            "0 0 0px rgba(253,224,71,0)",
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
          text-yellow-300
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
            bg-gradient-to-r
            from-yellow-300
            via-lime-300
            to-cyan-300
            bg-clip-text
            text-transparent
            transition-all
            duration-500
            hover:from-fuchsia-400
            hover:via-yellow-300
            hover:to-cyan-300
            drop-shadow-[0_5px_25px_rgba(163,230,53,0.4)]
          "
        >
          Craft.
        </motion.span>
      </h1>

      {/* ACCENT */}

      <motion.div
        animate={{
          width: [40, 100, 40],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          h-[3px]
          bg-gradient-to-r
          from-yellow-300
          via-lime-300
          to-cyan-300
          rounded-full
          shadow-[0_0_18px_rgba(190,242,100,0.9)]
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
            bg-gradient-to-br
            from-fuchsia-500/10
            via-cyan-400/10
            to-lime-300/10
            border
            border-yellow-300/20
            backdrop-blur-[3px]
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
          We don&rsquo;t just build software. We engineer premium digital
          experiences that elevate brands and drive enterprise transformation.
          Our approach combines meticulous design with robust, scalable
          architecture.
        </p>

        {/* DESCRIPTION ACCENT */}

        <motion.div
          animate={{
            width: [30, 75, 30],
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
            h-[3px]
            bg-gradient-to-r
            from-fuchsia-400
            via-yellow-300
            to-lime-300
            rounded-full
            shadow-[0_0_16px_rgba(250,204,21,0.9)]
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
      h-[2px]
      bg-gradient-to-r
      from-fuchsia-400
      via-yellow-300
      to-cyan-300
      shadow-[0_0_20px_rgba(253,224,71,0.9)]
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
      bg-yellow-300
      shadow-[0_0_18px_rgba(253,224,71,1)]
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
            FULL WIDTH - NO WHITE GAP
        ===================================================== */}

        <section
  className="
    relative
    w-full
    m-0
    p-0
    overflow-hidden
    rounded-none
    bg-[#050816]
  "
>
  <div className="w-full m-0 p-0">
    {SERVICES.map((service, index) => {
      const serviceStyles = [
        {
          border: "rgba(232,121,249,0.9)",
          glow: "rgba(217,70,239,0.35)",
          accent: "#F0ABFC",
          accentShadow: "rgba(232,121,249,0.95)",
        },
        {
          border: "rgba(103,232,249,0.9)",
          glow: "rgba(34,211,238,0.35)",
          accent: "#A5F3FC",
          accentShadow: "rgba(103,232,249,0.95)",
        },
        {
          border: "rgba(253,224,71,0.95)",
          glow: "rgba(250,204,21,0.35)",
          accent: "#FEF08A",
          accentShadow: "rgba(253,224,71,0.95)",
        },
        {
          border: "rgba(190,242,100,0.95)",
          glow: "rgba(163,230,53,0.35)",
          accent: "#D9F99D",
          accentShadow: "rgba(190,242,100,0.95)",
        },
      ];

      const color = serviceStyles[index % serviceStyles.length];

      return (
        <div
          key={service.number}
          className="
            relative
            w-full
            min-w-0
            overflow-hidden
            rounded-none
            p-[2px]
          "
        >
          {/* ROTATING NEON BORDER */}
          <div
            className="
              absolute
              inset-0
              rounded-none
              animate-[serviceBorderRotate_4s_linear_infinite]
            "
            style={{
              background: `conic-gradient(
                from 0deg,
                transparent 0deg,
                transparent 25deg,
                ${color.border} 65deg,
                ${color.accent} 90deg,
                ${color.glow} 125deg,
                transparent 165deg,
                transparent 360deg
              )`,
            }}
          />

          {/* OUTER GLOW */}
          <div
            className="
              absolute
              -inset-3
              blur-2xl
              opacity-70
              pointer-events-none
              animate-[serviceOuterGlow_3.5s_ease-in-out_infinite]
            "
            style={{
              background: color.glow,
            }}
          />

          {/* INNER BORDER */}
          <div
            className="absolute inset-[1px] rounded-none pointer-events-none"
            style={{
              border: `1px solid ${color.border}`,
              boxShadow: `inset 0 0 30px ${color.glow}`,
            }}
          />

          {/* MOVING TOP LIGHT */}
          <div
            className="
              absolute
              -top-[2px]
              left-[-20%]
              w-[20%]
              h-[3px]
              rounded-full
              pointer-events-none
              animate-[serviceTopLight_4s_linear_infinite]
            "
            style={{
              background: color.accent,
              boxShadow: `0 0 16px 3px ${color.accentShadow}`,
            }}
          />

          {/* MOVING SIDE LIGHT */}
          <div
            className="
              absolute
              top-[-20%]
              right-[-2px]
              w-[3px]
              h-[20%]
              rounded-full
              pointer-events-none
              animate-[serviceSideLight_4s_linear_infinite]
            "
            style={{
              background: color.accent,
              boxShadow: `0 0 16px 3px ${color.accentShadow}`,
            }}
          />

          {/* SERVICE CONTENT */}
          <div
            className="service-visible-content relative z-10 w-full overflow-hidden rounded-none bg-[#080D20]"
            style={{
              boxShadow: `inset 0 0 45px ${color.glow}`,
            }}
          >
            <ServiceRow
              service={service}
              index={index}
            />
          </div>
        </div>
      );
    })}
  </div>

  <style>{`
    @keyframes serviceBorderRotate {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes serviceOuterGlow {
      0%,
      100% {
        opacity: 0.25;
        transform: scale(0.995);
      }

      50% {
        opacity: 0.75;
        transform: scale(1.01);
      }
    }

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

    /*
      FORCE ALL SERVICE TEXT TO BE CLEAR
    */
    .service-visible-content,
    .service-visible-content *,
    .service-visible-content h1,
    .service-visible-content h2,
    .service-visible-content h3,
    .service-visible-content h4,
    .service-visible-content h5,
    .service-visible-content h6,
    .service-visible-content p,
    .service-visible-content span,
    .service-visible-content div,
    .service-visible-content a,
    .service-visible-content li,
    .service-visible-content strong,
    .service-visible-content small,
    .service-visible-content label {
      color: #FFFFFF !important;
      opacity: 1 !important;
      -webkit-text-fill-color: #FFFFFF !important;
      text-shadow: 0 1px 8px rgba(0, 0, 0, 0.95) !important;
    }

    /*
      MAKE HEADINGS EXTRA BRIGHT
    */
    .service-visible-content h1,
    .service-visible-content h2,
    .service-visible-content h3,
    .service-visible-content h4,
    .service-visible-content h5,
    .service-visible-content h6 {
      color: #FFFFFF !important;
      -webkit-text-fill-color: #FFFFFF !important;
      font-weight: 800 !important;
      text-shadow:
        0 0 5px rgba(255, 255, 255, 0.45),
        0 2px 10px rgba(0, 0, 0, 0.95) !important;
    }

    /*
      MAKE DESCRIPTION TEXT READABLE
    */
    .service-visible-content p,
    .service-visible-content li,
    .service-visible-content span {
      color: #F8FAFC !important;
      -webkit-text-fill-color: #F8FAFC !important;
      font-weight: 500 !important;
      line-height: 1.65 !important;
    }

    /*
      KEEP ICONS VISIBLE
    */
    .service-visible-content svg {
      color: #FFFFFF !important;
      fill: currentColor !important;
      stroke: currentColor !important;
      opacity: 1 !important;
      -webkit-text-fill-color: initial !important;
      text-shadow: none !important;
    }

    /*
      PREVENT DARK TEXT CLASSES FROM OVERRIDING VISIBILITY
    */
    .service-visible-content [class*="text-black"],
    .service-visible-content [class*="text-gray"],
    .service-visible-content [class*="text-slate"],
    .service-visible-content [class*="text-zinc"],
    .service-visible-content [class*="text-neutral"],
    .service-visible-content [class*="text-muted"] {
      color: #FFFFFF !important;
      -webkit-text-fill-color: #FFFFFF !important;
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

    mt-14
    sm:mt-20
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

      bg-gradient-to-br
      from-[#050816]
      via-[#111B3D]
      to-[#190B35]

      border
      border-cyan-400/30

      shadow-[0_0_80px_rgba(34,211,238,0.12),inset_0_0_80px_rgba(139,92,246,0.08)]

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
    {/* TOP PURPLE NEON GLOW */}
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
        bg-fuchsia-500/20

        blur-[55px]
        sm:blur-[90px]

        animate-pulse
      "
    />

    {/* BOTTOM CYAN NEON GLOW */}
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
        bg-cyan-400/20

        blur-[65px]
        sm:blur-[100px]

        animate-pulse
      "
    />

    {/* CENTER BLUE GLOW */}
    <div
      className="
        pointer-events-none
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2

        w-48
        h-48

        sm:w-80
        sm:h-80

        rounded-full
        bg-violet-600/10

        blur-[80px]
        sm:blur-[120px]
      "
    />

    {/* TOP NEON LINE */}
    <div
      className="
        pointer-events-none
        absolute
        top-0
        left-1/2
        -translate-x-1/2

        w-2/3
        h-px

        bg-gradient-to-r
        from-transparent
        via-cyan-300
        to-transparent

        opacity-80
      "
    />

    {/* BOTTOM NEON LINE */}
    <div
      className="
        pointer-events-none
        absolute
        bottom-0
        left-1/2
        -translate-x-1/2

        w-2/3
        h-px

        bg-gradient-to-r
        from-transparent
        via-fuchsia-400
        to-transparent

        opacity-80
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
        z-10

        flex
        flex-col
        items-center
        text-center

        gap-2
        sm:gap-4
      "
    >
      <p
        className="
          font-body
          font-bold
          uppercase

          text-[9px]
          sm:text-xs

          tracking-[1.5px]
          sm:tracking-[2px]

          !text-cyan-200

          drop-shadow-[0_0_8px_rgba(103,232,249,0.95)]
        "
      >
        The Foundation
      </p>

      <h2
        className="
          font-display
          font-bold
          leading-none

          !text-white

          text-[27px]
          sm:text-4xl
          md:text-6xl
          lg:text-[80px]

          tracking-[-1.5px]
          sm:tracking-[-2px]
          lg:tracking-[-4px]

          drop-shadow-[0_0_6px_rgba(255,255,255,1)]
          drop-shadow-[0_0_20px_rgba(34,211,238,0.9)]
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
          w-[50px]
          sm:w-[70px]

          rounded-full

          bg-cyan-300

          shadow-[0_0_8px_rgba(255,255,255,1),0_0_18px_rgba(34,211,238,1)]
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
        sm:grid-cols-4
        md:grid-cols-6
        lg:grid-cols-7

        gap-x-1
        sm:gap-x-5
        md:gap-x-8

        gap-y-5
        sm:gap-y-8
        md:gap-y-12

        w-full
        max-w-[1000px]

        items-center
        justify-items-center

        [&_p]:!text-white
        [&_span]:!text-white
        [&_h1]:!text-white
        [&_h2]:!text-white
        [&_h3]:!text-white
        [&_h4]:!text-white
        [&_h5]:!text-white
        [&_h6]:!text-white
        [&_label]:!text-white
        [&_small]:!text-white
        [&_a]:!text-white
      "
    >
      {STACK.map((tech, index) => (
        <div
          key={tech.name}
          className="
            w-full

            flex
            justify-center

            scale-[0.68]
            sm:scale-90
            md:scale-100

            origin-center

            [&_p]:!text-white
            [&_span]:!text-white
            [&_h1]:!text-white
            [&_h2]:!text-white
            [&_h3]:!text-white
            [&_h4]:!text-white
            [&_h5]:!text-white
            [&_h6]:!text-white
            [&_label]:!text-white
            [&_small]:!text-white
            [&_a]:!text-white
          "
        >
          <TechnologyCard
            tech={tech}
            index={index}
          />
        </div>
      ))}
    </div>
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

    mt-14
    sm:mt-20
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

      bg-white/60

      border
      border-lime-300/70

      shadow-[0px_20px_50px_0px_rgba(101,163,13,0.12)]
      sm:shadow-[0px_25px_60px_0px_rgba(101,163,13,0.15)]

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
    {/* BACKGROUND GREEN-YELLOW GRADIENT */}
    <div
      className="
        pointer-events-none
        absolute
        inset-0

        bg-gradient-to-br

        from-lime-300/40
        via-yellow-100/65
        to-emerald-100/30

        sm:from-lime-300/50
        sm:via-yellow-100/75
        sm:to-emerald-100/40
      "
    />

    {/* TOP LIME GLOW */}
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

        bg-lime-400/30

        blur-[55px]
        sm:blur-[90px]

        animate-pulse
      "
    />

    {/* BOTTOM YELLOW GLOW */}
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

        bg-yellow-300/35

        blur-[50px]
        sm:blur-[75px]
      "
    />

    {/* CENTER GREEN GLOW */}
    <div
      className="
        pointer-events-none
        absolute
        top-1/2
        left-1/2

        -translate-x-1/2
        -translate-y-1/2

        w-44
        h-44

        sm:w-72
        sm:h-72

        rounded-full

        bg-emerald-300/20

        blur-[70px]
        sm:blur-[110px]
      "
    />

    {/* TOP NEON LINE */}
    <div
      className="
        pointer-events-none
        absolute
        top-0
        left-1/2

        -translate-x-1/2

        w-2/3
        h-[2px]

        bg-gradient-to-r
        from-transparent
        via-lime-500
        to-transparent

        opacity-90
      "
    />

    {/* BOTTOM NEON LINE */}
    <div
      className="
        pointer-events-none
        absolute
        bottom-0
        left-1/2

        -translate-x-1/2

        w-2/3
        h-[2px]

        bg-gradient-to-r
        from-transparent
        via-yellow-500
        to-transparent

        opacity-90
      "
    />

    {/* HEADING */}
    <h2
      className="
        relative
        z-10

        font-display
        font-bold

        text-[#183B1D]

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

        drop-shadow-[0_2px_0_rgba(255,255,255,0.7)]
        drop-shadow-[0_0_14px_rgba(132,204,22,0.35)]
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
        font-medium

        text-[#365314]

        text-[13px]
        leading-[1.65]

        sm:text-base
        sm:leading-relaxed

        md:text-xl

        max-w-[560px]
        md:max-w-[620px]

        px-1
        sm:px-0

        drop-shadow-[0_1px_0_rgba(255,255,255,0.8)]
      "
    >
      Let&rsquo;s discuss how our engineering and design teams can
      accelerate your next project.
    </p>

    {/* CTA */}
    <motion.a
      href="/contact#contact-form"
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

        bg-gradient-to-r
        from-lime-600
        via-green-600
        to-emerald-700

        hover:from-lime-700
        hover:via-green-700
        hover:to-emerald-800

        transition-all
        duration-300

        hover:shadow-[0px_15px_35px_rgba(77,124,15,0.35)]

        text-white

        font-body
        font-bold

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

        border
        border-lime-300/60

        shadow-[0_0_18px_rgba(132,204,22,0.35)]
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