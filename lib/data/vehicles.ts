export interface Vehicle {
    name: string;
    location: string;
    image: string;
    images?: string[];
    volume: string;
    fuel: string;
    transmission: string;
    description: string;
    features: string[];
    link: string;
    category: "utilitaire" | "citadine";
    details?: string;
}

export const vehicles: Vehicle[] = [
    {
        name: "Renault Kangoo Express",
        location: "Paris 18ème",
        image: "/images/fleet/kangoo-paris.png",
        images: ["/images/fleet/kangoo-paris.png"],
        volume: "3m³",
        fuel: "Diesel",
        transmission: "Manuelle",
        description: "Idéal pour les déménagements. Proche périphériques et autoroutes.",
        details: "Ce Renault Kangoo est parfait pour vos transports d'objets encombrants ou petits déménagements. Son volume de 3m³ est optimisé. Situé dans le 18ème arrondissement, il permet un accès rapide au périphérique.",
        features: ["GPS", "Radar de recul", "Climatisation"],
        link: "https://fr.getaround.com/location-voiture/paris/renault-kangoo-express-1302570",
        category: "utilitaire",
    },
    {
        name: "Renault Kangoo Express",
        location: "Clichy",
        image: "/images/fleet/kangoo-clichy.png",
        images: ["/images/fleet/kangoo-clichy.png"],
        volume: "3m³",
        fuel: "Diesel",
        transmission: "Manuelle",
        description: "Parfait état. Siège passager escamotable pour plus de longueur.",
        details: "Véhicule très bien entretenu à Clichy. Le siège passager escamotable est un vrai plus pour charger des objets longs. Un diable est fourni pour faciliter vos manutentions.",
        features: ["Radar de recul", "Start & Stop", "Diable fourni"],
        link: "https://fr.getaround.com/location-voiture/clichy/renault-kangoo-express-1411186",
        category: "utilitaire",
    },
    {
        name: "Renault Kangoo Express",
        location: "Bois-Colombes",
        image: "/images/fleet/kangoo-bois-colombes.png",
        images: ["/images/fleet/kangoo-bois-colombes.png"],
        volume: "3m³",
        fuel: "Diesel",
        transmission: "Manuelle",
        description: "Proche gare. Full options (GPS, Bluetooth).",
        details: "Situé à deux pas de la gare de Bois-Colombes, ce Kangoo est extrêmement pratique. Il est équipé de toutes les options nécessaires pour un trajet confortable et sécurisé.",
        features: ["GPS", "Bluetooth", "Diable fourni"],
        link: "https://fr.getaround.com/location-voiture/bois-colombes/renault-kangoo-express-1656292",
        category: "utilitaire",
    },
    {
        name: "Renault Twingo III",
        location: "Bois-Colombes",
        image: "/images/fleet/twingo-bois-colombes.png",
        images: ["/images/fleet/twingo-bois-colombes.png"],
        volume: "Citadine",
        fuel: "Essence",
        transmission: "Manuelle",
        description: "Petite citadine fiable, très pratique en ville. Compatible ISOFIX.",
        details: "La Twingo III est la reine de la ville. Maniable, facile à garer, elle est idéale pour vos courses ou petits déplacements urbains. Elle dispose de fixations ISOFIX pour vos sièges auto.",
        features: ["Bluetooth", "Régulateur", "ISOFIX"],
        link: "https://fr.getaround.com/location-voiture/bois-colombes/renault-twingo-iii-1710998",
        category: "citadine",
    },
    {
        name: "Nissan Micra",
        location: "Bois-Colombes",
        image: "/images/fleet/micra-bois-colombes.png",
        images: ["/images/fleet/micra-bois-colombes.png"],
        volume: "Citadine",
        fuel: "Essence",
        transmission: "Automatique",
        description: "Puissante et agile. Boîte automatique pour une conduite urbaine détendue.",
        details: "Profitez du confort de la boîte automatique avec cette Nissan Micra. Agile et bien équipée, elle transforme la conduite en ville en un moment de plaisir sans stress.",
        features: ["Boîte Auto", "Climatisation", "Bluetooth"],
        link: "https://fr.getaround.com/location-voiture/bois-colombes/nissan-micra-1424334",
        category: "citadine",
    },
];
