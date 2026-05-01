"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="relative z-20 bg-[#0a0a0a] text-white py-32 px-10 md:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-20">
        <div className="max-w-md">
          <h2 className="text-4xl font-extralight tracking-[0.3em] mb-10 uppercase">AM GROUP</h2>
          <p className="text-neutral-400 font-light leading-relaxed mb-8">
            Redefining high-end residential development through sculptural form and emotional resonance. Our vision is to craft more than spaces — we shape the essence of living.
          </p>
          <div className="flex gap-6 opacity-60">
            {["Instagram", "LinkedIn", "Pinterest"].map((social) => (
              <span 
                key={social}
                className="text-[10px] tracking-widest cursor-pointer hover:opacity-100 transition-opacity uppercase border-b border-transparent hover:border-white/40 pb-1"
              >
                {social}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-20">
          <div>
            <h3 className="text-[10px] tracking-[0.4em] text-amber-500 mb-8 uppercase font-bold">Contact</h3>
            <ul className="space-y-4 text-sm font-light text-neutral-300">
              <li className="cursor-pointer hover:text-white transition-colors">Inquiries</li>
              <li className="cursor-pointer hover:text-white transition-colors">Press</li>
              <li className="cursor-pointer hover:text-white transition-colors">Careers</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[10px] tracking-[0.4em] text-amber-500 mb-8 uppercase font-bold">Office</h3>
            <p className="text-sm font-light text-neutral-300 leading-relaxed">
              123 Design Avenue<br />
              Suite 400<br />
              New York, NY 10013
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-32 pt-10 border-t border-white/5 flex justify-between items-center text-[10px] tracking-[0.2em] text-neutral-500 uppercase">
        <span>© 2024 AM Group. All rights reserved.</span>
        <span>Designed with precision.</span>
      </div>
    </footer>
  );
}
