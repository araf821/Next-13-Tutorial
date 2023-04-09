"use client";

import { motion } from "framer-motion";

import styles from "@/styles";
import { fadeIn } from "@/utils/motion";

type CardProps = {
  id: string;
  imgUrl: string;
  title: string;
  index: number;
  active: string;
  handleClick: Function;
};

const ExploreCard: React.FC<CardProps> = ({
  id,
  imgUrl,
  title,
  index,
  active,
  handleClick,
}) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.4, 0.75)}
      className={`${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer relative`}
    >
      <img
        src={imgUrl}
        alt="title"
        className="w-full h-full object-cover rounded-[24px]"
      />
      {active !== id && (
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]" >
          {title}
        </h3>
      )}
    </motion.div>
  );
};
export default ExploreCard;
