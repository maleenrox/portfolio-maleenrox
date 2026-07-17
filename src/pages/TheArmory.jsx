import { motion } from 'framer-motion';
import TerminalWindow from '../components/ui/TerminalWindow';
import TextReveal from '../components/animations/TextReveal';
import GlowingButton from '../components/ui/GlowingButton';
import { armoryData } from '../data/projects';
import { FaGithub, FaFilePdf, FaTerminal, FaShieldAlt, FaLinux, FaWindows } from 'react-icons/fa';

const TheArmory = () => {
  return (
    <div className="space-y-16 pb-20">
      {/* Section Header & Hacker Intro */}
      <section className="pt-8 space-y-6">
        <div className="inline-block border border-cyber-red/30 bg-cyber-red/10 px-3 py-1">
          <span className="text-cyber-red text-xs tracking-widest uppercase animate-pulse flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyber-red animate-ping"></span>
            RESTRICTED_ACCESS // THE_ARMORY_VAULT
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-cyber-text tracking-tight uppercase">
          <TextReveal text="Tactical" /> <span className="text-cyber-red text-glow-red"><TextReveal text="Armory" delay={0.4} /></span>
        </h1>

        {/* Hacker Tone Vault Intro */}
        <TerminalWindow title="VAULT_MANIFESTO.sh" className="border-cyber-red/40">
          <div className="space-y-3 font-mono text-sm md:text-base text-cyber-text/90">
            <p className="text-cyber-red font-bold flex items-center gap-2">
              <FaShieldAlt /> &gt; [WARNING]: ACCESSING WEAPONIZED ARSENAL & INTELLIGENCE PAYLOADS.
            </p>
            <p className="leading-relaxed border-l-2 border-cyber-red/50 pl-4 bg-cyber-red/5 py-2">
              Welcome to the Armory. This vault stores cryptographically hardened command-line tools, automation utilities, and deep-dive threat intelligence research. All tools and payloads hosted within these nodes are engineered strictly for defensive reinforcement, vulnerability mitigation, and ethical research. Wield them with precision.
            </p>
            <p className="text-xs text-cyber-cyan opacity-80 pt-2">
              $ systemctl status vault-integrity --state=active --verified=true
            </p>
          </div>
        </TerminalWindow>
      </section>

      {/* CATEGORY 01: CLI TOOLS & AUTOMATION */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <FaTerminal className="text-2xl text-cyber-cyan animate-pulse" />
          <h2 className="text-2xl font-bold text-cyber-cyan text-glow-cyan uppercase tracking-widest">
            [01] Tactical_CLI_Tools
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-cyber-cyan/50 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {armoryData.cliTools.map((tool, idx) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="border border-cyber-cyan/40 bg-cyber-dark/80 relative group overflow-hidden shadow-lg shadow-cyber-black"
            >
              {/* Top Accent Bar */}
              <div className="h-1 bg-gradient-to-r from-cyber-cyan via-cyber-blue to-transparent"></div>
              
              <div className="p-6 md:p-8 space-y-6">
                {/* Header Info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-cyber-gray pb-4">
                  <div>
                    <span className="text-xs font-mono px-2 py-1 bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/30">
                      {tool.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-cyber-text mt-2 text-glow-cyan">
                      {tool.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-cyber-text/50">{tool.license}</span>
                </div>

                {/* ASCII Art Box */}
                {tool.asciiArt && (
                  <div className="bg-cyber-black p-4 border border-cyber-gray/80 overflow-x-auto selection:bg-cyber-cyan selection:text-cyber-black">
                    <pre className="font-mono text-[10px] md:text-xs leading-none text-cyber-cyan text-glow-cyan">
                      {tool.asciiArt}
                    </pre>
                  </div>
                )}

                {/* Description */}
                <p className="text-cyber-text/80 leading-relaxed font-mono text-sm md:text-base border-l-2 border-cyber-gray pl-4">
                  {tool.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-widest text-cyber-cyan/80 font-bold block">
                    {"// ARCHITECTURE & MODULES:"}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {tool.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 bg-cyber-black border border-cyber-gray text-cyber-text hover:border-cyber-cyan/50 hover:text-cyber-cyan transition-colors"
                      >
                        &gt; {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions Block */}
                <div className="pt-4 border-t border-cyber-gray flex flex-wrap items-center justify-between gap-4">
                  <a
                    href={tool.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-mono text-cyber-text hover:text-cyber-cyan transition-colors"
                  >
                    <FaGithub className="text-lg" />
                    <span>github\ripper-fence</span>
                  </a>

                  <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                    {/* Windows EXE Download */}
                    <a href={tool.downloads.exe} download className="flex-1 sm:flex-none">
                      <GlowingButton color="cyan" className="text-xs w-full flex items-center justify-center gap-2 py-2.5">
                        <FaWindows className="text-sm" />
                        <span>DOWNLOAD .EXE</span>
                      </GlowingButton>
                    </a>

                    {/* Debian/Kali DEB Download */}
                    <a href={tool.downloads.deb} download className="flex-1 sm:flex-none">
                      <GlowingButton color="blue" className="text-xs w-full flex items-center justify-center gap-2 py-2.5">
                        <FaLinux className="text-sm" />
                        <span>DOWNLOAD .DEB</span>
                      </GlowingButton>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CATEGORY 02: RESEARCH PAPERS & THREAT INTEL */}
      <section className="space-y-8 pt-8">
        <div className="flex items-center gap-4">
          <FaShieldAlt className="text-2xl text-cyber-red animate-pulse" />
          <h2 className="text-2xl font-bold text-cyber-red text-glow-red uppercase tracking-widest">
            [02] Threat_Intel_Research
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-cyber-red/50 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {armoryData.researchPapers.map((paper, idx) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="border border-cyber-red/40 bg-cyber-dark/80 relative group overflow-hidden shadow-lg shadow-cyber-black"
            >
              {/* Top Accent Bar */}
              <div className="h-1 bg-gradient-to-r from-cyber-red via-yellow-500 to-transparent"></div>

              <div className="p-6 md:p-8 space-y-6">
                {/* Header Info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-cyber-gray pb-4">
                  <div>
                    <div className="flex flex-wrap gap-2 items-center">
                      <span className="text-xs font-mono px-2 py-1 bg-cyber-red/10 text-cyber-red border border-cyber-red/30">
                        {paper.category}
                      </span>
                      <span className="text-xs font-mono px-2 py-1 bg-yellow-500/10 text-yellow-500 border border-yellow-500/30">
                        {paper.standard}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-cyber-text mt-3 text-glow-red">
                      {paper.title}
                    </h3>
                    <p className="text-sm font-mono text-cyber-text/70 mt-1">&gt;&gt; {paper.subtitle}</p>
                  </div>
                </div>

                {/*/!* ASCII Art Box *!/*/}
                {/*{paper.asciiArt && (*/}
                {/*  <div className="bg-cyber-black p-4 border border-cyber-gray/80 overflow-x-auto selection:bg-cyber-red selection:text-cyber-black">*/}
                {/*    <pre className="font-mono text-[9px] md:text-xs leading-none text-cyber-red text-glow-red">*/}
                {/*      {paper.asciiArt}*/}
                {/*    </pre>*/}
                {/*  </div>*/}
                {/*)}*/}

                {/* Description */}
                <p className="text-cyber-text/80 leading-relaxed font-mono text-sm md:text-base border-l-2 border-cyber-red/50 pl-4 bg-cyber-red/5 py-2">
                  {paper.description}
                </p>

                {/* Tech Stack / Analysis Vectors Tags */}
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-widest text-cyber-red/80 font-bold block">
                    {"// ANALYZED ATTACK VECTORS & MECHANICS:"}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {paper.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 bg-cyber-black border border-cyber-gray text-cyber-text hover:border-cyber-red/50 hover:text-cyber-red transition-colors"
                      >
                        [#] {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions Block */}
                <div className="pt-4 border-t border-cyber-gray flex justify-end">
                  {/* PDF Download */}
                  <a href={paper.downloads.pdf} download className="w-full sm:w-auto">
                    <GlowingButton color="red" className="text-xs w-full flex items-center justify-center gap-2 py-2.5">
                      <FaFilePdf className="text-base" />
                      <span>DOWNLOAD RESEARCH (.PDF)</span>
                    </GlowingButton>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TheArmory;