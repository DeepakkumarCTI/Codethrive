import { motion } from "framer-motion";
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

import heroImage from "../assets/priya.jpg";
import projectImage1 from "../assets/digital.jpg";
import projectImage2 from "../assets/healthcare.jpg";
import projectImage3 from "../assets/web.jpg";
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
    category: "web application",
    description:
      "A premium, High intractive dining website template designed for modern fine dining and restaurant venues.",
    className: "lg:col-span-7 lg:row-span-2",
    image: projectImage1,
  },
   {
    number: "02",
    title: "Gym Website",
    category: "Fitness Platform",
    description:
      "An energetic and modern fitness website designed to showcase gym programs, memberships, trainers, and fitness services.",
    className: "lg:col-span-5",
    image: projectImage2,
  },

  {
    number: "03",
    title: "Cake & Bakery Shop",
    category: "Bakery Website",
    description:
      "A beautiful and inviting bakery website created to showcase cakes, pastries, custom orders, and delicious bakery collections.",
    className: "lg:col-span-5",
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
    number: "04",
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
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              z-0
            "
          >
            <source
              src="/videos/digital-background1.mp4"
              type="video/mp4"
            />
          </video>

          {/* ==================================================
              VIDEO OVERLAY
          ================================================== */}

          <div
            className="
              absolute
              inset-0
              z-[1]
              bg-[#F3F7F4]/30
            "
          />

          {/* ==================================================
              GRADIENT OVERLAY
          ================================================== */}

          <div
            className="
              absolute
              inset-0
              z-[2]

              bg-gradient-to-br
              from-[#F3F7F4]/60
              via-[#F3F7F4]/40
              to-[#DDEBE6]/20
            "
          />

          {/* ==================================================
              DECORATIVE GLOW - TOP RIGHT
          ================================================== */}

          <motion.div
            animate={{
              x: [0, 80, 0],
              y: [0, -50, 0],
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

              top-[10%]
              right-[-100px]

              w-[350px]
              h-[350px]

              rounded-full
              bg-[#0F5C4D]/10
              blur-[100px]

              pointer-events-none
            "
          />

          {/* ==================================================
              DECORATIVE GLOW - BOTTOM LEFT
          ================================================== */}

          <motion.div
            animate={{
              x: [0, -50, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              z-[3]

              bottom-[5%]
              left-[-120px]

              w-[300px]
              h-[300px]

              rounded-full
              bg-[#6FA99B]/15
              blur-[100px]

              pointer-events-none
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
                max-w-[1050px]
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
                  gap-2
                  mb-6
                  sm:mb-8
                "
              >
                <motion.span
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="
                    w-2
                    h-2
                    rounded-full
                    bg-[#0F5C4D]
                  "
                />

                <span
                  className="
                    font-body
                    text-[10px]
                    sm:text-xs
                    uppercase
                    tracking-[2px]
                    text-[#0F5C4D]
                    font-medium
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
                  text-[#24332F]

                  text-[48px]
                  sm:text-[64px]
                  md:text-[82px]
                  lg:text-[96px]
                  xl:text-[110px]

                  leading-[0.88]

                  tracking-[-4px]
                  sm:tracking-[-5px]
                  lg:tracking-[-6px]
                "
              >
                We build
                <br />

                <span className="text-[#0F5C4D]">
                  digital
                </span>{" "}

                <span className="relative inline-block">
                  experiences.

                  {/* Animated underline */}
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{
                      delay: 1.2,
                      duration: 1,
                      ease: "easeOut",
                    }}
                    className="
                      absolute
                      left-0
                      bottom-[-8px]

                      h-[4px]
                      rounded-full

                      bg-[#0F5C4D]/30
                    "
                  />
                </span>
              </motion.h1>

              {/* ==================================================
                  DESCRIPTION
              ================================================== */}

              <motion.p
                variants={fadeUp}
                className="
                  mt-8
                  sm:mt-10

                  max-w-[620px]

                  font-body
                  text-base
                  sm:text-lg
                  lg:text-xl

                  leading-relaxed
                  text-[#687773]
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

                    flex
                    items-center
                    gap-2

                    bg-[#0F5C4D]
                    hover:bg-[#0B4A3E]

                    text-white

                    rounded-full

                    px-6
                    sm:px-7

                    py-3.5
                    sm:py-4

                    font-body
                    font-semibold
                    text-sm

                    transition-all
                    duration-300

                    hover:-translate-y-1

                    shadow-[0px_12px_30px_rgba(15,92,77,0.18)]
                  "
                >
                  Let’s Work Together

                  <ArrowUpRight
                    size={17}
                    className="
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
                    flex
                    items-center
                    gap-2

                    px-5
                    py-3.5

                    rounded-full

                    border
                    border-[#24332F]/15

                    bg-white/30
                    backdrop-blur-sm

                    text-[#24332F]

                    font-body
                    font-medium
                    text-sm

                    hover:border-[#0F5C4D]
                    hover:text-[#0F5C4D]

                    transition-all
                    duration-300
                  "
                >
                  Explore our work

                  <ArrowDown size={15} />
                </Link>

              </motion.div>

            </motion.div>
          </div>

          {/* ==================================================
              SCROLL INDICATOR
          ================================================== */}

          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
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

              text-[#687773]
            "
          >
            <span
              className="
                font-body
                text-[8px]
                tracking-[2px]
                uppercase
              "
            >
              Scroll
            </span>

            <ArrowDown size={14} />
          </motion.div>

        </section>

        {/* =====================================================
            WELCOME / INTRODUCTION
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
  {/* ================= BACKGROUND GLOW 1 ================= */}

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


  {/* ================= BACKGROUND GLOW 2 ================= */}

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


  {/* ================= SOFT CENTER GLOW ================= */}

  <div
    className="
      absolute
      top-1/2
      left-1/2

      -translate-x-1/2
      -translate-y-1/2

      w-[250px]
      h-[250px]

      sm:w-[500px]
      sm:h-[500px]

      rounded-full

      bg-white/50

      blur-3xl

      pointer-events-none
    "
  />


  {/* ================= CONTENT ================= */}

  <div
    className="
      relative
      z-10

      max-w-[1440px]
      mx-auto

      grid
      grid-cols-2
      max-[380px]:grid-cols-1
      lg:grid-cols-12

      gap-4
      sm:gap-8
      lg:gap-14

      items-center
    "
  >

    {/* ================= IMAGE ================= */}

    <motion.div
      initial={{
        opacity: 0,
        x: -40,
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
      }}

      className="
        col-span-1
        lg:col-span-5
      "
    >

      <div
        className="
          relative

          aspect-[4/5]

          rounded-[1.25rem]
          sm:rounded-[1.75rem]
          lg:rounded-[2rem]

          overflow-hidden

          bg-white/50

          backdrop-blur-sm

          border
          border-white/70

          shadow-[0_20px_60px_rgba(15,92,77,0.10)]
        "
      >

        {/* Image glow behind image */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-br
            from-[#0F5C4D]/10
            via-transparent
            to-[#8DB8AC]/20
          "
        />


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

            rounded

            hover:scale-105
          "
        />


        {/* Soft image overlay */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-t
            from-[#0F5C4D]/15
            via-transparent
            to-white/10

            pointer-events-none
          "
        />

      </div>

    </motion.div>


    {/* ================= TEXT ================= */}

    <motion.div
      initial={{
        opacity: 0,
        x: 40,
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
        delay: 0.1,
      }}

      className="
        col-span-1
        lg:col-span-7
      "
    >

      {/* ================= SMALL HEADING ================= */}

      <p
        className="
          font-body

          text-[#0F5C4D]

          text-[8px]
          sm:text-xs

          uppercase

          tracking-[1.2px]
          sm:tracking-[2px]

          mb-2
          sm:mb-5
        "
      >
        Welcome to CodeThrive
      </p>


      {/* ================= MAIN HEADING ================= */}

      <h2
        className="
          font-display
          font-bold

          text-[#24332F]

          text-[22px]
          sm:text-4xl
          md:text-5xl
          lg:text-6xl

          leading-[0.95]

          tracking-[-1px]
          sm:tracking-[-2px]
          lg:tracking-[-2.5px]
        "
      >
        Technology
        <br />

        <span
          className="
            bg-gradient-to-r
            from-[#0F5C4D]
            via-[#167562]
            to-[#0F5C4D]

            bg-clip-text
            text-transparent
          "
        >
          should feel human.
        </span>
      </h2>


      {/* ================= PARAGRAPH 1 ================= */}

      <p
        className="
          mt-4
          sm:mt-6
          lg:mt-7

          font-body

          text-[#687773]

          text-[10px]
          sm:text-sm
          md:text-base
          lg:text-lg

          leading-relaxed

          max-w-[650px]
        "
      >
        At CodeThrive InfoTech, we combine design, technology
        and strategy to create digital experiences that are
        simple to use, beautiful to look at and built to last.
      </p>


      {/* ================= PARAGRAPH 2 ================= */}

      <p
        className="
          mt-3
          sm:mt-4

          font-body

          text-[#687773]

          text-[10px]
          sm:text-sm
          md:text-base
          lg:text-lg

          leading-relaxed

          max-w-[650px]
        "
      >
        From the first idea to the final product, we work
        closely with our clients to turn ambitious ideas into
        meaningful digital solutions.
      </p>


      {/* ================= ABOUT LINK ================= */}

      <Link
        to="/about"

        className="
          group

          inline-flex
          items-center
          gap-1
          sm:gap-2

          mt-4
          sm:mt-6
          lg:mt-7

          font-body
          font-semibold

          text-[10px]
          sm:text-sm

          text-[#0F5C4D]

          hover:text-[#0B4A3E]

          transition-colors
        "
      >
        More about us

        <ArrowUpRight
          size={14}

          className="
            sm:w-4
            sm:h-4

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

    {/* ================= HEADER ================= */}

    <div
      className="
        flex
        flex-col
        md:flex-row

        md:items-end
        md:justify-between

        gap-5
        sm:gap-6

        mb-8
        sm:mb-10
        lg:mb-12
      "
    >
      <div>

        <p
          className="
            font-body

            text-[#0F5C4D]

            text-[9px]
            sm:text-xs

            uppercase
            tracking-[1.5px]
            sm:tracking-[2px]

            mb-2
            sm:mb-4
          "
        >
          Selected Work
        </p>

        <h2
          className="
            font-display
            font-bold

            text-[#24332F]

            text-[28px]
            sm:text-4xl
            md:text-5xl
            lg:text-6xl

            leading-[0.95]

            tracking-[-1.5px]
            sm:tracking-[-2px]
            lg:tracking-[-2.5px]
          "
        >
          Ideas into
          <span className="text-[#0F5C4D]">
            {" "}experiences.
          </span>
        </h2>

      </div>


      {/* VIEW ALL */}

      <Link
        to="/work"
        className="
          group

          inline-flex
          items-center
          gap-1.5
          sm:gap-2

          text-[11px]
          sm:text-sm

          font-body
          font-semibold

          text-[#0F5C4D]

          w-fit

          transition-colors
          duration-300

          hover:text-[#0B4A3E]
        "
      >
        View all work

        <ArrowUpRight
          size={14}
          className="
            sm:w-4
            sm:h-4

            transition-transform
            duration-300

            group-hover:translate-x-1
            group-hover:-translate-y-1
          "
        />
      </Link>

    </div>


    {/* ================= PROJECT GRID ================= */}

    <div
      className="
        grid

        grid-cols-2

        lg:grid-cols-12

        gap-3
        sm:gap-4

        lg:auto-rows-[260px]
      "
    >

      {PROJECTS.map((project, index) => {

        /*
          MOBILE PATTERN:

          01 | 02
          03 | 03

          04 | 05
          06 | 06

          07 | 08
          09 | 09

          DESKTOP:

          01 | 02
          03 ---------
          04 | 05
          06 ---------
        */

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

              lg:min-h-0

              ${
                isFullWidth
                  ? "lg:min-h-[260px]"
                  : "lg:min-h-[260px]"
              }
            `}
          >

            {/* ================= IMAGE ================= */}

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
                ease-out

                group-hover:scale-110
              "
            />


            {/* ================= OVERLAY ================= */}

            <div
              className="
                absolute
                inset-0

                bg-gradient-to-t

                from-[#0F5C4D]/85
                via-[#0F5C4D]/35
                to-transparent

                transition-all
                duration-500

                group-hover:from-[#0F5C4D]/90
              "
            />


            {/* ================= NUMBER ================= */}

            <span
              className="
                absolute

                top-3
                left-3

                sm:top-5
                sm:left-5

                font-body

                text-[9px]
                sm:text-xs

                text-white

                tracking-[1px]

                z-10

                opacity-90
              "
            >
              {project.number}
            </span>


            {/* ================= ARROW ================= */}

            <div
              className="
                absolute

                top-3
                right-3

                sm:top-5
                sm:right-5

                w-7
                h-7

                sm:w-10
                sm:h-10

                rounded-full
                bg-white

                flex
                items-center
                justify-center

                text-[#0F5C4D]

                opacity-0
                translate-x-2

                transition-all
                duration-300

                group-hover:opacity-100
                group-hover:translate-x-0

                z-20
              "
            >
              <ArrowUpRight
                size={13}
                className="sm:w-[17px] sm:h-[17px]"
              />
            </div>


            {/* ================= CONTENT ================= */}

            <div
              className="
                absolute

                left-3
                right-3
                bottom-3

                sm:left-5
                sm:right-5
                sm:bottom-5

                z-10
              "
            >

              {/* CATEGORY */}

              <p
                className="
                  font-body

                  text-[7px]
                  sm:text-[10px]

                  uppercase
                  tracking-[1px]
                  sm:tracking-[1.5px]

                  text-white/80

                  mb-0.5
                  sm:mb-1
                "
              >
                {project.category}
              </p>


              {/* TITLE */}

              <h3
                className="
                  font-display
                  font-bold

                  text-white

                  text-[15px]
                  sm:text-xl
                  md:text-2xl

                  leading-tight

                  tracking-[-0.5px]
                  sm:tracking-[-1px]
                "
              >
                {project.title}
              </h3>


              {/* DESCRIPTION */}

              <p
                className="
                  max-w-[500px]

                  mt-1
                  sm:mt-2

                  font-body

                  text-[9px]
                  sm:text-sm

                  text-white/75

                  leading-relaxed

                  hidden
                  sm:block
                "
              >
                {project.description}
              </p>

            </div>


            {/* ================= HOVER GLOW ================= */}

            <div
              className="
                absolute
                inset-0

                rounded-[1.1rem]
                sm:rounded-[1.5rem]

                ring-1
                ring-white/0

                group-hover:ring-white/30

                transition-all
                duration-500

                pointer-events-none
              "
            />

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
  {/* ========================================================= */}
  {/* ================= SECTION BACKGROUND ==================== */}
  {/* ========================================================= */}

  <div
    className="
      absolute
      inset-0

      bg-cover
      bg-center
      bg-no-repeat

      pointer-events-none
    "
    style={{
      backgroundImage: `url(${serviceImage})`,
    }}
  />


  {/* ========================================================= */}
  {/* ================= BACKGROUND OVERLAY ==================== */}
  {/* ========================================================= */}

  <div
    className="
      absolute
      inset-0

      bg-black/30

      pointer-events-none
    "
  />


  {/* ========================================================= */}
  {/* ================= CONTENT =============================== */}
  {/* ========================================================= */}

  <div
    className="
      relative
      z-10

      max-w-[1440px]
      mx-auto
    "
  >


    {/* ======================================================= */}
    {/* ================= HEADER ============================== */}
    {/* ======================================================= */}

    <div
      className="
        relative
        z-30

        max-w-[820px]

        mb-7
        sm:mb-10
        lg:mb-12

        p-4
        sm:p-6
        lg:p-7

        rounded-2xl
        sm:rounded-3xl

        bg-black/25
        backdrop-blur-[3px]

        border
        border-white/15

        shadow-[0_15px_50px_rgba(0,0,0,0.18)]
      "
    >

      {/* ================= SMALL LABEL ================= */}

      <p
        className="
          font-body
          font-semibold

          text-[#7DE8C9]

          text-[9px]
          sm:text-xs

          uppercase

          tracking-[1.5px]
          sm:tracking-[3px]

          mb-3
          sm:mb-5

          drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]
        "
      >
        What we do
      </p>


      {/* ================= MAIN HEADING ================= */}

      <h2
        className="
          font-display
          font-bold

          text-white

          text-[28px]
          sm:text-4xl
          md:text-5xl
          lg:text-6xl

          leading-[0.95]

          tracking-[-1.5px]
          sm:tracking-[-2.5px]
          lg:tracking-[-3px]

          drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]
        "
      >
        Everything you need

        <br />

        <span
          className="
            text-[#69E6C4]

            drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]
          "
        >
          to go digital.
        </span>
      </h2>

    </div>


    {/* ======================================================= */}
    {/* ================= MOVING SERVICES ===================== */}
    {/* ======================================================= */}

    <div
      className="
        relative
        w-full

        overflow-hidden

        py-2
        sm:py-4
      "
    >


      {/* ===================================================== */}
      {/* ================= MOVING TRACK ====================== */}
      {/* ===================================================== */}

      <motion.div
        className="
          flex
          w-max

          gap-2
          sm:gap-4
          lg:gap-5

          hover:[animation-play-state:paused]
        "
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          x: {
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >


        {/* =================================================== */}
        {/* ================= FIRST SERVICES ================== */}
        {/* =================================================== */}

        {SERVICES.map((service, index) => (

          <motion.div
            key={`service-${service.number}-${index}`}

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

              transition-all
              duration-500

              hover:shadow-[0_20px_50px_rgba(15,92,77,0.22)]
            "
          >


            {/* ============================================= */}
            {/* ================= SERVICE IMAGE ============== */}
            {/* ============================================= */}

            <motion.div
              className="
                absolute
                inset-0

                bg-cover
                bg-center
                bg-no-repeat

                will-change-transform
              "
              style={{
                backgroundImage: `url(${service.image})`,
              }}
              initial={{
                scale: 1,
              }}
              whileHover={{
                scale: 1.08,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            />


            {/* ============================================= */}
            {/* ============= NORMAL GRADIENT ================ */}
            {/* ============================================= */}

            <div
              className="
                absolute
                inset-0

                bg-gradient-to-t
                from-black/70
                via-black/20
                to-transparent

                pointer-events-none

                transition-all
                duration-500
              "
            />


            {/* ============================================= */}
            {/* ============== HOVER GREEN =================== */}
            {/* ============================================= */}

            <div
              className="
                absolute
                inset-0

                bg-gradient-to-t
                from-[#073B31]/95
                via-[#0F5C4D]/55
                to-transparent

                opacity-0

                group-hover:opacity-100

                transition-opacity
                duration-500

                pointer-events-none
              "
            />


            {/* ============================================= */}
            {/* ============== HOVER LIGHT =================== */}
            {/* ============================================= */}

            <div
              className="
                absolute
                inset-0

                bg-gradient-to-br
                from-white/10
                via-transparent
                to-[#0F5C4D]/35

                opacity-0

                group-hover:opacity-100

                transition-opacity
                duration-500

                pointer-events-none
              "
            />


            {/* ================================================= */}
            {/* ============== ANIMATED BORDER ================== */}
            {/* ================================================= */}

            <motion.div
              className="
                absolute
                inset-0

                pointer-events-none

                z-20
              "
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.8,
              }}
            >


              {/* ================= TOP ================= */}

              <motion.span
                className="
                  absolute
                  top-0
                  left-0

                  h-[1px]
                  sm:h-[2px]

                  w-8
                  sm:w-24

                  bg-[#0F5C4D]

                  shadow-[0_0_10px_#0F5C4D]
                "
                animate={{
                  x: ["-100%", "1000%"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.4,
                }}
              />


              {/* ================= RIGHT ================= */}

              <motion.span
                className="
                  absolute
                  top-0
                  right-0

                  w-[1px]
                  sm:w-[2px]

                  h-10
                  sm:h-24

                  bg-[#0F5C4D]

                  shadow-[0_0_10px_#0F5C4D]
                "
                animate={{
                  y: ["-100%", "1000%"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.4 + 0.6,
                }}
              />


              {/* ================= BOTTOM ================= */}

              <motion.span
                className="
                  absolute
                  bottom-0
                  right-0

                  h-[1px]
                  sm:h-[2px]

                  w-8
                  sm:w-24

                  bg-[#0F5C4D]

                  shadow-[0_0_10px_#0F5C4D]
                "
                animate={{
                  x: ["100%", "-1000%"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.4 + 1.2,
                }}
              />


              {/* ================= LEFT ================= */}

              <motion.span
                className="
                  absolute
                  bottom-0
                  left-0

                  w-[1px]
                  sm:w-[2px]

                  h-10
                  sm:h-24

                  bg-[#0F5C4D]

                  shadow-[0_0_10px_#0F5C4D]
                "
                animate={{
                  y: ["100%", "-1000%"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.4 + 1.8,
                }}
              />

            </motion.div>


            {/* ================================================= */}
            {/* ============== SOFT HOVER GLOW ================== */}
            {/* ================================================= */}

            <div
              className="
                absolute

                -top-10
                -right-10

                sm:-top-20
                sm:-right-20

                w-20
                h-20

                sm:w-40
                sm:h-40

                rounded-full

                bg-[#0F5C4D]/25

                blur-2xl
                sm:blur-3xl

                opacity-0

                group-hover:opacity-100

                transition-opacity
                duration-500

                pointer-events-none
              "
            />


            {/* ================================================= */}
            {/* ================= CONTENT ======================= */}
            {/* ================================================= */}

            <div
              className="
                relative
                z-30

                h-full

                p-2.5
                sm:p-6
                lg:p-7

                flex
                flex-col

                transition-all
                duration-500

                group-hover:translate-y-[-2px]
              "
            >


              {/* ================= NUMBER ================= */}

              <span
                className="
                  font-body

                  text-[7px]
                  sm:text-xs

                  text-white

                  tracking-[0.5px]
                  sm:tracking-[1px]

                  font-medium

                  opacity-95

                  drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)]

                  transition-all
                  duration-300
                "
              >
                {service.number}
              </span>


              {/* ================= TITLE ================= */}

              <h3
                className="
                  mt-3
                  sm:mt-7

                  font-display
                  font-bold

                  text-[11px]
                  sm:text-2xl
                  lg:text-3xl

                  text-white

                  tracking-[-0.3px]
                  sm:tracking-[-0.8px]

                  leading-[1.05]
                  sm:leading-tight

                  drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)]

                  transition-all
                  duration-300

                  group-hover:scale-[1.02]
                "
              >
                {service.title}
              </h3>


              {/* ================= DESCRIPTION ================= */}

              <p
                className="
                  mt-2
                  sm:mt-4

                  font-body

                  text-[7px]
                  sm:text-sm
                  lg:text-base

                  leading-[1.35]
                  sm:leading-relaxed

                  text-white/90

                  max-w-[380px]

                  drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]

                  transition-all
                  duration-300
                "
              >
                {service.text}
              </p>


              {/* ================= ARROW ================= */}

              <div
                className="
                  mt-auto

                  pt-3
                  sm:pt-6
                "
              >
                <ArrowUpRight
                  size={11}

                  className="
                    sm:w-[17px]
                    sm:h-[17px]

                    text-white

                    drop-shadow-[0_1px_5px_rgba(0,0,0,0.7)]

                    transition-all
                    duration-300

                    group-hover:translate-x-1
                    group-hover:-translate-y-1

                    group-hover:scale-110
                  "
                />
              </div>

            </div>

          </motion.div>

        ))}


        {/* =================================================== */}
        {/* ================ SECOND SET ====================== */}
        {/* =================================================== */}
        {/* Duplicate cards create the seamless infinite loop */}

        {SERVICES.map((service, index) => (

          <motion.div
            key={`service-duplicate-${service.number}-${index}`}

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

              transition-all
              duration-500

              hover:shadow-[0_20px_50px_rgba(15,92,77,0.22)]
            "
          >


            {/* ================= SERVICE IMAGE ================= */}

            <motion.div
              className="
                absolute
                inset-0

                bg-cover
                bg-center
                bg-no-repeat

                will-change-transform
              "
              style={{
                backgroundImage: `url(${service.image})`,
              }}
              whileHover={{
                scale: 1.08,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            />


            {/* ================= NORMAL GRADIENT ================= */}

            <div
              className="
                absolute
                inset-0

                bg-gradient-to-t
                from-black/70
                via-black/20
                to-transparent

                pointer-events-none
              "
            />


            {/* ================= HOVER GREEN ================= */}

            <div
              className="
                absolute
                inset-0

                bg-gradient-to-t
                from-[#073B31]/95
                via-[#0F5C4D]/55
                to-transparent

                opacity-0

                group-hover:opacity-100

                transition-opacity
                duration-500

                pointer-events-none
              "
            />


            {/* ================= HOVER LIGHT ================= */}

            <div
              className="
                absolute
                inset-0

                bg-gradient-to-br
                from-white/10
                via-transparent
                to-[#0F5C4D]/35

                opacity-0

                group-hover:opacity-100

                transition-opacity
                duration-500

                pointer-events-none
              "
            />


            {/* ================= ANIMATED BORDER ================= */}

            <motion.div
              className="
                absolute
                inset-0

                pointer-events-none
                z-20
              "
              animate={{
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.8,
              }}
            >

              {/* TOP */}

              <motion.span
                className="
                  absolute
                  top-0
                  left-0

                  h-[1px]
                  sm:h-[2px]

                  w-8
                  sm:w-24

                  bg-[#0F5C4D]

                  shadow-[0_0_10px_#0F5C4D]
                "
                animate={{
                  x: ["-100%", "1000%"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.4,
                }}
              />


              {/* RIGHT */}

              <motion.span
                className="
                  absolute
                  top-0
                  right-0

                  w-[1px]
                  sm:w-[2px]

                  h-10
                  sm:h-24

                  bg-[#0F5C4D]

                  shadow-[0_0_10px_#0F5C4D]
                "
                animate={{
                  y: ["-100%", "1000%"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.4 + 0.6,
                }}
              />


              {/* BOTTOM */}

              <motion.span
                className="
                  absolute
                  bottom-0
                  right-0

                  h-[1px]
                  sm:h-[2px]

                  w-8
                  sm:w-24

                  bg-[#0F5C4D]

                  shadow-[0_0_10px_#0F5C4D]
                "
                animate={{
                  x: ["100%", "-1000%"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.4 + 1.2,
                }}
              />


              {/* LEFT */}

              <motion.span
                className="
                  absolute
                  bottom-0
                  left-0

                  w-[1px]
                  sm:w-[2px]

                  h-10
                  sm:h-24

                  bg-[#0F5C4D]

                  shadow-[0_0_10px_#0F5C4D]
                "
                animate={{
                  y: ["100%", "-1000%"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.4 + 1.8,
                }}
              />

            </motion.div>


            {/* ================================================= */}
            {/* ================= CONTENT ======================= */}
            {/* ================================================= */}

            <div
              className="
                relative
                z-30

                h-full

                p-2.5
                sm:p-6
                lg:p-7

                flex
                flex-col

                transition-all
                duration-500

                group-hover:translate-y-[-2px]
              "
            >

              {/* NUMBER */}

              <span
                className="
                  font-body

                  text-[7px]
                  sm:text-xs

                  text-white

                  tracking-[0.5px]
                  sm:tracking-[1px]

                  font-medium

                  opacity-95

                  drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)]
                "
              >
                {service.number}
              </span>


              {/* TITLE */}

              <h3
                className="
                  mt-3
                  sm:mt-7

                  font-display
                  font-bold

                  text-[11px]
                  sm:text-2xl
                  lg:text-3xl

                  text-white

                  tracking-[-0.3px]
                  sm:tracking-[-0.8px]

                  leading-[1.05]
                  sm:leading-tight

                  drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)]

                  transition-all
                  duration-300

                  group-hover:scale-[1.02]
                "
              >
                {service.title}
              </h3>


              {/* DESCRIPTION */}

              <p
                className="
                  mt-2
                  sm:mt-4

                  font-body

                  text-[7px]
                  sm:text-sm
                  lg:text-base

                  leading-[1.35]
                  sm:leading-relaxed

                  text-white/90

                  max-w-[380px]

                  drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]
                "
              >
                {service.text}
              </p>


              {/* ARROW */}

              <div
                className="
                  mt-auto
                  pt-3
                  sm:pt-6
                "
              >
                <ArrowUpRight
                  size={11}

                  className="
                    sm:w-[17px]
                    sm:h-[17px]

                    text-white

                    drop-shadow-[0_1px_5px_rgba(0,0,0,0.7)]

                    transition-all
                    duration-300

                    group-hover:translate-x-1
                    group-hover:-translate-y-1

                    group-hover:scale-110
                  "
                />
              </div>

            </div>

          </motion.div>

        ))}

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

    px-3
    sm:px-8
    md:px-12
    lg:px-16
    xl:px-20

    py-10
    sm:py-20
    lg:py-24

    bg-gradient-to-br
    from-[#F4FAF7]
    via-[#E7F0ED]
    to-[#CFE4DD]
  "
>
  {/* ========================================= */}
  {/* BACKGROUND COLOR GLOWS */}
  {/* ========================================= */}

  {/* Top Right Green Glow */}
  <motion.div
    className="
      absolute
      -top-24
      -right-24
      sm:-top-40
      sm:-right-40

      w-[280px]
      h-[280px]
      sm:w-[520px]
      sm:h-[520px]

      rounded-full

      bg-[#0F5C4D]/15

      blur-[80px]
      sm:blur-[120px]

      pointer-events-none
    "
    animate={{
      x: [0, -70, 0],
      y: [0, 60, 0],
      scale: [1, 1.2, 1],
      opacity: [0.35, 0.65, 0.35],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* Bottom Left Mint Glow */}
  <motion.div
    className="
      absolute
      -bottom-32
      -left-32
      sm:-bottom-48
      sm:-left-48

      w-[300px]
      h-[300px]
      sm:w-[520px]
      sm:h-[520px]

      rounded-full

      bg-[#8DB8AC]/25

      blur-[90px]
      sm:blur-[120px]

      pointer-events-none
    "
    animate={{
      x: [0, 80, 0],
      y: [0, -60, 0],
      scale: [1, 1.15, 1],
      opacity: [0.3, 0.55, 0.3],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* Center Soft White Glow */}
  <motion.div
    className="
      absolute
      top-[35%]
      left-[35%]

      w-[250px]
      h-[250px]
      sm:w-[500px]
      sm:h-[500px]

      rounded-full

      bg-white/50

      blur-[100px]
      sm:blur-[150px]

      pointer-events-none
    "
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.25, 0.5, 0.25],
    }}
    transition={{
      duration: 11,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* Small Floating Green Glow */}
  <motion.div
    className="
      absolute
      top-[20%]
      left-[8%]

      w-24
      h-24
      sm:w-40
      sm:h-40

      rounded-full

      bg-[#0F5C4D]/10

      blur-[50px]
      sm:blur-[70px]

      pointer-events-none
    "
    animate={{
      x: [0, 40, 0],
      y: [0, -30, 0],
      opacity: [0.2, 0.5, 0.2],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* ========================================= */}
  {/* SUBTLE BACKGROUND GRID */}
  {/* ========================================= */}

  <div
    className="
      absolute
      inset-0

      opacity-[0.18]

      pointer-events-none

      bg-[linear-gradient(rgba(15,92,77,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(15,92,77,0.06)_1px,transparent_1px)]

      bg-[size:45px_45px]
      sm:bg-[size:60px_60px]
    "
  />

  {/* ========================================= */}
  {/* CONTENT */}
  {/* ========================================= */}

  <div className="relative z-10 max-w-[1440px] mx-auto">

    {/* ========================================= */}
    {/* HEADER */}
    {/* ========================================= */}

    <motion.div
      className="
        mb-7
        sm:mb-12
      "
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
      }}
    >
      <motion.p
        className="
          font-body

          text-[#0F5C4D]

          text-[9px]
          sm:text-xs

          uppercase

          tracking-[1.5px]
          sm:tracking-[2px]

          mb-2
          sm:mb-4
        "
        animate={{
          letterSpacing: ["1.5px", "2.5px", "1.5px"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        What People Say
      </motion.p>

      <h2
        className="
          font-display
          font-bold

          text-[#24332F]

          text-[28px]
          sm:text-5xl
          lg:text-6xl

          leading-[1]

          tracking-[-1.5px]
          sm:tracking-[-2px]

          max-w-[850px]
        "
      >
        Our clients love working with us
      </h2>
    </motion.div>


    {/* ========================================= */}
    {/* REVIEWS GRID */}
    {/* ========================================= */}

    <div
      className="
        grid

        grid-cols-3

        md:grid-cols-2
        lg:grid-cols-3

        gap-2
        sm:gap-6
      "
    >
      {REVIEWS.map((review, index) => {

        const rotations = [
          -1.5,
          1.2,
          -0.8,
          1.5,
          -1.2,
          0.8,
        ];

        const rotation =
          rotations[index % rotations.length];

        return (
          <motion.div
            key={review.name}

            initial={{
              opacity: 0,
              y: 100,
              x: index % 2 === 0 ? -40 : 40,
              rotate: index % 2 === 0 ? -12 : 12,
              scale: 0.85,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
              x: 0,
              rotate: rotation,
              scale: 1,
            }}

            viewport={{
              once: true,
              amount: 0.15,
            }}

            transition={{
              delay: index * 0.12,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}

            animate={{
              y: [0, -3, 0, 2, 0],
              rotate: [
                rotation,
                rotation + 0.4,
                rotation - 0.4,
                rotation,
              ],
            }}

            transition={{
              y: {
                duration: 5 + index * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.4,
              },

              rotate: {
                duration: 6 + index * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3,
              },
            }}

            whileHover={{
              y: -12,
              rotate: 0,
              scale: 1.025,
            }}

            className="
              group
              relative

              bg-white/90
              backdrop-blur-sm

              rounded-[10px]
              sm:rounded-[1.5rem]

              p-2
              sm:p-7
              lg:p-8

              border
              border-white/80

              overflow-hidden

              shadow-[0px_5px_15px_rgba(15,92,77,0.05)]
              sm:shadow-[0px_8px_25px_rgba(15,92,77,0.06)]

              hover:shadow-[0px_20px_50px_rgba(15,92,77,0.18)]

              transition-shadow
              duration-500
            "
          >

            {/* ================================= */}
            {/* CARD HOVER GLOW */}
            {/* ================================= */}

            <div
              className="
                absolute
                inset-0

                rounded-[10px]
                sm:rounded-[1.5rem]

                bg-gradient-to-br
                from-[#0F5C4D]/10
                via-transparent
                to-[#9AC8BC]/15

                opacity-0

                group-hover:opacity-100

                transition-opacity
                duration-500

                pointer-events-none
              "
            />


            {/* ================================= */}
            {/* ROTATING BORDER GLOW */}
            {/* ================================= */}

            <motion.div
              className="
                absolute
                inset-0

                rounded-[10px]
                sm:rounded-[1.5rem]

                pointer-events-none

                bg-[conic-gradient(from_0deg,transparent,#0F5C4D,transparent,#9AC8BC,transparent)]

                opacity-0

                group-hover:opacity-100

                transition-opacity
                duration-500
              "
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8 + index,
                repeat: Infinity,
                ease: "linear",
              }}
            />


            {/* ================================= */}
            {/* INNER CARD */}
            {/* ================================= */}

            <div
              className="
                relative
                z-10

                h-full

                bg-white

                rounded-[8px]
                sm:rounded-[1.4rem]
              "
            >

              {/* ================================= */}
              {/* STARS */}
              {/* ================================= */}

              <div
                className="
                  flex
                  gap-[1px]

                  mb-2
                  sm:mb-5
                "
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.div
                    key={star}

                    initial={{
                      opacity: 0,
                      scale: 0,
                      rotate: -180,
                    }}

                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                    }}

                    viewport={{
                      once: true,
                    }}

                    transition={{
                      delay:
                        index * 0.12 +
                        star * 0.05,

                      duration: 0.35,

                      type: "spring",

                      stiffness: 200,
                    }}

                    animate={{
                      y: [0, -1, 0],
                    }}

                    className="text-[#0F5C4D]"
                  >
                    <Star
                      size={8}
                      className="sm:hidden"
                      fill="currentColor"
                    />

                    <Star
                      size={14}
                      className="hidden sm:block"
                      fill="currentColor"
                    />
                  </motion.div>
                ))}
              </div>


              {/* ================================= */}
              {/* QUOTE */}
              {/* ================================= */}

              <motion.p
                className="
                  font-display

                  text-[8px]
                  sm:text-lg

                  leading-[1.35]
                  sm:leading-relaxed

                  tracking-[-0.15px]
                  sm:tracking-[-0.5px]

                  text-[#24332F]

                  mb-3
                  sm:mb-6
                "
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
                  delay: index * 0.12 + 0.35,
                  duration: 0.6,
                }}
              >
                "{review.quote}"
              </motion.p>


              {/* ================================= */}
              {/* REVIEWER */}
              {/* ================================= */}

              <div
                className="
                  flex
                  items-center

                  gap-1.5
                  sm:gap-4
                "
              >

                {/* PHOTO */}

                <motion.div
                  className="
                    relative

                    w-6
                    h-6

                    sm:w-12
                    sm:h-12

                    rounded-full

                    flex-shrink-0
                  "
                  animate={{
                    y: [0, -2, 0, 2, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                >

                  {/* Photo Glow Ring */}

                  <motion.div
                    className="
                      absolute
                      -inset-[2px]
                      sm:-inset-[3px]

                      rounded-full

                      bg-[conic-gradient(from_0deg,#0F5C4D,#9AC8BC,#0F5C4D)]
                    "
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Actual Photo */}

                  <div
                    className="
                      relative
                      z-10

                      w-6
                      h-6

                      sm:w-12
                      sm:h-12

                      rounded-full

                      overflow-hidden

                      border
                      border-white
                      sm:border-2

                      bg-[#E7F0ED]
                    "
                  >
                    <img
                      src={review.photo}
                      alt={review.name}
                      className="
                        w-full
                        h-full

                        object-cover

                        transition-transform
                        duration-500

                        group-hover:scale-110
                      "
                    />
                  </div>
                </motion.div>


                {/* NAME + ROLE */}

                <div className="min-w-0">

                  <motion.p
                    className="
                      font-body

                      font-semibold

                      text-[7px]
                      sm:text-sm

                      text-[#24332F]

                      truncate
                    "
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.12 + 0.5,
                      duration: 0.5,
                    }}
                  >
                    {review.name}
                  </motion.p>

                  <motion.p
                    className="
                      font-body

                      text-[6px]
                      sm:text-xs

                      text-[#687773]

                      mt-0
                      sm:mt-0.5

                      truncate
                    "
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.12 + 0.6,
                      duration: 0.5,
                    }}
                  >
                    {review.role}
                  </motion.p>

                </div>
              </div>


              {/* ================================= */}
              {/* BOTTOM MOVING LIGHT */}
              {/* ================================= */}

              <motion.div
                className="
                  absolute

                  bottom-0
                  left-0

                  h-[1px]
                  sm:h-[2px]

                  bg-[#0F5C4D]

                  rounded-full
                "
                animate={{
                  width: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.7,
                }}
              />

            </div>
          </motion.div>
        );
      })}
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
    }}
    whileInView={{
      opacity: 1,
      scale: 1,
    }}
    viewport={{
      once: true,
    }}
    transition={{
      duration: 0.8,
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

    {/* DECORATIVE CIRCLE */}

    <div
      className="
        absolute

        top-[-70px]
        right-[-70px]

        w-[170px]
        h-[170px]

        sm:top-[-100px]
        sm:right-[-80px]

        sm:w-[280px]
        sm:h-[280px]

        rounded-full

        border
        border-white/10
      "
    />

    <div
      className="
        absolute

        bottom-[-90px]
        left-[-70px]

        w-[190px]
        h-[190px]

        sm:bottom-[-140px]
        sm:left-[-80px]

        sm:w-[300px]
        sm:h-[300px]

        rounded-full

        border
        border-white/10
      "
    />

    {/* CONTENT */}

    <div className="relative z-10">

      {/* SPARKLE */}

      <Sparkles
        size={18}
        className="
          text-white/70
          mb-3
          sm:mb-5
        "
      />

      {/* HEADING */}

      <h2
        className="
          font-display
          font-bold

          text-white

          text-[2rem]
          sm:text-5xl
          lg:text-7xl

          leading-[0.98]

          tracking-[-1.5px]
          sm:tracking-[-3px]

          max-w-[850px]
        "
      >
        Have an idea?
        <br />

        Let's make it
        <span className="text-[#A9D1C5]">
          {" "}real.
        </span>
      </h2>

      {/* DESCRIPTION */}

      <p
        className="
          mt-4
          sm:mt-6

          max-w-[550px]

          font-body

          text-[11px]
          sm:text-base

          leading-relaxed

          text-white/70
        "
      >
        Tell us what you're building and let's explore
        how we can turn your idea into a meaningful digital
        experience.
      </p>

      {/* BUTTON */}

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