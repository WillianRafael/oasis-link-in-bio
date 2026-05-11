import { ChevronRight } from "lucide-react";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import type { SocialNetwork } from "@/config/oasis-links";

type SocialLinksProps = {
  intro: {
    title: string;
    description: string;
  };
  socials: readonly {
    network: SocialNetwork;
    label: string;
    handle: string;
    href: string;
  }[];
};

function SocialIcon({ network }: { network: SocialNetwork }) {
  if (network === "instagram") {
    return (
      <span className="social-icon instagram" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <rect x="4" y="4" width="16" height="16" rx="5" />
          <circle cx="12" cy="12" r="3.4" />
          <circle cx="17" cy="7" r="1" />
        </svg>
      </span>
    );
  }

  if (network === "tiktok") {
    return (
      <span className="social-icon tiktok" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="M14.7 3c.3 2.6 1.8 4.4 4.3 5v3.1a7.2 7.2 0 0 1-4.2-1.3v5.6c0 3.2-2.3 5.4-5.4 5.4-2.8 0-4.9-1.8-4.9-4.4 0-2.7 2.2-4.6 5.1-4.6.5 0 1 .1 1.5.2V3h3.6Zm-3.6 11.9c-.4-.2-.9-.3-1.4-.3-1.2 0-2 .7-2 1.7s.8 1.7 1.9 1.7c.9 0 1.6-.6 1.6-1.9v-1.2Z" />
        </svg>
      </span>
    );
  }

  if (network === "youtube") {
    return (
      <span className="social-icon youtube" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="M21.2 7.2a3 3 0 0 0-2.1-2.1C17.2 4.6 12 4.6 12 4.6s-5.2 0-7.1.5a3 3 0 0 0-2.1 2.1A31 31 0 0 0 2.3 12c0 1.7.2 3.4.5 4.8a3 3 0 0 0 2.1 2.1c1.9.5 7.1.5 7.1.5s5.2 0 7.1-.5a3 3 0 0 0 2.1-2.1c.3-1.4.5-3.1.5-4.8s-.2-3.4-.5-4.8Z" />
          <path className="icon-cut" d="m10 15.3 5.3-3.3L10 8.7v6.6Z" />
        </svg>
      </span>
    );
  }

  if (network === "x") {
    return (
      <span className="social-icon x-icon" aria-hidden="true">
        <span className="social-glyph">X</span>
      </span>
    );
  }

  return (
    <span className="social-icon linkedin" aria-hidden="true">
      <span className="social-glyph">in</span>
    </span>
  );
}

export function SocialLinks({ intro, socials }: SocialLinksProps) {
  return (
    <section className="social-section" aria-label="Redes sociais">
      <div className="section-title">
        <span>{intro.title}</span>
        <small>{intro.description}</small>
      </div>

      <div className="social-list">
        {socials.map((social) => (
          <TrackedLink
            className="social-link"
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            key={social.network}
            analytics={{
              eventName: `click_${social.network}`,
              linkId: social.network,
              linkText: social.label,
              linkUrl: social.href,
              placement: "social_links",
            }}
          >
            <SocialIcon network={social.network} />
            <span>
              <strong>{social.label}</strong>
              <small>{social.handle}</small>
            </span>
            <ChevronRight aria-hidden="true" />
          </TrackedLink>
        ))}
      </div>
    </section>
  );
}
