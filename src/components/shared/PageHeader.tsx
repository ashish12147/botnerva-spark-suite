import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  gradient?: boolean;
}

const PageHeader = ({ title, subtitle, gradient = true }: PageHeaderProps) => (
  <div className="pt-32 pb-12 text-center">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`text-4xl md:text-5xl font-bold mb-4 ${gradient ? "text-gradient" : "text-foreground"}`}
    >
      {title}
    </motion.h1>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-lg text-muted-foreground max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default PageHeader;
