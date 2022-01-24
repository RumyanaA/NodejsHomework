const { createLogger, format, transports } = require('winston');
const config = require('./../config/loggerPath')
module.exports = createLogger({
    level: 'info',
    format: format.combine(
      format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
      }),
      format.errors({ stack: true }),
      format.splat(),
    //   format.json(),
      format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`)
    ),
    transports: [
      new transports.File({ filename: config.loggerPath, level: 'error' })
    ]
  });