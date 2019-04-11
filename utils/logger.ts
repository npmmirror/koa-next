import { isPro } from './env';
import * as log4js from 'log4js';

const config = {
  appenders: {
    koaNextAccess: {
      type: isPro ? 'dateFile' : 'console',
      filename: 'logs/koa-next-access.log',
      pattern: '-yyyy-MM-dd',
      compress: true
    },
    error: {
      type: isPro ? 'dateFile' : 'console',
      filename: 'logs/koa-next-error.log',
      pattern: '-yyyy-MM-dd',
      compress: true
    },
    koaNextError: {
      type: 'logLevelFilter',
      level: 'ERROR',
      appender: 'error'
    }
  },
  categories: {
    default: {
      appenders: ['koaNextAccess', 'koaNextError'],
      level: isPro ? 'error' : 'info'
    }
  }
};

const logger = log4js.getLogger();
log4js.configure(config);

export default logger;
