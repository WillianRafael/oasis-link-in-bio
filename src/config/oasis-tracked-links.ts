import { oasisConfig } from "./oasis-links";

export type TrackedLinkId =
  | "instagram"
  | "linkedin"
  | "logo"
  | "official-site"
  | "tiktok"
  | "whatsapp"
  | "x"
  | "youtube";

export type TrackedLinkDestination = {
  href: string;
  id: TrackedLinkId;
  label: string;
};

export const trackedLinkDestinations: Record<TrackedLinkId, TrackedLinkDestination> = {
  whatsapp: {
    id: "whatsapp",
    label: oasisConfig.actions.whatsapp.label,
    href: oasisConfig.actions.whatsapp.href,
  },
  "official-site": {
    id: "official-site",
    label: oasisConfig.actions.website.label,
    href: oasisConfig.actions.website.href,
  },
  logo: {
    id: "logo",
    label: "Logo Oasis",
    href: oasisConfig.actions.website.href,
  },
  instagram: {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/flypremium.oasis",
  },
  tiktok: {
    id: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@flypremium.oasis",
  },
  youtube: {
    id: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@FlyPremiumOasis?sub_confirmation=1",
  },
  x: {
    id: "x",
    label: "X",
    href: "https://x.com/flypremiumoasis",
  },
  linkedin: {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/flypremium-oasis/",
  },
};

export function getTrackedLink(id: string) {
  return trackedLinkDestinations[id as TrackedLinkId];
}

export function getTrackedLinkPath(id: TrackedLinkId) {
  return `/go/${id}`;
}

