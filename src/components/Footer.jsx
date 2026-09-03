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
} from "lucide-react";

import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* =========================================================
   SOCIAL LINKS
   Replace # with your real links
========================================================= */

const SOCIAL = [
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    href: "https://wa.me/YOUR_NUMBER",
    primary: true,
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://instagram.com/YOUR_USERNAME",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://linkedin.com/company/YOUR_COMPANY",
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
    href: "mailto:contactus@codethrive.com",
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

            w-[180px]
            h-[180px]

            sm:w-[240px]
            sm:h-[240px]

            rounded-full

            bg-[#0F5C4D]/8

            blur-[70px]
            sm:blur-[80px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute

            -bottom-24
            -left-24

            w-[170px]
            h-[170px]

            sm:w-[220px]
            sm:h-[220px]

            rounded-full

            bg-[#0F5C4D]/8

            blur-[70px]
            sm:blur-[80px]
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

            pt-6
            sm:pt-6
            lg:pt-6

            pb-5
            sm:pb-5
            lg:pb-4
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

              gap-4
              sm:gap-5
              lg:gap-6

              pb-5
              sm:pb-6
              lg:pb-5

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

                  mb-1.5
                  sm:mb-2
                "
              >
                Have a project in mind?
              </p>

              <h2
                className="
                  font-display
                  font-bold

                  text-[#24332F]

                  text-[22px]
                  sm:text-[30px]
                  md:text-[34px]
                  lg:text-[38px]

                  leading-[1.08]

                  tracking-[-0.7px]
                  sm:tracking-[-1.3px]

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
              MAIN FOOTER
          ================================================= */}

          <div
            className="
              grid

              grid-cols-1

              sm:grid-cols-2

              lg:grid-cols-[1.55fr_0.8fr_0.8fr]

              gap-x-8
              sm:gap-x-10
              lg:gap-x-16

              gap-y-7
              sm:gap-y-8
              lg:gap-y-0

              py-6
              sm:py-7
              lg:py-6
            "
          >
            {/* =================================================
                BRAND / CONTACT / SOCIAL
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

                  text-[18px]
                  sm:text-xl

                  tracking-[-0.6px]
                  sm:tracking-[-0.8px]

                  mb-1
                "
              >
                CodeThrive InfoTech
              </h3>

              <h4
                className="
                  font-body

                  text-[#687773]

                  text-[11px]
                  sm:text-sm

                  leading-relaxed

                  max-w-[380px]
                "
              >
                {tagline ||
                  "Architecture for the digital age."}
              </h4>

              {/* =================================================
                  CONTACT DETAILS
              ================================================= */}

              <div
                className="
                  flex
                  flex-col

                  gap-2.5
                  sm:gap-3

                  mt-3
                  sm:mt-4
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
                    <Mail
                      size={12}
                      className="sm:hidden"
                    />

                    <Mail
                      size={13}
                      className="hidden sm:block"
                    />
                  </span>

                  <span
                    className="
                      font-body

                      text-[12px]
                      sm:text-[15px]

                      break-all
                    "
                  >
                    contactus@codethrive.com
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
                    <MapPin
                      size={12}
                      className="sm:hidden"
                    />

                    <MapPin
                      size={13}
                      className="hidden sm:block"
                    />
                  </span>

                  <span
                    className="
                      font-body

                      text-[11px]
                      sm:text-[15px]

                      leading-[1.45]
                      sm:leading-relaxed

                      max-w-[360px]
                    "
                  >
                    123, Demo Street, Peelamedu,
                    <br className="hidden sm:block" />
                    Coimbatore, Tamil Nadu – 641004,
                    <br className="hidden sm:block" />
                    India
                  </span>
                </div>
              </div>

              {/* =================================================
                  CONNECT WITH US
              ================================================= */}

              <div className="mt-5 sm:mt-6">
                <p
                  className="
                    mb-3

                    font-body
                    font-semibold

                    text-[#24332F]

                    text-[11px]
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

                    gap-2
                    sm:gap-2.5

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
                          y: -4,
                          scale: 1.06,
                        }}
                        whileTap={{
                          scale: 0.94,
                        }}
                        className={`
                          group
                          relative

                          flex
                          items-center
                          justify-center

                          w-8
                          h-8

                          sm:w-10
                          sm:h-10

                          shrink-0

                          rounded-full

                          border

                          bg-white/70

                          transition-all
                          duration-300

                          ${
                            item.primary
                              ? "border-[#0F5C4D]/30 text-[#0F5C4D] shadow-[0_4px_15px_rgba(15,92,77,0.10)]"
                              : "border-[#24332F]/10 text-[#687773]"
                          }

                          hover:bg-[#0F5C4D]
                          hover:text-white
                          hover:border-[#0F5C4D]

                          hover:shadow-[0_8px_25px_rgba(15,92,77,0.22)]
                        `}
                      >
                        {/* CONTINUOUS WHATSAPP GLOW */}

                        {item.primary && (
                          <motion.span
                            animate={{
                              scale: [1, 1.35, 1],
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
                NAVIGATION
            ================================================= */}

            <div
              className="
                min-w-0
              "
            >
              <h3
                className="
                  font-body

                  text-[#0F5C4D]

                  text-[11px]
                  sm:text-[15px]

                  tracking-[1.2px]
                  sm:tracking-[1.5px]

                  uppercase

                  mb-2.5
                  sm:mb-3
                "
              >
                Navigation
              </h3>

              <div
                className="
                  flex
                  flex-col

                  gap-1.5
                  sm:gap-2
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

                      text-[12px]
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
                LEGAL
            ================================================= */}

            <div
              className="
                min-w-0
              "
            >
              <p
                className="
                  font-body

                  text-[#0F5C4D]

                  text-[11px]
                  sm:text-[15px]

                  tracking-[1.2px]
                  sm:tracking-[1.5px]

                  uppercase

                  mb-2.5
                  sm:mb-3
                "
              >
                Legal
              </p>

              <div
                className="
                  flex
                  flex-col

                  gap-1.5
                  sm:gap-2
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

                      text-[12px]
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
                BACK TO TOP
            ================================================= */}

            <div
              className="
                sm:col-span-2
                lg:col-span-3

                flex

                justify-start
                sm:justify-end
                lg:justify-end

                mt-0
                sm:mt-1
                lg:mt-4
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
                  <ArrowUp
                    size={11}
                    className="
                      transition-transform
                      duration-300

                      group-hover:-translate-y-0.5
                    "
                  />
                </span>
              </button>
            </div>
          </div>

          {/* =================================================
              BOTTOM BAR
          ================================================= */}

          <div
            className="
              pt-3
              sm:pt-3

              border-t
              border-[#24332F]/10

              flex

              flex-col
              sm:flex-row

              items-center

              justify-between

              gap-2
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
              © 2024 CodeThrive InfoTech. All rights reserved.
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
                className="
                  transition-transform
                  duration-300

                  group-hover:rotate-12
                  group-hover:scale-110
                "
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
          PRIVACY MODAL
      ===================================================== */}

      <AnimatePresence>
        {privacyOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
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
            {/* MODAL */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 30,
              }}
              transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
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

                shadow-[0_30px_100px_rgba(15,92,77,0.25)]
              "
            >
              {/* MODAL GLOWS */}

              <motion.div
                animate={{
                  x: [0, 30, 0],
                  y: [0, -20, 0],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none
                  absolute

                  -right-20
                  -top-20

                  h-48
                  w-48

                  sm:h-56
                  sm:w-56

                  rounded-full

                  bg-[#6FA99B]/20

                  blur-3xl
                "
              />

              <motion.div
                animate={{
                  x: [0, -20, 0],
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none
                  absolute

                  -bottom-24
                  -left-20

                  h-44
                  w-44

                  sm:h-52
                  sm:w-52

                  rounded-full

                  bg-[#0F5C4D]/10

                  blur-3xl
                "
              />

              {/* =================================================
                  MODAL HEADER
              ================================================= */}

              <div
                className="
                  relative

                  flex
                  items-center
                  justify-between

                  gap-2

                  border-b
                  border-[#DDEBE6]

                  px-3
                  py-3

                  sm:px-8
                  sm:py-6
                "
              >
                <div
                  className="
                    flex
                    items-center

                    gap-2.5
                    sm:gap-4

                    min-w-0
                  "
                >
                  {/* SHIELD */}

                  <motion.div
                    initial={{
                      rotate: -20,
                      scale: 0,
                    }}
                    animate={{
                      rotate: 0,
                      scale: 1,
                    }}
                    transition={{
                      delay: 0.15,
                      duration: 0.5,
                      type: "spring",
                    }}
                    className="
                      flex

                      h-9
                      w-9

                      sm:h-12
                      sm:w-12

                      shrink-0

                      items-center
                      justify-center

                      rounded-lg
                      sm:rounded-2xl

                      bg-[#0F5C4D]

                      text-white

                      shadow-lg
                    "
                  >
                    <ShieldCheck
                      size={18}
                      className="sm:hidden"
                      strokeWidth={1.8}
                    />

                    <ShieldCheck
                      size={24}
                      className="hidden sm:block"
                      strokeWidth={1.8}
                    />
                  </motion.div>

                  <div className="min-w-0">
                    <motion.p
                      initial={{
                        opacity: 0,
                        x: -15,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: 0.2,
                      }}
                      className="
                        font-body

                        text-[7px]
                        sm:text-[10px]

                        font-semibold

                        uppercase

                        tracking-[0.12em]
                        sm:tracking-[0.2em]

                        text-[#6FA99B]
                      "
                    >
                      Your Privacy Matters
                    </motion.p>

                    <motion.h2
                      initial={{
                        opacity: 0,
                        x: -15,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: 0.25,
                      }}
                      className="
                        mt-0.5

                        font-display

                        text-[18px]
                        sm:text-[32px]

                        font-bold

                        tracking-tight

                        text-[#24332F]
                      "
                    >
                      Privacy Policy
                    </motion.h2>
                  </div>
                </div>

                {/* CLOSE */}

                <motion.button
                  type="button"
                  onClick={() => setPrivacyOpen(false)}
                  whileHover={{
                    rotate: 90,
                    scale: 1.1,
                  }}
                  whileTap={{
                    scale: 0.9,
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

                    rounded-full

                    border
                    border-[#DDEBE6]

                    bg-white

                    text-[#24332F]

                    transition-all
                    duration-300

                    hover:bg-[#0F5C4D]
                    hover:text-white
                  "
                >
                  <X size={16} className="sm:hidden" />
                  <X size={18} className="hidden sm:block" />
                </motion.button>
              </div>

              {/* =================================================
                  MODAL CONTENT
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
                {/* INTRO */}

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
                    delay: 0.25,
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
                  <div
                    className="
                      flex
                      gap-2.5
                      sm:gap-4
                    "
                  >
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
                        delay: 0.3,
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
                        We respect your privacy
                      </h3>

                      <p
                        className="
                          mt-1.5
                          sm:mt-2

                          font-body

                          text-[10.5px]
                          sm:text-[14px]

                          leading-[1.45]
                          sm:leading-6

                          text-[#687773]
                        "
                      >
                        Your privacy is important to us. This Privacy Policy
                        explains how we collect, use, protect and manage your
                        information when you use our website and services.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* =================================================
                    POLICY ITEMS
                ================================================= */}

                <div
                  className="
                    space-y-2
                    sm:space-y-5
                  "
                >
                  {/* 01 */}

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
                      delay: 0.35,
                      duration: 0.45,
                    }}
                    whileHover={{ x: 4 }}
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
                    <div
                      className="
                        flex

                        gap-2.5
                        sm:gap-4
                      "
                    >
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
                        <Database
                          size={15}
                          className="sm:hidden"
                        />

                        <Database
                          size={17}
                          className="hidden sm:block"
                        />
                      </motion.div>

                      <div className="min-w-0">
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
                          Information We Collect

                          <ChevronRight
                            size={12}
                            className="
                              shrink-0

                              transition-transform
                              duration-300

                              group-hover:translate-x-1
                            "
                          />
                        </h3>

                        <p
                          className="
                            mt-1
                            sm:mt-2

                            font-body

                            text-[10px]
                            sm:text-[14px]

                            leading-[1.45]
                            sm:leading-6

                            text-[#687773]
                          "
                        >
                          We may collect information such as your name,
                          email address, phone number and other information
                          that you voluntarily provide when contacting us
                          or using our services.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* 02 */}

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
                      delay: 0.4,
                      duration: 0.45,
                    }}
                    whileHover={{ x: 4 }}
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
                    <div
                      className="
                        flex

                        gap-2.5
                        sm:gap-4
                      "
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.08,
                          rotate: -5,
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
                        <UserCheck
                          size={15}
                          className="sm:hidden"
                        />

                        <UserCheck
                          size={17}
                          className="hidden sm:block"
                        />
                      </motion.div>

                      <div className="min-w-0">
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
                          How We Use Your Information

                          <ChevronRight
                            size={12}
                            className="
                              shrink-0

                              transition-transform
                              duration-300

                              group-hover:translate-x-1
                            "
                          />
                        </h3>

                        <p
                          className="
                            mt-1
                            sm:mt-2

                            font-body

                            text-[10px]
                            sm:text-[14px]

                            leading-[1.45]
                            sm:leading-6

                            text-[#687773]
                          "
                        >
                          We use the information we collect to respond to
                          enquiries, provide our services, improve our
                          website, communicate with you and maintain the
                          security of our services.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* 03 */}

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
                      delay: 0.45,
                      duration: 0.45,
                    }}
                    whileHover={{ x: 4 }}
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
                    <div
                      className="
                        flex

                        gap-2.5
                        sm:gap-4
                      "
                    >
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
                        <ShieldCheck
                          size={15}
                          className="sm:hidden"
                        />

                        <ShieldCheck
                          size={17}
                          className="hidden sm:block"
                        />
                      </motion.div>

                      <div className="min-w-0">
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
                          Data Protection

                          <ChevronRight
                            size={12}
                            className="
                              shrink-0

                              transition-transform
                              duration-300

                              group-hover:translate-x-1
                            "
                          />
                        </h3>

                        <p
                          className="
                            mt-1
                            sm:mt-2

                            font-body

                            text-[10px]
                            sm:text-[14px]

                            leading-[1.45]
                            sm:leading-6

                            text-[#687773]
                          "
                        >
                          We take reasonable steps to protect your personal
                          information from unauthorized access, alteration,
                          disclosure or destruction.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* 04 */}

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
                      delay: 0.5,
                      duration: 0.45,
                    }}
                    whileHover={{ x: 4 }}
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
                    <div
                      className="
                        flex

                        gap-2.5
                        sm:gap-4
                      "
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.08,
                          rotate: -5,
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
                        <FileText
                          size={15}
                          className="sm:hidden"
                        />

                        <FileText
                          size={17}
                          className="hidden sm:block"
                        />
                      </motion.div>

                      <div className="min-w-0">
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
                          Cookies & Website Usage

                          <ChevronRight
                            size={12}
                            className="
                              shrink-0

                              transition-transform
                              duration-300

                              group-hover:translate-x-1
                            "
                          />
                        </h3>

                        <p
                          className="
                            mt-1
                            sm:mt-2

                            font-body

                            text-[10px]
                            sm:text-[14px]

                            leading-[1.45]
                            sm:leading-6

                            text-[#687773]
                          "
                        >
                          Our website may use cookies or similar technologies
                          to improve functionality, understand website usage
                          and provide a better browsing experience.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* 05 */}

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
                      delay: 0.55,
                      duration: 0.45,
                    }}
                    whileHover={{ x: 4 }}
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
                    <div
                      className="
                        flex

                        gap-2.5
                        sm:gap-4
                      "
                    >
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
                        <UserCheck
                          size={15}
                          className="sm:hidden"
                        />

                        <UserCheck
                          size={17}
                          className="hidden sm:block"
                        />
                      </motion.div>

                      <div className="min-w-0">
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
                          Your Privacy Rights

                          <ChevronRight
                            size={12}
                            className="
                              shrink-0

                              transition-transform
                              duration-300

                              group-hover:translate-x-1
                            "
                          />
                        </h3>

                        <p
                          className="
                            mt-1
                            sm:mt-2

                            font-body

                            text-[10px]
                            sm:text-[14px]

                            leading-[1.45]
                            sm:leading-6

                            text-[#687773]
                          "
                        >
                          Depending on applicable laws, you may have the
                          right to access, update, correct or request deletion
                          of your personal information.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

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
                    delay: 0.6,
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

                        sm:w-[19px]
                        sm:h-[19px]
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
                        Your information is important to us.
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
                        We continuously work to keep your information
                        secure and maintain responsible privacy practices.
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