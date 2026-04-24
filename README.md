# Yuraz Lab — Portfolio Landing

Personal portfolio site for Yuriy Zuev (Yuraz Lab).

**Live:** https://yurazlab.ru  
**Vercel:** https://yurazlab.vercel.app

## Stack

- Next.js 16 + TypeScript
- Tailwind CSS
- lucide-react
- Vercel (hosting + auto-deploy)

## Local development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy

Auto-deploy on every `git push` to `main` via Vercel + GitHub.

Manual deploy:
```bash
vercel --prod
```

## Structure

```
app/
  layout.tsx        # fonts, metadata, SEO
  page.tsx          # page assembly
  globals.css       # utilities: .card, .btn-primary, .section
components/
  Navbar.tsx        # sticky nav, mobile menu
  Hero.tsx          # headline, CTA, stat badges
  CurrentProjects.tsx  # "what I'm building now"
  Services.tsx      # 4 service cards
  HowIWork.tsx      # 5-step process
  About.tsx         # story, stack, bento facts, photo
  Contact.tsx       # Telegram + email
  Footer.tsx
public/
  photo.jpg         # portrait photo
```

## Contacts on site

- Telegram: @yurazlab
- Email: yurazlab@gmail.com

## DNS

Domain `yurazlab.ru` registered on reg.ru.  
A record: `@ → 76.76.21.21` (Vercel)  
A record: `www → 76.76.21.21` (Vercel)
