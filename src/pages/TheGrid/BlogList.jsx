/* global document */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TerminalWindow from '../../components/ui/TerminalWindow';
import TextReveal from '../../components/animations/TextReveal';
import GlowingButton from '../../components/ui/GlowingButton';
import { blogPosts } from './posts/blogData';
import { FaNetworkWired, FaTimes, FaCalendarAlt, FaUserSecret } from 'react-icons/fa';

const BlogList = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  // Safely lock body scroll when modal is open using a side-effect hook
  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function in case the component unmounts while modal is open
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedPost]);

  return (
    <div className="space-y-16 pb-20 relative">
      
      {/* Header & Hacker Intro */}
      <section className="pt-8 space-y-6">
        <div className="inline-block border border-cyber-cyan/30 bg-cyber-cyan/10 px-3 py-1">
          <span className="text-cyber-cyan text-xs tracking-widest uppercase animate-pulse flex items-center gap-2">
            <FaNetworkWired /> INTEL_UPLINK // THE_GRID
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-cyber-text tracking-tight uppercase">
          <TextReveal text="The_Grid" />
        </h1>

        <TerminalWindow title="GRID_INTERFACE.sh" className="border-cyber-cyan/40">
          <div className="space-y-3 font-mono text-sm md:text-base text-cyber-text/90">
            <p className="text-cyber-cyan font-bold flex items-center gap-2">
              &gt; INITIALIZING INTEL DATABASE...
            </p>
            <p className="leading-relaxed border-l-2 border-cyber-cyan/50 pl-4 bg-cyber-cyan/5 py-2">
              Accessing classified write-ups, vulnerability deep-dives, and historical threat intelligence. The Grid serves as a repository for analyzing shadow market dynamics, malware evolution, and cyber warfare case studies. Parse the data carefully.
            </p>
          </div>
        </TerminalWindow>
      </section>

      {/* Blog Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="border border-cyber-gray bg-cyber-dark/80 group overflow-hidden flex flex-col shadow-lg shadow-cyber-black"
          >
            {/* 3:2 Aspect Ratio Image Container */}
            <div className="w-full aspect-[3/2] relative overflow-hidden bg-cyber-black border-b border-cyber-gray">
              {/* Fallback pattern if image fails/is missing */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:15px_15px]"></div>
              
              <img 
                src={post.image} 
                alt={post.title}
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "/background-crt.png"; // Fallback to your CRT image
                }}
                className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500 opacity-60 group-hover:opacity-100 group-hover:scale-105"
              />
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4 bg-cyber-black/80 border border-cyber-cyan text-cyber-cyan text-[10px] px-2 py-1 font-mono uppercase tracking-widest backdrop-blur-sm">
                {post.category}
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-4 text-xs font-mono text-cyber-text/50 mb-3 border-b border-cyber-gray/50 pb-3">
                <span className="flex items-center gap-1"><FaCalendarAlt /> {post.date}</span>
                <span className="flex items-center gap-1"><FaUserSecret /> {post.author}</span>
              </div>
              
              <h3 className="text-xl font-bold text-cyber-text mb-3 group-hover:text-cyber-cyan transition-colors line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-sm text-cyber-text/70 mb-6 font-mono leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>

              {/* Push button to bottom */}
              <div className="mt-auto">
                <GlowingButton 
                  color="cyan" 
                  className="w-full text-xs"
                  onClick={() => setSelectedPost(post)}
                >
                  DECRYPT PAYLOAD
                </GlowingButton>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Pop-up Modal (The Decrypted Post) */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-10 sm:p-6 bg-cyber-black/95 backdrop-blur-sm pt-20"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
              className="bg-cyber-dark border-2 border-cyber-cyan shadow-[0_0_30px_rgba(0,255,255,0.15)] w-full max-w-4xl max-h-[80vh] overflow-hidden flex flex-col relative"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-cyber-cyan/30 bg-cyber-black">
                <span className="text-cyber-cyan font-mono text-xs tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyber-cyan animate-pulse"></span>
                  SECURE_VIEWER_v1.0
                </span>
                <button 
                  onClick={() => setSelectedPost(null)}
                  className="text-cyber-text hover:text-cyber-red transition-colors p-1"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>

              {/* Modal Body (Scrollable) */}
              <div className="overflow-y-auto custom-scrollbar p-6 md:p-10">
                {/* Header Info */}
                <div className="mb-8">
                  <span className="text-cyber-cyan text-sm font-mono border border-cyber-cyan/30 px-2 py-1 mb-4 inline-block">
                    {selectedPost.category}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold text-cyber-text mb-4 text-glow-cyan leading-tight">
                    {selectedPost.title}
                  </h2>
                  <div className="flex items-center gap-6 text-sm font-mono text-cyber-text/50 border-b border-cyber-gray pb-6">
                    <span className="flex items-center gap-2"><FaCalendarAlt /> {selectedPost.date}</span>
                    <span className="flex items-center gap-2"><FaUserSecret /> {selectedPost.author}</span>
                  </div>
                </div>

                {/* Hero Image */}
                <div className="w-full aspect-[3/2] mb-8 border border-cyber-gray/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-cyber-cyan/5 mix-blend-overlay z-10 pointer-events-none"></div>
                  <img 
                    src={selectedPost.image} 
                    alt={selectedPost.title}
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "/background-crt.png";
                    }}
                    className="w-full h-full object-cover mix-blend-luminosity grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>

                {/* Article Content */}
                <div className="prose prose-invert prose-p:font-mono prose-p:text-cyber-text/90 prose-p:leading-loose max-w-none border-l-2 border-cyber-cyan/50 pl-6 bg-cyber-cyan/5 p-4">
                  {selectedPost.content.split('\n').map((paragraph, idx) => (
                    paragraph.trim() && (
                      <p key={idx} className="mb-6 last:mb-0">
                        {paragraph}
                      </p>
                    )
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BlogList;