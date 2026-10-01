# Changelog

## 2026-10-01 — Dependency audit clean

- `astro` 7.2.0 → 7.3.5 (7.3.3 via the nightly dep PR #44, then 7.3.5),
  `@astrojs/sitemap` 3.7.4, `typescript` 5.9.3. `pnpm audit` reports no known
  vulnerabilities (was 1 critical, 9 high, 4 moderate — all build-toolchain:
  `astro`, `sharp`, `fast-uri`, `js-yaml`, `svgo`, `smol-toml`, `devalue`).
  Closes #11 and the 2026-09-20 security sweep (#43).
- Removed the `pnpm.overrides` block from `package.json`: every pin it carried
  (`esbuild`, `svgo`, `fast-uri`, `yaml`, `postcss`) is now satisfied by the
  natural resolution, and the audit stays clean without it.
- Built output compared before/after: `index.html` identical apart from the
  generator version; CSS gains a `-webkit-mask-image` prefix; the sitemap
  `<loc>` is now `https://agentpack.to/`, matching the canonical URL.

## 2026-10-01 — CI workflow

- Added `.github/workflows/ci.yml`: on every pull request and push to `main`,
  install from the frozen lockfile and run `pnpm build` (`astro check` +
  `astro build`). Pull requests previously had no checks at all, which blocked
  auto-merge of routine dependency PRs (#37).

## 2026-08-14 — Agent Plugins 1.0 on the landing page

- Landing page mentions Agent Plugins 1.0 as a compile target.

## 2026-08-10 — Astro 7

- Upgraded `astro` 6.4.8 → 7.1.6 (#12). Breaking changes reviewed against the
  site: the Rust compiler is the only compiler (stricter about unclosed tags),
  Vite 8 / Rolldown replaces Vite 7, Node minimum is `>=22.12.0`, and
  `src/fetch.ts` is a reserved filename. None required source changes — the
  site is a single static page with no content collections, adapters, or
  experimental flags.
- Nightly dependency audits merged (#9, #16).

## 2026-07-30 — Routine-report fixes

- Marked the operator pending items below as done, corrected the flow chip on
  the landing page from `compile` to `pack export`, added `LICENSE` (MIT), and
  cleared the `esbuild` advisory (#10).

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

- ~~Registrar DNS for `agentpack.to` (apex A/AAAA + `www` CNAME), then Enforce HTTPS.~~
  Done — `https://agentpack.to` serves HTTP 200 from GitHub Pages (verified 2026-07-30).
- ~~Flip `jckeen/agent-pack` public so the hero command and GitHub links resolve.~~
  Done — repo visibility is `public` (verified 2026-07-30).
