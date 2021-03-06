const {
  red,
  logError,
} = require('./log')

const uppercamelcase = require('uppercamelcase')

exports.write = require('./write')

const {
  author,
  name,
  version,
} = require('../../package.json')

const authorName = author.replace(/\s+<.*/, '')
const minExt = process.env.NODE_ENV === 'production' ? '.min' : ''

exports.author = authorName
exports.version = version
exports.name = name
exports.moduleName = uppercamelcase(name)
exports.filename = name + minExt
exports.banner = `/*!
 * ${name} v${version}
 * (c) ${new Date().getFullYear()} ${authorName}
 * Released under the MIT License.
 */
`

// log.js
exports.red = red
exports.logError = logError
