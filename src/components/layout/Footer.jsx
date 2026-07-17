import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaRedditAlien, FaEnvelope, FaShieldAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full border-t border-cyber-cyan/20 bg-cyber-black/95 backdrop-blur-md relative z-40 mt-auto overflow-hidden">
      {/* Top Edge Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-cyan/50 to-transparent"></div>

      {/* Reduced top/bottom padding from pt-16/pb-8 to pt-10/pb-6 */}
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-6">

        {/* Main 3-Column Grid - Reduced gap from 12 to 8, and bottom padding from 12 to 8 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-cyber-gray/60 pb-8">

          {/* Column 1: Brand & Mission (Spans 5 cols) - Reduced spacing from 6 to 4 */}
          <div className="md:col-span-5 space-y-4">
            <div className="text-cyber-cyan font-bold tracking-widest text-2xl text-glow-cyan flex items-center gap-1">
              MALEEN.SATHSARA<span className="animate-pulse">_</span>
            </div>
            <p className="text-sm font-mono text-cyber-text/70 leading-relaxed border-l-2 border-cyber-cyan/30 pl-4 bg-cyber-cyan/5 py-2">
              Cybersecurity operator and systems engineer specializing in network defense, threat intelligence, and offensive security tooling. Leveraging technology as a force for digital security and peace.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-cyber-cyan/80 bg-cyber-dark/50 inline-block px-3 py-1 border border-cyber-cyan/20">
              <FaShieldAlt className="inline mr-2 text-cyber-red" />
              INFRASTRUCTURE DEFENSES: <span className="font-bold">ACTIVE</span>
            </div>
          </div>

          {/* Column 2: System Directories (Spans 3 cols) - Reduced spacing from 6 to 4 */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-cyber-text font-bold tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-cyber-cyan"></span>
              Directories
            </h3>
            <ul className="space-y-3 font-mono text-sm">
              <li>
                <Link to="/" className="text-cyber-text/60 hover:text-cyber-cyan transition-all flex items-center gap-3 group">
                  <span className="text-cyber-gray group-hover:text-cyber-cyan transition-colors">&gt;</span>
                  <span className="group-hover:translate-x-1 transition-transform">MAIN_TERMINAL</span>
                </Link>
              </li>
              <li>
                <Link to="/armory" className="text-cyber-text/60 hover:text-cyber-cyan transition-all flex items-center gap-3 group">
                  <span className="text-cyber-gray group-hover:text-cyber-cyan transition-colors">&gt;</span>
                  <span className="group-hover:translate-x-1 transition-transform">THE_ARMORY</span>
                </Link>
              </li>
              <li>
                <Link to="/grid" className="text-cyber-text/60 hover:text-cyber-cyan transition-all flex items-center gap-3 group">
                  <span className="text-cyber-gray group-hover:text-cyber-cyan transition-colors">&gt;</span>
                  <span className="group-hover:translate-x-1 transition-transform">THE_GRID</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Comms & Status (Spans 4 cols) - Reduced spacing from 6 to 4 */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-cyber-text font-bold tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-cyber-red animate-pulse"></span>
              Comms_Uplink
            </h3>

            {/* Social Icons Grid */}
            <div className="flex gap-4">
              <a href="https://github.com/maleenrox" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-cyber-gray bg-cyber-dark/50 flex items-center justify-center text-cyber-text/60 hover:text-cyber-cyan hover:border-cyber-cyan hover:bg-cyber-cyan/10 transition-all duration-300 hover:-translate-y-1">
                <FaGithub className="text-lg" />
              </a>
              <a href="https://www.linkedin.com/in/maleen-sathsara/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-cyber-gray bg-cyber-dark/50 flex items-center justify-center text-cyber-text/60 hover:text-cyber-blue hover:border-cyber-blue hover:bg-cyber-blue/10 transition-all duration-300 hover:-translate-y-1">
                <FaLinkedin className="text-lg" />
              </a>
              <a href="https://www.reddit.com/user/ms-rox/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-cyber-gray bg-cyber-dark/50 flex items-center justify-center text-cyber-text/60 hover:text-cyber-red hover:border-cyber-red hover:bg-cyber-red/10 transition-all duration-300 hover:-translate-y-1">
                <FaRedditAlien className="text-lg" />
              </a>
              <a href="mailto:maleens.rox@gmail.com" className="w-10 h-10 border border-cyber-gray bg-cyber-dark/50 flex items-center justify-center text-cyber-text/60 hover:text-cyber-cyan hover:border-cyber-cyan hover:bg-cyber-cyan/10 transition-all duration-300 hover:-translate-y-1">
                <FaEnvelope className="text-lg" />
              </a>
            </div>

            {/* Server Status Block - Reduced internal spacing from 3 to 2 */}
            <div className="bg-cyber-dark/50 border border-cyber-gray/50 p-4 font-mono text-xs text-cyber-text/60 space-y-2 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-cyan/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_ease-in-out_infinite] pointer-events-none"></div>
              <div className="flex justify-between items-center border-b border-cyber-gray/50 pb-2">
                <span>SYSTEM_STATUS:</span>
                <span className="text-cyber-cyan font-bold drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]">ONLINE</span>
              </div>
              <div className="flex justify-between items-center">
                <span>ACTIVE_NODE:</span>
                <span className="text-cyber-text">COLOMBO, LKA</span>
              </div>
              <div className="flex justify-between items-center">
                <span>UPTIME:</span>
                <span className="text-cyber-text tracking-widest">99.9%</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar - Reduced top padding from 8 to 4 */}
        <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-cyber-text/40">
          <div className="flex items-center gap-2">
            <span className="text-cyber-cyan animate-pulse">&gt;_</span>
            <span className="hover:text-cyber-text/70 transition-colors">&copy; Maleen Rox 2026 // ALL_RIGHTS_RESERVED</span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <span className="hover:text-cyber-cyan transition-colors cursor-crosshair">
              [ SECURE_CONNECTION ]
            </span>
            <span className="hidden sm:inline text-cyber-gray">|</span>
            <span className="hover:text-cyber-cyan transition-colors cursor-crosshair">
              [ PORTFOLIO_V1.0.0 ]
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;