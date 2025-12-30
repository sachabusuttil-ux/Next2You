import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function PolitiqueConfidentialite() {
    return (
        <main className="min-h-screen bg-gray-50 py-24">
            <div className="container mx-auto px-4 max-w-4xl">
                <Link href="/" className="inline-flex items-center gap-2 text-[var(--color-primary)] font-medium mb-12 hover:gap-3 transition-all">
                    <ChevronLeft className="h-4 w-4" /> Retour à l&apos;accueil
                </Link>

                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                    <h1 className="text-4xl font-bold text-[var(--color-secondary)] mb-12 font-heading italic">Politique de confidentialité</h1>

                    <section className="mb-10">
                        <h2 className="text-xl font-bold text-[var(--color-secondary)] mb-4">Responsable du traitement</h2>
                        <div className="space-y-2 text-gray-600 leading-relaxed">
                            <p><strong>NEXT2YOU</strong>, SAS, siège social à Bois Colombes.</p>
                            <p><strong>Contact RGPD :</strong></p>
                            <p>– E‑mail : next2upro@gmail.com</p>
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl font-bold text-[var(--color-secondary)] mb-4">Données collectées et finalités</h2>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600 leading-relaxed">
                            <li>Données d&apos;identification et de contact pour traiter les demandes et les réservations.</li>
                            <li>Données de connexion pour assurer la sécurité du site et établir des statistiques.</li>
                            <li>Données de réservation pour gérer les contrats de location.</li>
                        </ul>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            NEXT2YOU collecte uniquement les données nécessaires et indique clairement les informations obligatoires.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl font-bold text-[var(--color-secondary)] mb-4">Bases légales</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Les données sont traitées pour exécuter un contrat, pour respecter des obligations légales ou sur la base de l’intérêt légitime de NEXT2YOU ou du consentement de l’utilisateur (prospection, cookies non essentiels).
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl font-bold text-[var(--color-secondary)] mb-4">Destinataires</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Les données sont destinées à NEXT2YOU et à ses prestataires tenus à une obligation de confidentialité. Elles peuvent être communiquées aux autorités sur requête judiciaire.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl font-bold text-[var(--color-secondary)] mb-4">Durée de conservation</h2>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600 leading-relaxed">
                            <li><strong>Données de contact :</strong> conservées le temps de traiter la demande puis archivées trois ans au maximum.</li>
                            <li><strong>Données de réservation :</strong> conservées pendant la durée du contrat puis archivées cinq ans.</li>
                            <li><strong>Cookies de mesure d&apos;audience :</strong> 13 mois maximum.</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl font-bold text-[var(--color-secondary)] mb-4">Droits des personnes</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, d&apos;opposition, de limitation et de portabilité de vos données. Pour exercer ces droits, contactez NEXT2YOU à l&apos;adresse mail indiquée ci‑dessus. Vous pouvez, en cas de litige, saisir la CNIL.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[var(--color-secondary)] mb-4">Cookies</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Lors de votre première visite, un bandeau d&apos;information pourra vous informer de l&apos;utilisation de cookies et recueillera votre consentement pour les cookies non essentiels. Vous pouvez accepter ou refuser les cookies de mesure d&apos;audience ou de personnalisation et modifier vos préférences à tout moment via les paramètres de votre navigateur.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    )
}
