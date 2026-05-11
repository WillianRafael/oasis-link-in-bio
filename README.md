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
npm run test:e2e
```

Ou rode tudo de uma vez:

```bash
npm run check
```

## Configuração

Defina `NEXT_PUBLIC_SITE_URL` com a URL pública final da página. Esse valor é usado em canonical, Open Graph e compartilhamento.

Domínio atual do agregador:

```bash
NEXT_PUBLIC_SITE_URL=https://linksoasis.wr3solutions.com
```

Os textos, links e metadados ficam em `src/config/oasis-links.ts`.
