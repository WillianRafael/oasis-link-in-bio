type HeroProps = {
  brand: {
    eyebrow: string;
  };
  hero: {
    title: string;
    description: string;
  };
};

export function Hero({ brand, hero }: HeroProps) {
  return (
    <header className="hero">
      <p className="eyebrow">{brand.eyebrow}</p>
      <h1 id="profile-title">{hero.title}</h1>
      <p>{hero.description}</p>
    </header>
  );
}
