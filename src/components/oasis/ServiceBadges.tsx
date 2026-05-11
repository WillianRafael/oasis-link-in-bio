import { Briefcase, Sparkles, Ticket } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ServiceIcon } from "@/config/oasis-links";

const serviceIcons = {
  sparkles: Sparkles,
  ticket: Ticket,
  briefcase: Briefcase,
} satisfies Record<ServiceIcon, LucideIcon>;

type ServiceBadgesProps = {
  services: readonly {
    label: string;
    icon: ServiceIcon;
  }[];
};

export function ServiceBadges({ services }: ServiceBadgesProps) {
  return (
    <div className="services" aria-label="Diferenciais">
      {services.map((service) => {
        const Icon = serviceIcons[service.icon];

        return (
          <span key={service.label}>
            <Icon aria-hidden="true" />
            {service.label}
          </span>
        );
      })}
    </div>
  );
}
