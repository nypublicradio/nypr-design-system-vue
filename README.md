# New York Public Radio Design System

## Project setup
If vue isn’t installed, run 
```
npm install -g @vue/cli
```

Then
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build
```

#### Launches Storybook
```
npm run storybook
```

#### Builds Storybook
```
npm run build-storybook
```
See Storybook at [http://radial.kimlarocca.com](http://radial.kimlarocca.com)

Pushing to main will trigger a [Storybook deployment on CircleCi](https://app.circleci.com/pipelines/github/nypublicradio/nypr-design-system-vue) 

#### Runs unit tests
```
npm run test
```

#### Lints and fixes files
```
npm run lint
```

See the Vue CLI [Configuration Reference](https://cli.vuejs.org/config/) for more!

### Local Development
Create a global symlink for this package:
```
npm link (or sudo npm link)
```
Tell your application to use the global symlink:
```
npm link nypr-design-system-vue
```
Refresh your application after changes:
```
npm link nypr-design-system-vue
```
Unlink it:
```
npm unlink
```

### Nuxt configuration

Add this to your nuxt.config.js file to import components for use with SSR:

```
build: {
  transpile: ['nypr-design-system-vue']
}
```
