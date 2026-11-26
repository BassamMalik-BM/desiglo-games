# games.desiglo.com

Desiglo Games: React + TypeScript + Vite + Tailwind + Framer Motion.

    npm install
    npm run dev      # local preview
    npm run build    # production build (dist/)

## Adding or updating games
Everything lives in `src/data/games.ts`.
- Turn on the Play button: add `playUrl: "https://..."` to Glass Blast.
- Use a real cover: import an image at the top of the file and set `image`.
- Launch a placeholder: replace one "Project 0X" entry with real details and set `status: "released"`.

## Deploying on Vercel as a subdomain
1. Push this folder to its own GitHub repo and import it in Vercel (framework: Vite).
2. In the Vercel project → Settings → Domains, add `games.desiglo.com`.
3. Vercel will show a CNAME record (usually `games` → `cname.vercel-dns.com`); add it where desiglo.com's DNS is managed.
