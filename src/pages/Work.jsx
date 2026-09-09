import { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";



import {
  workNexora,
  workMedora,
  workVelox,
  linkArrow,
} from "../assets/figmaImages.js";

import { motion, AnimatePresence } from "framer-motion";

import {
  X,
  ExternalLink,
  CalendarDays,
  UserRound,
  Code2,
  Layers3,
} from "lucide-react";

/* =========================================================
   STATS
========================================================= */

const STATS = [
  {
    value: "12+",
    label: "Projects",
  },
  {
    value: "15+",
    label: "Clients",
  },
  {
    value: "10+",
    label: "Industries",
  },
];

/* =========================================================
   WORKS
========================================================= */

const WORKS = [
{
id: "restaurant-website",


tag: "Restaurant Website",

name: "RESTAURANT",

desc:
  "A premium, highly interactive dining website designed for modern fine dining restaurants and hospitality venues. The experience combines elegant visuals, immersive food presentations, and seamless reservation journeys.",

tags: ["Web Design", "Restaurant", "Interactive UI"],

image:"/work/restaurants.jpg",

imageSide: "left",

projectType: "Restaurant Website",

designer: "M. Deepakkumar",

developer: "M. Deepakkumar",

duration: "Project Based",

year: "2026",

techStack: [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Framer Motion",
  "Responsive Design",
],

services: [
  "UI/UX Design",
  "Web Design",
  "Frontend Development",
  "Responsive Development",
  "Interactive Animations",
],

features: [
  "Visual signature menu showcase",
  "Interactive reservations booking",
  "Responsive mobile-first interface",
  "Dynamic banner hero sections",
  "Gourmet culinary galleries",
],

liveLink: "https://chipper-narwhal-2b443d.netlify.app/",

overview:
  "A premium restaurant website designed to create an immersive digital dining experience. The platform focuses on elegant presentation, interactive food discovery, and an effortless reservation journey.",

challenge:
  "The challenge was to create a visually premium restaurant experience while keeping important information such as menus, reservations, and venue details easy to access across all devices.",

solution:
  "We created a modern, image-driven interface with dynamic hero sections, interactive menus, culinary galleries, and a mobile-first reservation experience.",


},

{
id: "gym-website",


tag: "Fitness Platform",

name: "GYM & FITNESS",

desc:
  "An energetic and modern fitness club website featuring vibrant animations, interactive schedules, trainer profiles, membership plans, and engaging workout experiences.",

tags: ["Web Design", "Fitness", "Interactive UI"],

image:"/work/gym.jpg" ,

imageSide: "right",

projectType: "Gym Website",

designer: "M. Deepakkumar",

developer: "M. Deepakkumar",

duration: "Project Based",

year: "2026",

techStack: [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Framer Motion",
  "Responsive Design",
],

services: [
  "UI/UX Design",
  "Web Development",
  "Frontend Development",
  "Animation Design",
  "Responsive Development",
],

features: [
  "Interactive class schedules",
  "Trainer profile highlights",
  "Vibrant progress trackers",
  "Membership plan checkout",
  "Integrated fitness blog",
],

liveLink: "https://ornate-squirrel-175112.netlify.app/",

overview:
  "A modern fitness club platform designed to motivate users through energetic visuals, interactive schedules, trainer information, and easy membership exploration.",

challenge:
  "The platform needed to communicate energy and motivation while organizing class schedules, trainer profiles, membership plans, and fitness content clearly.",

solution:
  "We developed a vibrant and animation-driven experience with interactive scheduling, clear membership options, engaging trainer sections, and responsive layouts.",


},

{
id: "cake-bakery-shop",


tag: "Bakery E-Commerce",

name: "CAKE & BAKERY",

desc:
  "A charming visual e-commerce website for custom cakes, bakery products, and online orders. The experience focuses on delightful product discovery and personalized cake ordering.",

tags: ["E-Commerce", "Web Design", "Bakery"],

image: "work/cake.jpg",

imageSide: "left",

projectType: "Cake & Bakery Shop",

designer: "M. Deepakkumar",

developer: "M. Deepakkumar",

duration: "Project Based",

year: "2026",

techStack: [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Framer Motion",
  "Responsive Design",
],

services: [
  "UI/UX Design",
  "E-Commerce Design",
  "Web Development",
  "Product Experience",
  "Responsive Development",
],

features: [
  "Interactive custom cake builder",
  "Delightful dessert catalogs",
  "Secure ordering checklist",
  "Festive event catering orders",
  "Customer loyalty points",
],

liveLink: "https://ephemeral-semolina-06c7fc.netlify.app/",

overview:
  "A visually engaging bakery platform designed to showcase delicious products while making custom cake orders and online shopping simple and enjoyable.",

challenge:
  "The challenge was to create an experience that visually communicates the appeal of bakery products while supporting custom orders and event catering requirements.",

solution:
  "We designed an image-focused shopping experience with interactive cake customization, organized dessert catalogs, and streamlined ordering flows.",


},

{
id: "medical-shop",


tag: "Healthcare E-Commerce",

name: "MEDICAL SHOP",

desc:
  "A clean and high-performance medical shop website designed for health products, prescription uploads, medicine discovery, and secure online ordering.",

tags: ["Healthcare", "E-Commerce", "Web"],

image: "/work/medical.jpg",

imageSide: "right",

projectType: "Medical Shop Website",

designer: "M. Deepakkumar",

developer: "M. Deepakkumar",

duration: "Project Based",

year: "2026",

techStack: [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Responsive Design",
  "Frontend Development",
],

services: [
  "UI/UX Design",
  "Web Development",
  "E-Commerce Experience",
  "Responsive Development",
  "Frontend Development",
],

features: [
  "Direct prescription uploads",
  "OTC drug categorized search",
  "Secure checkout gateway",
  "Real-time medicine inventory",
  "Pharmacist consultancy panel",
],

liveLink: "https://sparkly-pixie-11db8a.netlify.app/",

overview:
  "A modern medical shop platform created to make medicine discovery, prescription submission, and health product ordering simple and accessible.",

challenge:
  "Medical shopping experiences require clear information, easy navigation, and trust while helping users quickly find medicines and health products.",

solution:
  "We created a clean and structured interface with categorized medicine search, prescription uploads, inventory visibility, and a streamlined checkout experience.",


},

{
id: "pet-shop",


tag: "Pet Care Platform",

name: "PET SHOP",

desc:
  "A friendly and vibrant pet shop website featuring pet products, care services, booking experiences, and useful health resources for pet owners.",

tags: ["E-Commerce", "Pet Care", "Web Design"],

image: "/work/petShop.jpg",

imageSide: "left",

projectType: "Pet Shop Website",

designer: "M. Deepakkumar",

developer: "M. Deepakkumar",

duration: "Project Based",

year: "2026",

techStack: [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Framer Motion",
  "Responsive Design",
],

services: [
  "UI/UX Design",
  "Web Development",
  "Product Catalog Design",
  "Responsive Development",
  "Interactive Experience",
],

features: [
  "Interactive product catalog",
  "Pet boarding appointments",
  "Breed health resource hub",
  "Vet booking calendar",
  "Subscription pet food delivery",
],

liveLink: "https://joyful-gelato-a2cbd9.netlify.app/",

overview:
  "A pet-focused digital platform that brings products, care services, appointments, and helpful resources together in one friendly experience.",

challenge:
  "The website needed to support multiple pet-related services without making the experience feel complicated or overwhelming.",

solution:
  "We created a bright and approachable interface with clear product discovery, service booking flows, resource sections, and subscription options.",


},

{
id: "groceries-shop",


tag: "Grocery E-Commerce",

name: "GROCERIES",

desc:
  "A colorful and modern grocery shopping website designed for quick product discovery, instant cart management, daily deals, and convenient doorstep delivery.",

tags: ["E-Commerce", "Groceries", "Web"],

image:"/work/grocory.jpg",

imageSide: "right",

projectType: "Groceries Shop Website",

designer: "M. Deepakkumar",

developer: "M. Deepakkumar",

duration: "Project Based",

year: "2026",

techStack: [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Framer Motion",
  "Responsive Design",
],

services: [
  "UI/UX Design",
  "E-Commerce Design",
  "Web Development",
  "Responsive Development",
  "Frontend Development",
],

features: [
  "Lightning-fast cart adder",
  "Categorized fresh produce",
  "Daily special deals and coupons",
  "Doorstep delivery scheduling",
  "Organic ingredient verification",
],

liveLink: "https://stalwart-froyo-a435ec.netlify.app/",

overview:
  "A modern online grocery platform focused on making everyday shopping fast, convenient, and visually engaging.",

challenge:
  "Grocery shopping involves large product catalogs, frequent purchases, and the need for fast cart interactions and easy delivery management.",

solution:
  "We created a colorful and organized shopping experience with quick cart functionality, clear product categories, promotional deals, and delivery scheduling.",


},

{
id: "clothing-store",


tag: "Fashion E-Commerce",

name: "CLOTHING STORE",

desc:
  "A high-end fashion e-commerce website designed to showcase modern apparel collections through dynamic visual grids, interactive lookbooks, and seamless shopping experiences.",

tags: ["Fashion", "E-Commerce", "Web Design"],

image: "/work/clothing.jpg",

imageSide: "left",

projectType: "Clothing Store Website",

designer: "M. Deepakkumar",

developer: "M. Deepakkumar",

duration: "Project Based",

year: "2026",

techStack: [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Framer Motion",
  "Responsive Design",
],

services: [
  "UI/UX Design",
  "Fashion E-Commerce",
  "Web Development",
  "Product Experience",
  "Responsive Development",
],

features: [
  "Interactive fashion lookbooks",
  "Visual size and color selectors",
  "Dynamic stock counter",
  "Trend-setter style filtering",
  "Seamless shopping experience",
],

liveLink: "https://luminous-strudel-016c8f.netlify.app/",

overview:
  "A premium fashion storefront designed to present apparel collections through strong visual storytelling and a smooth digital shopping experience.",

challenge:
  "Fashion websites need to prioritize visual presentation while helping customers quickly explore products, colors, sizes, and available stock.",

solution:
  "We designed a visually rich shopping experience using dynamic grids, interactive lookbooks, intuitive filters, and clear product selection tools.",


},

{
id: "organics-store",


tag: "Organic E-Commerce",

name: "ORGANICS STORE",

desc:
  "A clean and health-focused online store for organic foods, cosmetics, and eco-friendly products with sustainability-driven content and personalized shopping experiences.",

tags: ["Organic", "E-Commerce", "Eco-Friendly"],

image: "/work/oraganic.jpg",

imageSide: "right",

projectType: "Organics Store Website",

designer: "M. Deepakkumar",

developer: "M. Deepakkumar",

duration: "Project Based",

year: "2026",

techStack: [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Framer Motion",
  "Responsive Design",
],

services: [
  "UI/UX Design",
  "E-Commerce Design",
  "Web Development",
  "Responsive Development",
  "Content Experience",
],

features: [
  "Certified organic badge finder",
  "Eco-friendly zero waste guides",
  "Custom bundle product builder",
  "Subscription box orders",
  "Holistic wellness blog",
],

liveLink: "https://silly-syrniki-acc03b.netlify.app/",

overview:
  "A health and sustainability-focused online store designed to help customers discover organic and eco-friendly products with confidence.",

challenge:
  "The platform needed to communicate product authenticity, sustainability, and wellness benefits while supporting a diverse range of products.",

solution:
  "We created a clean and trustworthy shopping experience featuring organic certifications, educational content, custom product bundles, and subscription options.",


},
];


/* =========================================================
   PROJECT DETAIL ITEM
========================================================= */

function DetailItem({ icon: Icon, label, value }) {
  return (
    <motion.div
      whileHover={{
        x: 4,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        flex
        items-start
        gap-4
        p-4
        sm:p-5
        rounded-2xl
        bg-[#f5faf7]
        border
        border-hairline
      "
    >
      <div
        className="
          w-10
          h-10
          shrink-0
          rounded-full
          bg-emerald-100
          text-emerald-800
          flex
          items-center
          justify-center
        "
      >
        <Icon size={17} />
      </div>

      <div>
        <p
          className="
            font-body
            text-[10px]
            sm:text-xs
            uppercase
            tracking-[1.2px]
            text-clay
            mb-1
          "
        >
          {label}
        </p>

        <p
          className="
            font-display
            font-semibold
            text-ink
            text-sm
            sm:text-base
          "
        >
          {value}
        </p>
      </div>
    </motion.div>
  );
}

/* =========================================================
   PROJECT MODAL
========================================================= */

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <motion.div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        p-3
        sm:p-5
        md:p-8
      "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* BACKDROP */}

      <motion.div
        className="
          absolute
          inset-0
          bg-ink/60
          backdrop-blur-md
        "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* MODAL */}

      <motion.div
        initial={{
          opacity: 0,
          y: 60,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          y: 40,
          scale: 0.97,
        }}
        transition={{
          duration: 0.45,
          ease: [0.16, 1, 0.3, 1],
        }}
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          z-10
          w-full
          max-w-[1100px]
          max-h-[92vh]
          overflow-y-auto
          bg-white
          rounded-[1.5rem]
          sm:rounded-[2rem]
          shadow-[0px_40px_100px_rgba(0,0,0,0.25)]
        "
      >
        {/* CLOSE BUTTON */}

        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="
            absolute
            right-4
            top-4
            sm:right-6
            sm:top-6
            z-20
            w-10
            h-10
            rounded-full
            bg-white/90
            backdrop-blur
            border
            border-hairline
            flex
            items-center
            justify-center
            text-ink
            hover:bg-emerald-800
            hover:text-white
            hover:border-emerald-800
            transition-all
            duration-300
          "
        >
          <X size={18} />
        </button>

        {/* PROJECT IMAGE */}

        <div
          className="
            relative
            w-full
            h-[240px]
            sm:h-[320px]
            md:h-[430px]
            overflow-hidden
          "
        >
          <img
            src={project.image}
            alt={project.name}
            className="
              w-full
              h-full
              object-cover
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-ink/60
              via-transparent
              to-transparent
            "
          />

          <div
            className="
              absolute
              bottom-6
              left-5
              sm:left-8
              md:left-10
            "
          >
            <p
              className="
                font-body
                text-white/70
                text-[10px]
                sm:text-xs
                uppercase
                tracking-[1.5px]
                mb-2
              "
            >
              {project.tag}
            </p>

            <h2
              className="
                font-display
                font-bold
                text-white
                text-5xl
                sm:text-6xl
                md:text-8xl
                tracking-[-3px]
                leading-none
              "
            >
              {project.name}
            </h2>
          </div>
        </div>

        {/* CONTENT */}

        <div
          className="
            p-5
            sm:p-8
            md:p-10
            lg:p-14
          "
        >
          {/* INTRO */}

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-12
              gap-8
              lg:gap-14
            "
          >
            <div className="lg:col-span-7">
              <p
                className="
                  font-body
                  text-emerald-800
                  text-xs
                  tracking-[1.5px]
                  uppercase
                  mb-4
                "
              >
                Project Overview
              </p>

              <h3
                className="
                  font-display
                  font-bold
                  text-ink
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  tracking-[-1.5px]
                  leading-tight
                  mb-5
                "
              >
                Building digital experiences that matter.
              </h3>

              <p
                className="
                  font-body
                  text-clay
                  text-sm
                  sm:text-base
                  md:text-lg
                  leading-relaxed
                "
              >
                {project.overview}
              </p>
            </div>

            {/* PROJECT META */}

            <div className="lg:col-span-5">
              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  lg:grid-cols-1
                  gap-3
                "
              >
                <DetailItem
                  icon={UserRound}
                  label="UI/UX Designer"
                  value={project.designer}
                />

                <DetailItem
                  icon={Code2}
                  label="Developer"
                  value={project.developer}
                />

                <DetailItem
                  icon={CalendarDays}
                  label="Development Duration"
                  value={project.duration}
                />

                <DetailItem
                  icon={Layers3}
                  label="Project Type"
                  value={project.projectType}
                />
              </div>
            </div>
          </div>

          <div className="h-px bg-hairline my-10 md:my-14" />

          {/* CHALLENGE + SOLUTION */}

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-8
              md:gap-12
            "
          >
            <div>
              <p
                className="
                  font-body
                  text-emerald-800
                  text-xs
                  tracking-[1.5px]
                  uppercase
                  mb-4
                "
              >
                The Challenge
              </p>

              <p
                className="
                  font-body
                  text-clay
                  text-sm
                  sm:text-base
                  md:text-lg
                  leading-relaxed
                "
              >
                {project.challenge}
              </p>
            </div>

            <div>
              <p
                className="
                  font-body
                  text-emerald-800
                  text-xs
                  tracking-[1.5px]
                  uppercase
                  mb-4
                "
              >
                Our Solution
              </p>

              <p
                className="
                  font-body
                  text-clay
                  text-sm
                  sm:text-base
                  md:text-lg
                  leading-relaxed
                "
              >
                {project.solution}
              </p>
            </div>
          </div>

          {/* SERVICES */}

          <div className="mt-10 md:mt-14">
            <p
              className="
                font-body
                text-emerald-800
                text-xs
                tracking-[1.5px]
                uppercase
                mb-5
              "
            >
              Services Provided
            </p>

            <div
              className="
                flex
                flex-wrap
                gap-2
                sm:gap-3
              "
            >
              {project.services.map((service) => (
                <motion.span
                  key={service}
                  whileHover={{
                    y: -3,
                    scale: 1.03,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    px-4
                    py-2.5
                    rounded-full
                    bg-emerald-50
                    text-emerald-800
                    font-body
                    font-medium
                    text-xs
                    sm:text-sm
                  "
                >
                  {service}
                </motion.span>
              ))}
            </div>
          </div>

          {/* TECH STACK */}

          <div className="mt-10 md:mt-14">
            <p
              className="
                font-body
                text-emerald-800
                text-xs
                tracking-[1.5px]
                uppercase
                mb-5
              "
            >
              Technology Stack
            </p>

            <div
              className="
                grid
                grid-cols-2
                sm:grid-cols-3
                md:grid-cols-4
                gap-3
              "
            >
              {project.techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    border
                    border-hairline
                    rounded-xl
                    p-4
                    bg-white
                    hover:bg-emerald-50
                    transition-colors
                    duration-300
                  "
                >
                  <span
                    className="
                      block
                      font-body
                      text-[9px]
                      tracking-[1px]
                      text-clay
                      mb-2
                    "
                  >
                    0{index + 1}
                  </span>

                  <span
                    className="
                      font-display
                      font-semibold
                      text-ink
                      text-sm
                      sm:text-base
                    "
                  >
                    {tech}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* FEATURES */}

          <div className="mt-10 md:mt-14">
            <p
              className="
                font-body
                text-emerald-800
                text-xs
                tracking-[1.5px]
                uppercase
                mb-5
              "
            >
              Key Features
            </p>

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-3
              "
            >
              {project.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  whileHover={{
                    x: 5,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    flex
                    items-center
                    gap-3
                    py-3
                    border-b
                    border-hairline
                  "
                >
                  <span
                    className="
                      flex
                      items-center
                      justify-center
                      w-7
                      h-7
                      rounded-full
                      bg-emerald-100
                      text-emerald-800
                      font-body
                      text-[10px]
                      font-bold
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className="
                      font-body
                      text-sm
                      sm:text-base
                      text-ink
                    "
                  >
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* LIVE PROJECT */}

          <div
            className="
              mt-10
              md:mt-14
              p-5
              sm:p-6
              md:p-8
              rounded-2xl
              bg-ink
              flex
              flex-col
              sm:flex-row
              sm:items-center
              sm:justify-between
              gap-5
            "
          >
            <div>
              <p
                className="
                  font-body
                  text-white/50
                  text-[10px]
                  tracking-[1.5px]
                  uppercase
                  mb-2
                "
              >
                Live Project
              </p>

              <p
                className="
                  font-display
                  font-bold
                  text-white
                  text-xl
                  sm:text-2xl
                "
              >
                Experience {project.name}
              </p>
            </div>

            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2
                bg-emerald-600
                hover:bg-emerald-500
                text-white
                rounded-full
                px-6
                py-3.5
                font-body
                font-semibold
                text-sm
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              Visit Live Project

              <ExternalLink
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* =========================================================
   WORK CARD
========================================================= */

function WorkCard({ work, onViewProject, index }) {
  /* Different movement for each project */

  const projectMotion = [
    {
      y: [-3, 3, -3],
      rotate: [0, 0.25, 0],
    },
    {
      y: [3, -3, 3],
      rotate: [0, -0.25, 0],
    },
    {
      y: [-2, 4, -2],
      rotate: [0, 0.3, 0],
    },
  ][index % 3];

  const imageMotion = [
    {
      x: [0, 8, -5, 0],
      scale: [1, 1.025, 1.01, 1],
    },
    {
      x: [0, -8, 5, 0],
      scale: [1.01, 1.03, 1.015, 1],
    },
    {
      x: [0, 6, -7, 0],
      scale: [1, 1.02, 1.035, 1],
    },
  ][index % 3];

  const imageBlock = (
    <motion.div
      className="
        group
        relative
        w-[42%]
        sm:w-[44%]
        lg:w-7/12
        h-[230px]
        sm:h-[280px]
        md:h-[360px]
        lg:h-[450px]
        shrink-0
        rounded-xl
        overflow-hidden
        shadow-[0px_30px_70px_0px_rgba(19,20,15,0.12)]
      "
    >
      {/* IMAGE */}

      <motion.img
        src={work.image}
        alt={work.name}
        animate={imageMotion}
        transition={{
          duration: 9 + index * 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          w-full
          h-full
          object-cover

          transition-transform
          duration-[1200ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]

          group-hover:scale-110
        "
      />

      {/* IMAGE DARK DEPTH */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none

          bg-gradient-to-br
          from-emerald-950/10
          via-transparent
          to-emerald-950/20

          opacity-60
          group-hover:opacity-30

          transition-opacity
          duration-700
        "
      />

      {/* MOVING IMAGE LIGHT */}

      <motion.div
        className="
          absolute
          top-[-20%]
          left-[-40%]
          w-[45%]
          h-[140%]

          pointer-events-none

          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent

          blur-[15px]
          rotate-[20deg]
        "
        animate={{
          x: ["0%", "420%"],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatDelay: 3 + index,
          ease: "linear",
        }}
      />

      {/* IMAGE BORDER */}

      <motion.div
        className="
          absolute
          inset-0
          rounded-xl
          pointer-events-none

          border
          border-white/10
        "
        animate={{
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 3 + index,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );

  const textBlock = (
    <motion.div
      className="
        relative
        w-[58%]
        sm:w-[56%]
        lg:w-5/12
        min-w-0

        backdrop-blur-[5px]

        bg-[#f5faf7]/90

        rounded-xl

        p-4
        sm:p-5
        md:p-7
        lg:p-8

        flex
        flex-col
        justify-center

        overflow-hidden
      "
    >
      {/* TEXT CARD MOVING GLOW */}

      <motion.div
        className="
          absolute
          w-32
          h-32

          rounded-full

          bg-emerald-400/10

          blur-[45px]

          pointer-events-none
        "
        animate={{
          x: ["-20%", "120%", "-20%"],
          y: ["20%", "60%", "20%"],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 10 + index * 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* TOP LINE */}

      <motion.div
        className="
          absolute
          top-0
          left-0
          h-[2px]
          bg-emerald-500
        "
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "100%",
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
          delay: 0.3 + index * 0.15,
          ease: [0.16, 1, 0.3, 1],
        }}
      />

      <div className="relative z-10">
        <motion.p
          initial={{
            opacity: 0,
            x: -15,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="
            font-body
            text-emerald-800
            text-[9px]
            sm:text-[10px]
            md:text-xs
            tracking-[1px]
            md:tracking-[1.2px]
            uppercase
            mb-1
            sm:mb-2
          "
        >
          {work.tag}
        </motion.p>

        <motion.h3
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
            duration: 0.7,
            delay: 0.25,
          }}
          className="
            font-display
            font-bold
            text-ink
            text-2xl
            sm:text-3xl
            md:text-4xl
            tracking-[-0.8px]
            mb-2
            sm:mb-3
          "
        >
          {work.name}
        </motion.h3>

        <motion.p
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
            duration: 0.7,
            delay: 0.35,
          }}
          className="
            font-body
            text-clay
            text-[10px]
            sm:text-xs
            md:text-base
            leading-[1.45]
            md:leading-6
            mb-3
            sm:mb-4
            md:mb-6
            line-clamp-4
            md:line-clamp-none
          "
        >
          {work.desc}
        </motion.p>

        {/* TAGS */}

        <div
          className="
            flex
            flex-wrap
            gap-1
            sm:gap-2
            mb-3
            sm:mb-4
            md:mb-6
          "
        >
          {work.tags.map((tag, tagIndex) => (
            <motion.span
              key={tag}
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.4,
                delay: 0.45 + tagIndex * 0.08,
              }}
              whileHover={{
                y: -2,
                scale: 1.05,
              }}
              className="
                bg-emerald-50
                text-emerald-800
                font-body
                font-bold
                text-[7px]
                sm:text-[9px]
                md:text-xs
                rounded-full
                px-2
                sm:px-2.5
                md:px-3
                py-1
                whitespace-nowrap
                transition-colors
                duration-300
                hover:bg-emerald-100
              "
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* BUTTON */}

        <motion.button
          type="button"
          onClick={() => onViewProject(work)}
          initial={{
            opacity: 0,
            y: 10,
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
            delay: 0.55,
          }}
          className="
            group/link
            inline-flex
            items-center
            gap-2
            w-fit
            font-body
            font-bold
            text-emerald-800
            hover:text-emerald-900
            text-[10px]
            sm:text-xs
            md:text-base
            transition-all
            duration-300
          "
        >
          View Project

          <motion.span
            whileHover={{
              scale: 1.12,
              rotate: 5,
            }}
            className="
              flex
              items-center
              justify-center
              w-6
              h-6
              rounded-full
              bg-emerald-100
              transition-all
              duration-300
              group-hover/link:bg-emerald-800
            "
          >
            <img
              src={linkArrow}
              alt=""
              className="
                w-3
                sm:w-4
                h-auto

                transition-all
                duration-300

                group-hover/link:translate-x-0.5
              "
            />
          </motion.span>
        </motion.button>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      animate={projectMotion}
      transition={{
        duration: 7 + index * 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        y: -7,
        rotateX: 1,
        rotateY: index % 2 === 0 ? -1 : 1,
      }}
      style={{
        transformPerspective: 1200,
      }}
      className="
        flex
        flex-row
        gap-2
        sm:gap-4
        md:gap-6
        lg:gap-8
        items-stretch
        w-full
      "
    >
      {/* MOBILE */}

      <div className="contents lg:hidden">
        {textBlock}
        {imageBlock}
      </div>

      {/* DESKTOP */}

      <div
        className="
          hidden
          lg:flex
          lg:flex-row
          lg:gap-8
          lg:items-stretch
          lg:w-full
        "
      >
        {work.imageSide === "left" ? (
          <>
            {imageBlock}
            {textBlock}
          </>
        ) : (
          <>
            {textBlock}
            {imageBlock}
          </>
        )}
      </div>
    </motion.div>
  );
}

/* =========================================================
   HOME
========================================================= */

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const openProject = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  return (
    <div
      className="
        min-h-screen
        w-full
        bg-white
        overflow-x-hidden
      "
    >
      <Navbar />

      {/* =================================================
          MAIN
      ================================================= */}

      <main
        className="
          w-full
          flex
          flex-col
          items-stretch
          gap-0
          pt-0
          pb-0
          
          overflow-x-hidden
        "
      >
        {/* =================================================
            HERO SECTION
        ================================================= */}

       <section
  className="
    relative
    mx-0
    mt-0
    mb-0
    min-h-[300px]
    w-full
    max-w-none
    overflow-hidden
    rounded-none
    p-0
    sm:min-h-[500px]
    lg:min-h-[600px]
  "
>
  {/* BACKGROUND VIDEO */}
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    className="
      absolute
      inset-0
      h-full
      w-full
      object-cover
    "
  >
    <source src="/videos/services.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* SOFT BASE COLOR */}
  <div className="absolute inset-0 bg-indigo-950/25" />

  {/* PURPLE-CYAN GRADIENT OVERLAY */}
  <div
    className="
      pointer-events-none
      absolute
      inset-0
      bg-gradient-to-r
      from-[#171044]/95
      via-[#312E81]/65
      via-[#6D28D9]/35
      to-[#0891B2]/10
      sm:from-[#171044]/90
      sm:via-[#312E81]/55
      sm:via-[#6D28D9]/25
      sm:to-[#0891B2]/5
    "
  />

  {/* SECONDARY BLUE DEPTH */}
  <div
    className="
      pointer-events-none
      absolute
      inset-0
      bg-gradient-to-t
      from-[#0F172A]/60
      via-transparent
      to-[#1E1B4B]/25
    "
  />

  {/* HERO CONTENT */}
  <div
    className="
      relative
      z-10
      flex
      min-h-[300px]
      w-full
      items-center
      px-4
      sm:min-h-[500px]
      sm:px-8
      md:px-12
      lg:min-h-[600px]
      lg:px-20
    "
  >
    {/* PURPLE GLOW */}
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.15, 0.35, 0.15],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        pointer-events-none
        absolute
        -left-8
        top-1/3
        h-24
        w-24
        rounded-full
        bg-fuchsia-300/25
        blur-[60px]
        sm:-left-10
        sm:h-48
        sm:w-48
        sm:blur-[100px]
      "
    />

    {/* CYAN GLOW */}
    <motion.div
      animate={{
        x: [0, 30, 0],
        scale: [1, 1.15, 1],
        opacity: [0.1, 0.25, 0.1],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        pointer-events-none
        absolute
        right-[-80px]
        top-1/4
        h-40
        w-40
        rounded-full
        bg-cyan-300/20
        blur-[80px]
        sm:h-72
        sm:w-72
        sm:blur-[120px]
      "
    />

    {/* CONTENT */}
    <div className="w-full lg:w-10/12">
      <p
        className="
          relative
          font-display
          text-[25px]
          font-bold
          leading-[1.02]
          tracking-[-1px]
          text-white
          drop-shadow-[0_5px_18px_rgba(0,0,0,0.30)]
          sm:text-[64px]
          sm:tracking-[-2px]
          lg:text-[96px]
          lg:tracking-[-4.8px]
        "
      >
        WE BUILD{" "}

        <span className="group relative inline-block cursor-default">
          {/* Gradient Glow */}
          <span
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-fuchsia-300
              via-purple-300
              to-cyan-300
              bg-clip-text
              text-transparent
              opacity-70
              blur-[7px]
              transition-all
              duration-500
              group-hover:blur-[20px]
              group-hover:opacity-100
              sm:blur-[13px]
            "
          >
            DIGITAL EXPERIENCES
          </span>

          {/* Gradient Text */}
          <span
            className="
              relative
              bg-gradient-to-r
              from-fuchsia-300
              via-purple-300
              to-cyan-300
              bg-clip-text
              text-transparent
              drop-shadow-[0_4px_16px_rgba(0,0,0,0.35)]
              transition-all
              duration-500
              group-hover:from-fuchsia-200
              group-hover:via-purple-200
              group-hover:to-cyan-200
            "
          >
            DIGITAL EXPERIENCES
          </span>
        </span>{" "}

        <span
          className="
            text-white
            drop-shadow-[0_5px_18px_rgba(0,0,0,0.30)]
          "
        >
          THAT MOVE BUSINESS FORWARD.
        </span>
      </p>
    </div>
  </div>
</section>

        {/* =================================================
            STATS SECTION
        ================================================= */}

     <section
  className="
    relative
    mx-auto
    mt-10
    mb-10
    min-h-[300px]
    w-[calc(100%-24px)]
    max-w-[1120px]
    overflow-hidden
    rounded-2xl
    bg-gradient-to-br
    from-[#120B2E]
    via-[#24104F]
    to-[#071A3D]
    px-4
    py-10
    sm:w-full
    sm:rounded-3xl
    sm:px-6
    sm:py-14
    md:px-8
    md:py-16
  "
>
  {/* BACKGROUND GLOW - PURPLE */}

  <motion.div
    className="
      pointer-events-none
      absolute
      -left-32
      -top-32
      h-[350px]
      w-[350px]
      rounded-full
      bg-fuchsia-500/20
      blur-[100px]
      sm:h-[500px]
      sm:w-[500px]
    "
    animate={{
      x: [0, 120, 40, 0],
      y: [0, 80, -20, 0],
      scale: [1, 1.2, 0.9, 1],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* BACKGROUND GLOW - BLUE */}

  <motion.div
    className="
      pointer-events-none
      absolute
      -bottom-40
      -right-40
      h-[400px]
      w-[400px]
      rounded-full
      bg-cyan-400/20
      blur-[120px]
      sm:h-[550px]
      sm:w-[550px]
    "
    animate={{
      x: [0, -100, -30, 0],
      y: [0, -100, 50, 0],
      scale: [1, 0.85, 1.15, 1],
    }}
    transition={{
      duration: 15,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* CENTER GLOW - PINK */}

  <motion.div
    className="
      pointer-events-none
      absolute
      left-[45%]
      top-[35%]
      h-[180px]
      w-[180px]
      rounded-full
      bg-pink-400/15
      blur-[90px]
      sm:h-[280px]
      sm:w-[280px]
    "
    animate={{
      x: [-50, 80, -20, -50],
      y: [20, -60, 40, 20],
      opacity: [0.3, 0.7, 0.25, 0.3],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* MOVING LIGHT */}

  <motion.div
    className="
      pointer-events-none
      absolute
      left-[-40%]
      top-0
      h-full
      w-[35%]
      skew-x-[-20deg]
      bg-gradient-to-r
      from-transparent
      via-cyan-300/10
      to-transparent
      blur-[20px]
    "
    animate={{
      x: ["0%", "420%"],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "linear",
    }}
  />

  {/* DOT GRID */}

  <div
    className="
      pointer-events-none
      absolute
      inset-0
      bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.8)_1px,transparent_0)]
      [background-size:24px_24px]
      opacity-[0.08]
    "
  />

  {/* DARK DEPTH OVERLAY */}

  <div
    className="
      pointer-events-none
      absolute
      inset-0
      bg-gradient-to-b
      from-black/10
      via-transparent
      to-black/25
    "
  />

  <div className="relative z-10">
    {/* HEADING */}

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
        amount: 0.3,
      }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="mb-5 text-center sm:mb-8 md:mb-10"
    >
      <p
        className="
          mb-1.5
          font-body
          text-[9px]
          font-semibold
          uppercase
          tracking-[2px]
          text-cyan-300
          sm:mb-2
          sm:text-[11px]
          sm:tracking-[3px]
          md:text-xs
        "
      >
        Our Track Record
      </p>

      <h2
        className="
          font-display
          text-[22px]
          font-bold
          leading-tight
          tracking-[-0.5px]
          text-white
          sm:text-3xl
          sm:tracking-[-1px]
          md:text-4xl
        "
      >
        Built on Experience.{" "}
        <span
          className="
            bg-gradient-to-r
            from-fuchsia-300
            via-purple-300
            to-cyan-300
            bg-clip-text
            text-transparent
          "
        >
          Driven by Results.
        </span>
      </h2>
    </motion.div>

    <div className="mb-3 h-px w-full bg-white/15 sm:mb-8" />

    {/* STATS */}

    <div className="grid w-full grid-cols-3 gap-2 sm:gap-4 md:gap-5">
      {STATS.map((stat, index) => {
        const boxColors = [
          {
            value: "text-fuchsia-300",
            border: "group-hover:border-fuchsia-300/60",
            glow: "group-hover:bg-fuchsia-400/10",
            accent: "from-fuchsia-400/20",
          },
          {
            value: "text-cyan-300",
            border: "group-hover:border-cyan-300/60",
            glow: "group-hover:bg-cyan-400/10",
            accent: "from-cyan-400/20",
          },
          {
            value: "text-amber-300",
            border: "group-hover:border-amber-300/60",
            glow: "group-hover:bg-amber-400/10",
            accent: "from-amber-400/20",
          },
        ];

        const color = boxColors[index % boxColors.length];

        return (
          <motion.div
            key={stat.label}
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="min-w-0 w-full"
          >
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{
                duration: 0.35,
              }}
              className="group relative w-full cursor-default overflow-hidden rounded-lg p-[1px] sm:rounded-2xl"
            >
              {/* Colored Border */}
              <div
                className={`
                  absolute
                  inset-0
                  rounded-lg
                  border
                  border-white/10
                  transition-colors
                  duration-500
                  sm:rounded-2xl
                  ${color.border}
                `}
              />

              {/* Colored Hover Glow */}
              <div
                className={`
                  absolute
                  inset-0
                  rounded-lg
                  bg-transparent
                  blur-xl
                  transition-all
                  duration-500
                  sm:rounded-2xl
                  ${color.glow}
                `}
              />

              {/* Box Content */}
              <div
                className="
                  relative
                  z-[1]
                  h-full
                  w-full
                  overflow-hidden
                  rounded-[7px]
                  bg-white/[0.06]
                  px-1.5
                  py-4
                  backdrop-blur-[6px]
                  transition-all
                  duration-500
                  group-hover:bg-white/[0.10]
                  sm:rounded-[15px]
                  sm:px-5
                  sm:py-7
                  md:px-6
                  md:py-8
                "
              >
                {/* Top Accent */}
                <div
                  className={`
                    absolute
                    left-0
                    right-0
                    top-0
                    h-[2px]
                    bg-gradient-to-r
                    ${color.accent}
                    via-transparent
                    to-transparent
                    opacity-80
                  `}
                />

                <p
                  className={`
                    relative
                    z-10
                    origin-left
                    whitespace-nowrap
                    font-display
                    text-[25px]
                    font-bold
                    leading-none
                    tracking-[-1px]
                    transition-transform
                    duration-500
                    group-hover:scale-[1.04]
                    sm:text-5xl
                    sm:tracking-[-2px]
                    md:text-6xl
                    md:tracking-[-3px]
                    lg:text-7xl
                    ${color.value}
                  `}
                >
                  {stat.value}
                </p>

                <p
                  className="
                    relative
                    z-10
                    mt-1
                    whitespace-nowrap
                    font-display
                    text-[6px]
                    font-bold
                    uppercase
                    tracking-[0.3px]
                    text-white/60
                    transition-colors
                    duration-300
                    group-hover:text-white
                    sm:mt-3
                    sm:text-[10px]
                    sm:tracking-[1px]
                    md:mt-4
                    md:text-xs
                    md:tracking-[1.8px]
                  "
                >
                  {stat.label}
                </p>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>

        {/* =================================================
            SELECTED WORKS
        ================================================= */}

       <section
  className="
    relative
    mx-0
    w-full
    max-w-none
    overflow-hidden
    bg-gradient-to-br
    from-[#090B2A]
    via-[#21104D]
    to-[#062C4F]
    px-4
    py-12
    sm:px-6
    sm:py-16
    md:px-12
    md:py-20
    lg:px-16
    lg:py-24
    xl:px-20
  "
>
  {/* =================================================
      CONTINUOUS MULTI-COLOR BACKGROUND
  ================================================= */}

  <motion.div
    className="
      pointer-events-none
      absolute
      inset-0
      bg-[radial-gradient(circle_at_20%_20%,rgba(217,70,239,0.22),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(6,182,212,0.20),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(99,102,241,0.18),transparent_40%)]
    "
    animate={{
      backgroundPosition: [
        "0% 0%, 100% 100%, 50% 100%",
        "30% 20%, 70% 80%, 30% 70%",
        "60% 0%, 20% 50%, 70% 80%",
        "0% 0%, 100% 100%, 50% 100%",
      ],
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* LEFT PINK AURORA */}

  <motion.div
    className="
      pointer-events-none
      absolute
      left-[-15%]
      top-[-20%]
      h-[500px]
      w-[500px]
      rounded-full
      bg-fuchsia-500/20
      blur-[120px]
      sm:h-[700px]
      sm:w-[700px]
      lg:h-[900px]
      lg:w-[900px]
    "
    animate={{
      x: [0, 180, 80, -40, 0],
      y: [0, 120, 220, 80, 0],
      scale: [1, 1.2, 0.9, 1.15, 1],
      opacity: [0.25, 0.45, 0.3, 0.4, 0.25],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* RIGHT CYAN AURORA */}

  <motion.div
    className="
      pointer-events-none
      absolute
      right-[-20%]
      top-[15%]
      h-[450px]
      w-[450px]
      rounded-full
      bg-cyan-400/20
      blur-[130px]
      sm:h-[650px]
      sm:w-[650px]
      lg:h-[850px]
      lg:w-[850px]
    "
    animate={{
      x: [0, -180, -80, 100, 0],
      y: [0, 160, -80, 100, 0],
      scale: [1, 0.85, 1.2, 0.95, 1],
      opacity: [0.2, 0.4, 0.25, 0.45, 0.2],
    }}
    transition={{
      duration: 23,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* CENTER PURPLE LIGHT */}

  <motion.div
    className="
      pointer-events-none
      absolute
      left-[35%]
      top-[35%]
      h-[300px]
      w-[300px]
      rounded-full
      bg-violet-400/15
      blur-[100px]
      sm:h-[450px]
      sm:w-[450px]
    "
    animate={{
      x: [-100, 120, -50, 80, -100],
      y: [50, -80, 120, -40, 50],
      scale: [1, 1.25, 0.8, 1.15, 1],
      opacity: [0.15, 0.35, 0.15, 0.3, 0.15],
    }}
    transition={{
      duration: 16,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* LIGHT BEAM */}

  <motion.div
    className="
      pointer-events-none
      absolute
      left-[-20%]
      top-[-50%]
      h-[200%]
      w-[35%]
      rotate-[20deg]
      bg-gradient-to-r
      from-transparent
      via-fuchsia-300/[0.07]
      to-transparent
      blur-[25px]
    "
    animate={{
      x: ["0%", "350%"],
    }}
    transition={{
      duration: 14,
      repeat: Infinity,
      ease: "linear",
    }}
  />

  {/* SECOND LIGHT BEAM */}

  <motion.div
    className="
      pointer-events-none
      absolute
      left-[-30%]
      top-[-50%]
      h-[200%]
      w-[20%]
      rotate-[-18deg]
      bg-gradient-to-r
      from-transparent
      via-cyan-200/[0.06]
      to-transparent
      blur-[30px]
    "
    animate={{
      x: ["0%", "500%"],
    }}
    transition={{
      duration: 22,
      repeat: Infinity,
      ease: "linear",
      delay: 5,
    }}
  />

  {/* DOT FIELD */}

  <motion.div
    className="
      pointer-events-none
      absolute
      inset-0
      bg-[radial-gradient(circle_at_1px_1px,rgba(165,180,252,0.55)_1px,transparent_0)]
      [background-size:32px_32px]
      opacity-[0.12]
    "
    animate={{
      backgroundPosition: [
        "0px 0px",
        "32px 32px",
        "0px 64px",
        "32px 96px",
        "0px 0px",
      ],
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "linear",
    }}
  />

  {/* VIGNETTE */}

  <div
    className="
      pointer-events-none
      absolute
      inset-0
      bg-gradient-to-b
      from-black/10
      via-transparent
      to-black/35
    "
  />

  {/* CONTENT */}

  <div className="relative z-10">
    {/* HEADING */}

    <motion.div
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="mb-10 sm:mb-14 md:mb-16 lg:mb-20"
    >
      <motion.p
        animate={{
          opacity: [0.65, 1, 0.65],
          textShadow: [
            "0 0 0px rgba(34,211,238,0)",
            "0 0 15px rgba(34,211,238,0.6)",
            "0 0 0px rgba(34,211,238,0)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          mb-2
          font-body
          text-[9px]
          font-semibold
          uppercase
          tracking-[2px]
          text-cyan-300
          sm:mb-3
          sm:text-xs
          sm:tracking-[3px]
        "
      >
        Our Portfolio
      </motion.p>

      <motion.h2
        animate={{
          textShadow: [
            "0 0 0px rgba(217,70,239,0)",
            "0 0 20px rgba(217,70,239,0.12)",
            "0 0 0px rgba(217,70,239,0)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          font-display
          text-[34px]
          font-bold
          leading-[0.95]
          tracking-[-1.5px]
          text-white
          sm:text-5xl
          sm:tracking-[-2px]
          md:text-6xl
          lg:text-[80px]
          lg:tracking-[-2.4px]
        "
      >
        Selected{" "}

        <motion.span
          animate={{
            textShadow: [
              "0 0 0px rgba(34,211,238,0)",
              "0 0 10px rgba(34,211,238,0.35)",
              "0 0 25px rgba(34,211,238,0.65)",
              "0 0 10px rgba(34,211,238,0.35)",
              "0 0 0px rgba(34,211,238,0)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            inline-block
            bg-gradient-to-r
            from-fuchsia-300
            via-purple-300
            to-cyan-300
            bg-clip-text
            text-transparent
          "
        >
          Works
        </motion.span>
      </motion.h2>

      <motion.div
        initial={{
          width: 0,
          opacity: 0,
        }}
        whileInView={{
          width: 60,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: "easeOut",
        }}
        className="
          mt-4
          h-[2px]
          rounded-full
          bg-gradient-to-r
          from-fuchsia-400
          via-purple-400
          to-cyan-400
          shadow-[0_0_15px_rgba(168,85,247,0.65)]
          sm:mt-6
        "
      />
    </motion.div>

    {/* PROJECTS */}

    <div className="flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-28">
      {WORKS.map((work, index) => {
        const projectColors = [
          {
            border:
              "bg-[conic-gradient(from_0deg,transparent_0deg,#D946EF_70deg,#A855F7_110deg,transparent_170deg,transparent_245deg,#7C3AED_300deg,#C084FC_330deg,transparent_360deg)]",
            rotating:
              "bg-[conic-gradient(from_0deg,transparent_0deg,rgba(217,70,239,0.8)_35deg,transparent_75deg,transparent_180deg,rgba(168,85,247,0.7)_220deg,transparent_260deg,transparent_360deg)]",
            glow: "hover:shadow-[0_0_60px_rgba(217,70,239,0.28)]",
            inner: "bg-fuchsia-400/[0.07]",
          },
          {
            border:
              "bg-[conic-gradient(from_0deg,transparent_0deg,#22D3EE_70deg,#06B6D4_110deg,transparent_170deg,transparent_245deg,#0891B2_300deg,#67E8F9_330deg,transparent_360deg)]",
            rotating:
              "bg-[conic-gradient(from_0deg,transparent_0deg,rgba(34,211,238,0.8)_35deg,transparent_75deg,transparent_180deg,rgba(6,182,212,0.7)_220deg,transparent_260deg,transparent_360deg)]",
            glow: "hover:shadow-[0_0_60px_rgba(34,211,238,0.28)]",
            inner: "bg-cyan-400/[0.07]",
          },
          {
            border:
              "bg-[conic-gradient(from_0deg,transparent_0deg,#FBBF24_70deg,#F59E0B_110deg,transparent_170deg,transparent_245deg,#D97706_300deg,#FDE68A_330deg,transparent_360deg)]",
            rotating:
              "bg-[conic-gradient(from_0deg,transparent_0deg,rgba(251,191,36,0.8)_35deg,transparent_75deg,transparent_180deg,rgba(245,158,11,0.7)_220deg,transparent_260deg,transparent_360deg)]",
            glow: "hover:shadow-[0_0_60px_rgba(251,191,36,0.25)]",
            inner: "bg-amber-400/[0.07]",
          },
        ];

        const color = projectColors[index % projectColors.length];

        return (
          <motion.div
            key={work.id}
            initial={{
              opacity: 0,
              y: 70,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative w-full"
          >
            {/* PROJECT NUMBER */}

            <motion.div
              initial={{
                opacity: 0,
                x: -20,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1 + 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`
                absolute
                left-1
                top-[-24px]
                z-30
                select-none
                font-display
                text-[15px]
                font-bold
                leading-none
                tracking-[-0.5px]
                sm:left-0
                sm:top-[-36px]
                sm:text-xl
                sm:tracking-[-1px]
                md:top-[-44px]
                md:text-3xl
                lg:top-[-56px]
                lg:text-4xl
                ${
                  index % 3 === 0
                    ? "text-fuchsia-300"
                    : index % 3 === 1
                      ? "text-cyan-300"
                      : "text-amber-300"
                }
              `}
            >
              <motion.span
                animate={{
                  opacity: [0.6, 1, 0.6],
                  textShadow: [
                    "0 0 0px rgba(255,255,255,0)",
                    "0 0 10px rgba(255,255,255,0.45)",
                    "0 0 20px rgba(255,255,255,0.7)",
                    "0 0 10px rgba(255,255,255,0.45)",
                    "0 0 0px rgba(255,255,255,0)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                0{index + 1}
              </motion.span>
            </motion.div>

            {/* PROJECT BORDER */}

            <motion.div
              className={`
                relative
                w-full
                overflow-hidden
                rounded-[15px]
                p-[1px]
                sm:rounded-[19px]
                sm:p-[1.5px]
                md:rounded-[21px]
                ${color.border}
              `}
            >
              {/* ROTATING BORDER */}

              <motion.div
                className={`
                  pointer-events-none
                  absolute
                  inset-[-40%]
                  blur-[2px]
                  ${color.rotating}
                `}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 5 + index * 1.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.4,
                }}
              />

              {/* PROJECT CARD */}

              <motion.div
                className={`
                  relative
                  z-10
                  w-full
                  overflow-hidden
                  rounded-[14px]
                  bg-slate-950/95
                  shadow-[0_10px_35px_rgba(15,23,42,0.25)]
                  transition-all
                  duration-500
                  sm:rounded-[18px]
                  md:rounded-[20px]
                  ${color.glow}
                `}
              >
                {/* CARD GLOW BORDER */}

                <motion.div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-20
                    rounded-[14px]
                    border
                    border-white/15
                    sm:rounded-[18px]
                    md:rounded-[20px]
                  "
                  animate={{
                    opacity: [0.25, 0.8, 0.25],
                  }}
                  transition={{
                    duration: 3.5 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                />

                {/* CARD INNER GLOW */}

                <motion.div
                  className={`
                    pointer-events-none
                    absolute
                    inset-0
                    z-[2]
                    bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.10),transparent_55%)]
                    ${color.inner}
                  `}
                  animate={{
                    scale: [0.9, 1.1, 0.9],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 7 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <WorkCard
                  work={work}
                  index={index}
                  onViewProject={openProject}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>

        {/* =================================================
            CTA
        ================================================= */}

        <section
  className="
    mt-10
    w-full
    max-w-[1120px]
    mx-auto
    relative
    overflow-hidden
    rounded-xl
    sm:rounded-2xl
    shadow-[0px_40px_100px_0px_rgba(91,33,182,0.18)]
    bg-gradient-to-br
    from-[#10002B]
    via-[#240046]
    to-[#003566]
    px-4
    py-8
    sm:px-8
    sm:py-12
    md:px-20
    md:py-20
    lg:px-44
    flex
    flex-col
    items-center
    text-center
    gap-3
    sm:gap-5
    md:gap-6
    border
    border-fuchsia-400/20
  "
>
  {/* TOP NEON GLOW */}

  <motion.div
    animate={{
      x: [0, 35, 0],
      y: [0, 25, 0],
      scale: [1, 1.2, 1],
      opacity: [0.45, 0.8, 0.45],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      pointer-events-none
      absolute
      -top-20
      -right-20
      w-48
      h-48
      sm:-top-28
      sm:right-[-90px]
      sm:w-72
      sm:h-72
      rounded-full
      bg-fuchsia-500/30
      blur-[75px]
      sm:blur-[110px]
    "
  />

  {/* BOTTOM NEON GLOW */}

  <motion.div
    animate={{
      x: [0, -35, 0],
      y: [0, -25, 0],
      scale: [1, 1.2, 1],
      opacity: [0.4, 0.75, 0.4],
    }}
    transition={{
      duration: 9,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      pointer-events-none
      absolute
      -bottom-20
      -left-20
      w-48
      h-48
      sm:-bottom-28
      sm:left-[-90px]
      sm:w-72
      sm:h-72
      rounded-full
      bg-cyan-400/30
      blur-[75px]
      sm:blur-[110px]
    "
  />

  {/* CENTER NEON LIGHT */}

  <motion.div
    animate={{
      scale: [1, 1.15, 1],
      opacity: [0.2, 0.45, 0.2],
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      pointer-events-none
      absolute
      top-1/2
      left-1/2
      -translate-x-1/2
      -translate-y-1/2
      w-72
      h-72
      sm:w-[420px]
      sm:h-[420px]
      rounded-full
      bg-violet-500/20
      blur-[100px]
      sm:blur-[140px]
    "
  />

  {/* NEON ORB 1 */}

  <motion.div
    animate={{
      y: [0, -18, 0],
      rotate: [0, 180, 360],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
      pointer-events-none
      absolute
      top-10
      left-[12%]
      w-3
      h-3
      sm:w-5
      sm:h-5
      rounded-full
      bg-fuchsia-400
      shadow-[0_0_20px_6px_rgba(232,121,249,0.75)]
    "
  />

  {/* NEON ORB 2 */}

  <motion.div
    animate={{
      y: [0, 20, 0],
      rotate: [360, 180, 0],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
      pointer-events-none
      absolute
      bottom-12
      right-[15%]
      w-3
      h-3
      sm:w-5
      sm:h-5
      rounded-full
      bg-cyan-300
      shadow-[0_0_20px_6px_rgba(103,232,249,0.75)]
    "
  />

  {/* HEADING */}

  <motion.h2
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
      amount: 0.3,
    }}
    transition={{
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    }}
    className="
      relative
      z-10
      font-display
      font-bold
      text-white
      text-[25px]
      sm:text-4xl
      md:text-6xl
      lg:text-[80px]
      leading-[1.05]
      tracking-[-1px]
      sm:tracking-[-1.5px]
      md:tracking-[-2.4px]
      drop-shadow-[0_0_18px_rgba(217,70,239,0.28)]
    "
  >
    Ready to{" "}
    <span
      className="
        bg-gradient-to-r
        from-fuchsia-400
        via-violet-400
        to-cyan-300
        bg-clip-text
        text-transparent
        drop-shadow-[0_0_25px_rgba(34,211,238,0.2)]
      "
    >
      elevate
    </span>{" "}
    your digital presence?
  </motion.h2>

  {/* DESCRIPTION */}

  <p
    className="
      relative
      z-10
      font-body
      text-slate-200
      text-[11px]
      sm:text-base
      md:text-xl
      leading-relaxed
      max-w-[520px]
      sm:max-w-[650px]
    "
  >
    Partner with us to create experiences that resonate and perform.
  </p>

  {/* BUTTON */}

  <motion.a
    href="/contact#contact-form"
    whileHover={{
      y: -4,
      scale: 1.04,
    }}
    whileTap={{
      scale: 0.97,
    }}
    className="
      relative
      z-10
      inline-flex
      items-center
      justify-center
      bg-gradient-to-r
      from-fuchsia-500
      via-violet-500
      to-cyan-400
      hover:from-fuchsia-400
      hover:via-violet-400
      hover:to-cyan-300
      transition-all
      duration-300
      text-white
      font-display
      font-bold
      text-[11px]
      sm:text-base
      md:text-xl
      tracking-[-0.3px]
      sm:tracking-[-0.5px]
      rounded-full
      px-4
      py-2.5
      sm:px-7
      sm:py-3.5
      md:px-8
      md:py-4
      border
      border-white/20
      shadow-[0_0_25px_rgba(217,70,239,0.35),0_0_45px_rgba(34,211,238,0.2)]
      hover:shadow-[0_0_35px_rgba(217,70,239,0.55),0_0_65px_rgba(34,211,238,0.35)]
    "
  >
    Start a Conversation
  </motion.a>
</section>

        {/* BOTTOM SPACING */}

        <div
          className="
            h-10
            sm:h-14
            md:h-16
          "
        />
      </main>

      {/* FOOTER */}

      <Footer />

      {/* PROJECT MODAL */}

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={closeProject}
          />
        )}
      </AnimatePresence>
    </div>
  );
}