# NODE version
14.17.0
# notes
had to downgraded webpack from 5 to version 4 "npm i webpack@4"
had to downgraded sass from ^1.43.4 to "sass": "1.32.13" to allow the "/" for division calc in scss,

# Nuxt 3 Minimal Starter
We recommend to look at the [documentation](https://v3.nuxtjs.org).

## Setup
Make sure to install the dependencies

```bash
npm install
```

## Storybook
```bash
npm run storybook
```

## Development
Start the development server on http://localhost:3000

```bash
npm run dev
```

#### Notes

If you have trouble starting the development server, make sure you have the latest Nuxt installed by running:

```bash
npm install nuxt3@latest
```

## Production
Build the application for production:

```bash
npm run build
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).

