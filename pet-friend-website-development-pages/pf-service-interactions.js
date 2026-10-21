(() => {
  const select = (cards, active) => {
    cards.forEach((card) => {
      card.setAttribute("data-pf-service-selected", card === active ? "true" : "false");
    });
  };

  const setup = () => {
    const cards = Array.from(document.querySelectorAll("main article")).filter((card) =>
      Array.from(card.querySelectorAll('a[href]')).some((link) => {
        try {
          return /\/services\/[^/?#]+/.test(new URL(link.href, window.location.href).pathname);
        } catch {
          return false;
        }
      }),
    );
    if (!cards.length) return;

    cards.forEach((card) => {
      card.setAttribute("data-pf-service-card", "");
      card.setAttribute("data-pf-service-selected", "false");
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "group");
    });

    const path = window.location.pathname;
    const initialIndex = path.includes("/services/") ? cards.length - 1 : Math.min(2, cards.length - 1);
    select(cards, cards[initialIndex]);

    document.addEventListener("click", (event) => {
      const card = event.target instanceof Element ? event.target.closest("[data-pf-service-card]") : null;
      if (card && cards.includes(card)) select(cards, card);
    }, true);

    document.addEventListener("focusin", (event) => {
      const card = event.target instanceof Element ? event.target.closest("[data-pf-service-card]") : null;
      if (card && cards.includes(card)) select(cards, card);
    });

    document.addEventListener("keydown", (event) => {
      const card = event.target;
      if (!(card instanceof HTMLElement) || !cards.includes(card)) return;
      if (event.key === "Enter" || event.key === " ") {
        if (event.key === " ") event.preventDefault();
        select(cards, card);
      }
    });
  };

  if (document.readyState === "complete") window.setTimeout(setup, 350);
  else window.addEventListener("load", () => window.setTimeout(setup, 350), { once: true });
})();
