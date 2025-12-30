import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/Button"

export function Footer() {
    return (
        <footer className="bg-[var(--color-secondary)] text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid gap-8 md:grid-cols-4">
                    <div className="col-span-1 md:col-span-2">
                        <div className="relative h-8 w-32 mb-4">
                            <Image
                                src="/images/logo-white.png"
                                alt="Next 2 You"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-gray-400 max-w-sm">
                            La location de véhicules simplifiée. Disponible 24h/24 et 7j/7 via l&apos;application Getaround.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4">Navigation</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="#avantages" className="hover:text-white">Avantages</Link></li>
                            <li><Link href="#flotte" className="hover:text-white">Véhicules</Link></li>
                            <li><Link href="#comment-ca-marche" className="hover:text-white">Comment ça marche</Link></li>
                            <li><Link href="#avis" className="hover:text-white">Avis clients</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4">Légal</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/mentions-legales" className="hover:text-white">Mentions légales</Link></li>
                            <li><Link href="/cgu" className="hover:text-white">CGU</Link></li>
                            <li><Link href="/politique-de-confidentialite" className="hover:text-white">Politique de confidentialité</Link></li>
                            <li><a href="mailto:next2upro@gmail.com" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Next 2 You. Tous droits réservés.
                    </p>
                    <Button asChild>
                        <Link href="#flotte">Louer un véhicule</Link>
                    </Button>
                </div>
            </div>
        </footer>
    )
}
