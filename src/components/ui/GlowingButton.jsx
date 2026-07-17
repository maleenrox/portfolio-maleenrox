import { motion } from 'framer-motion';

const GlowingButton = ({ children, onClick, color = 'cyan', className = '' }) => {
  const colorMap = {
    green: 'text-cyber-green border-cyber-green hover:bg-cyber-green/10 hover:shadow-neon-green',
    blue: 'text-cyber-blue border-cyber-blue hover:bg-cyber-blue/10 hover:shadow-neon-blue',
    red: 'text-cyber-red border-cyber-red hover:bg-cyber-red/10',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-6 py-2 border transition-all duration-300 uppercase tracking-widest font-bold ${colorMap[color]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default GlowingButton;