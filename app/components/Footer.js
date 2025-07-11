'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className=" font-dominik bg-primary text-[#f2e8dd] px-6 md:px-20 py-16 text-sm">
      <div className="max-w-7xl mx-auto">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:justify-between mb-12">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold mb-10 md:mb-0"
          >
            Vexa-Architect
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm"
          >
            <div>
              <Link href="/works">Works</Link>
            </div>
            <div>
              <Link href="/about">About Us</Link>
            
            </div>
            <div>
              <Link href="/team">Team</Link>
              
            </div>
            <div>
              <Link href="/articles">Articles</Link>
            </div>
          </motion.div>
        </div>

        {/* Middle Row */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Office Info */}
          <div>
            
            <div className="mt-4 space-y-1">
              <Link href="#" className="hover:underline block">
                LinkedIn
              </Link>
              <Link href="#" className="hover:underline block">
                Instagram
              </Link>
            </div>
          </div>

          {/* Phone & Email */}
          <div>
            <h4 className="font-medium text-base mb-2">Phone</h4>
            <p className="text-[#e3dfd3] mb-4">+917561819183</p>
            <h4 className="font-medium text-base mb-2">Email</h4>
            <Link href="mailto:mail@archipelago.com.au" className="text-secondary underline">
              vexaarchitect@gmail.com
            </Link>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="font-medium text-base mb-2">Subscribe</h4>
            <p className="text-[#e3dfd3] mb-4">
              Our strategy, thinking and insights. Shared with you.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full bg-transparent border-b border-[#bfb8aa] focus:outline-none py-2 text-[#f2e8dd] placeholder:text-[#bfb8aa]"
              />
              <button type="submit" className="absolute right-0 top-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-[#f2e8dd]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </form>

          
          </div>
        </div>

        {/* Bottom border */}
        <div className="border-t border-[#bfb8aa] pt-6 text-xs text-[#bfb8aa] text-center">
          © {new Date().getFullYear()} Vexa-Architect. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
