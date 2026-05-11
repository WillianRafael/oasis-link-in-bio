import { expect, test } from "@playwright/test";

test.describe("Oasis link-in-bio", () => {
  test("renders the approved aggregator on the root route", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator('main[aria-label="Agregador de links da Oasis"]')).toBeVisible();
    await expect(page.locator(".site-home")).toHaveCount(0);
    await expect(
      page.getByRole("heading", { name: "A forma mais tranquila de planejar uma grande viagem." }),
    ).toBeVisible();
    await expect(page.getByText("Viagens premium pelo caminho mais inteligente.")).toHaveCount(0);
    await expect(page.getByText("Um site que vende tranquilidade antes de vender destino.")).toHaveCount(0);
    await expect(page.getByText("WR3 Cybertech & Travel Solutions")).toHaveCount(0);
  });

  test("keeps the commercial links pointed to the right destinations", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      "https://linksoasis.wr3solutions.com",
    );
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
      "content",
      "https://linksoasis.wr3solutions.com",
    );

    const whatsapp = page.getByRole("link", { name: /Solicitar planejamento/i });
    await expect(whatsapp).toHaveAttribute(
      "href",
      /https:\/\/wa\.me\/5541987711041\?text=Ol%C3%A1/,
    );
    await expect(whatsapp).toHaveAttribute("data-analytics-id", "whatsapp");
    await expect(whatsapp).toHaveAttribute("target", "_blank");
    await expect(whatsapp).toHaveAttribute("rel", "noopener noreferrer");

    const officialSite = page.getByRole("link", { name: /Conhecer o site oficial/i });
    await expect(officialSite).toHaveAttribute(
      "href",
      "https://oasisflypremium.wr3solutions.com/",
    );
    await expect(officialSite).toHaveAttribute("data-analytics-id", "official_site");
    await expect(page.getByText("Veja a agência, serviços e experiências")).toBeVisible();
  });

  test("shows the final copy and useful service cards", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByText("Atendimento pelo WhatsApp")).toBeVisible();
    await expect(page.getByText("Atendimento rápido pelo WhatsApp")).toHaveCount(0);

    await expect(page.getByText("Melhor caminho")).toBeVisible();
    await expect(
      page.getByText("Estratégias inteligentes para você viajar melhor, com mais conforto e clareza."),
    ).toBeVisible();
    await expect(page.getByText("Viagem sob medida")).toBeVisible();
    await expect(
      page.getByText("Voos, hospedagens e experiências alinhadas ao seu perfil e ao estilo da sua viagem."),
    ).toBeVisible();
    await expect(page.getByText("Suporte humano", { exact: true })).toBeVisible();
    await expect(page.getByText("Acompanhamento antes, durante e depois da viagem.")).toBeVisible();

    await expect(page.getByText("Oasis | Viagens planejadas com inteligência e curadoria.")).toBeVisible();
    await expect(page.getByText("Copiar link")).toHaveCount(0);
  });

  test("keeps trust signals and social links available", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator('[aria-label="Empresa cadastrada no CADASTUR"]')).toBeVisible();
    await expect(page.getByText("Agência de turismo cadastrada no Ministério do Turismo")).toBeVisible();
    await expect(page.getByText("Acompanhe a Oasis")).toBeVisible();
    await expect(page.getByText("Inspirações, experiências e bastidores de viagem.")).toBeVisible();
    await expect(page.getByText("REDES E CONTEÚDO")).toHaveCount(0);
    await expect(page.getByText("destinos, dicas e novidades")).toHaveCount(0);

    await expect(page.getByRole("link", { name: /Instagram/i })).toHaveAttribute(
      "href",
      "https://www.instagram.com/flypremium.oasis",
    );
    await expect(page.getByRole("link", { name: /Instagram/i })).toHaveAttribute("data-analytics-id", "instagram");
    await expect(page.getByRole("link", { name: /TikTok/i })).toHaveAttribute(
      "href",
      "https://www.tiktok.com/@flypremium.oasis",
    );
    await expect(page.getByRole("link", { name: /TikTok/i })).toHaveAttribute("data-analytics-id", "tiktok");
    await expect(page.getByRole("link", { name: /YouTube/i })).toHaveAttribute(
      "href",
      "https://www.youtube.com/@FlyPremiumOasis?sub_confirmation=1",
    );
    await expect(page.getByRole("link", { name: /YouTube/i })).toHaveAttribute("data-analytics-id", "youtube");
    await expect(page.getByRole("link", { name: /^X/i })).toHaveAttribute("href", "https://x.com/flypremiumoasis");
    await expect(page.getByRole("link", { name: /^X/i })).toHaveAttribute("data-analytics-id", "x");
    await expect(page.getByRole("link", { name: /LinkedIn/i })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/flypremium-oasis/",
    );
    await expect(page.getByRole("link", { name: /LinkedIn/i })).toHaveAttribute("data-analytics-id", "linkedin");
  });

  test("does not overflow horizontally on a narrow mobile viewport", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    await expect(page.locator(".profile")).toBeVisible();

    const viewport = await page.evaluate(() => ({
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
    }));

    expect(viewport.scrollWidth).toBeLessThanOrEqual(viewport.clientWidth + 1);
  });
});
