import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

import {
  workNexora,
  workMedora,
  workVelox,
  linkArrow,
} from "../assets/figmaImages.js";

import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  CalendarDays,
  UserRound,
  Code2,
  Layers3,
  ArrowUpRight,
} from "lucide-react";

/* =========================================================
   STATS
========================================================= */

const STATS = [
  {
    value: "50+",
    label: "Projects",
  },
  {
    value: "30+",
    label: "Clients",
  },
  {
    value: "10+",
    label: "Industries",
  },
];

/* =========================================================
   WORKS
========================================================= */

const WORKS = [
  {
    id: "nexora",
    tag: "Fintech Platform",
    name: "NEXORA",

    desc:
      "Redefining modern banking with seamless glassmorphic interfaces and intuitive user journeys. We completely overhauled their core banking app to focus on predictive insights and effortless wealth management.",

    tags: ["UI/UX Design", "React Native", "Fintech"],

    image: workNexora,
    imageSide: "left",

    /* =====================================================
       PROJECT DETAILS
    ===================================================== */

    projectType: "Fintech Platform",

    designer: "Deepak Kumar",

    developer: "Arun Prakash",

    duration: "4 Months",

    year: "2026",

    techStack: [
      "React Native",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Figma",
      "Framer Motion",
    ],

    services: [
      "Product Strategy",
      "UI/UX Design",
      "Mobile App Development",
      "API Integration",
      "Quality Assurance",
    ],

    features: [
      "Personalized financial dashboard",
      "Predictive spending insights",
      "Secure authentication",
      "Transaction management",
      "Investment tracking",
      "Real-time notifications",
    ],

    liveLink: "https://example.com",

    overview:
      "NEXORA is a modern fintech experience designed to simplify everyday banking. The project focused on creating a clean financial interface while making complex financial information easier to understand and interact with.",

    challenge:
      "The existing banking experience contained too many disconnected features and complicated user flows. Users struggled to quickly understand their spending, investments and financial health.",

    solution:
      "We redesigned the experience around a simple information hierarchy, personalized dashboards and predictive insights. The interface uses glassmorphic surfaces, strong typography and subtle motion to create a premium financial experience.",
  },

  {
    id: "medora",
    tag: "Healthcare App",
    name: "MEDORA",

    desc:
      "A calming, patient-first digital ecosystem utilizing expansive whitespace and soft ambient depth. The platform integrates telehealth, prescription management, and wellness tracking into one unified experience.",

    tags: ["Product Strategy", "iOS App", "Healthtech"],

    image: workMedora,
    imageSide: "right",

    /* =====================================================
       PROJECT DETAILS
    ===================================================== */

    projectType: "Healthcare Application",

    designer: "Priya Menon",

    developer: "Rahul Raj",

    duration: "5 Months",

    year: "2025",

    techStack: [
      "React Native",
      "Firebase",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Figma",
    ],

    services: [
      "Product Strategy",
      "UX Research",
      "UI/UX Design",
      "Mobile Development",
      "Backend Development",
    ],

    features: [
      "Doctor consultation",
      "Telehealth appointments",
      "Prescription management",
      "Health tracking",
      "Patient profiles",
      "Appointment reminders",
    ],

    liveLink: "https://example.com",

    overview:
      "MEDORA is a patient-first healthcare platform that brings consultations, prescriptions and wellness tracking into one connected digital ecosystem.",

    challenge:
      "Healthcare applications often contain large amounts of information which can make users feel overwhelmed. The goal was to create an interface that felt simple, calm and approachable.",

    solution:
      "We created a whitespace-driven design system with clear navigation, accessible typography and soft visual depth. The experience was designed to help patients complete important healthcare tasks with minimal friction.",
  },

  {
    id: "velox",
    tag: "E-Commerce",
    name: "VELOX",

    desc:
      "High-performance automotive retail with a fluid, editorial browsing experience. We created a visually stunning storefront that prioritizes rich media and seamless checkout flows.",

    tags: ["Web Design", "Next.js", "Headless Commerce"],

    image: workVelox,
    imageSide: "left",

    /* =====================================================
       PROJECT DETAILS
    ===================================================== */

    projectType: "Automotive E-Commerce",

    designer: "M. Deepakkumar",

    developer: "Vishnu Suresh",

    duration: "3 Months",

    year: "2025",

    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Figma",
    ],

    services: [
      "Brand Experience",
      "UI/UX Design",
      "Web Development",
      "E-Commerce Development",
      "Performance Optimization",
    ],

    features: [
      "Vehicle discovery",
      "Advanced filtering",
      "Vehicle comparison",
      "Rich media galleries",
      "Online enquiry",
      "Checkout experience",
    ],

    liveLink: "https://example.com",

    overview:
      "VELOX is a premium automotive commerce platform designed around visual storytelling and a fast, editorial browsing experience.",

    challenge:
      "Traditional automotive websites often contain too much information and make it difficult for users to compare vehicles or explore products visually.",

    solution:
      "We built an image-first experience with large automotive visuals, structured information and intuitive filtering. The result is a premium shopping journey that combines editorial design with high-performance commerce functionality.",
  },
];

/* =========================================================
   PROJECT DETAIL ROW
========================================================= */

function DetailItem({ icon: Icon, label, value }) {
  return (
    <div
      className="
        flex
        items-start
        gap-4
        p-4
        sm:p-5
        rounded-2xl
        bg-[#f5faf7]
        border
        border-hairline
      "
    >
      <div
        className="
          w-10
          h-10
          shrink-0
          rounded-full
          bg-emerald-100
          text-emerald-800
          flex
          items-center
          justify-center
        "
      >
        <Icon size={17} />
      </div>

      <div>
        <p
          className="
            font-body
            text-[10px]
            sm:text-xs
            uppercase
            tracking-[1.2px]
            text-clay
            mb-1
          "
        >
          {label}
        </p>

        <p
          className="
            font-display
            font-semibold
            text-ink
            text-sm
            sm:text-base
          "
        >
          {value}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   PROJECT MODAL
========================================================= */

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="
          fixed
          inset-0
          z-[100]
          flex
          items-center
          justify-center
          p-3
          sm:p-5
          md:p-8
        "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* =================================================
            BACKDROP
        ================================================= */}

        <motion.div
          className="
            absolute
            inset-0
            bg-ink/60
            backdrop-blur-md
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* =================================================
            MODAL
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 40,
            scale: 0.97,
          }}
          transition={{
            duration: 0.45,
            ease: [0.16, 1, 0.3, 1],
          }}
          onClick={(e) => e.stopPropagation()}
          className="
            relative
            z-10
            w-full
            max-w-[1100px]
            max-h-[92vh]
            overflow-y-auto
            bg-white
            rounded-[1.5rem]
            sm:rounded-[2rem]
            shadow-[0px_40px_100px_rgba(0,0,0,0.25)]
          "
        >
          {/* =================================================
              CLOSE BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="
              absolute
              right-4
              top-4
              sm:right-6
              sm:top-6
              z-20
              w-10
              h-10
              rounded-full
              bg-white/90
              backdrop-blur
              border
              border-hairline
              flex
              items-center
              justify-center
              text-ink
              hover:bg-emerald-800
              hover:text-white
              hover:border-emerald-800
              transition-all
              duration-300
            "
          >
            <X size={18} />
          </button>

          {/* =================================================
              PROJECT IMAGE
          ================================================= */}

          <div
            className="
              relative
              w-full
              h-[240px]
              sm:h-[320px]
              md:h-[430px]
              overflow-hidden
            "
          >
            <img
              src={project.image}
              alt={project.name}
              className="
                w-full
                h-full
                object-cover
              "
            />

            {/* Image Overlay */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-ink/60
                via-transparent
                to-transparent
              "
            />

            {/* Project name */}

            <div
              className="
                absolute
                bottom-6
                left-5
                sm:left-8
                md:left-10
              "
            >
              <p
                className="
                  font-body
                  text-white/70
                  text-[10px]
                  sm:text-xs
                  uppercase
                  tracking-[1.5px]
                  mb-2
                "
              >
                {project.tag}
              </p>

              <h2
                className="
                  font-display
                  font-bold
                  text-white
                  text-5xl
                  sm:text-6xl
                  md:text-8xl
                  tracking-[-3px]
                  leading-none
                "
              >
                {project.name}
              </h2>
            </div>
          </div>

          {/* =================================================
              CONTENT
          ================================================= */}

          <div
            className="
              p-5
              sm:p-8
              md:p-10
              lg:p-14
            "
          >
            {/* =================================================
                INTRO
            ================================================= */}

            <div
              className="
                grid
                grid-cols-1
                lg:grid-cols-12
                gap-8
                lg:gap-14
              "
            >
              <div className="lg:col-span-7">
                <p
                  className="
                    font-body
                    text-emerald-800
                    text-xs
                    tracking-[1.5px]
                    uppercase
                    mb-4
                  "
                >
                  Project Overview
                </p>

                <h3
                  className="
                    font-display
                    font-bold
                    text-ink
                    text-3xl
                    sm:text-4xl
                    md:text-5xl
                    tracking-[-1.5px]
                    leading-tight
                    mb-5
                  "
                >
                  Building digital experiences that matter.
                </h3>

                <p
                  className="
                    font-body
                    text-clay
                    text-sm
                    sm:text-base
                    md:text-lg
                    leading-relaxed
                  "
                >
                  {project.overview}
                </p>
              </div>

              {/* =================================================
                  PROJECT META
              ================================================= */}

              <div className="lg:col-span-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                  <DetailItem
                    icon={UserRound}
                    label="UI/UX Designer"
                    value={project.designer}
                  />

                  <DetailItem
                    icon={Code2}
                    label="Developer"
                    value={project.developer}
                  />

                  <DetailItem
                    icon={CalendarDays}
                    label="Development Duration"
                    value={project.duration}
                  />

                  <DetailItem
                    icon={Layers3}
                    label="Project Type"
                    value={project.projectType}
                  />
                </div>
              </div>
            </div>

            {/* =================================================
                DIVIDER
            ================================================= */}

            <div className="h-px bg-hairline my-10 md:my-14" />

            {/* =================================================
                CHALLENGE + SOLUTION
            ================================================= */}

            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-8
                md:gap-12
              "
            >
              <div>
                <p
                  className="
                    font-body
                    text-emerald-800
                    text-xs
                    tracking-[1.5px]
                    uppercase
                    mb-4
                  "
                >
                  The Challenge
                </p>

                <p
                  className="
                    font-body
                    text-clay
                    text-sm
                    sm:text-base
                    md:text-lg
                    leading-relaxed
                  "
                >
                  {project.challenge}
                </p>
              </div>

              <div>
                <p
                  className="
                    font-body
                    text-emerald-800
                    text-xs
                    tracking-[1.5px]
                    uppercase
                    mb-4
                  "
                >
                  Our Solution
                </p>

                <p
                  className="
                    font-body
                    text-clay
                    text-sm
                    sm:text-base
                    md:text-lg
                    leading-relaxed
                  "
                >
                  {project.solution}
                </p>
              </div>
            </div>

            {/* =================================================
                SERVICES
            ================================================= */}

            <div className="mt-10 md:mt-14">
              <p
                className="
                  font-body
                  text-emerald-800
                  text-xs
                  tracking-[1.5px]
                  uppercase
                  mb-5
                "
              >
                Services Provided
              </p>

              <div
                className="
                  flex
                  flex-wrap
                  gap-2
                  sm:gap-3
                "
              >
                {project.services.map((service) => (
                  <span
                    key={service}
                    className="
                      px-4
                      py-2.5
                      rounded-full
                      bg-emerald-50
                      text-emerald-800
                      font-body
                      font-medium
                      text-xs
                      sm:text-sm
                    "
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* =================================================
                TECH STACK
            ================================================= */}

            <div className="mt-10 md:mt-14">
              <p
                className="
                  font-body
                  text-emerald-800
                  text-xs
                  tracking-[1.5px]
                  uppercase
                  mb-5
                "
              >
                Technology Stack
              </p>

              <div
                className="
                  grid
                  grid-cols-2
                  sm:grid-cols-3
                  md:grid-cols-4
                  gap-3
                "
              >
                {project.techStack.map((tech, index) => (
                  <motion.div
                    key={tech}
                    whileHover={{
                      y: -4,
                    }}
                    className="
                      border
                      border-hairline
                      rounded-xl
                      p-4
                      bg-white
                      hover:bg-emerald-50
                      transition-colors
                      duration-300
                    "
                  >
                    <span
                      className="
                        block
                        font-body
                        text-[9px]
                        tracking-[1px]
                        text-clay
                        mb-2
                      "
                    >
                      0{index + 1}
                    </span>

                    <span
                      className="
                        font-display
                        font-semibold
                        text-ink
                        text-sm
                        sm:text-base
                      "
                    >
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* =================================================
                FEATURES
            ================================================= */}

            <div className="mt-10 md:mt-14">
              <p
                className="
                  font-body
                  text-emerald-800
                  text-xs
                  tracking-[1.5px]
                  uppercase
                  mb-5
                "
              >
                Key Features
              </p>

              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  gap-3
                "
              >
                {project.features.map((feature, index) => (
                  <div
                    key={feature}
                    className="
                      flex
                      items-center
                      gap-3
                      py-3
                      border-b
                      border-hairline
                    "
                  >
                    <span
                      className="
                        flex
                        items-center
                        justify-center
                        w-7
                        h-7
                        rounded-full
                        bg-emerald-100
                        text-emerald-800
                        font-body
                        text-[10px]
                        font-bold
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className="
                        font-body
                        text-sm
                        sm:text-base
                        text-ink
                      "
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* =================================================
                LIVE PROJECT
            ================================================= */}

            <div
              className="
                mt-10
                md:mt-14
                p-5
                sm:p-6
                md:p-8
                rounded-2xl
                bg-ink
                flex
                flex-col
                sm:flex-row
                sm:items-center
                sm:justify-between
                gap-5
              "
            >
              <div>
                <p
                  className="
                    font-body
                    text-white/50
                    text-[10px]
                    tracking-[1.5px]
                    uppercase
                    mb-2
                  "
                >
                  Live Project
                </p>

                <p
                  className="
                    font-display
                    font-bold
                    text-white
                    text-xl
                    sm:text-2xl
                  "
                >
                  Experience {project.name}
                </p>
              </div>

              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  bg-emerald-600
                  hover:bg-emerald-500
                  text-white
                  rounded-full
                  px-6
                  py-3.5
                  font-body
                  font-semibold
                  text-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                Visit Live Project

                <ExternalLink
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* =========================================================
   WORK CARD
========================================================= */

function WorkCard({ work, onViewProject }) {
  /* ================= IMAGE ================= */

  const imageBlock = (
    <div
      className="
        group
        w-[42%]
        sm:w-[44%]
        lg:w-7/12
        h-[230px]
        sm:h-[280px]
        md:h-[360px]
        lg:h-[450px]
        shrink-0
        rounded-xl
        overflow-hidden
        shadow-[0px_30px_70px_0px_rgba(19,20,15,0.06)]
      "
    >
      <img
        src={work.image}
        alt={work.name}
        className="
          w-full
          h-full
          object-cover
          transition-transform
          duration-[1200ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]
          group-hover:scale-110
        "
      />
    </div>
  );

  /* ================= TEXT ================= */

  const textBlock = (
    <div
      className="
        w-[58%]
        sm:w-[56%]
        lg:w-5/12
        min-w-0
        backdrop-blur-[2px]
        bg-[#f5faf7]/70
        rounded-xl
        p-4
        sm:p-5
        md:p-7
        lg:p-8
        flex
        flex-col
        justify-center
      "
    >
      {/* Category */}

      <p
        className="
          font-body
          text-emerald-800
          text-[9px]
          sm:text-[10px]
          md:text-xs
          tracking-[1px]
          md:tracking-[1.2px]
          uppercase
          mb-1
          sm:mb-2
        "
      >
        {work.tag}
      </p>

      {/* Name */}

      <h3
        className="
          font-display
          font-bold
          text-ink
          text-2xl
          sm:text-3xl
          md:text-4xl
          tracking-[-0.8px]
          mb-2
          sm:mb-3
        "
      >
        {work.name}
      </h3>

      {/* Description */}

      <p
        className="
          font-body
          text-clay
          text-[10px]
          sm:text-xs
          md:text-base
          leading-[1.45]
          md:leading-6
          mb-3
          sm:mb-4
          md:mb-6
          line-clamp-4
          md:line-clamp-none
        "
      >
        {work.desc}
      </p>

      {/* Tags */}

      <div
        className="
          flex
          flex-wrap
          gap-1
          sm:gap-2
          mb-3
          sm:mb-4
          md:mb-6
        "
      >
        {work.tags.map((tag) => (
          <span
            key={tag}
            className="
              bg-emerald-50
              text-emerald-800
              font-body
              font-bold
              text-[7px]
              sm:text-[9px]
              md:text-xs
              rounded-full
              px-2
              sm:px-2.5
              md:px-3
              py-1
              whitespace-nowrap
            "
          >
            {tag}
          </span>
        ))}
      </div>

      {/* =================================================
          VIEW PROJECT BUTTON
      ================================================= */}

      <button
        type="button"
        onClick={() => onViewProject(work)}
        className="
          group/link
          inline-flex
          items-center
          gap-2
          w-fit
          font-body
          font-bold
          text-emerald-800
          hover:text-emerald-900
          text-[10px]
          sm:text-xs
          md:text-base
          transition-all
          duration-300
        "
      >
        View Project

        <span
          className="
            flex
            items-center
            justify-center
            w-6
            h-6
            rounded-full
            bg-emerald-100
            transition-all
            duration-300
            group-hover/link:bg-emerald-800
          "
        >
          <img
            src={linkArrow}
            alt=""
            className="
              w-3
              sm:w-4
              h-auto
              transition-all
              duration-300
              group-hover/link:translate-x-0.5
            "
          />
        </span>
      </button>
    </div>
  );

  /* =====================================================
     MOBILE
     DETAILS LEFT + IMAGE RIGHT

     DESKTOP
     RESPECT imageSide
  ===================================================== */

  return (
    <div
      className="
        flex
        flex-row
        gap-2
        sm:gap-4
        md:gap-6
        lg:gap-8
        items-stretch
        w-full
      "
    >
      {/* Mobile */}

      <div className="contents lg:hidden">
        {textBlock}
        {imageBlock}
      </div>

      {/* Desktop */}

      <div
        className="
          hidden
          lg:flex
          lg:flex-row
          lg:gap-8
          lg:items-stretch
          lg:w-full
        "
      >
        {work.imageSide === "left" ? (
          <>
            {imageBlock}
            {textBlock}
          </>
        ) : (
          <>
            {textBlock}
            {imageBlock}
          </>
        )}
      </div>
    </div>
  );
}

/* =========================================================
   HOME
========================================================= */

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProject = (project) => {
    setSelectedProject(project);

    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);

    document.body.style.overflow = "";
  };

  return (
    <div className="bg-white w-full overflow-hidden">
      <Navbar />

      <main
        className="
          flex
          flex-col
          items-center
          gap-14
          sm:gap-20
          lg:gap-24
          pt-[90px]
          sm:pt-[100px]
          pb-16
          sm:pb-20
        "
      >

{/* =========================
    HERO SECTION
========================= */}

<section
  className="
    relative
    w-full
    // max-w-[1440px]

    min-h-[300px]
    sm:min-h-[500px]
    lg:min-h-[600px]

    overflow-hidden

    rounded-none
    sm:rounded-2xl
    mt-0

    mb-0
  "
>
  {/* Background Video */}

  <video
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    className="
      absolute
      inset-0
      w-full
      h-full
      object-cover
    "
  >
    <source
      src="/videos/digital-background1.mp4"
      type="video/mp4"
    />

    Your browser does not support the video tag.
  </video>

  {/* Video Overlay */}

  <div
    className="
      absolute
      inset-0

      bg-white/20
      sm:bg-white/20
    "
  />

  {/* Gradient Overlay */}

  <div
    className="
      absolute
      inset-0

      bg-gradient-to-r
      from-white
      via-white/80
      to-emerald-800/10

      sm:from-white
      sm:via-white/75
      sm:to-emerald-800/10
    "
  />

  {/* Hero Content */}

  <div
    className="
      relative
      z-10

      flex
      items-center

      min-h-[300px]
      sm:min-h-[500px]
      lg:min-h-[600px]

      px-4
      sm:px-6
      md:px-20
    "
  >
    {/* Emerald Glow */}

    <div
      className="
        pointer-events-none
        absolute

        -left-8
        top-1/3

        h-20
        w-20

        sm:-left-10
        sm:h-40
        sm:w-40

        rounded-full

        bg-emerald-800/20

        blur-[60px]
        sm:blur-[90px]

        animate-pulse
      "
    />

    {/* Content */}

    <div
      className="
        w-full
        lg:w-10/12
      "
    >
      <p
        className="
          relative

          font-display
          font-bold
          text-ink

          text-[25px]
          sm:text-[64px]
          lg:text-[96px]

          leading-[1.02]

          tracking-[-1px]
          sm:tracking-[-2px]
          lg:tracking-[-4.8px]
        "
      >
        WE BUILD{" "}

        {/* Glowing Emerald Text */}

        <span
          className="
            relative
            inline-block
            group
            cursor-default
          "
        >
          {/* Glow Layer */}

          <span
            className="
              absolute
              inset-0

              text-emerald-800/40

              blur-[6px]
              sm:blur-[12px]

              transition-all
              duration-500

              group-hover:text-emerald-800/70
              group-hover:blur-[18px]
            "
          >
            DIGITAL EXPERIENCES
          </span>

          {/* Main Text */}

          <span
            className="
              relative

              transition-all
              duration-500

              group-hover:text-emerald-800
            "
          >
            DIGITAL EXPERIENCES
          </span>
        </span>

        {" "}THAT MOVE BUSINESS FORWARD.
      </p>
    </div>
  </div>
</section>

{/* =========================
    STATS SECTION
========================= */}

<section
  className="
    w-full
    max-w-[1120px]

    px-3
    sm:px-6
    md:px-0

    pt-3
    pb-3

    sm:py-8
    md:py-10
  "
>
  {/* ================================================= */}
  {/* HEADING */}
  {/* ================================================= */}

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
      amount: 0.3,
    }}
    transition={{
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    }}
    className="
      text-center

      mb-5
      sm:mb-8
      md:mb-10
    "
  >
    {/* Small Heading */}

    <p
      className="
        font-body
        font-semibold

        text-emerald-800

        text-[9px]
        sm:text-[11px]
        md:text-xs

        tracking-[2px]
        sm:tracking-[3px]

        uppercase

        mb-1.5
        sm:mb-2
      "
    >
      Our Track Record
    </p>

    {/* Main Heading */}

    <h2
      className="
        font-display
        font-bold

        text-ink

        text-[22px]
        sm:text-3xl
        md:text-4xl

        tracking-[-0.5px]
        sm:tracking-[-1px]

        leading-tight
      "
    >
      Built on Experience.{" "}
      <span className="text-emerald-800">
        Driven by Results.
      </span>
    </h2>
  </motion.div>

  {/* ================================================= */}
  {/* TOP LINE */}
  {/* ================================================= */}

  <div
    className="
      w-full
      h-px
      bg-hairline

      mb-3
      sm:mb-8
    "
  />

  {/* ================================================= */}
  {/* STATS - ALWAYS 3 COLUMNS */}
  {/* ================================================= */}

  <div
    className="
      grid
      grid-cols-3

      w-full

      gap-2
      sm:gap-4
      md:gap-5
    "
  >
    {STATS.map((stat, index) => (
      /* ================================================= */
      /* ENTRANCE ANIMATION WRAPPER */
      /* ================================================= */

      <motion.div
        key={stat.label}
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
          amount: 0.3,
        }}
        transition={{
          duration: 0.7,
          delay: index * 0.15,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          min-w-0
          w-full
        "
      >
        {/* ================================================= */}
        {/* FLOATING CARD */}
        {/* ================================================= */}

        <motion.div
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5,
          }}
          className="
            group
            relative
            overflow-hidden

            w-full
            min-w-0

            rounded-lg
            sm:rounded-2xl

            p-[1px]

            cursor-default

            transition-all
            duration-500

            hover:-translate-y-2
          "
        >
          {/* ================================================= */}
          {/* ANIMATED BORDER */}
          {/* ================================================= */}

          <motion.div
            className="
              absolute
              inset-0

              rounded-lg
              sm:rounded-2xl

              bg-[conic-gradient(from_0deg,transparent_0deg,#10B981_80deg,transparent_150deg,transparent_240deg,#34D399_300deg,transparent_360deg)]

              opacity-60
              group-hover:opacity-100

              blur-[1px]

              pointer-events-none
            "
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
              delay: index * 0.5,
            }}
          />

          {/* ================================================= */}
          {/* SOFT STATIC BORDER */}
          {/* ================================================= */}

          <div
            className="
              absolute
              inset-0

              rounded-lg
              sm:rounded-2xl

              border
              border-emerald-800/15

              group-hover:border-emerald-500/50

              transition-colors
              duration-500

              pointer-events-none
            "
          />

          {/* ================================================= */}
          {/* CARD INNER */}
          {/* ================================================= */}

          <div
            className="
              relative
              z-[1]

              h-full
              w-full

              overflow-hidden

              rounded-[7px]
              sm:rounded-[15px]

              px-1.5
              py-4

              sm:px-5
              sm:py-7

              md:px-6
              md:py-8

              bg-white/95

              group-hover:bg-emerald-50

              transition-colors
              duration-500
            "
          >
            {/* ================================================= */}
            {/* BACKGROUND GLOW */}
            {/* ================================================= */}

            <motion.div
              className="
                absolute

                -top-8
                -right-8

                sm:-top-16
                sm:-right-16

                w-20
                h-20

                sm:w-36
                sm:h-36

                rounded-full

                bg-emerald-500/20

                blur-2xl
                sm:blur-3xl

                pointer-events-none
              "
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.6,
              }}
            />

            {/* ================================================= */}
            {/* SECOND SMALL GLOW */}
            {/* ================================================= */}

            <motion.div
              className="
                absolute

                -bottom-8
                -left-8

                sm:-bottom-12
                sm:-left-12

                w-16
                h-16

                sm:w-28
                sm:h-28

                rounded-full

                bg-emerald-400/10

                blur-2xl

                pointer-events-none
              "
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.15, 0.35, 0.15],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.8,
              }}
            />

            {/* ================================================= */}
            {/* MOVING LIGHT */}
            {/* ================================================= */}

            <motion.div
              className="
                absolute
                top-0
                -left-1/2

                w-1/2
                h-full

                bg-gradient-to-r
                from-transparent
                via-emerald-300/10
                to-transparent

                skew-x-12

                pointer-events-none
              "
              animate={{
                left: ["-50%", "150%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
                delay: index * 0.7,
              }}
            />

            {/* ================================================= */}
            {/* NUMBER GLOW */}
            {/* ================================================= */}

            <motion.div
              className="
                absolute

                top-1/2
                left-1/2

                -translate-x-1/2
                -translate-y-1/2

                w-20
                h-16

                sm:w-36
                sm:h-24

                rounded-full

                bg-emerald-500/15

                blur-2xl
                sm:blur-3xl

                pointer-events-none
              "
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.4,
              }}
            />

            {/* ================================================= */}
            {/* NUMBER */}
            {/* ================================================= */}

            <motion.p
              className="
                relative
                z-10

                font-display
                font-bold

                text-emerald-800

                text-[25px]
                sm:text-5xl
                md:text-6xl
                lg:text-7xl

                tracking-[-1px]
                sm:tracking-[-2px]
                md:tracking-[-3px]

                leading-none

                origin-left

                whitespace-nowrap
              "
              animate={{
                textShadow: [
                  "0 0 0px rgba(16,185,129,0)",
                  "0 0 14px rgba(16,185,129,0.35)",
                  "0 0 0px rgba(16,185,129,0)",
                ],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5,
              }}
              whileHover={{
                scale: 1.08,
                x: 5,
              }}
            >
              {stat.value}
            </motion.p>

            {/* ================================================= */}
            {/* LABEL */}
            {/* ================================================= */}

            <p
              className="
                relative
                z-10

                mt-1
                sm:mt-3
                md:mt-4

                font-display
                font-bold

                text-clay

                text-[6px]
                sm:text-[10px]
                md:text-xs

                tracking-[0.3px]
                sm:tracking-[1px]
                md:tracking-[1.8px]

                uppercase

                whitespace-nowrap

                transition-colors
                duration-300

                group-hover:text-ink
              "
            >
              {stat.label}
            </p>

            {/* ================================================= */}
            {/* INITIAL BOTTOM ACCENT */}
            {/* ================================================= */}

            <motion.div
              className="
                absolute
                bottom-0
                left-1.5

                sm:left-5
                md:left-6

                h-[2px]

                bg-emerald-800

                rounded-full
              "
              initial={{
                width: "0%",
              }}
              whileInView={{
                width: "30%",
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                delay: 0.8 + index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            />

            {/* ================================================= */}
            {/* HOVER BOTTOM ACCENT */}
            {/* ================================================= */}

            <div
              className="
                absolute
                bottom-0
                left-1.5

                sm:left-5
                md:left-6

                h-[2px]

                w-0

                bg-emerald-800

                rounded-full

                transition-all
                duration-500

                group-hover:w-[calc(100%-0.75rem)]

                sm:group-hover:w-[calc(100%-2.5rem)]

                md:group-hover:w-[calc(100%-3rem)]
              "
            />
          </div>
        </motion.div>
      </motion.div>
    ))}
  </div>
</section>

        {/* =================================================
            SELECTED WORKS
        ================================================= */}

<section
  className="
    relative
    overflow-hidden

    w-full
    max-w-[1440px]
    mx-auto

    px-3
    sm:px-6
    md:px-12
    lg:px-16
    xl:px-20

    py-8
    sm:py-12
    md:py-16
    lg:py-20
  "
>
  {/* =========================================================
      CONTINUOUS BACKGROUND GLOWS
  ========================================================= */}

  {/* TOP RIGHT GLOW */}

  <motion.div
    className="
      absolute
      pointer-events-none

      -top-16
      -right-20

      sm:-top-28
      sm:-right-28

      md:-top-32
      md:-right-32

      w-40
      h-40

      sm:w-64
      sm:h-64

      md:w-80
      md:h-80

      rounded-full

      bg-emerald-500/40

      blur-3xl
    "
    animate={{
      scale: [1, 1.25, 1],
      opacity: [0.2, 0.45, 0.2],
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

      bottom-[-70px]
      left-[-70px]

      sm:bottom-[-120px]
      sm:left-[-100px]

      md:bottom-[-160px]
      md:left-[-140px]

      w-44
      h-44

      sm:w-72
      sm:h-72

      md:w-96
      md:h-96

      rounded-full

      bg-emerald-400/30

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

  {/* =========================================================
      HEADING
  ========================================================= */}

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
      amount: 0.3,
    }}
    transition={{
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    }}
    className="
      relative
      z-10

      mb-10
      sm:mb-14
      md:mb-16
      lg:mb-20
    "
  >
    {/* =====================================================
        SMALL LABEL
    ===================================================== */}

    <motion.p
      animate={{
        opacity: [0.65, 1, 0.65],
        textShadow: [
          "0 0 0px rgba(16,185,129,0)",
          "0 0 10px rgba(16,185,129,0.45)",
          "0 0 0px rgba(16,185,129,0)",
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

        text-emerald-800

        text-[9px]
        sm:text-xs

        tracking-[2px]
        sm:tracking-[3px]

        uppercase

        mb-2
        sm:mb-3
      "
    >
      Our Portfolio
    </motion.p>

    {/* =====================================================
        MAIN HEADING
    ===================================================== */}

    <motion.h2
      animate={{
        textShadow: [
          "0 0 0px rgba(16,185,129,0)",
          "0 0 10px rgba(16,185,129,0.10)",
          "0 0 0px rgba(16,185,129,0)",
        ],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        relative

        font-display
        font-bold

        text-ink

        text-[34px]
        sm:text-5xl
        md:text-6xl
        lg:text-[80px]

        tracking-[-1.5px]
        sm:tracking-[-2px]
        lg:tracking-[-2.4px]

        leading-[0.95]
      "
    >
      Selected{" "}

      {/* GLOWING WORKS */}

      <motion.span
        animate={{
          textShadow: [
            "0 0 0px rgba(16,185,129,0)",
            "0 0 8px rgba(16,185,129,0.35)",
            "0 0 18px rgba(16,185,129,0.55)",
            "0 0 8px rgba(16,185,129,0.35)",
            "0 0 0px rgba(16,185,129,0)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          text-emerald-800
          inline-block
        "
      >
        Works
      </motion.span>
    </motion.h2>

    {/* =====================================================
        ACCENT LINE
    ===================================================== */}

    <motion.div
      initial={{
        width: 0,
        opacity: 0,
      }}
      whileInView={{
        width: 60,
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut",
      }}
      className="
        mt-4
        sm:mt-6

        h-[2px]

        bg-emerald-800

        rounded-full
      "
    />

    {/* =====================================================
        CONTINUOUS ACCENT GLOW
    ===================================================== */}

    <motion.div
      className="
        absolute

        left-0
        bottom-[-5px]

        h-[5px]

        w-12
        sm:w-16

        bg-emerald-500

        rounded-full

        blur-md

        pointer-events-none
      "
      animate={{
        width: [35, 80, 35],
        opacity: [0.25, 0.7, 0.25],
        boxShadow: [
          "0 0 5px rgba(16,185,129,0.2)",
          "0 0 18px rgba(16,185,129,0.6)",
          "0 0 5px rgba(16,185,129,0.2)",
        ],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  </motion.div>

  {/* =========================================================
      WORKS
  ========================================================= */}

  <div
    className="
      relative
      z-10

      flex
      flex-col

      gap-12
      sm:gap-16
      md:gap-20
      lg:gap-28
    "
  >
    {WORKS.map((work, index) => (
      <motion.div
        key={work.id}
        initial={{
          opacity: 0,
          y: 70,
          scale: 0.97,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 0.8,
          delay: index * 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          relative
          w-full
        "
      >
        {/* =====================================================
            PROJECT NUMBER
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -20,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: index * 0.1 + 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            absolute

            left-1
            sm:left-0

            -top-6
            sm:-top-9
            md:-top-11
            lg:-top-14

            font-display
            font-bold

            text-emerald-800

            text-[15px]
            sm:text-xl
            md:text-3xl
            lg:text-4xl

            tracking-[-0.5px]
            sm:tracking-[-1px]

            leading-none

            select-none

            z-30
          "
        >
          <motion.span
            animate={{
              opacity: [0.65, 1, 0.65],

              textShadow: [
                "0 0 0px rgba(16,185,129,0)",
                "0 0 8px rgba(16,185,129,0.35)",
                "0 0 18px rgba(16,185,129,0.65)",
                "0 0 8px rgba(16,185,129,0.35)",
                "0 0 0px rgba(16,185,129,0)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            0{index + 1}
          </motion.span>
        </motion.div>

        {/* =====================================================
            NUMBER GLOW
        ===================================================== */}

        <motion.div
          className="
            absolute

            left-[-8px]
            top-[-30px]

            sm:left-[-12px]
            sm:top-[-45px]

            md:left-[-15px]
            md:top-[-50px]

            w-8
            h-8

            sm:w-14
            sm:h-14

            md:w-16
            md:h-16

            rounded-full

            bg-emerald-500/15

            blur-2xl

            pointer-events-none

            z-0
          "
          animate={{
            scale: [0.8, 1.3, 0.8],
            opacity: [0.15, 0.45, 0.15],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5,
          }}
        />

        {/* =====================================================
            ANIMATED PROJECT CARD BORDER
        ===================================================== */}

        <motion.div
          className="
            relative

            w-full

            rounded-[15px]
            sm:rounded-[19px]
            md:rounded-[21px]

            p-[1px]
            sm:p-[1.5px]

            overflow-hidden

            bg-[conic-gradient(from_0deg,transparent_0deg,#10B981_70deg,#34D399_110deg,transparent_170deg,transparent_245deg,#059669_300deg,#34D399_330deg,transparent_360deg)]
          "
          animate={{
            backgroundPosition: [
              "0% 50%",
              "100% 50%",
              "0% 50%",
            ],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
            delay: index * 0.35,
          }}
        >
          {/* =================================================
              ROTATING BORDER LIGHT
          ================================================= */}

          <motion.div
            className="
              absolute
              inset-[-40%]

              pointer-events-none

              bg-[conic-gradient(from_0deg,transparent_0deg,rgba(16,185,129,0.7)_35deg,transparent_75deg,transparent_180deg,rgba(52,211,153,0.55)_220deg,transparent_260deg,transparent_360deg)]

              blur-[2px]
            "
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
              delay: index * 0.4,
            }}
          />

          {/* =================================================
              CARD INNER WRAPPER
          ================================================= */}

          <motion.div
            whileHover={{
              y: -5,
            }}
            transition={{
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              z-10

              w-full

              rounded-[14px]
              sm:rounded-[18px]
              md:rounded-[20px]

              overflow-hidden

              bg-white

              transition-all
              duration-500

              shadow-[0_10px_35px_rgba(15,92,77,0.06)]

              hover:shadow-[0_0_45px_rgba(16,185,129,0.20)]
            "
          >
            {/* =================================================
                INNER BORDER GLOW
            ================================================= */}

            <motion.div
              className="
                absolute
                inset-0

                rounded-[14px]
                sm:rounded-[18px]
                md:rounded-[20px]

                pointer-events-none

                border
                border-emerald-400/20

                z-20
              "
              animate={{
                opacity: [0.25, 0.7, 0.25],
                boxShadow: [
                  "inset 0 0 0px rgba(16,185,129,0)",
                  "inset 0 0 18px rgba(16,185,129,0.10)",
                  "inset 0 0 0px rgba(16,185,129,0)",
                ],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
            />

            {/* =================================================
                CARD CONTENT GLOW
            ================================================= */}

            <motion.div
              className="
                absolute
                inset-0

                rounded-[14px]
                sm:rounded-[18px]
                md:rounded-[20px]

                pointer-events-none

                bg-emerald-400/5

                blur-xl

                -z-10
              "
              animate={{
                opacity: [0.15, 0.35, 0.15],
                scale: [0.98, 1.02, 0.98],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.4,
              }}
            />

            {/* =================================================
                WORK CARD
            ================================================= */}

            <WorkCard
              work={work}
              onViewProject={openProject}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    ))}
  </div>

  {/* =========================================================
      BOTTOM AMBIENT GLOW
  ========================================================= */}

  <motion.div
    className="
      absolute
      pointer-events-none

      bottom-8
      right-[10%]

      w-20
      h-20

      sm:w-32
      sm:h-32

      md:w-40
      md:h-40

      rounded-full

      bg-emerald-500/10

      blur-3xl
    "
    animate={{
      scale: [1, 1.4, 1],
      opacity: [0.15, 0.4, 0.15],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
</section>

        {/* =================================================
            CTA
        ================================================= */}

        
<section
  className="
    w-full
    max-w-[1120px]

    mx-3
    sm:mx-6
    md:mx-0

    relative
    overflow-hidden

    rounded-xl
    sm:rounded-2xl

    shadow-[0px_40px_80px_0px_rgba(19,20,15,0.04)]

    bg-gradient-to-br
    from-emerald-50
    to-emerald-100

    /* Mobile */
    px-3.5
    py-7

    /* Tablet */
    sm:px-8
    sm:py-12

    /* Desktop */
    md:px-20
    md:py-20
    lg:px-44

    flex
    flex-col
    items-center
    text-center

    gap-3
    sm:gap-5
    md:gap-6
  "
>
  {/* =========================
      EMERALD DECORATIVE GLOW
  ========================= */}

  <div
    className="
      pointer-events-none
      absolute

      -top-16
      -right-16

      w-40
      h-40

      sm:-top-24
      sm:right-[-80px]

      sm:w-64
      sm:h-64

      rounded-full

      bg-emerald-800/10

      blur-[70px]
      sm:blur-[90px]
    "
  />

  <div
    className="
      pointer-events-none
      absolute

      -bottom-16
      -left-16

      w-40
      h-40

      sm:-bottom-24
      sm:left-[-80px]

      sm:w-64
      sm:h-64

      rounded-full

      bg-emerald-700/10

      blur-[70px]
      sm:blur-[90px]
    "
  />


  {/* =========================
      CTA HEADING
  ========================= */}

  <motion.h2
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
      ease: [0.16, 1, 0.3, 1],
    }}
    className="
      relative
      z-10

      font-display
      font-bold
      text-ink

      /* Mobile */
      text-[25px]

      /* Tablet */
      sm:text-4xl

      /* Desktop */
      md:text-6xl
      lg:text-[80px]

      leading-[1.05]

      tracking-[-1px]
      sm:tracking-[-1.5px]
      md:tracking-[-2.4px]
    "
  >
    Ready to elevate your digital presence?
  </motion.h2>


  {/* =========================
      CTA DESCRIPTION
  ========================= */}

  <p
    className="
      relative
      z-10

      font-body
      text-clay

      /* Mobile */
      text-[11px]

      /* Tablet */
      sm:text-base

      /* Desktop */
      md:text-xl

      leading-relaxed

      max-w-[520px]
      sm:max-w-[650px]
    "
  >
    Partner with us to create experiences that resonate and perform.
  </p>


  {/* =========================
      CTA BUTTON
  ========================= */}

  <a
    href="#"
    className="
      relative
      z-10

      inline-flex
      items-center
      justify-center

      bg-emerald-800
      hover:bg-emerald-900

      transition-all
      duration-300

      text-white

      font-display
      font-bold

      /* Mobile */
      text-[11px]

      /* Tablet */
      sm:text-base

      /* Desktop */
      md:text-xl

      tracking-[-0.3px]
      sm:tracking-[-0.5px]

      rounded-full

      /* Mobile */
      px-4
      py-2.5

      /* Tablet */
      sm:px-7
      sm:py-3.5

      /* Desktop */
      md:px-8
      md:py-4

      shadow-[0px_10px_30px_rgba(6,95,70,0.22)]

      hover:-translate-y-1

      hover:shadow-[0px_15px_35px_rgba(6,95,70,0.30)]
    "
  >
    Start a Conversation
  </a>
</section>


      </main>

      {/* =================================================
          FOOTER
      ================================================= */}

      <Footer />

      {/* =================================================
          PROJECT MODAL
      ================================================= */}

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={closeProject}
          />
        )}
      </AnimatePresence>
    </div>
  );
}