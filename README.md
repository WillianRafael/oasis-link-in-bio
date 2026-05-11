# Oasis Link-in-Bio

Landing/link-in-bio oficial da Oasis, construída com Next.js App Router, TypeScript e Tailwind.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Validação

```bash
npm run lint
npm run typecheck
npm run build
```

## Configuração

Defina `NEXT_PUBLIC_SITE_URL` com a URL pública final da página. Esse valor é usado em canonical, Open Graph e compartilhamento.

Os textos, links e metadados ficam em `src/config/oasis-links.ts`.
