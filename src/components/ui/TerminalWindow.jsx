import { motion } from 'framer-motion';

const TerminalWindow = ({ title = "BASH", children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`border border-cyber-gray bg-cyber-dark/80 backdrop-blur-sm overflow-hidden ${className}`}
    >
      {/* Terminal Header */}
      <div className="bg-cyber-gray px-4 py-2 flex items-center justify-between border-b border-cyber-gray">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-cyber-red/70"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
          <div className="w-3 h-3 rounded-full bg-cyber-green/70"></div>
        </div>
        <div className="text-xs text-cyber-text opacity-70 tracking-widest">{title}</div>
      </div>

      {/* Terminal Body */}
      <div className="p-6">
        {children}
      </div>
    </motion.div>
  );
};

export default TerminalWindow;