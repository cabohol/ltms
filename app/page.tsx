"use client";

import React, { useState } from 'react';
import { Home, GraduationCap, Phone, UserPlus, LogIn, Menu, X } from 'lucide-react';

export default function LTMSPortal() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      {/* Navigation */}
      <nav className="bg-blue-900/95 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Land_Transportation_Office.svg/1200px-Land_Transportation_Office.svg.png" alt="" className="w-10 h-10" />
              <span className="text-white font-bold text-lg tracking-wide">
                LTMS PORTAL
              </span>
            </div>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center space-x-1">
              <NavLink icon={<Home size={18} />} href="#" label="LTO OFFICIAL WEBPAGE" />
              <NavLink icon={<GraduationCap size={18} />} href="#" label="E-LEARNING" />
              <NavLink icon={<Phone size={18} />} href="#" label="CONTACT" />
              <NavLink icon={<UserPlus size={18} />} href="#" label="REGISTER" />
              <NavLink icon={<LogIn size={18} />} href="#" label="LOGIN" />
            </div>

            {/* Hamburger Menu Button - Mobile */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-white/10">
              <MobileNavLink icon={<Home size={18} />} href="#" label="LTO OFFICIAL WEBPAGE" onClick={() => setIsMobileMenuOpen(false)} />
              <MobileNavLink icon={<GraduationCap size={18} />} href="#" label="E-LEARNING" onClick={() => setIsMobileMenuOpen(false)} />
              <MobileNavLink icon={<Phone size={18} />} href="#" label="CONTACT" onClick={() => setIsMobileMenuOpen(false)} />
              <MobileNavLink icon={<UserPlus size={18} />} href="#" label="REGISTER" onClick={() => setIsMobileMenuOpen(false)} />
              <MobileNavLink icon={<LogIn size={18} />} href="#" label="LOGIN" onClick={() => setIsMobileMenuOpen(false)} />
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center space-y-8">
            {/* Title with enhanced contrast */}
            <h1 className="text-white font-bold tracking-tight drop-shadow-lg">
              <span className="block text-xl sm:text-2xl mb-2 font-medium">
                Land Transportation Management System
              </span>
            </h1>

            {/* LTO Logo */}
            <div className="flex justify-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Land_Transportation_Office.svg/1200px-Land_Transportation_Office.svg.png" alt="" className="w-50 mb-6" />
            </div>

            {/* LTMS PORTAL Text */}
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight drop-shadow-2xl">
              LTMS PORTAL
            </h2>

            {/* Tagline - WCAG Compliant with high contrast */}
            <p className="max-w-4xl mx-auto text-lg sm:text-xl lg:text-2xl text-white font-medium leading-relaxed drop-shadow-lg px-4">
              A front line government agency showcasing fast and efficient public service 
              for a progressive land transport sector
            </p>

            {/* CTA Buttons - Enhanced contrast and accessibility */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <button className="group relative px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-lg shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-500/50 w-full sm:w-auto">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <UserPlus size={24} />
                  REGISTER NOW
                </span>
              </button>
              
              <button className="group relative px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-lg rounded-lg border-2 border-white shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50 w-full sm:w-auto">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <LogIn size={24} />
                  LOG IN
                </span>
              </button>
            </div>

            {/* Stats Section - Enhanced contrast */}
            <div className="pt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-white">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-semibold text-sm sm:text-base">Release 2.5.4</span>
              </div>
              
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                </svg>
                <span className="font-semibold text-sm sm:text-base">943,683,501 page visits</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Branding */}
        <div className="absolute bottom-8 right-8 opacity-80">
          <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
            <p className="text-white text-xs font-semibold">Management Information Division</p>
          </div>
        </div>
      </main>
    </div>
  );
}

// Reusable Navigation Link Component
function NavLink({ icon, href, label }) {
  return (
    <a
      href={href}
      className="flex items-center gap-2 px-4 py-2 text-white font-semibold text-sm rounded-lg hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/10"
      aria-label={label}
    >
      {icon}
      <span className="hidden lg:inline">{label}</span>
    </a>
  );
}

// Mobile Navigation Link Component
function MobileNavLink({ icon, href, label, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="flex items-center gap-3 px-4 py-3 text-white font-semibold text-base rounded-lg hover:bg-white/10 active:bg-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
      aria-label={label}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}