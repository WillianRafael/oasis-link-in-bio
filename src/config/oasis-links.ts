export type ServiceIcon = "sparkles" | "ticket" | "briefcase";
export type SocialNetwork = "instagram" | "tiktok" | "youtube" | "x" | "linkedin";

const aggregatorUrl = "https://linksoasis.wr3solutions.com";
const officialWebsiteUrl = "https://oasisflypremium.wr3solutions.com/";
const publicUrl = process.env.NEXT_PUBLIC_SITE_URL ?? aggregatorUrl;
const whatsappPhone = "5541987711041";
const whatsappMessage =
  "Olá, quero solicitar um planejamento de viagem com a Oasis. Podem me ajudar?";

export const oasisConfig = {
  publicUrl,
  brand: {
    name: "Oasis | Viagens e Experiências",
    eyebrow: "Oasis | Viagens Premium Planejadas",
    footer: "Oasis | Viagens planejadas com inteligência e curadoria.",
    logoSrc: "/assets/oasis/logo.png",
    logoAlt: "Oasis",
  },
  seo: {
    title: "Oasis | Viagens e Experiências",
    description:
      "Planejamento personalizado de voos, hospedagens e experiências com curadoria, inteligência de milhas e suporte humano do início ao fim.",
    ogImage: "/og/oasis.png",
  },
  hero: {
    title: "A forma mais tranquila de planejar uma grande viagem.",
    description:
      "Planejamento personalizado de voos, hospedagens e experiências com curadoria, inteligência de milhas e suporte humano do início ao fim.",
  },
  actions: {
    whatsapp: {
      label: "Solicitar planejamento",
      description: "Atendimento pelo WhatsApp",
      href: `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(whatsappMessage)}`,
    },
    website: {
      label: "Conhecer o site oficial",
      description: "Veja a agência, serviços e experiências",
      href: officialWebsiteUrl,
    },
  },
  services: [
    {
      title: "Melhor caminho",
      description: "Estratégias inteligentes para você viajar melhor, com mais conforto e clareza.",
      icon: "sparkles" as ServiceIcon,
    },
    {
      title: "Viagem sob medida",
      description: "Voos, hospedagens e experiências alinhadas ao seu perfil e ao estilo da sua viagem.",
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
    title: "Acompanhe a Oasis",
    description: "Inspirações, experiências e bastidores de viagem.",
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
    text: "A forma mais tranquila de planejar uma grande viagem.",
  },
} as const;

export type OasisConfig = typeof oasisConfig;
