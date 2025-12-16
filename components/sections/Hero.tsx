"use client"

import { Button } from "@/components/ui/Button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
    const handleSmoothScroll = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, targetId: string) => {
        e.preventDefault()
        const elem = document.getElementById(targetId)
        elem?.scrollIntoView({
            behavior: "smooth",
        })
        // Optional: Update URL without jumping
        window.history.pushState(null, "", `#${targetId}`)
    }

    return (
        <section className="relative overflow-hidden bg-[#1451DF] pt-32 pb-32 md:pt-48 md:pb-48">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-white opacity-10 blur-[100px]" />
            <div className="absolute bottom-0 left-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 translate-y-1/4 rounded-full bg-blue-400 opacity-10 blur-[80px]" />

            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto gap-8">
                    {/* Social Proof Pill with Border Beam */}
                    <div className="relative inline-flex overflow-hidden rounded-full p-[1px] animate-fade-in-up">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffffff_0%,#0C57F3_50%,#ffffff_100%)]" />
                        <div className="inline-flex h-full w-full items-center gap-2 rounded-full bg-[#0C57F3] px-3 py-1 backdrop-blur-3xl">
                            <div className="flex -space-x-2">
                                <div className="relative h-6 w-6 rounded-full border-2 border-[#0C57F3] overflow-hidden">
                                    <Image src="/images/avatars/avatar-1.png" alt="Client" fill className="object-cover" />
                                </div>
                                <div className="relative h-6 w-6 rounded-full border-2 border-[#0C57F3] overflow-hidden">
                                    <Image src="/images/avatars/avatar-2.png" alt="Client" fill className="object-cover" />
                                </div>
                                <div className="relative h-6 w-6 rounded-full border-2 border-[#0C57F3] overflow-hidden">
                                    <Image src="/images/avatars/avatar-3.png" alt="Client" fill className="object-cover" />
                                </div>
                            </div>
                            <span className="text-sm font-medium text-white flex items-center gap-1">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                +1000 locations
                            </span>
                        </div>
                    </div>

                    <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl flex flex-wrap justify-center items-center gap-x-3">
                        Louez un <span className="text-white font-extrabold">véhicule</span>
                        <span className="inline-flex items-center">
                            <span className="relative inline-block h-[1em] w-[2.5em] align-middle">
                                <Image
                                    src="/images/hero/24h.png"
                                    alt="24h/24"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </span>
                            <span>,</span>
                        </span>
                        en bas de chez vous.
                    </h1>

                    <p className="max-w-[700px] text-lg text-blue-100 md:text-xl">
                        Accès 100% autonome via Getaround - Assurance tous risques AXA incluse - La solution la plus simple pour vos déplacements.
                    </p>

                    <div className="flex flex-col gap-4 sm:flex-row justify-center">
                        <Button size="lg" className="rounded-full bg-white text-[var(--color-primary)] hover:bg-gray-100" asChild>
                            <a href="https://fr.getaround.com/users/3551826" target="_blank" rel="noopener noreferrer">
                                Voir les véhicules <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="text-base bg-transparent text-white border-white/20 hover:bg-white/10 hover:text-white w-full sm:w-auto"
                            onClick={(e) => handleSmoothScroll(e, "comment-ca-marche")}
                        >
                            Comment ça marche
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
