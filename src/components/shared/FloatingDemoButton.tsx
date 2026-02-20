import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const FloatingDemoButton = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 1.5, duration: 0.4 }}
    className="fixed bottom-6 right-6 z-40"
  >
    <Link
      to="/contact"
      className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-sm shadow-lg hover:shadow-xl transition-shadow glow-cyan"
      aria-label="Request a demo"
    >
      <Zap size={16} />
      Request Demo
    </Link>
  </motion.div>
);

export default FloatingDemoButton;
