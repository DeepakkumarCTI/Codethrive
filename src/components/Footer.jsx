import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

import {
  ArrowUpRight,
  ArrowUp,
  Mail,
  MapPin,
  ShieldCheck,
  X,
  Lock,
  Database,
  FileText,
  ChevronRight,
} from "lucide-react";

import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaMobileAlt,
  FaSms,
  FaYoutube,
  FaGlobe,
} from "react-icons/fa";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* =========================================================
   SOCIAL LINKS
========================================================= */

const SOCIAL = [
  {
    name: "SMS",
    icon: FaSms,
    href: "sms:+919051781685",
    color: "#60A5FA",
    bg: "#DBEAFE",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    href: "https://wa.me/919051781685",
    color: "#16A34A",
    bg: "#DCFCE7",
    primary: true,
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/codethrive-infotech-5b6361402",
    color: "#0A66C2",
    bg: "#DBEAFE",
  },
  {
    name: "Website",
    icon: FaGlobe,
    href: "https://codethriveinfotech.in",
    color: "#7C3AED",
    bg: "#EDE9FE",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    href: "https://www.youtube.com/@CodeThriveInfotech",
    color: "#DC2626",
    bg: "#FEE2E2",
  },
  {
    name: "Facebook",
    icon: FaFacebookF,
    href: "https://www.facebook.com/share/18pBfimAcw/",
    color: "#1877F2",
    bg: "#DBEAFE",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/codethriveinfotech_official?igsh=MTIzZXA5MXF5dXRlaQ==",
    color: "#DB2777",
    bg: "#FCE7F3",
  },
  {
    name: "Mobile",
    icon: FaMobileAlt,
    href: "tel:+919051781685",
    color: "#EA580C",
    bg: "#FFEDD5",
  },
];

/* =========================================================
   NAVIGATION
========================================================= */

const NAVIGATION = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Work", to: "/work" },
  { label: "Services", to: "/services" },
  { label: "Process", to: "/process" },
  { label: "Gallery", to: "/awards" },
  { label: "Contact", to: "/contact" },
];

/* =========================================================
   LEGAL
========================================================= */

const LEGAL = [
  "Privacy Policy",
  // "Terms of Service",
  // "Cookie Policy",
];

export default function Footer({ tagline }) {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  /* =========================================================
     BACK TO TOP
  ========================================================= */

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =========================================================
     ESCAPE KEY + BODY SCROLL LOCK
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
          border-t
          border-white/20
          bg-gradient-to-br
          from-[#00002F]
          via-[#000080]
          to-[#1D4ED8]
        "
      >
        {/* Decorative Blue Glows */}

        <div
          className="
            pointer-events-none
            absolute
            -right-16
            -top-16
            h-[180px]
            w-[180px]
            rounded-full
            bg-[#93C5FD]/25
            blur-[65px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-20
            -left-16
            h-[170px]
            w-[170px]
            rounded-full
            bg-[#60A5FA]/20
            blur-[65px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            right-[25%]
            h-[150px]
            w-[150px]
            rounded-full
            bg-[#BFDBFE]/15
            blur-[60px]
          "
        />

        {/* Main Container */}

        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-[1440px]
            px-4
            py-2
            sm:px-8
            sm:py-3
            md:px-12
            lg:px-16
            xl:px-20
          "
        >
          {/* CTA Section */}

          <div
            className="
              flex
              flex-col
              gap-2
              border-b
              border-white/20
              pb-3
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div className="min-w-0">
              <p
                className="
                  mb-1
                  font-body
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[1.6px]
                  text-[#BFDBFE]
                  sm:text-[9px]
                "
              >
                Have a project in mind?
              </p>

              <h2
                className="
                  max-w-[650px]
                  font-display
                  text-[22px]
                  font-bold
                  leading-tight
                  tracking-[-0.8px]
                  text-white
                  sm:text-[27px]
                  md:text-[31px]
                "
              >
                Let's build{" "}
                <span className="text-[#BFDBFE]">
                  something great.
                </span>
              </h2>

              <p
                className="
                  mt-1
                  max-w-[600px]
                  font-body
                  text-[10px]
                  leading-4
                  text-[#DBEAFE]
                  sm:text-[12px]
                  sm:leading-5
                "
              >
                Transforming ideas into meaningful digital experiences
                with creativity, technology, and purpose.
              </p>
            </div>

            <Link
              to="/contact#contact-form"
              className="
                group
                inline-flex
                w-fit
                shrink-0
                items-center
                justify-center
                gap-1.5
                rounded-full
                bg-white
                px-4
                py-2.5
                font-body
                text-[10px]
                font-bold
                text-[#000080]
                shadow-[0_6px_16px_rgba(0,0,40,0.30)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#DBEAFE]
                sm:px-5
                sm:py-3
                sm:text-[11px]
              "
            >
              <span>Start a Conversation</span>

              <ArrowUpRight
                size={13}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>

          {/* Main Footer Content */}

          <div
            className="
              grid
              grid-cols-1
              gap-x-7
              gap-y-4
              py-3
              sm:grid-cols-2
              lg:grid-cols-[1.5fr_0.8fr_0.8fr_1.15fr]
              lg:gap-y-0
            "
          >
            {/* Company Column */}

            <div
              className="
                min-w-0
                sm:col-span-2
                lg:col-span-1
              "
            >
              <div className="mb-2 flex items-center gap-2">
                {/* Updated Logo Image */}

                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-lg
                    border
                    border-[#60A5FA]/30
                    bg-[#000080]
                    p-1
                    shadow-sm
                  "
                >
                  <img
                    src={logo}
                    alt="CodeThrive InfoTech logo"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div>
                  <h3
                    className="
                      font-display
                      text-[16px]
                      font-bold
                      tracking-[-0.5px]
                      text-white
                      sm:text-[18px]
                    "
                  >
                    CodeThrive InfoTech
                  </h3>

                  <p
                    className="
                      font-body
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[1.1px]
                      text-[#BFDBFE]
                    "
                  >
                    Digital Innovation Studio
                  </p>
                </div>
              </div>

              <p
                className="
                  max-w-[390px]
                  font-body
                  text-[11px]
                  leading-4
                  text-[#DBEAFE]
                  sm:text-[12px]
                  sm:leading-5
                "
              >
                {tagline ||
                  "Architecture for the digital age. We create powerful digital solutions that help brands grow and thrive."}
              </p>

              {/* Contact Details */}

              <div className="mt-3 flex flex-col gap-2">
                <a
                  href="mailto:codethriveinfotech@gmail.com"
                  className="
                    group
                    flex
                    min-w-0
                    items-center
                    gap-2
                    text-[#DBEAFE]
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  <span
                    className="
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#DBEAFE]
                      text-[#1D4ED8]
                      transition-all
                      duration-300
                      group-hover:bg-[#60A5FA]
                      group-hover:text-white
                    "
                  >
                    <Mail size={12} />
                  </span>

                  <span
                    className="
                      break-all
                      font-body
                      text-[11px]
                      sm:text-[12px]
                    "
                  >
                    codethriveinfotech@gmail.com
                  </span>
                </a>

                <div
                  className="
                    flex
                    items-start
                    gap-2
                    text-[#DBEAFE]
                  "
                >
                  <span
                    className="
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#DBEAFE]
                      text-[#2563EB]
                    "
                  >
                    <MapPin size={12} />
                  </span>

                  <span
                    className="
                      font-body
                      text-[11px]
                      leading-4
                      sm:text-[12px]
                      sm:leading-5
                    "
                  >
                    No 1, Srihari Nivas, Sungam, Indira Nagar,
                    <br />
                    Coimbatore, Tamil Nadu – 641045,
                    <br />
                    India
                  </span>
                </div>
              </div>

              {/* Social Links */}

              <div className="mt-3">
                <p
                  className="
                    mb-1.5
                    font-body
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[1.4px]
                    text-white
                  "
                >
                  Connect With Us
                </p>

                <div className="flex flex-wrap items-center gap-1.5">
                  {SOCIAL.map((item) => {
                    const Icon = item.icon;

                    return (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        target={
                          item.name === "SMS" ||
                          item.name === "Mobile"
                            ? undefined
                            : "_blank"
                        }
                        rel={
                          item.name === "SMS" ||
                          item.name === "Mobile"
                            ? undefined
                            : "noopener noreferrer"
                        }
                        aria-label={item.name}
                        title={item.name}
                        whileHover={{
                          y: -3,
                          scale: 1.08,
                        }}
                        whileTap={{
                          scale: 0.92,
                        }}
                        style={{
                          color: item.color,
                          backgroundColor: item.bg,
                          borderColor: `${item.color}55`,
                        }}
                        className="
                          group
                          relative
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          shadow-sm
                          transition-all
                          duration-300
                          hover:text-white
                        "
                        onMouseEnter={(event) => {
                          event.currentTarget.style.backgroundColor =
                            item.color;
                        }}
                        onMouseLeave={(event) => {
                          event.currentTarget.style.backgroundColor =
                            item.bg;
                        }}
                      >
                        {item.primary && (
                          <motion.span
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.3, 0, 0.3],
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
                              border-2
                              border-[#16A34A]/50
                            "
                          />
                        )}

                        <Icon
                          className="
                            relative
                            z-10
                            text-[13px]
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

            {/* Navigation Column */}

            <div className="min-w-0">
              <h3
                className="
                  mb-2
                  font-body
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[1.5px]
                  text-[#BFDBFE]
                  sm:text-[10px]
                "
              >
                Navigation
              </h3>

              <div className="flex flex-col gap-1">
                {NAVIGATION.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="
                      group
                      flex
                      w-fit
                      items-center
                      gap-1
                      font-body
                      text-[12px]
                      text-[#DBEAFE]
                      transition-all
                      duration-300
                      hover:translate-x-1
                      hover:text-white
                      sm:text-[13px]
                    "
                  >
                    <span>{item.label}</span>

                    <ArrowUpRight
                      size={10}
                      className="
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:translate-x-0.5
                        group-hover:opacity-100
                      "
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Legal Column */}

            <div className="min-w-0">
              <h3
                className="
                  mb-2
                  font-body
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[1.5px]
                  text-[#BFDBFE]
                  sm:text-[10px]
                "
              >
                Legal
              </h3>

              <div className="flex flex-col gap-1">
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
                      text-[#DBEAFE]
                      transition-all
                      duration-300
                      hover:translate-x-1
                      hover:text-white
                      sm:text-[13px]
                    "
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div
                className="
                  mt-3
                  flex
                  items-center
                  gap-1.5
                  rounded-lg
                  border
                  border-[#60A5FA]/30
                  bg-[#DBEAFE]/15
                  px-2.5
                  py-1.5
                "
              >
                <ShieldCheck
                  size={14}
                  className="shrink-0 text-[#BFDBFE]"
                />

                <span
                  className="
                    font-body
                    text-[9px]
                    font-semibold
                    text-[#DBEAFE]
                  "
                >
                  Secure and trusted
                </span>
              </div>
            </div>

            {/* Image Column */}

            <motion.div
              initial={{
                opacity: 0,
                y: 12,
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
                duration: 0.5,
                ease: "easeOut",
              }}
              className="
                group
                relative
                h-[125px]
                w-full
                min-w-0
                overflow-hidden
                rounded-[17px]
                border
                border-[#60A5FA]/30
                bg-[#00005C]
                shadow-[0_10px_24px_rgba(0,0,80,0.35)]
                sm:h-[140px]
                lg:h-[125px]
              "
            >
              <img
                src="/images/footer-technology.jpg"
                alt="Digital technology and software development"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  object-center
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-[#00002F]/95
                  via-[#000080]/65
                  to-[#1D4ED8]/85
                "
              />

              <motion.div
                animate={{
                  opacity: [0.15, 0.35, 0.15],
                  scale: [1, 1.12, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none
                  absolute
                  -right-8
                  -top-8
                  h-24
                  w-24
                  rounded-full
                  bg-[#60A5FA]
                  blur-3xl
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-1.5
                  rounded-[14px]
                  border
                  border-white/25
                "
              />

              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  z-10
                  p-3
                "
              >
                <div className="mb-1 flex items-center gap-1.5">
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#BFDBFE]
                      shadow-[0_0_10px_rgba(191,219,254,0.9)]
                    "
                  />

                  <span
                    className="
                      font-body
                      text-[7px]
                      font-bold
                      uppercase
                      tracking-[1.5px]
                      text-[#DBEAFE]
                    "
                  >
                    Digital Innovation
                  </span>
                </div>

                <h3
                  className="
                    font-display
                    text-[16px]
                    font-bold
                    leading-tight
                    text-white
                    sm:text-[19px]
                  "
                >
                  Think. Create. Thrive.
                </h3>

                <p
                  className="
                    mt-0.5
                    font-body
                    text-[7px]
                    uppercase
                    tracking-[1px]
                    text-white/75
                    sm:text-[8px]
                  "
                >
                  Ideas into digital experiences
                </p>
              </div>
            </motion.div>

            {/* Back To Top */}

            <div
              className="
                flex
                justify-start
                sm:col-span-2
                sm:justify-end
                lg:col-span-4
              "
            >
              <button
                type="button"
                onClick={scrollToTop}
                className="
                  group
                  flex
                  items-center
                  gap-1.5
                  font-body
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[1.3px]
                  text-[#DBEAFE]
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                <span>Back to top</span>

                <span
                  className="
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#60A5FA]/40
                    bg-[#DBEAFE]
                    text-[#1D4ED8]
                    transition-all
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:bg-[#60A5FA]
                    group-hover:text-white
                  "
                >
                  <ArrowUp size={10} />
                </span>
              </button>
            </div>
          </div>

          {/* Bottom Bar */}

          <div
            className="
              flex
              flex-col
              items-center
              justify-between
              gap-1
              border-t
              border-white/20
              pt-2
              text-center
              sm:flex-row
              sm:text-left
            "
          >
            <p
              className="
                font-body
                text-[8px]
                text-[#BFDBFE]
                sm:text-[9px]
              "
            >
              © 2026 CodeThrive InfoTech. All rights reserved.
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
                gap-1
                font-body
                text-[8px]
                font-semibold
                text-[#DBEAFE]
                transition-colors
                duration-300
                hover:text-white
                sm:text-[9px]
              "
            >
              <ShieldCheck size={11} />

              <span>Privacy Policy</span>

              <span
                className="
                  absolute
                  -bottom-0.5
                  left-0
                  h-[1px]
                  w-0
                  bg-[#60A5FA]
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
                text-[#BFDBFE]
                sm:text-[9px]
              "
            >
              Designed & built with intention.
            </p>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}

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
              bg-[#00002F]/75
              p-2
              backdrop-blur-md
              sm:p-4
            "
          >
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
              onClick={(event) => event.stopPropagation()}
              className="
                relative
                max-h-[94vh]
                w-full
                max-w-[850px]
                overflow-hidden
                rounded-[20px]
                border
                border-[#60A5FA]/30
                bg-[#F8FAFC]
                shadow-[0_30px_100px_rgba(0,0,80,0.35)]
                sm:rounded-[28px]
              "
            >
              {/* Modal Header */}

              <div
                className="
                  relative
                  flex
                  items-center
                  justify-between
                  gap-3
                  border-b
                  border-[#60A5FA]/25
                  bg-gradient-to-r
                  from-[#DBEAFE]
                  to-[#BFDBFE]
                  px-3
                  py-3
                  sm:px-7
                  sm:py-5
                "
              >
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#2563EB]
                      text-white
                      shadow-md
                      sm:h-12
                      sm:w-12
                    "
                  >
                    <ShieldCheck size={20} />
                  </div>

                  <div>
                    <p
                      className="
                        font-body
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[1.5px]
                        text-[#1D4ED8]
                        sm:text-[10px]
                      "
                    >
                      Your Privacy Matters
                    </p>

                    <h2
                      className="
                        mt-0.5
                        font-display
                        text-[18px]
                        font-bold
                        leading-tight
                        text-[#00005C]
                        sm:text-[25px]
                      "
                    >
                      Privacy Policy
                    </h2>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setPrivacyOpen(false)}
                  aria-label="Close Privacy Policy"
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#000080]/20
                    bg-white
                    text-[#000080]
                    transition-all
                    duration-300
                    hover:rotate-90
                    hover:border-[#2563EB]
                    hover:bg-[#2563EB]
                    hover:text-white
                    sm:h-9
                    sm:w-9
                  "
                >
                  <X size={16} />
                </button>
              </div>

              {/* Modal Content */}

              <div
                className="
                  max-h-[calc(94vh-70px)]
                  overflow-y-auto
                  px-3
                  py-4
                  sm:max-h-[calc(85vh-105px)]
                  sm:px-8
                  sm:py-8
                "
              >
                {/* Introduction */}

                <div
                  className="
                    mb-5
                    rounded-2xl
                    border
                    border-[#60A5FA]/25
                    bg-[#DBEAFE]/60
                    p-3
                    sm:mb-6
                    sm:p-6
                  "
                >
                  <div className="flex gap-3 sm:gap-4">
                    <div
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-[#2563EB]
                        text-white
                        sm:h-11
                        sm:w-11
                      "
                    >
                      <Lock size={16} />
                    </div>

                    <div>
                      <h3
                        className="
                          font-display
                          text-[15px]
                          font-semibold
                          text-[#00005C]
                          sm:text-[19px]
                        "
                      >
                        Introduction
                      </h3>

                      <p
                        className="
                          mt-1.5
                          font-body
                          text-[11px]
                          leading-5
                          text-[#475569]
                          sm:mt-2
                          sm:text-[14px]
                          sm:leading-6
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
                </div>

                {/* Data We Collect */}

                <div
                  className="
                    rounded-2xl
                    border
                    border-transparent
                    p-1
                    transition-all
                    duration-300
                    hover:border-[#60A5FA]/25
                    hover:bg-[#DBEAFE]/30
                    sm:p-3
                  "
                >
                  <div className="flex gap-3 sm:gap-4">
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-[#DBEAFE]
                        text-[#2563EB]
                        sm:h-10
                        sm:w-10
                      "
                    >
                      <Database size={17} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3
                        className="
                          flex
                          items-center
                          gap-1.5
                          font-display
                          text-[15px]
                          font-semibold
                          text-[#00005C]
                          sm:gap-2
                          sm:text-[18px]
                        "
                      >
                        1. Data We Collect
                        <ChevronRight size={13} />
                      </h3>

                      <p
                        className="
                          mt-1.5
                          font-body
                          text-[11px]
                          leading-5
                          text-[#475569]
                          sm:mt-2
                          sm:text-[14px]
                          sm:leading-6
                        "
                      >
                        We may collect, use, store and transfer
                        different kinds of personal data about you
                        which we have grouped together as follows:
                      </p>

                      <div className="mt-3 space-y-3 sm:mt-4 sm:space-y-4">
                        <div>
                          <h4
                            className="
                              font-display
                              text-[13px]
                              font-semibold
                              text-[#00005C]
                              sm:text-[16px]
                            "
                          >
                            ✓ Identity Data
                          </h4>

                          <p
                            className="
                              mt-1
                              font-body
                              text-[11px]
                              leading-5
                              text-[#475569]
                              sm:text-[13px]
                              sm:leading-6
                            "
                          >
                            Includes first name and last name.
                          </p>
                        </div>

                        <div>
                          <h4
                            className="
                              font-display
                              text-[13px]
                              font-semibold
                              text-[#00005C]
                              sm:text-[16px]
                            "
                          >
                            ✓ Contact Data
                          </h4>

                          <p
                            className="
                              mt-1
                              font-body
                              text-[11px]
                              leading-5
                              text-[#475569]
                              sm:text-[13px]
                              sm:leading-6
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
                              text-[13px]
                              font-semibold
                              text-[#00005C]
                              sm:text-[16px]
                            "
                          >
                            ✓ Technical Data
                          </h4>

                          <p
                            className="
                              mt-1
                              font-body
                              text-[11px]
                              leading-5
                              text-[#475569]
                              sm:text-[13px]
                              sm:leading-6
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
                </div>

                {/* Important Notice */}

                <div
                  className="
                    mt-5
                    rounded-2xl
                    border
                    border-[#60A5FA]/25
                    bg-[#DBEAFE]/60
                    p-3
                    sm:mt-6
                    sm:p-5
                  "
                >
                  <div className="flex items-start gap-3">
                    <FileText
                      size={18}
                      className="mt-0.5 shrink-0 text-[#2563EB]"
                    />

                    <div>
                      <h4
                        className="
                          font-display
                          text-[14px]
                          font-semibold
                          text-[#00005C]
                          sm:text-[17px]
                        "
                      >
                        Privacy Information
                      </h4>

                      <p
                        className="
                          mt-1
                          font-body
                          text-[10px]
                          leading-5
                          text-[#475569]
                          sm:text-[13px]
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
                </div>

                {/* Bottom Note */}

                <div
                  className="
                    mt-5
                    rounded-2xl
                    bg-gradient-to-br
                    from-[#00002F]
                    via-[#000080]
                    to-[#1D4ED8]
                    p-3
                    text-white
                    sm:mt-6
                    sm:p-5
                  "
                >
                  <div className="flex items-start gap-3">
                    <ShieldCheck
                      size={18}
                      className="mt-0.5 shrink-0"
                    />

                    <div>
                      <h4
                        className="
                          font-display
                          text-[14px]
                          font-semibold
                          sm:text-[17px]
                        "
                      >
                        Your privacy matters to CodeThrive.
                      </h4>

                      <p
                        className="
                          mt-1
                          font-body
                          text-[10px]
                          leading-5
                          text-white/75
                          sm:text-[13px]
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
                      mt-3
                      border-t
                      border-white/20
                      pt-2.5
                      sm:mt-4
                      sm:pt-3
                    "
                  >
                    <p
                      className="
                        font-body
                        text-[7px]
                        uppercase
                        tracking-[1.2px]
                        text-white/60
                        sm:text-[9px]
                        sm:tracking-[1.5px]
                      "
                    >
                      Last updated · September 2026
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}