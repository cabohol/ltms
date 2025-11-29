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
  Check
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
          <nav className="flex justify-center w-full overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-4 text-base font-medium 
                  border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <Icon className="w-5 h-5" />
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
                <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6 space-x-2">
                  <User className="w-6 h-6 text-black-600" />
                  <span>Personal Information</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue="JUAN"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Middle Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name <span className="text-red-500">*</span>
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
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  defaultValue="1990-01-01"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gender <span className="text-red-500">*</span>
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                  <option>MALE</option>
                  <option>FEMALE</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
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
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nationality <span className="text-red-500">*</span>
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                  <option>FILIPINO - PHL</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Place of Birth <span className="text-red-500">*</span>
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
                <h2 className="flex items-center space-x-2 text-2xl font-bold text-gray-900 mb-6">
                  <Mail className="w-6 h-6 text-black-700" />
                  <span>Contact Information</span>
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mobile Phone <span className="text-red-500">*</span>
                    </label>
                    <div className="flex space-x-3">
                      <input
                        type="tel"
                        defaultValue="9123456789"
                        className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
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
                <h2 className="flex items-center space-x-2 text-2xl font-bold text-gray-900 mb-6">
                  <Heart className="w-6 h-6 text-black-700" />
                  <span>Medical Information</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Complexion <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"></select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Blood Type <span className="text-red-500">*</span>
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
                    Eye Color <span className="text-red-500">*</span>
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
                    Body Type <span className="text-red-500">*</span>
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
                    Weight (kg) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Enter weight"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hair Color <span className="text-red-500">*</span>
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
                    Height (cm) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Enter height"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organ Donor <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                    <option value="">Select preference</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>

              </div>
            )}

            {activeTab === "emergency" && (
              <div className="space-y-6">
              <div>
                <h2 className="flex items-center space-x-2 text-2xl font-bold text-gray-900 mb-6">
                  <Shield className="w-6 h-6 text-black-700" />
                  <span>Emergency Contact Person</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter Number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="Enter emergency contact person address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              <div className="border-t pt-6 mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Mother's Maiden Name
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter First Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Middle Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Middle Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Last Name"
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
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter First Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Middle Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Middle Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Last Name"
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
                <h2 className="flex items-center space-x-2 text-2xl font-bold text-gray-900 mb-2">
                  <MapPin className="w-6 h-6 text-black-700" />
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
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      House No. <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter house number"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Street / Village <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter street or village"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Province <span className="text-red-500">*</span>
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                      <option value="">Select province</option>
                      <option value="Agusan del Norte">Agusan del Norte</option>
                      <option value="Agusan del Sur">Agusan del Sur</option>
                      <option value="Surigao del Norte">Surigao del Norte</option>
                      <option value="Surigao del Sur">Surigao del Sur</option>
                      <option value="Dinagat Islands">Dinagat Islands</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City / Municipality <span className="text-red-500">*</span>
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                      <option value="">Select city/municipality</option>
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

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Barangay <span className="text-red-500">*</span>
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                      <option value="">Select barangay</option>
                      <option value="Ambago">Ambago</option>
                      <option value="Amparo">Amparo</option>
                      <option value="Ampayon">Ampayon</option>
                      <option value="Anticala">Anticala</option>
                      <option value="Aupagan">Aupagan</option>
                      <option value="Baan Km. 3">Baan Km. 3</option>
                      <option value="Baan Km. 7">Baan Km. 7</option>
                      <option value="Bading">Bading</option>
                      <option value="Bagong Silang">Bagong Silang</option>
                      <option value="Bancasi">Bancasi</option>
                      <option value="Baobaoan">Baobaoan</option>
                      <option value="Basag">Basag</option>
                      <option value="Bilay">Bilay</option>
                      <option value="Bit-os">Bit-os</option>
                      <option value="Bonbon">Bonbon</option>
                      <option value="Bugsukan">Bugsukan</option>
                      <option value="Buhangin">Buhangin</option>
                      <option value="Bunawan Brook">Bunawan Brook</option>
                      <option value="Cabcabon">Cabcabon</option>
                      <option value="Camayahan">Camayahan</option>
                      <option value="De Oro">De Oro</option>
                      <option value="Dumalagan">Dumalagan</option>
                      <option value="Doongan">Doongan</option>
                      <option value="Holy Redeemer">Holy Redeemer</option>
                      <option value="Imadejas">Imadejas</option>
                      <option value="Jose Rosales">Jose Rosales</option>
                      <option value="Kinamlutan">Kinamlutan</option>
                      <option value="Lemon">Lemon</option>
                      <option value="Libertad">Libertad</option>
                      <option value="Los Angeles">Los Angeles</option>
                      <option value="Lumbocan">Lumbocan</option>
                      <option value="Maon">Maon</option>
                      <option value="Masao">Masao</option>
                      <option value="New Society Village">New Society Village</option>
                      <option value="Obrero">Obrero</option>
                      <option value="Ong Yiu">Ong Yiu</option>
                      <option value="Pagtigi-an">Pagtigi-an</option>
                      <option value="Pinamanculan">Pinamanculan</option>
                      <option value="Port Poyohon">Port Poyohon</option>
                      <option value="Rajah Soliman">Rajah Soliman</option>
                      <option value="Salvacion">Salvacion</option>
                      <option value="San Ignacio">San Ignacio</option>
                      <option value="San Mateo">San Mateo</option>
                      <option value="San Vicente">San Vicente</option>
                      <option value="Sumilihon">Sumilihon</option>
                      <option value="Tandang Sora">Tandang Sora</option>
                      <option value="Tiniwisan">Tiniwisan</option>
                      <option value="Upper Doongan">Upper Doongan</option>
                      <option value="Villa Kananga">Villa Kananga</option>
                      <option value="Villa Verde">Villa Verde</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ZIP Code <span className="text-red-500">*</span>
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                      <option value="">Select ZIP code</option>
                      <option value="8600">8600 - Butuan City</option>
                      <option value="8605">8605 - Cabadbaran City</option>
                      <option value="8601">8601 - Buenavista</option>
                      <option value="8602">8602 - Carmen</option>
                      <option value="8602">8602 - Nasipit</option>
                      <option value="8604">8604 - Magallanes</option>
                      <option value="8606">8606 - Tubay</option>
                      <option value="8607">8607 - Santiago</option>
                      <option value="8608">8608 - Jabonga</option>
                      <option value="8609">8609 - Kitcharao</option>
                      <option value="8610">8610 - Las Nieves</option>
                      <option value="8611">8611 - Remedios T. Romualdez (RTR)</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center text-center pt-4">
                  <label className="text-sm font-medium text-gray-1000 mb-3">
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
                <h2 className="flex items-center space-x-2 text-2xl font-bold text-gray-900 mb-2">
                  <Bell className="w-6 h-6 text-black-700" />
                  <span>SMS Notifications</span>
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
                      <div className="flex space-x-4">
                        <button
                          onClick={() =>
                            setNotifications({
                              ...notifications,
                              [key]: true,
                            })
                          }
                          className={`flex items-center gap-2 px-6 py-2 rounded-lg transition font-medium
                            ${
                              notifications[key] === true
                                ? "bg-green-600 text-white"        // selected YES
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"  // unselected
                            }
                          `}
                        >
                          <Check size={18} className={`${notifications[key] === true ? "text-white" : "text-gray-700"}`} />
                          Yes
                        </button>

                        {/* NO BUTTON */}
                        <button
                          onClick={() =>
                            setNotifications({
                              ...notifications,
                              [key]: false,
                            })
                          }
                          className={`flex items-center gap-2 px-6 py-2 rounded-lg transition font-medium
                            ${
                              notifications[key] === false
                                ? "bg-red-600 text-white"         // selected NO
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"  // unselected
                            }
                          `}
                        >
                          <X size={18} className={`${notifications[key] === false ? "text-white" : "text-gray-700"}`} />
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
