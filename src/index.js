import chalk from 'chalk';

class Logger {
  constructor(settings = {}) {
    this.env = settings.env || 'development';
    this.enabledInProduction = settings.enabledInProduction || {};
  }

  call_(cb, type) {
    if (this.env !== 'production' || this.enabledInProduction[type]) {
      cb();
    }
  };

  prettify_(message) {
    if (message instanceof Error) {
      return message;
    }
    return typeof message === 'object' ? JSON.stringify(message) : message;
  };

  error(message) {
    this.call_(() => console.log(chalk.red.bold(`𝙭 ${this.prettify_(message)}`)), 'error');
  }

  warning(message) {
    this.call_(() => console.log(chalk.yellow(`𝙭 ${this.prettify_(message)}`)), 'warning');
  }

  success(message) {
    this.call_(() => console.log(chalk.green.bold(`✔ ${this.prettify_(message)}`)), 'success');
  }

  debug(message) {
    this.call_(() => console.log(chalk.gray(`${this.prettify_(message)}`)), 'debug');
  }
}

export default Logger;
