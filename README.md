This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Firstly, make sure you have the following packages installed:

* Node.js v18.17 or later

Then, you can run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
If you have never heard of or never used yarn, pnpm or bun, simply just use:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.jsx`. The page auto-updates as you edit the file.

## Branches
This project uses multiple branches, the 2 Branches are:

Main: the main branch, this is where the working website is getting it's code from. If a feature is working on the dev branch it will get merged into main.

Dev: The dev branch or developement branch, is mainly for developing new features, adding new content to the site or changing something from the previous merge into the main branch.

This is how i usually structure my projects so if something breaks in the code, it's in the dev branch where it won't take down the entire website. Also very helpful when running ```npm run build``` to see if the build is successful before merging with main.
