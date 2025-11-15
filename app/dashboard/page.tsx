"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Globe, GraduationCap, Phone, UserPlus, LogIn, Menu, X, User, FileText, Car, Receipt, Landmark, File, UserCircle, Home } from 'lucide-react';

export default function DashboardPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isELearningOpen, setIsELearningOpen] = useState(false);
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(true);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const userName = "JUAN DELA CRUZ";
  const userClientId = "DELA CRUZ - 25-030915-0841627";

  const modules = [
    { id: 'digital-id', name: 'DIGITAL ID', icon: <UserCircle size={48} />, description: 'Manage your digital identification' },
    { id: 'licensing', name: 'LICENSING', icon: <FileText size={48} />, description: 'Driver license applications and renewals' },
    { id: 'vehicle', name: 'VEHICLE', icon: <Car size={48} />, description: 'Vehicle registration and management' },
    { id: 'transactions', name: 'TRANSACTIONS', icon: <Receipt size={48} />, description: 'View transaction history and receipts' },
    { id: 'violations', name: 'VIOLATIONS', icon: <Landmark size={48} />, description: 'Check and pay traffic violations'},
    { id: 'documents', name: 'DOCUMENTS', icon: <File size={48} />, description: 'Access and download documents' },
    { id: 'profile', name: 'PROFILE', icon: <User size={48} />, description: 'Update your account information' },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleELearning = () => setIsELearningOpen(!isELearningOpen);

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "url('/mechanic.jpeg')" }}>
      <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-[1px]"></div>
      
      {/* Navigation */}
      <nav className="relative bg-blue-900/95 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-3 flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg">
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

            {/* Desktop Navigation Links - Center */}
            <div className="hidden md:flex items-center justify-center flex-1 gap-4">
              <NavLink icon={<Globe size={18} />} href="https://lto.gov.ph/" label="LTO OFFICIAL WEBPAGE" />

              {/* E-Learning Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleELearning}
                  className="flex items-center gap-2 px-4 py-2 text-white font-semibold text-sm rounded-lg hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/10"
                  aria-label="E-LEARNING"
                  aria-expanded={isELearningOpen}
                >
                  <GraduationCap size={18} />
                  <span className="hidden lg:inline">E-LEARNING</span>
                  <svg 
                    className={`w-4 h-4 transition-transform ${isELearningOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
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

              <NavLink icon={<Phone size={18} />} href="/contact" label="CONTACT" />
              <div className="relative">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 px-4 py-2 text-white font-semibold text-sm rounded-lg hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/10"
                  aria-label="DASHBOARD"
                  aria-current="page"
                >
                  <Home size={18} />
                  <span className="hidden lg:inline">DASHBOARD</span>
                </Link>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
              </div>
              
              {/* User Menu Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-2 px-4 py-2 text-white font-semibold text-sm rounded-lg hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/10"
                  aria-label="User menu"
                  aria-expanded={isUserMenuOpen}
                >
                  <User size={18} />
                  <span className="hidden xl:inline">{userClientId}</span>
                  <svg 
                    className={`w-4 h-4 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* User Dropdown Menu */}
                {isUserMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-64 bg-blue-900/98 backdrop-blur-md rounded-xl shadow-2xl border border-blue-400/30 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="h-1 bg-gradient-to-r from-red-600 to-red-500"></div>
                    
                    <div className="py-2">
                      <div className="px-4 py-3 border-b border-white/10">
                        <p className="text-white font-semibold text-sm">{userName}</p>
                        <p className="text-blue-300 text-xs mt-1">{userClientId}</p>
                      </div>
                      
                      <a
                        href="/login"
                        className="group flex items-center gap-3 px-4 py-3 text-white font-semibold text-sm rounded-lg hover:bg-blue-800/60 active:bg-blue-700/80 transition-all duration-200 hover:translate-x-1 focus:outline-none focus:ring-2 focus:ring-white/50 m-2"
                        aria-label="Logout"
                      >
                        <svg className="w-5 h-5 text-red-400 group-hover:text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <span className="group-hover:text-blue-100">Logout</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Hamburger Menu Button - Mobile */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
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
                      <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-2 pl-10 text-white/90 text-sm hover:bg-white/10"><span className="text-blue-400 text-xs">▸</span><span>Rights, Duties and Responsibilities</span></a>
                      <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-2 pl-10 text-white/90 text-sm hover:bg-white/10"><span className="text-blue-400 text-xs">▸</span><span>Motor Vehicle Registration</span></a>
                      <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-2 pl-10 text-white/90 text-sm hover:bg-white/10"><span className="text-blue-400 text-xs">▸</span><span>Land Transportation Related Laws</span></a>
                      <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-2 pl-10 text-white/90 text-sm hover:bg-white/10"><span className="text-blue-400 text-xs">▸</span><span>Fines and Penalties for Violations</span></a>
                    </div>
                  </div>
                )}
              </div>
              
              <MobileNavLink icon={<Phone size={18} />} href="/contact" label="CONTACT" onClick={() => setIsMobileMenuOpen(false)} />
              <MobileNavLink icon={<Home size={18} />} href="/dashboard" label="DASHBOARD" onClick={() => setIsMobileMenuOpen(false)} />
              <div className="flex items-center gap-3 px-4 py-3 text-white font-semibold text-sm">
                <User size={18} />
                <span className="text-xs">{userClientId}</span>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative overflow-hidden min-h-[calc(100vh-4rem)]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            {/* LTO Logo */}
            <div className="flex justify-center mb-6">
              <div className="relative group">
                 {/* LTO Logo */}
            <div className="flex justify-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Land_Transportation_Office.svg/1200px-Land_Transportation_Office.svg.png" alt="" className="w-50 mb-6" />
            </div>

              </div>
            </div>

            {/* Welcome Message - High Contrast */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-2xl animate-in fade-in slide-in-from-top duration-1000">
              WELCOME, <span className="text-white font-black">{userName}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white font-semibold drop-shadow-lg animate-in fade-in slide-in-from-top duration-1000">
              What would you like to do?
            </p>
          </div>

     
          {/* Dashboard Modules Grid */}
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 sm:gap-6 mb-8">
  {modules.map((module) => (
    <button
      key={module.id}
      onClick={() => console.log(module.id)}
      className={`group relative isolate bg-white/95 hover:bg-white backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 focus:outline-none shadow-xl overflow-hidden hover:ring-4 hover:ring-red-500 hover:z-10 animate-in fade-in zoom-in duration-1000 ${
        module.highlighted ? 'ring-4 ring-red-500' : ''
      }`}
      style={{
        transform: 'translateZ(0)' // Creates new stacking context
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05) translateY(-4px) translateZ(0)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1) translateY(0) translateZ(0)';
      }}
      aria-label={`${module.name}: ${module.description}`}
    >
      {/* Icon */}
      <div className="flex justify-center mb-4 text-blue-900 transition-all duration-300 group-hover:mb-2 group-hover:scale-110">
        {module.icon}
      </div>

      {/* Module Name */}
      <h3 className="text-blue-900 font-bold text-sm sm:text-base text-center leading-tight mb-2">
        {module.name}
      </h3>

      {/* Description */}
      <div className="max-h-0 opacity-0 transition-all duration-300 overflow-hidden group-hover:max-h-20 group-hover:opacity-100">
        <p className="text-blue-700 text-xs text-center leading-snug mt-2">
          {module.description}
        </p>
      </div>
    </button>
  ))}
</div>

          {/* Footer Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <div className="flex items-center gap-3 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-white shadow-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" aria-hidden="true"></div>
              <span className="text-blue-900 font-bold text-sm sm:text-base">Release 2.5.4</span>
            </div>
          </div>
        </div>

        {/* Bottom Branding */}
        <div className="absolute bottom-8 right-8 opacity-90 hidden lg:block">
          <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-xl border-2 border-white shadow-xl">
            <p className="text-blue-900 text-sm font-bold">Management Information Division</p>
          </div>
        </div>
      </main>

      {/* Success Alert - Shown after login */}
      {showSuccessAlert && (
        <div className="fixed top-20 right-4 z-50 animate-in slide-in-from-right duration-300" role="alert" aria-live="polite">
          <div className="bg-green-600 text-white px-6 py-4 rounded-xl shadow-2xl border-2 border-green-400 max-w-md">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <div className="flex-1">
                <p className="font-bold text-lg">Login Successful!</p>
                <p className="text-sm text-green-100 mt-1">Welcome back, {userName}</p>
              </div>
              <button
                onClick={() => setShowSuccessAlert(false)}
                className="text-white hover:text-green-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
                aria-label="Close notification"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
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
      className="group flex items-center gap-3 px-4 py-3 text-white font-semibold text-sm rounded-lg hover:bg-blue-800/60 active:bg-blue-700/80 transition-all duration-200 hover:translate-x-1 focus:outline-none focus:ring-2 focus:ring-white/50"
      aria-label={label}
    >
      <span className="text-blue-300 group-hover:text-white transition-colors" aria-hidden="true">{icon}</span>
      <span className="group-hover:text-blue-100">{label}</span>
    </a>
  );
}

function DropdownSubLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="group flex items-center gap-3 px-4 py-2.5 pl-10 text-white/90 text-sm rounded-lg hover:bg-blue-800/40 active:bg-blue-700/60 transition-all duration-200 hover:translate-x-1 focus:outline-none focus:ring-2 focus:ring-white/50"
      aria-label={label}
    >
      <span className="text-blue-400 text-xs group-hover:text-blue-200 transition-colors" aria-hidden="true">▸</span>
      <span className="group-hover:text-white">{label}</span>
    </a>
  );
}