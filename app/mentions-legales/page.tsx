import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function MentionsLegales() {
    return (
        <main className="min-h-screen bg-gray-50 py-24">
            <div className="container mx-auto px-4 max-w-4xl">
                <Link href="/" className="inline-flex items-center gap-2 text-[var(--color-primary)] font-medium mb-12 hover:gap-3 transition-all">
                    <ChevronLeft className="h-4 w-4" /> Retour à l'accueil
                </Link>

                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                    <h1 className="text-4xl font-bold text-[var(--color-secondary)] mb-12 font-heading italic">Mentions légales</h1>

                    <section className="mb-10">
                        <h2 className="text-xl font-bold text-[var(--color-secondary)] mb-4">Éditeur du site</h2>
                        <div className="space-y-2 text-gray-600 leading-relaxed">
                            <p><strong>NEXT2YOU</strong>, SAS au capital de 1000 €, dont le siège social est situé à Bois-Colombes.</p>
                            <p><strong>Adresse courriel :</strong> next2upro@gmail.com</p>
                            <p><strong>Directeur de la publication :</strong> BRAUNN Charly</p>
                            <p><strong>Numéro d’immatriculation au RNE :</strong> 98777380100020</p>
                            <p><strong>Numéro de TVA intracommunautaire :</strong> FR30987773801</p>
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl font-bold text-[var(--color-secondary)] mb-4">Hébergement</h2>
                        <div className="space-y-2 text-gray-600 leading-relaxed">
                            <p>Le site est hébergé par [Nom de l’hébergeur].</p>
                            <p><strong>Téléphone :</strong> […]</p>
                            <p><strong>Adresse électronique :</strong> […]</p>
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl font-bold text-[var(--color-secondary)] mb-4">Propriété intellectuelle</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Tous les contenus présents sur le site (textes, images, graphismes, logos, vidéos, sons) sont la propriété exclusive de NEXT2YOU ou font l’objet de droits d’utilisation. Toute reproduction ou représentation totale ou partielle de ces éléments, par quelque procédé que ce soit, sans autorisation préalable est interdite.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl font-bold text-[var(--color-secondary)] mb-4">Responsabilité</h2>
                        <p className="text-gray-600 leading-relaxed">
                            NEXT2YOU met tout en œuvre pour fournir des informations exactes et à jour, mais ne saurait être tenue responsable des erreurs, omissions ou indisponibilités du site. L’utilisateur est seul responsable de l’usage qu’il fait du contenu. Des liens vers des sites tiers peuvent être proposés, sans que NEXT2YOU ne puisse être tenue responsable du contenu de ces sites.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[var(--color-secondary)] mb-4">Cookies et traceurs</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Des cookies peuvent être installés sur votre terminal pour assurer le bon fonctionnement du site et analyser sa fréquentation. Vous pouvez paramétrer votre navigateur pour refuser les cookies non essentiels, comme le prévoit la réglementation sur les traceurs.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    )
}
