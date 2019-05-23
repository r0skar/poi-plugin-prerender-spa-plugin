exports.name = 'prerender-spa-plugin'

// Only use this plugin when the target is `web`.
exports.when = api => api.config.output.target === 'web'

exports.cli = api => {
  if (!api.isProd) return
  api.command.option('--prerender', 'Prerender website')
}

exports.apply = (api, options = {}) => {
  api.hook('createWebpackChain', config => {
    if (!api.cli.options.prerender) return
    const PrerenderSPAPlugin = require('prerender-spa-plugin')
    config.plugin('prerender-spa-plugin').use(PrerenderSPAPlugin, [ options ])
  })
}
