"use client";

import { Copy, Share2 } from "lucide-react";
import { type ReactNode, useRef, useState } from "react";
import { Toast } from "./Toast";

type ShareButtonProps = {
  mode: "share" | "copy";
  url: string;
  share: {
    title: string;
    text: string;
  };
  className?: string;
  ariaLabel?: string;
  children?: ReactNode;
};

export function ShareButton({ mode, url, share, className, ariaLabel, children }: ShareButtonProps) {
  const [toast, setToast] = useState({ message: "Link copiado", visible: false });
  const timeoutRef = useRef<number | null>(null);

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
      await navigator.clipboard.writeText(url);
      showToast("Link copiado");
    } catch {
      showToast("Não foi possível copiar");
    }
  }

  async function handleClick() {
    if (mode === "share" && navigator.share) {
      try {
        await navigator.share({
          title: share.title,
          text: share.text,
          url,
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
        {mode === "share" ? <Share2 aria-hidden="true" /> : <Copy aria-hidden="true" />}
        {children}
      </button>
      <Toast message={toast.message} visible={toast.visible} />
    </>
  );
}
