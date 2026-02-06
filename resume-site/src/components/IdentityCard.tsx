"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { MdEmail, MdArrowUpward } from "react-icons/md";
import { resumeData } from "@/data/resume";
import { useTheme } from "@/context/ThemeContext";

export function IdentityCard() {
  const socialLinks = [
    { icon: FaGithub, href: resumeData.personal.github, label: "GitHub" },
    { icon: FaLinkedinIn, href: resumeData.personal.linkedin, label: "LinkedIn" },
    { icon: MdEmail, href: `mailto:${resumeData.personal.email}`, label: "Email" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative h-full w-full"
    >
      {/* Card container */}
      <div className="group relative h-full w-full overflow-hidden rounded-4xl bg-zinc-900 shadow-2xl">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0 select-none">
          <Image 
            src="https://picsum.photos/600/800?grayscale" 
            alt={resumeData.personal.name}
            fill
            className="object-cover"
            draggable={false}
            unoptimized
          />
          {/* Enhanced readability overlay gradients */}
          <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/90" />
          <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/60 to-transparent opacity-90" />
        </div>

        {/* Top Right Social Icons */}
        <div className="absolute right-0 top-0 z-20 p-6 flex flex-col gap-3">
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
            <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  opacity: { delay: 0.5 + index * 0.1, duration: 0.5 },
                  x: { delay: 0.5 + index * 0.1, duration: 0.5 },
                  scale: { type: "tween", duration: 0.15, ease: "easeOut" }
                }}
                whileHover={{ scale: 1.15, x: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-11 w-11 items-center justify-center rounded-full backdrop-blur-md hover:bg-white/30 hover:text-white hover:shadow-lg hover:shadow-white/20 border border-white/20 bg-white/10 text-zinc-200 shadow-md"
                style={{ transition: 'background-color 0.15s, color 0.15s, box-shadow 0.15s' }}
                aria-label={label}
            >
                <Icon size={20} />
            </motion.a>
            ))}
        </div>

        {/* Bottom Content */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-6 lg:p-8 flex flex-col">
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
                 <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-1">
                  {resumeData.personal.name}
                 </h1>
                 <p className="text-lg text-zinc-400 font-medium">
                  {resumeData.personal.title}
                 </p>
                 
                 {/* Divider line */}
                 <div className="mt-3 mb-1 h-px bg-linear-to-r from-zinc-700 via-zinc-600 to-transparent" />
            </motion.div>

            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-2 text-sm text-zinc-500 leading-relaxed max-w-[90%] line-clamp-3"
            >
                {resumeData.personal.tagline}
            </motion.p>
            
            <div className="pt-5">
                 <motion.a
                    href="/resume.pdf"
                    download="Alin_Balog_Resume.pdf"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      opacity: { delay: 0.4, duration: 0.6 },
                      y: { delay: 0.4, duration: 0.6, type: "tween" }
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="group/btn relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-lg py-3 px-5 font-semibold text-sm cursor-pointer border-2 border-zinc-600/50 bg-zinc-800/30 text-zinc-100 shadow-lg hover:text-zinc-900 hover:border-[var(--accent)] transition-colors duration-300"
                >
                    <span className="relative z-20">Download CV</span>
                    
                    <div className="relative z-20 flex items-center justify-center w-6 h-6 rounded-full border border-zinc-600 p-1 group-hover/btn:border-zinc-900 transition-all duration-300">
                      <MdArrowUpward size={14} className="rotate-45 group-hover/btn:rotate-[135deg] transition-transform duration-300" />
                    </div>
                    
                    {/* Circular fill animation */}
                    <div 
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-full aspect-square rounded-full z-0 scale-0 -translate-x-1/2 group-hover/btn:scale-[2.5] group-hover/btn:translate-x-0 transition-all duration-700 ease-out"
                      style={{ background: 'var(--accent)' }}
                    />
                </motion.a>
            </div>
        </div>
      </div>
    </motion.div>
  );
}
