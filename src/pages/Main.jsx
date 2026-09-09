import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import projectImage1 from "../assets/restaurent.jpg";
import projectImage2 from "../assets/gym.jpg";
import projectImage3 from "../assets/cake.jpg";

import arun from "../assets/arun.jpg";
import priya from "../assets/priya.jpg";
import rahul from "../assets/rahul.jpg";

import serviceImage from "../assets/services/service.jpg";
import webImage from "../assets/services/web.jpg";
import mobileImage from "../assets/services/mobile.jpg";
import softwareImage from "../assets/services/software.jpg";

import welcomeImage from "../assets/welcome.jpg";

import thulirHealthcareLogo from "../assets/images/thulir_healthcare_logo.jpg";
import fleetManagementLogo from "../assets/images/fleet_management_logo.jpg";
import testguardLogo from "../assets/images/testguard_logo.jpg";
import varaVastraLogo from "../assets/images/vara_vastra_logo.jpg";
import amfStudioLogo from "../assets/images/amf_studio_logo.jpg";
import maduraiTourTaxiLogo from "../assets/images/madurai_tour_taxi_logo.png";
import maduraiBestToursLogo from "../assets/images/madurai_best_tours_logo.jpg";
import samyukthaLogo from "../assets/images/samyuktha_logo.jpg";
import therapyUniverseLogo from "../assets/images/therapy_universe_logo.jpg";






const clients = [
  {
    id: 1,
    name: "Samyuktha Tours & Travels",
    category: "Travel & Tourism",
    logo: samyukthaLogo,
    description:
      "Digital travel reservations and custom itinerary booking management.",
  },
  {
    id: 2,
    name: "Madurai Tour Taxi",
    category: "Fleet ERP",
    logo: maduraiTourTaxiLogo,
    description:
      "Real-time fleet management and automated taxi reservation system.",
  },
  {
    id: 3,
    name: "Madurai Best Tours & Travels",
    category: "Tourism Platform",
    logo: maduraiBestToursLogo,
    description:
      "Regional tourism booking engine with multi-payment gateway.",
  },
  {
    id: 4,
    name: "The Therapy Universe",
    category: "Healthcare ERP",
    logo: therapyUniverseLogo,
    description:
      "Clinical management portal and patient appointment scheduling.",
  },
  {
    id: 5,
    name: "AMF Studio",
    category: "Media & Enterprise",
    logo: amfStudioLogo,
    description:
      "Enterprise video production and digital media workflow platform.",
  },
  {
    id: 6,
    name: "Thulir Healthcare",
    category: "Healthcare & Medical",
    logo: thulirHealthcareLogo,
    description:
      "Integrated healthcare and medical diagnostic management system.",
  },
  {
    id: 7,
    name: "Fleet Management",
    category: "Smart Fleet & Logistics",
    logo: fleetManagementLogo,
    description:
      "Smart fleet management platform for heavy machinery and operations.",
  },
  {
    id: 8,
    name: "TestGuard",
    category: "AI Software Testing",
    logo: testguardLogo,
    description:
      "AI-powered automated software testing and QA inspection suite.",
  },
  {
    id: 9,
    name: "Vara Vastra Boutique",
    category: "Boutique & Fashion",
    logo: varaVastraLogo,
    description:
      "Omnichannel luxury boutique storefront and custom apparel catalog.",
  },
];

const PROJECTS = [
  {
    number: "01",
    title: "Restaurant Website",
    category: "Web Application",
    description:
      "A premium, highly interactive dining website template designed for modern fine dining and restaurant venues.",
    image: projectImage1,
    link: "/work",
    color: "from-violet-600 to-blue-600",
  },
  {
    number: "02",
    title: "Gym Website",
    category: "Fitness Platform",
    description:
      "An energetic and modern fitness website designed to showcase gym programs, memberships, trainers, and fitness services.",
    image: projectImage2,
    link: "/work",
    color: "from-pink-500 to-orange-500",
  },
  {
    number: "03",
    title: "Cake & Bakery Shop",
    category: "Bakery Website",
    description:
      "A beautiful and inviting bakery website created to showcase cakes, pastries, custom orders, and delicious bakery collections.",
    image: projectImage3,
    link: "/work",
    color: "from-cyan-500 to-emerald-500",
  },
];

const SERVICES = [
  {
    number: "01",
    title: "Web Development",
    text: "High-performance websites built to strengthen your digital presence and grow your business.",
    image: webImage,
    color: "from-violet-600 to-blue-600",
  },
  {
    number: "02",
    title: "Mobile App Development",
    text: "Modern mobile applications designed for seamless experiences across platforms.",
    image: mobileImage,
    color: "from-pink-500 to-orange-500",
  },
  {
    number: "03",
    title: "Software Development",
    text: "Custom software solutions designed to simplify operations and solve complex business needs.",
    image: softwareImage,
    color: "from-cyan-500 to-emerald-500",
  },
];

const REVIEWS = [
  {
    name: "Arun Kumar",
    role: "Business Owner",
    quote:
      "CodeThrive transformed our online presence and helped our business look more professional.",
    photo: arun,
  },
  {
    name: "Priya Sharma",
    role: "Founder",
    quote:
      "Professional, creative and very easy to work with. The entire process was smooth.",
    photo: priya,
  },
  {
    name: "Rahul",
    role: "Entrepreneur",
    quote:
      "They understood exactly what we needed and delivered a beautiful digital experience.",
    photo: rahul,
  },
];

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

export default function Main() {
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((previous) => (previous + 1) % REVIEWS.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const currentReview = REVIEWS[activeReview];

  const goToPreviousReview = () => {
    setActiveReview((previous) =>
      previous === 0 ? REVIEWS.length - 1 : previous - 1
    );
  };

  const goToNextReview = () => {
    setActiveReview((previous) => (previous + 1) % REVIEWS.length);
  };

  return (
    <div className="w-full overflow-hidden bg-[#FFFDF8] text-[#20202A]">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-28 sm:px-8 sm:pt-32 md:px-12 lg:px-16 xl:px-20">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
          >
            <source
              src="/videos/digital-background1.mp4"
              type="video/mp4"
            />
          </video>

          <div className="pointer-events-none absolute inset-0 z-[1] bg-[#111827]/70" />

          <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-[#111827]/95 via-[#312E81]/70 to-[#7C3AED]/20" />

          <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-[#111827]/80 via-transparent to-[#111827]/20" />

          <motion.div
            animate={{
              x: [0, 70, 0],
              y: [0, -40, 0],
              scale: [1, 1.2, 1],
              opacity: [0.25, 0.6, 0.25],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute right-[-120px] top-[5%] z-[3] h-[350px] w-[350px] rounded-full bg-[#EC4899]/35 blur-[120px] sm:h-[500px] sm:w-[500px]"
          />

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
            className="pointer-events-none absolute bottom-[-100px] left-[-100px] z-[3] h-[300px] w-[300px] rounded-full bg-[#06B6D4]/30 blur-[120px] sm:h-[450px] sm:w-[450px]"
          />

          <div className="pointer-events-none absolute inset-0 z-[3] bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.08]" />

          <div className="relative z-10 mx-auto flex w-full max-w-[1440px] items-center">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="w-full max-w-[1100px]"
            >
              <motion.div
                variants={fadeUp}
                className="mb-6 flex items-center gap-3 sm:mb-8"
              >
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22D3EE] opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-[#22D3EE] shadow-[0_0_15px_rgba(34,211,238,0.9)]" />
                </span>

                <span className="font-body text-[10px] font-semibold uppercase tracking-[2px] text-[#E0F2FE] sm:text-xs sm:tracking-[3px]">
                  CodeThrive InfoTech
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-display text-[50px] font-black leading-[0.9] tracking-[-3px] text-white sm:text-[68px] sm:tracking-[-5px] md:text-[85px] lg:text-[100px] lg:tracking-[-6px] xl:text-[112px]"
              >
                <span className="block">We build</span>

                <span className="block bg-gradient-to-r from-[#A78BFA] via-[#F472B6] to-[#22D3EE] bg-clip-text text-transparent">
                  digital
                </span>

                <span className="relative inline-block text-white">
                  experiences.

                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{
                      delay: 1.4,
                      duration: 1.2,
                      ease: "easeOut",
                    }}
                    className="absolute bottom-[-8px] left-0 h-[3px] rounded-full bg-gradient-to-r from-[#22D3EE] via-[#A78BFA] to-[#F472B6] shadow-[0_0_15px_rgba(167,139,250,0.6)] sm:h-[5px]"
                  />
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-8 max-w-[650px] font-body text-base leading-relaxed text-white/85 sm:mt-10 sm:text-lg lg:text-xl"
              >
                We create thoughtful websites, digital products and
                experiences that help ambitious businesses grow.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10"
              >
                <Link
                  to="/contact"
                  className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#F97316] px-6 py-4 font-body text-sm font-semibold text-white shadow-[0_12px_35px_rgba(139,92,246,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(236,72,153,0.45)] sm:px-8"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  <span className="relative z-10">
                    Let’s Work Together
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/work"
                  className="group flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-4 font-body text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-[#22D3EE] hover:bg-[#22D3EE]/20 sm:px-7"
                >
                  Explore our work

                  <ArrowDown
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-y-1"
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>

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
            className="absolute right-[8%] top-[50%] z-[5] hidden xl:block"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#22D3EE]/40 bg-[#22D3EE]/10 backdrop-blur-sm">
              <Sparkles size={26} className="text-[#22D3EE]" />
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/70 md:flex"
          >
            <span className="font-body text-[8px] uppercase tracking-[3px]">
              Scroll
            </span>

            <div className="h-8 w-[1px] bg-gradient-to-b from-[#22D3EE] to-transparent" />

            <ArrowDown size={14} className="text-[#22D3EE]" />
          </motion.div>
        </section>

        {/* Welcome Section */}
       <section className="relative overflow-hidden bg-gradient-to-br from-[#FFEDD5] via-[#FBCFE8] to-[#BAE6FD] px-4 py-7 sm:px-6 sm:py-10 md:px-12 lg:px-16 lg:py-14 xl:px-20">
  <div className="pointer-events-none absolute -left-24 -top-24 h-[220px] w-[220px] rounded-full bg-[#F97316]/35 blur-3xl sm:h-[300px] sm:w-[300px]" />

  <div className="pointer-events-none absolute -bottom-28 -right-24 h-[240px] w-[240px] rounded-full bg-[#06B6D4]/35 blur-3xl sm:h-[350px] sm:w-[350px]" />

  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EC4899]/15 blur-3xl sm:h-[400px] sm:w-[400px]" />

  <div className="relative z-10 mx-auto grid max-w-[1440px] grid-cols-2 items-center gap-4 max-[380px]:grid-cols-1 sm:gap-6 lg:grid-cols-12 lg:gap-10">
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="col-span-1 lg:col-span-5"
    >
      <div className="relative aspect-[4/4] overflow-hidden rounded-[1rem] border border-white/90 bg-white/75 shadow-[0_15px_45px_rgba(124,58,237,0.15)] backdrop-blur-sm sm:rounded-[1.5rem] lg:rounded-[1.75rem]">
        <img
          src={welcomeImage}
          alt="Welcome to CodeThrive"
          className="absolute inset-0 h-full w-full object-contain p-2 transition-transform duration-700 hover:scale-105 sm:p-5 lg:p-8"
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
      <p className="mb-2 font-body text-[8px] uppercase tracking-[1.2px] text-[#6D28D9] sm:mb-3 sm:text-xs sm:tracking-[2px]">
        Welcome to CodeThrive
      </p>

      <h2 className="font-display text-[21px] font-bold leading-[0.95] tracking-[-1px] text-[#20202A] sm:text-3xl sm:tracking-[-1.5px] md:text-4xl lg:text-5xl">
        Technology
        <br />

        <span className="bg-gradient-to-r from-[#6D28D9] via-[#DB2777] to-[#EA580C] bg-clip-text text-transparent">
          should feel human.
        </span>
      </h2>

      <p className="mt-3 max-w-[650px] font-body text-[10px] leading-relaxed text-[#475569] sm:mt-4 sm:text-sm md:text-base lg:mt-5 lg:text-lg">
        At CodeThrive InfoTech, we combine design, technology and strategy to
        create digital experiences that are simple to use, beautiful to look
        at and built to last.
      </p>

      <p className="mt-2 max-w-[650px] font-body text-[10px] leading-relaxed text-[#475569] sm:mt-3 sm:text-sm md:text-base lg:text-lg">
        From the first idea to the final product, we work closely with our
        clients to turn ambitious ideas into meaningful digital solutions.
      </p>

      <Link
        to="/about"
        className="group mt-3 inline-flex items-center gap-2 font-body text-sm font-semibold text-[#6D28D9] transition-colors hover:text-[#DB2777] sm:mt-4 lg:mt-5"
      >
        More about us

        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
        />
      </Link>
    </motion.div>
  </div>
</section>
        {/* Selected Work */}
        <section
          id="work"
          className="overflow-hidden bg-gradient-to-b from-white to-[#F8FAFC] px-4 py-12 sm:px-6 sm:py-16 md:px-12 md:py-20 lg:px-16 lg:py-24 xl:px-20"
        >
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-8 flex flex-col justify-between gap-5 sm:mb-10 md:flex-row md:items-end lg:mb-12">
              <div>
                <p className="mb-2 font-body text-[9px] uppercase tracking-[1.5px] text-[#7C3AED] sm:mb-4 sm:text-xs sm:tracking-[2px]">
                  Selected Work
                </p>

                <h2 className="font-display text-[28px] font-bold leading-[0.95] tracking-[-1.5px] text-[#20202A] sm:text-4xl md:text-5xl lg:text-6xl">
                  Ideas into{" "}
                  <span className="bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#F97316] bg-clip-text text-transparent">
                    experiences.
                  </span>
                </h2>
              </div>

              <Link
                to="/work"
                className="group inline-flex items-center gap-2 font-body text-sm font-semibold text-[#7C3AED] transition-colors hover:text-[#EC4899]"
              >
                View all work

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-12">
              {PROJECTS.map((project, index) => {
                const isFullWidth = index % 3 === 2;

                return (
                  <motion.div
                    key={project.number}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.1,
                    }}
                    className={`group relative min-h-[190px] overflow-hidden rounded-[1.1rem] border border-white/40 bg-gradient-to-br ${project.color} ${
                      isFullWidth
                        ? "col-span-2 lg:col-span-12"
                        : "col-span-1 lg:col-span-6"
                    } sm:min-h-[240px] md:min-h-[280px] sm:rounded-[1.5rem]`}
                  >
                    <Link
                      to={project.link}
                      className="absolute inset-0 z-20"
                      aria-label={`View ${project.title}`}
                    />

                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/30 to-transparent" />

                    <span className="absolute left-3 top-3 z-10 rounded-full bg-white/20 px-2 py-1 text-xs text-white backdrop-blur-md sm:left-5 sm:top-5">
                      {project.number}
                    </span>

                    <div className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#7C3AED] opacity-0 transition-all group-hover:opacity-100 sm:right-5 sm:top-5 sm:h-10 sm:w-10">
                      <ArrowUpRight size={16} />
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 z-10 sm:bottom-5 sm:left-5 sm:right-5">
                      <p className="text-[8px] uppercase tracking-[1.5px] text-white/80 sm:text-[10px]">
                        {project.category}
                      </p>

                      <h3 className="font-display text-[15px] font-bold text-white sm:text-xl md:text-2xl">
                        {project.title}
                      </h3>

                      <p className="mt-2 hidden max-w-[500px] text-sm text-white/75 sm:block">
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="relative overflow-hidden px-3 py-10 sm:px-6 sm:py-16 md:px-12 md:py-20 lg:px-16 lg:py-24 xl:px-20">
          <div
            className="pointer-events-none absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${serviceImage})`,
            }}
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#111827]/85 via-[#312E81]/70 to-[#0F766E]/65" />

          <div className="relative z-10 mx-auto max-w-[1440px]">
            <div className="mb-7 max-w-[820px] rounded-2xl border border-white/20 bg-gradient-to-r from-[#7C3AED]/40 via-[#EC4899]/30 to-[#06B6D4]/30 p-4 backdrop-blur-md sm:mb-10 sm:rounded-3xl sm:p-6 lg:mb-12 lg:p-7">
              <p className="mb-3 font-body text-[9px] font-semibold uppercase tracking-[1.5px] text-[#22D3EE] sm:mb-5 sm:text-xs sm:tracking-[3px]">
                What we do
              </p>

              <h2 className="font-display text-[28px] font-bold leading-[0.95] text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Everything you need
                <br />

                <span className="bg-gradient-to-r from-[#F472B6] via-[#F97316] to-[#FACC15] bg-clip-text text-transparent">
                  to go digital.
                </span>
              </h2>
            </div>

            <div className="relative w-full overflow-hidden py-2 sm:py-4">
              <motion.div
                className="flex w-max gap-2 sm:gap-4 lg:gap-5"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 28,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {[...SERVICES, ...SERVICES].map((service, index) => (
                  <motion.div
                    key={`${service.number}-${index}`}
                    className={`group relative min-h-[190px] w-[72vw] flex-shrink-0 overflow-hidden rounded-[0.8rem] border border-white/30 bg-gradient-to-br ${service.color} sm:min-h-[280px] sm:w-[48vw] sm:rounded-[1.5rem] md:w-[34vw] lg:min-h-[310px] lg:w-[300px] xl:w-[330px]`}
                  >
                    <motion.div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${service.image})`,
                      }}
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.8 }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/20 to-transparent" />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#7C3AED]/90 via-[#EC4899]/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative z-10 flex h-full flex-col p-3 sm:p-6 lg:p-7">
                      <span className="text-xs text-white">
                        {service.number}
                      </span>

                      <h3 className="mt-3 font-display text-[14px] font-bold text-white sm:mt-7 sm:text-2xl lg:text-3xl">
                        {service.title}
                      </h3>

                      <p className="mt-2 text-[10px] leading-relaxed text-white/90 sm:mt-4 sm:text-sm lg:text-base">
                        {service.text}
                      </p>

                      <div className="mt-auto pt-3 sm:pt-6">
                        <ArrowUpRight
                          size={18}
                          className="text-[#22D3EE] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ==========================================
    Our Clients Section
========================================== */}
<section
  id="our-clients"
  className="relative overflow-hidden bg-slate-950 px-4 py-16 sm:px-8 sm:py-24 lg:px-12"
>
  {/* Background Effects */}
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(14,165,233,0.12),transparent_30%),radial-gradient(circle_at_90%_80%,rgba(168,85,247,0.14),transparent_32%)]" />

  <div className="pointer-events-none absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[130px]" />

  <div className="pointer-events-none absolute bottom-10 right-[-120px] h-80 w-80 rounded-full bg-fuchsia-500/10 blur-[140px]" />

  <div className="relative z-10 mx-auto max-w-7xl">
    {/* Section Header */}
    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
      <div className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Our Clients
      </div>

      <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
        Our{" "}
        <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
          Clients
        </span>
      </h2>

      <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
        Partnering with forward-thinking organizations across diverse
        industries.
      </p>
    </div>

    {/* Horizontal Moving Cards */}
    <div className="group relative overflow-hidden">
      {/* Left Fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-12 bg-gradient-to-r from-slate-950 to-transparent sm:w-32" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-12 bg-gradient-to-l from-slate-950 to-transparent sm:w-32" />

      <div className="flex w-max gap-5 py-5 client-marquee group-hover:[animation-play-state:paused]">
        {[...clients, ...clients].map((client, index) => (
          <article
            key={`${client.id}-${index}`}
            className="w-[280px] shrink-0 rounded-3xl border border-white/10 bg-white/[0.06] p-6 text-center backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-300/50 hover:bg-white/[0.1] hover:shadow-[0_0_35px_rgba(34,211,238,0.15)] sm:w-[330px]"
          >
            {/* Client Logo */}
            <div className="mb-6 flex justify-center">
              <div className="relative h-24 w-24">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/30 via-violet-500/20 to-fuchsia-500/30 blur-xl" />

                <div className="relative h-24 w-24 overflow-hidden rounded-full border border-white/20 bg-white p-2 shadow-xl">
                  <img
                    src={client.logo}
                    alt={`${client.name} Logo`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full rounded-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Category */}
            <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
              {client.category}
            </div>

            {/* Client Name */}
            <h3 className="min-h-[56px] text-xl font-bold text-white">
              {client.name}
            </h3>

            {/* Description */}
            <p className="mt-4 min-h-[72px] text-sm leading-6 text-slate-400">
              {client.description}
            </p>

            {/* View Works */}
            >
          </article>
        ))}
      </div>
    </div>

    {/* Bottom Text */}
    <p className="mt-8 text-center text-xs uppercase tracking-[0.2em] text-slate-500">
      Trusted by growing businesses and innovative organizations
    </p>
  </div>

  {/* Animation */}
  <style>{`
    .client-marquee {
      animation: clientMarquee 45s linear infinite;
    }

    @keyframes clientMarquee {
      from {
        transform: translateX(0);
      }

      to {
        transform: translateX(-50%);
      }
    }

    @media (max-width: 640px) {
      .client-marquee {
        animation-duration: 55s;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .client-marquee {
        animation: none;
        overflow-x: auto;
      }
    }
  `}</style>
</section>

        {/* Reviews */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#FDF4FF] via-[#FCE7F3] to-[#E0F2FE] px-4 py-10 sm:px-8 sm:py-14 md:px-12 lg:px-16 lg:py-16 xl:px-20">
          <div className="pointer-events-none absolute -right-24 -top-24 h-[400px] w-[400px] rounded-full bg-[#EC4899]/15 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 -left-24 h-[350px] w-[350px] rounded-full bg-[#06B6D4]/15 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-[1440px]">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-7 sm:mb-10"
            >
              <p className="mb-2 font-body text-[9px] uppercase tracking-[2px] text-[#7C3AED] sm:mb-3 sm:text-xs">
                What People Say
              </p>

              <h2 className="font-display text-2xl font-bold leading-tight text-[#20202A] sm:text-5xl lg:text-6xl">
                Our clients love working with us
              </h2>
            </motion.div>

            <div className="relative flex h-[310px] w-full items-center justify-center overflow-hidden sm:h-[370px] lg:h-[390px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeReview}
                  initial={{ opacity: 0, x: "100vw" }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: "-100vw" }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute flex min-h-[250px] w-[96%] flex-col overflow-hidden rounded-[1rem] border border-[#DDD6FE] bg-white/90 shadow-[0_18px_50px_rgba(124,58,237,0.15)] backdrop-blur-md sm:min-h-[285px] sm:w-[620px] sm:rounded-[1.5rem] lg:w-[760px]"
                >
                  <div className="absolute left-0 right-0 top-0 h-[5px] bg-gradient-to-r from-[#7C3AED] via-[#EC4899] via-[#F97316] to-[#06B6D4]" />

                  <div className="flex flex-1">
                    <div className="hidden w-[90px] flex-shrink-0 items-center justify-center bg-gradient-to-b from-[#7C3AED] to-[#2563EB] sm:flex">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 font-display text-3xl font-bold text-white">
                        “
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col justify-between p-5 sm:p-7 lg:p-8">
                      <div className="mb-3 flex items-center justify-between sm:hidden">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#7C3AED] font-display text-xl font-bold text-white">
                          “
                        </div>

                        <div className="flex gap-0.5">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              size={13}
                              className="text-[#F59E0B]"
                              fill="currentColor"
                            />
                          ))}
                        </div>
                      </div>

                      <div className="mb-4 hidden gap-1 sm:flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={17}
                            className="text-[#F59E0B]"
                            fill="currentColor"
                          />
                        ))}
                      </div>

                      <p className="mb-4 max-w-[620px] font-display text-[14px] leading-relaxed text-[#20202A] sm:mb-5 sm:text-[19px] lg:text-[21px]">
                        "{currentReview.quote}"
                      </p>

                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-full shadow-md ring-2 ring-[#EC4899]/25 sm:h-16 sm:w-16 lg:h-[70px] lg:w-[70px]">
                            <img
                              src={currentReview.photo}
                              alt={currentReview.name}
                              className="h-full w-full object-cover"
                            />
                          </div>

                          <div>
                            <p className="font-body text-sm font-semibold text-[#20202A] sm:text-base">
                              {currentReview.name}
                            </p>

                            <p className="mt-0.5 font-body text-[10px] text-[#64748B] sm:text-sm">
                              {currentReview.role}
                            </p>
                          </div>
                        </div>

                        <div className="font-body text-[10px] text-[#7C3AED]/60 sm:text-xs">
                          {String(activeReview + 1).padStart(2, "0")}
                          <span className="mx-1">/</span>
                          {String(REVIEWS.length).padStart(2, "0")}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="h-[4px] w-[35%] bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#06B6D4]" />
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-3">
                <button
                  type="button"
                  onClick={goToPreviousReview}
                  aria-label="Previous review"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#7C3AED]/20 bg-white/80 text-[#7C3AED] transition hover:bg-white"
                >
                  <ArrowLeft size={14} />
                </button>

                <div className="flex items-center gap-1.5">
                  {REVIEWS.map((review, index) => (
                    <button
                      key={`${review.name}-${index}`}
                      type="button"
                      onClick={() => setActiveReview(index)}
                      aria-label={`Show review ${index + 1}`}
                      className={`h-[6px] rounded-full transition-all duration-300 ${
                        activeReview === index
                          ? "w-6 bg-[#7C3AED]"
                          : "w-[6px] bg-[#7C3AED]/35"
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={goToNextReview}
                  aria-label="Next review"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#7C3AED]/20 bg-white/80 text-[#7C3AED] transition hover:bg-white"
                >
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-4 py-8 sm:px-8 sm:py-14 md:px-12 lg:px-16 lg:py-16 xl:px-20">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.97,
              y: 25,
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
            className="relative overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-[#312E81] via-[#7C3AED] to-[#DB2777] px-5 py-8 sm:rounded-[2rem] sm:px-10 sm:py-12 lg:px-14 lg:py-14 xl:px-16"
          >
            <motion.div
              animate={{
                x: [0, 30, 0],
                y: [0, -20, 0],
                opacity: [0.2, 0.35, 0.2],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -right-24 -top-24 h-[220px] w-[320px] rounded-[45%] bg-[#22D3EE]/30 blur-3xl"
            />

            <motion.div
              animate={{
                x: [0, -25, 0],
                opacity: [0.12, 0.25, 0.12],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -bottom-24 -left-24 h-[180px] w-[300px] rounded-[45%] bg-[#F97316]/30 blur-3xl"
            />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FACC15]/20 blur-[100px]" />

            <div className="relative z-10 grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-12">
              <div className="relative z-20 max-w-[600px]">
                <div className="mb-3 flex items-center gap-2 sm:mb-4">
                  <Sparkles
                    size={18}
                    className="text-[#22D3EE]"
                  />

                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E0F2FE] sm:text-sm">
                    Let's Build Together
                  </span>
                </div>

                <h2 className="text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-[54px]">
                  Have an idea?
                  <br />

                  <span className="bg-gradient-to-r from-[#FACC15] via-[#FB923C] to-[#F472B6] bg-clip-text text-transparent">
                    Let's make it real.
                  </span>
                </h2>

                <p className="mt-4 max-w-[500px] text-sm leading-7 text-white/75 sm:text-base lg:text-lg">
                  Tell us what you're building and let's turn your idea into a
                  powerful digital experience.
                </p>

                <div className="mt-6">
                  <Link
                    to="/contact#contact-form"
                    className="group inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#7C3AED] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#F0FDFA] hover:text-[#DB2777] hover:shadow-2xl sm:px-6 sm:py-3.5 sm:text-base"
                  >
                    Start a Conversation

                    <ArrowUpRight
                      size={19}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>

              <motion.div
                variants={fadeUp}
                className="relative flex h-[240px] items-center justify-center overflow-visible sm:h-[310px] lg:h-[360px] xl:h-[390px]"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.18, 0.35, 0.18],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute h-[190px] w-[190px] rounded-full bg-[#22D3EE]/25 blur-[75px] sm:h-[270px] sm:w-[270px] lg:h-[340px] lg:w-[340px]"
                />

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.94,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.9,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.015,
                  }}
                  className="group relative z-10 h-[215px] w-full max-w-[270px] overflow-hidden rounded-[1.5rem] border border-[#22D3EE]/30 bg-[#111827]/30 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:h-[275px] sm:max-w-[340px] sm:rounded-[2.5rem] lg:h-[330px] lg:max-w-[400px] lg:rounded-[3.5rem]"
                >
                  <img
                    src="/images/about-technology.jpg"
                    alt="Digital technology and software development"
                    className="h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#7C3AED]/75 via-transparent to-[#22D3EE]/25" />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111827]/70 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 flex items-center gap-2 sm:bottom-6 sm:left-6 lg:bottom-7 lg:left-7">
                    <span className="h-2 w-2 rounded-full bg-[#22D3EE] shadow-[0_0_14px_rgba(34,211,238,0.9)]" />

                    <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/80 sm:text-[10px]">
                      Digital Innovation
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute right-[1%] top-[10%] z-20 flex h-11 w-11 items-center justify-center rounded-2xl border border-[#22D3EE]/30 bg-[#111827]/80 shadow-[0_10px_35px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:h-14 sm:w-14 lg:right-[-3%] lg:h-16 lg:w-16"
                >
                  <span className="h-3 w-3 rounded-full bg-[#22D3EE] shadow-[0_0_20px_rgba(34,211,238,0.85)] sm:h-4 sm:w-4" />
                </motion.div>

                <motion.div
                  animate={{
                    opacity: [0.55, 1, 0.55],
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-[2%] right-[8%] z-30 rounded-full border border-[#22D3EE]/25 bg-[#111827]/70 px-3 py-1.5 backdrop-blur-md"
                >
                  <span className="text-[7px] font-semibold tracking-[0.16em] text-[#E0F2FE]/80 sm:text-[8px] lg:text-[9px]">
                    BUILD • CREATE • GROW
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}