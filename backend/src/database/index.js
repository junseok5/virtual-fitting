const mongoose = require('mongoose')
const log = require('lib/log')

const {
  MONGO_URI: mongoURI
} = process.env

const dbOptions = {
  authIndex: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  poolSize: 10,
  bufferMaxEntries: 0,
  useNewUrlParser: true
}

module.exports = (() => {
  mongoose.Promise = global.Promise

  return {
    connect () {
      return mongoose.connect(mongoURI, dbOptions).then(
        () => {
          log.info('Connected to mongodb')
        }
      ).catch(e => {
        console.error(e)
      })
    },
    disconnect () {
      return mongoose.disconnect()
    }
  }
})()