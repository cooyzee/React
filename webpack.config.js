const devConfig = require('./com/webpack.dev')
// const prodConfig = require('./com/webpack.prod')

module.exports = (env, argv) => {
  if (!env) { return }

  // if (argv.build) {
  //   return prodConfig(env)
  // }

  return devConfig(env)
}