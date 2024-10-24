"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { InsightCard, TitleText, TypingText } from "../components";
import { insights } from "../constants";

const Insights = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col gap-8`}
    >
      <TypingText textStyles="text-center" title="| Insight" />
      <TitleText title="Insight about metaverse" textStyles="text-center" />

      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((insight, index) => (
          <InsightCard key={`insight-${index + 1}`} {...insight} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
