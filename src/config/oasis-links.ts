export type ServiceIcon = "sparkles" | "ticket" | "briefcase";
export type SocialNetwork = "instagram" | "tiktok" | "youtube" | "x" | "linkedin";

const officialWebsiteUrl = "https://flypremium.com.br/oasis/";
const publicUrl = process.env.NEXT_PUBLIC_SITE_URL ?? officialWebsiteUrl;
const whatsappPhone = "5541987711041";
const whatsappMessage =
  "Olá, quero solicitar uma cotação de viagem com a Oasis. Podem me ajudar?";

export const oasisConfig = {
  publicUrl,
  brand: {
    name: "Oasis | Viagens e Experiências",
    eyebrow: "Fly Premium Oasis",
    logoSrc: "/assets/oasis/logo.png",
    logoAlt: "Oasis",
  },
  seo: {
    title: "Oasis | Viagens e Experiências",
    description:
      "Viagens premium pelo caminho mais inteligente: milhas, tarifas, operadoras e consolidadoras.",
    ogImage: "/og/oasis.png",
  },
  hero: {
    title: "Viagens premium pelo caminho mais inteligente.",
    description:
      "Cotamos sua viagem entre milhas, tarifas, operadoras e consolidadoras para encontrar a alternativa ideal para o seu perfil.",
  },
  actions: {
    whatsapp: {
      label: "Solicitar cotação",
      description: "Atendimento pelo WhatsApp",
      href: `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(whatsappMessage)}`,
    },
    website: {
      label: "Conhecer o site oficial",
      href: officialWebsiteUrl,
    },
  },
  services: [
    {
      title: "Melhor caminho",
      description: "Milhas, tarifas, operadoras e consolidadoras comparadas para você.",
      icon: "sparkles" as ServiceIcon,
    },
    {
      title: "Viagem sob medida",
      description: "Aéreo, hospedagem e experiências alinhadas ao seu perfil.",
      icon: "ticket" as ServiceIcon,
    },
    {
      title: "Suporte humano",
      description: "Acompanhamento antes, durante e depois da viagem.",
      icon: "briefcase" as ServiceIcon,
    },
  ],
  cadastur: {
    logoSrc: "/assets/oasis/cadastur-logo.svg",
    logoAlt: "Cadastur - Fazendo o turismo legal.",
    label: "Agência de turismo cadastrada no Ministério do Turismo",
  },
  socialIntro: {
    title: "Redes e conteúdo",
    description: "Acompanhe destinos, dicas e novidades",
  },
  socials: [
    {
      network: "instagram" as SocialNetwork,
      label: "Instagram",
      handle: "@flypremium.oasis",
      href: "https://www.instagram.com/flypremium.oasis",
    },
    {
      network: "tiktok" as SocialNetwork,
      label: "TikTok",
      handle: "@flypremium.oasis",
      href: "https://www.tiktok.com/@flypremium.oasis",
    },
    {
      network: "youtube" as SocialNetwork,
      label: "YouTube",
      handle: "@FlyPremiumOasis",
      href: "https://www.youtube.com/@FlyPremiumOasis?sub_confirmation=1",
    },
    {
      network: "x" as SocialNetwork,
      label: "X",
      handle: "@flypremiumoasis",
      href: "https://x.com/flypremiumoasis",
    },
    {
      network: "linkedin" as SocialNetwork,
      label: "LinkedIn",
      handle: "flypremium-oasis",
      href: "https://www.linkedin.com/in/flypremium-oasis/",
    },
  ],
  share: {
    title: "Oasis | Viagens e Experiências",
    text: "Viagens premium pelo caminho mais inteligente.",
  },
} as const;

export type OasisConfig = typeof oasisConfig;
