# Crypto AIOS Starter

Starter Node.js + Express + PostgreSQL backend for the Autonomous AI Investment System.

## Run locally

1. Install Node.js LTS.
2. Run `npm install`.
3. Copy `.env.example` to `.env`.
4. Put your Neon PostgreSQL connection string in `DATABASE_URL`.
5. Run `npm run dev`.
6. Open http://localhost:3000/health

## GitHub

```bash
git init
git add .
git commit -m "Initial AIOS backend"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## Render

Create a Web Service from the GitHub repository.

Build Command:
`npm install`

Start Command:
`npm start`

Add Render Environment Variable:
`DATABASE_URL=<your Neon connection string>`

## Safety

This starter is paper-trading-only and contains no live broker order execution.
