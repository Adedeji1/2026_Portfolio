# Afolabi Adedeji portfolio

Next.js (App Router), TypeScript strict, Tailwind CSS. Package manager: Yarn.

    yarn install
    yarn dev
    yarn typecheck && yarn lint && yarn build

## Assets to add (the UI switches over automatically)
- `public/resume.pdf` enables every Resume / Download Resume button
- `public/portrait.jpg` replaces the AA monogram in the hero (4:5, about 800x1000)
- `public/projects/*.png`, then set `image`, `demo`, `repo` in `src/data/content.ts`
- Social profile URLs in `src/data/site.ts` (empty ones stay hidden)

## Contact form
Set `RESEND_API_KEY` and `CONTACT_TO_EMAIL` (see `.env.example`) in Vercel. Without them the section shows a mailto button instead.
