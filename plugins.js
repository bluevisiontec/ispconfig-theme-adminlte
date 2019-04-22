const Plugins = [
  // AdminLTE
  {
    from: 'node_modules/admin-lte/dist/',
    to  : 'plugins/admin-lte/'
  },
  // AdminLTE Plugins
  {
    from: 'node_modules/admin-lte/plugins/',
    to  : 'plugins'
  }
]

const ncp     = require('ncp').ncp

Plugins.forEach((module) => {
    ncp(module.from, module.to, error => {
    if (error) {
        console.error(`Error: ${error}`)
    }
    })
})
