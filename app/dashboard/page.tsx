"use client";

/** @jsxImportSource react */
import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Globe, GraduationCap, Phone, UserPlus, LogIn, Menu, X, User, FileText, Car, Receipt, Landmark, File, UserCircle, Home, AlertCircle, CheckCircle, History, Clock, Search, NotebookTextIcon, WalletCards, FileCheck, Shield, Download, Eye, Heart, MapPin, Bell, Mail, Check, Save, Activity, Droplet, Feather, HelpCircle } from 'lucide-react';

export default function DashboardPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isELearningOpen, setIsELearningOpen] = useState(false);
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(true);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [hoveredModule, setHoveredModule] = useState<string | null>(null);
  const [showViolationsModal, setShowViolationsModal] = useState(false);
  const [violationsTab, setViolationsTab] = useState<'demerit' | 'unsettled' | 'history'>('demerit');
  const [transactionsTab, setTransactionsTab] = useState<'open' | 'closed'>('open');
  const [showTransactionsModal, setShowTransactionsModal] = useState(false);
  const [documentsTab, setDocumentsTab] = useState<'licenses' | 'motor-vehicles' | 'no-apprehensions' | 'official-receipts'>('licenses');
  const [showDocumentsModal, setShowDocumentsModal] = useState(false);
  const [profileTab, setProfileTab] = useState<'personal' | 'contact' | 'medical' | 'emergency' | 'address' | 'notifications'>('personal');
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [notifications, setNotifications] = useState({
    deactivation: false,
    transaction: false,
    appointment: false,
    license: false,
    reschedule: false,
  });

  const userName = "JUAN DELA CRUZ";
  const userClientId = "DELA CRUZ - 25-030915-0841627";

  const modules = [
    { id: 'digital-id', name: 'DIGITAL ID', icon: <UserCircle size={48} />, description: 'Manage your digital identification' },
    { id: 'licensing', name: 'LICENSING', icon: <FileText size={48} />, description: 'Driver license applications and renewals' },
    { id: 'vehicle', name: 'VEHICLE', icon: <Car size={48} />, description: 'Vehicle registration and management' },
    { id: 'transactions', name: 'TRANSACTIONS', icon: <NotebookTextIcon size={48} />, description: 'View transaction history and receipts' },
    { id: 'violations', name: 'VIOLATIONS', icon: <Landmark size={48} />, description: 'Check and pay traffic violations'},
    { id: 'documents', name: 'DOCUMENTS', icon: <File size={48} />, description: 'Access and download documents' },
    { id: 'profile', name: 'PROFILE', icon: <User size={48} />, description: 'Update your account information' },
  ];

  // Mock data for violations
  const demeritPointsData = {
    total: 0,
    violations: []
  };

  const unsettledData = [
    { id: 1, violation: 'Expired Registration', amount: 500, date: '2024-10-15' },
    { id: 2, violation: 'No Helmet', amount: 300, date: '2024-11-01' },
  ];

  const historyData = [
    { id: 1, violation: 'Speeding', amount: 1000, date: '2024-09-20', status: 'Paid' },
    { id: 2, violation: 'Illegal Parking', amount: 500, date: '2024-08-15', status: 'Paid' },
  ];

 // Mock data for transactions
  const openTransactions = [
    { id: 1, type: 'Driver License Renewal', amount: 500, date: '2024-11-28', status: 'Pending', referenceNo: 'TXN-2024-001' },
    { id: 2, type: 'Vehicle Registration', amount: 1200, date: '2024-11-25', status: 'Processing', referenceNo: 'TXN-2024-002' },
    { id: 3, type: 'Digital ID Issuance', amount: 300, date: '2024-11-20', status: 'Pending', referenceNo: 'TXN-2024-003' },
  ];

  const closedTransactions = [
    { id: 4, type: 'Professional Driver License', amount: 800, date: '2024-10-15', status: 'Completed', referenceNo: 'TXN-2024-004' },
    { id: 5, type: 'Vehicle Inspection', amount: 400, date: '2024-09-10', status: 'Completed', referenceNo: 'TXN-2024-005' },
    { id: 6, type: 'License Renewal', amount: 500, date: '2024-08-05', status: 'Completed', referenceNo: 'TXN-2024-006' },
  ];


 // Mock data for documents
  const licensesData = [
    { id: 1, type: 'Non-Professional Driver License', issuedDate: '2022-05-10', expiryDate: '2027-05-10', status: 'Valid', fileUrl: '#' },
    { id: 2, type: 'Professional Driver License', issuedDate: '2021-03-15', expiryDate: '2026-03-15', status: 'Valid', fileUrl: '#' },
  ];

  const motorVehiclesData = [
    { id: 1, plateNumber: 'ABC-1234', vehicleType: 'Sedan', make: 'Toyota Camry', registrationDate: '2023-01-10', expiryDate: '2025-01-10', status: 'Active', fileUrl: '#' },
    { id: 2, plateNumber: 'XYZ-5678', vehicleType: 'SUV', make: 'Honda CR-V', registrationDate: '2022-06-20', expiryDate: '2024-06-20', status: 'Expired', fileUrl: '#' },
  ];

  const noApprehensionsData = [
    { id: 1, certificateNo: 'NAC-2024-001', issuedDate: '2024-11-15', validUntil: '2025-11-15', status: 'Valid', fileUrl: '#' },
  ];

  const officialReceiptsData = [
    { id: 1, receiptNo: 'OR-2024-001', description: 'Driver License Renewal', amount: 500, date: '2024-10-20', fileUrl: '#' },
    { id: 2, receiptNo: 'OR-2024-002', description: 'Vehicle Registration', amount: 1200, date: '2024-09-15', fileUrl: '#' },
  ];

  useEffect(() => {
    if (showSuccessAlert) {
      const timer = setTimeout(() => {
        setShowSuccessAlert(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showSuccessAlert]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleELearning = () => setIsELearningOpen(!isELearningOpen);
  
  const handleModuleClick = (moduleId: string) => {
    if (moduleId === 'violations') {
      setShowViolationsModal(true);
    } else if (moduleId === 'transactions') {
      setShowTransactionsModal(true);
    } else if (moduleId === 'documents') {
      setShowDocumentsModal(true);
    } else if (moduleId === 'profile') {
      setShowProfileModal(true);
    }
  };

const InfoTooltip = ({ id, content }: { id: string; content: string }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState<'left' | 'center' | 'right'>('center');

  useEffect(() => {
    if (activeTooltip === id && buttonRef.current) {
      const button = buttonRef.current;
      const rect = button.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      
      // Check if button is on left side (less than 1/3 of screen)
      if (rect.left < windowWidth / 3) {
        setPosition('left');
      }
      // Check if button is on right side
      else if (rect.right > (windowWidth * 2 / 3)) {
        setPosition('right');
      }
      // Otherwise center
      else {
        setPosition('center');
      }
    }
  }, [activeTooltip, id]);

  return (
    <div className="relative inline-block">
      <button
        ref={buttonRef}
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setActiveTooltip(activeTooltip === id ? null : id);
        }}
        className="ml-1 text-blue-600 hover:text-blue-800 focus:outline-none transition-colors touch-manipulation"
        aria-label="More information"
      >
        <HelpCircle size={16} className="sm:hidden" />
        <HelpCircle size={18} className="hidden sm:block" />
      </button>
      {activeTooltip === id && (
        <>
          {/* Backdrop for closing */}
          <div 
            className="fixed inset-0 z-[60]" 
            onClick={(e) => {
              e.stopPropagation();
              setActiveTooltip(null);
            }}
          />
          {/* Tooltip - centered on screen */}
          <div 
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] xs:w-80 sm:w-96 md:w-[28rem] lg:w-[32rem] max-w-[90vw] bg-blue-900 text-white text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed rounded-lg sm:rounded-xl p-3 xs:p-4 sm:p-5 md:p-6 shadow-2xl z-[61] animate-in fade-in zoom-in-95 duration-200"
          >
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setActiveTooltip(null);
              }}
              className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 text-white hover:text-blue-200 p-1 rounded transition-colors touch-manipulation"
              aria-label="Close"
            >
              <X size={16} className="sm:hidden" />
              <X size={18} className="hidden sm:inline-block md:hidden" />
              <X size={20} className="hidden md:block" />
            </button>
            <p className="pr-7 xs:pr-8 sm:pr-10 leading-relaxed">{content}</p>
          </div>
        </>
      )}
    </div>
  );
};
  return (
    
    <div className="min-h-screen bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "url('/bgpic.jpg')" }}>
      <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-[1px]"></div>   
     {/* Navigation */}
      <nav className="bg-blue-900/95 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
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
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              <NavLink icon={<Globe size={18} />} href="https://lto.gov.ph/" label="LTO OFFICIAL WEBPAGE" />

              {/* E-Learning Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleELearning}
                  className="flex items-center gap-2 px-3 lg:px-4 py-2 text-white font-semibold text-sm rounded-lg hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/10"
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
                  className="flex items-center gap-2 px-3 lg:px-4 py-2 text-white font-semibold text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
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
                  className="flex items-center gap-2 px-3 lg:px-4 py-2 text-white font-semibold text-sm rounded-lg hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/10"
                  aria-label="User menu"
                  aria-expanded={isUserMenuOpen}
                >
                  <User size={18} />
                  <span className="hidden xl:inline text-xs">{userClientId}</span>
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
           {modules.map((module, index) => (
              <button
                key={module.id}
                onClick={() => handleModuleClick(module.id)}
                className={`
                  group relative isolate 
                  bg-white/95 hover:bg-white 
                  backdrop-blur-sm rounded-2xl 
                  p-6 transition-all duration-300 
                  focus:outline-none shadow-xl overflow-hidden 
                  hover:ring-4 hover:ring-red-500 hover:z-10
                  ${index === modules.length - 1 ? 'col-span-2 mx-auto sm:col-span-1 sm:mx-0' : ''}
                `}
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
          <div className="flex flex-col sm:pt-10 flex-row  gap-6 mb-9">
           
          </div>
        </div>

      {/* MID Badge */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-auto right-4 sm:right-6 md:right-8">
        <div className="bg-blue-800/95 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg border border-blue-400/40 shadow-xl flex items-center gap-2 sm:gap-3 justify-center sm:justify-start">
          
          {/* Logo */}
          <Image 
            src="/ltologo.png" 
            alt="LTO Logo" 
            width={48} 
            height={48} 
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain flex-shrink-0"
          />
          
          {/* Text */}
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-white font-bold text-[10px] sm:text-xs md:text-sm tracking-wide leading-tight text-center sm:text-left">
              MANAGEMENT INFORMATION
            </span>
            <span className="text-blue-200 font-semibold text-[9px] sm:text-[10px] md:text-xs tracking-wider leading-tight text-center sm:text-left">
              DIVISION (MID)
            </span>
          </div>
        </div>
      </div>
      </main>

      {/* Violations Modal */}
      {showViolationsModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[999] p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-in scale-95 fade-in duration-300">
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-900 to-blue-800 px-6 py-6 flex items-center justify-between border-b border-blue-700">
              <div className="flex items-center gap-3">
                <Landmark size={32} className="text-white" />
                <h2 className="text-2xl font-bold text-white">Violations</h2>
              </div>
              <button
                onClick={() => setShowViolationsModal(false)}
                className="text-white hover:bg-white/20 p-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200 bg-gray-50">
              <button
                onClick={() => setViolationsTab('demerit')}
                className={`flex-1 py-4 px-6 font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                  violationsTab === 'demerit'
                    ? 'text-blue-900 bg-white border-b-2 border-blue-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <AlertCircle size={20} />
                <span>Demerit Points</span>
              </button>
              <button
                onClick={() => setViolationsTab('unsettled')}
                className={`flex-1 py-4 px-6 font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                  violationsTab === 'unsettled'
                    ? 'text-blue-900 bg-white border-b-2 border-blue-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <AlertCircle size={20} />
                <span>Unsettled</span>
              </button>
              <button
                onClick={() => setViolationsTab('history')}
                className={`flex-1 py-4 px-6 font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                  violationsTab === 'history'
                    ? 'text-blue-900 bg-white border-b-2 border-blue-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <History size={20} />
                <span>History</span>
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Demerit Points Tab */}
              {violationsTab === 'demerit' && (
                <div className="space-y-6">
                  <div className="flex items-center gap-4 bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                    <div className="bg-green-500 rounded-full p-4 flex-shrink-0">
                      <CheckCircle size={32} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-600 font-medium">Current Demerit Points</p>
                      <p className="text-4xl font-bold text-green-600 mt-1">{demeritPointsData.total}</p>
                    </div>
                  </div>
                  {demeritPointsData.violations.length === 0 && (
                    <div className="text-center py-8">
                      <CheckCircle size={48} className="text-green-500 mx-auto mb-3" />
                      <p className="text-gray-600 font-medium">No demerit points recorded</p>
                      <p className="text-gray-400 text-sm mt-1">Keep up the safe driving!</p>
                    </div>
                  )}
                </div>
              )}

              {/* Unsettled Tab */}
              {violationsTab === 'unsettled' && (
                <div className="space-y-4">
                  {unsettledData.length > 0 ? (
                    unsettledData.map((violation) => (
                      <div key={violation.id} className="bg-red-50 border border-red-200 rounded-xl p-4 hover:shadow-md transition-all duration-200">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3 flex-1">
                            <div className="bg-red-500 rounded-full p-3 flex-shrink-0 mt-1">
                              <AlertCircle size={20} className="text-white" />
                            </div>
                            <div>
                              <p className="font-bold text-gray-800">{violation.violation}</p>
                              <p className="text-sm text-gray-600 mt-1">Date: {violation.date}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-red-600">₱{violation.amount}</p>
                            <button className="mt-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-200">
                              Pay Now
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <CheckCircle size={48} className="text-green-500 mx-auto mb-3" />
                      <p className="text-gray-600 font-medium">No unsettled violations</p>
                      <p className="text-gray-400 text-sm mt-1">All your violations have been settled.</p>
                    </div>
                  )}
                </div>
              )}

              {/* History Tab */}
              {violationsTab === 'history' && (
                <div className="space-y-4">
                  {historyData.length > 0 ? (
                    historyData.map((violation) => (
                      <div key={violation.id} className="bg-gray-50 border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-200">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3 flex-1">
                            <div className="bg-green-500 rounded-full p-3 flex-shrink-0 mt-1">
                              <CheckCircle size={20} className="text-white" />
                            </div>
                            <div>
                              <p className="font-bold text-gray-800">{violation.violation}</p>
                              <p className="text-sm text-gray-600 mt-1">Date: {violation.date}</p>
                              <span className="inline-block mt-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                                {violation.status}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-gray-800">₱{violation.amount}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <History size={48} className="text-blue-500 mx-auto mb-3" />
                      <p className="text-gray-600 font-medium">No violation history</p>
                      <p className="text-gray-400 text-sm mt-1">You have a clean driving record.</p>
                    </div>
                  )}


                </div>
              )}
            </div>

            
          </div>
        </div>
      )}

      {/* Transactions Modal */}
      {showTransactionsModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[999] p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-in scale-95 fade-in duration-300">
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-900 to-blue-800 px-6 py-6 flex items-center justify-between border-b border-blue-700">
              <div className="flex items-center gap-3">
                <NotebookTextIcon size={32} className="text-white" />
                <h2 className="text-2xl font-bold text-white">Transaction Overview</h2>
              </div>
              <button
                onClick={() => setShowTransactionsModal(false)}
                className="text-white hover:bg-white/20 p-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200 bg-gray-50">
              <button
                onClick={() => setTransactionsTab('open')}
                className={`flex-1 py-4 px-6 font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                  transactionsTab === 'open'
                    ? 'text-blue-900 bg-white border-b-2 border-blue-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Clock size={20} />
                <span>Open</span>
              </button>
              <button
                onClick={() => setTransactionsTab('closed')}
                className={`flex-1 py-4 px-6 font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                  transactionsTab === 'closed'
                    ? 'text-blue-900 bg-white border-b-2 border-blue-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <CheckCircle size={20} />
                <span>Closed</span>
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Open Transactions Tab */}
              {transactionsTab === 'open' && (
                <div className="space-y-4">
                  {openTransactions.length > 0 ? (
                    openTransactions.map((transaction) => (
                      <div key={transaction.id} className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-5 hover:shadow-lg transition-all duration-200">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-start gap-4 flex-1">
                            <div className="bg-blue-500 rounded-full p-3 flex-shrink-0 mt-1">
                              <NotebookTextIcon size={24} className="text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <p className="font-bold text-gray-900 text-lg">{transaction.type}</p>
                                <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-bold">
                                  {transaction.status}
                                </span>
                              </div>
                              <p className="text-sm text-gray-600">Reference No: {transaction.referenceNo}</p>
                              <p className="text-sm text-gray-600 mt-1">Transaction Date: {transaction.date}</p>
                            </div>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <p className="text-3xl font-bold text-blue-600">₱{transaction.amount.toLocaleString()}</p>
                          </div>
                        </div>
                        <div className="flex gap-3 pt-3 border-t border-blue-200">
                          <button className="flex-1 bg-white border border-blue-500 hover:bg-blue-50 text-blue-700 px-4 py-2.5 rounded-lg font-medium text-sm transition-colors duration-200 flex items-center justify-center gap-2">
                            <FileText size={16} />
                            View Details
                          </button>
                          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-200 flex items-center justify-center gap-2">
                            <WalletCards size={16} />
                            Pay Now
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <Search size={48} className="text-gray-300 mx-auto mb-3" />
                      <p className="text-gray-600 font-medium">No open transactions found</p>
                      <p className="text-gray-400 text-sm mt-1">You have no pending transactions at this time.</p>
                    </div>
                  )}
                </div>
              )}

              {/* Closed Transactions Tab */}
              {transactionsTab === 'closed' && (
                <div className="space-y-4">
                  {closedTransactions.length > 0 ? (
                    closedTransactions.map((transaction) => (
                      <div key={transaction.id} className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-5 hover:shadow-lg transition-all duration-200">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-start gap-4 flex-1">
                            <div className="bg-green-500 rounded-full p-3 flex-shrink-0 mt-1">
                              <CheckCircle size={24} className="text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <p className="font-bold text-gray-900 text-lg">{transaction.type}</p>
                                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">
                                  {transaction.status}
                                </span>
                              </div>
                              <p className="text-sm text-gray-600">Reference No: {transaction.referenceNo}</p>
                              <p className="text-sm text-gray-600 mt-1">Transaction Date: {transaction.date}</p>
                            </div>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <p className="text-3xl font-bold text-green-600">₱{transaction.amount.toLocaleString()}</p>
                          </div>
                        </div>
                        <div className="flex gap-3 pt-3 border-t border-green-200">
                          <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-200 flex items-center justify-center gap-2">
                            <FileText size={16} />
                            View Receipt
                          </button>
                          
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <Search size={48} className="text-gray-300 mx-auto mb-3" />
                      <p className="text-gray-600 font-medium">No closed transactions found</p>
                      <p className="text-gray-400 text-sm mt-1">You have no completed transactions to display.</p>
                    </div>
                  )}
                </div>
              )}
            </div>

      
          </div>
        </div>
      )}

      {/* Documents Modal */}
      {showDocumentsModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[999] p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-in scale-95 fade-in duration-300">
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-900 to-blue-800 px-6 py-6 flex items-center justify-between border-b border-blue-700">
              <div className="flex items-center gap-3">
                <File size={32} className="text-white" />
                <h2 className="text-2xl font-bold text-white">Documents</h2>
              </div>
              <button
                onClick={() => setShowDocumentsModal(false)}
                className="text-white hover:bg-white/20 p-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center border-b border-gray-200 bg-gray-50 overflow-x-auto">
              <button
                onClick={() => setDocumentsTab('licenses')}
                className={`flex-1 px-6 py-4 font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap ${
                  documentsTab === 'licenses'
                    ? 'text-blue-900 bg-white border-b-2 border-blue-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <FileCheck size={20} />
                <span>Licenses</span>
              </button>

              <button
                onClick={() => setDocumentsTab('motor-vehicles')}
                className={`flex-1 px-6 py-4 font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap ${
                  documentsTab === 'motor-vehicles'
                    ? 'text-blue-900 bg-white border-b-2 border-blue-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Car size={20} />
                <span>Motor Vehicles</span>
              </button>

              <button
                onClick={() => setDocumentsTab('no-apprehensions')}
                className={`flex-1 px-6 py-4 font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap ${
                  documentsTab === 'no-apprehensions'
                    ? 'text-blue-900 bg-white border-b-2 border-blue-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Shield size={20} />
                <span>No Apprehensions</span>
              </button>

              <button
                onClick={() => setDocumentsTab('official-receipts')}
                className={`flex-1 px-6 py-4 font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap ${
                  documentsTab === 'official-receipts'
                    ? 'text-blue-900 bg-white border-b-2 border-blue-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Receipt size={20} />
                <span>Official Receipts</span>
              </button>
            </div>


            {/* Content */}
            <div className="p-6">
              {/* Licenses Tab */}
              {documentsTab === 'licenses' && (
                <div className="space-y-4">
                  {licensesData.length > 0 ? (
                    licensesData.map((license) => (
                      <div key={license.id} className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-5 hover:shadow-lg transition-all duration-200">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start gap-4 flex-1">
                            <div className="bg-blue-600 rounded-full p-3 flex-shrink-0 mt-1">
                              <FileCheck size={24} className="text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-bold text-gray-900 text-lg mb-2">{license.type}</h3>
                              <div className="grid grid-cols-2 gap-3 text-sm">
                                <div>
                                  <p className="text-gray-600 text-xs font-semibold">Issued Date</p>
                                  <p className="text-gray-900 font-medium">{license.issuedDate}</p>
                                </div>
                                <div>
                                  <p className="text-gray-600 text-xs font-semibold">Expiry Date</p>
                                  <p className="text-gray-900 font-medium">{license.expiryDate}</p>
                                </div>
                              </div>
                              <div className="mt-3">
                                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">
                                  {license.status}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-3 pt-4 border-t-2 border-blue-200">
                        <button className="flex-1 bg-white border border-blue-500 hover:bg-blue-50 text-blue-700 px-4 py-2.5 rounded-lg font-medium text-sm transition-colors duration-200 flex items-center justify-center gap-2">
                          <Eye size={16} />
                          View
                        </button>
                        <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-colors duration-200 flex items-center justify-center gap-2">
                          <Download size={16} />
                          Download
                        </button>
                      </div>

                      </div>
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <FileCheck size={48} className="text-blue-300 mx-auto mb-3" />
                      <p className="text-gray-600 font-medium">No Driver Licenses yet</p>
                      <p className="text-gray-400 text-sm mt-1">You do not have any Driver's Licenses.</p>
                    </div>
                  )}
                </div>
              )}

              {/* Motor Vehicles Tab */}
              {documentsTab === 'motor-vehicles' && (
                <div className="space-y-4">
                  {motorVehiclesData.length > 0 ? (
                    motorVehiclesData.map((vehicle) => (
                      <div key={vehicle.id} className={`border-2 rounded-xl p-5 hover:shadow-lg transition-all duration-200 ${
                        vehicle.status === 'Active' 
                          ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200' 
                          : 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-300'
                      }`}>
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start gap-4 flex-1">
                            <div className={`rounded-full p-3 flex-shrink-0 mt-1 ${
                              vehicle.status === 'Active' ? 'bg-blue-600' : 'bg-gray-600'
                            }`}>
                              <Car size={24} className="text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="font-bold text-gray-900 text-lg">{vehicle.make}</h3>
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                                  vehicle.status === 'Active'
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-red-100 text-red-800'
                                }`}>
                                  {vehicle.status}
                                </span>
                              </div>
                              <p className="text-sm text-gray-600 mb-2">Plate Number: <span className="font-bold text-gray-900">{vehicle.plateNumber}</span></p>
                              <p className="text-sm text-gray-600 mb-2">Type: <span className="font-bold text-gray-900">{vehicle.vehicleType}</span></p>
                              <div className="grid grid-cols-2 gap-3 text-sm">
                                <div>
                                  <p className="text-gray-600 text-xs font-semibold">Registration Date</p>
                                  <p className="text-gray-900 font-medium">{vehicle.registrationDate}</p>
                                </div>
                                <div>
                                  <p className="text-gray-600 text-xs font-semibold">Expiry Date</p>
                                  <p className="text-gray-900 font-medium">{vehicle.expiryDate}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                       <div className="flex gap-3 pt-4 border-t-2 border-blue-200">
                      <button className="flex-1 bg-white border border-blue-500 hover:bg-blue-50 text-blue-700 px-4 py-2.5 rounded-lg font-medium text-sm transition-colors duration-200 flex items-center justify-center gap-2">
                        <Eye size={16} />
                        View
                      </button>
                      <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-colors duration-200 flex items-center justify-center gap-2">
                        <Download size={16} />
                        Download
                      </button>
                    </div>

                      </div>
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <Car size={48} className="text-blue-300 mx-auto mb-3" />
                      <p className="text-gray-600 font-medium">No Motor Vehicles found</p>
                      <p className="text-gray-400 text-sm mt-1">You have no registered motor vehicles.</p>
                    </div>
                  )}
                </div>
              )}

              {/* No Apprehensions Tab */}
              {documentsTab === 'no-apprehensions' && (
                <div className="space-y-4">
                  {noApprehensionsData.length > 0 ? (
                    noApprehensionsData.map((cert) => (
                      <div key={cert.id} className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-5 hover:shadow-lg transition-all duration-200">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start gap-4 flex-1">
                            <div className="bg-blue-600 rounded-full p-3 flex-shrink-0 mt-1">
                              <Shield size={24} className="text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-bold text-gray-900 text-lg mb-2">Certificate of No Apprehension</h3>
                              <p className="text-sm text-gray-600 mb-2">Certificate No: <span className="font-bold text-gray-900">{cert.certificateNo}</span></p>
                              <div className="grid grid-cols-2 gap-3 text-sm">
                                <div>
                                  <p className="text-gray-600 text-xs font-semibold">Issued Date</p>
                                  <p className="text-gray-900 font-medium">{cert.issuedDate}</p>
                                </div>
                                <div>
                                  <p className="text-gray-600 text-xs font-semibold">Valid Until</p>
                                  <p className="text-gray-900 font-medium">{cert.validUntil}</p>
                                </div>
                              </div>
                              <div className="mt-3">
                                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">
                                  {cert.status}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                       <div className="flex gap-3 pt-4 border-t-2 border-blue-200">
                      <button className="flex-1 bg-white border border-blue-500 hover:bg-blue-50 text-blue-700 px-4 py-2.5 rounded-lg font-medium text-sm transition-colors duration-200 flex items-center justify-center gap-2">
                        <Eye size={16} />
                        View
                      </button>
                      <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-colors duration-200 flex items-center justify-center gap-2">
                        <Download size={16} />
                        Download
                      </button>
                    </div>

                      </div>
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <Shield size={48} className="text-blue-300 mx-auto mb-3" />
                      <p className="text-gray-600 font-medium">No Apprehension Certificate</p>
                      <p className="text-gray-400 text-sm mt-1">You do not have any Certificate of No Apprehension yet.</p>
                    </div>
                  )}
                </div>
              )}

              {/* Official Receipts Tab */}
              {documentsTab === 'official-receipts' && (
                <div className="space-y-4">
                  {officialReceiptsData.length > 0 ? (
                    officialReceiptsData.map((receipt) => (
                      <div key={receipt.id} className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-5 hover:shadow-lg transition-all duration-200">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start gap-4 flex-1">
                            <div className="bg-blue-600 rounded-full p-3 flex-shrink-0 mt-1">
                              <Receipt size={24} className="text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-bold text-gray-900 text-lg mb-2">{receipt.description}</h3>
                              <p className="text-sm text-gray-600 mb-2">Receipt No: <span className="font-bold text-gray-900">{receipt.receiptNo}</span></p>
                              <div className="grid grid-cols-2 gap-3 text-sm">
                                <div>
                                  <p className="text-gray-600 text-xs font-semibold">Date</p>
                                  <p className="text-gray-900 font-medium">{receipt.date}</p>
                                </div>
                                <div>
                                  <p className="text-gray-600 text-xs font-semibold">Amount</p>
                                  <p className="text-blue-600 font-bold text-lg">₱{receipt.amount.toLocaleString()}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-3 pt-4 border-t-2 border-blue-200">
                          <button className="flex-1 bg-white border border-blue-500 hover:bg-blue-50 text-blue-700 px-4 py-2.5 rounded-lg font-medium text-sm transition-colors duration-200 flex items-center justify-center gap-2">
                            <Eye size={16} />
                            View
                          </button>
                          <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-colors duration-200 flex items-center justify-center gap-2">
                            <Download size={16} />
                            Download
                          </button>
                        </div>


                      </div>
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <Receipt size={48} className="text-blue-300 mx-auto mb-3" />
                      <p className="text-gray-600 font-medium">No Official Receipts</p>
                      <p className="text-gray-400 text-sm mt-1">You do not have any official receipts yet.</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            
          </div>
        </div>
      )}

     {/* Profile Modal */}
      {showProfileModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[999] p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-in scale-95 fade-in duration-300">
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-900 to-blue-800 px-6 py-6 flex items-center justify-between border-b border-blue-700 z-10">
              <div className="flex items-center gap-3">
                <User size={32} className="text-white" />
                <h2 className="text-2xl font-bold text-white">Profile</h2>
              </div>
              <button
                onClick={() => {
                  setShowProfileModal(false);
                  setActiveTooltip(null);
                }}
                className="text-white hover:bg-white/20 p-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            {/* Tab Navigation */}
            <div className="sticky top-16 z-10 flex justify-center border-b border-gray-200 bg-gray-50 overflow-x-auto shadow-sm">
              {[
                { id: 'personal', label: 'Personal', icon: User },
                { id: 'contact', label: 'Contact', icon: Phone },
                { id: 'medical', label: 'Medical', icon: Heart },
                { id: 'emergency', label: 'Emergency', icon: Shield },
                { id: 'address', label: 'Address', icon: MapPin },
                { id: 'notifications', label: 'Notifications', icon: Bell },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setProfileTab(tab.id as any);
                      setActiveTooltip(null);
                    }}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 font-bold text-sm transition-all duration-200 whitespace-nowrap ${
                      profileTab === tab.id
                        ? 'text-blue-900 bg-white border-b-2 border-blue-900'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Icon size={18} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6 lg:p-8">
              {/* Personal Info Tab */}
              {profileTab === 'personal' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="flex items-center text-xl sm:text-2xl font-bold text-blue-800 mb-6 space-x-2">
                      <User className="w-5 h-5 sm:w-6 sm:h-6 text-blue-800" />
                      <span>Personal Information</span>
                    </h2>
                  </div>

                  <div className="w-full">
                    <label className="flex items-center text-sm font-medium text-blue-800 mb-2">
                      LTO Client ID
                      <InfoTooltip 
                        id="client-id" 
                        content="This number is automatically assigned when the user registers. It serves as your unique identifier in the LTO system." 
                      />
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.105 0 2-.895 2-2V7a2 2 0 10-4 0v2c0 1.105.895 2 2 2zM5 11h14l-1.5 9h-11L5 11z" />
                        </svg>
                      </span>
                      <input
                        type="text"
                        defaultValue="25-030915-0841627"
                        readOnly
                        className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 bg-gray-100 text-gray-700 cursor-not-allowed"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                    <div className="relative">
                        <label className="flex items-center text-sm font-medium text-blue-800 mb-2">
                          First Name <span className="text-red-500">*</span>
                          <InfoTooltip 
                            id="first-name" 
                            content="This field can only be changed by a 'Revision of Records' application in the Driver's License System. after you started a transaction or after you linked your account with a license." 
                          />
                        </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                          <User size={18} />
                        </span>
                        <input
                          type="text"
                          defaultValue="JUAN"
                          readOnly
                          className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label className="flex items-center text-sm font-medium text-blue-800 mb-2">
                        Middle Name
                        <InfoTooltip 
                          id="middle-name" 
                          content="This field can only be changed by a 'Revision of Records' application in the Driver's License System. after you started a transaction or after you linked your account with a license." 
                        />
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                          <User size={18} />
                        </span>
                        <input
                          type="text"
                          defaultValue=""
                          className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label className="flex items-center text-sm font-medium text-blue-800 mb-2">
                        Last Name <span className="text-red-500">*</span>
                        <InfoTooltip 
                          id="last-name" 
                          content="This field can only be changed by a 'Revision of Records' application in the Driver's License System. after you started a transaction or after you linked your account with a license." 
                        />
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                          <User size={18} />
                        </span>
                        <input
                          type="text"
                          defaultValue="DELA CRUZ"
                          readOnly
                          className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                    <div>
                      <label className="flex items-center text-sm font-medium text-blue-800 mb-2">
                        Date of Birth <span className="text-red-500">*</span>
                        <InfoTooltip 
                          id="dob" 
                          content="This field can only be changed by a 'Revision of Records' application in the Driver's License System. after you started a transaction or after you linked your account with a license." 
                        />
                      </label>
                      <input
                        type="date"
                        defaultValue="1990-01-01"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>

                    <div>
                      <label className="flex items-center text-sm font-medium text-blue-800 mb-2">
                        Gender <span className="text-red-500">*</span>
                        <InfoTooltip 
                          id="gender" 
                          content="This field can only be changed by a 'Revision of Records' application in the Driver's License System. after you started a transaction or after you linked your account with a license." 
                        />
                      </label>
                      <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                        <option>MALE</option>
                        <option>FEMALE</option>
                      </select>
                    </div>

                    <div>
                      <label className="flex items-center text-sm font-medium text-blue-800 mb-2">
                        Civil Status <span className="text-red-500">*</span>
                        <InfoTooltip 
                          id="civil-status" 
                          content="This field can only be changed by a 'Revision of Records' application in the Driver's License System. after you started a transaction or after you linked your account with a license." 
                        />
                      </label>
                      <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                        <option>Single</option>
                        <option>Married</option>
                        <option>Widowed</option>
                        <option>Separated</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="flex items-center text-sm font-medium text-blue-800 mb-2">
                        Nationality <span className="text-red-500">*</span>
                        <InfoTooltip 
                          id="nationality" 
                          content="This field can only be changed by a 'Revision of Records' application in the Driver's License System. after you started a transaction or after you linked your account with a license." 
                        />
                      </label>
                      <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                        <option>FILIPINO - PHL</option>
                      </select>
                    </div>

                    <div>
                      <label className="flex items-center text-sm font-medium text-blue-800 mb-2">
                        Place of Birth <span className="text-red-500">*</span>
                        <InfoTooltip 
                          id="pob" 
                          content="Enter the city/municipality where you were born." 
                        />
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

              {/* Contact Tab */}
              {profileTab === 'contact' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="flex items-center text-xl sm:text-2xl font-bold text-blue-800 mb-6 space-x-2">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-800" />
                      <span>Contact Information</span>
                    </h2>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-blue-900 flex items-center">
                          Email Address
                          <InfoTooltip 
                            id="email" 
                            content="A valid and active email address to contact the registrant. E.g. email@domain.com" 
                          />
                        </p>
                        <p className="text-sm text-gray-600 mt-1">juandelacruz@email.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="flex items-center text-sm font-medium text-blue-800 mb-2">
                        Country Code <span className="text-red-500">*</span>
                        <InfoTooltip 
                          id="country-code" 
                          content="Select the country code for your mobile number." 
                        />
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
                      <label className="flex items-center text-sm font-medium text-blue-800 mb-2">
                        Mobile Phone <span className="text-red-500">*</span>
                        <InfoTooltip 
                          id="mobile" 
                          content="A local or overseas mobile number where to contact the registrant. e.g. 917-1234567 for delete, please hold delete key" 
                        />
                      </label>
                      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                        <div className="relative flex-1">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                          <input
                            type="tel"
                            defaultValue="9123456789"
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            placeholder="Enter mobile number"
                          />
                        </div>
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium whitespace-nowrap flex items-center justify-center space-x-2">
                          <Check className="w-5 h-5" />
                          <span>Verify Number</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Medical Tab */}
              {profileTab === 'medical' && (
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
                      <label className="flex items-center text-sm font-medium text-blue-800 mb-2">
                        Complexion <span className="text-red-500">*</span>
                        <InfoTooltip 
                          id="complexion" 
                          content="Select the appropriate complexion from the drop-down list." 
                        />
                      </label>
                      <User className="absolute left-3 bottom-[14px] text-gray-400 pointer-events-none" size={18} />
                      <select className="w-full appearance-none pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                        <option value="">Select Complexion</option>
                        <option>Fair</option>
                        <option>Medium</option>
                        <option>Dark</option>
                      </select>
                    </div>

                    {/* Blood Type */}
                    <div className="relative">
                      <label className="flex items-center text-sm font-medium text-blue-800 mb-2">
                        Blood Type <span className="text-red-500">*</span>
                        <InfoTooltip 
                          id="blood-type" 
                          content="After this field is filled in, the field entry can only be changed by a Medical Clinic." 
                        />
                      </label>
                      <Droplet className="absolute left-3 bottom-[14px] text-gray-400 pointer-events-none" size={18} />
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
                    </div>

                    {/* Eye Color */}
                    <div className="relative">
                      <label className="flex items-center text-sm font-medium text-blue-800 mb-2">
                        Eye Color <span className="text-red-500">*</span>
                        <InfoTooltip 
                          id="eye-color" 
                          content="After this field is filled in, the field entry can only be changed by a Medical Clinic." 
                        />
                      </label>
                      <Eye className="absolute left-3 bottom-[14px] text-gray-400 pointer-events-none" size={18} />
                      <select className="w-full appearance-none pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                        <option value="">Select Eye Color</option>
                        <option>Black</option>
                        <option>Brown</option>
                        <option>Blue</option>
                        <option>Green</option>
                        <option>Gray</option>
                      </select>
                    </div>

                    {/* Body Type */}
                    <div className="relative">
                      <label className="flex items-center text-sm font-medium text-blue-800 mb-2">
                        Body Type <span className="text-red-500">*</span>
                        <InfoTooltip 
                          id="body-type" 
                          content="Select the appropriate body type from the drop-down list." 
                        />
                      </label>
                      <Activity className="absolute left-3 bottom-[14px] text-gray-400 pointer-events-none" size={18} />
                      <select className="w-full appearance-none pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                        <option value="">Select Body Type</option>
                        <option>Light</option>
                        <option>Medium</option>
                        <option>Heavy</option>
                      </select>
                    </div>

                    {/* Weight */}
                    <div className="relative">
                      <label className="flex items-center text-sm font-medium text-blue-800 mb-2">
                        Weight (kg) <span className="text-red-500">*</span>
                        <InfoTooltip 
                          id="weight" 
                          content="After this field is filled in, the field entry can only be changed by a Medical Clinic." 
                        />
                      </label>
                      <Feather className="absolute left-3 bottom-[14px] text-gray-400 pointer-events-none" size={18} />
                      <input
                        type="number"
                        placeholder="Enter weight"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>

                    {/* Hair Color */}
                    <div className="relative">
                      <label className="flex items-center text-sm font-medium text-blue-800 mb-2">
                        Hair Color <span className="text-red-500">*</span>
                        <InfoTooltip 
                          id="hair-color" 
                          content="Select the hair color from the drop-down list." 
                        />
                      </label>
                      <User className="absolute left-3 bottom-[14px] text-gray-400 pointer-events-none" size={18} />
                      <select className="w-full appearance-none pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                        <option value="">Select Hair Color</option>
                        <option>Black</option>
                        <option>Brown</option>
                        <option>Blonde</option>
                        <option>Red</option>
                        <option>Gray</option>
                      </select>
                    </div>

                    {/* Height */}
                    <div className="relative">
                      <label className="flex items-center text-sm font-medium text-blue-800 mb-2">
                        Height (cm) <span className="text-red-500">*</span>
                        <InfoTooltip 
                          id="height" 
                          content="After this field is filled in, the field entry can only be changed by a Medical Clinic." 
                        />
                      </label>
                      <MapPin className="absolute left-3 bottom-[14px] text-gray-400 pointer-events-none" size={18} />
                      <input
                        type="number"
                        placeholder="Enter Height"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>

                    {/* Organ Donor */}
                    <div className="relative">
                      <label className="flex items-center text-sm font-medium text-blue-800 mb-2">
                        Organ Donor <span className="text-red-500">*</span>
                        <InfoTooltip 
                          id="organ-donor" 
                          content="Select Yes if you want to be an organ donor. Otherwise select No." 
                        />
                      </label>
                      <Heart className="absolute left-3 bottom-[14px] text-gray-400 pointer-events-none" size={18} />
                      <select className="w-full appearance-none pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                        <option value="">Select Preference</option>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Emergency Tab */}
              {profileTab === 'emergency' && (
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
                      <label className="flex items-center text-sm font-medium text-blue-800 mb-2">
                        Contact Name <span className="text-red-500">*</span>
                        <InfoTooltip 
                          id="emergency-name" 
                          content="Full name (last name, first name, middle name) of the emergency contact of the registrant." 
                        />
                      </label>
                      <User className="absolute left-3 bottom-[14px] text-gray-400" size={18} />
                      <input
                        type="text"
                        placeholder="Enter Name"
                        className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>

                    {/* Contact Number */}
                    <div className="relative">
                      <label className="flex items-center text-sm font-medium text-blue-800 mb-2">
                        Contact Number <span className="text-red-500">*</span>
                        <InfoTooltip 
                          id="emergency-number" 
                          content="A local or overseas telephone number to contact the emergency contact. Format: Country code + area code + phone number" 
                        />
                      </label>
                      <Phone className="absolute left-3 bottom-[14px] text-gray-400" size={18} />
                      <input
                        type="tel"
                        placeholder="Enter Number"
                        className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div className="relative">
                    <label className="flex items-center text-sm font-medium text-blue-800 mb-2">
                      Address <span className="text-red-500">*</span>
                      <InfoTooltip 
                        id="emergency-address" 
                        content="Current address of the emergency contact." 
                      />
                    </label>
                    <MapPin className="absolute left-3 top-10 text-gray-400" size={18} />
                    <textarea
                      rows={3}
                      placeholder="Enter emergency contact person address"
                      className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>

                  <div className="border-t pt-6 mt-8">
                    <h3 className="flex items-center text-lg font-semibold text-blue-800 mb-4">
                      Employer's Information
                      <InfoTooltip 
                        id="employer-info" 
                        content="Enter your employer's information for employment verification purposes." 
                      />
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label className="flex items-center text-sm font-medium text-blue-800 mb-2">
                          Employer's Name <span className="text-red-500">*</span>
                          <InfoTooltip 
                            id="employer-name" 
                            content="Name of the registrant's current employer." 
                          />
                        </label>
                        <User className="absolute left-3 bottom-[14px] text-gray-400" size={18} />
                        <input
                          type="text"
                          placeholder="Enter Employer's Name"
                          className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                      </div>

                      <div className="relative">
                        <label className="flex items-center text-sm font-medium text-blue-800 mb-2">
                          Employer's Address <span className="text-red-500">*</span>
                          <InfoTooltip 
                            id="employer-address" 
                            content="Address of the registrant's employer." 
                          />
                        </label>
                        <MapPin className="absolute left-3 bottom-[14px] text-gray-400" size={18} />
                        <input
                          type="text"
                          placeholder="Enter Employer's Address"
                          className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6 mt-8">
                    <h3 className="flex items-center text-lg font-semibold text-blue-800 mb-4">
                      Mother's Maiden Name
                      <InfoTooltip 
                        id="mother-info" 
                        content="Enter the mother's maiden name as it appears on official documents." 
                      />
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="relative">
                        <label className="flex items-center text-sm font-medium text-blue-800 mb-2">
                          First Name <span className="text-red-500">*</span>
                          <InfoTooltip 
                            id="mother-first-name" 
                            content="First name of your mother. In case the first name was changed by your mother after her marriage please encode the first name she had before her marriage." 
                          />
                        </label>
                        <User className="absolute left-3 bottom-[14px] text-gray-400" size={18} />
                        <input
                          type="text"
                          placeholder="Enter First Name"
                          className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                      </div>

                      <div className="relative">
                        <label className="flex items-center text-sm font-medium text-blue-800 mb-2">
                          Middle Name <span className="text-red-500">*</span>
                          <InfoTooltip 
                            id="mother-middle-name" 
                            content="The Middle Name of your mother before she married." 
                          />
                        </label>
                        <User className="absolute left-3 bottom-[14px] text-gray-400" size={18} />
                        <input
                          type="text"
                          placeholder="Enter Middle Name"
                          className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                      </div>

                      <div className="relative">
                        <label className="flex items-center text-sm font-medium text-blue-800 mb-2">
                          Last Name <span className="text-red-500">*</span>
                           <InfoTooltip 
                            id="mother-last-name" 
                            content="The Last Name of your mother before she married." 
                          />
                        </label>
                        <User className="absolute left-3 bottom-[14px] text-gray-400" size={18} />
                        <input
                          type="text"
                          placeholder="Enter Last Name"
                          className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                      </div>
                    </div>
                    
                  </div>

                  <div className="border-t pt-6 mt-8">
                    <h3 className="flex items-center text-lg font-semibold text-blue-800 mb-4">
                      Father's Information
                      <InfoTooltip 
                        id="father-info" 
                        content="Enter your father's complete name for identification purposes." 
                      />
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="relative">
                        <label className="flex items-center text-sm font-medium text-blue-800 mb-2">
                          First Name <span className="text-red-500">*</span>
                          <InfoTooltip 
                            id="father-first-name" 
                            content="First Name of the registrant's father." 
                          />
                        </label>
                        <User className="absolute left-3 bottom-[14px] text-gray-400" size={18} />
                        <input
                          type="text"
                          placeholder="Enter First Name"
                          className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                      </div>

                      <div className="relative">
                        <label className="flex items-center text-sm font-medium text-blue-800 mb-2">
                          Middle Name <span className="text-red-500">*</span>
                           <InfoTooltip 
                            id="father-middle-name" 
                            content="Middle Name of the registrant's father." 
                          />
                        </label>
                        <User className="absolute left-3 bottom-[14px] text-gray-400" size={18} />
                        <input
                          type="text"
                          placeholder="Enter Middle Name"
                          className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                      </div>

                      <div className="relative">
                        <label className="flex items-center text-sm font-medium text-blue-800 mb-2">
                          Last Name <span className="text-red-500">*</span>
                            <InfoTooltip 
                            id="father-last-name" 
                            content="Last Name of the registrant's father." 
                          />
                        </label>
                        <User className="absolute left-3 bottom-[14px] text-gray-400" size={18} />
                        <input
                          type="text"
                          placeholder="Enter Last Name"
                          className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Address Tab */}
              {profileTab === 'address' && (
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
                      <label className="flex items-center text-sm font-medium text-blue-800 mb-2">
                        House No. <span className="text-red-500">*</span>
                        <InfoTooltip 
                          id="house-no" 
                          content="This field can only be changed by a 'Revision of Records' application in the Driver's License System. after you started a transaction or after you linked your account with a license."
                        />
                      </label>
                      <Home className="absolute left-3 bottom-[14px] text-gray-400" size={18} />
                      <input
                        type="text"
                        placeholder="Enter House No."
                        className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>

                    {/* Street / Village */}
                    <div className="relative">
                      <label className="flex items-center text-sm font-medium text-blue-800 mb-2">
                        Street / Village <span className="text-red-500">*</span>
                        <InfoTooltip 
                          id="street" 
                         content="This field can only be changed by a 'Revision of Records' application in the Driver's License System. after you started a transaction or after you linked your account with a license."
                        />
                      </label>
                      <MapPin className="absolute left-3 bottom-[14px] text-gray-400" size={18} />
                      <input
                        type="text"
                        placeholder="Enter Street or Village"
                        className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>

                    {/* Province */}
                    <div className="relative">
                      <label className="flex items-center text-sm font-medium text-blue-800 mb-2">
                        Province <span className="text-red-500">*</span>
                        <InfoTooltip 
                          id="province" 
                          content="This field can only be changed by a 'Revision of Records' application in the Driver's License System. after you started a transaction or after you linked your account with a license."
                        />
                      </label>
                      <Globe className="absolute left-3 bottom-[14px] text-gray-400 pointer-events-none" size={18} />
                      <select className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                        <option value="">Select Province</option>
                        <option value="Agusan del Norte">Agusan del Norte</option>
                        <option value="Agusan del Sur">Agusan del Sur</option>
                        <option value="Surigao del Norte">Surigao del Norte</option>
                        <option value="Surigao del Sur">Surigao del Sur</option>
                        <option value="Dinagat Islands">Dinagat Islands</option>
                      </select>
                    </div>

                    {/* City / Municipality */}
                    <div className="relative">
                      <label className="flex items-center text-sm font-medium text-blue-800 mb-2">
                        City / Municipality <span className="text-red-500">*</span>
                        <InfoTooltip 
                          id="city" 
                          content="This field can only be changed by a 'Revision of Records' application in the Driver's License System. after you started a transaction or after you linked your account with a license." 
                        />
                      </label>
                      <MapPin className="absolute left-3 bottom-[14px] text-gray-400 pointer-events-none" size={18} />
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
                    </div>

                    {/* Barangay */}
                    <div className="relative">
                      <label className="flex items-center text-sm font-medium text-blue-800 mb-2">
                        Barangay <span className="text-red-500">*</span>
                        <InfoTooltip 
                          id="barangay" 
                          content="This field can only be changed by a 'Revision of Records' application in the Driver's License System. after you started a transaction or after you linked your account with a license."
                        />
                      </label>
                      <MapPin className="absolute left-3 bottom-[14px] text-gray-400 pointer-events-none" size={18} />
                      <select className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                        <option value="">Select Barangay</option>
                        <option value="Ambago">Ambago</option>
                        <option value="Amparo">Amparo</option>
                        <option value="Ampayon">Ampayon</option>
                      </select>
                    </div>

                    {/* ZIP Code */}
                    <div className="relative">
                      <label className="flex items-center text-sm font-medium text-blue-800 mb-2">
                        ZIP Code <span className="text-red-500">*</span>
                        <InfoTooltip 
                          id="zip" 
                          content="This field can only be changed by a 'Revision of Records' application in the Driver's License System. after you started a transaction or after you linked your account with a license."
                        />
                      </label>
                      <Globe className="absolute left-3 bottom-[14px] text-gray-400 pointer-events-none" size={18} />
                      <select className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                        <option value="">Select ZIP Code</option>
                        <option value="8600">8600 - Butuan City</option>
                        <option value="8605">8605 - Cabadbaran City</option>
                        <option value="8601">8601 - Buenavista</option>
                        <option value="8602">8602 - Carmen</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center text-center pt-4">
                    <label className="flex items-center text-lg font-semibold text-blue-800 mb-3">
                      Use a different address as contact address?
                      <InfoTooltip 
                        id="different-address" 
                        content="Select 'Yes' if you want to use a different address for correspondence and communications." 
                      />
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

              {/* Notifications Tab */}
              {profileTab === 'notifications' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="flex items-center space-x-2 text-2xl font-bold text-blue-800 mb-2">
                      <Bell className="w-6 h-6 text-blue-800" />
                      <span>SMS Notifications</span>
                      <InfoTooltip 
                        id="notifications-info" 
                        content="Manage your SMS notification preferences. Select 'Yes' to receive notifications and 'No' to opt out." 
                      />
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {Object.entries(notifications).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition"
                      >
                        <label className="text-sm sm:text-base font-medium text-gray-700 flex-1 mb-2 sm:mb-0 break-words">
                          {
                            {
                              deactivation: (
                                <>
                                  Receive SMS notification after account deactivation?
                                  <InfoTooltip 
                                    id="notif-deactivation" 
                                    content="Your account will be disabled if you are idle for some time. You can configure, if you want to be noticed after deactivation." 
                                  />
                                </>
                              ),
                              transaction: (
                                <>
                                  Receive SMS notification for transaction confirmation?
                                  <InfoTooltip 
                                    id="notif-transaction" 
                                    content="Receive a SMS as a reminder, before your appointment takes place." 
                                  />
                                </>
                              ),
                              appointment: (
                                <>
                                  Receive SMS notification 24 hours before every appointment?
                                  <InfoTooltip 
                                    id="notif-appointment" 
                                    content="Receive a SMS as a reminder, before your appointment takes place." 
                                  />
                                </>
                              ),
                              license: (
                                <>
                                  Receive SMS notification 60 days before your license expires?
                                  <InfoTooltip 
                                    id="notif-license" 
                                    content="You can configure to receive a SMS reminder before you license expires." 
                                  />
                                </>
                              ),
                              reschedule: (
                                <>
                                  Receive SMS notification after LTO rescheduled your appointment?
                                  <InfoTooltip 
                                    id="notif-reschedule" 
                                    content="LTO may reschedule your appointment if the LTO office, where the appointment is made can not be used for transaction. This can happen due to natural catastrophes, or other unexpected events." 
                                  />
                                </>
                              ),
                            }[key]
                          }
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
                                notifications[key as keyof typeof notifications] === true
                                  ? "bg-green-600 text-white"
                                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                              }`}
                          >
                            <Check
                              size={18}
                              className={`${notifications[key as keyof typeof notifications] === true ? "text-white" : "text-gray-700"}`}
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
                                notifications[key as keyof typeof notifications] === false
                                  ? "bg-red-600 text-white"
                                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                              }`}
                          >
                            <X
                              size={18}
                              className={`${notifications[key as keyof typeof notifications] === false ? "text-white" : "text-gray-700"}`}
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
                <button 
                  onClick={() => {
                    setShowProfileModal(false);
                    setActiveTooltip(null);
                  }}
                  className="flex items-center justify-center w-full md:w-auto space-x-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition font-medium"
                >
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
        </div>
      )}
      
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