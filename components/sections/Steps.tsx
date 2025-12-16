"use client"

import { CalendarCheck, Smartphone, Key, Flag } from "lucide-react"
import { motion } from "framer-motion"
import { SectionInView } from "@/components/ui/SectionInView"

const steps = [
    {
        icon: CalendarCheck,
        title: "Réservez",
        description: "Choisissez le véhicule et la durée de location sur l'application.",
    },
    {
        icon: Smartphone,
        title: "Déverrouillez",
        description: "Utilisez votre smartphone pour ouvrir le véhicule.",
    },
    {
        icon: Key,
        title: "Roulez",
        description: "Faites votre trajet en toute sérénité. Assurance tous risques incluse.",
    },
    {
        icon: Flag,
        title: "Restituez",
        description: "Restituez le véhicule dans le périmètre initial en respectant les instructions communiquées.",
    },
]

export function Steps() {
    return (
        <section id="comment-ca-marche" className="py-24 bg-white overflow-hidden scroll-mt-28">
            <div className="container mx-auto px-4">
                <SectionInView>
                    <div className="mb-16 text-center">
                        <div className="mb-6 inline-flex items-center rounded-full bg-[var(--color-primary)] px-6 py-2 text-base font-medium text-white shadow-md shadow-blue-500/20">
                            Comment ça marche
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter text-[var(--color-secondary)] sm:text-4xl">
                            Comment ça marche ?
                        </h2>
                        <p className="mt-4 text-gray-600">
                            Louer un véhicule n&apos;a jamais été aussi simple.
                        </p>
                    </div>

                    <div className="relative grid gap-8 md:grid-cols-4">
                        {/* Connecting Line (Desktop) */}
                        <motion.div
                            className="hidden md:block absolute top-12 left-0 h-0.5 bg-gray-100 -z-10"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />

                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="relative flex flex-col items-center text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.3 }}
                            >
                                {/* Number Badge (First) */}
                                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-white shadow-md shadow-blue-500/30 z-20">
                                    {index + 1}
                                </div>

                                {/* Icon Circle */}
                                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white border-4 border-white shadow-lg mb-6 z-10">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-[var(--color-primary)]">
                                        <step.icon className="h-8 w-8" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-2">{step.title}</h3>
                                <p className="text-gray-600 text-sm max-w-[200px]">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </SectionInView>
            </div>
        </section>
    )
}
