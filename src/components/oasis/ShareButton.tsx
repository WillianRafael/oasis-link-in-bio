"use client";

import { Share2 } from "lucide-react";
import { type ReactNode, useRef, useState } from "react";
import { trackAnalyticsEvent } from "@/lib/analytics";
import { Toast } from "./Toast";

type ShareButtonProps = {
  url: string;
  share: {
    title: string;
    text: string;
  };
  className?: string;
  ariaLabel?: string;
  children?: ReactNode;
};

export function ShareButton({ url, share, className, ariaLabel, children }: ShareButtonProps) {
  const [toast, setToast] = useState({ message: "Link copiado", visible: false });
  const timeoutRef = useRef<number | null>(null);

  function getPageUrl() {
    if (typeof window === "undefined") {
      return url;
    }

    const currentUrl = new URL(window.location.href);
    currentUrl.hash = "";
    return currentUrl.toString();
  }

  function showToast(message: string) {
    setToast({ message, visible: true });
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      setToast((current) => ({ ...current, visible: false }));
    }, 1900);
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(getPageUrl());
      trackAnalyticsEvent("share_link_copied", {
        placement: "profile_top",
      });
      showToast("Link copiado");
    } catch {
      showToast("Não foi possível copiar");
    }
  }

  async function handleClick() {
    const pageUrl = getPageUrl();
    trackAnalyticsEvent("click_share", {
      placement: "profile_top",
    });

    if (navigator.share) {
      try {
        await navigator.share({
          title: share.title,
          text: share.text,
          url: pageUrl,
        });
        trackAnalyticsEvent("share_native_completed", {
          placement: "profile_top",
        });
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }
      }
    }

    await copyLink();
  }

  return (
    <>
      <button className={className} type="button" aria-label={ariaLabel} onClick={handleClick}>
        <Share2 aria-hidden="true" />
        {children}
      </button>
      <Toast message={toast.message} visible={toast.visible} />
    </>
  );
}
