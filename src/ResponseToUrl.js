class ResponseToUrl {
  constructor(url) {
    this.url = url;
  }

  async get() {
    try {
      let response = await fetch(this.url);

      if (response.ok) {
        let json = await response.json();

        return json;
      }

      throw Error("Данные не получены: " + response.status )
      
    } catch(err) {
      alert(err);
      console.log(err);
    }
  }
}

export {ResponseToUrl}