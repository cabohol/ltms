"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  User,
  Mail,
  Heart,
  Shield,
  MapPin,
  Bell,
  Save,
  Globe,
  GraduationCap,
  Phone,
  Home,
  Menu,
  X,
  Check,
  Droplet,
  Eye,
  Activity,
  Feather,
  ChevronsDown
} from "lucide-react";


export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("personal");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isELearningOpen, setIsELearningOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState({
    deactivation: false,
    transaction: false,
    appointment: false,
    license: false,
    reschedule: false,
  });

  const userName = "JUAN DELA CRUZ";
  const userClientId = "DELA CRUZ - 25-030915-0841627";

  const tabs = [
    { id: "personal", label: "Personal Info", icon: User },
    { id: "contact", label: "Contact Info", icon: Mail },
    { id: "medical", label: "Medical Info", icon: Heart },
    { id: "emergency", label: "Emergency", icon: Shield },
    { id: "address", label: "Address", icon: MapPin },
    { id: "notifications", label: "SMS Notifications", icon: Bell },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleELearning = () => setIsELearningOpen(!isELearningOpen);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/bgpic.jpg')" }}
    >
      <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-[1px]"></div>
      {/* Navigation */}
      <nav className="relative bg-blue-900/95 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="hidden md:flex items-center justify-center gap-4">
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
                    <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
                      <img 
                        src="https://www.citypng.com/public/uploads/preview/png-round-blue-contact-user-profile-icon-701751694975293fcgzulxp2k.png"
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full object-cover"
                      />

                      <div>
                        <p className="text-white font-semibold text-sm">{userName}</p>
                        <p className="text-blue-300 text-xs mt-1">{userClientId}</p>
                      </div>
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
              
              <div className="relative">
                {/* NAV BUTTON — icon + ID + arrow only */}
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="w-full flex items-center justify-between gap-3 px-4 py-3 text-white font-semibold text-sm rounded-lg hover:bg-white/10 active:bg-white/20 transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <User size={18} />
                    <span className="text-xs">{userClientId}</span>
                  </div>

                  {/* Arrow (same position as E-Learning) */}
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${isUserMenuOpen ? "rotate-180" : ""}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* DROPDOWN MENU — avatar goes here */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-blue-900/98 backdrop-blur-md rounded-xl shadow-2xl border border-blue-400/30 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="h-1 bg-gradient-to-r from-red-600 to-red-500"></div>

                    {/* Avatar + user info */}
                    <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
                      <img 
                        src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80"
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full object-cover"
                      />

                      <div>
                        <p className="text-white font-semibold text-sm">{userName}</p>
                        <p className="text-blue-300 text-xs mt-1">{userClientId}</p>
                      </div>
                    </div>

                    {/* Logout */}
                    <a
                      href="/login"
                      className="group flex items-center gap-3 px-4 py-3 text-white font-semibold text-sm hover:bg-blue-800/60 active:bg-blue-700/80 transition-all duration-200"
                    >
                      <svg className="w-5 h-5 text-red-400 group-hover:text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      <span>Logout</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Tabs */}
        <div className="border-b border-gray-200 bg-gray-50">
        <nav className="flex justify-start sm:justify-center w-full overflow-x-auto no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 sm:px-6 py-3 sm:py-4 text-xl lg:text-lg font-medium 
                  border-b-2 transition-colors whitespace-nowrap shrink-0
                  ${
                    activeTab === tab.id
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-blue-800 hover:text-blue-700 hover:border-blue-300"
                  }`}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
        </div>


          {/* Content */}
          <div className="p-8">
            {activeTab === "personal" && (
              <div className="space-y-6">
              <div>
                <h2 className="flex items-center text-2xl font-bold text-blue-800 mb-6 space-x-2">
                  <User className="w-6 h-6 text-blue-800" />
                  <span>Personal Information</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative">
                  <label className="block text-sm font-medium text-blue-800 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                      {/* Replace with your icon component or emoji */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A12.07 12.07 0 0112 15c2.608 0 5.017.892 6.879 2.384M12 12a5 5 0 100-10 5 5 0 000 10z" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      defaultValue="JUAN"
                      className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-blue-800 mb-2">
                    Middle Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A12.07 12.07 0 0112 15c2.608 0 5.017.892 6.879 2.384M12 12a5 5 0 100-10 5 5 0 000 10z" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      defaultValue=""
                      className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-blue-800 mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A12.07 12.07 0 0112 15c2.608 0 5.017.892 6.879 2.384M12 12a5 5 0 100-10 5 5 0 000 10z" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      defaultValue="DELA CRUZ"
                      className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                </div>
              </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-blue-800 mb-2">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  defaultValue="1990-01-01"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-800 mb-2">
                  Gender <span className="text-red-500">*</span>
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                  <option>MALE</option>
                  <option>FEMALE</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-800 mb-2">
                  Civil Status <span className="text-red-500">*</span>
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                  <option>Single</option>
                  <option>Married</option>
                  <option>Widowed</option>
                  <option>Separated</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-blue-800 mb-2">
                  Nationality <span className="text-red-500">*</span>
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                  <option>FILIPINO - PHL</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-800 mb-2">
                  Place of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Place of Birth"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
            </div>
            </div>
            )}

            {activeTab === "contact" && (
              <div className="space-y-6">
              <div>
                <h2 className="flex items-center space-x-2 text-2xl font-bold text-blue-800 mb-6">
                  <Mail className="w-6 h-6 text-blue-800" />
                  <span>Contact Information</span>
                </h2>
              </div>


                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <div>
                      <p className="text-sm font-medium text-blue-900">
                        Email Address
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        juandelacruz@email.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-blue-800 mb-2">
                      Country Code <span className="text-red-500">*</span>
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                      <option>PHL (+63)</option>
                      <option>ABW (+297)</option>
                      <option>AFG (+93)</option>
                      <option>AGO (+297)</option>
                      <option>AIA (+1264)</option>
                      <option>ALA (+358)</option>
                      <option>ALB (+355)</option>
                      <option>AND (+376)</option>
                      <option>ARE (+971)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-blue-800 mb-2">
                      Mobile Phone <span className="text-red-500">*</span>
                    </label>
                    <div className="flex space-x-6">
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        defaultValue="9123456789"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        placeholder="Enter mobile number"
                      />
                    </div>
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium whitespace-nowrap flex items-center space-x-2">
                      <Check className="w-5 h-5" />
                      <span>Verify Number</span>
                    </button>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {activeTab === "medical" && (
              <div className="space-y-6">
              <div>
                <h2 className="flex items-center space-x-2 text-2xl font-bold text-blue-800 mb-6">
                  <Heart className="w-6 h-6 text-blue-800" />
                  <span>Medical Information</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Complexion */}
                <div className="relative">
                  <label className="block text-sm font-medium text-blue-800 mb-2">
                    Complexion <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full appearance-none pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                    <option value="">Select Complexion</option>
                    <option>Fair</option>
                    <option>Medium</option>
                    <option>Dark</option>
                  </select>
                  <User className="absolute left-3 top-13 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>

                {/* Blood Type */}
                <div className="relative">
                  <label className="block text-sm font-medium text-blue-800 mb-2">
                    Blood Type <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full appearance-none pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                    <option value="">Select Blood Type</option>
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>O+</option>
                    <option>O-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                  </select>
                  <Droplet className="absolute left-3 top-13 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>

                {/* Eye Color */}
                <div className="relative">
                  <label className="block text-sm font-medium text-blue-800 mb-2">
                    Eye Color <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full appearance-none pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                    <option value="">Select Eye Color</option>
                    <option>Black</option>
                    <option>Brown</option>
                    <option>Blue</option>
                    <option>Green</option>
                    <option>Gray</option>
                  </select>
                  <Eye className="absolute left-3 top-13 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>

                {/* Body Type */}
                <div className="relative">
                  <label className="block text-sm font-medium text-blue-800 mb-2">
                    Body Type <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full appearance-none pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                    <option value="">Select Body Type</option>
                    <option>Light</option>
                    <option>Medium</option>
                    <option>Heavy</option>
                  </select>
                  <Activity className="absolute left-3 top-13 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>

                {/* Weight */}
                <div className="relative">
                  <label className="block text-sm font-medium text-blue-800 mb-2">
                    Weight (kg) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Enter weight"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                  <Feather className="absolute left-3 top-13 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>

                {/* Hair Color */}
                <div className="relative">
                  <label className="block text-sm font-medium text-blue-800 mb-2">
                    Hair Color <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full appearance-none pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                    <option value="">Select Hair Color</option>
                    <option>Black</option>
                    <option>Brown</option>
                    <option>Blonde</option>
                    <option>Red</option>
                    <option>Gray</option>
                  </select>
                  <User className="absolute left-3 top-13 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>

                {/* Height */}
                <div className="relative">
                  <label className="block text-sm font-medium text-blue-800 mb-2">
                    Height (cm) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Height"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                  <MapPin className="absolute left-3 top-13 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>

                {/* Organ Donor */}
                <div className="relative">
                  <label className="block text-sm font-medium text-blue-800 mb-2">
                    Organ Donor <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full appearance-none pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                    <option value="">Select Preference</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                  <Heart className="absolute left-3 top-13 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
              </div>
            )}

            {activeTab === "emergency" && (
              <div className="space-y-6">
              <div>
                <h2 className="flex items-center space-x-2 text-2xl font-bold text-blue-800 mb-6">
                  <Shield className="w-6 h-6 text-blue-800" />
                  <span>Emergency Contact Person</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Contact Name */}
                <div className="relative">
                  <label className="block text-sm font-medium text-blue-800 mb-2">
                    Contact Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                  <User className="absolute left-3 top-13 transform -translate-y-1/2 text-gray-400" />
                </div>

                {/* Contact Number */}
                <div className="relative">
                  <label className="block text-sm font-medium text-blue-800 mb-2">
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter Number"
                    className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                  <Phone className="absolute left-3 top-13  transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              {/* Address */}
              <div className="relative">
                <label className="block text-sm font-medium text-blue-800 mb-2">
                  Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="Enter emergency contact person address"
                  className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
                <MapPin className="absolute left-3 top-10  text-gray-400" />
              </div>

              <div className="border-t pt-6 mt-8">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">
                  Mother's Maiden Name
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* First Name */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-blue-800 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter First Name"
                      className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                    <User className="absolute left-3 top-13  transform -translate-y-1/2 text-gray-400" />
                  </div>

                  {/* Middle Name */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-blue-800 mb-2">
                      Middle Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Middle Name"
                      className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                    <User className="absolute left-3 top-13  transform -translate-y-1/2 text-gray-400" />
                  </div>

                  {/* Last Name */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-blue-800 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Last Name"
                      className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                    <User className="absolute left-3 top-13  transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="border-t pt-6 mt-8">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">
                  Father's Information
                </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* First Name */}
                <div className="relative">
                  <label className="block text-sm font-medium text-blue-800 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                  <User className="absolute left-3 top-13 transform -translate-y-1/2 text-gray-400" />
                </div>

                {/* Middle Name */}
                <div className="relative">
                  <label className="block text-sm font-medium text-blue-800 mb-2">
                    Middle Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Middle Name"
                    className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                  <User className="absolute left-3 top-13 transform -translate-y-1/2 text-gray-400" />
                </div>

                {/* Last Name */}
                <div className="relative">
                  <label className="block text-sm font-medium text-blue-800 mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                  <User className="absolute left-3 top-13 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              </div>
              </div>
            )}

            {activeTab === "address" && (
              <div className="space-y-6">
              <div>
                <h2 className="flex items-center space-x-2 text-2xl font-bold text-blue-800 mb-2">
                  <MapPin className="w-6 h-6 text-blue-800" />
                  <span>Main Address</span>
                </h2>
              </div>


                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> Provide your home or permanent address where to send
                    billings and notices. The provided address once entered and
                    saved is no longer editable. If you wish to change it,
                    please fill out and submit application of Revision of
                    Records.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* House No. */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-blue-800 mb-2">
                      House No. <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter House No."
                      className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                    <Home className="absolute left-3 top-13 transform -translate-y-1/2 text-gray-400" />
                  </div>

                  {/* Street / Village */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-blue-800 mb-2">
                      Street / Village <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Street or Village"
                      className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                    <MapPin className="absolute left-3 top-13 transform -translate-y-1/2 text-gray-400" />
                  </div>

                  {/* Province */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-blue-800 mb-2">
                      Province <span className="text-red-500">*</span>
                    </label>
                    <select className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                      <option value="">Select Province</option>
                      <option value="Agusan del Norte">Agusan del Norte</option>
                      <option value="Agusan del Sur">Agusan del Sur</option>
                      <option value="Surigao del Norte">Surigao del Norte</option>
                      <option value="Surigao del Sur">Surigao del Sur</option>
                      <option value="Dinagat Islands">Dinagat Islands</option>
                    </select>
                    <Globe className="absolute left-3 top-13 transform -translate-y-1/2 text-gray-400" />
                  </div>

                  {/* City / Municipality */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-blue-800 mb-2">
                      City / Municipality <span className="text-red-500">*</span>
                    </label>
                    <select className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                      <option value="">Select City/Municipality</option>
                      <option value="Butuan City">Butuan City</option>
                      <option value="Cabadbaran City">Cabadbaran City</option>
                      <option value="Buenavista">Buenavista</option>
                      <option value="Carmen">Carmen</option>
                      <option value="Jabonga">Jabonga</option>
                      <option value="Kitcharao">Kitcharao</option>
                      <option value="Las Nieves">Las Nieves</option>
                      <option value="Magallanes">Magallanes</option>
                      <option value="Nasipit">Nasipit</option>
                      <option value="Remedios T. Romualdez">Remedios T. Romualdez (RTR)</option>
                      <option value="Santiago">Santiago</option>
                      <option value="Tubay">Tubay</option>
                    </select>
                    <MapPin className="absolute left-3 top-13 transform -translate-y-1/2 text-gray-400" />
                  </div>

                  {/* Barangay */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-blue-800 mb-2">
                      Barangay <span className="text-red-500">*</span>
                    </label>
                    <select className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                      <option value="">Select Barangay</option>
                      <option value="Ambago">Ambago</option>
                      <option value="Amparo">Amparo</option>
                      <option value="Ampayon">Ampayon</option>
                      {/* ...rest of barangays */}
                    </select>
                    <MapPin className="absolute left-3 top-13 transform -translate-y-1/2 text-gray-400" />
                  </div>

                  {/* ZIP Code */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-blue-800 mb-2">
                      ZIP Code <span className="text-red-500">*</span>
                    </label>
                    <select className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                      <option value="">Select ZIP Code</option>
                      <option value="8600">8600 - Butuan City</option>
                      <option value="8605">8605 - Cabadbaran City</option>
                      <option value="8601">8601 - Buenavista</option>
                      <option value="8602">8602 - Carmen</option>
                      {/* ...rest of ZIP codes */}
                    </select>
                    <Globe className="absolute left-3 top-13 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center text-center pt-4">
                  <label className="text-lg font-larger text-blue-800 mb-3">
                    Use a different address as contact address?
                  </label>

                  <div className="flex space-x-6">
                    <button className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium">
                      <Check size={18} className="text-white" />
                      <span>Yes</span>
                    </button>

                    <button className="flex items-center gap-2 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium">
                      <X size={18} className="text-white" />
                      <span>No</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "notifications" && (
              <div className="space-y-6">
                <div>
                <h2 className="flex items-center space-x-2 text-2xl font-bold text-blue-800 mb-2">
                  <Bell className="w-6 h-6 text-blue-800" />
                  <span>SMS Notifications</span>
                </h2>
                </div>

                <div className="space-y-4">
                  {Object.entries(notifications).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition"
                    >
                      <label className="text-sm sm:text-base font-medium text-gray-700 flex-1 mb-2 sm:mb-0 break-words">
                        {{
                          deactivation:
                            "Receive SMS notification after account deactivation?",
                          transaction:
                            "Receive SMS notification for transaction confirmation?",
                          appointment:
                            "Receive SMS notification 24 hours before every appointment?",
                          license:
                            "Receive SMS notification 60 days before your license expires?",
                          reschedule:
                            "Receive SMS notification after LTO rescheduled your appointment?",
                        }[key]}
                      </label>

                      <div className="flex flex-row justify-center gap-2">
                        <button
                          onClick={() =>
                            setNotifications({
                              ...notifications,
                              [key]: true,
                            })
                          }
                          className={`flex items-center justify-center gap-2 px-6 py-2 rounded-lg transition font-medium
                            ${
                              notifications[key] === true
                                ? "bg-green-600 text-white"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                        >
                          <Check
                            size={18}
                            className={`${notifications[key] === true ? "text-white" : "text-gray-700"}`}
                          />
                          Yes
                        </button>

                        <button
                          onClick={() =>
                            setNotifications({
                              ...notifications,
                              [key]: false,
                            })
                          }
                          className={`flex items-center justify-center gap-2 px-6 py-2 rounded-lg transition font-medium
                            ${
                              notifications[key] === false
                                ? "bg-red-600 text-white"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                        >
                          <X
                            size={18}
                            className={`${notifications[key] === false ? "text-white" : "text-gray-700"}`}
                          />
                          No
                        </button>
                      </div>


                    </div>
                  ))}
                </div>

              </div>
            )}

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row justify-end space-y-3 md:space-y-0 md:space-x-4 mt-8 pt-6 border-t">
            <button className="flex items-center justify-center w-full md:w-auto space-x-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition font-medium">
              <X className="w-4 h-4" />
              <span>Cancel</span>
            </button>
            <button className="flex items-center justify-center w-full md:w-auto space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition font-medium shadow-lg">
              <Save className="w-4 h-4" />
              <span>Apply Changes</span>
            </button>
          </div>
          </div>
        </div>
      </main>
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