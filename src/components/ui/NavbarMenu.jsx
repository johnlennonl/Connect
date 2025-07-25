import React from "react";
import { motion } from "motion/react";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({ setActive, active, item, children }) => (
  <div onMouseEnter={() => setActive(item)} className="relative">
    <motion.p
      transition={{ duration: 0.3 }}
      className="cursor-pointer dark:text-white text-neutral-200 font-rajdhani text-lg tracking-widest hover:text-gamerRed transition-all"
    >
      {item}
    </motion.p>
    {active !== null && (
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={transition}
      >
        {active === item && (
          <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4 z-50">
            <motion.div
              transition={transition}
              layoutId="active"
              className="
                bg-black/85 backdrop-blur-2xl
                rounded-2xl overflow-hidden
                border border-gamerRed/20
                shadow-[0_12px_32px_4px_rgba(229,9,20,0.16),0_2px_24px_0_rgba(0,0,0,0.40)]
                ring-1 ring-gamerRed/15
                min-w-[220px]
                px-2 py-2
              "
            >
              <motion.div layout className="w-max h-full p-4">
                {children}
              </motion.div>
            </motion.div>
          </div>
        )}
      </motion.div>
    )}
  </div>
);

export const Menu = ({ setActive, children }) => (
  <nav
    onMouseLeave={() => setActive(null)}
    className="
      relative
      rounded-full
      border-none
      bg-black/80
      backdrop-blur-xl
      shadow-[0_4px_32px_0_#e5091433,0_2px_20px_0_#000d]
      flex justify-center space-x-4 px-12 py-6
      transition-all duration-300
      hover:shadow-[0_14px_36px_12px_rgba(229,9,20,0.25),0_2px_18px_0_rgba(0,0,0,0.35)]
      hover:scale-105
      hover:-translate-y-2
      group
      z-[70]
    "
  >
    {children}
  </nav>
);

export const ProductItem = ({ title, description, href, src }) => (
  <a href={href} className="flex space-x-2 hover:scale-105 transition-transform duration-200">
    <img
      src={src}
      width={140}
      height={70}
      alt={title}
      className="shrink-0 rounded-lg shadow-lg"
    />
    <div>
      <h4 className="text-lg font-bold mb-1 text-white font-rajdhani">
        {title}
      </h4>
      <p className="text-neutral-400 text-xs max-w-[10rem] font-rajdhani">
        {description}
      </p>
    </div>
  </a>
);

export const HoveredLink = ({ children, ...rest }) => (
  <a
    {...rest}
    className="
      text-white
      hover:text-gamerRed
      font-rajdhani text-base
      px-4 py-1
      transition-all duration-200
      rounded-full
      hover:bg-white/10
      hover:shadow-[0_0_20px_2px_#e5091444]
      hover:scale-110
      active:scale-95
      cursor-pointer
      select-none
      tracking-widest
    "
    style={{ textShadow: "0 1.5px 10px #e5091420" }}
  >
    {children}
  </a>
);
