class Input {
  constructor({label = null, input}) {
    this.label = label;
    this.input = input;
  }

  _mask(input) {
    input.type = 'text';
    Inputmask({"mask": this.input.mask}).mask(input);
  }

  _createLabel(input) {
    const label = document.createElement('label');

    label.className ='form-label';
    label.for = input.id;
    label.innerHTML = `
      <span>${this.label}</span>
    `;

    input.classList.remove('form-input_center');
    label.append(input);
    
    return label;
  }

  create() {
    const input = document.createElement('input');

    input.id = Date.now();
    input.type = this.input.type;
    input.required = this.input.required || null;
    input.classList.add('form-input');
    input.classList.add('form-input_center');

    if (this.input.placeholder) {
      input.placeholder = this.input.placeholder;
    };
    
    if (this.input.mask) {
      this._mask(input);
    }

    if (this.label) {
      const label = this._createLabel(input);

      return label;
    }

    return input;
  }

}

export { Input };