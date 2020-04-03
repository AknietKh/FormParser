class Button {
  constructor({text}) {
    this.text = text;
  }

  render() {
    const btnTemplate = `
      <input type="submit" value="${this.text}" class="btn btn_fill">
    `;

    return btnTemplate;
  }
}

export {Button};