import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function CGU() {
    return (
        <main className="min-h-screen bg-gray-50 py-24">
            <div className="container mx-auto px-4 max-w-4xl">
                <Link href="/" className="inline-flex items-center gap-2 text-[var(--color-primary)] font-medium mb-12 hover:gap-3 transition-all">
                    <ChevronLeft className="h-4 w-4" /> Retour à l&apos;accueil
                </Link>

                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                    <h1 className="text-4xl font-bold text-[var(--color-secondary)] mb-12 font-heading italic">Conditions générales d&apos;utilisation (CGU)</h1>

                    <section className="mb-10">
                        <h2 className="text-xl font-bold text-[var(--color-secondary)] mb-4">Objet</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Les CGU définissent les conditions d&apos;accès et d&apos;utilisation du site NEXT2YOU. En naviguant sur le site, l&apos;utilisateur accepte sans réserve les présentes conditions.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl font-bold text-[var(--color-secondary)] mb-4">Accès au site</h2>
                        <p className="text-gray-600 leading-relaxed">
                            L&apos;accès est gratuit pour tout utilisateur disposant d&apos;une connexion Internet. Tous les coûts associés (matériel, logiciels, connexion) sont à sa charge. NEXT2YOU met en œuvre tous les moyens raisonnables pour assurer un accès continu, mais ne garantit pas l&apos;absence d&apos;interruptions.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl font-bold text-[var(--color-secondary)] mb-4">Propriété intellectuelle</h2>
                        <p className="text-gray-600 leading-relaxed">
                            L&apos;intégralité du contenu du site est protégée par le droit d&apos;auteur. Toute reproduction ou exploitation non autorisée est interdite.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl font-bold text-[var(--color-secondary)] mb-4">Données personnelles</h2>
                        <p className="text-gray-600 leading-relaxed">
                            NEXT2YOU peut collecter des informations personnelles via des formulaires (nom, courriel, téléphone…) pour traiter les demandes ou les réservations. Le traitement des données est détaillé dans la politique de confidentialité.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl font-bold text-[var(--color-secondary)] mb-4">Responsabilité de l’utilisateur</h2>
                        <p className="text-gray-600 leading-relaxed">
                            L&apos;utilisateur s&apos;engage à utiliser le site conformément à la loi et à ne pas diffuser de contenus illicites, injurieux ou malveillants. Il lui appartient de disposer d&apos;un équipement informatique sécurisé.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl font-bold text-[var(--color-secondary)] mb-4">Liens hypertextes</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Toute création de lien vers le site doit faire l’objet d’une autorisation de NEXT2YOU. Les liens sortants sont fournis à titre informatif ; NEXT2YOU décline toute responsabilité concernant leur contenu.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl font-bold text-[var(--color-secondary)] mb-4">Modification des CGU</h2>
                        <p className="text-gray-600 leading-relaxed">
                            NEXT2YOU se réserve le droit de modifier les CGU à tout moment. Les utilisateurs sont invités à consulter régulièrement la version en vigueur.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[var(--color-secondary)] mb-4">Droit applicable et litiges</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Les CGU sont soumises au droit français. En cas de litige, les tribunaux français sont compétents. Le consommateur peut recourir gratuitement à un médiateur de la consommation (article L.612-1 du Code de la consommation).
                        </p>
                    </section>
                </div>
            </div>
        </main>
    )
}
