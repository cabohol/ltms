"use client";

import React, { useState , useEffect} from 'react';
import Image from "next/image";
import Link from "next/link";
import { Globe, GraduationCap, Phone, UserPlus, LogIn, Menu, X, User, FileText, Car, Receipt, Landmark, File, UserCircle, Home, AlertCircle, CheckCircle, History, Clock, Search, NotebookTextIcon, WalletCards, FileCheck, Shield, Download, Eye } from 'lucide-react';

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
    }
  };


  return (
    
    <div className="min-h-screen bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "url('/bgpic.jpg')" }}>
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
           {modules.map((module, index) => {
            // Check if this is the profile module
            if (module.id === 'profile') {
              return (
                <Link
                  key={module.id}
                  href="/profile"
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
                </Link>
              );
            }

            // Other modules remain as buttons
            return (
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
            );
          })}
          </div>

          {/* Footer Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-9">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/20 w-full sm:w-auto max-w-[280px] sm:max-w-none">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0"></div>
              <span className="font-semibold text-xs sm:text-sm md:text-base text-white">Release 2.5.4</span>
            </div>
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
                <h2 className="text-2xl font-bold text-white">VIOLATIONS</h2>
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
                className={`px-6 py-4 font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap ${
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
                className={`px-6 py-4 font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap ${
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
                className={`px-6 py-4 font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap ${
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
                className={`px-6 py-4 font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap ${
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