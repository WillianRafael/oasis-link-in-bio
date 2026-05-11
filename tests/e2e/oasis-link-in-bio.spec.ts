import { expect, test } from "@playwright/test";

test.describe("Oasis link-in-bio", () => {
  test("renders the approved aggregator on the root route", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator('main[aria-label="Agregador de links da Oasis"]')).toBeVisible();
    await expect(page.locator(".site-home")).toHaveCount(0);
    await expect(page.getByRole("heading", { name: "Viagens premium pelo caminho mais inteligente." })).toBeVisible();
    await expect(page.getByText("Um site que vende tranquilidade antes de vender destino.")).toHaveCount(0);
    await expect(page.getByText("WR3 Cybertech & Travel Solutions")).toHaveCount(0);
  });

  test("keeps the commercial links pointed to the right destinations", async ({ page }) => {
    await page.goto("/");

    const whatsapp = page.getByRole("link", { name: /Solicitar cotação/i });
    await expect(whatsapp).toHaveAttribute(
      "href",
      /https:\/\/wa\.me\/5541987711041\?text=Ol%C3%A1/,
    );
    await expect(whatsapp).toHaveAttribute("target", "_blank");
    await expect(whatsapp).toHaveAttribute("rel", "noopener noreferrer");

    await expect(page.getByRole("link", { name: /Conhecer o site oficial/i })).toHaveAttribute(
      "href",
      "https://flypremium.com.br/oasis/",
    );
  });

  test("shows the final copy and useful service cards", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByText("Atendimento pelo WhatsApp")).toBeVisible();
    await expect(page.getByText("Atendimento rápido pelo WhatsApp")).toHaveCount(0);

    await expect(page.getByText("Melhor caminho")).toBeVisible();
    await expect(page.getByText("Milhas, tarifas, operadoras e consolidadoras comparadas para você.")).toBeVisible();
    await expect(page.getByText("Viagem sob medida")).toBeVisible();
    await expect(page.getByText("Aéreo, hospedagem e experiências alinhadas ao seu perfil.")).toBeVisible();
    await expect(page.getByText("Suporte humano")).toBeVisible();
    await expect(page.getByText("Acompanhamento antes, durante e depois da viagem.")).toBeVisible();

    await expect(page.getByText("Oasis | Viagens e Experiências")).toBeVisible();
    await expect(page.getByText("Copiar link")).toHaveCount(0);
  });

  test("keeps trust signals and social links available", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator('[aria-label="Empresa cadastrada no CADASTUR"]')).toBeVisible();
    await expect(page.getByText("Agência de turismo cadastrada no Ministério do Turismo")).toBeVisible();

    await expect(page.getByRole("link", { name: /Instagram/i })).toHaveAttribute(
      "href",
      "https://www.instagram.com/flypremium.oasis",
    );
    await expect(page.getByRole("link", { name: /TikTok/i })).toHaveAttribute(
      "href",
      "https://www.tiktok.com/@flypremium.oasis",
    );
    await expect(page.getByRole("link", { name: /YouTube/i })).toHaveAttribute(
      "href",
      "https://www.youtube.com/@FlyPremiumOasis?sub_confirmation=1",
    );
    await expect(page.getByRole("link", { name: /^X/i })).toHaveAttribute("href", "https://x.com/flypremiumoasis");
    await expect(page.getByRole("link", { name: /LinkedIn/i })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/flypremium-oasis/",
    );
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
