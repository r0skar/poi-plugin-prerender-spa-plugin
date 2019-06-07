# poi-plugin-prerender-spa-plugin

## Installation

`yarn add -D poi-plugin-prerender-spa-plugin`


## Configuration

```js
export default {
  plugins: [
    {
      resolve: 'prerender-spa-plugin',
      options: {
        staticDir: resolve(__dirname, 'dist'),
        routes: [ '/' ]
      }
    }
  ]
}
```

For a list with all options, check out https://github.com/chrisvfritz/prerender-spa-plugin.

## Disclaimer

This plugin was developed for internal usage and is heavily customized to my particular workflow.
