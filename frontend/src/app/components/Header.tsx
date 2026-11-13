
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const dropdowns = [
    {
      name: "Doctors Near You",
      links: [
        { label: "Find a Doctor", href: "/doctors" },
        { label: "Doctors by Specialty", href: "/doctors/specialties" },
        { label: "Doctors by Location", href: "/doctors/location" },
      ],
    },
    {
      name: "Hospitals Near You",
      links: [
        { label: "Find a Hospital", href: "/hospitals" },
        { label: "Hospitals in Hyderabad", href: "/hospitals/hyderabad" },
        { label: "Hospitals in India", href: "/hospitals" },
      ],
    },
    {
      name: "Specialties",
      links: [
        { label: "Cardiology", href: "/specialties/cardiology" },
        { label: "Neurology", href: "/specialties/neurology" },
        { label: "Orthopedics", href: "/specialties/orthopedics" },
      ],
    },
    {
      name: "Services",
      links: [
        { label: "Health Checkups", href: "/services/health-checkups" },
        { label: "Diagnostics", href: "/services/diagnostics" },
        { label: "Emergency Care", href: "/services/emergency-care" },
      ],
    },
    {
      name: "For Patients",
      links: [
        { label: "Patient Guide", href: "/patients/guide" },
        { label: "Admission Process", href: "/patients/admission" },
        { label: "Patient Testimonials", href: "/patients/testimonials" },
      ],
    },
    {
      name: "About",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Our Doctors", href: "/about/doctors" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Website Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Medicover Blogs"
            width={200}
            height={60}
            priority
            className="h-auto w-[80px] object-contain"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6">

          {dropdowns.map((dropdown) => (
            <div key={dropdown.name} className="relative">

              <button
                type="button"
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === dropdown.name ? null : dropdown.name
                  )
                }
                className="flex items-center gap-2 whitespace-nowrap text-sm text-gray-700"
                aria-expanded={activeDropdown === dropdown.name}
              >
                {dropdown.name}

                <span
                  className={`transition-transform ${
                    activeDropdown === dropdown.name ? "rotate-90" : ""
                  }`}
                >
                  ⌄
                </span>
              </button>

              {activeDropdown === dropdown.name && (
                <div className="absolute left-0 top-full z-50 mt-2 w-90 rounded-xl border border-gray-200 bg-white py-3 shadow-xl">

                  {dropdown.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setActiveDropdown(null)}
                      className="block px-6 py-4 text-base text-gray-700"
                    >
                      {link.label}
                    </Link>
                  ))}

                </div>
              )}
            </div>
          ))}

          {/* Insurance Checker */}
          <Link
            href="/contact"
            className="whitespace-nowrap text-sm text-gray-700"
          >
            Insurance Checker
          </Link>
        </nav>

        {/* Book Appointment Button */}
        <Link
          href="/appointment"
          className="whitespace-nowrap rounded-lg border bg-blue-900 px-4 py-2 text-sm text-white"
        >
          Book Appointment
        </Link>

      </div>
    </header>
  );
}
