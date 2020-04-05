import { Input } from './Input.js';

class Textarea extends Input {
  constructor(inputData) {
    super(inputData);
  }

  _createLabel(textarea) {
    const label = document.createElement('label');
    const labelText = document.createElement('span');

    labelText.innerHTML = this.label;
    label.className = 'form-label';
    label.for = textarea.id;

    label.append(labelText);
    label.append(textarea);

    return label;
  }

  create() {
    const textarea = document.createElement('textarea');
      
    textarea.id = Date.now();
    textarea.className = 'form-textarea';
    textarea.required = this.input.required;

    if (this.input.placeholder) {
      textarea.placeholder = this.input.placeholder;
    };

    if (this.label) {
      const label = this._createLabel(textarea);

      return label;
    }

    return textarea;
  }
}

export { Textarea };