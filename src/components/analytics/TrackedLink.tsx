"use client";

import { type AnchorHTMLAttributes, type MouseEvent, type ReactNode } from "react";
import { trackAnalyticsEvent } from "@/lib/analytics";

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  analytics: {
    eventName: string;
    linkId: string;
    linkText: string;
    linkUrl: string;
    placement: string;
  };
  children: ReactNode;
};

export function TrackedLink({ analytics, children, href, onClick, ...props }: TrackedLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    trackAnalyticsEvent(analytics.eventName, {
      link_id: analytics.linkId,
      link_text: analytics.linkText,
      link_url: analytics.linkUrl,
      placement: analytics.placement,
    });

    onClick?.(event);
  }

  return (
    <a href={href} data-analytics-id={analytics.linkId} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}

