import { Input } from './Input.js';

class FormDate extends Input {
  constructor(inputData) {
    super(inputData);
  }

  create() {
    const input = document.createElement('input');

    input.id = Date.now();
    input.type = this.input.type;
    input.required = this.input.required || null;
    input.classList.add('form-date');

    if (this.label) {
      const label = super._createLabel(input);

      label.classList.add('form-label_multiple');
        
      return label;
    }

    return input;
  }
}

export { FormDate };