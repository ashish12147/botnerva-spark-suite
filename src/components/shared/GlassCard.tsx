import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

const GlassCard = ({ children, className = "", hover = true, delay = 0 }: GlassCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
    whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
    className={`glass rounded-xl p-6 ${hover ? "hover-lift cursor-default" : ""} ${className}`}
  >
    {children}
  </motion.div>
);

export default GlassCard;
