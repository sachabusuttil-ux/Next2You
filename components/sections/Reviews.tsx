import { Star } from "lucide-react"
import Image from "next/image"
import { SectionInView } from "@/components/ui/SectionInView"
import { reviews } from "@/lib/data/reviews"

export function Reviews() {
    return (
        <section id="avis" className="py-24 bg-gray-50 scroll-mt-28">
            <div className="container mx-auto px-4">
                <SectionInView>
                    <div className="mb-16 text-center flex flex-col items-center gap-6">
                        {/* Avis Clients Chip (Top) */}
                        <div className="mb-6 inline-flex items-center rounded-full bg-[var(--color-primary)] px-6 py-2 text-base font-medium text-white shadow-md shadow-blue-500/20">
                            Avis Clients
                        </div>

                        <div className="flex justify-center mb-6">
                            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm animate-fade-in-up">
                                <div className="flex -space-x-2">
                                    <div className="relative h-6 w-6 rounded-full border-2 border-white overflow-hidden">
                                        <Image src="/images/avatars/avatar-1.png" alt="Client" fill className="object-cover" />
                                    </div>
                                    <div className="relative h-6 w-6 rounded-full border-2 border-white overflow-hidden">
                                        <Image src="/images/avatars/avatar-2.png" alt="Client" fill className="object-cover" />
                                    </div>
                                    <div className="relative h-6 w-6 rounded-full border-2 border-white overflow-hidden">
                                        <Image src="/images/avatars/avatar-3.png" alt="Client" fill className="object-cover" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="font-bold text-[var(--color-secondary)]">4.9/5</span>
                                    <span className="text-sm text-gray-500">sur 500+ avis</span>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold tracking-tighter text-[var(--color-secondary)] sm:text-4xl">
                            Ils nous font confiance
                        </h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {reviews.map((review, index) => (
                            <div key={index} className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-sm border border-gray-100 transition-all hover:shadow-md">
                                <div className="mb-6">
                                    <div className="flex gap-1 mb-4">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}`}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 italic">&quot;{review.content}&quot;</p>
                                    <p className="mt-4 text-xs font-semibold text-[var(--color-primary)] bg-blue-50 inline-block px-2 py-1 rounded">
                                        Loué : {review.vehicle}
                                    </p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="relative h-12 w-12 rounded-full overflow-hidden border border-gray-100">
                                        <Image
                                            src={review.avatar}
                                            alt={review.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-bold text-[var(--color-secondary)]">{review.name}</p>
                                        <p className="text-xs text-gray-500">{review.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </SectionInView>
            </div>
        </section>
    )
}
