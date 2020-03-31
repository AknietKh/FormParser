class ResponseToUrl {
  constructor(url) {
    this.url = url;
  }

  async get() {
    let response = await fetch(this.url);
    let json = await response.json();

    return json;
  }
}

export {ResponseToUrl}