"use client";

import { motion } from "framer-motion";

import styles from "@/styles";
import { staggerContainer, fadeIn } from "@/utils/motion";
import { TitleText, TypingText } from "@/components/TypingText";

const World = () => {
  return (
    <section className={`${styles.paddings} relative z-10 `}>
      <motion.div
        // @ts-ignore
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| People of the World" textStyles="text-center" />
        <TitleText
          title={
            <>Find friends around you and invite them to join your world!</>
          }
          textStyles="text-center"
        />

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[550px]"
        >
          <img
            src="/map.png"
            alt="map"
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <img src="/people-01.png" alt="people avatar" />
          </div>

          <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <img src="/people-02.png" alt="people avatar" />
          </div>

          <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <img src="/people-03.png" alt="people avatar" />
          </div>

          <motion.div
            variants={fadeIn("down", "spring", 0.75, 1.5)}
            className="invisible lg:visible absolute bottom-[150px] left-[200px] w-[217px] h-[175px] rounded-[20px] bg-[#5D6680]"
          >
            <img
              src="/world-01.png"
              alt="world modal"
              className="absolute w-[196px] h-[150px] bottom-3 left-[10px] rounded-[20px]"
            />
            <div className="text-white text-semibold absolute bottom-5 left-5 text-[25px] ">
              <div className="flex flex-row">
                <img
                  src="/people-01.png"
                  alt="avatar"
                  className="absolute bottom-10 left-0 w-[25px] h-[25px]"
                />
                <img
                  src="/people-02.png"
                  alt="avatar"
                  className="absolute bottom-10 left-5 w-[25px] h-[25px]"
                />
                <img
                  src="/people-03.png"
                  alt="avatar"
                  className="absolute bottom-10 left-10 w-[25px] h-[25px]"
                />
                <p className="text-[12px] absolute bottom-[42px] left-[70px]">
                  +369 playing
                </p>
              </div>
              <h2>Paradise Island</h2>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "spring", 0.5, 1.5)}
            className="invisible lg:visible absolute top-[10px] right-[350px] w-[217px] h-[175px] rounded-[20px] bg-[#5D6680]"
          >
            <img
              src="/world-02.png"
              alt="world modal"
              className="absolute w-[196px] h-[150px] top-3 right-[10px] rounded-[20px]"
            />
            <div className="text-white text-semibold absolute bottom-5 left-5 text-[25px] ">
              <div className="flex flex-row">
                <img
                  src="/people-01.png"
                  alt="avatar"
                  className="absolute bottom-10 left-0 w-[25px] h-[25px]"
                />
                <img
                  src="/people-02.png"
                  alt="avatar"
                  className="absolute bottom-10 left-5 w-[25px] h-[25px]"
                />
                <img
                  src="/people-03.png"
                  alt="avatar"
                  className="absolute bottom-10 left-10 w-[25px] h-[25px]"
                />
                <p className="text-[12px] absolute bottom-[42px] left-[70px]">
                  +265 playing
                </p>
              </div>
              <h2>The Hawkins</h2>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default World;
