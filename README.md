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
