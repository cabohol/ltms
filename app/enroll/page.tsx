"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { User, Upload, CheckCircle, AlertCircle, ChevronRight, HelpCircle, LogIn, Menu, X, Phone, Globe, GraduationCap, UserPlus, Shield, Calendar, Mail, ArrowLeft, XCircle } from 'lucide-react';
import { useRouter } from "next/navigation";

export default function EnrollmentRedesign() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBackside, setShowBackside] = useState(false);
  const [isELearningOpen, setIsELearningOpen] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    hasExistingLicense: null,
    licenseNumber: '',
    licenseSerialNumber: '',
    conductorLicenseNumber: '',
    conductorSerialNumber: '',
    licenseExpiry: '',
    conductorExpiry: '',
    hasFilipinoCitizen: null,
    acrNumber: '',
    acrExpiryDate: '',
    nationality: '',
    lastName: '',
    firstName: '',
    middleName: '',
    birthMonth: '',
    birthDay: '',
    birthYear: '',
    gender: '',
    mothersLastName: '',
    mothersFirstName: '',
    mothersMiddleName: '',
    emailAddress: '',
    confirmEmail: '',
    mobileNumber: '',
    homePhone: ''
  });

  const [errors, setErrors] = useState({});

  const steps = [
    { number: 1, title: 'Existing License', icon: Shield },
    { number: 2, title: 'Nationality', icon: Globe },
    { number: 3, title: 'Personal Information', icon: User },
    { number: 4, title: 'Contact Information', icon: Mail }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateStep = () => {
    const newErrors = {};
    
    if (currentStep === 1) {
      if (formData.hasExistingLicense === null) {
        newErrors.hasExistingLicense = 'Please answer this question';
      }
      if (formData.hasExistingLicense === true) {
        if (!formData.licenseNumber.trim()) newErrors.licenseNumber = 'License number is required';
        if (!formData.licenseSerialNumber.trim()) newErrors.licenseSerialNumber = 'Serial number is required';
        if (!formData.licenseExpiry.trim()) newErrors.licenseExpiry = 'License expiry date is required';
      }
    }
    
    if (currentStep === 2) {
      if (formData.hasFilipinoCitizen === null) {
        newErrors.hasFilipinoCitizen = 'Please answer this question';
      }
      if (formData.hasFilipinoCitizen === false) {
        if (!formData.acrNumber.trim()) newErrors.acrNumber = 'ACR number is required';
        if (!formData.acrExpiryDate.trim()) newErrors.acrExpiryDate = 'ACR expiry date is required';
        if (!formData.nationality.trim()) newErrors.nationality = 'Nationality is required';
      }
    }
    
    if (currentStep === 3) {
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.birthMonth) newErrors.birthMonth = 'Month is required';
      if (!formData.birthDay) newErrors.birthDay = 'Day is required';
      if (!formData.birthYear) newErrors.birthYear = 'Year is required';
      if (!formData.gender) newErrors.gender = 'Gender is required';
      if (!formData.mothersLastName.trim()) newErrors.mothersLastName = "Mother's last name is required";
      if (!formData.mothersFirstName.trim()) newErrors.mothersFirstName = "Mother's first name is required";
    }
    
    if (currentStep === 4) {
      if (!formData.emailAddress.trim()) {
        newErrors.emailAddress = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress)) {
        newErrors.emailAddress = 'Please enter a valid email';
      }
      if (formData.emailAddress !== formData.confirmEmail) {
        newErrors.confirmEmail = 'Emails do not match';
      }
      if (!formData.mobileNumber.trim()) {
        newErrors.mobileNumber = 'Mobile number is required';
      } else if (!/^(09|\+639)\d{9}$/.test(formData.mobileNumber)) {
        newErrors.mobileNumber = 'Please enter a valid Philippine mobile number';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const nextStep = () => {
  if (validateStep()) {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Show confirmation modal instead of alert
      setShowConfirmModal(true);
    }
  }
};

const handleConfirmSubmit = (confirmed) => {
  if (confirmed) {
    // Clear form and navigate to login
    setFormData({
      hasExistingLicense: null,
      licenseNumber: '',
      licenseSerialNumber: '',
      conductorLicenseNumber: '',
      conductorSerialNumber: '',
      licenseExpiry: '',
      conductorExpiry: '',
      hasFilipinoCitizen: null,
      acrNumber: '',
      acrExpiryDate: '',
      nationality: '',
      lastName: '',
      firstName: '',
      middleName: '',
      birthMonth: '',
      birthDay: '',
      birthYear: '',
      gender: '',
      mothersLastName: '',
      mothersFirstName: '',
      mothersMiddleName: '',
      emailAddress: '',
      confirmEmail: '',
      mobileNumber: '',
      homePhone: ''
    });
    setCurrentStep(1);
    setShowConfirmModal(false);
    router.push('/login');
  } else {
    // Just close the modal and stay on page
    setShowConfirmModal(false);
  }
};


  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleELearning = () => {
    setIsELearningOpen(!isELearningOpen);
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "url('/bg.jpg')" }}>
      <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-[1px]"></div>
      {/* Navigation */}
      <nav className="bg-blue-900/95 backdrop-blur-sm border-b border-white/10 top-0 z-50">
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

           
            {/* Navigation Links */}
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
              <div className="relative">
                <Link
                  href="/contact"
                  className="flex items-center gap-2 px-4 py-2 text-white font-semibold text-sm rounded-lg hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/10"
                  aria-label="REGISTER"
                >
                  <UserPlus size={18} />
                  <span className="hidden lg:inline">REGISTER</span>
                </Link>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
              </div>
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

          {/* Mobile nav menu */}
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

      <div className="w-full min-h-screen flex items-start justify-center py-10">
        <div className="w-full max-w-7xl rounded-xl sm:rounded-2xl p-2 sm:p-6 backdrop-blur-sm shadow-2xl border-2 sm:border-4 border-blue-500/50">
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-3 py-8 relative z-10">
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
              
              {/* Progress Indicator */}
              <div className="bg-white border-b border-gray-200 mb-8 pb-8">
                <div className="max-w-6xl mx-auto">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <UserPlus className="text-blue-600" size={24} />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">Enroll Individual</h2>
                    </div>
                    <span className="text-sm font-medium text-gray-600">Step {currentStep} of 4</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    {steps.map((step, index) => (
                      <React.Fragment key={step.number}>
                        <div className="flex flex-col items-center gap-2">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all flex-shrink-0 ${
                            step.number < currentStep ? 'bg-blue-500 text-white' :
                            step.number === currentStep ? 'bg-blue-600 text-white ring-4 ring-blue-200' :
                            'bg-gray-200 text-gray-600'
                          }`}>
                            {step.number < currentStep ? (
                              <CheckCircle size={24} />
                            ) : (
                              <step.icon size={24} />
                            )}
                          </div>
                          <span className="text-xs sm:text-sm font-medium text-center text-gray-700 max-w-20">{step.title}</span>
                        </div>
                        {index < steps.length - 1 && (
                          <div className={`h-1 flex-1 rounded-full transition-all mb-10 ${
                            step.number < currentStep ? 'bg-blue-500' : 'bg-gray-300'
                          }`} />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Two Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Left Column - Side Guide */}
                <div className="lg:col-span-1 hidden lg:block">
                  <div className="top-24 space-y-6">
                    {currentStep === 1 && (
                      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 space-y-4">
                        <h4 className="font-bold text-gray-900 flex items-center gap-2">
                          <Shield className="text-blue-600" size={20} />
                          License Information
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>Have your Driver's License ready</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>You'll need the serial number from the back</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>Conductor's License is optional</span>
                          </li>
                        </ul>
                      </div>
                    )}
                    
                    {currentStep === 2 && (
                      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 space-y-4">
                        <h4 className="font-bold text-gray-900 flex items-center gap-2">
                          <Globe className="text-blue-600" size={20} />
                          Citizenship Details
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>Confirm your citizenship status</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>Non-Filipinos need ACR documents</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>ACR must be valid and updated</span>
                          </li>
                        </ul>
                      </div>
                    )}
                    
                    {currentStep === 3 && (
                      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 space-y-4">
                        <h4 className="font-bold text-gray-900 flex items-center gap-2">
                          <User className="text-blue-600" size={20} />
                          Personal Details
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>Use your legal name as it appears on documents</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>Enter your mother's maiden name correctly</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>Double-check all information</span>
                          </li>
                        </ul>
                      </div>
                    )}
                    
                    {currentStep === 4 && (
                      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 space-y-4">
                        <h4 className="font-bold text-gray-900 flex items-center gap-2">
                          <Mail className="text-blue-600" size={20} />
                          Contact Details
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>Use a valid email you check regularly</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>Mobile number must be Philippine format</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>We'll send updates to these contacts</span>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Column - Form Content */}
                <div className="lg:col-span-2">
                  {/* Step 1: Existing License */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div className="text-center mb-8 lg:text-left">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Existing License</h3>
                       
                      </div>

                      <QuestionCard
                        question="Do you have a Philippine Driver's or Conductor's License?"
                        value={formData.hasExistingLicense}
                        onChange={(value) => handleInputChange('hasExistingLicense', value)}
                        error={errors.hasExistingLicense}
                        required
                      />

                      {formData.hasExistingLicense === true && (
                        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 space-y-6">
                          <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
  Complete all applicable fields
</h4>

<div className="mt-2 flex items-start gap-3 bg-blue-50 border border-blue-200 text-blue-800 px-4 py-3 rounded-lg">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5 mt-0.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 16h-1v-4h-1m1-4h.01M12 3a9 9 0 11-9 9 9 9 0 019-9z"
    />
  </svg>

  <p className="text-sm">
    <span className="font-semibold">Reminder:</span> Failure to provide your existing license can
    delay your application.
  </p>
</div>


                          {/* License Preview */}
                          <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm mb-4">
                            <div className="flex justify-center items-center">
                              <div 
                                className="relative w-full max-w-md transition-all duration-700"
                                style={{
                                  transformStyle: 'preserve-3d',
                                  transform: showBackside ? 'rotateY(180deg)' : 'rotateY(0deg)'
                                }}
                              >
                                {!showBackside && (
                                  <img 
                                    src="/driverlicense.png" 
                                    alt="Driver's License Front" 
                                    className="w-full h-auto rounded-lg shadow-md"
                                  />
                                )}
                                {showBackside && (
                                  <img 
                                    src="/backside.png" 
                                    alt="Driver's License Back" 
                                    className="w-full h-auto rounded-lg shadow-md"
                                  />
                                )}
                              </div>
                            </div>
                            
                            <button 
                              onClick={() => setShowBackside(!showBackside)}
                              className="w-full mt-3 text-blue-600 text-sm font-medium hover:text-blue-700 flex items-center justify-center gap-2 transition-colors"
                            >
                              {showBackside ? '← Show Front' : 'Show Backside →'}
                            </button>
                          </div>

                          <div className="space-y-4">
                            <h5 className="font-semibold text-gray-900 flex items-center gap-2">
                              <Shield size={18} className="text-blue-600" />
                              Driver's License
                            </h5>
                            <InputField
                              label="License Number"
                              value={formData.licenseNumber}
                              onChange={(value) => handleInputChange('licenseNumber', value)}
                              error={errors.licenseNumber}
                              placeholder="Enter license number"
                              required
                            />
                            <InputField
                              label="Serial Number (back of your card)"
                              value={formData.licenseSerialNumber}
                              onChange={(value) => handleInputChange('licenseSerialNumber', value)}
                              error={errors.licenseSerialNumber}
                              placeholder="Enter serial number"
                              required
                            />
                            <InputField
                              label="License Expiry Date"
                              type="date"
                              value={formData.licenseExpiry}
                              onChange={(value) => handleInputChange('licenseExpiry', value)}
                              error={errors.licenseExpiry}
                              required
                            />
                          </div>

                          <div className="space-y-4">
                            <h5 className="font-semibold text-gray-900 flex items-center gap-2">
                              <Shield size={18} className="text-blue-600" />
                              Conductor's License (if applicable)
                            </h5>
                            <InputField
                              label="Conductor's License Number"
                              value={formData.conductorLicenseNumber}
                              onChange={(value) => handleInputChange('conductorLicenseNumber', value)}
                              placeholder="Enter conductor's license number (optional)"
                            />
                            <InputField
                              label="Serial Number (back of your card)"
                              value={formData.conductorSerialNumber}
                              onChange={(value) => handleInputChange('conductorSerialNumber', value)}
                              placeholder="Enter serial number (optional)"
                            />
                            <InputField
                              label="Conductor's License Expiry Date"
                              type="date"
                              value={formData.conductorExpiry}
                              onChange={(value) => handleInputChange('conductorExpiry', value)}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Step 2: Nationality */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div className="text-center mb-8 lg:text-left">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Nationality</h3>
                        <p className="text-gray-600">Verify your citizenship information</p>
                      </div>

                      <QuestionCard
                        question="Are you a Filipino citizen?"
                        value={formData.hasFilipinoCitizen}
                        onChange={(value) => handleInputChange('hasFilipinoCitizen', value)}
                        error={errors.hasFilipinoCitizen}
                        required
                      />

                      {formData.hasFilipinoCitizen === false && (
                        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 space-y-6">
                          <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                            <Upload size={20} className="text-blue-600" />
                            Philippine issued Alien Certificate of Registration (ACR)
                          </h4>
                          
                          <InputField
                            label="ACR Number"
                            value={formData.acrNumber}
                            onChange={(value) => handleInputChange('acrNumber', value)}
                            error={errors.acrNumber}
                            placeholder="Enter ACR number"
                            required
                          />

                          <InputField
                            label="ACR Expiration Date"
                            type="date"
                            value={formData.acrExpiryDate}
                            onChange={(value) => handleInputChange('acrExpiryDate', value)}
                            error={errors.acrExpiryDate}
                            placeholder="MM/DD/YYYY"
                            required
                          />

                          <div>
                            <label className="block text-sm font-semibold text-gray-900 mb-2">
                              Nationality <span className="text-red-500">*</span>
                            </label>
                            <select
                              value={formData.nationality}
                              onChange={(e) => handleInputChange('nationality', e.target.value)}
                              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-4 transition-all appearance-none ${
                                errors.nationality
                                  ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                                  : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'
                              }`}
                            >
                              <option value="">Select your nationality</option>
                              <option value="American">American</option>
                              <option value="Australian">Australian</option>
                              <option value="British">British</option>
                              <option value="Canadian">Canadian</option>
                              <option value="Chinese">Chinese</option>
                              <option value="French">French</option>
                              <option value="German">German</option>
                              <option value="Indian">Indian</option>
                              <option value="Japanese">Japanese</option>
                              <option value="Korean">Korean</option>
                              <option value="Mexican">Mexican</option>
                              <option value="Other">Other</option>
                            </select>
                            {errors.nationality && <p className="mt-2 text-sm text-red-600">{errors.nationality}</p>}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Step 3: Personal Information */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div className="text-center mb-8 lg:text-left">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Personal Information</h3>
                        <p className="text-gray-600">Enter your name, birthdate, gender, and mother's maiden name</p>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex items-start gap-3">
                        <AlertCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                        <div className="text-sm text-blue-800">
                          <strong>Important:</strong> Make sure your name matches your official documents. Errors may delay processing.
                        </div>
                      </div>

                      <InputField
                        label="Last Name"
                        value={formData.lastName}
                        onChange={(value) => handleInputChange('lastName', value)}
                        error={errors.lastName}
                        placeholder="e.g., Dela Cruz"
                        icon={User}
                        required
                      />

                      <InputField
                        label="First Name"
                        value={formData.firstName}
                        onChange={(value) => handleInputChange('firstName', value)}
                        error={errors.firstName}
                        placeholder="e.g., Juan"
                        icon={User}
                        required
                      />

                      <InputField
                        label="Middle Name"
                        value={formData.middleName}
                        onChange={(value) => handleInputChange('middleName', value)}
                        placeholder="e.g., Santos (Optional)"
                        icon={User}
                      />

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Calendar size={16} className="text-blue-600" />
                          Date of Birth <span className="text-red-500">*</span>
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                          <SelectField
                            value={formData.birthMonth}
                            onChange={(value) => handleInputChange('birthMonth', value)}
                            options={[
                              { value: '', label: 'Month' },
                              { value: '01', label: 'January' },
                              { value: '02', label: 'February' },
                              { value: '03', label: 'March' },
                              { value: '04', label: 'April' },
                              { value: '05', label: 'May' },
                              { value: '06', label: 'June' },
                              { value: '07', label: 'July' },
                              { value: '08', label: 'August' },
                              { value: '09', label: 'September' },
                              { value: '10', label: 'October' },
                              { value: '11', label: 'November' },
                              { value: '12', label: 'December' }
                            ]}
                            error={errors.birthMonth}
                          />
                          <SelectField
                            value={formData.birthDay}
                            onChange={(value) => handleInputChange('birthDay', value)}
                            options={[
                              { value: '', label: 'Day' },
                              ...Array.from({length: 31}, (_, i) => ({ 
                                value: String(i + 1).padStart(2, '0'), 
                                label: String(i + 1) 
                              }))
                            ]}
                            error={errors.birthDay}
                          />
                          <SelectField
                            value={formData.birthYear}
                            onChange={(value) => handleInputChange('birthYear', value)}
                            options={[
                              { value: '', label: 'Year' },
                              ...Array.from({length: 100}, (_, i) => {
                                const year = 2024 - i;
                                return { value: String(year), label: String(year) };
                              })
                            ]}
                            error={errors.birthYear}
                          />
                        </div>
                        {(errors.birthMonth || errors.birthDay || errors.birthYear) && (
                          <p className="mt-2 text-sm text-red-600">Please select a complete birthdate</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-3">
                          Gender <span className="text-red-500">*</span>
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          <button
                            type="button"
                            onClick={() => handleInputChange('gender', 'male')}
                            className={`p-4 rounded-lg border-2 font-medium transition-all flex items-center justify-center gap-2 ${
                              formData.gender === 'male'
                                ? 'border-blue-600 bg-blue-50 text-blue-900'
                                : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                            }`}
                          >
                            <User size={20} />
                            Male
                          </button>
                          <button
                            type="button"
                            onClick={() => handleInputChange('gender', 'female')}
                            className={`p-4 rounded-lg border-2 font-medium transition-all flex items-center justify-center gap-2 ${
                              formData.gender === 'female'
                                ? 'border-blue-600 bg-blue-50 text-blue-900'
                                : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                            }`}
                          >
                            <User size={20} />
                            Female
                          </button>
                        </div>
                        {errors.gender && <p className="mt-2 text-sm text-red-600">{errors.gender}</p>}
                      </div>

                      <div className="border-t border-gray-200 pt-6 mt-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <User size={18} className="text-blue-600" />
                          Mother's Maiden Name
                        </h4>
                        <div className="space-y-4">
                          <InputField
                            label="Last Name"
                            value={formData.mothersLastName}
                            onChange={(value) => handleInputChange('mothersLastName', value)}
                            error={errors.mothersLastName}
                            placeholder="Mother's maiden last name"
                            required
                          />
                          <InputField
                            label="First Name"
                            value={formData.mothersFirstName}
                            onChange={(value) => handleInputChange('mothersFirstName', value)}
                            error={errors.mothersFirstName}
                            placeholder="Mother's first name"
                            required
                          />
                          <InputField
                            label="Middle Name"
                            value={formData.mothersMiddleName}
                            onChange={(value) => handleInputChange('mothersMiddleName', value)}
                            placeholder="Mother's middle name (Optional)"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Contact Information */}
                  {currentStep === 4 && (
                    <div className="space-y-6">
                      <div className="text-center mb-8 lg:text-left">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Contact Information</h3>
                        <p className="text-gray-600">We'll use this information to send updates about your enrollment</p>
                      </div>

                      <InputField
                        label="Email Address"
                        type="email"
                        value={formData.emailAddress}
                        onChange={(value) => handleInputChange('emailAddress', value)}
                        error={errors.emailAddress}
                        placeholder="your.email@example.com"
                        icon={Mail}
                        required
                      />

                      <InputField
                        label="Confirm Email Address"
                        type="email"
                        value={formData.confirmEmail}
                        onChange={(value) => handleInputChange('confirmEmail', value)}
                        error={errors.confirmEmail}
                        placeholder="Retype your email address"
                        icon={Mail}
                        required
                      />

                    

                      <InputField
                        label="Mobile Number"
                        type="tel"
                        value={formData.mobileNumber}
                        onChange={(value) => handleInputChange('mobileNumber', value)}
                        error={errors.mobileNumber}
                        placeholder="09171234567"
                        icon={Phone}
                        required
                      />

                      <InputField
                        label="Home Phone"
                        type="tel"
                        value={formData.homePhone}
                        onChange={(value) => handleInputChange('homePhone', value)}
                        placeholder="(02) 8123-4567 (Optional)"
                        icon={Phone}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-10 pt-6 border-t border-gray-200">
               
                
                {currentStep > 1 && (
                <button
                  onClick={prevStep}
                  className="mr-auto px-6 py-3 bg-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-400 transition-colors focus:outline-none focus:ring-4 focus:ring-gray-200 flex items-center justify-center gap-2"
                >
                  <ArrowLeft size={20} />
                  Previous
                </button>

                )}
                <button
              onClick={nextStep}
              className="ml-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-200 flex items-center justify-center gap-2"
            >
              {currentStep === 4 ? 'Create Account' : 'Next'}
              {currentStep < 4 && <ChevronRight size={16} />}
            </button>

              </div>

              {showConfirmModal && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]">
    <div className="bg-white rounded-lg shadow-xl p-8 max-w-md mx-4">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Confirm Submission</h3>
      <p className="text-gray-600 mb-8">Are you sure you want to create your account? Please verify all information is correct before proceeding.</p>
      <div className="flex gap-3">
        <button
          onClick={() => handleConfirmSubmit(false)}
          className="flex-1 px-4 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
        >
          No
        </button>
        <button
          onClick={() => handleConfirmSubmit(true)}
          className="flex-1 px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Yes
        </button>
      </div>
    </div>
  </div>
)}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

// ...existing code...
function QuestionCard({ question, value, onChange, error, required }) {
  return (
    <div className="border border-gray-300 rounded-lg p-6 hover:border-blue-300 transition-colors">
      <label className="block text-base font-semibold text-gray-900 mb-4">
        {question} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => onChange(true)}
          className={`p-4 rounded-lg border-2 font-medium transition-all flex items-center justify-center gap-2 ${
            value === true
              ? 'border-blue-600 bg-blue-50 text-blue-900 ring-2 ring-blue-200'
              : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
          }`}
        >
          <CheckCircle size={20} />
          Yes
        </button>
        <button
          type="button"
          onClick={() => onChange(false)}
          className={`p-4 rounded-lg border-2 font-medium transition-all flex items-center justify-center gap-2 ${
            value === false
              ? 'border-blue-600 bg-blue-50 text-blue-900 ring-2 ring-blue-200'
              : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
          }`}
        >
          <XCircle size={20} />
          No
        </button>
      </div>
      {error && <p className="mt-3 text-sm text-red-600 flex items-center gap-2"><AlertCircle size={16} />{error}</p>}
    </div>
  );
}

function InputField({ label, type = 'text', value, onChange, error, placeholder, required, icon: Icon }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-900 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600">
            <Icon size={20} />
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full ${Icon ? 'pl-12' : 'pl-4'} pr-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-4 transition-all ${
            error
              ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
              : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'
          }`}
        />
      </div>
      {error && <p className="mt-2 text-sm text-red-600 flex items-center gap-2"><AlertCircle size={16} />{error}</p>}
    </div>
  );
}

function SelectField({ value, onChange, options, error }) {
  return (
    <div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-4 transition-all appearance-none bg-white ${
          error
            ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
            : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'
        }`}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}

// ...existing code...
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