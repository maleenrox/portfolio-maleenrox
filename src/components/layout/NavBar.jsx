import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../../assets/msrox-logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'MAIN_TERMINAL' },
    { path: '/armory', label: 'THE_ARMORY' },
    { path: '/grid', label: 'THE_GRID' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-cyber-gray bg-cyber-black/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* Brand Area with Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <img
            src={logoImg}
            alt="Maleen Rox Logo"
            className="w-6 h-6 sm:w-8 sm:h-8 object-contain drop-shadow-[0_0_5px_rgba(0,255,255,0.8)]"
          />
          <div className="text-cyber-cyan font-bold tracking-widest text-lg sm:text-xl text-glow-cyan whitespace-nowrap">
            MALEEN.DEV_<span className="animate-pulse">_</span>
          </div>
        </div>

        {/* Desktop Navigation Links (Hidden on Mobile) */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-widest transition-colors duration-300 relative ${
                  isActive ? 'text-cyber-cyan text-glow-cyan' : 'text-cyber-text hover:text-cyber-blue'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-6 left-0 right-0 h-0.5 bg-cyber-cyan shadow-neon-cyan"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Toggle Button (Hidden on Desktop) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-cyber-cyan hover:text-cyber-text transition-colors p-2 focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-b border-cyber-gray bg-cyber-black/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 space-y-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm tracking-widest transition-all duration-300 flex items-center gap-3 p-3 border border-transparent ${
                      isActive 
                        ? 'text-cyber-cyan text-glow-cyan border-l-cyber-cyan bg-cyber-cyan/10' 
                        : 'text-cyber-text hover:text-cyber-blue hover:bg-cyber-blue/5 hover:border-l-cyber-blue'
                    }`}
                  >
                    <span className={`${isActive ? 'text-cyber-cyan animate-pulse' : 'text-cyber-gray'}`}>&gt;</span>
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;