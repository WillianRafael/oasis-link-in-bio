import Image from "next/image";

type CadasturSealProps = {
  cadastur: {
    logoSrc: string;
    logoAlt: string;
    label: string;
  };
};

export function CadasturSeal({ cadastur }: CadasturSealProps) {
  return (
    <div className="cadastur-seal" aria-label="Empresa cadastrada no CADASTUR">
      <span className="cadastur-logo-card">
        <Image
          className="cadastur-logo"
          src={cadastur.logoSrc}
          alt={cadastur.logoAlt}
          width={286}
          height={73}
          unoptimized
        />
      </span>
      <span className="seal-copy">{cadastur.label}</span>
    </div>
  );
}
