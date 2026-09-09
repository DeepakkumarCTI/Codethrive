import { motion } from "framer-motion";
import logo from "../assets/logo.png";

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
        overflow-hidden
        bg-[#00002F]
        text-white
      "
    >
      {/* Background Gradient */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.20),transparent_45%)]
        "
      />

      {/* Decorative Blue Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.18, 0.35, 0.18],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#2563EB]/25
          blur-[120px]
        "
      />

      {/* Decorative Rings */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none
          absolute
          h-[320px]
          w-[320px]
          rounded-full
          border
          border-[#60A5FA]/10
        "
      />

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none
          absolute
          h-[250px]
          w-[250px]
          rounded-full
          border
          border-[#93C5FD]/10
        "
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Image */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mb-6
            flex
            h-20
            w-20
            items-center
            justify-center
            overflow-hidden
            rounded-2xl
            border
            border-[#60A5FA]/30
            bg-[#000080]
            p-2
            shadow-[0_12px_40px_rgba(37,99,235,0.25)]
          "
        >
          <motion.div
            animate={{
              scale: [1, 1.35, 1],
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              h-10
              w-10
              rounded-full
              bg-[#60A5FA]
              blur-xl
            "
          />

          <img
            src={logo}
            alt="CodeThrive Infotech logo"
            className="
              relative
              z-10
              h-full
              w-full
              object-contain
            "
          />
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.15,
            duration: 0.8,
            ease: "easeOut",
          }}
          className="
            font-display
            text-3xl
            font-bold
            tracking-[-1px]
            text-white
            sm:text-4xl
            md:text-5xl
          "
        >
          CodeThrive
          <span className="text-[#60A5FA]"> Infotech</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 0.7,
            y: 0,
          }}
          transition={{
            delay: 0.45,
            duration: 0.6,
          }}
          className="
            mt-3
            font-body
            text-[10px]
            uppercase
            tracking-[0.28em]
            text-[#BFDBFE]
            sm:text-xs
            sm:tracking-[0.35em]
          "
        >
          Building Digital Experiences
        </motion.p>

        {/* Loading Indicator */}
        <div
          className="
            mt-10
            flex
            w-[220px]
            flex-col
            items-center
            sm:w-[280px]
          "
        >
          <div
            className="
              relative
              h-[4px]
              w-full
              overflow-hidden
              rounded-full
              bg-white/10
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
                duration: 2,
                ease: "easeInOut",
              }}
              className="
                relative
                h-full
                rounded-full
                bg-gradient-to-r
                from-[#1D4ED8]
                via-[#60A5FA]
                to-[#BFDBFE]
              "
            >
              <motion.span
                animate={{
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  right-0
                  top-1/2
                  h-3
                  w-3
                  -translate-y-1/2
                  rounded-full
                  bg-white
                  shadow-[0_0_14px_rgba(191,219,254,0.9)]
                "
              />
            </motion.div>
          </div>

          <div className="mt-3 flex w-full items-center justify-between">
            <span
              className="
                font-body
                text-[8px]
                uppercase
                tracking-[1.5px]
                text-[#93C5FD]/70
              "
            >
              Initializing
            </span>

            <motion.span
              animate={{
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                font-body
                text-[8px]
                uppercase
                tracking-[1.5px]
                text-[#BFDBFE]
              "
            >
              Please wait
            </motion.span>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.45,
        }}
        transition={{
          delay: 0.9,
          duration: 0.6,
        }}
        className="
          absolute
          bottom-8
          flex
          items-center
          gap-2
          font-body
          text-[9px]
          uppercase
          tracking-[0.2em]
          text-[#BFDBFE]
          sm:text-[10px]
        "
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#60A5FA]" />
        <span>Code. Create. Thrive.</span>
      </motion.div>
    </motion.div>
  );
}