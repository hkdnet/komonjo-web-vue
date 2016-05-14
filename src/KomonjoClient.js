import 'whatwg-fetch';

class KomonjoClient {
  constructor(url) {
    this.url = url;
  }

  getChannels() {
    return fetch(`${this.url}/channels`)
      .then(e => {
        let ret = e.json();
        return ret;
      })
      .catch(err=> console.log('parsing failed', err))
  }
}

module.exports = KomonjoClient;
