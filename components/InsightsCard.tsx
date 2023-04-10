type CardProps = {
  index: number;
  imgUrl: string;
  title: string;
  subtitle: string;
};

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const InsightsCard: React.FC<CardProps> = ({
  imgUrl,
  title,
  subtitle,
  index,
}) => {
  return <div>InsightsCard</div>;
};
export default InsightsCard;
