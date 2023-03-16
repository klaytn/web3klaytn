module.exports = function assertNodeVersion (dir) {
  var version = require('expected-node-version')(dir)
  if (version) {
    var satisfied = require('semver').satisfies(process.version, version)
    if (!satisfied) {
      throw new Error("Failed to satisfy expected node version. Expected: '" + version + "', Current '" + process.version + "'")
    }
  }
}
