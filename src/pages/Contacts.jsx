import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Star,
  Send,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import arunPhoto from "../assets/arun.jpg";
import priyaPhoto from "../assets/priya.jpg";
import rahulPhoto from "../assets/rahul.jpg";

import contactimage from "../assets/contactimage.jpg";

// ============================================================
// DATA
// ============================================================

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "codethriveinfotech@gmail.com",
    href: "mailto:codethriveinfotech@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9150781685",
    href: "tel:+919150781685",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "No 1 Srihari Nivas,Indira Nagar,Sungam, Coimbatore, 641045 ",
    href: "#",
  },
];

const REVIEWS = [
  {
    name: "Arun Kumar",
    role: "Business Owner",
    quote:
      "CodeThrive delivered an excellent website for our business. The entire process was smooth and professional.",
    photo: arunPhoto,
  },
  {
    name: "Priya Sharma",
    role: "Founder",
    quote:
      "The team understood exactly what we needed and created something better than we expected.",
    photo: priyaPhoto,
  },
  {
    name: "Rahul Raj",
    role: "Managing Director",
    quote:
      "Very professional team. Great communication, modern design and excellent development quality.",
    photo: rahulPhoto,
  },
];

const OFFICE_HOURS = [
  {
    day: "Monday - Friday",
    time: "9:00 AM - 5:00 PM IST",
  },
  {
    day: "Sunday",
    time: "Closed",
  },
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
  setSubmitStatus(null);

  try {
    const whatsappNumber = "919150781685";

    const whatsappMessage = `
Hello CodeThrive InfoTech,
I would like to discuss  with you.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Subject: ${formData.subject}

Message:
${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setSubmitStatus("success");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitStatus(null);
    }, 4000);
  } catch (error) {
    console.error("WhatsApp submission error:", error);
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
    <div className="w-full overflow-hidden bg-[#F5F9FF] text-[#172033]">
      <Navbar />

      <main>
        {/* =====================================================
            HERO SECTION
        ===================================================== */}

        <section
          className="
            relative
            min-h-[58vh]
            flex
            items-center
            overflow-hidden
            pt-24
            pb-12
            sm:pt-28
            sm:pb-16
            lg:pt-32
            lg:pb-20
            px-4
            sm:px-8
            md:px-12
            lg:px-16
            xl:px-20
            bg-gradient-to-br
            from-[#071A35]
            via-[#123B68]
            to-[#082F49]
          "
        >
          {/* Background Video */}

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
              opacity-50
            "
          >
            <source src="/videos/contact.mp4" type="video/mp4" />
          </video>

          {/* Blue and Teal Overlay */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#071A35]/95
              via-[#075985]/70
              to-[#0F766E]/25
              pointer-events-none
            "
          />

          {/* Overall Dark Tint */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-black/20
              via-transparent
              to-[#082F49]/80
              pointer-events-none
            "
          />

          {/* Blue Glow */}

          <motion.div
            animate={{
              x: [0, 80, 0],
              y: [0, -50, 0],
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              top-[8%]
              right-[-120px]
              w-[320px]
              h-[320px]
              sm:w-[450px]
              sm:h-[450px]
              rounded-full
              bg-blue-500/25
              blur-[110px]
              pointer-events-none
            "
          />

          {/* Cyan Glow */}

          <motion.div
            animate={{
              x: [0, -40, 0],
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
              opacity: [0.12, 0.3, 0.12],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              bottom-[-150px]
              left-[-100px]
              w-[350px]
              h-[350px]
              sm:w-[500px]
              sm:h-[500px]
              rounded-full
              bg-cyan-400/25
              blur-[110px]
              pointer-events-none
            "
          />

          {/* Content */}

          <div className="relative z-10 w-full max-w-[1440px] mx-auto">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="max-w-[850px]"
            >
              {/* Label */}

              <motion.div
                variants={fadeUp}
                className="
                  flex
                  items-center
                  gap-2
                  mb-5
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
                    bg-cyan-300
                    shadow-[0_0_18px_rgba(103,232,249,0.9)]
                  "
                />

                <span
                  className="
                    font-body
                    text-[10px]
                    sm:text-sm
                    uppercase
                    tracking-[2px]
                    text-cyan-200
                    font-semibold
                  "
                >
                  Get in Touch
                </span>
              </motion.div>

              {/* Heading */}

              <motion.h1
                variants={fadeUp}
                className="
                  font-display
                  font-black
                  text-white
                  text-[42px]
                  sm:text-[64px]
                  md:text-[82px]
                  lg:text-[96px]
                  leading-[0.9]
                  tracking-[-3px]
                  sm:tracking-[-5px]
                  lg:tracking-[-6px]
                "
              >
                Let's Talk About
                <br />

                <span
                  className="
                    bg-gradient-to-r
                    from-blue-300
                    via-cyan-300
                    to-teal-300
                    bg-clip-text
                    text-transparent
                    drop-shadow-[0_0_25px_rgba(34,211,238,0.3)]
                  "
                >
                  Your Project
                </span>
              </motion.h1>

              {/* Description */}

              <motion.p
                variants={fadeUp}
                className="
                  mt-6
                  sm:mt-8
                  max-w-[620px]
                  font-body
                  text-sm
                  sm:text-lg
                  lg:text-xl
                  leading-relaxed
                  text-white/75
                "
              >
                Have a project in mind? Want to work together? Or just want
                to say hello? We'd love to hear from you.
              </motion.p>
            </motion.div>
          </div>

          {/* Bottom Gradient */}

          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              h-24
              sm:h-32
              bg-gradient-to-t
              from-[#F5F9FF]
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
            py-10
            sm:py-20
            lg:py-24
            bg-gradient-to-br
            from-[#F5F9FF]
            via-[#EAF4FF]
            to-[#E0F7FA]
          "
        >
          {/* Background Grid */}

          <motion.div
            className="
              absolute
              inset-0
              -z-10
              opacity-[0.18]
              bg-[linear-gradient(rgba(37,99,235,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.12)_1px,transparent_1px)]
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

          {/* Center Glow */}

          <motion.div
            className="
              absolute
              inset-0
              -z-10
              bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.95),transparent_58%)]
            "
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.5, 0.9, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Blue Glow */}

          <motion.div
            className="
              absolute
              -top-32
              -left-32
              -z-10
              w-80
              h-80
              rounded-full
              bg-blue-400/20
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

          {/* Teal Glow */}

          <motion.div
            className="
              absolute
              -top-32
              -right-32
              -z-10
              w-96
              h-96
              rounded-full
              bg-teal-300/25
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

          <div className="relative z-10 w-full max-w-[1440px] mx-auto">
            {/* Section Heading */}

            <motion.div
              className="text-center mb-8 sm:mb-14 lg:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
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
                  bg-white/70
                  border
                  border-blue-300/40
                  backdrop-blur-md
                  shadow-[0_0_25px_rgba(37,99,235,0.12)]
                "
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span
                  className="
                    w-2
                    h-2
                    rounded-full
                    bg-cyan-500
                    shadow-[0_0_12px_rgba(6,182,212,0.8)]
                    animate-pulse
                  "
                />

                <span
                  className="
                    text-[10px]
                    sm:text-xs
                    font-bold
                    tracking-[0.2em]
                    uppercase
                    text-blue-700
                  "
                >
                  Get In Touch
                </span>
              </motion.div>

              <motion.h2
                className="
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  lg:text-6xl
                  font-black
                  tracking-tight
                  text-[#172033]
                "
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                We'd Love to Hear{" "}
                <span
                  className="
                    bg-gradient-to-r
                    from-blue-600
                    via-cyan-500
                    to-teal-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  From You
                </span>
              </motion.h2>

              <motion.p
                className="
                  max-w-2xl
                  mx-auto
                  mt-4
                  text-sm
                  sm:text-base
                  md:text-lg
                  leading-relaxed
                  text-[#172033]/65
                "
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Have a project in mind? Reach out to us and let's discuss how
                we can bring your ideas to life with precision and creativity.
              </motion.p>

              <motion.div
                className="flex items-center justify-center gap-3 mt-6"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <span className="w-10 sm:w-16 h-[2px] bg-blue-500/30 rounded-full" />

                <span
                  className="
                    w-2.5
                    h-2.5
                    rounded-full
                    bg-cyan-500
                    shadow-[0_0_15px_rgba(6,182,212,0.7)]
                  "
                />

                <span className="w-10 sm:w-16 h-[2px] bg-teal-500/30 rounded-full" />
              </motion.div>
            </motion.div>

            {/* Contact Cards */}

            <div
              className="
                grid
                grid-cols-3
                md:grid-cols-2
                lg:grid-cols-3
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
                    p-2.5
                    sm:p-4
                    lg:p-6
                    bg-white/70
                    backdrop-blur-xl
                    border
                    border-white/90
                    shadow-lg
                    shadow-blue-500/10
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
                      bg-gradient-to-r
                      from-blue-400/20
                      via-cyan-400/20
                      to-teal-400/20
                      blur-3xl
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-500
                    "
                  />

                  {/* Shine */}

                  <motion.div
                    className="
                      absolute
                      top-0
                      bottom-0
                      w-10
                      sm:w-16
                      lg:w-20
                      bg-white/40
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
                        bg-gradient-to-br
                        from-blue-600
                        via-cyan-500
                        to-teal-400
                        flex
                        items-center
                        justify-center
                        text-white
                        shadow-[0_0_25px_rgba(6,182,212,0.3)]
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
                        text-blue-700/75
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
                        text-[#172033]
                        break-words
                        leading-tight
                      "
                    >
                      {item.value}
                    </p>

                    {/* Bottom Line */}

                    <motion.div
                      className="
                        mt-2
                        sm:mt-3
                        lg:mt-4
                        h-[2px]
                        rounded-full
                        bg-gradient-to-r
                        from-blue-600
                        via-cyan-500
                        to-teal-400
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

            {/* Office Hours */}

            <motion.div
              className="
                relative
                mt-5
                sm:mt-6
                overflow-hidden
                rounded-2xl
                sm:rounded-3xl
                bg-white/65
                backdrop-blur-xl
                border
                border-white/90
                shadow-lg
                shadow-blue-500/10
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
              <motion.div
                className="
                  absolute
                  -top-20
                  left-1/2
                  -translate-x-1/2
                  w-64
                  h-32
                  bg-gradient-to-r
                  from-blue-400/20
                  via-cyan-400/20
                  to-teal-400/20
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

              <div className="relative z-10 p-4 sm:p-7">
                <div className="flex items-center gap-3 mb-5">
                  <motion.div
                    className="
                      w-2
                      h-8
                      rounded-full
                      bg-gradient-to-b
                      from-blue-600
                      via-cyan-500
                      to-teal-400
                      shadow-[0_0_15px_rgba(6,182,212,0.4)]
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
                        text-[#172033]
                      "
                    >
                      Office Hours
                    </h3>

                    <p
                      className="
                        text-xs
                        sm:text-sm
                        text-[#172033]/55
                      "
                    >
                      We're available to assist you
                    </p>
                  </div>
                </div>

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
                        px-3
                        sm:px-4
                        py-3
                        rounded-xl
                        bg-white/50
                        border
                        border-white/80
                        hover:bg-white/80
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
                          text-[10px]
                          sm:text-sm
                          font-semibold
                          text-[#172033]
                        "
                      >
                        {hour.day}
                      </span>

                      <span
                        className="
                          text-[9px]
                          sm:text-xs
                          font-bold
                          text-blue-700
                        "
                      >
                        {hour.time}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="
                    mt-5
                    h-[2px]
                    rounded-full
                    bg-gradient-to-r
                    from-transparent
                    via-cyan-500/60
                    to-transparent
                  "
                  animate={{
                    opacity: [0.3, 0.9, 0.3],
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
            from-[#FFFFFF]
            via-[#EDF6FF]
            to-[#E5FAF8]
          "
        >
          {/* Blue Glow */}

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
              bg-blue-500/15
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

          {/* Teal Glow */}

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
              bg-teal-400/20
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
              bg-[linear-gradient(rgba(37,99,235,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.2)_1px,transparent_1px)]
              bg-[size:45px_45px]
            "
          />

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
              {/* LEFT IMAGE CARD */}

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
                  className="relative w-full max-w-[620px]"
                  whileHover={{
                    y: -8,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                >
                  <div
                    className="
                      absolute
                      inset-6
                      rounded-[2.5rem]
                      bg-blue-500/20
                      blur-[45px]
                    "
                  />

                  <div
                    className="
                      relative
                      aspect-square
                      rounded-[2.5rem]
                      overflow-hidden
                      bg-white/65
                      backdrop-blur-xl
                      border
                      border-white/90
                      shadow-[0_30px_80px_rgba(37,99,235,0.16)]
                    "
                  >
                    <motion.div
                      className="
                        absolute
                        -top-32
                        -right-32
                        w-80
                        h-80
                        rounded-full
                        bg-gradient-to-r
                        from-blue-400/30
                        via-cyan-400/25
                        to-teal-400/25
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

                    <div
                      className="
                        absolute
                        inset-x-0
                        bottom-0
                        h-1/3
                        bg-gradient-to-t
                        from-blue-500/10
                        to-transparent
                        z-30
                        pointer-events-none
                      "
                    />

                    <motion.div
                      className="
                        absolute
                        top-10
                        left-10
                        w-3
                        h-3
                        rounded-full
                        bg-cyan-500
                        shadow-[0_0_25px_rgba(6,182,212,0.8)]
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

                    <motion.div
                      className="
                        absolute
                        bottom-14
                        right-12
                        w-2
                        h-2
                        rounded-full
                        bg-teal-400
                        shadow-[0_0_18px_rgba(45,212,191,0.8)]
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

                    <motion.div
                      className="
                        absolute
                        bottom-8
                        left-8
                        w-12
                        h-12
                        rounded-2xl
                        border
                        border-blue-500/30
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
                        bg-white/75
                        backdrop-blur-md
                        border
                        border-white/90
                        shadow-sm
                        z-40
                      "
                    >
                      <motion.span
                        className="
                          w-2
                          h-2
                          rounded-full
                          bg-cyan-500
                          shadow-[0_0_12px_rgba(6,182,212,0.8)]
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
                          text-[#172033]
                        "
                      >
                        Let's Connect
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* RIGHT FORM */}

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
                className="w-full min-w-0"
              >
                {/* Form Header */}

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
                        bg-gradient-to-r
                        from-blue-600
                        to-cyan-500
                        rounded-full
                      "
                    />

                    <p
                      className="
                        font-body
                        text-blue-700
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

                  <h2
                    className="
                      font-display
                      font-bold
                      text-[#172033]
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

                    <span
                      className="
                        bg-gradient-to-r
                        from-blue-600
                        via-cyan-500
                        to-teal-500
                        bg-clip-text
                        text-transparent
                      "
                    >
                      something great.
                    </span>
                  </h2>

                  <p
                    className="
                      max-w-xl
                      text-xs
                      sm:text-sm
                      md:text-base
                      leading-relaxed
                      text-[#172033]/60
                      mb-6
                      sm:mb-8
                    "
                  >
                    Tell us about your project, ideas or requirements. Our
                    team will get back to you and discuss the best way to
                    bring your vision to life.
                  </p>
                </motion.div>

                {/* Form */}

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
                        text-[#172033]
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
                        bg-white/80
                        backdrop-blur-sm
                        border
                        border-blue-500/10
                        font-body
                        text-xs
                        sm:text-sm
                        text-[#172033]
                        placeholder-[#64748B]/70
                        shadow-sm
                        focus:outline-none
                        focus:border-blue-500/60
                        focus:ring-4
                        focus:ring-blue-500/10
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
                        text-[#172033]
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
                        bg-white/80
                        backdrop-blur-sm
                        border
                        border-blue-500/10
                        font-body
                        text-xs
                        sm:text-sm
                        text-[#172033]
                        placeholder-[#64748B]/70
                        shadow-sm
                        focus:outline-none
                        focus:border-blue-500/60
                        focus:ring-4
                        focus:ring-blue-500/10
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
                          text-[#172033]
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
                          bg-white/80
                          backdrop-blur-sm
                          border
                          border-blue-500/10
                          font-body
                          text-xs
                          sm:text-sm
                          text-[#172033]
                          placeholder-[#64748B]/70
                          shadow-sm
                          focus:outline-none
                          focus:border-blue-500/60
                          focus:ring-4
                          focus:ring-blue-500/10
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
                          text-[#172033]
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
                          bg-white/80
                          backdrop-blur-sm
                          border
                          border-blue-500/10
                          font-body
                          text-xs
                          sm:text-sm
                          text-[#172033]
                          placeholder-[#64748B]/70
                          shadow-sm
                          focus:outline-none
                          focus:border-blue-500/60
                          focus:ring-4
                          focus:ring-blue-500/10
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
                        text-[#172033]
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
                        bg-white/80
                        backdrop-blur-sm
                        border
                        border-blue-500/10
                        font-body
                        text-xs
                        sm:text-sm
                        text-[#172033]
                        placeholder-[#64748B]/70
                        resize-none
                        shadow-sm
                        focus:outline-none
                        focus:border-blue-500/60
                        focus:ring-4
                        focus:ring-blue-500/10
                        transition-all
                        duration-300
                      "
                      placeholder="Tell us more about your project..."
                    />
                  </motion.div>

                  {/* STATUS */}

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
                        bg-emerald-500/10
                        border
                        border-emerald-500/20
                        text-[11px]
                        sm:text-sm
                        text-emerald-700
                        font-body
                      "
                    >
                      ✓ Your message details are ready in WhatsApp. Please send the message to complete your enquiry.
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

                  {/* SUBMIT BUTTON */}

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
                      bg-gradient-to-r
                      from-blue-600
                      via-cyan-500
                      to-teal-500
                      hover:from-blue-700
                      hover:via-cyan-600
                      hover:to-teal-600
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
                      shadow-[0_10px_35px_rgba(6,182,212,0.25)]
                      transition-all
                      duration-300
                    "
                  >
                    <motion.span
                      className="
                        absolute
                        inset-y-0
                        -left-[100%]
                        w-[60%]
                        bg-gradient-to-r
                        from-transparent
                        via-white/30
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
  {isSubmitting ? "Opening WhatsApp..." : "Send via WhatsApp"}
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
            bg-gradient-to-br
            from-[#EAF4FF]
            via-[#F5F9FF]
            to-[#E2FAF7]
          "
        >
          {/* Blue Glow */}

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
              bg-blue-500/15
              blur-[100px]
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

          {/* Teal Glow */}

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
              bg-teal-400/15
              blur-[100px]
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
            {/* Header */}

            <motion.div
              className="mb-7 sm:mb-12"
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
                  text-blue-700
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
                  text-[#172033]
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

            {/* Reviews Grid */}

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
                const rotations = [-1.5, 1.2, -0.8, 1.5, -1.2, 0.8];

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
                    whileHover={{
                      y: -12,
                      rotate: 0,
                      scale: 1.025,
                    }}
                    className="
                      group
                      relative
                      bg-white/85
                      backdrop-blur-xl
                      rounded-[10px]
                      sm:rounded-[1.5rem]
                      p-2
                      sm:p-7
                      lg:p-8
                      border
                      border-white
                      overflow-hidden
                      shadow-[0px_5px_15px_rgba(37,99,235,0.05)]
                      sm:shadow-[0px_8px_25px_rgba(37,99,235,0.08)]
                      hover:shadow-[0px_20px_50px_rgba(37,99,235,0.2)]
                      transition-shadow
                      duration-500
                    "
                  >
                    {/* Animated Border */}

                    <motion.div
                      className="
                        absolute
                        inset-0
                        rounded-[10px]
                        sm:rounded-[1.5rem]
                        pointer-events-none
                        bg-[conic-gradient(from_0deg,transparent,#2563EB,transparent,#06B6D4,transparent,#14B8A6,transparent)]
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

                    <div
                      className="
                        relative
                        z-10
                        h-full
                        bg-white/90
                        rounded-[8px]
                        sm:rounded-[1.4rem]
                      "
                    >
                      {/* Stars */}

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
                              delay: index * 0.12 + star * 0.05,
                              duration: 0.35,
                              type: "spring",
                              stiffness: 200,
                            }}
                            animate={{
                              y: [0, -1, 0],
                            }}
                            className="text-amber-500"
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

                      {/* Quote */}

                      <motion.p
                        className="
                          font-display
                          text-[8px]
                          sm:text-lg
                          leading-[1.35]
                          sm:leading-relaxed
                          tracking-[-0.15px]
                          sm:tracking-[-0.5px]
                          text-[#172033]
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

                      {/* Reviewer */}

                      <div
                        className="
                          flex
                          items-center
                          gap-1.5
                          sm:gap-4
                        "
                      >
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
                          <motion.div
                            className="
                              absolute
                              -inset-[2px]
                              sm:-inset-[3px]
                              rounded-full
                              bg-[conic-gradient(from_0deg,#2563EB,#06B6D4,#14B8A6,#2563EB)]
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
                              bg-[#EAF4FF]
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

                        <div className="min-w-0">
                          <motion.p
                            className="
                              font-body
                              font-semibold
                              text-[7px]
                              sm:text-sm
                              text-[#172033]
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
                              text-[#64748B]
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

                      {/* Bottom Moving Light */}

                      <motion.div
                        className="
                          absolute
                          bottom-0
                          left-0
                          h-[1px]
                          sm:h-[2px]
                          bg-gradient-to-r
                          from-blue-600
                          via-cyan-500
                          to-teal-400
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
            px-4
            sm:px-8
            md:px-12
            lg:px-16
            xl:px-20
            py-12
            sm:py-20
            lg:py-24
            bg-gradient-to-br
            from-[#FFFFFF]
            via-[#EDF6FF]
            to-[#E5FAF8]
          "
        >
          <div className="max-w-[1440px] mx-auto">
            {/* Heading */}

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
                mb-8
                sm:mb-12
                lg:mb-14
              "
            >
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
                    bg-gradient-to-r
                    from-blue-600
                    to-cyan-500
                    rounded-full
                  "
                />

                <span
                  className="
                    text-blue-700
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
                    bg-gradient-to-r
                    from-cyan-500
                    to-teal-400
                    rounded-full
                  "
                />
              </div>

              <h2
                className="
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl
                  font-bold
                  tracking-tight
                  text-[#172033]
                "
              >
                Visit Our{" "}
                <span
                  className="
                    bg-gradient-to-r
                    from-blue-600
                    via-cyan-500
                    to-teal-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  Office
                </span>
              </h2>

              <p
                className="
                  mt-4
                  max-w-2xl
                  mx-auto
                  text-sm
                  sm:text-base
                  lg:text-lg
                  leading-relaxed
                  text-[#172033]/65
                "
              >
                Have a project in mind? Visit our office and let's discuss
                your ideas, requirements and plans with our team.
              </p>

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
                  bg-blue-500/10
                  border
                  border-blue-500/20
                  text-blue-700
                  text-xs
                  sm:text-sm
                  font-medium
                "
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className="
                      absolute
                      inline-flex
                      h-full
                      w-full
                      rounded-full
                      bg-cyan-500
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
                      bg-cyan-500
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
                h-[280px]
                sm:h-[400px]
                lg:h-[500px]
                bg-[#EAF4FF]
                shadow-[0_20px_60px_rgba(37,99,235,0.12)]
              "
            >
              {/* Animated Border */}

              <motion.div
                className="
                  absolute
                  -inset-[2px]
                  rounded-[2rem]
                  pointer-events-none
                  z-10
                  bg-gradient-to-r
                  from-blue-600
                  via-cyan-500
                  to-teal-400
                  opacity-80
                  blur-[2px]
                "
                animate={{
                  opacity: [0.45, 0.95, 0.45],
                  scale: [1, 1.005, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Inner Map */}

              <div
                className="
                  absolute
                  inset-[2px]
                  rounded-[2rem]
                  overflow-hidden
                  z-20
                  bg-[#EAF4FF]
                "
              >
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
                  className="w-full h-full"
                />

                <div
                  className="
                    absolute
                    inset-0
                    pointer-events-none
                    bg-gradient-to-t
                    from-blue-600/10
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
                  bg-gradient-to-r
                  from-blue-500/20
                  via-cyan-500/20
                  to-teal-400/20
                  blur-2xl
                "
                animate={{
                  opacity: [0.3, 0.7, 0.3],
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