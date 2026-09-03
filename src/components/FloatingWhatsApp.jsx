
import React from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const FloatingWhatsApp = () => {
  const [open, setOpen] = useState(false);

  // Replace this with your actual WhatsApp number
  // Country code included, WITHOUT + or spaces
  const phoneNumber = "9150781685";

  const message = encodeURIComponent(
    "Hi CodeThrive Infotech! I'm interested in your services. I would like to discuss a project."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const openWhatsApp = () => {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* ========================================= */}
      {/* FLOATING CONTACT BUTTON */}
      {/* ========================================= */}

      <div
        className="
          fixed
          bottom-5
          right-5
          sm:bottom-6
          sm:right-6

          z-[9999]
        "
      >
        {/* ========================================= */}
        {/* POPUP */}
        {/* ========================================= */}

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 15,
                scale: 0.9,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                absolute

                bottom-16
                right-0

                w-[260px]
                sm:w-[290px]

                bg-white

                rounded-2xl

                border
                border-[#24332F]/10

                shadow-[0px_15px_50px_rgba(15,92,77,0.18)]

                overflow-hidden
              "
            >
              {/* HEADER */}

              <div
                className="
                  bg-[#0F5C4D]

                  px-4
                  py-3

                  flex
                  items-center
                  justify-between
                "
              >
                <div>
                  <p
                    className="
                      text-white
                      font-semibold
                      text-sm
                    "
                  >
                    Chat with us
                  </p>

                  <p
                    className="
                      text-white/70
                      text-[10px]
                      mt-0.5
                    "
                  >
                    We usually reply quickly
                  </p>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="
                    text-white/80
                    hover:text-white

                    transition-colors
                  "
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              {/* BODY */}

              <div className="p-4">
                <p
                  className="
                    text-[#24332F]

                    text-xs
                    leading-relaxed

                    mb-4
                  "
                >
                  Have a project in mind? Let's discuss your website,
                  mobile app, software or digital solution.
                </p>

                <button
                  onClick={openWhatsApp}
                  className="
                    w-full

                    flex
                    items-center
                    justify-center
                    gap-2

                    bg-[#0F5C4D]

                    hover:bg-[#0B4A3E]

                    text-white

                    rounded-xl

                    px-4
                    py-3

                    text-xs
                    font-semibold

                    transition-all
                    duration-300

                    hover:-translate-y-0.5

                    shadow-[0px_8px_20px_rgba(15,92,77,0.18)]
                  "
                >
                  <MessageCircle size={16} />

                  Chat on WhatsApp
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>


        {/* ========================================= */}
        {/* FLOATING BUTTON */}
        {/* ========================================= */}

        <motion.button
          onClick={() => setOpen(!open)}

          whileHover={{
            scale: 1.08,
          }}

          whileTap={{
            scale: 0.92,
          }}

          animate={{
            y: [0, -4, 0],
            boxShadow: [
              "0px 8px 20px rgba(15,92,77,0.20)",
              "0px 12px 30px rgba(15,92,77,0.35)",
              "0px 8px 20px rgba(15,92,77,0.20)",
            ],
          }}

          transition={{
            y: {
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            },

            boxShadow: {
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}

          className="
            relative

            w-14
            h-14

            sm:w-16
            sm:h-16

            rounded-full

            bg-[#0F5C4D]

            text-white

            flex
            items-center
            justify-center

            border-2
            border-white

            shadow-lg
          "

          aria-label="Contact us on WhatsApp"
        >
          {/* PULSE */}

          <motion.span
            className="
              absolute
              inset-0

              rounded-full

              border-2
              border-[#0F5C4D]
            "

            animate={{
              scale: [1, 1.45],
              opacity: [0.6, 0],
            }}

            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />

          {/* ICON */}

          {open ? (
            <X
              size={24}
              className="relative z-10"
            />
          ) : (
            <MessageCircle
              size={25}
              className="relative z-10"
            />
          )}

          {/* ONLINE DOT */}

          {!open && (
            <span
              className="
                absolute

                top-0
                right-0

                w-3
                h-3

                rounded-full

                bg-[#9AC8BC]

                border-2
                border-white

                z-20
              "
            />
          )}
        </motion.button>
      </div>
    </>
  );
};

export default FloatingWhatsApp;

