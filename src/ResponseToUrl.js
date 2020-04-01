//имитирует get запрос к серверу

class ResponseToUrl {
  //старая реализация
  // constructor(url) {
  //   this.url = url;
  // }

  static async get(url) {
    try {
      let response = await fetch(url);

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