"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Wind, Droplets, CheckCircle, Award, Clock, Shield, Menu, X } from "lucide-react"
import { ServiceModal } from "@/components/service-modal"

export default function HVACWebsite() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const [activeModal, setActiveModal] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Form submitted:", formData)
    alert("Thank you for your message! We will contact you soon.")
    setFormData({ name: "", email: "", phone: "", message: "" })
    setIsSubmitting(false)
  }

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/\D/g, "")
    if (phoneNumber.length <= 3) return phoneNumber
    if (phoneNumber.length <= 6) return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setFormData({ ...formData, phone: formatted })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-600 text-white py-2 text-center text-sm font-semibold -mx-4 sm:-mx-6 lg:-mx-8 px-4">
            24/7 Emergency Service Available • Call Now: (555) 123-4567
          </div>
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-[#1E3A8A]">Reliable Heating & Cooling</h1>
              <p className="text-sm text-gray-600">Serving the Community Since 2003</p>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-[#1E3A8A] transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-[#1E3A8A] transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-[#1E3A8A] transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-700 hover:text-[#1E3A8A] transition-colors"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-[#1E3A8A] transition-colors"
              >
                Contact
              </button>
              <a href="tel:555-123-4567" className="flex items-center gap-2 text-[#1E3A8A] font-semibold">
                <Phone className="w-5 h-5" />
                (555) 123-4567
              </a>
            </nav>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#1E3A8A] hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-gray-200 animate-in slide-in-from-top duration-200">
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-left text-gray-700 hover:text-[#1E3A8A] transition-colors py-2"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left text-gray-700 hover:text-[#1E3A8A] transition-colors py-2"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-left text-gray-700 hover:text-[#1E3A8A] transition-colors py-2"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-left text-gray-700 hover:text-[#1E3A8A] transition-colors py-2"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-gray-700 hover:text-[#1E3A8A] transition-colors py-2"
                >
                  Contact
                </button>
                <a href="tel:555-123-4567" className="flex items-center gap-2 text-[#1E3A8A] font-semibold py-2">
                  <Phone className="w-5 h-5" />
                  (555) 123-4567
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gray-50 py-20 md:py-32"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=600&width=1200&query=professional+hvac+technician+working+on+residential+home)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
            Trusted Heating & Cooling Services You Can Count On
          </h2>
          <p className="text-xl text-gray-700 mb-4 max-w-2xl mx-auto leading-relaxed">
            Serving our community with quality HVAC repair, installation, and maintenance for over 20 years. Licensed,
            insured, and committed to your comfort.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#1E3A8A]" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#1E3A8A]" />
              <span>20+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#1E3A8A]" />
              <span>Same-Day Service</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-[#1E3A8A] text-white px-8 py-4 text-lg font-semibold hover:bg-[#1e3a8ae6] transition-colors"
            >
              Request Service
            </button>
            <a
              href="tel:555-123-4567"
              className="bg-white text-[#1E3A8A] border-2 border-[#1E3A8A] px-8 py-4 text-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Our Company</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                For over two decades, Reliable Heating & Cooling has been the trusted name in HVAC services throughout
                our community. We're a family-owned business built on honest work, fair pricing, and treating every
                customer like a neighbor. Our experienced technicians take pride in delivering quality service that
                keeps your home comfortable year-round.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Whether it's a routine maintenance check or an emergency repair, we're here to help with the same
                dedication and professionalism that has earned us the trust of thousands of local families. We stand
                behind our work with comprehensive warranties and a satisfaction guarantee.
              </p>
              <div className="border-l-4 border-[#1E3A8A] pl-6 py-4 bg-gray-50">
                <p className="font-semibold text-gray-900 mb-2">Certified & Accredited</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  NATE Certified Technicians • EPA Certified • Better Business Bureau A+ Rating • Carrier Factory
                  Authorized Dealer
                </p>
              </div>
            </div>
            <div>
              <img
                src="/hvac-service-van-and-technician.jpg"
                alt="HVAC Service Van and Professional Technician"
                className="w-full h-auto shadow-lg"
              />
            </div>
          </div>

          {/* Value Points */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 border border-gray-200 bg-gray-50">
              <div className="w-16 h-16 bg-[#1E3A8A] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Licensed & Insured</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Fully certified and insured professionals with years of experience
              </p>
            </div>
            <div className="text-center p-6 border border-gray-200 bg-gray-50">
              <div className="w-16 h-16 bg-[#1E3A8A] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Emergency</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Available around the clock when you need us most</p>
            </div>
            <div className="text-center p-6 border border-gray-200 bg-gray-50">
              <div className="w-16 h-16 bg-[#1E3A8A] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-700 text-sm leading-relaxed">100% satisfaction guarantee on all our work</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Comprehensive HVAC solutions for residential and commercial properties. Click any service to learn more
              about what we offer.
            </p>
          </div>
          {/* CHANGE> Added flex flex-col and h-full to cards, restructured content to align "Click to learn more" at bottom */}
          <div className="grid md:grid-cols-3 gap-8">
            <button
              onClick={() => setActiveModal("heating")}
              className="bg-white p-8 border-2 border-gray-200 hover:border-[#1E3A8A] hover:shadow-lg transition-all text-left w-full cursor-pointer flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-[#1E3A8A] text-white rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Heating Services</h3>
              <ul className="space-y-2 text-gray-700 mb-6 flex-1">
                <li>• Furnace repair and maintenance</li>
                <li>• Heat pump installation and service</li>
                <li>• Boiler repair and replacement</li>
                <li>• Emergency heating repairs</li>
              </ul>
              <p className="text-[#1E3A8A] font-semibold">Click to learn more →</p>
            </button>

            <button
              onClick={() => setActiveModal("cooling")}
              className="bg-white p-8 border-2 border-gray-200 hover:border-[#1E3A8A] hover:shadow-lg transition-all text-left w-full cursor-pointer flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-[#1E3A8A] text-white rounded-full flex items-center justify-center mb-6 mx-auto">
                <Wind className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cooling Services</h3>
              <ul className="space-y-2 text-gray-700 mb-6 flex-1">
                <li>• Air conditioner repair and service</li>
                <li>• AC installation and replacement</li>
                <li>• Seasonal maintenance programs</li>
                <li>• Energy efficiency upgrades</li>
              </ul>
              <p className="text-[#1E3A8A] font-semibold">Click to learn more →</p>
            </button>

            <button
              onClick={() => setActiveModal("airquality")}
              className="bg-white p-8 border-2 border-gray-200 hover:border-[#1E3A8A] hover:shadow-lg transition-all text-left w-full cursor-pointer flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-[#1E3A8A] text-white rounded-full flex items-center justify-center mb-6 mx-auto">
                <Droplets className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Air Quality Services</h3>
              <ul className="space-y-2 text-gray-700 mb-6 flex-1">
                <li>• Duct cleaning and sealing</li>
                <li>• Air purification systems</li>
                <li>• Humidity control solutions</li>
                <li>• Indoor air quality testing</li>
              </ul>
              <p className="text-[#1E3A8A] font-semibold">Click to learn more →</p>
            </button>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 border border-gray-200">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "Excellent service! They came out the same day our AC broke during a heat wave. The technician was
                professional, explained everything clearly, and had us up and running in no time. Highly recommend!"
              </p>
              <p className="font-semibold text-gray-900">- Sarah M.</p>
              <p className="text-sm text-gray-600">Springfield Homeowner</p>
            </div>
            <div className="bg-gray-50 p-8 border border-gray-200">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "We've been using Reliable Heating & Cooling for over 10 years. They installed our new furnace and
                provide annual maintenance. Always on time, fair pricing, and quality work. Wouldn't trust anyone else."
              </p>
              <p className="font-semibold text-gray-900">- Robert & Linda T.</p>
              <p className="text-sm text-gray-600">Long-time Customers</p>
            </div>
            <div className="bg-gray-50 p-8 border border-gray-200">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "Professional from start to finish. They gave us a detailed estimate, showed up exactly when promised,
                and left everything clean. Our new AC system is working perfectly. Great experience!"
              </p>
              <p className="font-semibold text-gray-900">- Michael D.</p>
              <p className="text-sm text-gray-600">Recent Installation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Ready to schedule service or have questions? Fill out the form below or give us a call. We typically
              respond within one business hour.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 md:items-stretch">
            {/* Contact Form */}
            <div className="flex flex-col h-full">
              <form onSubmit={handleSubmit} className="space-y-6 flex flex-col h-full">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    minLength={2}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
                    placeholder="John Smith"
                    disabled={isSubmitting}
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
                    placeholder="john@example.com"
                    disabled={isSubmitting}
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    pattern="$$\d{3}$$ \d{3}-\d{4}"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    maxLength={14}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
                    placeholder="(555) 123-4567"
                    disabled={isSubmitting}
                    aria-required="true"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    How Can We Help? * (By submitting this form, you agree to be contacted by our team.)
                  </label>
                  <textarea
                    id="message"
                    required
                    minLength={10}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900 resize-none flex-1"
                    placeholder="Please describe your HVAC needs or questions..."
                    disabled={isSubmitting}
                    aria-required="true"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1E3A8A] text-white px-6 py-3 text-lg font-semibold hover:bg-[#1e3a8ae6] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col h-full">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#1E3A8A] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-700">
                        123 Main Street
                        <br />
                        Springfield, ST 12345
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-[#1E3A8A] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <a href="tel:555-123-4567" className="text-[#1E3A8A] hover:underline text-lg">
                        (555) 123-4567
                      </a>
                      <p className="text-sm text-gray-600">Available 24/7 for emergencies</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-[#1E3A8A] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a href="mailto:info@reliablehvac.com" className="text-[#1E3A8A] hover:underline">
                        info@reliablehvac.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-[#1E3A8A] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Business Hours</p>
                      <p className="text-gray-700">
                        Monday - Friday: 7:00 AM - 7:00 PM
                        <br />
                        Saturday: 8:00 AM - 5:00 PM
                        <br />
                        Sunday: Emergency Service Only
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="border border-gray-300 flex-1 flex flex-col">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841!2d-73.98823492346618!3d40.74844097138558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "300px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                  className="flex-1"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-xl mb-4">Reliable Heating & Cooling</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Your trusted partner for all heating, cooling, and air quality needs. Serving the community with pride
                since 2003.
              </p>
              <p className="text-sm text-gray-400">License #HVAC-12345</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors">
                    Our Services
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("about")} className="hover:text-white transition-colors">
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("testimonials")}
                    className="hover:text-white transition-colors"
                  >
                    Testimonials
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("contact")} className="hover:text-white transition-colors">
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Service Areas</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Proudly serving Springfield and surrounding communities including Riverside, Oakdale, Maplewood, and
                Lakeside.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Reliable Heating & Cooling. All Rights Reserved
            </p>
            <a href="tel:555-123-4567" className="flex items-center gap-2 text-lg font-semibold hover:text-gray-300">
              <Phone className="w-5 h-5" />
              (555) 123-4567
            </a>
          </div>
        </div>
      </footer>

      <ServiceModal
        isOpen={activeModal === "heating"}
        onClose={() => setActiveModal(null)}
        title="Heating Services"
        icon={
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
        }
      >
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Keep your home warm and comfortable all winter long with our comprehensive heating services. Our certified
            technicians have decades of experience working with all major heating system brands and models.
          </p>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Furnace Services</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#1E3A8A] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Furnace Repair</p>
                  <p className="text-sm">
                    Fast, reliable repairs for gas, electric, and oil furnaces. We diagnose issues quickly and get your
                    heat back on.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#1E3A8A] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Furnace Installation</p>
                  <p className="text-sm">
                    Professional installation of high-efficiency furnaces from top brands like Carrier, Trane, and
                    Lennox.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#1E3A8A] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Annual Maintenance</p>
                  <p className="text-sm">
                    Preventive maintenance to keep your furnace running efficiently and catch problems before they
                    become expensive repairs.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Heat Pump Services</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#1E3A8A] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Heat Pump Installation</p>
                  <p className="text-sm">
                    Energy-efficient heat pump systems that provide both heating and cooling for year-round comfort.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#1E3A8A] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Heat Pump Repair</p>
                  <p className="text-sm">
                    Expert diagnosis and repair of all heat pump issues including refrigerant leaks, compressor
                    problems, and electrical faults.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Boiler Services</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#1E3A8A] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Boiler Repair & Replacement</p>
                  <p className="text-sm">
                    Complete boiler services including repairs, maintenance, and new boiler installations for hot water
                    and steam systems.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-4">
            <p className="font-semibold text-gray-900 mb-1">Emergency Heating Service</p>
            <p className="text-sm text-gray-700">
              No heat? Don't freeze! We offer 24/7 emergency heating repairs. Call us anytime at (555) 123-4567 and
              we'll get your heat restored quickly.
            </p>
          </div>

          <div className="bg-gray-50 p-6 border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">Why Choose Our Heating Services?</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ NATE-certified heating technicians</li>
              <li>✓ Factory-authorized dealer for major brands</li>
              <li>✓ Upfront, honest pricing with no hidden fees</li>
              <li>✓ Same-day service available</li>
              <li>✓ Comprehensive warranties on all installations</li>
              <li>✓ Financing options available</li>
            </ul>
          </div>
        </div>
      </ServiceModal>

      <ServiceModal
        isOpen={activeModal === "cooling"}
        onClose={() => setActiveModal(null)}
        title="Cooling Services"
        icon={<Wind className="w-6 h-6" />}
      >
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Stay cool and comfortable during the hottest months with our professional air conditioning services. From
            routine maintenance to complete system replacements, we handle all your cooling needs with expertise and
            care.
          </p>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Air Conditioning Repair</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#1E3A8A] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Fast Emergency Repairs</p>
                  <p className="text-sm">
                    AC not working? We provide same-day emergency service to get your cooling system back up and running
                    quickly.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#1E3A8A] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Common AC Problems We Fix</p>
                  <p className="text-sm">
                    Refrigerant leaks, frozen coils, compressor failures, electrical issues, thermostat problems, and
                    more.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#1E3A8A] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">All Brands Serviced</p>
                  <p className="text-sm">
                    We repair all major AC brands including Carrier, Trane, Lennox, Rheem, Goodman, and more.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Air Conditioning Installation</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#1E3A8A] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">New AC System Installation</p>
                  <p className="text-sm">
                    Professional installation of central air conditioning systems sized perfectly for your home's
                    cooling needs.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#1E3A8A] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">AC Replacement</p>
                  <p className="text-sm">
                    Replace your old, inefficient AC with a new high-efficiency system and save on energy costs.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#1E3A8A] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Ductless Mini-Split Systems</p>
                  <p className="text-sm">
                    Perfect for room additions, garages, or homes without ductwork. Efficient and easy to install.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Preventive Maintenance Programs</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#1E3A8A] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Annual AC Tune-Ups</p>
                  <p className="text-sm">
                    Regular maintenance keeps your AC running efficiently, prevents breakdowns, and extends system
                    lifespan.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#1E3A8A] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Pre-Season Inspections</p>
                  <p className="text-sm">
                    Get your AC ready for summer with a comprehensive inspection and cleaning before the heat arrives.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#1E3A8A] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Priority Service Plans</p>
                  <p className="text-sm">
                    Join our maintenance plan for priority scheduling, discounted repairs, and peace of mind.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Energy Efficiency Upgrades</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#1E3A8A] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">High-SEER AC Systems</p>
                  <p className="text-sm">
                    Upgrade to a high-efficiency system and reduce your cooling costs by up to 40%.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#1E3A8A] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Smart Thermostat Installation</p>
                  <p className="text-sm">
                    Control your cooling from anywhere and optimize energy usage with programmable smart thermostats.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-[#1E3A8A] p-4">
            <p className="font-semibold text-gray-900 mb-1">Summer Special Offer</p>
            <p className="text-sm text-gray-700">
              Schedule your AC tune-up now and receive 15% off! Keep your system running efficiently all summer long.
              Call (555) 123-4567 to book your appointment.
            </p>
          </div>

          <div className="bg-gray-50 p-6 border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">Why Choose Our Cooling Services?</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ EPA-certified technicians for refrigerant handling</li>
              <li>✓ Free estimates on new AC installations</li>
              <li>✓ Flexible financing options available</li>
              <li>✓ 100% satisfaction guarantee</li>
              <li>✓ Extended warranties on new equipment</li>
              <li>✓ Clean, professional service every time</li>
            </ul>
          </div>
        </div>
      </ServiceModal>

      <ServiceModal
        isOpen={activeModal === "airquality"}
        onClose={() => setActiveModal(null)}
        title="Air Quality Services"
        icon={<Droplets className="w-6 h-6" />}
      >
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Breathe easier with our comprehensive indoor air quality solutions. Poor air quality can affect your health,
            comfort, and energy bills. Our experts can assess your home's air quality and recommend the right solutions
            for your needs.
          </p>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Duct Cleaning & Sealing</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#1E3A8A] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Professional Duct Cleaning</p>
                  <p className="text-sm">
                    Remove dust, allergens, mold, and debris from your ductwork with our thorough cleaning process.
                    Improves air quality and system efficiency.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#1E3A8A] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Duct Sealing & Repair</p>
                  <p className="text-sm">
                    Seal leaky ducts to prevent energy waste and improve comfort. Leaky ducts can waste up to 30% of
                    your heating and cooling energy.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#1E3A8A] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Duct Inspection</p>
                  <p className="text-sm">
                    Video inspection of your ductwork to identify problems, blockages, or areas needing attention.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Air Purification Systems</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#1E3A8A] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Whole-Home Air Purifiers</p>
                  <p className="text-sm">
                    Install advanced air purification systems that remove 99.97% of airborne particles including
                    allergens, bacteria, and viruses.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#1E3A8A] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">UV Light Systems</p>
                  <p className="text-sm">
                    Germicidal UV lights installed in your HVAC system kill mold, bacteria, and viruses as air passes
                    through.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#1E3A8A] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">HEPA Filtration</p>
                  <p className="text-sm">
                    High-efficiency particulate air filters that capture microscopic particles for cleaner, healthier
                    air.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Humidity Control Solutions</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#1E3A8A] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Whole-Home Humidifiers</p>
                  <p className="text-sm">
                    Combat dry winter air with a whole-home humidification system. Prevents dry skin, static
                    electricity, and respiratory discomfort.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#1E3A8A] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Whole-Home Dehumidifiers</p>
                  <p className="text-sm">
                    Remove excess moisture to prevent mold growth, musty odors, and structural damage. Essential for
                    basements and humid climates.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#1E3A8A] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Humidity Monitoring</p>
                  <p className="text-sm">
                    Smart humidity sensors that automatically maintain optimal humidity levels year-round.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Indoor Air Quality Testing</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#1E3A8A] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Comprehensive Air Quality Assessment</p>
                  <p className="text-sm">
                    Professional testing to identify pollutants, allergens, humidity levels, and other air quality
                    issues in your home.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#1E3A8A] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Customized Solutions</p>
                  <p className="text-sm">
                    Based on test results, we recommend specific solutions tailored to your home's unique air quality
                    needs.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Ventilation Solutions</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#1E3A8A] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Energy Recovery Ventilators (ERV)</p>
                  <p className="text-sm">
                    Bring fresh outdoor air into your home while maintaining energy efficiency and indoor comfort.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#1E3A8A] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Heat Recovery Ventilators (HRV)</p>
                  <p className="text-sm">
                    Improve ventilation without losing heating or cooling energy. Perfect for tightly sealed modern
                    homes.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-4">
            <p className="font-semibold text-gray-900 mb-1">Health Benefits of Better Air Quality</p>
            <p className="text-sm text-gray-700 mb-2">Improved indoor air quality can help reduce:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Allergy and asthma symptoms</li>
              <li>• Respiratory infections and illnesses</li>
              <li>• Headaches and fatigue</li>
              <li>• Dust accumulation in your home</li>
              <li>• Mold and mildew growth</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">Why Choose Our Air Quality Services?</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Certified indoor air quality specialists</li>
              <li>✓ Advanced testing and diagnostic equipment</li>
              <li>✓ Solutions for all budgets and needs</li>
              <li>✓ Professional installation and service</li>
              <li>✓ Ongoing maintenance and support</li>
              <li>✓ Free air quality consultations</li>
            </ul>
          </div>
        </div>
      </ServiceModal>
    </div>
  )
}
