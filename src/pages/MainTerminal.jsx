import { motion } from 'framer-motion';
import TerminalWindow from '../components/ui/TerminalWindow';
import TextReveal from '../components/animations/TextReveal';
import GlowingButton from '../components/ui/GlowingButton';
import profileImg from '../assets/ms-rox.jpeg';
import { FaGithub, FaLinkedin, FaRedditAlien, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MainTerminal = () => {
  const skills = {
    'Cyber Security Operations': ['Penetration Testing', 'Tools & Exploit Development', 'Malware Reverse Engineering', 'Vulnerability Assessment', 'Log Analysis'],
    Programming: ['Python', 'Rust', 'C', 'Java', 'Bash/CMD Scripting'],
    'Security Tools': ['Kali Linux', 'IDS/IPS Systems', 'Firewall Basics', 'Nmap & Exploit DB', 'Wireshark'],
    'Automation & Network Engineering': ['Advanced TCP/IP', 'Network Programming', 'Inter-VLAN Routing', 'RIPv2 & VLSM', 'Traffic Analysis'],
    'Web Development': ['HTML/CSS', 'JavaScript & TypeScript', 'Angular', 'Spring-boot', 'JPA & Hibernate (SQL)'],
    'Cyber Security Research': ['Malware Analysis', 'Reverse Engineering', 'Binary Exploitation', 'Cryptography', 'Onion Routing & Darknet']};

  return (
    <div className="space-y-16">
      {/* Hero Section with Integrated Profile Image */}
      <section className="pt-8 flex flex-col lg:flex-row items-center gap-12">
        {/* Text Payload */}
        <div className="flex-1 space-y-6">
          <div className="inline-block border border-cyber-cyan/30 bg-cyber-cyan/10 px-3 py-1 mb-4">
            <span className="text-cyber-cyan text-xs tracking-widest uppercase animate-pulse">
              SYS.OP // COLOMBO_NODE // ACTIVE
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-cyber-text tracking-tight uppercase">
            <TextReveal text="Maleen.Sathsara" />
            <br />
            <span className="text-cyber-cyan text-glow-cyan text-3xl md:text-5xl">
              <TextReveal text="Security_Operator" delay={0.5} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-lg md:text-xl max-w-2xl text-cyber-text/80 border-l-4 border-cyber-cyan pl-4 bg-gradient-to-r from-cyber-cyan/5 to-transparent py-2"
          >
            Specializing in network defense, threat intelligence, and security operations. Engineering command-line security tools and analyzing evolving attack vectors to preemptively neutralize threats.
          </motion.p>
        </div>

        {/* Profile Image Node */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0"
        >
          {/* Cyberpunk Frame Rings */}
          <div className="absolute inset-0 border-2 border-cyber-cyan/20 rounded-sm transform rotate-3"></div>
          <div className="absolute inset-0 border border-cyber-blue/30 rounded-sm transform -rotate-2"></div>

          {/* Image Container with Scanline Overlay */}
          <div className="relative w-full h-full overflow-hidden border border-cyber-cyan shadow-neon-cyan group bg-cyber-dark">
            <img
              src={profileImg}
              alt="System Operator Profile"
              className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 grayscale hover:grayscale-0"
            />
            {/* Holographic Sweep Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-cyan/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_ease-in-out_infinite]"></div>
          </div>

          {/* Targeting Brackets */}
          <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-cyber-cyan"></div>
          <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-cyber-cyan"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-cyber-cyan"></div>
          <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-cyber-cyan"></div>
        </motion.div>
      </section>

      {/* Mission Statement */}
      <section>
        <TerminalWindow title="MISSION_STATEMENT.sh">
          <p className="text-cyber-cyan mb-4">$ cat /core/mission.txt</p>
          <p className="leading-relaxed opacity-90 text-sm md:text-base font-mono text-cyber-text">
            Fueled by relentless curiosity and an unshakable sense of purpose, my objective is to reshape the world into one of equality and hope through the power of Technology. I strive to wield my cybersecurity expertise as a force for good and peace, actively defending infrastructure against shadow market exploits and unauthorized incursions.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="inline-block w-2 h-4 bg-cyber-cyan mt-4"
          />
        </TerminalWindow>
      </section>

      {/* Skills Matrix */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl font-bold text-cyber-cyan text-glow-cyan uppercase tracking-widest"># Core_Capabilities</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-cyber-cyan/50 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              className="border border-cyber-gray bg-cyber-dark/50 p-6 hover:border-cyber-cyan/50 transition-colors relative group"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-cyber-cyan/5 transform translate-x-4 -translate-y-4 rotate-45 group-hover:bg-cyber-cyan/20 transition-colors"></div>

              <h3 className="text-cyber-cyan font-bold mb-4 border-b border-cyber-gray pb-2 uppercase tracking-wider">{category}</h3>
              <ul className="space-y-3">
                {items.map(skill => (
                  <li key={skill} className="flex items-center gap-3 text-sm font-mono group/item">
                    <span className="text-cyber-gray group-hover/item:text-cyber-cyan transition-colors duration-300">&gt;</span>
                    <span className="text-cyber-text/80 group-hover/item:text-cyber-text transition-colors duration-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* System Directories / Sub-Nodes Navigation */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl font-bold text-cyber-blue text-glow-blue uppercase tracking-widest"># System_Directories</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-cyber-blue/50 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* The Armory Navigation Card */}
          <div className="border border-cyber-red/30 bg-cyber-dark/60 p-8 hover:border-cyber-red/80 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between shadow-lg shadow-cyber-black">
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative z-10 space-y-4">
              <div className="inline-block border border-cyber-red/30 bg-cyber-red/10 px-2 py-1 mb-2">
                <span className="text-cyber-red text-[10px] tracking-widest uppercase animate-pulse">RESTRICTED // VAULT</span>
              </div>
              <h3 className="text-3xl font-bold text-cyber-text group-hover:text-cyber-red group-hover:text-glow-red transition-all">THE_ARMORY</h3>
              <p className="text-sm font-mono text-cyber-text/70 leading-relaxed border-l-2 border-cyber-red/30 pl-3">
                Access my weaponized command-line tools, automation utilities, and deep-dive threat intelligence payloads engineered for defensive reinforcement.
              </p>
            </div>

            <div className="relative z-10 mt-8">
              {/* Using standard anchor tags to seamlessly integrate without requiring new imports */}
              <Link to="/armory" className="inline-flex w-full sm:w-auto">
                <GlowingButton color="red" className="text-sm w-full">
                  <span className="flex items-center justify-center gap-2">MOUNT: /armory</span>
                </GlowingButton>
              </Link>
            </div>
          </div>

          {/* The Grid Navigation Card */}
          <div className="border border-cyber-cyan/30 bg-cyber-dark/60 p-8 hover:border-cyber-cyan/80 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between shadow-lg shadow-cyber-black">
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative z-10 space-y-4">
              <div className="inline-block border border-cyber-cyan/30 bg-cyber-cyan/10 px-2 py-1 mb-2">
                <span className="text-cyber-cyan text-[10px] tracking-widest uppercase animate-pulse">INTEL // UPLINK</span>
              </div>
              <h3 className="text-3xl font-bold text-cyber-text group-hover:text-cyber-cyan group-hover:text-glow-cyan transition-all">THE_GRID</h3>
              <p className="text-sm font-mono text-cyber-text/70 leading-relaxed border-l-2 border-cyber-cyan/30 pl-3">
                Query the intelligence database for my classified technical write-ups, vulnerability deep-dives, and historical cyber warfare case studies.
              </p>
            </div>

            <div className="relative z-10 mt-8">
              <Link to="/grid" className="inline-flex w-full sm:w-auto">
                <GlowingButton color="cyan" className="text-sm w-full">
                  <span className="flex items-center justify-center gap-2">MOUNT: /grid</span>
                </GlowingButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Communication & Social Uplinks */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl font-bold text-cyber-red text-glow-red uppercase tracking-widest"># Comms_Uplink</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-cyber-red/50 to-transparent"></div>
        </div>

        <div className="border border-cyber-gray bg-cyber-dark/50 p-6 relative group overflow-hidden shadow-lg shadow-cyber-black">
          {/* Animated background scanline */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-cyan/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_ease-in-out_infinite] pointer-events-none"></div>

          <h3 className="text-cyber-text font-bold mb-6 uppercase tracking-widest flex items-center gap-2 relative z-10">
            <span className="w-2 h-2 bg-cyber-red animate-pulse"></span>
            Establish_Connection
          </h3>

          {/* Darkweb Forum Message Block */}
          <div className="mb-8 border border-cyber-gray/50 border-l-2 border-l-cyber-red bg-[#050505]/80 p-4 font-mono text-xs md:text-sm relative z-10 shadow-lg shadow-cyber-black/50">
            {/* Post Header */}
            <div className="flex flex-wrap items-center gap-3 text-cyber-text/50 mb-3 border-b border-cyber-gray/70 pb-2">
               <span className="text-cyber-red font-bold drop-shadow-[0_0_5px_rgba(255,0,85,0.8)]">ms-rox</span>
               <span className="text-[10px] bg-cyber-red/10 text-cyber-red px-1.5 py-0.5 rounded-sm border border-cyber-red/20">OP</span>
               <span>::</span>
               <span>0x9F3A...B21C</span>
               <span>::</span>
               <span>Subject: Re: Finding Endpoints</span>
            </div>
            {/* Post Body */}
            <p className="text-cyber-text/80 leading-relaxed pl-2 border-l border-cyber-gray/30">
              &gt; Whether you are tracking shadow market movements, analyzing stealth vectors, or just looking to collaborate on defensive infrastructure... the network is vast, but my endpoints are static. If you need to establish a secure comms uplink or share intelligence, you can find me here.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
            {/* GitHub */}
            <a href="https://github.com/maleenrox" target="_blank" rel="noopener noreferrer"
               className="flex flex-col items-center justify-center p-4 border border-cyber-gray bg-cyber-black/50 hover:border-cyber-cyan/50 hover:bg-cyber-cyan/10 transition-all duration-300 group/link relative">
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyber-cyan opacity-0 group-hover/link:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyber-cyan opacity-0 group-hover/link:opacity-100 transition-opacity"></div>
              <FaGithub className="text-3xl text-cyber-text/60 group-hover/link:text-cyber-cyan group-hover/link:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)] mb-2 transition-all duration-300" />
              <span className="text-xs font-mono text-cyber-text/60 group-hover/link:text-cyber-cyan uppercase tracking-widest">GitHub</span>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/maleen-sathsara/" target="_blank" rel="noopener noreferrer"
               className="flex flex-col items-center justify-center p-4 border border-cyber-gray bg-cyber-black/50 hover:border-cyber-blue/50 hover:bg-cyber-blue/10 transition-all duration-300 group/link relative">
               <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyber-blue opacity-0 group-hover/link:opacity-100 transition-opacity"></div>
               <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyber-blue opacity-0 group-hover/link:opacity-100 transition-opacity"></div>
              <FaLinkedin className="text-3xl text-cyber-text/60 group-hover/link:text-cyber-blue group-hover/link:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] mb-2 transition-all duration-300" />
              <span className="text-xs font-mono text-cyber-text/60 group-hover/link:text-cyber-blue uppercase tracking-widest">LinkedIn</span>
            </a>

            {/* Reddit */}
            <a href="https://www.reddit.com/user/ms-rox/" target="_blank" rel="noopener noreferrer"
               className="flex flex-col items-center justify-center p-4 border border-cyber-gray bg-cyber-black/50 hover:border-cyber-red/50 hover:bg-cyber-red/10 transition-all duration-300 group/link relative">
               <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyber-red opacity-0 group-hover/link:opacity-100 transition-opacity"></div>
               <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyber-red opacity-0 group-hover/link:opacity-100 transition-opacity"></div>
              <FaRedditAlien className="text-3xl text-cyber-text/60 group-hover/link:text-cyber-red group-hover/link:drop-shadow-[0_0_8px_rgba(255,0,85,0.8)] mb-2 transition-all duration-300" />
              <span className="text-xs font-mono text-cyber-text/60 group-hover/link:text-cyber-red uppercase tracking-widest">Reddit</span>
            </a>

            {/* Email */}
            <a href="mailto:maleens.rox@gmail.com"
               className="flex flex-col items-center justify-center p-4 border border-cyber-gray bg-cyber-black/50 hover:border-cyber-cyan/50 hover:bg-cyber-cyan/10 transition-all duration-300 group/link relative">
               <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyber-cyan opacity-0 group-hover/link:opacity-100 transition-opacity"></div>
               <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyber-cyan opacity-0 group-hover/link:opacity-100 transition-opacity"></div>
              <FaEnvelope className="text-3xl text-cyber-text/60 group-hover/link:text-cyber-cyan group-hover/link:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)] mb-2 transition-all duration-300" />
              <span className="text-xs font-mono text-cyber-text/60 group-hover/link:text-cyber-cyan uppercase tracking-widest">Secure_Mail</span>
            </a>
          </div>
        </div>
      </section>

      {/* Resume Action Grid / Operator Dossier */}
      <section className="pb-16 mt-8">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl font-bold text-cyber-cyan text-glow-cyan uppercase tracking-widest"># Operator_Dossier</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-cyber-cyan/50 to-transparent"></div>
        </div>

        {/* Single ATS-Friendly CV Node - Aligned with global node styles */}
        <div className="border border-cyber-gray bg-cyber-dark/50 p-6 md:p-8 hover:border-cyber-cyan/50 transition-all duration-300 relative group overflow-hidden flex flex-col lg:flex-row items-center gap-8 shadow-lg shadow-cyber-black">
          {/* Standardized Hover Gradient matching other nodes */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

          {/* Cyberpunk Corner Bracket */}
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyber-cyan/30 group-hover:border-cyber-cyan transition-colors m-2"></div>

          {/* Data Payload Info */}
          <div className="relative z-10 flex-1 w-full">
            <div className="flex justify-between items-start mb-6 border-b border-cyber-gray/50 pb-4">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-cyber-cyan animate-ping"></span>
                <span className="text-cyber-cyan text-[10px] md:text-xs tracking-widest uppercase border border-cyber-cyan/30 bg-cyber-cyan/10 px-3 py-1">
                  MACHINE_READABLE_PAYLOAD
                </span>
              </div>
              <span className="text-cyber-text/50 font-mono text-[10px] animate-pulse hidden sm:block">SYS.VER: v2.0.ATS_OPTIMIZED</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-cyber-text mb-4 group-hover:text-cyber-cyan transition-colors">
              ATS_OPTIMIZED_CV.pdf
            </h3>

            {/* Description Block */}
            <div className="mb-6 relative">
              <p className="text-sm font-mono text-cyber-text/70 leading-relaxed border-l-2 border-cyber-cyan/30 pl-3">
                &gt; Standardized data structure designed specifically to bypass automated HR firewalls and Application Tracking Systems (ATS). Stripped of visual formatting to ensure maximum parsing efficiency and seamless data extraction by target recruitment nodes.
              </p>
            </div>

            {/* File Metadata Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[10px] md:text-xs font-mono text-cyber-text/50 border-t border-cyber-gray/50 pt-4">
              <div className="flex flex-col gap-1">
                <span className="text-cyber-cyan/70">FORMAT:</span>
                <span className="text-cyber-text">application/pdf</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-cyber-cyan/70">STATUS:</span>
                <span className="text-cyber-cyan font-bold drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]">READY</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-cyber-cyan/70">AUTH:</span>
                <span className="text-cyber-text">PUBLIC_ACCESS</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-cyber-cyan/70">VERSION:</span>
                <span className="text-cyber-text truncate">v2.1</span>
              </div>
            </div>
          </div>

          {/* Action Module */}
          <div className="relative z-10 w-full lg:w-auto lg:min-w-[280px] flex flex-col gap-3">
            <a href="/mznphz/ATS_CV_v2-MaleenSathsara.pdf" download className="block w-full">
              {/* Added hover:shadow-neon-cyan mapped from index.css */}
              <GlowingButton color="cyan" className="text-sm md:text-base w-full flex items-center justify-center gap-3 py-5 border-2 border-cyber-cyan/30 hover:border-cyber-cyan hover:shadow-neon-cyan transition-all duration-300">
                <span className="animate-bounce font-bold text-lg">↓</span> INITIATE_DOWNLOAD
              </GlowingButton>
            </a>
            <div className="text-center font-mono text-[10px] text-cyber-text/40 tracking-widest uppercase border-t border-cyber-gray/50 pt-3 mt-1">
              SECURE TLS CONNECTION
            </div>
          </div>
        </div>
      </section>

      {/*/!* Resume Action Grid / Operator Dossiers *!/*/}
      {/*<section className="pb-16 mt-8">*/}
      {/*  <div className="flex items-center gap-4 mb-8">*/}
      {/*    <h2 className="text-2xl font-bold text-cyber-cyan text-glow-cyan uppercase tracking-widest"># Operator_Dossiers</h2>*/}
      {/*    <div className="flex-1 h-px bg-gradient-to-r from-cyber-cyan/50 to-transparent"></div>*/}
      {/*  </div>*/}

      {/*  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">*/}
      {/*    /!* ATS-Friendly CV Node *!/*/}
      {/*    <div className="border border-cyber-gray bg-cyber-dark/40 p-6 md:p-8 hover:border-cyber-cyan/60 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between shadow-lg shadow-cyber-black">*/}
      {/*      <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>*/}
      {/*      /!* Corner Bracket *!/*/}
      {/*      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyber-cyan/30 group-hover:border-cyber-cyan transition-colors m-2"></div>*/}

      {/*      <div className="relative z-10 mb-8">*/}
      {/*        <div className="flex justify-between items-start mb-4">*/}
      {/*          <span className="text-cyber-cyan text-[10px] tracking-widest uppercase border border-cyber-cyan/30 bg-cyber-cyan/10 px-2 py-1">*/}
      {/*            MACHINE_READABLE*/}
      {/*          </span>*/}
      {/*          <span className="text-cyber-text/50 font-mono text-[10px] animate-pulse">v2.0.ATS</span>*/}
      {/*        </div>*/}

      {/*        <h3 className="text-xl font-bold text-cyber-text mb-3 group-hover:text-cyber-cyan transition-colors">ATS_OPTIMIZED_CV.pdf</h3>*/}

      {/*        <p className="text-sm font-mono text-cyber-text/60 leading-relaxed h-20">*/}
      {/*          &gt; Standardized data structure designed to bypass automated HR firewalls and Application Tracking Systems. Stripped of visual formatting for maximum parsing efficiency.*/}
      {/*        </p>*/}

      {/*        <div className="mt-6 pt-4 border-t border-cyber-gray/50 grid grid-cols-2 gap-y-3 text-[10px] md:text-xs font-mono text-cyber-text/50">*/}
      {/*          <div><span className="text-cyber-cyan/70">FORMAT:</span> application/pdf</div>*/}
      {/*          <div><span className="text-cyber-cyan/70">PAYLOAD:</span> ATS_CV</div>*/}
      {/*          /!*<div className="col-span-2"><span className="text-cyber-cyan/70">SHA-256:</span> 8f4e3c9b...a9b2d1f4</div>*!/*/}
      {/*        </div>*/}
      {/*      </div>*/}

      {/*      <div className="relative z-10">*/}
      {/*        <a href="/ATS_CV_v2-MaleenSathsara.pdf" download className="block w-full">*/}
      {/*          <GlowingButton color="cyan" className="text-xs w-full flex items-center justify-center gap-3 py-3">*/}
      {/*            <span className="animate-bounce">↓</span> EXTRACT_PAYLOAD*/}
      {/*          </GlowingButton>*/}
      {/*        </a>*/}
      {/*      </div>*/}
      {/*    </div>*/}

      {/*    /!* Visual CV Node *!/*/}
      {/*    <div className="border border-cyber-gray bg-cyber-dark/40 p-6 md:p-8 hover:border-cyber-blue/60 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between shadow-lg shadow-cyber-black">*/}
      {/*      <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>*/}
      {/*      /!* Corner Bracket *!/*/}
      {/*      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyber-blue/30 group-hover:border-cyber-blue transition-colors m-2"></div>*/}

      {/*      <div className="relative z-10 mb-8">*/}
      {/*        <div className="flex justify-between items-start mb-4">*/}
      {/*          <span className="text-cyber-blue text-[10px] tracking-widest uppercase border border-cyber-blue/30 bg-cyber-blue/10 px-2 py-1">*/}
      {/*            HUMAN_INTERFACE*/}
      {/*          </span>*/}
      {/*          <span className="text-cyber-text/50 font-mono text-[10px] animate-pulse">v3.4.VISUAL</span>*/}
      {/*        </div>*/}

      {/*        <h3 className="text-xl font-bold text-cyber-text mb-3 group-hover:text-cyber-blue transition-colors">MODERN_VISUAL_CV.pdf</h3>*/}

      {/*        <p className="text-sm font-mono text-cyber-text/60 leading-relaxed h-20">*/}
      {/*          &gt; High-fidelity layout engineered for human operators and direct technical interviews. Features enhanced typography, structured visual hierarchy, and full aesthetic integration.*/}
      {/*        </p>*/}

      {/*        <div className="mt-6 pt-4 border-t border-cyber-gray/50 grid grid-cols-2 gap-y-3 text-[10px] md:text-xs font-mono text-cyber-text/50">*/}
      {/*          <div><span className="text-cyber-blue/70">FORMAT:</span> application/pdf</div>*/}
      {/*          <div><span className="text-cyber-blue/70">PAYLOAD:</span> HUMANIZED_CV</div>*/}
      {/*          /!*<div className="col-span-2"><span className="text-cyber-blue/70">SHA-256:</span> 4a1b9f2c...d7c3e8a1</div>*!/*/}
      {/*        </div>*/}
      {/*      </div>*/}

      {/*      <div className="relative z-10">*/}
      {/*        <a href="/DOWNLOAD_CV_2.pdf" download className="block w-full">*/}
      {/*          <GlowingButton color="blue" className="text-xs w-full flex items-center justify-center gap-3 py-3 border-cyber-blue/50 text-cyber-blue/80 hover:text-cyber-blue">*/}
      {/*            <span className="animate-bounce">↓</span> EXTRACT_PAYLOAD*/}
      {/*          </GlowingButton>*/}
      {/*        </a>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}
    </div>
  );
};

export default MainTerminal;