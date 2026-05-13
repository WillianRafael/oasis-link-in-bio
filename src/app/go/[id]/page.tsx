import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RedirectToExternalLink } from "@/components/analytics/RedirectToExternalLink";
import { getTrackedLink, trackedLinkDestinations } from "@/config/oasis-tracked-links";

type GoPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export const metadata: Metadata = {
  title: "Abrindo link | Oasis",
  robots: {
    index: false,
    follow: false,
  },
};

export function generateStaticParams() {
  return Object.keys(trackedLinkDestinations).map((id) => ({ id }));
}

export default async function GoPage({ params }: GoPageProps) {
  const { id } = await params;
  const destination = getTrackedLink(id);

  if (!destination) {
    notFound();
  }

  return <RedirectToExternalLink destination={destination} />;
}

