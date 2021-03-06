var fs = require('nativescript-node/fs')
var path = require('path-browserify')
var assign = require('./assign')
var YError = require('./yerror')

var previouslyVisitedConfigs = []

function checkForCircularExtends (path) {
  if (previouslyVisitedConfigs.indexOf(path) > -1) {
    throw new YError("Circular extended configurations: '" + path + "'.")
  }
}

function getPathToDefaultConfig (cwd, pathToExtend) {
  return path.resolve(cwd, pathToExtend)
}

function applyExtends (config, cwd) {
  var defaultConfig = {}

  if (config.hasOwnProperty('extends')) {
    if (typeof config.extends !== 'string') return defaultConfig
    var isPath = /\.json$/.test(config.extends)
    var pathToDefault = null
    if (!isPath) {
      try {
        pathToDefault = require.resolve(config.extends)
      } catch (err) {
        // most likely this simply isn't a module.
      }
    } else {
      pathToDefault = getPathToDefaultConfig(cwd, config.extends)
    }
    // maybe the module uses key for some other reason,
    // err on side of caution.
    if (!pathToDefault && !isPath) return config

    checkForCircularExtends(pathToDefault)

    previouslyVisitedConfigs.push(pathToDefault)

    defaultConfig = isPath ? JSON.parse(fs.readFileSync(pathToDefault, 'utf8')) : require(config.extends)
    delete config.extends
    defaultConfig = applyExtends(defaultConfig, path.dirname(pathToDefault))
  }

  previouslyVisitedConfigs = []

  return assign(defaultConfig, config)
}

module.exports = applyExtends
