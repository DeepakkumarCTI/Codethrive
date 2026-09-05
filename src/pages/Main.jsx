import { motion } from "framer-motion";
import {
  
  AnimatePresence,
} from "framer-motion";

import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Sparkles,
  Star,
} from "lucide-react";

import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ============================================================
// IMAGES
// ============================================================

import projectImage1 from "../assets/digital.jpg";
import projectImage2 from "../assets/healthcare.jpg";
import arun from "../assets/arun.jpg";
import priya from "../assets/priya.jpg";
import rahul from "../assets/rahul.jpg";

import serviceImage from "../assets/services/service.jpg";
import webImage from "../assets/services/web.jpg";
import mobileImage from "../assets/services/mobile.jpg";
import softwareImage from "../assets/services/software.jpg";

import welcomeImage from "../assets/welcome.jpg";

// ============================================================
// DATA
// ============================================================

const PROJECTS = [
  {
    number: "01",
    title: "Restaurant Website",
    category: "Web Application",
    description:
      "A premium, highly interactive dining website template designed for modern fine dining and restaurant venues.",
    image: projectImage1,
  },
  {
    number: "02",
    title: "Gym Website",
    category: "Fitness Platform",
    description:
      "An energetic and modern fitness website designed to showcase gym programs, memberships, trainers, and fitness services.",
    image: projectImage2,
  },
  {
    number: "03",
    title: "Cake & Bakery Shop",
    category: "Bakery Website",
    description:
      "A beautiful and inviting bakery website created to showcase cakes, pastries, custom orders, and delicious bakery collections.",
    image: webImage,
  },
];

const SERVICES = [
  {
    number: "01",
    title: "Web Development",
    text: "High-performance websites built to strengthen your digital presence and grow your business.",
    image: webImage,
  },
  {
    number: "02",
    title: "Mobile App Development",
    text: "Modern mobile applications designed for seamless experiences across platforms.",
    image: mobileImage,
  },
  {
    number: "03",
    title: "Software Development",
    text: "Custom software solutions designed to simplify operations and solve complex business needs.",
    image: softwareImage,
  },
];

const REVIEWS = [
  {
    name: "Arun Kumar",
    role: "Business Owner",
    quote: "CodeThrive transformed our online presence...",
    photo: arun,
  },
  {
    name: "Priya Sharma",
    role: "Founder",
    quote: "Professional, creative and very easy to work with.",
    photo: priya,
  },
  {
    name: "Rahul",
    role: "Entrepreneur",
    quote: "They understood exactly what we needed.",
    photo: rahul,
  },
  {
    name: "Arun Kumar",
    role: "Business Owner",
    quote: "CodeThrive transformed our online presence...",
    photo: arun,
  },
  {
    name: "Priya Sharma",
    role: "Founder",
    quote: "Professional, creative and very easy to work with.",
    photo: priya,
  },
  {
    name: "Rahul",
    role: "Entrepreneur",
    quote: "They understood exactly what we needed.",
    photo: rahul,
  },
];

// ============================================================
// ANIMATION VARIANTS
// ============================================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
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

// ============================================================
// HOME
// ============================================================

export default function Main() {

  const [activeReview, setActiveReview] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setActiveReview((prev) => {
      return (prev + 1) % REVIEWS.length;
    });
  }, 3500);

  return () => clearInterval(interval);
}, []);
  return (
    <div className="w-full overflow-hidden bg-[#F3F7F4] text-[#24332F]">
      <Navbar />

      <main>
        {/* =====================================================
            HERO SECTION
        ===================================================== */}

      <section
  className="
    relative
    min-h-screen
    flex
    items-center
    overflow-hidden

    pt-24
    sm:pt-28
    lg:pt-32

    px-5
    sm:px-8
    md:px-12
    lg:px-16
    xl:px-20
  "
>
  {/* ==================================================
      BACKGROUND VIDEO
  ================================================== */}

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

      z-0

      pointer-events-none
      select-none
    "
  >
    <source
      src="/videos/digital-background1.mp4"
      type="video/mp4"
    />
  </video>


  {/* ==================================================
      DARK OVERLAY
  ================================================== */}

  <div
    className="
      absolute
      inset-0
      z-[1]

      bg-[#041A16]/70

      pointer-events-none
    "
  />


  {/* ==================================================
      LEFT TO RIGHT GRADIENT
  ================================================== */}

  <div
    className="
      absolute
      inset-0
      z-[2]

      bg-gradient-to-r

      from-[#031411]/95
      via-[#061A16]/75
      via-[#061A16]/45
      to-[#061A16]/10

      pointer-events-none
    "
  />


  {/* ==================================================
      BOTTOM GRADIENT
  ================================================== */}

  <div
    className="
      absolute
      inset-0
      z-[2]

      bg-gradient-to-t

      from-[#031411]/60
      via-transparent
      to-[#031411]/20

      pointer-events-none
    "
  />


  {/* ==================================================
      ANIMATED GLOW - TOP RIGHT
  ================================================== */}

  <motion.div
    animate={{
      x: [0, 70, 0],
      y: [0, -40, 0],
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.7, 0.3],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      z-[3]

      top-[5%]
      right-[-120px]

      w-[350px]
      h-[350px]

      sm:w-[500px]
      sm:h-[500px]

      rounded-full

      bg-[#16A085]/25

      blur-[120px]

      pointer-events-none
    "
  />


  {/* ==================================================
      ANIMATED GLOW - BOTTOM LEFT
  ================================================== */}

  <motion.div
    animate={{
      x: [0, -60, 0],
      y: [0, 40, 0],
      scale: [1, 1.15, 1],
    }}
    transition={{
      duration: 9,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      z-[3]

      bottom-[-100px]
      left-[-100px]

      w-[300px]
      h-[300px]

      sm:w-[450px]
      sm:h-[450px]

      rounded-full

      bg-[#0F5C4D]/30

      blur-[120px]

      pointer-events-none
    "
  />


  {/* ==================================================
      GRID EFFECT
  ================================================== */}

  <div
    className="
      absolute
      inset-0
      z-[3]

      opacity-[0.08]

      pointer-events-none

      bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)]

      bg-[size:60px_60px]
    "
  />


  {/* ==================================================
      HERO CONTENT
  ================================================== */}

  <div
    className="
      relative
      z-10

      w-full
      max-w-[1440px]
      mx-auto

      flex
      items-center
    "
  >
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="visible"
      className="
        w-full
        max-w-[1100px]
      "
    >

      {/* ==================================================
          LABEL
      ================================================== */}

      <motion.div
        variants={fadeUp}
        className="
          flex
          items-center
          gap-3

          mb-6
          sm:mb-8
        "
      >

        {/* Animated Dot */}

        <span className="relative flex w-3 h-3">

          <span
            className="
              absolute
              inline-flex
              w-full
              h-full

              rounded-full

              bg-[#4FE0BD]

              opacity-75

              animate-ping
            "
          />

          <span
            className="
              relative

              inline-flex

              w-3
              h-3

              rounded-full

              bg-[#4FE0BD]

              shadow-[0_0_15px_rgba(79,224,189,0.9)]
            "
          />

        </span>


        <span
          className="
            font-body

            text-[10px]
            sm:text-xs

            uppercase

            tracking-[2px]
            sm:tracking-[3px]

            text-[#A9D1C5]

            font-semibold

            drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]
          "
        >
          CodeThrive InfoTech
        </span>

      </motion.div>


      {/* ==================================================
          MAIN HEADING
      ================================================== */}

      <motion.h1
        variants={fadeUp}
        className="
          font-display
          font-black

          text-white

          text-[50px]
          sm:text-[68px]
          md:text-[85px]
          lg:text-[100px]
          xl:text-[112px]

          leading-[0.9]

          tracking-[-3px]
          sm:tracking-[-5px]
          lg:tracking-[-6px]

          drop-shadow-[0_8px_30px_rgba(0,0,0,0.65)]
        "
      >

        {/* WE BUILD */}

        <motion.span
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="block"
        >
          We build
        </motion.span>


        {/* DIGITAL */}

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
            duration: 0.8,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            block

            bg-gradient-to-r

            from-[#5EF0C8]
            via-[#22C59B]
            to-[#A9D1C5]

            bg-clip-text
            text-transparent

            drop-shadow-none
          "
        >
          digital
        </motion.span>


        {/* EXPERIENCES */}

        <motion.span
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            inline-block

            text-white
          "
        >
          experiences.

          {/* Animated Underline */}

          <motion.span
            initial={{
              width: 0,
            }}
            animate={{
              width: "100%",
            }}
            transition={{
              delay: 1.4,
              duration: 1.2,
              ease: "easeOut",
            }}
            className="
              absolute

              left-0
              bottom-[-8px]

              h-[3px]
              sm:h-[5px]

              rounded-full

              bg-gradient-to-r
              from-[#4FE0BD]
              to-transparent

              shadow-[0_0_15px_rgba(79,224,189,0.5)]
            "
          />

        </motion.span>

      </motion.h1>


      {/* ==================================================
          DESCRIPTION
      ================================================== */}

      <motion.p
        variants={fadeUp}
        className="
          mt-8
          sm:mt-10

          max-w-[650px]

          font-body

          text-base
          sm:text-lg
          lg:text-xl

          leading-relaxed

          text-white/85

          drop-shadow-[0_3px_15px_rgba(0,0,0,0.8)]
        "
      >
        We create thoughtful websites, digital products and
        experiences that help ambitious businesses grow.
      </motion.p>


      {/* ==================================================
          ACTION BUTTONS
      ================================================== */}

      <motion.div
        variants={fadeUp}
        className="
          flex
          flex-wrap

          items-center

          gap-4

          mt-8
          sm:mt-10
        "
      >

        {/* START PROJECT */}

        <Link
          to="/contact"
          className="
            group

            relative

            overflow-hidden

            flex
            items-center
            gap-2

            bg-[#0F5C4D]

            hover:bg-[#167562]

            text-white

            rounded-full

            px-6
            sm:px-8

            py-4

            font-body
            font-semibold

            text-sm

            transition-all
            duration-300

            hover:-translate-y-1

            shadow-[0_12px_35px_rgba(15,92,77,0.5)]
          "
        >

          {/* Button Glow */}

          <span
            className="
              absolute

              inset-0

              bg-gradient-to-r

              from-transparent
              via-white/20
              to-transparent

              -translate-x-full

              group-hover:translate-x-full

              transition-transform
              duration-700
            "
          />

          <span className="relative z-10">
            Let’s Work Together
          </span>

          <ArrowUpRight
            size={18}
            className="
              relative
              z-10

              transition-transform
              duration-300

              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />

        </Link>


        {/* EXPLORE WORK */}

        <Link
          to="/work"
          className="
            group

            flex
            items-center
            gap-2

            px-6
            sm:px-7

            py-4

            rounded-full

            border

            border-white/30

            bg-white/10

            backdrop-blur-md

            text-white

            font-body
            font-medium

            text-sm

            hover:bg-white/20

            hover:border-[#4FE0BD]

            transition-all
            duration-300
          "
        >
          Explore our work

          <ArrowDown
            size={16}
            className="
              transition-transform
              duration-300

              group-hover:translate-y-1
            "
          />

        </Link>

      </motion.div>

    </motion.div>

  </div>


  {/* ==================================================
      FLOATING DECORATIVE ELEMENT
  ================================================== */}

  <motion.div
    animate={{
      y: [0, -15, 0],
      rotate: [0, 3, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute

      z-[5]

      right-[8%]
      top-[50%]

      hidden
      xl:block
    "
  >

    <div
      className="
        w-20
        h-20

        rounded-full

        border
        border-[#4FE0BD]/30

        bg-[#0F5C4D]/10

        backdrop-blur-sm

        flex
        items-center
        justify-center
      "
    >
      <Sparkles
        size={26}
        className="
          text-[#4FE0BD]
        "
      />
    </div>

  </motion.div>


  {/* ==================================================
      SCROLL INDICATOR
  ================================================== */}

  <motion.div
    animate={{
      y: [0, 10, 0],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute

      z-10

      bottom-7

      left-1/2
      -translate-x-1/2

      hidden
      md:flex

      flex-col
      items-center

      gap-2

      text-white/70
    "
  >

    <span
      className="
        font-body

        text-[8px]

        tracking-[3px]

        uppercase
      "
    >
      Scroll
    </span>


    <div
      className="
        w-[1px]
        h-8

        bg-gradient-to-b

        from-[#4FE0BD]
        to-transparent
      "
    />


    <ArrowDown
      size={14}
      className="
        text-[#4FE0BD]
      "
    />

  </motion.div>

</section>

        {/* =====================================================
            WELCOME
        ===================================================== */}

        <section
          className="
            relative
            overflow-hidden

            px-4
            sm:px-6
            md:px-12
            lg:px-16
            xl:px-20

            py-12
            sm:py-16
            lg:py-24

            bg-gradient-to-br
            from-[#F7FBF9]
            via-[#E7F0ED]
            to-[#DCECE7]
          "
        >
          <div
            className="
              absolute
              -top-32
              -left-32

              w-[280px]
              h-[280px]

              sm:w-[400px]
              sm:h-[400px]

              rounded-full
              bg-[#0F5C4D]/10
              blur-3xl
              pointer-events-none
            "
          />

          <div
            className="
              absolute
              -bottom-40
              -right-32

              w-[300px]
              h-[300px]

              sm:w-[450px]
              sm:h-[450px]

              rounded-full
              bg-[#8DB8AC]/20
              blur-3xl
              pointer-events-none
            "
          />

          <div className="relative z-10 max-w-[1440px] mx-auto grid grid-cols-2 max-[380px]:grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="col-span-1 lg:col-span-5"
            >
              <div className="relative aspect-[4/5] rounded-[1.25rem] sm:rounded-[1.75rem] lg:rounded-[2rem] overflow-hidden bg-white/50 backdrop-blur-sm border border-white/70 shadow-[0_20px_60px_rgba(15,92,77,0.10)]">
                <img
                  src={welcomeImage}
                  alt="Welcome to CodeThrive"
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-contain
                    p-3
                    sm:p-8
                    lg:p-12
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="col-span-1 lg:col-span-7"
            >
              <p className="font-body text-[#0F5C4D] text-[8px] sm:text-xs uppercase tracking-[1.2px] sm:tracking-[2px] mb-2 sm:mb-5">
                Welcome to CodeThrive
              </p>

              <h2 className="font-display font-bold text-[#24332F] text-[22px] sm:text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-[-1px] sm:tracking-[-2px]">
                Technology
                <br />

                <span className="bg-gradient-to-r from-[#0F5C4D] via-[#167562] to-[#0F5C4D] bg-clip-text text-transparent">
                  should feel human.
                </span>
              </h2>

              <p className="mt-4 sm:mt-6 lg:mt-7 font-body text-[#687773] text-[10px] sm:text-sm md:text-base lg:text-lg leading-relaxed max-w-[650px]">
                At CodeThrive InfoTech, we combine design,
                technology and strategy to create digital
                experiences that are simple to use, beautiful
                to look at and built to last.
              </p>

              <p className="mt-3 sm:mt-4 font-body text-[#687773] text-[10px] sm:text-sm md:text-base lg:text-lg leading-relaxed max-w-[650px]">
                From the first idea to the final product, we
                work closely with our clients to turn ambitious
                ideas into meaningful digital solutions.
              </p>

              <Link
                to="/about"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  mt-4
                  sm:mt-6
                  lg:mt-7
                  font-body
                  font-semibold
                  text-sm
                  text-[#0F5C4D]
                  hover:text-[#0B4A3E]
                "
              >
                More about us

                <ArrowUpRight
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            SELECTED WORK
        ===================================================== */}

        <section
          id="work"
          className="
            px-4
            sm:px-6
            md:px-12
            lg:px-16
            xl:px-20

            py-12
            sm:py-16
            md:py-20
            lg:py-24

            bg-white/20
            overflow-hidden
          "
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 sm:gap-6 mb-8 sm:mb-10 lg:mb-12">
              <div>
                <p className="font-body text-[#0F5C4D] text-[9px] sm:text-xs uppercase tracking-[1.5px] sm:tracking-[2px] mb-2 sm:mb-4">
                  Selected Work
                </p>

                <h2 className="font-display font-bold text-[#24332F] text-[28px] sm:text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-[-1.5px]">
                  Ideas into
                  <span className="text-[#0F5C4D]">
                    {" "}experiences.
                  </span>
                </h2>
              </div>

              <Link
                to="/work"
                className="group inline-flex items-center gap-2 text-sm font-body font-semibold text-[#0F5C4D] hover:text-[#0B4A3E]"
              >
                View all work

                <ArrowUpRight
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </Link>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4">
              {PROJECTS.map((project, index) => {
                const isFullWidth = index % 3 === 2;

                return (
                  <motion.div
                    key={project.number}
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
                      amount: 0.15,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.1,
                    }}
                    className={`
                      group
                      relative
                      ${
                        isFullWidth
                          ? "col-span-2 lg:col-span-12"
                          : "col-span-1 lg:col-span-6"
                      }

                      rounded-[1.1rem]
                      sm:rounded-[1.5rem]

                      overflow-hidden
                      bg-[#E7F0ED]
                      border
                      border-[#24332F]/10
                      cursor-pointer

                      min-h-[190px]
                      sm:min-h-[240px]
                      md:min-h-[280px]
                    `}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                        absolute
                        inset-0
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F5C4D]/85 via-[#0F5C4D]/35 to-transparent" />

                    <span className="absolute top-3 left-3 sm:top-5 sm:left-5 text-white text-xs z-10">
                      {project.number}
                    </span>

                    <div className="absolute top-3 right-3 sm:top-5 sm:right-5 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center text-[#0F5C4D] opacity-0 group-hover:opacity-100 transition-all z-20">
                      <ArrowUpRight size={16} />
                    </div>

                    <div className="absolute left-3 right-3 bottom-3 sm:left-5 sm:right-5 sm:bottom-5 z-10">
                      <p className="text-[8px] sm:text-[10px] uppercase tracking-[1.5px] text-white/80">
                        {project.category}
                      </p>

                      <h3 className="font-display font-bold text-white text-[15px] sm:text-xl md:text-2xl">
                        {project.title}
                      </h3>

                      <p className="hidden sm:block mt-2 text-sm text-white/75 max-w-[500px]">
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICES
        ===================================================== */}

        <section
          className="
            relative
            px-3
            sm:px-6
            md:px-12
            lg:px-16
            xl:px-20

            py-10
            sm:py-16
            md:py-20
            lg:py-24

            overflow-hidden
          "
        >
          <div
            className="absolute inset-0 bg-cover bg-center pointer-events-none"
            style={{
              backgroundImage: `url(${serviceImage})`,
            }}
          />

          <div className="absolute inset-0 bg-black/30 pointer-events-none" />

          <div className="relative z-10 max-w-[1440px] mx-auto">
            <div className="max-w-[820px] mb-7 sm:mb-10 lg:mb-12 p-4 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl bg-black/25 backdrop-blur-[3px] border border-white/15">
              <p className="font-body font-semibold text-[#7DE8C9] text-[9px] sm:text-xs uppercase tracking-[1.5px] sm:tracking-[3px] mb-3 sm:mb-5">
                What we do
              </p>

              <h2 className="font-display font-bold text-white text-[28px] sm:text-4xl md:text-5xl lg:text-6xl leading-[0.95]">
                Everything you need
                <br />

                <span className="text-[#69E6C4]">
                  to go digital.
                </span>
              </h2>
            </div>

            <div className="relative w-full overflow-hidden py-2 sm:py-4">
              <motion.div
                className="flex w-max gap-2 sm:gap-4 lg:gap-5"
                animate={{
                  x: ["0%", "-50%"],
                }}
                transition={{
                  duration: 28,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {[...SERVICES, ...SERVICES].map(
                  (service, index) => (
                    <motion.div
                      key={`${service.number}-${index}`}
                      className="
                        relative
                        group
                        flex-shrink-0

                        w-[72vw]
                        sm:w-[48vw]
                        md:w-[34vw]
                        lg:w-[300px]
                        xl:w-[330px]

                        min-h-[190px]
                        sm:min-h-[280px]
                        lg:min-h-[310px]

                        rounded-[0.8rem]
                        sm:rounded-[1.5rem]

                        border
                        border-white/50
                        overflow-hidden
                      "
                    >
                      <motion.div
                        className="
                          absolute
                          inset-0
                          bg-cover
                          bg-center
                        "
                        style={{
                          backgroundImage: `url(${service.image})`,
                        }}
                        whileHover={{
                          scale: 1.08,
                        }}
                        transition={{
                          duration: 0.8,
                        }}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#073B31]/95 via-[#0F5C4D]/55 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10 h-full p-3 sm:p-6 lg:p-7 flex flex-col">
                        <span className="text-white text-xs">
                          {service.number}
                        </span>

                        <h3 className="mt-3 sm:mt-7 font-display font-bold text-[14px] sm:text-2xl lg:text-3xl text-white">
                          {service.title}
                        </h3>

                        <p className="mt-2 sm:mt-4 text-[10px] sm:text-sm lg:text-base leading-relaxed text-white/90">
                          {service.text}
                        </p>

                        <div className="mt-auto pt-3 sm:pt-6">
                          <ArrowUpRight
                            size={18}
                            className="text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* =====================================================
            REVIEWS
        ===================================================== */}
<section
  className="
    relative
    overflow-hidden

    px-4
    sm:px-8
    md:px-12
    lg:px-16
    xl:px-20

    py-6
    sm:py-10
    lg:py-12

    bg-gradient-to-br
    from-[#F4FAF7]
    via-[#E7F0ED]
    to-[#CFE4DD]
  "
>
  {/* ============================================= */}
  {/* BACKGROUND DECORATION */}
  {/* ============================================= */}

  <div
    className="
      absolute
      top-[-150px]
      right-[-100px]

      w-[500px]
      h-[500px]

      rounded-full

      bg-[#0F5C4D]/5

      blur-3xl
    "
  />

  <div
    className="
      absolute
      bottom-[-150px]
      left-[-100px]

      w-[400px]
      h-[400px]

      rounded-full

      bg-[#0F5C4D]/5

      blur-3xl
    "
  />

  <div
    className="
      relative
      z-10

      max-w-[1440px]
      mx-auto
    "
  >
    {/* ============================================= */}
    {/* HEADER */}
    {/* ============================================= */}

    <motion.div
      className="
        mb-5
        sm:mb-9
        lg:mb-10
      "
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
      }}
    >
      <p
        className="
          font-body

          text-[#0F5C4D]

          text-[9px]
          sm:text-xs

          uppercase

          tracking-[2px]

          mb-1.5
          sm:mb-3
        "
      >
        What People Say
      </p>

      <h2
        className="
          font-display
          font-bold

          text-[#24332F]

          text-2xl
          sm:text-5xl
          lg:text-6xl

          leading-tight
        "
      >
        Our clients love working with us
      </h2>
    </motion.div>

    {/* ============================================= */}
    {/* REVIEW ANIMATION AREA */}
    {/* ============================================= */}

    <div
      className="
        relative

        w-full

        h-[235px]
        sm:h-[330px]
        lg:h-[355px]

        flex
        items-center
        justify-center

        overflow-hidden
      "
    >
      <AnimatePresence
        mode="wait"
        initial={false}
      >
        <motion.div
          key={activeReview}

          /* ===================================== */
          /* ENTER FROM RIGHT */
          /* ===================================== */

          initial={{
            opacity: 0,
            x: "110vw",
            scale: 0.72,
            rotate: 3,
          }}

          /* ===================================== */
          /* CENTER */
          /* ===================================== */

          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
            rotate: 0,
          }}

          /* ===================================== */
          /* EXIT TO LEFT */
          /* ===================================== */

          exit={{
            opacity: 0,
            x: "-110vw",
            scale: 0.72,
            rotate: -3,
          }}

          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}

          className="
            absolute

            w-[92%]
            sm:w-[580px]
            lg:w-[700px]

            min-h-[195px]
            sm:min-h-[235px]

            group

            bg-white/90

            backdrop-blur-md

            rounded-[1.25rem]
            sm:rounded-[2rem]

            border
            border-white

            p-4
            sm:p-7
            lg:p-8

            shadow-[0px_20px_55px_rgba(15,92,77,0.16)]
            sm:shadow-[0px_25px_70px_rgba(15,92,77,0.18)]
          "
        >
          {/* ===================================== */}
          {/* TOP ACCENT */}
          {/* ===================================== */}

          <div
            className="
              absolute

              top-0
              left-[10%]
              right-[10%]

              h-[2px]
              sm:h-[3px]

              rounded-full

              bg-gradient-to-r
              from-transparent
              via-[#0F5C4D]
              to-transparent
            "
          />

          {/* ===================================== */}
          {/* STARS */}
          {/* ===================================== */}

          <div
            className="
              flex
              gap-0.5
              sm:gap-1

              mb-2
              sm:mb-4
            "
          >
            {[1, 2, 3, 4, 5].map(
              (star) => (
                <Star
                  key={star}

                  size={14}
                  className="
                    sm:hidden
                    text-[#0F5C4D]
                  "

                  fill="currentColor"
                />
              )
            )}

            {[1, 2, 3, 4, 5].map(
              (star) => (
                <Star
                  key={`desktop-${star}`}

                  size={17}

                  className="
                    hidden
                    sm:block

                    text-[#0F5C4D]
                  "

                  fill="currentColor"
                />
              )
            )}
          </div>

          {/* ===================================== */}
          {/* BIG QUOTE DECORATION */}
          {/* ===================================== */}

          <div
            className="
              absolute

              top-3
              right-5

              sm:top-5
              sm:right-7

              font-display

              text-[55px]
              sm:text-[70px]

              leading-none

              text-[#0F5C4D]/5

              pointer-events-none
            "
          >
            "
          </div>

          {/* ===================================== */}
          {/* REVIEW TEXT */}
          {/* ===================================== */}

          <p
            className="
              relative
              z-10

              font-display

              text-[14px]
              sm:text-[19px]
              lg:text-[22px]

              leading-relaxed

              text-[#24332F]

              max-w-[620px]

              mb-3
              sm:mb-5
            "
          >
            "
            {REVIEWS[activeReview].quote}
            "
          </p>

          {/* ===================================== */}
          {/* REVIEWER */}
          {/* ===================================== */}

          <div
            className="
              flex
              items-center

              gap-2.5
              sm:gap-4
            "
          >
            {/* PROFILE */}

            <div
              className="
                w-9
                h-9

                sm:w-12
                sm:h-12

                rounded-full

                overflow-hidden

                flex-shrink-0

                ring-2
                ring-[#0F5C4D]/15
              "
            >
              <img
                src={
                  REVIEWS[activeReview].photo
                }

                alt={
                  REVIEWS[activeReview].name
                }

                className="
                  w-full
                  h-full

                  object-cover
                "
              />
            </div>

            {/* NAME */}

            <div>
              <p
                className="
                  font-body

                  font-semibold

                  text-xs
                  sm:text-base

                  text-[#24332F]
                "
              >
                {REVIEWS[activeReview].name}
              </p>

              <p
                className="
                  font-body

                  text-[10px]
                  sm:text-sm

                  text-[#687773]

                  mt-0.5
                "
              >
                {REVIEWS[activeReview].role}
              </p>
            </div>
          </div>

          {/* ===================================== */}
          {/* REVIEW NUMBER */}
          {/* ===================================== */}

          <div
            className="
              absolute

              bottom-3
              right-5

              sm:bottom-5
              sm:right-7

              font-body

              text-[10px]
              sm:text-xs

              text-[#0F5C4D]/40
            "
          >
            {String(activeReview + 1).padStart(2, "0")}

            <span className="mx-1">
              /
            </span>

            {String(REVIEWS.length).padStart(2, "0")}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ============================================= */}
      {/* DOT INDICATORS */}
      {/* ============================================= */}

      <div
        className="
          absolute

          bottom-0

          left-1/2

          -translate-x-1/2

          flex

          gap-1.5
        "
      >
        {REVIEWS.map(
          (_, index) => (
            <motion.div
              key={index}

              animate={{
                width:
                  activeReview === index
                    ? 24
                    : 6,

                opacity:
                  activeReview === index
                    ? 1
                    : 0.35,
              }}

              transition={{
                duration: 0.4,
              }}

              className="
                h-[6px]

                rounded-full

                bg-[#0F5C4D]
              "
            />
          )
        )}
      </div>
    </div>
  </div>
</section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

       <section
  className="
    px-4
    sm:px-8
    md:px-12
    lg:px-16
    xl:px-20

    py-10
    sm:py-20
    lg:py-24
  "
>
  <motion.div
    initial={{
      opacity: 0,
      scale: 0.96,
      y: 30,
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
      ease: "easeOut",
    }}
    className="
      relative
      overflow-hidden

      rounded-[1.25rem]
      sm:rounded-[2rem]

      bg-[#0F5C4D]

      px-5
      sm:px-10
      lg:px-16

      py-8
      sm:py-16
      lg:py-20
    "
  >

    {/* ============================= */}
    {/* BACKGROUND GLOW */}
    {/* ============================= */}

    <motion.div
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.25, 0.45, 0.25],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute
        -right-32
        -top-32

        w-[400px]
        h-[400px]

        rounded-full

        bg-[#A9D1C5]/20
        blur-3xl
      "
    />


    {/* ============================= */}
    {/* FLOATING DOTS */}
    {/* ============================= */}

    <motion.div
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute
        right-[12%]
        top-[18%]

        w-3
        h-3

        rounded-full
        bg-[#A9D1C5]
      "
    />

    <motion.div
      animate={{
        y: [0, 25, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5,
      }}
      className="
        absolute
        right-[32%]
        bottom-[18%]

        w-2
        h-2

        rounded-full
        bg-white/70
      "
    />


    {/* ============================= */}
    {/* RIGHT SIDE ANIMATED VISUAL */}
    {/* ============================= */}

    <motion.div
      initial={{
        opacity: 0,
        x: 60,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.9,
        delay: 0.3,
        ease: "easeOut",
      }}
      className="
        absolute
        right-6
        sm:right-10
        lg:right-16

        top-1/2
        -translate-y-1/2

        hidden
        md:block
      "
    >

      {/* Floating animation wrapper */}

      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 1, 0, -1, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative

          w-[280px]
          lg:w-[380px]

          rounded-2xl

          bg-[#073B31]

          border
          border-white/10

          shadow-2xl

          overflow-hidden
        "
      >

        {/* ============================= */}
        {/* CODE WINDOW HEADER */}
        {/* ============================= */}

        <div
          className="
            flex
            items-center
            gap-2

            px-5
            py-4

            border-b
            border-white/10
          "
        >

          <div className="w-2.5 h-2.5 rounded-full bg-[#FF7B7B]" />

          <div className="w-2.5 h-2.5 rounded-full bg-[#F7C948]" />

          <div className="w-2.5 h-2.5 rounded-full bg-[#66D19E]" />

          <div
            className="
              ml-3

              text-[10px]
              text-white/40

              font-mono
            "
          >
            idea.js
          </div>

        </div>


        {/* ============================= */}
        {/* CODE */}
        {/* ============================= */}

        <div
          className="
            p-5
            lg:p-7

            font-mono

            text-[10px]
            lg:text-sm

            leading-7
          "
        >

          <motion.p
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="text-[#A9D1C5]"
          >
            const idea = {"{"}
          </motion.p>

          <p className="text-white/70 pl-5">
            vision:
            <span className="text-[#A9D1C5]">
              {" "} "something amazing",
            </span>
          </p>

          <p className="text-white/70 pl-5">
            creativity:
            <span className="text-[#A9D1C5]">
              {" "} true,
            </span>
          </p>

          <p className="text-white/70 pl-5">
            impact:
            <span className="text-[#A9D1C5]">
              {" "} "limitless"
            </span>
          </p>

          <motion.p
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 1,
            }}
            className="text-[#A9D1C5]"
          >
            {"}"}
          </motion.p>


          {/* Typing Cursor */}

          <motion.div
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
            className="
              mt-3

              w-2
              h-4

              bg-[#A9D1C5]
            "
          />

        </div>

      </motion.div>


      {/* ============================= */}
      {/* FLOATING MINI CARD */}
      {/* ============================= */}

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          -left-10
          bottom-10

          px-4
          py-3

          rounded-xl

          bg-white/10
          backdrop-blur-xl

          border
          border-white/10
        "
      >

        <div className="flex items-center gap-2">

          <div
            className="
              w-2
              h-2

              rounded-full

              bg-[#A9D1C5]

              animate-pulse
            "
          />

          <span
            className="
              text-[10px]
              text-white/70

              font-body
            "
          >
            Building something great
          </span>

        </div>

      </motion.div>

    </motion.div>


    {/* ============================= */}
    {/* CONTENT */}
    {/* ============================= */}

    <div
      className="
        relative
        z-10

        max-w-[650px]
      "
    >

      <Sparkles
        size={18}
        className="
          text-white/80
          mb-3
          sm:mb-5
        "
      />


      <h2
        className="
          font-display
          font-bold

          text-white

          text-[2rem]
          sm:text-5xl
          lg:text-7xl

          leading-[0.98]
        "
      >
        Have an idea?

        <br />

        Let&apos;s make it

        <span className="text-[#A9D1C5]">
          {" "}real.
        </span>

      </h2>


      <p
        className="
          mt-4
          sm:mt-6

          max-w-[550px]

          font-body

          text-[11px]
          sm:text-base

          leading-relaxed

          text-white/80
        "
      >
        Tell us what you&apos;re building and let&apos;s
        explore how we can turn your idea into a
        meaningful digital experience.
      </p>


      <Link
        to="/contact#contact-form"
        className="
          group

          inline-flex
          items-center
          gap-1.5

          mt-5
          sm:mt-7

          bg-white
          text-[#0F5C4D]

          rounded-full

          px-4
          sm:px-7

          py-2.5
          sm:py-4

          font-body
          font-semibold

          text-[11px]
          sm:text-sm

          transition-all
          duration-300

          hover:-translate-y-1
          hover:shadow-xl
        "
      >

        Start a Conversation

        <ArrowUpRight
          size={14}
          className="
            sm:w-[17px]
            sm:h-[17px]

            transition-transform
            duration-300

            group-hover:translate-x-1
            group-hover:-translate-y-1
          "
        />

      </Link>

    </div>

  </motion.div>
</section>
      </main>

      <Footer />
    </div>
  );
}