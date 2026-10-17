# MyDay — Personal Dashboard

A responsive React + TypeScript + Vite + Tailwind CSS demo dashboard with three interactive controls:
- Login/Logout (local state only; **not** real authentication)
- Notifications (local demo only)
- Online/Offline (a simulated status toggle; **not** actual connectivity detection)

## Development

Requires Node.js 22.x (or a Vite 8 compatible version) and npm.

```bash
npm ci
npm run dev
```

Open the local URL that Vite prints, usually `http://localhost:5173/`.

## Production build

```bash
npm run build
npm run preview
```

## Publish on GitHub Pages

1. Create a new repository named **`dashboard-login-project`**.
2. Push the contents of this **top-level folder** to `main`, including `.github/workflows/deploy.yml`.
3. GitHub repository → **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. Check the **Actions → Deploy MyDay Dashboard** run. It should build and deploy on every push to `main`.
5. After a successful run, the site will be at:

   `https://aqibhussainkhan.github.io/dashboard-login-project/`

**Important:** The `base` path is configured in `vite.config.ts` for the repository name `dashboard-login-project`. If you choose another GitHub repo name, update the `base` path accordingly.

The app is frontend-only. Login/logout does not use usernames, passwords, Supabase, or any authentication provider; the status controls are demo simulations.
