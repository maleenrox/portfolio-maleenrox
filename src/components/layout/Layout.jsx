import NavBar from './NavBar';
import Footer from './Footer';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-cyber-black relative selection:bg-cyber-cyan selection:text-cyber-black">
      {/* Visual background image fallback if desired, otherwise purely CSS */}
      <div className="fixed inset-0 bg-[url('/background-crt.png')] opacity-10 pointer-events-none mix-blend-overlay bg-cover bg-center" />

      <NavBar />

      {/* Main Content Area */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-grow pt-24 pb-12 px-6 w-full max-w-7xl mx-auto relative z-10"
      >
        {children}
      </motion.main>

      <Footer />

      {/* Global scanlines layer */}
      <div className="crt-overlay pointer-events-none"></div>
    </div>
  );
};

export default Layout;