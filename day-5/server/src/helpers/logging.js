const winston = require('winston');
const { EOL } = require('os');

const logger = winston.createLogger({
  level: 'silly',
  defaultMeta: { service: 'user' },
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
        winston.format.metadata({ fillExcept: ['message', 'level', 'timestamp', 'label'] }),
        winston.format.colorize(),
        winston.format.printf((info) => {
          const { service, stack, ...data } = info.metadata;
          let print = `${info.timestamp} `;
          if (service) {
            print += `[${info.metadata.service}] `;
          }
          print += `(${info.level}) ${info.message}`;
          if (stack) {
            print += `${EOL}${info.metadata.stack}`;
          }
          if (Object.keys(data).length > 0) {
            print += `${EOL}${JSON.stringify(data)}`;
          }
          return print;
        }),
      ),
    })
  ],
});


module.exports = logger;