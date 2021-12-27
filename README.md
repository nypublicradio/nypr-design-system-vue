# Initial Install process

Started with a base Nuxt3 project "npx nuxi init nuxt3-app"
Set up local eslint etc. "npx eslint --init"
Installed Storybook with "npx sb init"
Installed Nuxt Storybook "npm install --save-dev @nuxtjs/storybook postcss@latest"
added
" .nuxt-storybook
storybook-static
" to .gitignore
added
" storybook: {
// Options
}
" to nuxt.config.js
Downgraded webpack to version 4 "npm i webpack@4"

# Nuxt 3 Minimal Starter

We recommend to look at the [documentation](https://v3.nuxtjs.org).

## Setup

Make sure to install the dependencies

```bash
npm install
```

## Development

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

## Storybook

```bash
npm run storybook
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).
