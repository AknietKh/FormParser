class Button {
  constructor({text}) {
    this.text = text;
  }

  render() {
    const btn = document.createElement('button');
    
    btn.innerHTML = this.text;
    btn.classList.add('btn');
    btn.classList.add('btn_fill');

    return btn;
  }
}

export {Button};