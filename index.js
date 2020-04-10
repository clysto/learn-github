const { v4: uuidv4 } = require('uuid');

class Greeting {
  hi() {
    return '你好世界' + uuidv4();
  }

  add(a, b) {
    if (b > 0) {
      for (let i = 0; i < b; ++i) {
        a++;
      }
    } else {
      for (let i = 0; i < -b; ++i) {
        a--;
      }
    }
    return a;
  }
}

module.exports.Greeting = Greeting;
