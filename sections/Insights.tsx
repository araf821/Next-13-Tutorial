"use client";

import { motion } from "framer-motion";

import styles from "@/styles";
import { staggerContainer } from "@/utils/motion";
import { TitleText, TypingText } from "@/components/TypingText";
import InsightsCard from "@/components/InsightsCard";
import { insights } from "@/constants";

const Insights = () => {
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
        <TypingText title="| Insight" textStyles="text-center" />
        <TitleText
          title="Insights about the Metaverse"
          textStyles="text-center"
        />
        <div className="mt-[50px] flex flex-col gap-[30px]">
          {insights.map((insight, index) => (
            <InsightsCard
              key={`insight-${index}`}
              {...insight}
              index={index + 1}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
export default Insights;
