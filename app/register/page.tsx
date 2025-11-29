"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { User, Users, Building, FileText, Globe, GraduationCap, Phone, UserPlus, LogIn, Menu, X, Check } from 'lucide-react';
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isELearningOpen, setIsELearningOpen] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const router = useRouter();

  const disagreeRedirect = () => {
    router.push("/"); 
  };

  const enrollmentCards = [
    {
      title: "Enroll as an Individual",
      icon: <User size={36} className="text-blue-600" />,
      description: "For individuals registering as LTO stakeholders.",
      link: "/enroll",
    },
    {
      title: "Enroll as an Organization",
      icon: <Users size={36} className="text-green-600" />,
      description: "For companies or organizations enrolling.",
    },
    {
      title: "Maird",
      icon: <Building size={36} className="text-yellow-600" />,
      description: "For MAIRD related registrations.",
      link: "/enroll",
    },
    {
      title: "Other Entity",
      icon: <FileText size={36} className="text-purple-600" />,
      description: "For other types of entities not covered above.",
      link: "/enroll",
    },
  ];

  const terms = [
    { title: "1. Acceptance of Agreement", content: "You agree to comply with all rules and terms of this portal. LTO may update these terms anytime, and continued use means acceptance." },
    { title: "2. Copyright", content: "All content, graphics, and materials on this portal are protected by copyright. Copying or redistributing without permission is prohibited." },
    { title: "3. Service Marks", content: "All logos and marks are owned by LTO or respective owners. Unauthorized use is not allowed." },
    { title: "4. Limited Use", content: "This portal is for personal, internal, and non-commercial use only. Printing or using information for other purposes requires permission." },
    { title: "5. Forms & Documents", content: "Forms and documents provided are for personal, one-time use only. Official printed documents take priority over online versions." },
    { title: "6. Registration", content: "Provide accurate info during registration. Protect your account and password. You are responsible for any activity using your account." },
    { title: "7. Errors & Changes", content: "Portal may contain errors or outdated info. LTO can make changes anytime without notice. Verify info before relying on it." },
    { title: "8. Third-Party Content", content: "LTO is not responsible for content from third-party links or sites. Access is at your own risk." },
    { title: "9. Unlawful Activity", content: "Do not use this portal for illegal activities, harassment, or prohibited purposes. Violations may result in account termination." },
    { title: "10. Indemnification", content: "You agree to protect and hold LTO harmless from any claims or damages arising from your use of this portal." },
    { title: "11. Non-transferable", content: "Your account and access rights are personal. They cannot be transferred or shared with others." },
    { title: "12. Disclaimer", content: "Portal information is provided as-is. LTO is not liable for damages, viruses, or delays caused by use of the portal." },
    { title: "13. Use of Information", content: "LTO may collect and use information for internal purposes, as described in the Privacy Policy." },
    { title: "14. Personal Data", content: "Your personal data is handled securely and used only to provide portal services, manage accounts, and improve user experience." },
    { title: "15. Age Requirement", content: "Users must be of legal age or have parental consent to use the portal. Guardians are responsible for minors." },
    { title: "16. Electronic Transactions", content: "All electronic transactions on this portal are legally valid and enforceable as if signed in writing." },
    { title: "17. Governing Law", content: "Philippine law governs this portal. Any disputes must be filed within one year of the incident." },
    { title: "18. Termination", content: "LTO may suspend or terminate accounts that violate terms, repeat offenses, or breach policies." },
    { title: "19. Privacy Protection", content: "LTO is committed to protecting your privacy. Personal information will be handled according to the Privacy Policy." },
  ];
   
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
      <nav className="bg-blue-900/95 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="hidden md:flex items-center gap-8 ml-auto">
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

          {/* mobile nav menu*/}
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

      {/* terms of agreement */}
      {!acceptedTerms && (
        <div className="relative z-20 py-10 px-4 flex justify-center">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-6xl w-full overflow-y-auto max-h-[80vh]">
            <h1 className="text-2xl font-bold text-blue-900 mb-6 text-center flex items-center justify-center gap-2">
              <FileText size={28} className="text-blue-900" />
              Terms of Agreement
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Column 1 */}
              <div className="space-y-4">
                {terms.slice(0, 10).map((term, idx) => (
                  <div key={idx}>
                    <h3 className="text-blue-800 font-semibold">{term.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{term.content}</p>
                  </div>
                ))}
              </div>

              {/* Column 2 */}
              <div className="space-y-4">
                {terms.slice(10).map((term, idx) => (
                  <div key={idx}>
                    <h3 className="text-blue-800 font-semibold">{term.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{term.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* checkboxes */}
            <div className="mt-8 flex flex-col justify-center items-center gap-6 px-4">
              <p className="text-blue-800 font-medium text-lg text-center">
                Do you accept the Terms of Agreement?
              </p>
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
                <label className="flex items-center gap-2.5 cursor-pointer px-5 py-2.5 bg-green-700 hover:bg-green-700 rounded-lg shadow-md hover:shadow-green-500/40 transition-all duration-300 hover:scale-105">
                  <input
                    type="checkbox"
                    className="w-4 h-4 border-2 border-white rounded accent-green-800 cursor-pointer"
                    aria-label="I Agree to the Terms and Conditions"
                    onChange={() => setAcceptedTerms(true)}
                  />
                  <Check size={18} className="text-white" />
                  <span className="text-white font-medium text-base">I Agree</span>
                </label>

                <label className="flex items-center gap-2.5 cursor-pointer px-5 py-2.5 bg-red-700 hover:bg-red-700 rounded-lg shadow-md hover:shadow-red-500/40 transition-all duration-300 hover:scale-105">
                  <input
                    type="checkbox"
                    className="w-4 h-4 border-2 border-white rounded accent-red-800 cursor-pointer"
                    aria-label="I Do Not Agree to the Terms and Conditions"
                    onChange={disagreeRedirect}
                  />
                  <X size={18} className="text-white" />
                  <span className="text-white font-medium text-base">I Do Not Agree</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* enrollment cards */}
{acceptedTerms && (
  <div className="relative z-10 py-16 px-4 flex justify-center">
    <div className="w-full max-w-4xl rounded-2xl p-8 backdrop-blur-sm shadow-2xl border-4 border-blue-500/50">

      <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-10">
       Enrollment of LTO Stakeholders
      </h2>

     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
{enrollmentCards.map((card, index) => (
  <Link href={card.link || "/enroll"} key={index}>
    <div
      className="bg-white text-blue-900 rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition cursor-pointer"
    >
      <div className="mb-4 text-4xl text-blue-500">{card.icon}</div>
      <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
      <p className="text-blue-600 text-sm">{card.description}</p>
    </div>
  </Link>
))}

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