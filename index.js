const { v4: uuidv4 } = require('uuid');

class Greeting {
  hi() {
    return '你好世界' + uuidv4();
  }
}

module.exports.Greeting = Greeting;
