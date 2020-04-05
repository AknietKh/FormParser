class Button {
  constructor({text}) {
    this.text = text;
  }

  render() {
    const btn = document.createElement('button');
    
    btn.innerHTML = this.text;
    btn.classList.add('form-button');
    btn.classList.add('form-button_fill');

    return btn;
  }
}

export {Button};