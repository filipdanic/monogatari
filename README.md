# Install

```
yarn add monogatari
```

Comes with `chalk` as a dependency.

# Usage

```javascript
import Logger from 'monogatari';

const logger = new Logger();
logger.error(new Error('This is an error object’s trace.'));
logger.error('This is an error message.');
logger.warning({ a: 'Oh, no, a warning within an object'});
logger.success('All good!');
logger.debug('Some debug info');
logger.debug({ firstName: 'Jon', email: 'jon@gmail.com' });
```

## Configuring and Disabling in Production

When you define a new instance of the logger, you can provide a configuration object in the constructor to customize the behaviour based on the environment.

```javascript
import Logger from 'monogatari';

// If env is "production" then logger looks at the enabledInProduction flag. 
// Everything is turned off by default and you must override with the keys you want to be logged.
// For example:
const logger = new Logger({
  env: process.env.NODE_ENV,
  enabledInProduction: {
    error: true,
    warning: true,
  }
});

// visible if env is "production"
logger.error('This is an error message.');
logger.warning({ a: 'Oh, no, a warning within an object'});

// not visible if env is "production"
logger.success('All good!');
logger.debug('Some debug info')
```
