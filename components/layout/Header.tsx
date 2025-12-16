"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/Button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
    const [isVisible, setIsVisible] = useState(true)
    const [isTop, setIsTop] = useState(true)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        let lastScrollY = window.scrollY

        const handleScroll = () => {
            const currentScrollY = window.scrollY

            // Hide/Show logic
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }

            // Top/Scrolled logic
            if (currentScrollY > 600) {
                setIsTop(false)
            } else {
                setIsTop(true)
            }

            lastScrollY = currentScrollY
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault()
        const targetId = href.replace(/.*\#/, "")
        const elem = document.getElementById(targetId)

        // Close mobile menu if open
        setIsMobileMenuOpen(false)

        elem?.scrollIntoView({
            behavior: "smooth",
        })
        // Optional: Update URL without jumping
        window.history.pushState(null, "", href)
    }

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 mx-auto w-full max-w-7xl px-4 pt-4 transition-transform duration-300",
                isVisible ? "translate-y-0" : "-translate-y-full"
            )}
        >
            <div className={cn(
                "flex h-20 items-center justify-between px-8 rounded-full transition-all duration-300 backdrop-blur-md border border-white/10 relative z-50",
                isTop && !isMobileMenuOpen ? "bg-white/10" : "bg-white/80 border-gray-200/50"
            )}>
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative h-12 w-48">
                        <Image
                            src={isTop && !isMobileMenuOpen ? "/images/logo-white.png" : "/images/logo-blue.png"}
                            alt="Next 2 You"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <Link
                        href="#avantages"
                        onClick={(e) => handleSmoothScroll(e, "#avantages")}
                        className={cn(
                            "transition-colors",
                            isTop ? "text-gray-100 hover:text-white" : "text-gray-600 hover:text-[var(--color-primary)]"
                        )}
                    >
                        Avantages
                    </Link>
                    <Link
                        href="#flotte"
                        onClick={(e) => handleSmoothScroll(e, "#flotte")}
                        className={cn(
                            "transition-colors",
                            isTop ? "text-gray-100 hover:text-white" : "text-gray-600 hover:text-[var(--color-primary)]"
                        )}
                    >
                        Véhicules
                    </Link>
                    <Link
                        href="#comment-ca-marche"
                        onClick={(e) => handleSmoothScroll(e, "#comment-ca-marche")}
                        className={cn(
                            "transition-colors",
                            isTop ? "text-gray-100 hover:text-white" : "text-gray-600 hover:text-[var(--color-primary)]"
                        )}
                    >
                        Comment ça marche
                    </Link>
                    <Link
                        href="#avis"
                        onClick={(e) => handleSmoothScroll(e, "#avis")}
                        className={cn(
                            "transition-colors",
                            isTop ? "text-gray-100 hover:text-white" : "text-gray-600 hover:text-[var(--color-primary)]"
                        )}
                    >
                        Avis
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Button
                        className={`hidden md:inline-flex rounded-full px-6 font-medium transition-colors ${isTop
                            ? "bg-white text-[var(--color-primary)] hover:bg-gray-100"
                            : "bg-[var(--color-primary)] text-white hover:bg-blue-700"
                            }`}
                        asChild
                    >
                        <a href="https://fr.getaround.com/users/3551826" target="_blank" rel="noopener noreferrer">
                            Voir les véhicules
                        </a>
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className={cn("md:hidden", isTop && !isMobileMenuOpen ? "text-white" : "text-black")}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                        <span className="sr-only">Menu</span>
                    </Button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-0 left-0 right-0 bg-white/80 backdrop-blur-md border border-white/10 shadow-xl rounded-b-3xl pt-24 pb-8 px-6 md:hidden animate-in slide-in-from-top-5 duration-200">
                    <nav className="flex flex-col gap-6 text-lg font-medium text-center">
                        <Link
                            href="#avantages"
                            onClick={(e) => handleSmoothScroll(e, "#avantages")}
                            className="text-gray-800 hover:text-[var(--color-primary)] transition-colors"
                        >
                            Avantages
                        </Link>
                        <Link
                            href="#flotte"
                            onClick={(e) => handleSmoothScroll(e, "#flotte")}
                            className="text-gray-800 hover:text-[var(--color-primary)] transition-colors"
                        >
                            Véhicules
                        </Link>
                        <Link
                            href="#comment-ca-marche"
                            onClick={(e) => handleSmoothScroll(e, "#comment-ca-marche")}
                            className="text-gray-800 hover:text-[var(--color-primary)] transition-colors"
                        >
                            Comment ça marche
                        </Link>
                        <Link
                            href="#avis"
                            onClick={(e) => handleSmoothScroll(e, "#avis")}
                            className="text-gray-800 hover:text-[var(--color-primary)] transition-colors"
                        >
                            Avis
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    )
}
