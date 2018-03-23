const Logger = require('../lib').default;
const logger = new Logger();
const loggerProd = new Logger({ env: 'production', enabledInProduction: { error: true } });

logger.error(new Error('This is an error object’s trace.'));
logger.error('This is an error message.');
logger.warning({ a: 'Oh, no, a warning within an object'});
logger.success('All good!');
logger.debug('Some debug info');
logger.debug({ firstName: 'Jon', email: 'jon@gmail.com' });


loggerProd.warning('Should be ignored');
loggerProd.success('Should be ignored');
loggerProd.debug('Should be ignored');
loggerProd.error('Should be printed.');
