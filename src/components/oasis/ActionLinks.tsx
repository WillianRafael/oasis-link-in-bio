import { ArrowUpRight, Globe2, MessageCircle } from "lucide-react";
import { TrackedLink } from "@/components/analytics/TrackedLink";

type ActionLinksProps = {
  actions: {
    whatsapp: {
      label: string;
      description: string;
      href: string;
    };
    website: {
      label: string;
      description: string;
      href: string;
    };
  };
};

export function ActionLinks({ actions }: ActionLinksProps) {
  return (
    <section className="actions" aria-label="Ações principais">
      <TrackedLink
        className="primary-action"
        href={actions.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        analytics={{
          eventName: "click_whatsapp",
          linkId: "whatsapp",
          linkText: actions.whatsapp.label,
          linkUrl: actions.whatsapp.href,
          placement: "primary_action",
        }}
      >
        <span className="action-icon">
          <MessageCircle aria-hidden="true" />
        </span>
        <span className="action-copy">
          <strong>{actions.whatsapp.label}</strong>
          <small>{actions.whatsapp.description}</small>
        </span>
        <ArrowUpRight aria-hidden="true" />
      </TrackedLink>

      <TrackedLink
        className="secondary-action"
        href={actions.website.href}
        target="_blank"
        rel="noopener noreferrer"
        analytics={{
          eventName: "click_official_site",
          linkId: "official_site",
          linkText: actions.website.label,
          linkUrl: actions.website.href,
          placement: "secondary_action",
        }}
      >
        <span className="action-icon secondary-icon">
          <Globe2 aria-hidden="true" />
        </span>
        <span className="action-copy">
          <strong>{actions.website.label}</strong>
          <small>{actions.website.description}</small>
        </span>
        <ArrowUpRight aria-hidden="true" />
      </TrackedLink>
    </section>
  );
}
