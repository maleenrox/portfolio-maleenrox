import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoImg from '../../assets/msrox-logo.png';

const NavBar = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'MAIN_TERMINAL' },
    { path: '/armory', label: 'THE_ARMORY' },
    { path: '/grid', label: 'THE_GRID' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-40 border-b border-cyber-gray bg-cyber-black/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Brand Area with Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logoImg}
            alt="Maleen Rox Logo"
            className="w-8 h-8 object-contain drop-shadow-[0_0_5px_rgba(0,255,255,0.8)]"
          />
          <div className="text-cyber-cyan font-bold tracking-widest text-xl text-glow-cyan">
            MALEEN.DEV_<span className="animate-pulse">_</span>
          </div>
          {/*/!* Brand Area with Logo *!/*/}
          {/*<Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">*/}
          {/*  <img*/}
          {/*    src={logoImg}*/}
          {/*    alt="Maleen Rox Logo"*/}
          {/*    className="w-8 h-8 object-contain drop-shadow-[0_0_5px_rgba(0,255,255,0.8)]"*/}
          {/*  />*/}
          {/*  <div className="text-cyber-cyan font-bold tracking-widest text-xl text-glow-cyan">*/}
          {/*    MALEEN.DEV_<span className="animate-pulse">_</span>*/}
          {/*  </div>*/}
          {/*</Link>*/}
        </div>

        {/* Navigation Links */}
        <div className="flex gap-8">
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
      </div>
    </nav>
  );
};

export default NavBar;