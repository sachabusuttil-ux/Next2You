export interface Review {
    name: string;
    role: string;
    content: string;
    rating: number;
    avatar: string;
    vehicle: string;
}

export const reviews: Review[] = [
    {
        name: "Thomas D.",
        role: "Déménagement",
        content: "Voiture parfaitement adaptée à mon petit déménagement. Facile à conduire et à faire entrer dans un parking en sous-sol. Un gros plus : le diable et la couverture fournies.",
        rating: 5,
        avatar: "/images/avatars/avatar-1.png",
        vehicle: "Renault Kangoo Express",
    },
    {
        name: "Marie L.",
        role: "Location",
        content: "Voiture propre et agréable à conduire en ville ! Tout s'est très bien passé. Deuxième location de cette voiture et tout s’est une nouvelle fois bien passé !",
        rating: 5,
        avatar: "/images/avatars/avatar-2.png",
        vehicle: "Renault Twingo III",
    },
    {
        name: "Kevin M.",
        role: "Utilitaire",
        content: "La voiture est un peu usée mais fonctionne très bien. Le lieu de récupération est pratique. Elle est très propre. Le support de téléphone est pratique ainsi que la couverture et le diable fournis.",
        rating: 4,
        avatar: "/images/avatars/avatar-3.png",
        vehicle: "Renault Kangoo Express",
    },
];
