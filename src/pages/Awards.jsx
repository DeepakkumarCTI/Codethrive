import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, Sparkles } from "lucide-react";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

import event1 from "../assets/images/event-1.jpg";
import event2 from "../assets/images/event-2.jpg";
import event3 from "../assets/images/event-3.jpg";
import event4 from "../assets/images/event-4.jpg";
import event5 from "../assets/images/event-5.jpg";
import event6 from "../assets/images/event-6.jpg";
import event7 from "../assets/images/event-7.jpg";
import event8 from "../assets/images/event-8.jpg";


const eventImages = [
  {
    id: 1,
    title: "Company Annual Meet",
    category: "Corporate Events",
    image: event2,
  },
  {
    id: 2,
    title: "Company",
    category: "Team Activities",
    image: event1,
  },
  {
    id: 3,
    title: "Client Meeting",
    category: "Client Meetings",
    image: event3,
  },
  {
    id: 4,
    title: "Waiting Area",
    category: "For Customer",
    image: event4,
  },
  {
    id: 5,
    title: "CEO Cabin",
    category: "Headquarters",
    image: event5,
  },
  {
    id: 6,
    title: "Professional Workshop",
    category: "Learning",
    image: event6,
  },
  {
    id: 7,
    title: "Working Space",
    category: "Work",
    image: event7,
  },
  {
    id: 8,
    title: "Award Ceremony",
    category: "Achievements",
    image: event8,
  },
  
];



export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeCategory === "All"
      ? eventImages
      : eventImages.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-[#f8f7ff] via-[#eefaff] to-[#fff1fb] text-slate-900">
      <Navbar />

      <main>
        {/* Hero Section */}
       <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden bg-gradient-to-br from-[#080b1f] via-[#11142f] to-[#090d24] px-6 py-20">
  {/* Main Dark Gradient */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(217,70,239,0.24),transparent_32%),radial-gradient(circle_at_85%_25%,rgba(34,211,238,0.22),transparent_32%),radial-gradient(circle_at_50%_90%,rgba(139,92,246,0.24),transparent_38%)]" />

  {/* Soft Grid Pattern */}
  <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:45px_45px]" />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-[#050816]/35" />

  {/* Animated Neon Orbs */}
  <motion.div
    animate={{
      x: [0, 80, -40, 0],
      y: [0, -50, 40, 0],
      scale: [1, 1.2, 0.9, 1],
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute left-[8%] top-[20%] h-48 w-48 rounded-full bg-fuchsia-500/25 blur-[100px]"
  />

  <motion.div
    animate={{
      x: [0, -70, 50, 0],
      y: [0, 50, -30, 0],
      scale: [1, 0.85, 1.15, 1],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute right-[10%] top-[25%] h-56 w-56 rounded-full bg-cyan-400/25 blur-[110px]"
  />

  <motion.div
    animate={{
      x: [0, 50, -60, 0],
      scale: [1, 1.15, 0.9, 1],
    }}
    transition={{
      duration: 16,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute bottom-[5%] left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-500/25 blur-[120px]"
  />

  {/* Rotating Rings */}
  <motion.div
    animate={{ rotate: 360 }}
    transition={{
      duration: 45,
      repeat: Infinity,
      ease: "linear",
    }}
    className="absolute left-[-180px] top-1/2 h-[420px] w-[420px] rounded-full border border-fuchsia-400/25"
  />

  <motion.div
    animate={{ rotate: -360 }}
    transition={{
      duration: 55,
      repeat: Infinity,
      ease: "linear",
    }}
    className="absolute right-[-180px] top-1/3 h-[520px] w-[520px] rounded-full border border-cyan-400/25"
  />

  {/* Hero Content */}
  <motion.div
    initial={{ opacity: 0, y: 45 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative z-10 mx-auto max-w-5xl text-center"
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mb-5 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/40 bg-white/10 px-4 py-2 text-sm text-fuchsia-200 shadow-[0_0_30px_rgba(217,70,239,0.18)] backdrop-blur-md"
    >
      <Sparkles size={16} />
      <span>Our Company Moments</span>
    </motion.div>

    <motion.p
      initial={{ opacity: 0, letterSpacing: "0.5em" }}
      animate={{ opacity: 1, letterSpacing: "0.25em" }}
      transition={{ duration: 1.2, delay: 0.3 }}
      className="mb-3 text-sm uppercase text-cyan-300/90"
    >
      Moments That Shine Forever
    </motion.p>

    <h1 className="bg-gradient-to-r from-fuchsia-300 via-violet-300 to-cyan-300 bg-clip-text text-5xl font-bold tracking-tight text-transparent drop-shadow-[0_0_25px_rgba(139,92,246,0.25)] sm:text-7xl lg:text-8xl">
      Gallery
    </h1>

    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
      Explore our company events, team activities, achievements, projects,
      celebrations, and memorable moments.
    </p>
  </motion.div>

  <div className="absolute bottom-0 left-1/2 h-px w-40 -translate-x-1/2 bg-gradient-to-r from-transparent via-fuchsia-400 to-transparent" />
</section>

       
        

        {/* Gallery Section */}
        <section className="relative mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-8 sm:py-24 lg:px-12">
  {/* Background Glow */}
  <div className="pointer-events-none absolute left-[-120px] top-24 h-72 w-72 rounded-full bg-fuchsia-300/25 blur-[130px]" />
  <div className="pointer-events-none absolute right-[-120px] top-1/2 h-80 w-80 rounded-full bg-cyan-300/25 blur-[140px]" />

  {/* Section Heading */}
  <div className="relative z-10 mb-8 sm:mb-12">
    <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-cyan-700/80 sm:mb-4 sm:text-sm sm:tracking-[0.3em]">
      Captured Moments
    </p>

    <h2 className="text-3xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl">
      Every picture
      <br />
      <span className="bg-gradient-to-r from-fuchsia-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
        tells a story.
      </span>
    </h2>

    <p className="mt-5 max-w-2xl text-xs leading-6 text-slate-600 sm:text-base sm:leading-7">
      Browse through our collection of company events, team activities,
      achievements, projects, celebrations, and memorable moments.
    </p>
  </div>

  {/* Image Grid */}
  <motion.div
    layout
    className="relative z-10 grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
  >
    <AnimatePresence mode="popLayout">
      {eventImages.map((item, index) => (
        <motion.button
          key={item.id}
          type="button"
          layout
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{
            duration: 0.5,
            delay: index * 0.04,
          }}
          onClick={() => setSelectedImage(item)}
          className={`group relative min-w-0 overflow-hidden rounded-2xl border border-white/80 bg-white/50 text-left shadow-[0_10px_35px_rgba(139,92,246,0.12)] transition duration-500 hover:border-fuchsia-400/70 hover:shadow-[0_0_35px_rgba(217,70,239,0.25)] sm:rounded-3xl ${
            index % 5 === 0
              ? "row-span-2 h-[420px] sm:h-[620px]"
              : "h-[205px] sm:h-[300px]"
          }`}
        >
          {/* Image */}
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-violet-950/85 via-violet-900/10 to-transparent opacity-85 transition duration-500 group-hover:opacity-100" />

          {/* Neon Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-transparent to-cyan-400/0 transition duration-700 group-hover:from-fuchsia-500/25 group-hover:to-cyan-400/25" />

          {/* Card Content */}
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 sm:gap-4 sm:p-6">
            <div className="min-w-0">
              <p className="mb-1 truncate text-[9px] uppercase tracking-[0.12em] text-cyan-100 sm:mb-2 sm:text-xs sm:tracking-[0.2em]">
                {item.category}
              </p>

              <h3 className="truncate text-sm font-semibold text-white sm:text-xl">
                {item.title}
              </h3>
            </div>

            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/50 bg-white/20 text-white backdrop-blur-md transition duration-300 group-hover:border-cyan-200 group-hover:bg-cyan-300 group-hover:text-violet-950 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] sm:h-11 sm:w-11">
              <Maximize2 size={14} className="sm:h-[17px] sm:w-[17px]" />
            </span>
          </div>
        </motion.button>
      ))}
    </AnimatePresence>
  </motion.div>

  {/* Empty State */}
  {eventImages.length === 0 && (
    <div className="relative z-10 py-20 text-center text-sm text-slate-500 sm:py-24">
      No images available.
    </div>
  )}
</section>

        {/* Bottom Marquee */}
        <section className="relative overflow-hidden border-y border-violet-200/70 bg-white/40 py-10 backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-300/10 via-cyan-300/10 to-violet-300/10" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="relative flex w-max gap-14 whitespace-nowrap"
          >
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-14 text-5xl font-bold uppercase tracking-tight sm:text-8xl"
              >
                <span className="text-violet-900/10">Memories</span>
                <span className="text-fuchsia-500/20">Moments</span>
                <span className="text-cyan-500/20">Celebrations</span>
                <span className="text-violet-500/20">Experiences</span>
              </div>
            ))}
          </motion.div>
        </section>
      </main>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-violet-950/80 p-5 backdrop-blur-2xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.4 }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[90vh] max-w-6xl overflow-hidden rounded-3xl border border-white/50 bg-white/95 shadow-[0_0_80px_rgba(217,70,239,0.3)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-fuchsia-300/20 via-transparent to-cyan-300/20" />

              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="relative max-h-[80vh] w-full object-contain"
              />

              <div className="relative flex items-center justify-between gap-5 border-t border-violet-200 bg-white/80 px-5 py-4 sm:px-7">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-700/80">
                    {selectedImage.category}
                  </p>

                  <h3 className="mt-1 text-lg font-semibold text-violet-950">
                    {selectedImage.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-fuchsia-300 bg-fuchsia-100 text-fuchsia-700 transition hover:border-cyan-400 hover:bg-cyan-300 hover:text-violet-950"
                  aria-label="Close image preview"
                >
                  <X size={20} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}