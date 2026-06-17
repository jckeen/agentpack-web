# Changelog

## 2026-06-16 — Initial build

- Scaffolded the AgentPack explainer site: Astro 6 + Tailwind v4, TypeScript,
  fully static, near-zero client JS (copy button + theme toggle only).
- Single landing page with all sections: hero install one-liner, problem cards,
  pack→compile→install flow, quickstart, governance, honest per-atom portability
  matrix, footer. Dark-default with a persisted light toggle.
- Copy sourced verbatim from the `agent-pack` repo (README, docs/cli.md,
  docs/integration-roadmap.md). Honesty preserved: not on npm yet, registry
  optional & not-yet-live, signing gated on the registry → quickstart verifies
  with `--chain` (works today), portability ceilings shown honestly.
- GitHub Pages deploy via Actions on push to `main`; `public/CNAME` =
  `agentpack.to`; custom domain set on the Pages config. Opted CI actions into
  the Node 24 runtime.
- Lighthouse: performance 100, accessibility 100, best-practices 100, SEO 100.

### Pending (operator)

- Registrar DNS for `agentpack.to` (apex A/AAAA + `www` CNAME), then Enforce HTTPS.
- Flip `jckeen/agent-pack` public so the hero command and GitHub links resolve.
