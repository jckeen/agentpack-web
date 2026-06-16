# agentpack-web

Marketing / explainer site for **[AgentPack](https://github.com/jckeen/agent-pack)** — the
compiler and governance layer for agent configuration. Lives at **[agentpack.to](https://agentpack.to)**.

Built with **Astro + Tailwind CSS v4**, TypeScript, fully static output, near-zero client JS
(only a copy-to-clipboard button and the theme toggle). Deployed to **GitHub Pages** via GitHub
Actions on every push to `main`.

This repo is intentionally **separate** from the [`agent-pack`](https://github.com/jckeen/agent-pack)
product monorepo so the site's deploy is independent of product CI.

## Develop

```bash
pnpm install
pnpm dev          # http://localhost:4321
```

## Build & preview

```bash
pnpm build        # runs `astro check` then `astro build` → ./dist
pnpm preview      # serve the built ./dist locally
```

The build is type-checked: `pnpm build` fails on any `astro check` error.

## Project layout

```
src/
  layouts/BaseLayout.astro     # <head>, SEO/OG meta, no-flash theme script
  components/
    Nav.astro                  # sticky header + theme toggle
    Terminal.astro             # terminal-styled code block with Copy button
    ThemeToggle.astro          # dark (default) / light toggle, persisted
  pages/index.astro            # the single landing page (all sections)
  styles/global.css            # design tokens + Tailwind v4 import
public/
  CNAME                        # custom domain for GitHub Pages (agentpack.to)
  favicon.svg, og.svg          # icons / social card
  robots.txt
.github/workflows/deploy.yml   # build + deploy to GitHub Pages
```

All product claims, commands, and the portability matrix are sourced verbatim from the
`agent-pack` repo (`README.md`, `docs/cli.md`, `docs/integration-roadmap.md`). When the product
changes, re-verify the copy against those files.

## Deploy — GitHub Pages + custom domain

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds with Astro and publishes
the artifact to GitHub Pages. One-time setup:

### 1. Enable Pages

Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.

### 2. DNS at the registrar for `agentpack.to`

Add the apex `A`/`AAAA` records pointing at GitHub Pages, plus a `www` `CNAME`:

```
# Apex (agentpack.to) — A records
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153

# Apex — AAAA records (IPv6)
AAAA  @     2606:50c0:8000::153
AAAA  @     2606:50c0:8001::153
AAAA  @     2606:50c0:8002::153
AAAA  @     2606:50c0:8003::153

# www subdomain
CNAME www   jckeen.github.io.
```

> **Cloudflare DNS:** instead of the four apex `A` records, use a single proxied/flattened
> `CNAME` (ALIAS) at the apex `@ → jckeen.github.io`. Set SSL/TLS mode to **Full**, and you may
> turn the orange-cloud proxy **off** initially so GitHub can provision its own certificate.

### 3. Set the custom domain

Repo **Settings → Pages → Custom domain → `agentpack.to`** → Save. (`public/CNAME` already pins
this, so the Action re-asserts it on every deploy.) Then tick **Enforce HTTPS** once the
certificate finishes provisioning (a few minutes after DNS resolves).

### 4. Verify

```bash
curl -sSI https://agentpack.to | head -n 1     # expect: HTTP/2 200
```

Confirm the cert is valid and the site loads over HTTPS.

## License

Site code: MIT. AgentPack itself is MIT — © 2026 AgentPack contributors.
