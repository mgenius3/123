// components/AnimatedSection.tsx
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hook/useIntersectionObserver";

const AnimatedSection = ({ children }) => {
  const [ref, isVisible] = useIntersectionObserver(0.1);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
