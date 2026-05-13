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

## Analytics

O projeto usa duas camadas sem custo obrigatório:

- Vercel Web Analytics para visitas, páginas acessadas e cliques rastreados por rotas `/go/...`, dentro do limite gratuito da Vercel Hobby.
- Google Analytics 4 opcional para eventos de clique detalhados, usando `NEXT_PUBLIC_GA_MEASUREMENT_ID`.

Os botões externos abrem primeiro uma rota interna curta, como `/go/whatsapp` ou `/go/instagram`, e redirecionam em seguida. Isso permite ver os cliques como páginas no painel gratuito da Vercel, sem depender de eventos pagos.

Para ativar também os eventos no GA4, crie uma propriedade Web no Google Analytics e configure a variável abaixo na Vercel:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Eventos enviados:

- `click_whatsapp`
- `click_official_site`
- `click_instagram`
- `click_tiktok`
- `click_youtube`
- `click_x`
- `click_linkedin`
- `click_logo`
- `click_share`
- `share_link_copied`
- `share_native_completed`
