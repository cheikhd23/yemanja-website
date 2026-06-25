export type FullMenuItem = {
  name: string;
  description?: string;
  price?: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  note?: string;
  items: FullMenuItem[];
};

export const foodMenu: MenuCategory[] = [
  {
    id: "entrees",
    label: "Entrées",
    items: [
      { name: "Carpaccio de bœuf", description: "Câpres et parmesan", price: "11 000" },
      { name: "Carpaccio de poisson", description: "Gingembre et baies roses", price: "10 000" },
      { name: "Carpaccio de poulpe", price: "10 000" },
      { name: "Ceviche de poisson", description: "Lait de coco et fruit de la passion", price: "10 000" },
      { name: "Sweet Quinoa", description: "Tomates cerises, avocat, feta et nougat de fruits secs", price: "9 000" },
      { name: "Salade César", description: "Poulet pané, pignons de pin, parmesan et croûtons", price: "9 000" },
      { name: "Sweet Yé", description: "Maïs, avocat, artichaut, pomme Granny, pamplemousse et cœur de palmier", price: "8 000" },
      { name: "Burrata", description: "Crème de framboise, grissini et tomates cerises", price: "9 500" },
      { name: "Aumônière de chèvre", description: "Pommes caramélisées et tomates cerises", price: "10 000" },
      { name: "Salade Thaï mangue", description: "Mangue, oignons rouges, tomates, olives noires et avocat", price: "10 000" },
      { name: "Plateau d'huîtres", description: "12 pièces", price: "12 000" },
    ],
  },
  {
    id: "copains",
    label: "Le coin des copains",
    items: [
      { name: "Planche de fromages", price: "14 000" },
      { name: "Scampi fritti", description: "Calamars, poulpes et crevettes panés", price: "9 500" },
      { name: "Camembert rôti", description: "Confiture de figues et toasts", price: "10 500" },
      { name: "Nems vietnamiens", description: "5 pièces", price: "5 500" },
      { name: "Flûte norvégienne", description: "Saumon, crème d'aneth et concombre", price: "10 500" },
      { name: "Flûte sicilienne", description: "Pesto, mozzarella, roquette, tomates séchées et pignons", price: "10 000" },
    ],
  },
  {
    id: "pizzas",
    label: "Pizzas",
    items: [
      { name: "Margherita", description: "Tomate, mozzarella, olives noires et basilic", price: "7 500" },
      { name: "Regina", description: "Jambon blanc ou de dinde, champignons et olives", price: "8 000" },
      { name: "Végétarienne", description: "Champignons, cœur d'artichaut et olives", price: "8 000" },
      { name: "Pepperoni", description: "Chorizo, basilic et poivron", price: "8 500" },
      { name: "Tuna Pizza", description: "Thon, olives noires et basilic", price: "8 000" },
      { name: "Pizza del Mare", description: "Fruits de mer et basilic", price: "9 000" },
    ],
  },
  {
    id: "dolce-vita",
    label: "Dolce Vita",
    items: [
      { name: "Penne all'arrabbiata", price: "8 500" },
      { name: "Penne aux brocolis", description: "Parmesan et pignons", price: "9 500" },
      { name: "Rigatoni citron", description: "Pesto et burrata", price: "11 000" },
      { name: "Pâtes carbonara", description: "Lardons ou jambon de dinde", price: "9 000" },
      { name: "Gnocchi au pesto", price: "11 000" },
      { name: "Gnocchi Alfredo", description: "Crème fraîche, poulet et champignons", price: "10 500" },
      { name: "Tagliatelles au saumon", price: "11 500" },
      { name: "Tagliatelles aux fruits de mer", price: "10 500" },
    ],
  },
  {
    id: "beyrouth",
    label: "Escale à Beyrouth",
    items: [
      { name: "Kibbeh frits", price: "5 000" },
      { name: "Houmous", price: "5 500" },
      { name: "Fattouche", price: "5 500" },
      { name: "Taboulé", price: "5 500" },
      { name: "Falafels", price: "6 500" },
      { name: "Friture de sardines", description: "Bizri, selon saison", price: "10 000" },
      { name: "Fatteh d'aubergine", description: "Yaourt, pois chiches, aubergines, pain frit et noix de cajou", price: "8 500" },
      { name: "Shrimp Fatteh", description: "Yaourt, crevettes, pois chiches, pain frit et noix de cajou", price: "10 500" },
      { name: "Chich Taouk", description: "Brochettes de poulet mariné à l'orientale", price: "11 000" },
    ],
  },
  {
    id: "terre",
    label: "Côté terre",
    items: [
      { name: "Médaillon de bœuf", description: "Crème signature Sweet Coffee", price: "14 000" },
      { name: "Cœur de filet de bœuf", description: "Sauce au vin", price: "14 000" },
      { name: "Escalope de poulet", description: "Crème champignons", price: "12 000" },
      { name: "Brochettes de poulet", description: "Gingembre et miel", price: "12 000" },
      { name: "Poulet grillé entier", description: "Herbes de Provence, tomates cerises et ciboule", price: "14 000" },
      { name: "Brochettes de filet de bœuf épicées", price: "12 500" },
      { name: "Bo Bun", description: "Bœuf mariné, vermicelles, carottes, concombre et nems", price: "11 500" },
    ],
  },
  {
    id: "viandes",
    label: "Viandes importées",
    items: [
      { name: "Entrecôte d'Angus", price: "22 000" },
      { name: "Tomahawk", price: "65 000" },
      { name: "Côtelettes d'agneau braisées", price: "22 000" },
    ],
  },
  {
    id: "mer",
    label: "Côté mer",
    note: "Accompagnement au choix",
    items: [
      { name: "Gambas à la provençale", price: "14 000" },
      { name: "Filet de cabillaud", description: "Meunière ou poivre vert", price: "12 500" },
      { name: "Tourte aux fruits de mer", price: "14 000" },
      { name: "Langoustes Prestige à la braise", price: "25 000" },
      { name: "Escapade de gambas grillées", price: "14 000" },
      { name: "Moules marinières", price: "14 000" },
      { name: "Gambas au curry", description: "Ananas caramélisés", price: "14 000" },
      { name: "Thiof braisé", price: "14 000" },
    ],
  },
  {
    id: "desserts",
    label: "La note sucrée",
    items: [
      { name: "L'incontournable pain perdu", price: "6 500" },
      { name: "Pavlova signature", description: "Fruits de saison", price: "7 500" },
      { name: "Coulant au chocolat", price: "6 500" },
      { name: "Mi-cuit au caramel", price: "6 500" },
      { name: "Churros", price: "6 500" },
      { name: "Cookie au cœur coulant", price: "7 000" },
      { name: "Tiramisu", price: "7 500" },
      { name: "Tarte fine aux pommes", price: "6 000" },
      { name: "Café gourmand", price: "7 500" },
      { name: "Crème brûlée", price: "7 500" },
      { name: "Assiette de fruits", price: "5 500" },
    ],
  },
];

export const drinkMenu: MenuCategory[] = [
  {
    id: "smoothies",
    label: "Smoothies",
    note: "Tous à 5 000",
    items: [
      { name: "Tarzan", description: "Gingembre, ananas, mangue et citron" },
      { name: "Jane", description: "Gingembre, ananas, concombre et citron" },
      { name: "California Dreams", description: "Fraise, banane, kiwi et lait de coco" },
      { name: "Manganana", description: "Mangue, ananas, orange et miel" },
      { name: "Caribbean Kiss", description: "Melon, fraise, citron et mangue" },
      { name: "Tropi-Colada", description: "Lait de coco, ananas et banane" },
      { name: "Vitality", description: "Lait, banane et fraise" },
      { name: "Purity", description: "Mangue et framboise" },
      { name: "Recovery", description: "Mangue, ananas et pêche" },
    ],
  },
  {
    id: "sans-alcool",
    label: "Sans alcool",
    note: "Tous à 4 000",
    items: [
      { name: "Bingo", description: "Gingembre, bissap et citron" },
      { name: "Océan", description: "Orange, ananas, orgeat et curaçao" },
      { name: "Téranga", description: "Gingembre, bissap et tamarin" },
      { name: "The Wave", description: "Orange, pêche, ananas, orgeat et grenadine" },
      { name: "Coucher de soleil", description: "Citron, oranges pressées et grenadine" },
      { name: "Tropical", description: "Orange, ananas, mangue et passion" },
      { name: "Sea Sweet", description: "Coco, ananas, goyave et fraise" },
      { name: "Virgin Mojito" },
      { name: "Virgin Piña Colada" },
      { name: "Ly Biss", description: "Litchi, bissap, citron et eau pétillante" },
    ],
  },
  {
    id: "cocktails",
    label: "Cocktails",
    items: [
      { name: "Gin Basil", description: "Gin, citron, sucre et basilic", price: "7 000" },
      { name: "Spicy Margarita", description: "Tequila, citron, triple sec, agave et piment", price: "7 000" },
      { name: "Creamy Espresso Martini", description: "Vodka, café, vanille et Baileys", price: "7 000" },
      { name: "Big Boy", description: "Citron, curaçao bleu et cognac", price: "7 000" },
      { name: "Gin Kali", description: "Spicy gin, basilic, ananas, menthe et agave", price: "7 000" },
      { name: "Pornstar Martini", description: "Vodka, passion, citron, prosecco et vanille", price: "8 500" },
      { name: "Yemanjā", description: "Ananas, citron, kiwi, gin Gordon's et tonic", price: "7 000" },
      { name: "Caïpirinha", price: "6 000" },
      { name: "Mojito", price: "6 000" },
      { name: "Piña Colada", price: "6 000" },
      { name: "Aperol Spritz", price: "7 000" },
    ],
  },
  {
    id: "vins",
    label: "Vins",
    items: [
      { name: "Côte des Roses blanc", description: "Pays d'Oc", price: "25 000" },
      { name: "Rimapere", description: "Nouvelle-Zélande", price: "40 000" },
      { name: "Blanc Fumé Signature Gérard Bertrand", description: "Loire", price: "55 000" },
      { name: "Gris Blanc", description: "Languedoc rosé", price: "21 000" },
      { name: "Whispering Angel", description: "Côtes de Provence rosé", price: "85 000" },
      { name: "Pinot Noir Gustave Lorentz", description: "Alsace", price: "30 000" },
      { name: "Gigondas Duc de Montfort", description: "Rhône", price: "48 000" },
      { name: "Saint-Émilion Grand Cru, Château d'Arche", description: "Bordeaux", price: "75 000" },
    ],
  },
  {
    id: "champagnes",
    label: "Champagnes",
    items: [
      { name: "Roger Desivry Brut", price: "85 000" },
      { name: "Billecart-Salmon Brut La Réserve", price: "115 000" },
      { name: "Billecart-Salmon Rosé", price: "175 000" },
      { name: "Billecart-Salmon Blanc de Blancs Grand Cru", price: "180 000" },
    ],
  },
  {
    id: "bieres",
    label: "Bières & apéritifs",
    items: [
      { name: "Castel ou Flag", price: "2 000" },
      { name: "Sagres", price: "2 500" },
      { name: "Heineken, Corona ou Desperados", price: "3 000" },
      { name: "Monaco", price: "5 000" },
      { name: "Coupe de champagne", price: "9 000" },
      { name: "Verre de vin", price: "5 000" },
      { name: "Coupe de prosecco", price: "5 000" },
    ],
  },
];
