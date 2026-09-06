import { Link } from "react-router-dom";

import {
  ArrowUpRight,
  ArrowUp,
  Mail,
  MapPin,
  ShieldCheck,
  X,
  Lock,
  Database,
  UserCheck,
  FileText,
  ChevronRight,
  Sparkles,
} from "lucide-react";

import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* =========================================================
   SOCIAL LINKS
========================================================= */

const SOCIAL = [
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    href: "https://wa.me/9051781685",
    primary: true,
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://instagram.com/",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://linkedin.com/in/codethrive-infitech-5b6361402",
  },
  {
    name: "Facebook",
    icon: FaFacebookF,
    href: "https://facebook.com/YOUR_PAGE",
  },
  {
    name: "X",
    icon: FaTwitter,
    href: "https://x.com/YOUR_USERNAME",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/YOUR_USERNAME",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:info@codethriveinfotech.in",
  },
];

const NAVIGATION = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Work", to: "/work" },
  { label: "Services", to: "/services" },
  { label: "Process", to: "/process" },
  { label: "Awards", to: "/awards" },
  { label: "Contact", to: "/contact" },
];

const LEGAL = [
  "Privacy Policy",
  "Terms of Service",
  "Cookie Policy",
];

export default function Footer({ tagline }) {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =========================================================
     CLOSE MODAL WITH ESCAPE KEY
  ========================================================= */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setPrivacyOpen(false);
      }
    };

    if (privacyOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [privacyOpen]);

  return (
    <div>
      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer
        className="
          relative
          w-full
          overflow-hidden
          bg-emerald-200
          border-t
          border-[#24332F]/10
        "
      >
        {/* =====================================================
            DECORATIVE GLOWS
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -top-24
            -right-24
            w-[160px]
            h-[160px]
            sm:w-[220px]
            sm:h-[220px]
            rounded-full
            bg-[#0F5C4D]/8
            blur-[65px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-24
            -left-24
            w-[150px]
            h-[150px]
            sm:w-[200px]
            sm:h-[200px]
            rounded-full
            bg-[#0F5C4D]/8
            blur-[65px]
          "
        />

        {/* =====================================================
            MAIN CONTAINER
        ===================================================== */}

        <div
          className="
            relative
            max-w-[1440px]
            mx-auto
            px-4
            sm:px-8
            md:px-12
            lg:px-16
            xl:px-20
            pt-4
            sm:pt-5
            lg:pt-5
            pb-3
            sm:pb-4
            lg:pb-3
          "
        >
          {/* =================================================
              CTA
          ================================================= */}

          <div
            className="
              flex
              flex-col
              lg:flex-row
              lg:items-center
              lg:justify-between
              gap-3
              sm:gap-4
              lg:gap-5
              pb-4
              sm:pb-5
              lg:pb-4
              border-b
              border-[#24332F]/10
            "
          >
            {/* CTA TEXT */}

            <div className="min-w-0">
              <p
                className="
                  font-body
                  text-[#0F5C4D]
                  text-[9px]
                  sm:text-[10px]
                  tracking-[1.4px]
                  sm:tracking-[1.8px]
                  uppercase
                  mb-1
                  sm:mb-1.5
                "
              >
                Have a project in mind?
              </p>

              <h2
                className="
                  font-display
                  font-bold
                  text-[#24332F]
                  text-[21px]
                  sm:text-[28px]
                  md:text-[32px]
                  lg:text-[36px]
                  leading-[1.08]
                  tracking-[-0.7px]
                  sm:tracking-[-1.2px]
                  max-w-[650px]
                "
              >
                Let's build{" "}
                <span className="text-[#0F5C4D]">
                  something great.
                </span>
              </h2>
            </div>

            {/* CTA BUTTON */}

            <Link
              to="/contact"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2
                w-full
                sm:w-fit
                shrink-0
                bg-[#0F5C4D]
                hover:bg-[#0B4A3E]
                text-white
                font-body
                font-semibold
                text-[11px]
                sm:text-xs
                tracking-[0.4px]
                rounded-full
                px-5
                sm:px-6
                py-2.5
                sm:py-3
                transition-all
                duration-300
                hover:-translate-y-0.5
                shadow-[0px_8px_25px_rgba(15,92,77,0.16)]
              "
            >
              <span>Start a Conversation</span>

              <ArrowUpRight
                size={14}
                className="
                  shrink-0
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </Link>
          </div>

          {/* =================================================
              MAIN FOOTER - 4 COLUMNS
          ================================================= */}

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-[1.5fr_0.8fr_0.8fr_1.15fr]
              gap-x-7
              sm:gap-x-9
              lg:gap-x-10
              gap-y-5
              sm:gap-y-6
              lg:gap-y-0
              py-4
              sm:py-5
              lg:py-4
            "
          >
            {/* =================================================
                COLUMN 1
            ================================================= */}

            <div
              className="
                min-w-0
                sm:col-span-2
                lg:col-span-1
              "
            >
              <h3
                className="
                  font-display
                  font-bold
                  text-[#24332F]
                  text-[17px]
                  sm:text-xl
                  tracking-[-0.6px]
                  mb-0.5
                "
              >
                CodeThrive InfoTech
              </h3>

              <h4
                className="
                  font-body
                  text-[#687773]
                  text-[10px]
                  sm:text-sm
                  leading-relaxed
                  max-w-[380px]
                "
              >
                {tagline ||
                  "Architecture for the digital age."}
              </h4>

              {/* CONTACT DETAILS */}

              <div
                className="
                  flex
                  flex-col
                  gap-2
                  sm:gap-2.5
                  mt-2.5
                  sm:mt-3
                "
              >
                {/* EMAIL */}

                <a
                  href="mailto:contactus@codethrive.com"
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    min-w-0
                    max-w-full
                    text-[#687773]
                    hover:text-[#0F5C4D]
                    transition-colors
                    duration-300
                  "
                >
                  <span
                    className="
                      flex
                      items-center
                      justify-center
                      w-6
                      h-6
                      sm:w-7
                      sm:h-7
                      shrink-0
                      rounded-full
                      border
                      border-[#24332F]/10
                      bg-white/70
                      transition-all
                      duration-300
                      group-hover:bg-[#0F5C4D]
                      group-hover:text-white
                      group-hover:border-[#0F5C4D]
                    "
                  >
                    <Mail size={12} />
                  </span>

                  <span
                    className="
                      font-body
                      text-[11px]
                      sm:text-[15px]
                      break-all
                    "
                  >
                    info@codethriveinfotech.com
                  </span>
                </a>

                {/* ADDRESS */}

                <div
                  className="
                    flex
                    items-start
                    gap-2
                    text-[#687773]
                  "
                >
                  <span
                    className="
                      flex
                      items-center
                      justify-center
                      w-6
                      h-6
                      sm:w-7
                      sm:h-7
                      shrink-0
                      rounded-full
                      border
                      border-[#24332F]/10
                      bg-white/70
                    "
                  >
                    <MapPin size={12} />
                  </span>

                  <span
                    className="
                      font-body
                      text-[10px]
                      sm:text-[15px]
                      leading-[1.4]
                      sm:leading-relaxed
                      max-w-[360px]
                    "
                  >
                    1,Srihari Nivas, Sungam, Indira Nagar,
                    <br />
                    Coimbatore, Tamil Nadu – 641045,
                    <br />
                    India
                  </span>
                </div>
              </div>

              {/* CONNECT WITH US */}

              <div className="mt-4 sm:mt-5">
                <p
                  className="
                    mb-2
                    font-body
                    font-semibold
                    text-[#24332F]
                    text-[10px]
                    sm:text-[15px]
                    tracking-[0.08em]
                    uppercase
                  "
                >
                  Connect With Us
                </p>

                <div
                  className="
                    flex
                    flex-wrap
                    items-center
                    gap-1.5
                    sm:gap-2
                    max-w-[420px]
                  "
                >
                  {SOCIAL.map((item) => {
                    const Icon = item.icon;

                    return (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        target={
                          item.name === "Email"
                            ? undefined
                            : "_blank"
                        }
                        rel={
                          item.name === "Email"
                            ? undefined
                            : "noopener noreferrer"
                        }
                        aria-label={item.name}
                        whileHover={{
                          y: -3,
                          scale: 1.05,
                        }}
                        whileTap={{
                          scale: 0.94,
                        }}
                        className={`group relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-full border bg-white/70 transition-all duration-300 ${
                          item.primary
                            ? "border-[#0F5C4D]/30 text-[#0F5C4D] shadow-[0_4px_15px_rgba(15,92,77,0.10)]"
                            : "border-[#24332F]/10 text-[#687773]"
                        } hover:bg-[#0F5C4D] hover:text-white hover:border-[#0F5C4D] hover:shadow-[0_8px_25px_rgba(15,92,77,0.22)]`}
                      >
                        {item.primary && (
                          <motion.span
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.25, 0, 0.25],
                            }}
                            transition={{
                              duration: 2.2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="
                              pointer-events-none
                              absolute
                              inset-0
                              rounded-full
                              border
                              border-[#0F5C4D]/30
                            "
                          />
                        )}

                        <Icon
                          className="
                            relative
                            z-10
                            text-[15px]
                            sm:text-[18px]
                            transition-transform
                            duration-300
                            group-hover:scale-110
                          "
                        />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* =================================================
                COLUMN 2
            ================================================= */}

            <div className="min-w-0">
              <h3
                className="
                  font-body
                  text-[#0F5C4D]
                  text-[10px]
                  sm:text-[15px]
                  tracking-[1.2px]
                  sm:tracking-[1.5px]
                  uppercase
                  mb-2
                  sm:mb-2.5
                "
              >
                Navigation
              </h3>

              <div
                className="
                  flex
                  flex-col
                  gap-1
                  sm:gap-1.5
                "
              >
                {NAVIGATION.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="
                      group
                      flex
                      items-center
                      gap-1.5
                      w-fit
                      font-body
                      text-[11px]
                      sm:text-[16px]
                      text-[#687773]
                      hover:text-[#0F5C4D]
                      transition-colors
                      duration-300
                    "
                  >
                    <span>{item.label}</span>

                    <ArrowUpRight
                      size={11}
                      className="
                        opacity-0
                        -translate-x-1
                        translate-y-1
                        transition-all
                        duration-300
                        group-hover:opacity-100
                        group-hover:translate-x-0
                        group-hover:translate-y-0
                      "
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* =================================================
                COLUMN 3
            ================================================= */}

            <div className="min-w-0">
              <p
                className="
                  font-body
                  text-[#0F5C4D]
                  text-[10px]
                  sm:text-[15px]
                  tracking-[1.2px]
                  sm:tracking-[1.5px]
                  uppercase
                  mb-2
                  sm:mb-2.5
                "
              >
                Legal
              </p>

              <div
                className="
                  flex
                  flex-col
                  gap-1
                  sm:gap-1.5
                "
              >
                {LEGAL.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => {
                      if (item === "Privacy Policy") {
                        setPrivacyOpen(true);
                      }
                    }}
                    className="
                      w-fit
                      text-left
                      font-body
                      text-[11px]
                      sm:text-[16px]
                      text-[#687773]
                      hover:text-[#0F5C4D]
                      transition-colors
                      duration-300
                    "
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* =================================================
                COLUMN 4
            ================================================= */}

            <div
              className="
                relative
                flex
                items-center
                justify-center
                min-h-[110px]
                sm:min-h-[140px]
                lg:min-h-[190px]
                overflow-hidden
                rounded-[24px]
                bg-[#0F5C4D]
                shadow-[0_15px_40px_rgba(15,92,77,0.18)]
              "
            >
              {/* BACKGROUND GLOW */}

              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.15, 0.3, 0.15],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  w-40
                  h-40
                  rounded-full
                  bg-emerald-300
                  blur-3xl
                "
              />

              {/* OUTER ROTATING RING */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  w-[125px]
                  h-[125px]
                  rounded-full
                  border
                  border-dashed
                  border-emerald-300/50
                "
              >
                <span
                  className="
                    absolute
                    -top-1
                    left-1/2
                    -translate-x-1/2
                    w-3
                    h-3
                    rounded-full
                    bg-emerald-300
                    shadow-[0_0_18px_rgba(167,243,208,0.8)]
                  "
                />

                <span
                  className="
                    absolute
                    -bottom-1
                    left-1/2
                    -translate-x-1/2
                    w-2.5
                    h-2.5
                    rounded-full
                    bg-emerald-200
                  "
                />
              </motion.div>

              {/* INNER ROTATING RING */}

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  w-[85px]
                  h-[85px]
                  rounded-full
                  border-2
                  border-emerald-200/30
                "
              >
                <span
                  className="
                    absolute
                    top-1/2
                    -right-1
                    -translate-y-1/2
                    w-2.5
                    h-2.5
                    rounded-full
                    bg-emerald-200
                    shadow-[0_0_15px_rgba(167,243,208,0.8)]
                  "
                />
              </motion.div>

              {/* CENTER */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  relative
                  z-10
                  flex
                  items-center
                  justify-center
                  w-[58px]
                  h-[58px]
                  rounded-full
                  bg-emerald-200
                  shadow-[0_0_35px_rgba(167,243,208,0.35)]
                "
              >
                <motion.div
                  animate={{
                    rotate: [0, 15, -15, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Sparkles
                    size={24}
                    className="text-[#0F5C4D]"
                  />
                </motion.div>
              </motion.div>

              {/* FLOATING DOTS */}

              <motion.span
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  left-5
                  top-6
                  w-2
                  h-2
                  rounded-full
                  bg-emerald-200
                "
              />

              <motion.span
                animate={{
                  y: [0, 12, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  right-6
                  top-8
                  w-2.5
                  h-2.5
                  rounded-full
                  bg-emerald-300
                "
              />

              <motion.span
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  bottom-8
                  left-8
                  w-2
                  h-2
                  rounded-full
                  bg-emerald-300
                "
              />

              <motion.span
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  bottom-7
                  right-8
                  w-2
                  h-2
                  rounded-full
                  bg-emerald-200
                "
              />

              {/* TEXT */}

              <div
                className="
                  absolute
                  bottom-4
                  left-4
                  right-4
                  text-center
                "
              >
                <p
                  className="
                    font-display
                    font-bold
                    text-sm
                    text-white
                  "
                >
                  Think. Create. Thrive.
                </p>

                <p
                  className="
                    mt-0.5
                    font-body
                    text-[9px]
                    tracking-[0.15em]
                    uppercase
                    text-emerald-100/70
                  "
                >
                  Ideas in motion
                </p>
              </div>
            </div>

            {/* =================================================
                BACK TO TOP
            ================================================= */}

            <div
              className="
                sm:col-span-2
                lg:col-span-4
                flex
                justify-start
                sm:justify-end
                mt-0
                sm:mt-0
                lg:mt-2
              "
            >
              <button
                onClick={scrollToTop}
                className="
                  group
                  flex
                  items-center
                  gap-2
                  font-body
                  text-[8px]
                  sm:text-[10px]
                  tracking-[1.1px]
                  uppercase
                  text-[#687773]
                  hover:text-[#0F5C4D]
                  transition-colors
                  duration-300
                "
              >
                Back to top

                <span
                  className="
                    flex
                    items-center
                    justify-center
                    w-6
                    h-6
                    sm:w-7
                    sm:h-7
                    rounded-full
                    border
                    border-[#24332F]/10
                    bg-white
                    transition-all
                    duration-300
                    group-hover:bg-[#0F5C4D]
                    group-hover:text-white
                    group-hover:border-[#0F5C4D]
                    group-hover:-translate-y-1
                  "
                >
                  <ArrowUp size={11} />
                </span>
              </button>
            </div>
          </div>

          {/* =================================================
              BOTTOM BAR
          ================================================= */}

          <div
            className="
              pt-2.5
              sm:pt-3
              border-t
              border-[#24332F]/10
              flex
              flex-col
              sm:flex-row
              items-center
              justify-between
              gap-1.5
              sm:gap-1
              text-center
              sm:text-left
            "
          >
            <p
              className="
                font-body
                text-[8px]
                sm:text-[10px]
                text-[#687773]
              "
            >
              ©2026 CodeThrive InfoTech. All rights reserved.
            </p>

            <motion.button
              type="button"
              onClick={() => setPrivacyOpen(true)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="
                group
                relative
                flex
                items-center
                justify-center
                gap-1.5
                font-body
                text-[9px]
                sm:text-[10px]
                text-[#687773]
                transition-colors
                duration-300
                hover:text-[#0F5C4D]
              "
            >
              <ShieldCheck
                size={12}
                strokeWidth={1.8}
              />

              <span>Privacy Policy</span>

              <span
                className="
                  absolute
                  -bottom-1
                  left-0
                  h-[1px]
                  w-0
                  bg-[#0F5C4D]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </motion.button>

            <p
              className="
                font-body
                text-[8px]
                sm:text-[10px]
                text-[#687773]
              "
            >
              Designed & built with intention.
            </p>
          </div>
        </div>
      </footer>

      {/* =====================================================
          PRIVACY POLICY MODAL
      ===================================================== */}

      <AnimatePresence>
        {privacyOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setPrivacyOpen(false)}
            className="
              fixed
              inset-0
              z-[999]
              flex
              items-center
              justify-center
              bg-[#24332F]/45
              backdrop-blur-md
              p-2.5
              sm:p-6
            "
          >
            {/* =================================================
                MODAL CONTAINER
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.94,
                y: 20,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                w-full
                max-w-[850px]
                max-h-[94vh]
                sm:max-h-[85vh]
                overflow-hidden
                rounded-[18px]
                sm:rounded-[28px]
                border
                border-[#DDEBE6]
                bg-[#F3F7F4]
                shadow-[0_30px_100px_rgba(36,51,47,0.25)]
              "
            >
              {/* =================================================
                  MODAL HEADER
              ================================================= */}

              <div
                className="
                  relative
                  flex
                  items-center
                  justify-between
                  gap-3
                  border-b
                  border-[#DDEBE6]
                  bg-white/80
                  px-3
                  py-3
                  sm:px-6
                  sm:py-5
                "
              >
                <div className="flex items-center gap-2.5 sm:gap-4">
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      sm:h-12
                      sm:w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      sm:rounded-2xl
                      bg-[#DDEBE6]
                      text-[#0F5C4D]
                    "
                  >
                    <ShieldCheck
                      size={18}
                      className="sm:hidden"
                    />

                    <ShieldCheck
                      size={23}
                      className="hidden sm:block"
                    />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        font-body
                        text-[8px]
                        sm:text-[10px]
                        uppercase
                        tracking-[0.16em]
                        text-[#0F5C4D]
                      "
                    >
                      Your Privacy Matters
                    </p>

                    <h2
                      className="
                        mt-0.5
                        font-display
                        text-[17px]
                        sm:text-[24px]
                        font-bold
                        leading-tight
                        text-[#24332F]
                      "
                    >
                      Privacy Policy
                    </h2>
                  </div>
                </div>

                {/* CLOSE BUTTON */}

                <button
                  type="button"
                  onClick={() => setPrivacyOpen(false)}
                  aria-label="Close Privacy Policy"
                  className="
                    flex
                    h-8
                    w-8
                    sm:h-10
                    sm:w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#24332F]/10
                    bg-white
                    text-[#687773]
                    transition-all
                    duration-300
                    hover:bg-[#0F5C4D]
                    hover:text-white
                    hover:border-[#0F5C4D]
                    hover:rotate-90
                  "
                >
                  <X size={16} />
                </button>

                {/* HEADER GLOW */}

                <motion.div
                  animate={{
                    x: [0, 30, 0],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    pointer-events-none
                    absolute
                    -top-16
                    right-20
                    h-32
                    w-32
                    rounded-full
                    bg-emerald-200/60
                    blur-3xl
                  "
                />
              </div>

              {/* =================================================
                  MODAL SCROLL CONTENT
              ================================================= */}

              <div
                className="
                  relative
                  max-h-[calc(94vh-65px)]
                  sm:max-h-[calc(85vh-105px)]
                  overflow-y-auto
                  overscroll-contain
                  px-3
                  py-4
                  sm:px-8
                  sm:py-8
                "
              >
                {/* =================================================
                    INTRODUCTION
                ================================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.15,
                    duration: 0.4,
                  }}
                  className="
                    mb-4
                    sm:mb-6
                    rounded-xl
                    sm:rounded-2xl
                    border
                    border-[#DDEBE6]
                    bg-white/80
                    p-3
                    sm:p-6
                  "
                >
                  <div className="flex gap-2.5 sm:gap-4">
                    <motion.div
                      initial={{
                        scale: 0,
                        rotate: -20,
                      }}
                      animate={{
                        scale: 1,
                        rotate: 0,
                      }}
                      transition={{
                        delay: 0.2,
                        type: "spring",
                        stiffness: 180,
                      }}
                      className="
                        flex
                        h-8
                        w-8
                        sm:h-11
                        sm:w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        sm:rounded-xl
                        bg-[#DDEBE6]
                        text-[#0F5C4D]
                      "
                    >
                      <Lock
                        size={15}
                        className="sm:hidden"
                      />

                      <Lock
                        size={19}
                        className="hidden sm:block"
                      />
                    </motion.div>

                    <div className="min-w-0">
                      <h3
                        className="
                          font-display
                          text-[14px]
                          sm:text-[18px]
                          font-semibold
                          text-[#24332F]
                        "
                      >
                        Introduction
                      </h3>

                      <p
                        className="
                          mt-1.5
                          sm:mt-2
                          font-body
                          text-[10.5px]
                          sm:text-[14px]
                          leading-[1.55]
                          sm:leading-6
                          text-[#687773]
                        "
                      >
                        Welcome to CodeThrive. We respect your privacy
                        and are committed to protecting your personal
                        data. This privacy policy will inform you as to
                        how we look after your personal data when you
                        visit our website and tell you about your
                        privacy rights.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* =================================================
                    01 - DATA WE COLLECT
                ================================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.25,
                    duration: 0.45,
                  }}
                  className="
                    group
                    rounded-xl
                    sm:rounded-2xl
                    border
                    border-transparent
                    p-1.5
                    sm:p-3
                    transition-all
                    duration-300
                    hover:border-[#DDEBE6]
                    hover:bg-white/60
                  "
                >
                  <div className="flex gap-2.5 sm:gap-4">
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                        rotate: 5,
                      }}
                      className="
                        flex
                        h-8
                        w-8
                        sm:h-10
                        sm:w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        sm:rounded-xl
                        bg-[#DDEBE6]
                        text-[#0F5C4D]
                        transition-all
                        duration-300
                        group-hover:bg-[#0F5C4D]
                        group-hover:text-white
                      "
                    >
                      <Database size={15} />
                    </motion.div>

                    <div className="min-w-0 flex-1">
                      <h3
                        className="
                          flex
                          items-center
                          gap-1
                          sm:gap-2
                          font-display
                          text-[13px]
                          sm:text-[17px]
                          font-semibold
                          leading-tight
                          text-[#24332F]
                        "
                      >
                        1. Data We Collect

                        <ChevronRight size={12} />
                      </h3>

                      <p
                        className="
                          mt-1
                          sm:mt-2
                          font-body
                          text-[10px]
                          sm:text-[14px]
                          leading-[1.55]
                          sm:leading-6
                          text-[#687773]
                        "
                      >
                        We may collect, use, store and transfer
                        different kinds of personal data about you
                        which we have grouped together as follows:
                      </p>

                      {/* IDENTITY DATA */}

                      <div className="mt-3 sm:mt-4">
                        <h4
                          className="
                            font-display
                            text-[11px]
                            sm:text-[15px]
                            font-semibold
                            text-[#24332F]
                          "
                        >
                          ✓ Identity Data
                        </h4>

                        <p
                          className="
                            mt-1
                            font-body
                            text-[10px]
                            sm:text-[13px]
                            leading-[1.55]
                            sm:leading-6
                            text-[#687773]
                          "
                        >
                          includes first name, last name.
                        </p>
                      </div>

                      {/* ADDITIONAL DATA TYPES */}

                      <div className="mt-4 space-y-3">
                        <div>
                          <h4
                            className="
                              font-display
                              text-[11px]
                              sm:text-[15px]
                              font-semibold
                              text-[#24332F]
                            "
                          >
                            ✓ Contact Data
                          </h4>

                          <p
                            className="
                              mt-1
                              font-body
                              text-[10px]
                              sm:text-[13px]
                              leading-[1.55]
                              sm:leading-6
                              text-[#687773]
                            "
                          >
                            Includes email address, phone number,
                            address and other contact information
                            that you voluntarily provide.
                          </p>
                        </div>

                        <div>
                          <h4
                            className="
                              font-display
                              text-[11px]
                              sm:text-[15px]
                              font-semibold
                              text-[#24332F]
                            "
                          >
                            ✓ Technical Data
                          </h4>

                          <p
                            className="
                              mt-1
                              font-body
                              text-[10px]
                              sm:text-[13px]
                              leading-[1.55]
                              sm:leading-6
                              text-[#687773]
                            "
                          >
                            Information about the device, browser,
                            IP address and general interaction with
                            our website may be collected to improve
                            website performance and security.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* =================================================
                    IMPORTANT NOTICE
                ================================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.4,
                  }}
                  className="
                    mt-4
                    sm:mt-6
                    rounded-xl
                    sm:rounded-2xl
                    border
                    border-[#DDEBE6]
                    bg-white/70
                    p-3.5
                    sm:p-5
                  "
                >
                  <div className="flex items-start gap-3">
                    <FileText
                      size={18}
                      className="
                        mt-0.5
                        shrink-0
                        text-[#0F5C4D]
                      "
                    />

                    <div>
                      <h4
                        className="
                          font-display
                          text-[12px]
                          sm:text-[15px]
                          font-semibold
                          text-[#24332F]
                        "
                      >
                        Privacy Information
                      </h4>

                      <p
                        className="
                          mt-1
                          font-body
                          text-[9.5px]
                          sm:text-[12px]
                          leading-[1.5]
                          sm:leading-5
                          text-[#687773]
                        "
                      >
                        The information displayed above reflects
                        the privacy policy content currently
                        provided for this website. Additional
                        sections can be added here using the
                        company's approved privacy policy text.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* =================================================
                    BOTTOM NOTE
                ================================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.5,
                  }}
                  className="
                    mt-5
                    sm:mt-7
                    rounded-xl
                    sm:rounded-2xl
                    bg-[#0F5C4D]
                    p-3.5
                    sm:p-5
                    text-white
                  "
                >
                  <div
                    className="
                      flex
                      items-start
                      gap-2.5
                      sm:gap-3
                    "
                  >
                    <ShieldCheck
                      size={17}
                      className="
                        mt-0.5
                        shrink-0
                      "
                    />

                    <div className="min-w-0">
                      <h4
                        className="
                          font-display
                          text-[12px]
                          sm:text-[15px]
                          font-semibold
                        "
                      >
                        Your privacy matters to CodeThrive.
                      </h4>

                      <p
                        className="
                          mt-1
                          font-body
                          text-[9.5px]
                          sm:text-[12px]
                          leading-[1.5]
                          sm:leading-5
                          text-white/75
                        "
                      >
                        We are committed to protecting your
                        personal data and maintaining responsible
                        privacy practices.
                      </p>
                    </div>
                  </div>

                  <div
                    className="
                      mt-2.5
                      sm:mt-4
                      border-t
                      border-white/15
                      pt-2.5
                      sm:pt-3
                    "
                  >
                    <p
                      className="
                        font-body
                        text-[7.5px]
                        sm:text-[9px]
                        uppercase
                        tracking-[0.1em]
                        sm:tracking-[0.15em]
                        text-white/60
                      "
                    >
                      Last updated · September 2026
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}