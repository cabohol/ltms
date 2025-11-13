"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { User, Globe, GraduationCap, Mail, FileText, MessageSquare, LogIn, UserPlus, Menu, Phone, Smartphone } from "lucide-react";

export default function ContactPage() {
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
      style={{ backgroundImage: "url('/mechanic.jpeg')" }}
    >
    <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-[1px]"></div>

      {/* Navigation */}
      <nav className="bg-blue-900/95 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
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
            </Link>

            {/* Navigation Links - Center */}
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
                    <div className="h-1 bg-gradient-to-r from-red-600 to-red-500"></div>
                    
                    <div className="py-3">
                      <div className="space-y-1 px-2">
                        <DropdownLink 
                          icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>}
                          href="#" 
                          label="CDE Online Validation Exam" 
                        />
                        <DropdownLink 
                          icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/></svg>}
                          href="#" 
                          label="Driver's License Renewal Course" 
                        />
                        <DropdownLink 
                          icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/></svg>}
                          href="#" 
                          label="LTO Client ID Tutorial" 
                        />
                        <DropdownLink 
                          icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"/></svg>}
                          href="#" 
                          label="Driver's Manual" 
                        />
                      </div>

                      <div className="my-3 px-4">
                        <div className="h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"></div>
                      </div>

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
                <div className="relative">
                <Link
                  href="/contact"
                  className="flex items-center gap-2 px-4 py-2 text-white font-semibold text-sm rounded-lg hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/10"
                  aria-label="CONTACT"
                >
                  <LogIn size={18} />
                  <span className="hidden lg:inline">CONTACT</span>
                </Link>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
              </div>
              <NavLink icon={<UserPlus size={18} />} href="/register" label="REGISTER" />
              <NavLink icon={<UserPlus size={18} />} href="/login" label="LOGIN" />
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

<div className="relative z-10 flex justify-center items-center py-16 px-4">
  <div className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-xl p-8 w-full max-w-5xl border border-gray-200 relative">
{/* Logo + Title Row */}
<div className="flex items-center gap-4 mb-6">
  <Image
    src="/ltologo.png"
    alt="LTO Logo"
    width={70}
    height={70}
    className="w-25 h-25 object-contain"
  />

  <h2 className="text-2xl font-bold text-blue-900">
    Write an email to LTO Client Care
  </h2>
</div>

<form className="space-y-5 relative">
  {/* Full Name */}
  <div>
    <label className="block text-sm font-semibold text-blue-900 mb-1">
      Full Name or Client ID <span className="text-red-600">*</span>
    </label>

    <div className="relative">
      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-700" size={18} />
      <div className="absolute left-11 top-2 bottom-2 w-px bg-gray-300"></div>

      <input
        type="text"
        className="w-full px-4 py-3 pl-16 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-500 outline-none"
        placeholder="Name/Client ID"
      />
    </div>
  </div>

  {/* Email */}
  <div>
    <label className="block text-sm font-semibold text-blue-900 mb-1">
      Email <span className="text-red-600">*</span>
    </label>

    <div className="relative">
      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-700" size={18} />
      <div className="absolute left-11 top-2 bottom-2 w-px bg-gray-300"></div>

      <input
        type="email"
        className="w-full px-4 py-3 pl-16 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-500 outline-none"
        placeholder="Enter your email"
      />
    </div>
  </div>

  {/* Contact Number */}
<div>
  <label className="block text-sm font-semibold text-blue-900 mb-1">
    Contact Number <span className="text-red-600">*</span>
  </label>

  <div className="flex gap-4">

    {/* Area Code */}
    <div className="relative w-32">
      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-700" size={18} />
      <div className="absolute left-11 top-2 bottom-2 w-px bg-gray-300"></div>

      <input
        type="text"
        className="w-full px-1 py-3 pl-16 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-500 outline-none"
        placeholder="e.g. +63"
      />
    </div>

    {/* Mobile Number */}
    <div className="relative flex-1">
      <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-700" size={18} />
      <div className="absolute left-11 top-2 bottom-2 w-px bg-gray-300"></div>

      <input
        type="text"
        className="w-full px-4 py-3 pl-16 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-500 outline-none"
        placeholder="Enter mobile number"
      />
    </div>

  </div>
</div>


  {/* Subject */}
  <div>
    <label className="block text-sm font-semibold text-blue-900 mb-1">
      Topic of your inquiry <span className="text-red-600">*</span>
    </label>

    <div className="relative">
      <FileText className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-700" size={18} />
      <div className="absolute left-11 top-2 bottom-2 w-px bg-gray-300"></div>

      <input
        type="text"
        className="w-full px-4 py-3 pl-16 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-500 outline-none"
        placeholder="Enter topic of your inquiry"
      />
    </div>
  </div>

  {/* Message */}
  <div>
    <label className="block text-sm font-semibold text-blue-900 mb-1">
      Let us know of your concern <span className="text-red-600">*</span>
    </label>

    <div className="relative">
      <MessageSquare className="absolute left-4 top-4 text-blue-700" size={18} />
      <div className="absolute left-11 top-3 bottom-3 w-px bg-gray-300"></div>

      <textarea
        className="w-full px-4 py-3 pl-16 rounded-lg border border-gray-300 h-32 resize-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500 outline-none"
        placeholder="Write your message..."
      ></textarea>
    </div>
  </div>

  {/* Submit */}
  <button
    type="submit"
    className="w-full bg-blue-900 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-all shadow-md"
  >
    Send Message
  </button>
</form>

  </div>
</div>



    </div>
  );
}

// Navigation Components
function NavLink({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 px-4 py-2 text-white font-semibold text-sm rounded-lg hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/10"
      aria-label={label}
    >
      {icon}
      <span className="hidden lg:inline">{label}</span>
    </Link>
  );
}

function MobileNavLink({ icon, href, label, onClick }: { icon: React.ReactNode; href: string; label: string; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center gap-3 px-4 py-3 text-white font-semibold text-base rounded-lg hover:bg-white/10 active:bg-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
      aria-label={label}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}

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