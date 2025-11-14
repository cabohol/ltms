"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { 
  User, 
  Globe, 
  GraduationCap, 
  Mail, 
  FileText, 
  MessageSquare, 
  LogIn, 
  UserPlus, 
  Menu, 
  X,           
  Phone, 
  Smartphone, 
  Send 
} from "lucide-react";

export default function ContactPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isELearningOpen, setIsELearningOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [fullName, setFullName] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [contactNumberError, setContactNumberError] = useState("");
  const [countryCode, setCountryCode] = useState("+63"); 
  const [subject, setSubject] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);


  // Validation for email 
  const requiredValidator = (value: string): true | string =>
    value.trim() !== "" ? true : "Email is required";

  const emailValidator = (value: string): true | string =>
    value.includes("@") ? true : "Email must include '@'";

  const emailRules: Array<(value: string) => true | string> = [
    requiredValidator,
    emailValidator,
  ];

  const validateEmail = (value: string) => {
    for (let rule of emailRules) {
      const result = rule(value);
      if (result !== true) {
        setEmailError(result);
        return;
      }
    }
    setEmailError("");
  };

  //  Validation for name 
  const fullNameRequired = (value: string): true | string =>
  value.trim() !== "" ? true : "Full name is required";

  const fullNameMinLength = (value: string): true | string =>
    value.length >= 3 ? true : "Full name must be at least 3 characters";

  const fullNameRules: Array<(value: string) => true | string> = [
    fullNameRequired,
    fullNameMinLength,
  ];

  const validateFullName = (value: string) => {
    for (let rule of fullNameRules) {
      const result = rule(value);
      if (result !== true) {
        setFullNameError(result);
        return;
      }
    }
    setFullNameError("");
  };

  // Validation for contact number
  const countryCodes = [
    { code: "PHL", dial: "+63", length: 10 },      // Philippines
    { code: "ABW", dial: "+297", length: 7 },      // Aruba
    { code: "AFG", dial: "+93", length: 9 },       // Afghanistan
    { code: "AGO", dial: "+244", length: 9 },      // Angola
    { code: "AIA", dial: "+1264", length: 7 },     // Anguilla
    { code: "ALA", dial: "+358", length: 10 },     // Åland Islands
    { code: "ALB", dial: "+355", length: 9 },      // Albania
    { code: "AND", dial: "+376", length: 6 },      // Andorra
    { code: "ARE", dial: "+971", length: 9 },      // United Arab Emirates
  ];

  const countryPhoneLengths: Record<string, number> = countryCodes.reduce(
    (acc, item) => {
      acc[item.dial] = item.length;
      return acc;
    },
    {} as Record<string, number>
  );


  const contactRequired = (value: string): true | string =>
    value.trim() !== "" ? true : "Contact number is required";

  const contactNumeric = (value: string): true | string =>
    /^[0-9]+$/.test(value) ? true : "Contact number must contain digits only";

  const contactLength = (value: string): true | string => {
    const requiredLength = countryPhoneLengths[countryCode];
    return value.length === requiredLength
      ? true
      : `Contact number must be exactly ${requiredLength} digits`;
  };

  // All validators in order
  const contactRules: Array<(value: string) => true | string> = [
    contactRequired,
    contactNumeric,
    contactLength,
  ];

  const validateContactNumber = (value: string) => {
    for (let rule of contactRules) {
      const result = rule(value);
      if (result !== true) {
        setContactNumberError(result);
        return;
      }
    }
    setContactNumberError("");
  };

  // Validation for subject
  const subjectRequired = (value: string): true | string =>
    value.trim() !== "" ? true : "Subject is required";

  const subjectMinLength = (value: string): true | string =>
    value.length >= 3 ? true : "Subject must be at least 3 characters";

  const subjectRules: Array<(value: string) => true | string> = [
    subjectRequired,
    subjectMinLength,
  ];

  const validateSubject = (value: string) => {
    for (let rule of subjectRules) {
      const result = rule(value);
      if (result !== true) {
        setSubjectError(result);
        return;
      }
    }
    setSubjectError("");
  };

  // Validation for message
  const messageRequired = (value: string): true | string =>
  value.trim() !== "" ? true : "Message is required";

  const messageMinLength = (value: string): true | string =>
    value.length >= 10 ? true : "Message must be at least 10 characters";

  const messageRules: Array<(value: string) => true | string> = [
    messageRequired,
    messageMinLength,
  ];

  const validateMessage = (value: string) => {
    for (let rule of messageRules) {
      const result = rule(value);
      if (result !== true) {
        setMessageError(result);
        return;
      }
    }
    setMessageError("");
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  validateEmail(email);
  validateFullName(fullName);
  validateContactNumber(contactNumber);
  validateSubject(subject);
  validateMessage(message);

  // Check if any field has error
  if (
    email === "" ||
    fullName === "" ||
    contactNumber === "" ||
    subject === "" ||
    message === "" ||
    emailError ||
    fullNameError ||
    contactNumberError ||
    subjectError ||
    messageError
  ) {
    setAlertMessage("Please fill in all required fields correctly.");
    setShowAlert(true);
    return;
  }

  setShowAlert(false);

  // Submit logic
  console.log("Form Submitted Successfully!", {
    fullName,
    email,
    contactNumber,
    subject,
    message,
  });
};

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleELearning = () => {
    setIsELearningOpen(!isELearningOpen);
  };

  
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat relative"
         style={{ backgroundImage: "url('/mechanic.jpeg')" }}>
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

    <div className="relative z-10 flex justify-center items-center sm:items-start py-8 sm:py-8 px-2 sm:px-4">
      {/* Outer blue/gray frame */}
      <div className="w-full max-w-5xl rounded-xl sm:rounded-2xl p-2 sm:p-6 backdrop-blur-sm shadow-2xl border-2 sm:border-4 border-blue-500/50">
        <div className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-lg sm:rounded-xl p-4 sm:p-8 w-full border border-gray-200 relative">
          <div className="flex flex-col md:flex-row md:items-center md:justify-start items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <Image src="/ltologo.png" alt="LTO Logo" width={70} height={70} className="w-25 h-25 object-contain"/>            
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 text-center md:text-left">
              Write an email to LTO Client Care
            </h2>
          </div>

          {showAlert && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-3 sm:px-4 py-2 sm:py-3 rounded relative mb-4 animate-fade-in"
            role="alert"
          >
            <strong className="font-bold text-sm sm:text-base block sm:inline">Error: </strong>
            <span className="block sm:inline text-xs sm:text-sm mt-1 sm:mt-0">{alertMessage}</span>

            {/* Close Button */}
            <button
              type="button"
              className="absolute top-1/2 right-2 sm:right-3 -translate-y-1/2 text-red-700 hover:text-red-900 font-bold text-lg sm:text-xl"
              onClick={() => setShowAlert(false)}
              aria-label="Close alert"
            >
              ×
            </button>
          </div>
          )}

          <form className="space-y-4 sm:space-y-5 relative" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
              {/* LEFT COLUMN */}
              <div className="space-y-4 sm:space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-blue-900 mb-1">
                    Full Name or Client ID <span className="text-red-600">*</span>
                  </label>

                  <div className="relative">
                    <User 
                      className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-blue-700" 
                      size={16}
                    />
                    <div className="absolute left-9 sm:left-11 top-2 bottom-2 w-px bg-gray-300"></div>

                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        validateFullName(e.target.value);
                      }}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 pl-12 sm:pl-16 rounded-lg border ${
                        fullNameError ? "border-red-500" : "border-gray-300"
                      } focus:border-blue-600 focus:ring-2 focus:ring-blue-500 outline-none text-sm sm:text-base`}
                      placeholder="Name/Client ID"
                    />
                  </div>

                  {fullNameError && (
                    <p className="text-red-600 text-xs sm:text-sm mt-1">{fullNameError}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-blue-900 mb-1">
                    Email <span className="text-red-600">*</span>
                  </label>

                  <div className="relative">
                    <Mail
                      className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-blue-700"
                      size={16}
                    />
                    <div className="absolute left-9 sm:left-11 top-2 bottom-2 w-px bg-gray-300"></div>

                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        validateEmail(e.target.value);
                      }}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 pl-12 sm:pl-16 rounded-lg border ${
                        emailError ? "border-red-500" : "border-gray-300"
                      } focus:border-blue-600 focus:ring-2 focus:ring-blue-500 outline-none text-sm sm:text-base`}
                      placeholder="e.g.yourname@sample.com"
                    />
                  </div>

                  {emailError && (
                    <p className="text-red-600 text-xs sm:text-sm mt-1">{emailError}</p>
                  )}
                </div>

                {/* Contact Number  */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-blue-900 mb-1">
                    Contact Number <span className="text-red-600">*</span>
                  </label>

                  <div className="flex gap-2 sm:gap-3">
                    {/* Dropdown for Intl. Code */}
                    <select
                      value={countryCode}
                      onChange={(e) => {
                        setCountryCode(e.target.value);
                        setContactNumber("");
                        setContactNumberError("");
                      }}
                      className="w-32 sm:w-36 md:w-auto px-2.5 sm:px-3 md:px-4 py-2.5 sm:py-3 rounded-lg border border-blue-100 bg-white 
                        focus:border-blue-600 focus:ring-2 focus:ring-blue-500 outline-none
                        text-xs sm:text-sm md:text-base font-medium
                        cursor-pointer transition-all duration-200
                        hover:border-blue-300"
                    >
                      {countryCodes.map((item) => (
                        <option key={item.code} value={item.dial}>
                          {item.code} ({item.dial})
                        </option>
                      ))}
                    </select>

                    {/* Contact Number Input */}
                    <div className="relative flex-1">
                      <Smartphone
                        className="absolute left-2.5 sm:left-3 md:left-4 top-1/2 -translate-y-1/2 text-blue-700"
                        size={16}
                      />
                      <div className="absolute left-8 sm:left-9 md:left-11 top-2 bottom-2 w-px bg-gray-300"></div>

                      <input
                        type="text"
                        value={contactNumber}
                        maxLength={countryPhoneLengths[countryCode] || 11}
                        inputMode="numeric"
                        placeholder="Enter mobile number"
                        onChange={(e) => {
                          const val = e.target.value;
                          if (/^\d*$/.test(val)) {
                            setContactNumber(val);
                            validateContactNumber(val);
                          }
                        }}
                        className={`w-full px-2.5 sm:px-3 md:px-4 py-2.5 sm:py-3 pl-10 sm:pl-12 md:pl-16 rounded-lg border ${
                          contactNumberError ? "border-red-500" : "border-gray-300"
                        } focus:border-blue-600 focus:ring-2 focus:ring-blue-500 outline-none
                        text-xs sm:text-sm md:text-base transition-all duration-200`}
                      />
                    </div>
                  </div>

                  {contactNumberError && (
                    <p className="text-red-600 text-xs sm:text-sm mt-1 px-1">{contactNumberError}</p>
                  )}
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="space-y-4 sm:space-y-5">
                {/* Subject */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-blue-900 mb-1">
                    Topic of your inquiry <span className="text-red-600">*</span>
                  </label>

                  <div className="relative">
                    <FileText
                      className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-blue-700"
                      size={16}
                    />
                    <div className="absolute left-9 sm:left-11 top-2 bottom-2 w-px bg-gray-300"></div>

                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => {
                        setSubject(e.target.value);
                        validateSubject(e.target.value);
                      }}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 pl-12 sm:pl-16 rounded-lg border ${
                        subjectError ? "border-red-500" : "border-gray-300"
                      } focus:border-blue-600 focus:ring-2 focus:ring-blue-500 outline-none text-sm sm:text-base`}
                      placeholder="Enter topic of your inquiry"
                    />
                  </div>

                  {subjectError && (
                    <p className="text-red-600 text-xs sm:text-sm mt-1">{subjectError}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-blue-900 mb-1">
                    Let us know of your concern <span className="text-red-600">*</span>
                  </label>

                  <div className="relative">
                    <MessageSquare className="absolute left-3 sm:left-4 top-3 sm:top-4 text-blue-700" size={16} />
                    <div className="absolute left-9 sm:left-11 top-2.5 sm:top-3 bottom-2.5 sm:bottom-3 w-px bg-gray-300"></div>

                    <textarea
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 pl-12 sm:pl-16 rounded-lg border ${
                        messageError ? "border-red-500" : "border-gray-300"
                      } h-32 sm:h-40 resize-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500 outline-none text-sm sm:text-base`}
                      placeholder="Write your message..."
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        validateMessage(e.target.value);
                      }}
                    ></textarea>
                  </div>

                  {messageError && (
                    <p className="text-red-600 text-xs sm:text-sm mt-1">{messageError}</p>
                  )}
                </div>
              </div>
            </div>

            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 sm:py-3 rounded-lg text-base sm:text-lg 
                                  font-semibold transition-all shadow-md flex items-center justify-center gap-2">
              <Send size={18} className="sm:w-5 sm:h-5" /> Send Message
            </button>
          </form>
        </div>
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