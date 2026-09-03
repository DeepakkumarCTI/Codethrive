import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Star,
  Send,
} from "lucide-react";
import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import arunPhoto from "../assets/arun.jpg";
import priyaPhoto from "../assets/priya.jpg";
import rahulPhoto from "../assets/rahul.jpg";
// Team/Review photos - replace with actual photos
import reviewPhoto1 from "../assets/logo.png";
import reviewPhoto2 from "../assets/logo.png";
import reviewPhoto3 from "../assets/logo.png";
import contactimage from "../assets/contactimage.jpg";


// ============================================================
// DATA
// ============================================================

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "info@codethriveinfotech.com",
    href: "mailto:info@codethriveinfotech.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9150781685",
    href: "tel:+91 9150781685",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sungam, Coimbatore, India",
    href: "#",
  },
];

const REVIEWS = [
  {
    name: "Arun Kumar",
    role: "Business Owner",
    quote: "CodeThrive delivered an excellent website for our business. The entire process was smooth and professional.",
    photo: arunPhoto,
  },

  {
    name: "Priya Sharma",
    role: "Founder",
    quote: "The team understood exactly what we needed and created something better than we expected.",
    photo: priyaPhoto,
  },

  {
    name: "Rahul Raj",
    role: "Managing Director",
    quote: "Very professional team. Great communication, modern design and excellent development quality.",
    photo: rahulPhoto,
  },
];

const OFFICE_HOURS = [
  { day: "Monday - Friday", time: "9:00 AM - 6:00 PM IST" },
  
  { day: "Sunday", time: "Closed" },
];

// ============================================================
// ANIMATION VARIANTS
// ============================================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
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
// CONTACT PAGE
// ============================================================

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using Formspree for form submission
      // Replace YOUR_FORM_ID with your actual Formspree form ID
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setSubmitStatus(null), 3000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
  if (window.location.hash === "#contact-form") {
    const timer = setTimeout(() => {
      const element = document.getElementById("contact-form");

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }
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
    min-h-[60vh]

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

      scale-[1.03]
    "
  >
    <source
      src="/videos/digital-background1.mp4"
      type="video/mp4"
    />
  </video>

  {/* =================================================
      VIDEO OVERLAY
      Keeps the video subtle and text readable
  ================================================= */}

  <div
    className="
      absolute
      inset-0

      bg-[#F3F7F4]/60
      sm:bg-[#F3F7F4]/78
      md:bg-[#F3F7F4]/70

      pointer-events-none
    "
  />

  {/* =================================================
      SOFT GREEN TINT
  ================================================= */}

  <motion.div
    animate={{
      x: [0, 80, 0],
      y: [0, -50, 0],
      scale: [1, 1.15, 1],
      opacity: [0.12, 0.22, 0.12],
    }}
    transition={{
      duration: 9,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute

      top-[10%]
      right-[-100px]

      w-[300px]
      h-[300px]

      sm:w-[350px]
      sm:h-[350px]

      rounded-full

      bg-[#0F5C4D]/10

      blur-[100px]

      pointer-events-none
    "
  />

  {/* =================================================
      SECOND SOFT GLOW
  ================================================= */}

  <motion.div
    animate={{
      x: [0, -30, 0],
      y: [0, 25, 0],
      scale: [1, 1.08, 1],
      opacity: [0.06, 0.14, 0.06],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute

      bottom-[-120px]
      left-[-100px]

      w-[280px]
      h-[280px]

      sm:w-[400px]
      sm:h-[400px]

      rounded-full

      bg-emerald-400/10

      blur-[100px]

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
      max-w-[1440px]

      mx-auto
    "
  >
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="visible"

      className="
        max-w-[800px]
      "
    >

      {/* =================================================
          LABEL
      ================================================= */}

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
            ease: "easeInOut",
          }}
          className="
            w-2
            h-2

            rounded-full

            bg-[#0F5C4D]

            shadow-[0_0_12px_rgba(15,92,77,0.35)]
          "
        />

        <span
          className="
            font-body

            text-xs
            sm:text-sm

            uppercase

            tracking-[2px]

            text-[#0F5C4D]

            font-medium
          "
        >
          Get in Touch
        </span>
      </motion.div>

      {/* =================================================
          MAIN HEADING
      ================================================= */}

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

          leading-[0.88]

          tracking-[-4px]
          sm:tracking-[-5px]
          lg:tracking-[-6px]
        "
      >
        Let's start a

        <br />

        <span className="text-[#0F5C4D]">
          conversation.
        </span>
      </motion.h1>

      {/* =================================================
          DESCRIPTION
      ================================================= */}

      <motion.p
        variants={fadeUp}

        className="
          mt-6
          sm:mt-8

          max-w-[620px]

          font-body

          text-base
          sm:text-lg
          lg:text-xl

          leading-relaxed

          text-[#687773]
        "
      >
        Have a project in mind? Want to work together? Or just want to
        say hello? We'd love to hear from you.
      </motion.p>

    </motion.div>
  </div>

  {/* =================================================
      BOTTOM FADE
  ================================================= */}

  <div
    className="
      absolute
      bottom-0
      left-0
      right-0

      h-20
      sm:h-28

      bg-gradient-to-t
      from-[#F3F7F4]/50
      to-transparent

      pointer-events-none
    "
  />
</section>

        {/* =====================================================
            CONTACT DETAILS & HOURS
        ===================================================== */}

<section
  className="
    relative
    w-full

    px-3
    sm:px-8
    md:px-12
    lg:px-16
    xl:px-20

    py-10
    sm:py-20
    lg:py-24

    overflow-hidden
  "
>
  {/* =====================================================
      STRONGER EMERALD ANIMATED BACKGROUND
  ====================================================== */}

  {/* Base emerald background */}
  <div
    className="
      absolute
      inset-0
      -z-20

      bg-gradient-to-br
      from-[#EEF8F4]
      via-[#D9EEE7]
      to-[#C7E4DA]
    "
  />

  {/* Soft center light */}
  <div
    className="
      absolute
      inset-0
      -z-20

      bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.45),transparent_65%)]

      pointer-events-none
    "
  />

  {/* =====================================================
      MOVING GRID
  ====================================================== */}

  <motion.div
    animate={{
      backgroundPosition: [
        "0px 0px",
        "60px 60px",
      ],
    }}
    transition={{
      duration: 14,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
      absolute
      inset-0
      -z-10

      opacity-[0.32]

      bg-[linear-gradient(rgba(6,78,59,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(6,78,59,0.10)_1px,transparent_1px)]

      bg-[size:45px_45px]

      sm:bg-[size:60px_60px]

      lg:bg-[size:75px_75px]

      pointer-events-none
    "
  />

  {/* =====================================================
      TOP LEFT EMERALD GLOW
  ====================================================== */}

  <motion.div
    animate={{
      x: [0, 60, -25, 0],
      y: [0, 35, -25, 0],
      scale: [1, 1.18, 0.92, 1],
      opacity: [0.45, 0.65, 0.4, 0.45],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      -z-10

      top-[-100px]
      left-[-90px]

      sm:top-[-150px]
      sm:left-[-140px]

      lg:top-[-200px]
      lg:left-[-170px]

      w-[280px]
      h-[280px]

      sm:w-[430px]
      sm:h-[430px]

      lg:w-[560px]
      lg:h-[560px]

      rounded-full

      bg-emerald-500/[0.18]

      blur-[70px]

      sm:blur-[100px]

      lg:blur-[130px]

      pointer-events-none
    "
  />

  {/* =====================================================
      TOP RIGHT EMERALD GLOW
  ====================================================== */}

  <motion.div
    animate={{
      x: [0, -50, 25, 0],
      y: [0, 35, -25, 0],
      scale: [1, 0.9, 1.15, 1],
      opacity: [0.4, 0.6, 0.35, 0.4],
    }}
    transition={{
      duration: 15,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      -z-10

      top-[0%]
      right-[-100px]

      sm:right-[-160px]

      lg:right-[-220px]

      w-[300px]
      h-[300px]

      sm:w-[460px]
      sm:h-[460px]

      lg:w-[620px]
      lg:h-[620px]

      rounded-full

      bg-teal-500/[0.16]

      blur-[75px]

      sm:blur-[105px]

      lg:blur-[135px]

      pointer-events-none
    "
  />

  {/* =====================================================
      CENTER EMERALD LIGHT
  ====================================================== */}

  <motion.div
    animate={{
      x: [-50, 50, -50],
      y: [0, -20, 0],
      scale: [1, 1.15, 1],
      opacity: [0.25, 0.45, 0.25],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      -z-10

      top-[35%]
      left-1/2
      -translate-x-1/2

      w-[320px]
      h-[220px]

      sm:w-[520px]
      sm:h-[320px]

      lg:w-[750px]
      lg:h-[400px]

      rounded-full

      bg-emerald-600/[0.10]

      blur-[80px]

      sm:blur-[110px]

      lg:blur-[140px]

      pointer-events-none
    "
  />

  {/* =====================================================
      BOTTOM RIGHT GLOW
  ====================================================== */}

  <motion.div
    animate={{
      x: [40, -40, 40],
      y: [0, -20, 0],
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.5, 0.3],
    }}
    transition={{
      duration: 13,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      -z-10

      bottom-[-120px]
      right-[-100px]

      sm:bottom-[-160px]
      sm:right-[-150px]

      lg:bottom-[-200px]
      lg:right-[-220px]

      w-[330px]
      h-[280px]

      sm:w-[500px]
      sm:h-[380px]

      lg:w-[680px]
      lg:h-[460px]

      rounded-full

      bg-emerald-400/[0.13]

      blur-[80px]

      sm:blur-[110px]

      lg:blur-[140px]

      pointer-events-none
    "
  />

  {/* =====================================================
      LEFT ROTATING RING
  ====================================================== */}

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
      -z-10

      top-[20%]
      left-[-170px]

      sm:left-[-230px]

      lg:left-[-300px]

      w-[360px]
      h-[360px]

      sm:w-[520px]
      sm:h-[520px]

      lg:w-[680px]
      lg:h-[680px]

      rounded-full

      border
      border-emerald-800/[0.12]

      pointer-events-none
    "
  >
    <div
      className="
        absolute

        top-1/2
        right-0

        w-3
        h-3

        sm:w-4
        sm:h-4

        rounded-full

        bg-emerald-700/40

        shadow-[0_0_18px_rgba(15,92,77,0.25)]
      "
    />
  </motion.div>

  {/* =====================================================
      RIGHT ROTATING RING
  ====================================================== */}

  <motion.div
    animate={{
      rotate: -360,
    }}
    transition={{
      duration: 45,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
      absolute
      -z-10

      top-[10%]
      right-[-180px]

      sm:right-[-250px]

      lg:right-[-320px]

      w-[380px]
      h-[380px]

      sm:w-[560px]
      sm:h-[560px]

      lg:w-[720px]
      lg:h-[720px]

      rounded-full

      border
      border-teal-800/[0.10]

      pointer-events-none
    "
  >
    <div
      className="
        absolute

        bottom-0
        left-1/2

        w-3
        h-3

        sm:w-4
        sm:h-4

        rounded-full

        bg-teal-700/35
      "
    />
  </motion.div>

  {/* =====================================================
      FLOATING PARTICLES
  ====================================================== */}

  <motion.div
    animate={{
      x: [0, 20, -10, 0],
      y: [0, -25, 10, 0],
      opacity: [0.3, 0.7, 0.25, 0.3],
      scale: [1, 1.4, 0.9, 1],
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      -z-10

      top-[22%]
      left-[32%]

      w-2
      h-2

      sm:w-3
      sm:h-3

      rounded-full

      bg-emerald-700/40

      shadow-[0_0_14px_rgba(15,92,77,0.20)]

      pointer-events-none
    "
  />

  <motion.div
    animate={{
      x: [0, -18, 12, 0],
      y: [0, 20, -12, 0],
      opacity: [0.2, 0.6, 0.2, 0.2],
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

      top-[68%]
      left-[68%]

      w-2
      h-2

      sm:w-3
      sm:h-3

      rounded-full

      bg-teal-700/35

      pointer-events-none
    "
  />

  <motion.div
    animate={{
      y: [0, -20, 0],
      opacity: [0.2, 0.5, 0.2],
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
      right-[30%]

      w-2
      h-2

      sm:w-3
      sm:h-3

      rounded-full

      bg-emerald-800/30

      pointer-events-none
    "
  />

  {/* =====================================================
      CONTENT
  ====================================================== */}

  <div className="relative z-10 max-w-[1440px] mx-auto">
    <div
      className="
        grid

        grid-cols-3
        md:grid-cols-2
        lg:grid-cols-4

        gap-2
        sm:gap-6
        lg:gap-8
      "
    >
      {/* ========================================= */}
      {/* CONTACT INFO */}
      {/* ========================================= */}

      {CONTACT_INFO.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.a
            key={item.label}
            href={item.href}

            animate={{
              y: [0, -5, 0, 4, 0],
              rotate: [0, -0.4, 0.4, -0.3, 0],
            }}

            transition={{
              duration: 5 + index * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.4,
            }}

            whileHover={{
              scale: 1.03,
              y: -8,
              rotate: 0,
            }}

            whileTap={{
              scale: 0.97,
            }}

            className="
              group
              relative

              rounded-xl
              sm:rounded-[1.5rem]

              overflow-hidden

              bg-[#F7FBF9]/55
              backdrop-blur-sm

              border
              border-[#0F5C4D]/15

              shadow-[0px_8px_25px_rgba(15,92,77,0.08)]

              hover:shadow-[0px_15px_40px_rgba(15,92,77,0.16)]

              transition-shadow
              duration-300
            "
          >
            <div
              className="
                relative
                z-10
                h-full

                p-3
                sm:p-8

                rounded-xl
                sm:rounded-[1.5rem]

                bg-[#F7FBF9]/45

                backdrop-blur-[3px]

                overflow-hidden
              "
            >
              {/* CARD GLOW */}

              <motion.div
                className="
                  absolute

                  -top-12
                  -right-12

                  sm:-top-20
                  sm:-right-20

                  w-24
                  h-24

                  sm:w-40
                  sm:h-40

                  rounded-full

                  bg-emerald-500/15

                  blur-3xl

                  pointer-events-none
                "
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.55, 0.3],
                  x: [0, 8, 0],
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
              />

              {/* ICON */}

              <motion.div
                className="
                  relative
                  z-10

                  w-8
                  h-8

                  sm:w-12
                  sm:h-12

                  rounded-full

                  bg-[#D1E9E0]

                  flex
                  items-center
                  justify-center

                  mb-2
                  sm:mb-4

                  text-[#0F5C4D]

                  group-hover:bg-[#0F5C4D]
                  group-hover:text-white

                  transition-all
                  duration-300
                "
                animate={{
                  y: [0, -2, 0, 2, 0],
                  rotate: [0, -2, 2, -1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.25,
                }}
              >
                <Icon
                  size={16}
                  className="
                    sm:w-6
                    sm:h-6
                  "
                />
              </motion.div>

              {/* LABEL */}

              <p
                className="
                  relative
                  z-10

                  font-body
                  text-[#0F5C4D]

                  text-[7px]
                  sm:text-xs

                  uppercase

                  tracking-[0.8px]
                  sm:tracking-[1.5px]

                  mb-1
                  sm:mb-2
                "
              >
                {item.label}
              </p>

              {/* VALUE */}

              <p
                className="
                  relative
                  z-10

                  font-display
                  font-bold

                  text-[#24332F]

                  text-[10px]
                  sm:text-xl

                  tracking-[-0.3px]
                  sm:tracking-[-0.5px]

                  leading-tight
                "
              >
                {item.value}
              </p>

              {/* BOTTOM LINE */}

              <motion.div
                className="
                  absolute
                  bottom-0
                  left-0

                  h-[2px]

                  bg-[#0F5C4D]

                  rounded-full
                "
                animate={{
                  width: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.6,
                }}
              />
            </div>
          </motion.a>
        );
      })}

      {/* ========================================= */}
      {/* OFFICE HOURS */}
      {/* ========================================= */}

      <motion.div
        animate={{
          y: [0, -4, 0, 3, 0],
          rotate: [0, 0.25, -0.25, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative

          col-span-full

          md:col-span-2
          lg:col-span-4

          rounded-xl
          sm:rounded-[1.5rem]

          overflow-hidden

          bg-[#CFE6DD]/75

          backdrop-blur-sm

          border
          border-[#0F5C4D]/15

          shadow-[0px_8px_25px_rgba(15,92,77,0.08)]
        "
      >
        <div
          className="
            relative
            z-10

            p-4
            sm:p-8

            rounded-xl
            sm:rounded-[1.5rem]

            bg-[#D7ECE4]/65

            backdrop-blur-[3px]

            overflow-hidden
          "
        >
          {/* OFFICE GLOW */}

          <motion.div
            className="
              absolute

              -right-14
              -top-14

              sm:-right-20
              sm:-top-20

              w-40
              h-40

              sm:w-56
              sm:h-56

              rounded-full

              bg-emerald-500/15

              blur-3xl

              pointer-events-none
            "
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              x: [0, 10, 0],
              y: [0, 8, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* HEADING */}

          <motion.p
            className="
              relative
              z-10

              font-body
              text-[#0F5C4D]

              text-[9px]
              sm:text-xs

              uppercase

              tracking-[1px]
              sm:tracking-[1.5px]

              mb-3
              sm:mb-4
            "
            animate={{
              letterSpacing: [
                "1.5px",
                "2px",
                "1.5px",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Office Hours
          </motion.p>

          {/* HOURS */}

          <div
            className="
              relative
              z-10

              space-y-2
              sm:space-y-3
            "
          >
            {OFFICE_HOURS.map((hours, index) => (
              <motion.div
                key={index}
                className="
                  flex
                  justify-between
                  items-center

                  gap-3
                "
                animate={{
                  x: [0, 2, 0, -2, 0],
                }}
                transition={{
                  duration: 4 + index * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
              >
                <p
                  className="
                    font-body

                    text-[10px]
                    sm:text-sm

                    text-[#24332F]
                  "
                >
                  {hours.day}
                </p>

                <p
                  className="
                    font-body

                    text-[10px]
                    sm:text-sm

                    text-[#50635D]

                    text-right
                  "
                >
                  {hours.time}
                </p>
              </motion.div>
            ))}
          </div>

          {/* BOTTOM LINE */}

          <motion.div
            className="
              absolute
              bottom-0
              left-0

              h-[2px]

              bg-[#0F5C4D]

              rounded-full
            "
            animate={{
              width: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </div>
  </div>
</section>
        {/* =====================================================
            CONTACT FORM
        ===================================================== */}

<section
  id="contact-form"
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

    bg-white/40
  "
>
  {/* ========================================= */}
  {/* BACKGROUND DECORATIVE GLOW */}
  {/* ========================================= */}

  <motion.div
    className="
      absolute
      -top-24
      -left-24
      sm:-top-32
      sm:-left-32

      w-[280px]
      h-[280px]
      sm:w-[400px]
      sm:h-[400px]

      rounded-full

      bg-[#0F5C4D]/10

      blur-[80px]
      sm:blur-[100px]

      pointer-events-none
    "
    animate={{
      x: [0, 80, 0],
      y: [0, 60, 0],
      scale: [1, 1.15, 1],
      opacity: [0.4, 0.7, 0.4],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  <motion.div
    className="
      absolute
      -bottom-28
      -right-28
      sm:-bottom-40
      sm:-right-40

      w-[300px]
      h-[300px]
      sm:w-[450px]
      sm:h-[450px]

      rounded-full

      bg-[#9AC8BC]/20

      blur-[90px]
      sm:blur-[110px]

      pointer-events-none
    "
    animate={{
      x: [0, -70, 0],
      y: [0, -50, 0],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  <div className="relative z-10 max-w-[1440px] mx-auto">
    <div
      className="
        grid
        lg:grid-cols-2

        gap-8
        sm:gap-12
        lg:gap-16
      "
    >
      {/* ========================================= */}
      {/* LEFT - IMAGE */}
      {/* ========================================= */}

      <motion.div
        initial={{
          opacity: 0,
          x: -60,
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
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          hidden
          lg:flex

          items-center
          justify-center
        "
      >
        {/* IMAGE OUTER GLOW */}

        <motion.div
          className="
            relative
            w-full
            max-w-[650px]
          "
          animate={{
            y: [0, -10, 0, 8, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Rotating Glow Ring */}

          <motion.div
            className="
              absolute
              -inset-2

              rounded-[2.2rem]

              bg-[conic-gradient(from_0deg,#0F5C4D,#9AC8BC,#E7F0ED,#0F5C4D)]

              opacity-50

              blur-[8px]
            "
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Image Card */}

          <div
            className="
              relative

              w-full

              aspect-square

              rounded-[2rem]

              overflow-hidden

              bg-[#E7F0ED]

              border
              border-white/70

              shadow-[0px_25px_70px_rgba(15,92,77,0.12)]
            "
          >
            {/* Animated Inner Glow */}

            <motion.div
              className="
                absolute
                -top-24
                -right-24

                w-72
                h-72

                rounded-full

                bg-[#0F5C4D]/15

                blur-[70px]

                pointer-events-none

                z-10
              "
              animate={{
                x: [0, -50, 0],
                y: [0, 40, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Image */}

            <motion.img
              src={contactimage}
              alt="Contact us"
              className="
                absolute
                inset-0

                w-full
                h-full

                object-contain

                p-16

                z-20
              "
              animate={{
                scale: [1, 1.025, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Gradient */}

            <div
              className="
                absolute
                inset-0

                bg-gradient-to-t
                from-[#0F5C4D]/15
                via-transparent
                to-transparent

                pointer-events-none

                z-30
              "
            />

            {/* Floating Decorative Circle */}

            <motion.div
              className="
                absolute

                top-8
                left-8

                w-3
                h-3

                rounded-full

                bg-[#0F5C4D]

                shadow-[0_0_20px_rgba(15,92,77,0.6)]

                z-40
              "
              animate={{
                y: [0, -15, 0, 15, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="
                absolute

                bottom-10
                right-10

                w-2
                h-2

                rounded-full

                bg-[#0F5C4D]

                shadow-[0_0_15px_rgba(15,92,77,0.7)]

                z-40
              "
              animate={{
                y: [0, 12, 0, -12, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* ========================================= */}
      {/* RIGHT - FORM */}
      {/* ========================================= */}

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
          amount: 0.2,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          w-full
          min-w-0
        "
      >
        {/* Small Label */}

        <motion.p
          className="
            font-body

            text-[#0F5C4D]

            text-[10px]
            sm:text-xs

            uppercase

            tracking-[1.5px]
            sm:tracking-[2px]

            mb-2
            sm:mb-4
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
            delay: 0.2,
            duration: 0.5,
          }}
        >
          Get in Touch
        </motion.p>

        {/* Heading */}

        <motion.h2
          className="
            font-display
            font-bold

            text-[#24332F]

            text-[30px]
            sm:text-5xl

            leading-[0.95]

            tracking-[-1.5px]
            sm:tracking-[-2px]

            mb-6
            sm:mb-8
          "
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
            delay: 0.3,
            duration: 0.7,
          }}
        >
          Send us a message
        </motion.h2>

        {/* ========================================= */}
        {/* FORM */}
        {/* ========================================= */}

        <form
          onSubmit={handleSubmit}
          className="
            space-y-4
            sm:space-y-5
          "
        >
          {/* NAME */}

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
            }}
            transition={{
              delay: 0.35,
              duration: 0.5,
            }}
          >
            <label
              htmlFor="name"
              className="
                block

                font-body

                text-[11px]
                sm:text-sm

                text-[#24332F]

                mb-1.5
                sm:mb-2
              "
            >
              Full Name *
            </label>

            <motion.input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              whileFocus={{
                scale: 1.01,
                x: 2,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
                w-full

                px-3
                sm:px-4

                py-2.5
                sm:py-3

                rounded-lg

                bg-white

                border
                border-[#24332F]/15

                font-body

                text-xs
                sm:text-sm

                text-[#24332F]

                placeholder-[#687773]

                focus:outline-none
                focus:border-[#0F5C4D]
                focus:ring-2
                focus:ring-[#0F5C4D]/20

                transition-all
                duration-300
              "
              placeholder="Your name"
            />
          </motion.div>

          {/* EMAIL */}

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
            }}
            transition={{
              delay: 0.42,
              duration: 0.5,
            }}
          >
            <label
              htmlFor="email"
              className="
                block

                font-body

                text-[11px]
                sm:text-sm

                text-[#24332F]

                mb-1.5
                sm:mb-2
              "
            >
              Email Address *
            </label>

            <motion.input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              whileFocus={{
                scale: 1.01,
                x: 2,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
                w-full

                px-3
                sm:px-4

                py-2.5
                sm:py-3

                rounded-lg

                bg-white

                border
                border-[#24332F]/15

                font-body

                text-xs
                sm:text-sm

                text-[#24332F]

                placeholder-[#687773]

                focus:outline-none
                focus:border-[#0F5C4D]
                focus:ring-2
                focus:ring-[#0F5C4D]/20

                transition-all
                duration-300
              "
              placeholder="contactus@codethrive.com"
            />
          </motion.div>

          {/* PHONE */}

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
            }}
            transition={{
              delay: 0.49,
              duration: 0.5,
            }}
          >
            <label
              htmlFor="phone"
              className="
                block

                font-body

                text-[11px]
                sm:text-sm

                text-[#24332F]

                mb-1.5
                sm:mb-2
              "
            >
              Phone Number
            </label>

            <motion.input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              whileFocus={{
                scale: 1.01,
                x: 2,
              }}
              className="
                w-full

                px-3
                sm:px-4

                py-2.5
                sm:py-3

                rounded-lg

                bg-white

                border
                border-[#24332F]/15

                font-body

                text-xs
                sm:text-sm

                text-[#24332F]

                placeholder-[#687773]

                focus:outline-none
                focus:border-[#0F5C4D]
                focus:ring-2
                focus:ring-[#0F5C4D]/20

                transition-all
                duration-300
              "
              placeholder="+91 9087654321"
            />
          </motion.div>

          {/* SUBJECT */}

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
            }}
            transition={{
              delay: 0.56,
              duration: 0.5,
            }}
          >
            <label
              htmlFor="subject"
              className="
                block

                font-body

                text-[11px]
                sm:text-sm

                text-[#24332F]

                mb-1.5
                sm:mb-2
              "
            >
              Subject *
            </label>

            <motion.input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              whileFocus={{
                scale: 1.01,
                x: 2,
              }}
              className="
                w-full

                px-3
                sm:px-4

                py-2.5
                sm:py-3

                rounded-lg

                bg-white

                border
                border-[#24332F]/15

                font-body

                text-xs
                sm:text-sm

                text-[#24332F]

                placeholder-[#687773]

                focus:outline-none
                focus:border-[#0F5C4D]
                focus:ring-2
                focus:ring-[#0F5C4D]/20

                transition-all
                duration-300
              "
              placeholder="What's this about?"
            />
          </motion.div>

          {/* MESSAGE */}

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
            }}
            transition={{
              delay: 0.63,
              duration: 0.5,
            }}
          >
            <label
              htmlFor="message"
              className="
                block

                font-body

                text-[11px]
                sm:text-sm

                text-[#24332F]

                mb-1.5
                sm:mb-2
              "
            >
              Message *
            </label>

            <motion.textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              whileFocus={{
                scale: 1.01,
                x: 2,
              }}
              className="
                w-full

                px-3
                sm:px-4

                py-2.5
                sm:py-3

                rounded-lg

                bg-white

                border
                border-[#24332F]/15

                font-body

                text-xs
                sm:text-sm

                text-[#24332F]

                placeholder-[#687773]

                resize-none

                focus:outline-none
                focus:border-[#0F5C4D]
                focus:ring-2
                focus:ring-[#0F5C4D]/20

                transition-all
                duration-300
              "
              placeholder="Tell us more about your project..."
            />
          </motion.div>

          {/* ========================================= */}
          {/* STATUS */}
          {/* ========================================= */}

          {submitStatus === "success" && (
            <motion.div
              initial={{
                opacity: 0,
                y: -10,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              className="
                p-3
                sm:p-4

                rounded-lg

                bg-[#0F5C4D]/10

                border
                border-[#0F5C4D]/30

                text-[11px]
                sm:text-sm

                text-[#0F5C4D]

                font-body
              "
            >
              ✓ Thank you! Your message has been sent successfully.
            </motion.div>
          )}

          {submitStatus === "error" && (
            <motion.div
              initial={{
                opacity: 0,
                y: -10,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              className="
                p-3
                sm:p-4

                rounded-lg

                bg-red-500/10

                border
                border-red-500/30

                text-[11px]
                sm:text-sm

                text-red-600

                font-body
              "
            >
              ✗ Something went wrong. Please try again.
            </motion.div>
          )}

          {/* ========================================= */}
          {/* SUBMIT BUTTON */}
          {/* ========================================= */}

          <motion.button
            whileHover={{
              y: -3,
              scale: 1.01,
            }}
            whileTap={{
              scale: 0.97,
            }}
            animate={{
              boxShadow: [
                "0px 8px 25px rgba(15,92,77,0.16)",
                "0px 12px 35px rgba(15,92,77,0.30)",
                "0px 8px 25px rgba(15,92,77,0.16)",
              ],
            }}
            transition={{
              boxShadow: {
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            type="submit"
            disabled={isSubmitting}
            className="
              group

              relative

              w-full

              flex
              items-center
              justify-center
              gap-2

              overflow-hidden

              bg-[#0F5C4D]

              hover:bg-[#0B4A3E]

              disabled:opacity-70
              disabled:cursor-not-allowed

              text-white

              rounded-lg

              px-5
              sm:px-6

              py-3
              sm:py-3.5

              font-body
              font-semibold

              text-xs
              sm:text-sm

              transition-all
              duration-300
            "
          >
            {/* Button Shine */}

            <motion.span
              className="
                absolute
                top-0
                -left-[100%]

                w-[60%]
                h-full

                bg-gradient-to-r
                from-transparent
                via-white/20
                to-transparent

                skew-x-[-20deg]
              "
              animate={{
                left: ["-100%", "150%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
            />

            <span className="relative z-10">
              {isSubmitting ? "Sending..." : "Send Message"}
            </span>

            <Send
              size={16}
              className="
                relative
                z-10

                transition-transform
                duration-300

                group-hover:translate-x-1
                group-hover:-translate-y-0.5
              "
            />
          </motion.button>
        </form>
      </motion.div>
    </div>
  </div>
</section>
        {/* =====================================================
            REVIEWS / TESTIMONIALS
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

    bg-[#E7F0ED]
  "
>
  {/* ========================================= */}
  {/* BACKGROUND ANIMATION */}
  {/* ========================================= */}

  <motion.div
    className="
      absolute
      -top-24
      -right-24
      sm:-top-32
      sm:-right-32

      w-[280px]
      h-[280px]
      sm:w-[450px]
      sm:h-[450px]

      rounded-full

      bg-[#0F5C4D]/10

      blur-[80px]
      sm:blur-[100px]

      pointer-events-none
    "
    animate={{
      x: [0, -80, 0],
      y: [0, 50, 0],
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3],
    }}
    transition={{
      duration: 9,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  <motion.div
    className="
      absolute
      -bottom-28
      -left-28
      sm:-bottom-40
      sm:-left-40

      w-[280px]
      h-[280px]
      sm:w-[400px]
      sm:h-[400px]

      rounded-full

      bg-[#9AC8BC]/20

      blur-[80px]
      sm:blur-[100px]

      pointer-events-none
    "
    animate={{
      x: [0, 70, 0],
      y: [0, -50, 0],
      scale: [1, 1.15, 1],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

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

            /* ================================= */
            /* CARD ENTRANCE */
            /* ================================= */

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

            /* ================================= */
            /* CONTINUOUS FLOAT */
            /* ================================= */

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

              bg-white

              rounded-[10px]
              sm:rounded-[1.5rem]

              p-2
              sm:p-7
              lg:p-8

              border
              border-[#24332F]/10

              overflow-hidden

              shadow-[0px_5px_15px_rgba(15,92,77,0.04)]
              sm:shadow-[0px_8px_25px_rgba(15,92,77,0.04)]

              hover:shadow-[0px_20px_50px_rgba(15,92,77,0.15)]

              transition-shadow
              duration-500
            "
          >

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
            MAP SECTION
        ===================================================== */}

        <section
  className="
    px-5
    sm:px-8
    md:px-12
    lg:px-16
    xl:px-20

    py-16
    sm:py-20
    lg:py-24
  "
>
  <div className="max-w-[1440px] mx-auto">

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
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative

        rounded-[2rem]

        overflow-hidden

        border
        border-[#24332F]/10

        h-[300px]
        sm:h-[400px]
        lg:h-[500px]

        bg-[#E7F0ED]

        shadow-[0_20px_60px_rgba(36,51,47,0.10)]
      "
    >

      {/* Google Maps */}

      <iframe
        src="https://www.google.com/maps?q=YOUR_OFFICE_LOCATION&output=embed"
        width="100%"
        height="100%"
        style={{
          border: 0,
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="CodeThrive InfoTech Office Location"
        className="
          w-full
          h-full
        "
      />

    </motion.div>

  </div>
</section>
      </main>

      <Footer tagline="Connect with us today." />
    </div>
  );
}