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
  return <div>ExploreCard</div>;
};
export default ExploreCard;
