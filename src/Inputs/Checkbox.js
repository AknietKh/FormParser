import { Input } from './Input.js';

class Checkbox extends Input{
  constructor(inputData) {
    super(inputData);
  }

  _createLabel(input) {
    const label = document.createElement('label');
    const labelText = document.createElement('span');

    labelText.innerHTML = this.label;
    label.className = 'colorsheme-form__theme';
    label.for = input.id;

    label.append(input);
    label.append(labelText);

    return label;
  }

  create() {
    const input = document.createElement('input');

    input.id = Date.now();
    input.type = this.input.type;
    input.required = this.input.required || null;
    input.className = 'form-checkbox';
    input.checked = this.input.checked === 'true' ? 1 : 0;

    if (this.label) {
      const label = this._createLabel(input);

      return label;
    }

    return input;
  }
}

export { Checkbox };