
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dashboardvisualization.cjs.production.min.js')
} else {
  module.exports = require('./dashboardvisualization.cjs.development.js')
}
