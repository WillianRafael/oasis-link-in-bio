import { ProfileCard } from "@/components/oasis/ProfileCard";
import { oasisConfig } from "@/config/oasis-links";

export default function Home() {
  return (
    <main className="page" aria-label="Agregador de links da Oasis">
      <ProfileCard config={oasisConfig} />
    </main>
  );
}
