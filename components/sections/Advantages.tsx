import { Smartphone, Wallet, Truck } from "lucide-react"
import { SectionInView } from "@/components/ui/SectionInView"

const advantages = [
    {
        icon: Smartphone,
        title: "Liberté Totale",
        description: "Réservez, déverrouillez et démarrez avec votre smartphone via Getaround Connect. 24h/24, 7j/7.",
    },
    {
        icon: Wallet,
        title: "Tarifs flexibles",
        description: "Payez à l’heure ou à la journée, c’est vous qui décidez.",
    },
    {
        icon: Truck,
        title: "Véhicules fiables",
        description: "Une flotte de véhicules régulièrement entretenus, nettoyés et désinfectés. À vous la tranquillité.",
    },
]

export function Advantages() {
    return (
        <section id="avantages" className="py-24 bg-white scroll-mt-28">
            <div className="container mx-auto px-4">
                <SectionInView>
                    <div className="mb-16 text-center">
                        <div className="mb-6 inline-flex items-center rounded-full bg-[var(--color-primary)] px-6 py-2 text-base font-medium text-white shadow-md shadow-blue-500/20">
                            Avantages
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter text-[var(--color-secondary)] sm:text-4xl">
                            Pourquoi choisir <span className="relative inline-block text-[var(--color-primary)] cursor-pointer group">
                                Next 2 You ?
                                <span className="absolute bottom-0 left-0 h-[3px] w-full bg-[var(--color-primary)] transition-transform duration-500 ease-out origin-left scale-x-100 group-hover:origin-right group-hover:scale-x-0"></span>
                            </span>
                        </h2>
                    </div>
                    <div className="grid gap-12 md:grid-cols-3">
                        {advantages.map((item, index) => (
                            <div key={index} className="flex flex-col items-center text-center gap-4">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-[var(--color-primary)]">
                                    <item.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-bold text-[var(--color-secondary)]">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed max-w-xs">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </SectionInView>
            </div>
        </section>
    )
}
