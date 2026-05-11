import Image from "next/image";
import type { OasisConfig } from "@/config/oasis-links";
import { ActionLinks } from "./ActionLinks";
import { CadasturSeal } from "./CadasturSeal";
import { Hero } from "./Hero";
import { ServiceBadges } from "./ServiceBadges";
import { ShareButton } from "./ShareButton";
import { SocialLinks } from "./SocialLinks";

type ProfileCardProps = {
  config: OasisConfig;
};

export function ProfileCard({ config }: ProfileCardProps) {
  return (
    <section className="profile" aria-labelledby="profile-title">
      <div className="profile-top">
        <a
          className="logo-link"
          href={config.actions.website.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir site da Oasis"
        >
          <Image src={config.brand.logoSrc} alt={config.brand.logoAlt} width={76} height={76} priority />
        </a>
        <ShareButton
          mode="share"
          className="share-button"
          ariaLabel="Compartilhar página"
          share={config.share}
          url={config.publicUrl}
        />
      </div>

      <Hero brand={config.brand} hero={config.hero} />
      <ActionLinks actions={config.actions} />
      <ServiceBadges services={config.services} />
      <CadasturSeal cadastur={config.cadastur} />
      <SocialLinks intro={config.socialIntro} socials={config.socials} />

      <footer className="footer">
        <span>{config.brand.name}</span>
        <ShareButton
          mode="copy"
          className="copy-button"
          share={config.share}
          url={config.publicUrl}
        >
          Copiar link
        </ShareButton>
      </footer>
    </section>
  );
}
