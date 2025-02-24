import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      logo: "logo",
      products: "Products",
      nexusVaultPrologueAboutContact: "Nexus Vault Prologue About Contact",
      gaming: "Gaming",
      redefine: "redefine",
      enterMetagameLayer: "Enter the Metagame Layer",
      unleashPlayEconomy: "Unleash the Play Economy",
      watchTrailer: "Watch Trailer",
      welcomeToZentry: "Welcome to Zentry",
      discover: "Discover",
      worldsLargestSharedAdventure: "the world's largest shared adventure",
      gameOfGamesBegins: "The Game of Games begins - your life, now an epic MMORPG",
      unitePlayers: "Zentry unites every player from countless games and platforms",
      background: "Background",
      intoMetagameLayer: "Into the Metagame Layer",
      immerseExperience:
        "Immerse yourself in a rich and ever-expanding universe where a vibrant array of products converge into an interconnected overlay experience on your world.",
      radiant: "radiant",
      radiantDescription:
        "A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure.",
      zigma: "zigma",
      zigmaDescription:
        "An anime and gaming-inspired NFT collection - the IP primed for expansion",
      nexus: "nexus",
      nexusDescription:
        "A gamified social hub, adding a new dimension of play to social interaction for Web3 communities.",
      azul: "azul",
      azulDescription:
        "A gamified social hub, adding a new dimension of play to social interaction for Web3 communities.",
      moreComingSoon: "More coming soon!",
      multiversalIpWorld: "the multiversal IP world",
      storyOfHiddenRealm: "the story of a hidden realm",
      entrance: "entrance.webp",
      whereRealmsConverge:
        "Where realms converge, lies Zentry and the boundless pillar. Discover its secrets and shape your fate amidst infinite opportunities.",
      discoverPrologue: "discover prologue",
      joinZentry: "Join Zentry",
      letsBuildGamingEra: "let's build the new era of gaming together.",
      contactUs: "contact us",
      allRightsReserved: "©ES - All rights reserved",
      privacyPolicy: "Privacy Policy",
      // Navbar
      home: "Home",
      aboutUs: "About Us",
      products: "Products",
      contact: "Contact",
      language: "Language",
    },
  },
  tr: {
    translation: {
      logo: "logo",
      products: "Ürünler",
      nexusVaultPrologueAboutContact: "Nexus Kasası Prolog Hakkında İletişim",
      gaming: "Oyun",
      redefine: "yeniden tanımla",
      enterMetagameLayer: "Metagame Katmanına Gir",
      unleashPlayEconomy: "Oyun Ekonomisini Serbest Bırak",
      watchTrailer: "Fragmanı İzle",
      welcomeToZentry: "Zentry'ye Hoş Geldiniz",
      discover: "Keşfet",
      worldsLargestSharedAdventure: "dünyanın en büyük paylaşılan macerası",
      gameOfGamesBegins: "Oyunların Oyunu başlıyor - hayatınız artık destansı bir MMORPG",
      unitePlayers: "Zentry, sayısız oyun ve platformdan her oyuncuyu birleştirir",
      background: "Arka Plan",
      intoMetagameLayer: "Metagame Katmanına Gir",
      immerseExperience:
        "Zengin ve sürekli genişleyen bir evrende kendinizi kaybedin; çeşitli ürünler dünyanızda birbirine bağlı bir deneyim oluşturuyor.",
      radiant: "parlak",
      radiantDescription:
        "Web2 ve Web3 oyunlarındaki aktivitelerinizi ödüllendirici bir maceraya dönüştüren çapraz platform metagame uygulaması.",
      zigma: "zigma",
      zigmaDescription:
        "Anime ve oyun temalı bir NFT koleksiyonu - genişletilmeye hazır bir fikri mülkiyet",
      nexus: "nexus",
      nexusDescription:
        "Web3 toplulukları için sosyal etkileşime yeni bir oyun boyutu ekleyen bir oyunlaştırılmış sosyal merkez.",
      azul: "azul",
      azulDescription:
        "Web3 toplulukları için sosyal etkileşime yeni bir oyun boyutu ekleyen bir oyunlaştırılmış sosyal merkez.",
      moreComingSoon: "Daha fazlası yakında!",
      multiversalIpWorld: "çok evrensel IP dünyası",
      storyOfHiddenRealm: "gizli bir diyarın hikayesi",
      entrance: "giriş.webp",
      whereRealmsConverge:
        "Diyarların birleştiği yerde, Zentry ve sonsuz sütun bulunur. Onun sırlarını keşfedin ve sonsuz fırsatlar arasında kaderinizi şekillendirin.",
      discoverPrologue: "prologu keşfet",
      joinZentry: "Zentry'ye Katıl",
      letsBuildGamingEra: "gelin, yeni oyun çağını birlikte inşa edelim.",
      contactUs: "bize ulaşın",
      allRightsReserved: "©ES - Tüm hakları saklıdır",
      privacyPolicy: "Gizlilik Politikası",
      // Navbar
      home: "Ana Sayfa",
      aboutUs: "Hakkımızda",
      products: "Ürünler",
      contact: "İletişim",
      language: "Dil",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Varsayılan dil (İngilizce)
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
