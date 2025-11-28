"use client";

import React, { useState } from 'react';
import Image from "next/image";
import { Globe, GraduationCap, Phone, UserPlus, LogIn, Menu, X } from 'lucide-react';

export default function LTMSPortal() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isELearningOpen, setIsELearningOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleELearning = () => {
    setIsELearningOpen(!isELearningOpen);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/manila-traffic.jpg')", 
      }}
    >
      <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-[1px]"></div>
       {/* Navigation */}
        <nav className="bg-blue-900/95 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
            <div className="w-full px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                {/* Logo Section - Left */}
                <div className="flex items-center space-x-3 flex-shrink-0">
                  <Image 
                    src="/ltologo.png" 
                    alt="LTO Logo" 
                    width={40} 
                    height={40} 
                    className="w-10 h-10 object-contain"
                    priority
                  />
                  <span className="text-white font-bold text-lg tracking-wide">
                    LTMS PORTAL
                  </span>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center justify-center flex-1 gap-8">
                  <NavLink icon={<Globe size={18} />} href="https://lto.gov.ph/" label="LTO OFFICIAL WEBPAGE" />
                  <div className="relative">
                    <button
                      onClick={toggleELearning}
                      className="flex items-center gap-2 px-4 py-2 text-white font-semibold text-sm rounded-lg hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/10"
                      aria-label="E-LEARNING"
                    >
                      <GraduationCap size={18} />
                      <span className="hidden lg:inline">E-LEARNING</span>
                      <svg 
                        className={`w-4 h-4 transition-transform ${isELearningOpen ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* E-Learning Dropdown */}
                    {isELearningOpen && (
                      <div className="absolute top-full left-0 mt-2 w-96 bg-blue-900/98 backdrop-blur-md rounded-xl shadow-2xl border border-blue-400/30 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        {/* Red accent bar at top */}
                        <div className="h-1 bg-gradient-to-r from-red-600 to-red-500"></div>
                        
                        <div className="py-3">
                          {/* Main Menu Items */}
                          <div className="space-y-1 px-2">
                            <DropdownLink 
                              icon={
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                </svg>
                              }
                              href="#" 
                              label="CDE Online Validation Exam" 
                            />
                            <DropdownLink 
                              icon={
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                                </svg>
                              }
                              href="#" 
                              label="Driver's License Renewal Course" 
                            />
                            <DropdownLink 
                              icon={
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
                                </svg>
                              }
                              href="#" 
                              label="LTO Client ID Tutorial" 
                            />
                            <DropdownLink 
                              icon={
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"/>
                                </svg>
                              }
                              href="#" 
                              label="Driver's Manual" 
                            />
                          </div>

                          {/* Divider */}
                          <div className="my-3 px-4">
                            <div className="h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"></div>
                          </div>

                          {/* Sub Menu Items */}
                          <div className="space-y-0.5 px-2">
                            <DropdownSubLink href="#" label="Licensing Information" />
                            <DropdownSubLink href="#" label="Getting Ready to Drive" />
                            <DropdownSubLink href="#" label="Driving Fundamentals" />
                            <DropdownSubLink href="#" label="Road Courtesy and Safety" />
                            <DropdownSubLink href="#" label="Rights, Duties and Responsibilities of Drivers" />
                            <DropdownSubLink href="#" label="Motor Vehicle Registration" />
                            <DropdownSubLink href="#" label="Land Transportation Related Laws" />
                            <DropdownSubLink href="#" label="Fines and Penalties for Violations" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <NavLink icon={<Phone size={18} />} href="/contact" label="CONTACT" />
                  <NavLink icon={<UserPlus size={18} />} href="/register" label="REGISTER" />
                  <NavLink icon={<LogIn size={18} />} href="/login" label="LOGIN" />
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
                  <MobileNavLink icon={<Globe size={18} />} href="https://lto.gov.ph/" label="LTO OFFICIAL WEBPAGE" onClick={() => setIsMobileMenuOpen(false)} />
                  {/* E-Learning Mobile Dropdown */}
                  <div>
                    <button
                      onClick={toggleELearning}
                      className="w-full flex items-center justify-between gap-3 px-4 py-3 text-white font-semibold text-base rounded-lg hover:bg-white/10 active:bg-white/20 transition-all duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <GraduationCap size={18} />
                        <span>E-LEARNING</span>
                      </div>
                      <svg 
                        className={`w-4 h-4 transition-transform ${isELearningOpen ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Mobile E-Learning Submenu */}
                    {isELearningOpen && (
                      <div className="bg-blue-800/50 rounded-lg mx-2 mt-1 mb-2 overflow-hidden">
                        <div className="py-2">
                          <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-white font-medium text-sm hover:bg-white/10">
                            <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                            <span>CDE Online Validation Exam</span>
                          </a>
                          <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-white font-medium text-sm hover:bg-white/10">
                            <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/></svg>
                            <span>Driver's License Renewal Course</span>
                          </a>
                          <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-white font-medium text-sm hover:bg-white/10">
                            <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/></svg>
                            <span>LTO Client ID Tutorial</span>
                          </a>
                          <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-white font-medium text-sm hover:bg-white/10">
                            <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"/></svg>
                            <span>Driver's Manual</span>
                          </a>
                          <div className="border-t border-white/10 my-2"></div>
                          <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-2 pl-10 text-white/90 text-sm hover:bg-white/10"><span className="text-blue-400 text-xs">▸</span><span>Licensing Information</span></a>
                          <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-2 pl-10 text-white/90 text-sm hover:bg-white/10"><span className="text-blue-400 text-xs">▸</span><span>Getting Ready to Drive</span></a>
                          <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-2 pl-10 text-white/90 text-sm hover:bg-white/10"><span className="text-blue-400 text-xs">▸</span><span>Driving Fundamentals</span></a>
                          <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-2 pl-10 text-white/90 text-sm hover:bg-white/10"><span className="text-blue-400 text-xs">▸</span><span>Road Courtesy and Safety</span></a>
                          <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-2 pl-10 text-white/90 text-sm hover:bg-white/10"><span className="text-blue-400 text-xs">▸</span><span>Rights, Duties and Responsibilities of Drivers</span></a>
                          <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-2 pl-10 text-white/90 text-sm hover:bg-white/10"><span className="text-blue-400 text-xs">▸</span><span>Motor Vehicle Registration</span></a>
                          <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-2 pl-10 text-white/90 text-sm hover:bg-white/10"><span className="text-blue-400 text-xs">▸</span><span>Land Transportation Related Laws</span></a>
                          <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-2 pl-10 text-white/90 text-sm hover:bg-white/10"><span className="text-blue-400 text-xs">▸</span><span>Fines and Penalties for Violations</span></a>
                        </div>
                      </div>
                    )}
                  </div>              
                  <MobileNavLink icon={<Phone size={18} />} href="/contact" label="CONTACT" onClick={() => setIsMobileMenuOpen(false)} />
                  <MobileNavLink icon={<UserPlus size={18} />} href="/register" label="REGISTER" onClick={() => setIsMobileMenuOpen(false)} />
                  <MobileNavLink icon={<LogIn size={18} />} href="/login" label="LOGIN" onClick={() => setIsMobileMenuOpen(false)} />
                </div>
              )}
            </div>
        </nav>

      <main className="relative overflow-hidden">
        {/* Animated Background Pattern */}
        {/* <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div> */}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-13">
          <div className="text-center space-y-8">
            {/* Title with enhanced contrast */}
            {/* <h1 className="text-white font-bold tracking-tight drop-shadow-lg -mt-8">
              <span className="block text-xl sm:text-2xl mb-2 font-medium">
                Land Transportation Management System
              </span>
            </h1> */}

            {/* LTO Logo */}
            <div className="flex justify-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Land_Transportation_Office.svg/1200px-Land_Transportation_Office.svg.png" alt="" className="w-50 mb-6 animate-in fade-in slide-in-from-top duration-1000" />
            </div>

            {/* LTMS PORTAL Text */}
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight drop-shadow-2xl -mt-8 animate-in fade-in slide-in-from-top duration-1000">
              LTMS PORTAL
            </h2>

            <p className="max-w-4xl mx-auto text-lg sm:text-xl lg:text-2xl text-white font-medium leading-relaxed drop-shadow-lg px-4 -mt-5 animate-in fade-in slide-in-from-top duration-1000">
              A front line government agency showcasing fast and efficient public service 
              for a progressive land transport sector
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a href="/register" className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-lg shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-500/50 w-full sm:w-auto block text-center">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <UserPlus size={24} />
                  REGISTER NOW
                </span>
              </a>
              
              <a href="/login"
              className="group relative px-8 py-4 bg-white text-blue-700 font-semibold text-lg rounded-xl border-2 border-blue-700 
                        shadow-sm hover:bg-blue-50 
                        transition-all duration-300 hover:scale-[1.03]
                        focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300 
                        w-full sm:w-auto block text-center">
              <span className="relative z-10 flex items-center justify-center gap-2">
                <LogIn size={24} aria-hidden="true" />
                <span>Log In</span>
              </span>
            </a>
            </div>

            <div className="pb-9 sm:pt-5 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white px-4">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/20 w-full sm:w-auto max-w-[280px] sm:max-w-none">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0"></div>
                <span className="font-semibold text-xs sm:text-sm md:text-base">Release 2.5.4</span>
              </div>
              
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/20 w-full sm:w-auto max-w-[280px] sm:max-w-none">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                </svg>
                <span className="font-semibold text-xs sm:text-sm md:text-base">943,683,501 page visits</span>
              </div>
            </div>
          </div>
        </div>

        {/* MID */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 left-4 sm:left-auto">
          <div className="bg-blue-800/95 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg border border-blue-400/40 shadow-xl">
            <div className="flex items-center gap-2 sm:gap-3 justify-center sm:justify-start">
              <Image 
                src="/ltologo.png" 
                alt="LTO Logo" 
                width={48} 
                height={48} 
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain flex-shrink-0"
              />
              <div className="flex flex-col items-start">
                <span className="text-white font-bold text-[10px] sm:text-xs md:text-sm tracking-wide leading-tight">
                  MANAGEMENT INFORMATION
                </span>
                <span className="text-blue-200 font-semibold text-[9px] sm:text-[10px] md:text-xs tracking-wider leading-tight">
                  DIVISION (MID)
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Reusable Navigation Link Component
function NavLink({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) {
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
function MobileNavLink({ icon, href, label, onClick }: { icon: React.ReactNode; href: string; label: string; onClick: () => void }) {
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

// Dropdown Link Component
function DropdownLink({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) {
  return (
    <a
      href={href}
      className="group flex items-center gap-3 px-4 py-3 text-white font-semibold text-sm rounded-lg hover:bg-blue-800/60 active:bg-blue-700/80 transition-all duration-200 hover:translate-x-1"
    >
      <span className="text-blue-300 group-hover:text-white transition-colors">{icon}</span>
      <span className="group-hover:text-blue-100">{label}</span>
    </a>
  );
}

// Dropdown Sub Link Component
function DropdownSubLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="group flex items-center gap-3 px-4 py-2.5 pl-10 text-white/90 text-sm rounded-lg hover:bg-blue-800/40 active:bg-blue-700/60 transition-all duration-200 hover:translate-x-1"
    >
      <span className="text-blue-400 text-xs group-hover:text-blue-200 transition-colors">▸</span>
      <span className="group-hover:text-white">{label}</span>
    </a>
  );
}