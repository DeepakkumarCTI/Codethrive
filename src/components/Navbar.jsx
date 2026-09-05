import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import logo from "../assets/logo.png";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Work", to: "/work" },
  { label: "Services", to: "/services" },
  { label: "Process", to: "/process" },
  { label: "Awards", to: "/awards" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  /* =====================================================
     CLOSE MOBILE MENU
  ===================================================== */

  const closeMenu = () => {
    setMenuOpen(false);
  };

  /* =====================================================
     SCROLL TO HERO
  ===================================================== */

  const scrollToHero = () => {
    const hero = document.getElementById("hero");

    if (hero) {
      hero.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  /* =====================================================
     HOME / LOGO CLICK
  ===================================================== */

  const handleHomeClick = (e) => {
    e.preventDefault();
    closeMenu();

    if (pathname === "/") {
      scrollToHero();
    } else {
      navigate("/");
    }
  };

  /* =====================================================
     ROUTE CHANGE
     When coming from another page to Home,
     wait until Home is rendered and then scroll Hero.
  ===================================================== */

  useEffect(() => {
    if (pathname === "/") {
      const timer = setTimeout(() => {
        scrollToHero();
      }, 150);

      return () => clearTimeout(timer);
    }

    // Every other page starts from the top
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [pathname]);

  /* =====================================================
     MOBILE NON-HOME LINK
  ===================================================== */

  const handleMobileLinkClick = () => {
    closeMenu();

    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <motion.header
        initial={{
          y: -30,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          fixed
          top-0
          left-0
          right-0
          z-50

          // bg-[#F3F7F4]
          bg-emerald-100

          border-b
          border-[#24332F]/10

          shadow-[0px_15px_50px_rgba(15,92,77,0.08)]
        "
      >
        <div
          className="
            w-full
            flex
            items-center
            justify-between

            px-3
            sm:px-5
            md:px-7
            lg:px-8
            xl:px-10

            py-2.5
            sm:py-3
          "
        >

          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            to="/"
            onClick={handleHomeClick}
            className="
              group
              flex
              items-center
              gap-2.5
              sm:gap-3
              shrink-0
            "
          >
            <div
              className="
                relative

                w-10
                h-10

                sm:w-11
                sm:h-11

                flex
                items-center
                justify-center

                rounded-xl

                bg-white

                border
                border-[#0F5C4D]/15

                overflow-hidden

                transition-all
                duration-500

                group-hover:scale-105
                group-hover:border-[#0F5C4D]/40

                shadow-[0px_5px_20px_rgba(15,92,77,0.08)]
              "
            >
              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.12, 0.3, 0.12],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  w-7
                  h-7
                  rounded-full
                  bg-[#6FA99B]
                  blur-xl
                "
              />

              <img
                src={logo}
                alt="CodeThrive InfoTech"
                className="
                  relative
                  z-10

                  w-8
                  h-8

                  sm:w-9
                  sm:h-9

                  object-contain
                "
              />
            </div>

            <div className="flex flex-col">
              <span
                className="
                  font-display
                  font-black

                  text-[#24332F]

                  text-[16px]
                  sm:text-[18px]
                  lg:text-[19px]

                  tracking-[-0.8px]

                  leading-none

                  transition-colors
                  duration-300

                  group-hover:text-[#0F5C4D]
                "
              >
                CodeThrive InfoTech
              </span>

              <div
                className="
                  hidden
                  sm:flex

                  items-center
                  gap-1.5

                  mt-1.5
                "
              >
                <motion.span
                  animate={{
                    scale: [1, 1.35, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    w-1.5
                    h-1.5
                    rounded-full
                    bg-[#0F5C4D]
                  "
                />

                <span
                  className="
                    font-body
                    text-[8px]
                    lg:text-[9px]
                    tracking-[1.5px]
                    uppercase
                    text-[#687773]
                  "
                >
                  Software Company
                </span>
              </div>
            </div>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav
            className="
              hidden
              md:flex

              items-center

              gap-3
              lg:gap-4
              xl:gap-5

              ml-auto

              mr-4
              lg:mr-5
              xl:mr-6
            "
          >
            {LINKS.map((link, index) => {
              const isActive = pathname === link.to;

              return (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={
                    link.label === "Home"
                      ? handleHomeClick
                      : undefined
                  }
                  className="
                    group
                    relative
                    py-2
                    whitespace-nowrap
                  "
                >
                  <div
                    className={`
                      flex
                      items-center
                      gap-1

                      font-body

                      text-[14px]
                      lg:text-[15px]
                      xl:text-[15px]

                      font-semibold
                      tracking-[-0.1px]

                      transition-all
                      duration-300

                      ${
                        isActive
                          ? "text-[#0F5C4D]"
                          : "text-[#435650] hover:text-[#0F5C4D]"
                      }
                    `}
                  >
                    <span>{link.label}</span>

                    <span
                      className="
                        opacity-0
                        -translate-y-1

                        text-[8px]
                        text-[#0F5C4D]

                        transition-all
                        duration-300

                        group-hover:opacity-100
                        group-hover:translate-y-0
                      "
                    >
                      0{index + 1}
                    </span>
                  </div>

                  {/* ACTIVE UNDERLINE */}

                  <motion.span
                    initial={false}
                    animate={{
                      width: isActive ? "100%" : "0%",
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="
                      absolute
                      left-0
                      -bottom-0.5

                      h-[2px]

                      rounded-full

                      bg-[#0F5C4D]
                    "
                  />

                  {/* HOVER UNDERLINE */}

                  {!isActive && (
                    <span
                      className="
                        absolute
                        left-0
                        -bottom-0.5

                        h-[2px]
                        w-0

                        rounded-full

                        bg-[#0F5C4D]

                        transition-all
                        duration-300

                        group-hover:w-full
                      "
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div
            className="
              flex
              items-center
              gap-2
              sm:gap-3
              shrink-0
            "
          >

            {/* DESKTOP CTA */}

            <Link
              to="/contact"
              className="
                hidden
                md:flex

                group
                relative

                items-center
                justify-center

                gap-2

                overflow-hidden

                bg-[#0F5C4D]

                hover:bg-[#0B4A3E]

                text-white

                font-body
                font-semibold

                text-[11px]
                lg:text-[12px]
                xl:text-[13px]

                tracking-[0.4px]

                rounded-full

                px-4
                lg:px-5
                xl:px-6

                py-2.5

                transition-all
                duration-300

                hover:-translate-y-0.5

                shadow-[0px_8px_25px_rgba(15,92,77,0.20)]
              "
            >
              <motion.span
                animate={{
                  x: ["-120%", "120%"],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  inset-y-0
                  w-10
                  bg-white/20
                  skew-x-[-20deg]
                "
              />

              <span className="relative z-10">
                Let’s Work Together
              </span>

              <ArrowUpRight
                size={15}
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

            {/* MOBILE BUTTON */}

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={
                menuOpen ? "Close menu" : "Open menu"
              }
              aria-expanded={menuOpen}
              className="
                md:hidden

                relative

                flex
                items-center
                justify-center

                w-10
                h-10

                sm:w-11
                sm:h-11

                rounded-full

                bg-white

                border
                border-[#0F5C4D]/15

                shadow-sm

                transition-all
                duration-300

                hover:bg-[#E7F0ED]
                hover:border-[#0F5C4D]/30
                hover:shadow-md

                active:scale-90

                focus:outline-none
                focus:ring-2
                focus:ring-[#0F5C4D]/20
              "
            >
              <span
                className={`
                  absolute

                  w-5
                  sm:w-[22px]

                  h-[2px]

                  rounded-full

                  bg-[#24332F]

                  transition-all
                  duration-300

                  ${
                    menuOpen
                      ? "rotate-45"
                      : "-translate-y-[4px]"
                  }
                `}
              />

              <span
                className={`
                  absolute

                  w-5
                  sm:w-[22px]

                  h-[2px]

                  rounded-full

                  bg-[#24332F]

                  transition-all
                  duration-300

                  ${
                    menuOpen
                      ? "-rotate-45"
                      : "translate-y-[4px]"
                  }
                `}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -12,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -12,
              scale: 0.97,
            }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed

              top-[66px]
              sm:top-[72px]

              left-2.5
              right-2.5

              z-[60]

              md:hidden

              bg-white

              rounded-[20px]

              border
              border-[#24332F]/10

              shadow-[0px_18px_55px_rgba(15,92,77,0.18)]

              overflow-hidden
            "
          >
            <nav
              className="
                p-2.5
                sm:p-3
              "
            >

              {/* MENU HEADER */}

              <div
                className="
                  flex
                  items-center
                  justify-between

                  px-3

                  pt-1
                  pb-2.5
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >
                  <motion.span
                    animate={{
                      scale: [1, 1.4, 1],
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

                  <p
                    className="
                      font-body

                      text-[9px]

                      tracking-[2px]

                      uppercase

                      text-[#0F5C4D]
                    "
                  >
                    Navigation
                  </p>
                </div>

                <Sparkles
                  size={14}
                  className="text-[#0F5C4D]"
                />
              </div>

              {/* MOBILE LINKS */}

              <div
                className="
                  flex
                  flex-col
                  gap-1
                "
              >
                {LINKS.map((link, index) => {
                  const isActive =
                    pathname === link.to;

                  return (
                    <motion.div
                      key={link.label}
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.035,
                        duration: 0.25,
                      }}
                    >
                      <Link
                        to={link.to}
                        onClick={(e) => {
                          if (link.label === "Home") {
                            handleHomeClick(e);
                          } else {
                            handleMobileLinkClick();
                          }
                        }}
                        className={`
                          group

                          flex
                          items-center
                          justify-between

                          w-full

                          px-3.5
                          py-3

                          rounded-xl

                          font-display
                          font-semibold

                          text-[16px]

                          tracking-[-0.3px]

                          transition-all
                          duration-200

                          active:scale-[0.98]

                          ${
                            isActive
                              ? "bg-[#E7F0ED] text-[#0F5C4D]"
                              : "text-[#435650] hover:bg-[#F3F7F4] hover:text-[#0F5C4D]"
                          }
                        `}
                      >
                        <span>
                          {link.label}
                        </span>

                        <span
                          className={`
                            flex
                            items-center

                            gap-1.5

                            text-[10px]

                            transition-all
                            duration-300

                            ${
                              isActive
                                ? "text-[#0F5C4D]"
                                : "text-[#687773]/70 group-hover:text-[#0F5C4D]"
                            }
                          `}
                        >
                          0{index + 1}

                          <ArrowUpRight
                            size={14}
                            className="
                              transition-transform
                              duration-300

                              group-hover:translate-x-0.5
                              group-hover:-translate-y-0.5
                            "
                          />
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* DIVIDER */}

              <div
                className="
                  h-px
                  bg-[#24332F]/10
                  my-3
                "
              />

              {/* MOBILE CTA */}

              <Link
                to="/contact"
                onClick={closeMenu}
                className="
                  group

                  flex
                  items-center
                  justify-center

                  gap-2

                  w-full

                  bg-[#0F5C4D]

                  hover:bg-[#0B4A3E]

                  text-white

                  font-body
                  font-semibold

                  text-[11px]
                  sm:text-[12px]

                  tracking-[0.5px]

                  rounded-xl

                  py-3

                  transition-all
                  duration-300

                  shadow-[0px_8px_20px_rgba(15,92,77,0.18)]

                  active:scale-[0.98]
                "
              >
                <span>
                  Let’s Work Together
                </span>

                <ArrowUpRight
                  size={15}
                  className="
                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}