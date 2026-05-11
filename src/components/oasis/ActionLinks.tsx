import { ArrowUpRight, Globe2, MessageCircle } from "lucide-react";

type ActionLinksProps = {
  actions: {
    whatsapp: {
      label: string;
      description: string;
      href: string;
    };
    website: {
      label: string;
      href: string;
    };
  };
};

export function ActionLinks({ actions }: ActionLinksProps) {
  return (
    <section className="actions" aria-label="Ações principais">
      <a className="primary-action" href={actions.whatsapp.href} target="_blank" rel="noopener noreferrer">
        <span className="action-icon">
          <MessageCircle aria-hidden="true" />
        </span>
        <span className="action-copy">
          <strong>{actions.whatsapp.label}</strong>
          <small>{actions.whatsapp.description}</small>
        </span>
        <ArrowUpRight aria-hidden="true" />
      </a>

      <a className="secondary-action" href={actions.website.href} target="_blank" rel="noopener noreferrer">
        <Globe2 aria-hidden="true" />
        <span>{actions.website.label}</span>
        <ArrowUpRight aria-hidden="true" />
      </a>
    </section>
  );
}
