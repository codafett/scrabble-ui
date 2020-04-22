import winston, { format } from 'winston';
import packageJson from '../../package.json';

const { timestamp, printf } = format;

const logFormat = printf(info => `
  ${info.timestamp} | v.${packageJson.version} | ${info.level}: ${info.message}
`);

const logger = winston.createLogger({
  level: 'info',
  format: format.combine(
    timestamp(),
    logFormat,
  ),

  transports: [
  ],
  exceptionHandlers: [
    new winston.transports.Console({
      format: format.combine(
        format.timestamp(),
        logFormat,
      ),
    }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({}));
}

export const logException = (errorObj, errorType, otherProperties = {}) => {
  let logObj = {
    message: errorObj.message,
    stack: errorObj.stack,
    errorType,
  };
  logObj = Object.assign(otherProperties, logObj); // merge objects
  logger.error(JSON.stringify(logObj));
};

export default logger;
