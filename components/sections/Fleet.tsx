"use client"

import { Button } from "@/components/ui/Button"
import { ArrowRight, Fuel, Settings, MapPin, ChevronLeft, ChevronRight, Search } from "lucide-react"
import Image from "next/image"
import { SectionInView } from "@/components/ui/SectionInView"
import { useState, useEffect, useCallback } from "react"
import { cn } from "@/lib/utils"
import useEmblaCarousel from "embla-carousel-react"
import { vehicles, Vehicle } from "@/lib/data/vehicles"
import { VehicleModal } from "@/components/ui/VehicleModal"

const categories = [
    { id: "all", label: "Tout" },
    { id: "utilitaire", label: "Utilitaires" },
    { id: "citadine", label: "Citadines" },
]

export function Fleet() {
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false })
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

    const filteredVehicles = vehicles.filter(
        (vehicle) => selectedCategory === "all" || vehicle.category === selectedCategory
    )

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setPrevBtnEnabled(emblaApi.canScrollPrev())
        setNextBtnEnabled(emblaApi.canScrollNext())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on("select", onSelect)
        emblaApi.on("reInit", onSelect)
    }, [emblaApi, onSelect])

    useEffect(() => {
        if (emblaApi) emblaApi.reInit()
    }, [selectedCategory, emblaApi])

    const openDetails = (vehicle: Vehicle) => {
        setSelectedVehicle(vehicle)
        setIsModalOpen(true)
    }

    return (
        <section id="flotte" className="py-24 bg-gray-50 scroll-mt-28">
            <div className="container mx-auto px-4">
                <SectionInView>
                    <div className="mb-12 text-center">
                        <div className="mb-6 inline-flex items-center rounded-full bg-[var(--color-primary)] px-6 py-2 text-base font-medium text-white shadow-md shadow-blue-500/20">
                            Véhicules
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter text-[var(--color-secondary)] sm:text-4xl font-heading">
                            Notre Flotte
                        </h2>
                        <p className="mt-4 text-gray-600">
                            Des véhicules régulièrement entretenus, pour tous vos besoins.
                        </p>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex justify-center flex-wrap gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={cn(
                                    "px-6 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 active:scale-95",
                                    selectedCategory === category.id
                                        ? "bg-[var(--color-primary)] text-white shadow-md"
                                        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                                )}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>

                    <div className="relative max-w-7xl mx-auto">
                        <div className="overflow-hidden" ref={emblaRef}>
                            <div className="flex -ml-6">
                                {filteredVehicles.map((vehicle, index) => (
                                    <div key={index} className="flex-[0_0_100%] min-w-0 pl-6 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                                        <div
                                            onClick={() => openDetails(vehicle)}
                                            className="group h-full overflow-hidden rounded-2xl bg-white border border-gray-200 flex flex-col transition-all hover:border-[var(--color-primary)] hover:shadow-xl cursor-pointer"
                                        >
                                            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                                                <Image
                                                    src={vehicle.image}
                                                    alt={vehicle.name}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                />
                                                <div className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-sm font-bold text-[var(--color-secondary)] backdrop-blur-sm shadow-sm">
                                                    {vehicle.volume}
                                                </div>
                                                {/* Overlay on hover */}
                                                <div className="absolute inset-0 bg-[var(--color-secondary)]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                    <div className="bg-white p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                                        <Search className="h-6 w-6 text-[var(--color-primary)]" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-6 flex flex-col flex-grow">
                                                <div className="mb-4">
                                                    <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-1 font-heading group-hover:text-[var(--color-primary)] transition-colors">{vehicle.name}</h3>
                                                    <div className="flex items-center gap-1 text-sm text-gray-500">
                                                        <MapPin className="h-4 w-4 text-red-500" />
                                                        {vehicle.location}
                                                    </div>
                                                </div>

                                                <div className="mb-6 flex items-center gap-4 text-sm text-gray-600">
                                                    <div className="flex items-center gap-1.5">
                                                        <Fuel className="h-4 w-4 text-[var(--color-primary)]" />
                                                        {vehicle.fuel}
                                                    </div>
                                                    <div className="flex items-center gap-1.5">
                                                        <Settings className="h-4 w-4 text-[var(--color-primary)]" />
                                                        {vehicle.transmission}
                                                    </div>
                                                </div>

                                                <p className="mb-6 text-sm text-gray-600 line-clamp-2 flex-grow">
                                                    {vehicle.description}
                                                </p>

                                                <div className="flex flex-wrap gap-2 mb-6">
                                                    {vehicle.features.slice(0, 3).map((feature, i) => (
                                                        <span key={i} className="inline-flex items-center rounded-md bg-blue-50 px-2.3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                                            {feature}
                                                        </span>
                                                    ))}
                                                    {vehicle.features.length > 3 && (
                                                        <span className="text-xs text-gray-400 self-center">+{vehicle.features.length - 3}</span>
                                                    )}
                                                </div>

                                                <div className="flex gap-2 mt-auto">
                                                    <Button variant="outline" className="flex-1 text-xs px-2" onClick={(e) => {
                                                        e.stopPropagation()
                                                        openDetails(vehicle)
                                                    }}>
                                                        Détails
                                                    </Button>
                                                    <Button asChild className="flex-[2] gap-2">
                                                        <a
                                                            href={vehicle.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            Réserver <ArrowRight className="h-4 w-4" />
                                                        </a>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            className={cn(
                                "absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-gray-800 transition-all hover:bg-gray-50 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] z-10",
                                !prevBtnEnabled && "opacity-0 pointer-events-none"
                            )}
                            onClick={scrollPrev}
                            disabled={!prevBtnEnabled}
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            className={cn(
                                "absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-gray-800 transition-all hover:bg-gray-50 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] z-10",
                                !nextBtnEnabled && "opacity-0 pointer-events-none"
                            )}
                            onClick={scrollNext}
                            disabled={!nextBtnEnabled}
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {filteredVehicles.length === 0 && (
                        <div className="text-center text-gray-500 py-12">
                            Aucun véhicule disponible dans cette catégorie pour le moment.
                        </div>
                    )}
                </SectionInView>
            </div>

            <VehicleModal
                vehicle={selectedVehicle}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    )
}

