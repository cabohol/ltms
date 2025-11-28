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
    { id: "contact", label: "Contact", icon: Mail },
    { id: "medical", label: "Medical", icon: Heart },
    { id: "emergency", label: "Emergency", icon: Shield },
    { id: "address", label: "Address", icon: MapPin },
    { id: "notifications", label: "Notifications", icon: Bell },
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
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <Link
              href="/"
              className="flex items-center space-x-3 flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Land_Transportation_Office.svg/1200px-Land_Transportation_Office.svg.png"
                alt="LTO Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-white font-bold text-lg tracking-wide">
                LTMS PORTAL
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center justify-center flex-1 gap-4">
              <Link
                href="https://lto.gov.ph/"
                className="flex items-center gap-2 px-4 py-2 text-white font-semibold text-sm rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                <Globe size={18} />
                <span className="hidden lg:inline">LTO OFFICIAL WEBPAGE</span>
              </Link>

              {/* E-Learning Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleELearning}
                  className="flex items-center gap-2 px-4 py-2 text-white font-semibold text-sm rounded-lg hover:bg-white/10 transition-all duration-200"
                >
                  <GraduationCap size={18} />
                  <span className="hidden lg:inline">E-LEARNING</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      isELearningOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

              <Link
                href="/contact"
                className="flex items-center gap-2 px-4 py-2 text-white font-semibold text-sm rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                <Phone size={18} />
                <span className="hidden lg:inline">CONTACT</span>
              </Link>

              <Link
                href="/dashboard"
                className="flex items-center gap-2 px-4 py-2 text-white font-semibold text-sm rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                <Home size={18} />
                <span className="hidden lg:inline">DASHBOARD</span>
              </Link>

              {/* User Menu Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-2 px-4 py-2 text-white font-semibold text-sm rounded-lg hover:bg-white/10 transition-all duration-200"
                >
                  <User size={18} />
                  <span className="hidden xl:inline">{userClientId}</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      isUserMenuOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isUserMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-64 bg-blue-900/98 backdrop-blur-md rounded-xl shadow-2xl border border-blue-400/30 overflow-hidden z-50">
                    <div className="h-1 bg-gradient-to-r from-red-600 to-red-500"></div>
                    <div className="py-2">
                      <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
                        <img
                          src="https://www.citypng.com/public/uploads/preview/png-round-blue-contact-user-profile-icon-701751694975293fcgzulxp2k.png"
                          alt="User Avatar"
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-white font-semibold text-sm">
                            {userName}
                          </p>
                          <p className="text-blue-300 text-xs mt-1">
                            {userClientId}
                          </p>
                        </div>
                      </div>
                      <a
                        href="/login"
                        className="group flex items-center gap-3 px-4 py-3 text-white font-semibold text-sm rounded-lg hover:bg-blue-800/60 m-2"
                      >
                        <svg
                          className="w-5 h-5 text-red-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                          />
                        </svg>
                        <span>Logout</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg hover:bg-white/10"
            >
              {isMobileMenuOpen ? (
                <X size={24} className="text-white" />
              ) : (
                <Menu size={24} className="text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Tabs */}
          <div className="border-b border-gray-200 bg-gray-50">
            <nav className="flex overflow-x-auto">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Personal Information
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      defaultValue="JUAN"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Middle Name
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      defaultValue="DELA CRUZ"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      defaultValue="1990-01-01"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gender
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                      <option>MALE</option>
                      <option>FEMALE</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Civil Status
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nationality
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                      <option>FILIPINO - PHL</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Place of Birth
                    </label>
                    <input
                      type="text"
                      placeholder="Enter place of birth"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "contact" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Contact Information
                  </h2>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country Code
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                      <option>PHL (+63)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mobile Phone
                    </label>
                    <div className="flex space-x-3">
                      <input
                        type="tel"
                        defaultValue="9123456789"
                        className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium whitespace-nowrap">
                        Verify Number
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "medical" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Medical Information
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Blood Type
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                      <option value="">Select blood type</option>
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
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Body Type
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                      <option value="">Select body type</option>
                      <option>Light</option>
                      <option>Medium</option>
                      <option>Heavy</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Eye Color
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                      <option value="">Select eye color</option>
                      <option>Black</option>
                      <option>Brown</option>
                      <option>Blue</option>
                      <option>Green</option>
                      <option>Gray</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hair Color
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                      <option value="">Select hair color</option>
                      <option>Black</option>
                      <option>Brown</option>
                      <option>Blonde</option>
                      <option>Red</option>
                      <option>Gray</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Weight (kg)
                    </label>
                    <input
                      type="number"
                      placeholder="Enter weight"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Height (cm)
                    </label>
                    <input
                      type="number"
                      placeholder="Enter height"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organ Donor
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                    <option value="">Select preference</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
            )}

            {activeTab === "emergency" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Emergency Contact
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter emergency contact name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter contact number"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Enter emergency contact address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                <div className="border-t pt-6 mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Mother's Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter first name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Middle Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter middle name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Maiden Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter maiden name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6 mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Father's Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter first name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Middle Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter middle name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter last name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "address" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Main Address
                  </h2>
                  <p className="text-sm text-gray-600">
                    Provide your home or permanent address where to send
                    billings and notices.
                  </p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> The provided address once entered and
                    saved is no longer editable. If you wish to change it,
                    please fill out and submit application of Revision of
                    Records.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      House No.
                    </label>
                    <input
                      type="text"
                      placeholder="Enter house number"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Street / Village
                    </label>
                    <input
                      type="text"
                      placeholder="Enter street or village"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Barangay
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                      <option value="">Select barangay</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City / Municipality
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                      <option value="">Select city/municipality</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Province
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                      <option value="">Select province</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ZIP Code
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                      <option value="">Select ZIP code</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center space-x-3 pt-4">
                  <label className="text-sm font-medium text-gray-700">
                    Use a different address as contact address?
                  </label>
                  <div className="flex space-x-4">
                    <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition font-medium">
                      Yes
                    </button>
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
                      No
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "notifications" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    SMS Notifications
                  </h2>
                  <p className="text-sm text-gray-600">
                    Manage your notification preferences
                  </p>
                </div>

                <div className="space-y-4">
                  {Object.entries(notifications).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition"
                      >
                        <label className="text-sm font-medium text-gray-700 flex-1">
                          {
                            {
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
                            }[key]
                          }
                        </label>
                        <div className="flex space-x-3">
                          <button
                            onClick={() =>
                              setNotifications({
                                ...notifications,
                                [key]: true,
                              })
                            }
                            className={`px-6 py-2 rounded-lg transition font-medium ${
                              notifications[key as keyof typeof notifications]
                                ? "bg-green-600 text-white"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                          >
                            Yes
                          </button>
                          <button
                            onClick={() =>
                              setNotifications({
                                ...notifications,
                                [key]: false,
                              })
                            }
                            className={`px-6 py-2 rounded-lg transition font-medium ${
                              !notifications[key as keyof typeof notifications]
                                ? "bg-blue-600 text-white"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                          >
                            No
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 mt-8 pt-6 border-t">
              <button className="flex items-center space-x-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition font-medium">
                <X className="w-4 h-4" />
                <span>Cancel</span>
              </button>
              <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition font-medium shadow-lg">
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
