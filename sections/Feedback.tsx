"use client";

import { motion } from "framer-motion";

import styles from "@/styles";
import { staggerContainer, fadeIn, zoomIn } from "@/utils/motion";
import { TitleText, TypingText } from "@/components/TypingText";

const Feedback = () => {
  return (
    <section className={`${styles.paddings} relative z-10 `}>
      <motion.div
        // @ts-ignore
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      ></motion.div>
    </section>
  );
};
export default Feedback;
