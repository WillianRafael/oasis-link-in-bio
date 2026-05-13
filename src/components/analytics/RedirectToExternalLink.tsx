"use client";

import { useEffect } from "react";
import { trackAnalyticsEvent } from "@/lib/analytics";

type RedirectToExternalLinkProps = {
  destination: {
    href: string;
    id: string;
    label: string;
  };
};

export function RedirectToExternalLink({ destination }: RedirectToExternalLinkProps) {
  useEffect(() => {
    trackAnalyticsEvent("outbound_redirect", {
      link_id: destination.id,
      link_text: destination.label,
      link_url: destination.href,
      placement: "go_route",
    });

    const timeout = window.setTimeout(() => {
      window.location.replace(destination.href);
    }, 900);

    return () => window.clearTimeout(timeout);
  }, [destination]);

  return (
    <main className="page redirect-page" aria-label="Redirecionamento de link da Oasis">
      <section className="redirect-card">
        <p className="eyebrow">Fly Premium Oasis</p>
        <h1>Abrindo {destination.label}</h1>
        <p>Você será redirecionado em instantes.</p>
        <a href={destination.href} rel="noopener noreferrer">
          Continuar agora
        </a>
      </section>
    </main>
  );
}

