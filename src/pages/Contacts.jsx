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
  const [activeReview, setActiveReview] = useState(0);
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
    p-10
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
      src="/videos/contact.mp4"
      type="video/mp4"
    />
  </video>

  {/* =================================================
      PRIMARY GREEN GRADIENT OVERLAY
  ================================================= */}
  <div
    className="
      absolute
      inset-0
      bg-gradient-to-r
      from-[#0F5C4D]/90
      via-[#0F5C4D]/60
      to-transparent
      pointer-events-none
    "
  />

  {/* =================================================
      SOFT OVERALL DARK TINT
  ================================================= */}
  <div
    className="
      absolute
      inset-0
      bg-gradient-to-b
      from-black/10
      via-transparent
      to-[#0F5C4D]/20
      pointer-events-none
    "
  />

  {/* =================================================
      SOFT GREEN GLOW
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
      bg-[#0F5C4D]/20
      blur-[100px]
      pointer-events-none
    "
  />

  {/* =================================================
      SECOND GREEN GLOW
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
      bg-emerald-400/15
      blur-[100px]
      pointer-events-none
    "
  />

  {/* =================================================
      CONTENT
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
      className="max-w-[800px]"
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
            bg-white
            shadow-[0_0_12px_rgba(255,255,255,0.5)]
          "
        />

        <span
          className="
            font-body
            text-xs
            sm:text-sm
            uppercase
            tracking-[2px]
            text-white
            font-semibold
          "
        >
          Get in Touch
        </span>
      </motion.div>

      {/* =================================================
          HEADING
      ================================================= */}
      <motion.h1
        variants={fadeUp}
        className="
          font-display
          font-black
          text-white
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
        Let's Talk About
        <br />

        <span
          className="
            text-[#BFE3D8]
          "
        >
          Your Project
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
          text-white/85
        "
      >
        Have a project in mind? Want to work together? Or just want to
        say hello? We'd love to hear from you.
      </motion.p>
    </motion.div>
  </div>

  {/* =================================================
      BOTTOM GRADIENT
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
      from-[#0F5C4D]/40
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
    overflow-hidden
    isolation-isolate
    px-3
    sm:px-8
    md:px-12
    lg:px-16
    xl:px-20
    py-12
    sm:py-20
    lg:py-24
    bg-gradient-to-br
    from-[#F3FBF7]
    via-[#D9EEE7]
    to-[#BFDCD1]
  "
>
  {/* ================= BACKGROUND ================= */}

  {/* Center Radial Light */}
  <motion.div
    className="
      absolute
      inset-0
      -z-10
      bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8),transparent_55%)]
    "
    animate={{
      scale: [1, 1.08, 1],
      opacity: [0.6, 0.9, 0.6],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* Moving Grid */}
  <motion.div
    className="
      absolute
      inset-0
      -z-10
      opacity-[0.15]
      bg-[linear-gradient(rgba(15,92,77,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(15,92,77,0.25)_1px,transparent_1px)]
      bg-[size:45px_45px]
    "
    animate={{
      backgroundPosition: ["0px 0px", "45px 45px"],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "linear",
    }}
  />

  {/* Top Left Glow */}
  <motion.div
    className="
      absolute
      -top-32
      -left-32
      -z-10
      w-80
      h-80
      rounded-full
      bg-emerald-400/20
      blur-3xl
    "
    animate={{
      x: [0, 40, 0],
      y: [0, 30, 0],
    }}
    transition={{
      duration: 9,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* Top Right Glow */}
  <motion.div
    className="
      absolute
      -top-32
      -right-32
      -z-10
      w-96
      h-96
      rounded-full
      bg-teal-400/20
      blur-3xl
    "
    animate={{
      x: [0, -40, 0],
      y: [0, 35, 0],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* Bottom Glow */}
  <motion.div
    className="
      absolute
      -bottom-40
      right-10
      -z-10
      w-96
      h-96
      rounded-full
      bg-emerald-500/15
      blur-3xl
    "
    animate={{
      x: [0, -50, 0],
      y: [0, -30, 0],
    }}
    transition={{
      duration: 11,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* ================= CONTENT ================= */}

  <div className="relative z-10 w-full max-w-[1440px] mx-auto">

    {/* ================= SECTION HEADING ================= */}

    <motion.div
      className="text-center mb-10 sm:mb-14 lg:mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      {/* Small Label */}
      <motion.div
        className="
          inline-flex
          items-center
          gap-2
          mb-3
          sm:mb-4
          px-4
          py-2
          rounded-full
          bg-white/60
          border
          border-emerald-700/10
          backdrop-blur-md
          shadow-sm
        "
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="w-2 h-2 rounded-full bg-[#0F5C4D] animate-pulse" />

        <span
          className="
            text-[10px]
            sm:text-xs
            font-bold
            tracking-[0.2em]
            uppercase
            text-[#0F5C4D]
          "
        >
          Get In Touch
        </span>
      </motion.div>

      {/* Main Heading */}
      <motion.h2
        className="
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
          font-black
          tracking-tight
          text-[#24332F]
        "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        We'd Love to Hear{" "}
        <span className="text-[#0F5C4D]">
          From You
        </span>
      </motion.h2>

      {/* Description */}
      <motion.p
        className="
          max-w-2xl
          mx-auto
          mt-4
          text-sm
          sm:text-base
          md:text-lg
          leading-relaxed
          text-[#24332F]/65
        "
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Have a project in mind? Reach out to us and let's
        discuss how we can bring your ideas to life with
        precision and creativity.
      </motion.p>

      {/* Decorative Line */}
      <motion.div
        className="flex items-center justify-center gap-3 mt-6"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <span className="w-10 sm:w-16 h-[2px] bg-[#0F5C4D]/30 rounded-full" />

        <span className="w-2.5 h-2.5 rounded-full bg-[#0F5C4D]" />

        <span className="w-10 sm:w-16 h-[2px] bg-[#0F5C4D]/30 rounded-full" />
      </motion.div>
    </motion.div>

    {/* ================= CONTACT CARDS ================= */}

    

<div
  className="
    grid
    grid-cols-3
    md:grid-cols-2
    lg:grid-cols-4
    gap-2
    sm:gap-4
    lg:gap-6
  "
>
  {CONTACT_INFO.map((item, index) => (
    <motion.a
      key={item.label}
      href={item.href}
      className="
        group
        relative
        overflow-hidden
        rounded-xl
        sm:rounded-2xl
        lg:rounded-3xl
        p-2
        sm:p-4
        lg:p-6
        bg-white/55
        backdrop-blur-xl
        border
        border-white/70
        shadow-lg
        shadow-[#0F5C4D]/5
        transition-all
        duration-500
      "
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
        duration: 0.6,
        delay: index * 0.12,
      }}
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
    >
      {/* Hover Glow */}
      <motion.div
        className="
          absolute
          -inset-10
          rounded-full
          bg-emerald-400/10
          blur-3xl
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
        "
      />

      {/* Moving Shine */}
      <motion.div
        className="
          absolute
          top-0
          bottom-0
          w-10
          sm:w-16
          lg:w-20
          bg-white/30
          blur-xl
          -skew-x-12
          opacity-0
          group-hover:opacity-100
        "
        animate={{
          x: ["-150%", "250%"],
        }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10">

        {/* Icon */}
        <motion.div
          className="
            w-8
            h-8
            sm:w-11
            sm:h-11
            lg:w-14
            lg:h-14
            rounded-lg
            sm:rounded-xl
            lg:rounded-2xl
            bg-[#0F5C4D]
            flex
            items-center
            justify-center
            text-white
            shadow-lg
            shadow-[#0F5C4D]/20
            mb-2
            sm:mb-3
            lg:mb-4
          "
          whileHover={{
            rotate: 8,
            scale: 1.1,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
          }}
        >
          <item.icon
            className="
              w-3.5
              h-3.5
              sm:w-5
              sm:h-5
              lg:w-6
              lg:h-6
            "
          />
        </motion.div>

        {/* Label */}
        <p
          className="
            text-[7px]
            sm:text-[10px]
            lg:text-xs
            uppercase
            tracking-[0.08em]
            sm:tracking-[0.12em]
            lg:tracking-[0.15em]
            font-bold
            text-[#0F5C4D]/70
            truncate
          "
        >
          {item.label}
        </p>

        {/* Value */}
        <p
          className="
            mt-1
            text-[8px]
            sm:text-xs
            lg:text-sm
            font-bold
            text-[#24332F]
            break-words
            leading-tight
          "
        >
          {item.value}
        </p>

        {/* Bottom Animated Line */}
        <motion.div
          className="
            mt-2
            sm:mt-3
            lg:mt-4
            h-[2px]
            rounded-full
            bg-gradient-to-r
            from-[#0F5C4D]
            to-emerald-300
            origin-left
          "
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.3 + index * 0.1,
          }}
        />
      </div>
    </motion.a>
  ))}
</div>

    {/* ================= OFFICE HOURS ================= */}

    <motion.div
      className="
        relative
        mt-5
        sm:mt-6
        overflow-hidden
        rounded-2xl
        sm:rounded-3xl
        bg-white/50
        backdrop-blur-xl
        border
        border-white/70
        shadow-lg
        shadow-[#0F5C4D]/5
      "
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
        duration: 0.7,
        delay: 0.4,
      }}
      whileHover={{
        y: -4,
      }}
    >
      {/* Top Glow */}
      <motion.div
        className="
          absolute
          -top-20
          left-1/2
          -translate-x-1/2
          w-64
          h-32
          bg-emerald-400/10
          blur-3xl
        "
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />

      <div className="relative z-10 p-5 sm:p-7">

        {/* Heading */}
        <div className="flex items-center gap-3 mb-5">
          <motion.div
            className="
              w-2
              h-8
              rounded-full
              bg-[#0F5C4D]
            "
            animate={{
              height: [32, 42, 32],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div>
            <h3
              className="
                text-lg
                sm:text-xl
                md:text-2xl
                font-black
                text-[#24332F]
              "
            >
              Office Hours
            </h3>

            <p
              className="
                text-xs
                sm:text-sm
                text-[#24332F]/55
              "
            >
              We're available to assist you
            </p>
          </div>
        </div>

        {/* Hours */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
          {OFFICE_HOURS.map((hour, index) => (
            <motion.div
              key={hour.day}
              className="
                group
                flex
                items-center
                justify-between
                gap-3
                px-4
                py-3
                rounded-xl
                bg-white/40
                border
                border-white/50
                hover:bg-white/70
                transition-all
                duration-300
              "
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
                delay: index * 0.08,
              }}
            >
              <span
                className="
                  text-xs
                  sm:text-sm
                  font-semibold
                  text-[#24332F]
                "
              >
                {hour.day}
              </span>

              <span
                className="
                  text-[10px]
                  sm:text-xs
                  font-bold
                  text-[#0F5C4D]
                "
              >
                {hour.time}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom Line */}
        <motion.div
          className="
            mt-5
            h-[2px]
            rounded-full
            bg-gradient-to-r
            from-transparent
            via-[#0F5C4D]/40
            to-transparent
          "
          animate={{
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
      </div>
    </motion.div>
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
    bg-gradient-to-br
    from-[#F7FCFA]
    via-[#EAF5F1]
    to-[#DDEEE8]
  "
>
  {/* ========================================= */}
  {/* BACKGROUND */}
  {/* ========================================= */}

  {/* Soft Top Glow */}
  <motion.div
    className="
      absolute
      -top-32
      -left-32
      w-[350px]
      h-[350px]
      sm:w-[500px]
      sm:h-[500px]
      rounded-full
      bg-[#0F5C4D]/10
      blur-[100px]
      pointer-events-none
    "
    animate={{
      x: [0, 60, 0],
      y: [0, 40, 0],
      opacity: [0.4, 0.7, 0.4],
    }}
    transition={{
      duration: 9,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* Soft Bottom Glow */}
  <motion.div
    className="
      absolute
      -bottom-40
      -right-40
      w-[400px]
      h-[400px]
      sm:w-[550px]
      sm:h-[550px]
      rounded-full
      bg-[#9AC8BC]/25
      blur-[110px]
      pointer-events-none
    "
    animate={{
      x: [0, -50, 0],
      y: [0, -40, 0],
      opacity: [0.35, 0.6, 0.35],
    }}
    transition={{
      duration: 11,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* Subtle Grid */}
  <div
    className="
      absolute
      inset-0
      opacity-[0.12]
      pointer-events-none
      bg-[linear-gradient(rgba(15,92,77,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(15,92,77,0.15)_1px,transparent_1px)]
      bg-[size:45px_45px]
    "
  />

  {/* ========================================= */}
  {/* MAIN CONTENT */}
  {/* ========================================= */}

  <div className="relative z-10 max-w-[1440px] mx-auto">

    <div
      className="
        grid
        lg:grid-cols-2
        gap-8
        sm:gap-12
        lg:gap-16
        items-center
      "
    >

      {/* ========================================= */}
      {/* LEFT - MODERN IMAGE CARD */}
      {/* ========================================= */}

      <motion.div
        initial={{
          opacity: 0,
          x: -50,
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
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          hidden
          lg:flex
          items-center
          justify-center
        "
      >

        <motion.div
          className="
            relative
            w-full
            max-w-[620px]
          "
          whileHover={{
            y: -8,
          }}
          transition={{
            duration: 0.4,
          }}
        >

          {/* Soft Shadow */}
          <div
            className="
              absolute
              inset-6
              rounded-[2.5rem]
              bg-[#0F5C4D]/15
              blur-[45px]
            "
          />

          {/* Main Glass Container */}
          <div
            className="
              relative
              aspect-square
              rounded-[2.5rem]
              overflow-hidden

              bg-white/55
              backdrop-blur-xl

              border
              border-white/80

              shadow-[0_30px_80px_rgba(15,92,77,0.14)]
            "
          >

            {/* ================================= */}
            {/* MOVING LIGHT */}
            {/* ================================= */}

            <motion.div
              className="
                absolute
                -top-32
                -right-32
                w-80
                h-80
                rounded-full
                bg-[#0F5C4D]/10
                blur-[70px]
                z-10
              "
              animate={{
                x: [0, -70, 0],
                y: [0, 60, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* ================================= */}
            {/* IMAGE */}
            {/* ================================= */}

            <motion.img
              src={contactimage}
              alt="Contact us"
              className="
                absolute
                inset-0
                w-full
                h-full
                object-contain
                p-14
                xl:p-20
                z-20
              "
              whileHover={{
                scale: 1.06,
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
            />

            {/* ================================= */}
            {/* BOTTOM GRADIENT */}
            {/* ================================= */}

            <div
              className="
                absolute
                inset-x-0
                bottom-0
                h-1/3
                bg-gradient-to-t
                from-[#0F5C4D]/10
                to-transparent
                z-30
                pointer-events-none
              "
            />

            {/* ================================= */}
            {/* FLOATING DOT 1 */}
            {/* ================================= */}

            <motion.div
              className="
                absolute
                top-10
                left-10
                w-3
                h-3
                rounded-full
                bg-[#0F5C4D]
                shadow-[0_0_25px_rgba(15,92,77,0.5)]
                z-40
              "
              animate={{
                y: [0, -12, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* ================================= */}
            {/* FLOATING DOT 2 */}
            {/* ================================= */}

            <motion.div
              className="
                absolute
                bottom-14
                right-12
                w-2
                h-2
                rounded-full
                bg-[#0F5C4D]
                shadow-[0_0_18px_rgba(15,92,77,0.5)]
                z-40
              "
              animate={{
                y: [0, 10, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
            />

            {/* ================================= */}
            {/* SMALL CORNER ACCENT */}
            {/* ================================= */}

            <motion.div
              className="
                absolute
                bottom-8
                left-8
                w-12
                h-12
                rounded-2xl
                border
                border-[#0F5C4D]/20
                z-40
              "
              animate={{
                y: [0, -6, 0],
                rotate: [0, 3, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* ================================= */}
            {/* TOP ACCENT */}
            {/* ================================= */}

            <div
              className="
                absolute
                top-8
                right-8
                flex
                items-center
                gap-2
                px-3
                py-2
                rounded-full
                bg-white/65
                backdrop-blur-md
                border
                border-white/80
                shadow-sm
                z-40
              "
            >
              <motion.span
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-[#0F5C4D]
                "
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-[#24332F]
                "
              >
                Let's Connect
              </span>
            </div>

          </div>
        </motion.div>
      </motion.div>


      {/* ========================================= */}
      {/* RIGHT - FORM */}
      {/* ========================================= */}

      <motion.div
        initial={{
          opacity: 0,
          x: 50,
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
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          w-full
          min-w-0
        "
      >

        {/* ================================= */}
        {/* FORM HEADER */}
        {/* ================================= */}

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
            duration: 0.6,
          }}
        >

          {/* Label */}

          <div
            className="
              flex
              items-center
              gap-2
              mb-3
              sm:mb-4
            "
          >
            <span
              className="
                w-8
                sm:w-10
                h-[2px]
                bg-[#0F5C4D]
                rounded-full
              "
            />

            <p
              className="
                font-body
                text-[#0F5C4D]
                text-[10px]
                sm:text-xs
                uppercase
                tracking-[1.5px]
                sm:tracking-[2px]
                font-semibold
              "
            >
              Get in Touch
            </p>
          </div>

          {/* Heading */}

          <h2
            className="
              font-display
              font-bold
              text-[#24332F]

              text-[30px]
              sm:text-5xl
              lg:text-[52px]

              leading-[0.95]

              tracking-[-1.5px]
              sm:tracking-[-2.5px]

              mb-3
              sm:mb-4
            "
          >
            Let's create
            <br />

            <span className="text-[#0F5C4D]">
              something great.
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              max-w-xl
              text-xs
              sm:text-sm
              md:text-base
              leading-relaxed
              text-[#24332F]/60
              mb-6
              sm:mb-8
            "
          >
            Tell us about your project, ideas or requirements.
            Our team will get back to you and discuss the best
            way to bring your vision to life.
          </p>

        </motion.div>


        {/* ================================= */}
        {/* FORM */}
        {/* ================================= */}

        <form
          onSubmit={handleSubmit}
          className="space-y-4 sm:space-y-5"
        >

          {/* NAME */}

          <motion.div
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
              delay: 0.1,
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
                font-medium
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
              }}
              className="
                w-full
                px-3
                sm:px-4
                py-3
                sm:py-3.5

                rounded-xl

                bg-white/75
                backdrop-blur-sm

                border
                border-[#24332F]/10

                font-body
                text-xs
                sm:text-sm

                text-[#24332F]

                placeholder-[#687773]/70

                shadow-sm

                focus:outline-none
                focus:border-[#0F5C4D]/60
                focus:ring-4
                focus:ring-[#0F5C4D]/10

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
              delay: 0.15,
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
                font-medium
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
              }}
              className="
                w-full
                px-3
                sm:px-4
                py-3
                sm:py-3.5

                rounded-xl

                bg-white/75
                backdrop-blur-sm

                border
                border-[#24332F]/10

                font-body
                text-xs
                sm:text-sm

                text-[#24332F]

                placeholder-[#687773]/70

                shadow-sm

                focus:outline-none
                focus:border-[#0F5C4D]/60
                focus:ring-4
                focus:ring-[#0F5C4D]/10

                transition-all
                duration-300
              "
              placeholder="contactus@codethrive.com"
            />
          </motion.div>


          {/* PHONE + SUBJECT */}

          <div
            className="
              grid
              sm:grid-cols-2
              gap-4
              sm:gap-5
            "
          >

            {/* PHONE */}

            <motion.div
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
              <label
                htmlFor="phone"
                className="
                  block
                  font-body
                  text-[11px]
                  sm:text-sm
                  font-medium
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
                }}
                className="
                  w-full
                  px-3
                  sm:px-4
                  py-3
                  sm:py-3.5

                  rounded-xl

                  bg-white/75
                  backdrop-blur-sm

                  border
                  border-[#24332F]/10

                  font-body
                  text-xs
                  sm:text-sm

                  text-[#24332F]

                  placeholder-[#687773]/70

                  shadow-sm

                  focus:outline-none
                  focus:border-[#0F5C4D]/60
                  focus:ring-4
                  focus:ring-[#0F5C4D]/10

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
                delay: 0.25,
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
                  font-medium
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
                }}
                className="
                  w-full
                  px-3
                  sm:px-4
                  py-3
                  sm:py-3.5

                  rounded-xl

                  bg-white/75
                  backdrop-blur-sm

                  border
                  border-[#24332F]/10

                  font-body
                  text-xs
                  sm:text-sm

                  text-[#24332F]

                  placeholder-[#687773]/70

                  shadow-sm

                  focus:outline-none
                  focus:border-[#0F5C4D]/60
                  focus:ring-4
                  focus:ring-[#0F5C4D]/10

                  transition-all
                  duration-300
                "
                placeholder="What's this about?"
              />
            </motion.div>

          </div>


          {/* MESSAGE */}

          <motion.div
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
              delay: 0.3,
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
                font-medium
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
              }}
              className="
                w-full

                px-3
                sm:px-4

                py-3
                sm:py-3.5

                rounded-xl

                bg-white/75
                backdrop-blur-sm

                border
                border-[#24332F]/10

                font-body

                text-xs
                sm:text-sm

                text-[#24332F]

                placeholder-[#687773]/70

                resize-none

                shadow-sm

                focus:outline-none
                focus:border-[#0F5C4D]/60
                focus:ring-4
                focus:ring-[#0F5C4D]/10

                transition-all
                duration-300
              "
              placeholder="Tell us more about your project..."
            />
          </motion.div>


          {/* ================================= */}
          {/* STATUS */}
          {/* ================================= */}

          {submitStatus === "success" && (
            <motion.div
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="
                p-3
                sm:p-4
                rounded-xl
                bg-[#0F5C4D]/10
                border
                border-[#0F5C4D]/20
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
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="
                p-3
                sm:p-4
                rounded-xl
                bg-red-500/10
                border
                border-red-500/20
                text-[11px]
                sm:text-sm
                text-red-600
                font-body
              "
            >
              ✗ Something went wrong. Please try again.
            </motion.div>
          )}


          {/* ================================= */}
          {/* SUBMIT BUTTON */}
          {/* ================================= */}

          <motion.button
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.97,
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

              rounded-xl

              px-5
              sm:px-6

              py-3.5
              sm:py-4

              font-body
              font-semibold

              text-xs
              sm:text-sm

              shadow-[0_10px_30px_rgba(15,92,77,0.18)]

              transition-all
              duration-300
            "
          >

            {/* Button Light Sweep */}

            <motion.span
              className="
                absolute
                inset-y-0
                -left-[100%]
                w-[60%]
                bg-gradient-to-r
                from-transparent
                via-white/20
                to-transparent
                skew-x-[-20deg]
              "
              animate={{
                left: ["-100%", "160%"],
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

    {/* Section Heading */}
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        text-center
        mb-10
        sm:mb-12
        lg:mb-14
      "
    >

      {/* Small Label */}
      <div
        className="
          flex
          items-center
          justify-center
          gap-3
          mb-4
        "
      >
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: 45 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            h-[2px]
            bg-[#0F5C4D]
            rounded-full
          "
        />

        <span
          className="
            text-[#0F5C4D]
            text-xs
            sm:text-sm
            font-semibold
            uppercase
            tracking-[0.25em]
          "
        >
          Find Us
        </span>

        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: 45 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            h-[2px]
            bg-[#0F5C4D]
            rounded-full
          "
        />
      </div>

      {/* Main Heading */}
      <h2
        className="
          text-3xl
          sm:text-4xl
          lg:text-5xl
          font-bold
          tracking-tight
          text-[#24332F]
        "
      >
        Visit Our{" "}
        <span className="text-[#0F5C4D]">
          Office
        </span>
      </h2>

      {/* Description */}
      <p
        className="
          mt-4
          max-w-2xl
          mx-auto
          text-sm
          sm:text-base
          lg:text-lg
          leading-relaxed
          text-[#24332F]/65
        "
      >
        Have a project in mind? Visit our office and
        let's discuss your ideas, requirements and
        plans with our team.
      </p>

      {/* Location Badge */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.2,
          duration: 0.5,
        }}
        className="
          inline-flex
          items-center
          gap-2
          mt-5
          px-4
          py-2
          rounded-full

          bg-[#0F5C4D]/8
          border
          border-[#0F5C4D]/15

          text-[#0F5C4D]
          text-xs
          sm:text-sm
          font-medium
        "
      >
        <span
          className="
            relative
            flex
            h-2
            w-2
          "
        >
          <span
            className="
              absolute
              inline-flex
              h-full
              w-full
              rounded-full
              bg-[#0F5C4D]
              opacity-60
              animate-ping
            "
          />

          <span
            className="
              relative
              inline-flex
              h-2
              w-2
              rounded-full
              bg-[#0F5C4D]
            "
          />
        </span>

        Our Location
      </motion.div>

    </motion.div>


    {/* Map */}
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
        group
        rounded-[2rem]
        overflow-hidden

        h-[300px]
        sm:h-[400px]
        lg:h-[500px]

        bg-[#E7F0ED]

        shadow-[0_20px_60px_rgba(36,51,47,0.10)]
      "
    >

      {/* Animated Glow Border */}
      <motion.div
        className="
          absolute
          -inset-[2px]
          rounded-[2rem]
          pointer-events-none
          z-10

          bg-gradient-to-r
          from-[#0F5C4D]
          via-[#9AC8BC]
          to-[#0F5C4D]

          opacity-70
          blur-[2px]
        "
        animate={{
          opacity: [0.45, 0.9, 0.45],
          scale: [1, 1.005, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Inner Map Container */}
      <div
        className="
          absolute
          inset-[2px]
          rounded-[2rem]
          overflow-hidden
          z-20
          bg-[#E7F0ED]
        "
      >

        {/* Google Maps */}
        <iframe
          src="https://www.google.com/maps?q=10.9949924,76.984602&z=17&output=embed"
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

        {/* Subtle Map Overlay */}
        <div
          className="
            absolute
            inset-0
            pointer-events-none

            bg-gradient-to-t
            from-[#0F5C4D]/10
            via-transparent
            to-transparent
          "
        />

      </div>

      {/* Outer Glow */}
      <motion.div
        className="
          absolute
          -inset-3
          rounded-[2.2rem]
          pointer-events-none
          -z-10

          bg-[#0F5C4D]/20
          blur-2xl
        "
        animate={{
          opacity: [0.3, 0.65, 0.3],
          scale: [0.98, 1.02, 0.98],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

    </motion.div>

  </div>
</section>
      </main>

      <Footer tagline="Connect with us today." />
    </div>
  );
}