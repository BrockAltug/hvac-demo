"use client"

import type React from "react"

import { X } from "lucide-react"
import { useEffect, useRef } from "react"

interface ServiceModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  icon: React.ReactNode
  children: React.ReactNode
}

export function ServiceModal({ isOpen, onClose, title, icon, children }: ServiceModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const previousActiveElement = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement
      document.body.style.overflow = "hidden"
      // Focus the close button when modal opens
      setTimeout(() => closeButtonRef.current?.focus(), 100)
    } else {
      document.body.style.overflow = "unset"
      // Return focus to the element that opened the modal
      previousActiveElement.current?.focus()
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }

      // Focus trap
      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        )
        const firstElement = focusableElements[0] as HTMLElement
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault()
          lastElement?.focus()
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault()
          firstElement?.focus()
        }
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown)
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-[#1E3A8A] text-white p-6 flex items-center justify-between border-b-4 border-[#1e3a8ae6] z-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white text-[#1E3A8A] rounded-full flex items-center justify-center flex-shrink-0">
              {icon}
            </div>
            <h2 id="modal-title" className="text-2xl font-bold">
              {title}
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center hover:bg-white/20 transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-8">{children}</div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-gray-50 p-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4 z-10">
          <div className="text-sm text-gray-600 text-center sm:text-left">
            <p className="font-semibold">Need immediate assistance?</p>
            <p>
              Call us 24/7 at{" "}
              <a href="tel:555-123-4567" className="text-[#1E3A8A] hover:underline font-semibold">
                (555) 123-4567
              </a>
            </p>
          </div>
          <button
            onClick={onClose}
            className="bg-[#1E3A8A] text-white px-6 py-3 font-semibold hover:bg-[#1e3a8ae6] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:ring-offset-2"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
