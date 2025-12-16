import type { Metadata } from "next";
import { Epilogue, Archivo } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Next 2 You - Location d'utilitaires 24h/24",
  description: "Louez un utilitaire en bas de chez vous avec Next 2 You. Accès immédiat via Getaround.",
};

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// ... imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${epilogue.variable} ${archivo.variable} antialiased flex flex-col min-h-screen font-sans`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
