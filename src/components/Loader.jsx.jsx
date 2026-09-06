import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: "-100%",
        transition: {
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1],
        },
      }}
      className="
        fixed
        inset-0
        z-[9999]
        flex
        flex-col
        items-center
        justify-center
        bg-[#071a14]
        text-white
        overflow-hidden
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          w-[500px]
          h-[500px]
          rounded-full
          bg-emerald-500/20
          blur-[120px]
        "
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo / Brand */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-bold
            tracking-tight
          "
        >
          CodeThrive<span className="text-emerald-400"> Infotech</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 0.6,
          }}
          transition={{
            delay: 0.4,
            duration: 0.6,
          }}
          className="
            mt-3
            text-xs
            sm:text-sm
            tracking-[0.3em]
            uppercase
          "
        >
          Building Digital Experiences
        </motion.p>

        {/* Loading Bar */}
        <div
          className="
            mt-10
            w-[180px]
            sm:w-[240px]
            h-[3px]
            bg-white/10
            rounded-full
            overflow-hidden
          "
        >
          <motion.div
            initial={{
              width: "0%",
            }}
            animate={{
              width: "100%",
            }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
            }}
            className="
              h-full
              bg-gradient-to-r
              from-emerald-400
              via-green-300
              to-emerald-500
              rounded-full
            "
          />
        </div>
      </div>

      {/* Bottom Text */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.4,
        }}
        transition={{
          delay: 0.8,
        }}
        className="
          absolute
          bottom-8
          text-[10px]
          sm:text-xs
          tracking-[0.2em]
          uppercase
        "
      >
        Please Wait
      </motion.div>
    </motion.div>
  );
}