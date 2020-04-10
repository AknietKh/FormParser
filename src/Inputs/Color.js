import { Input } from './Input.js';

class Color extends Input {
  constructor(inputData) {
    super(inputData);
  }

  _createLabel(input, datalist) {
    const label = document.createElement('label');
    const labelText = document.createElement('span');

    labelText.innerHTML = this.label;
    labelText.className = 'colorpicker__text';
    label.className = 'colorpicker';
    label.for = input.id;

    label.append(labelText);
    label.append(input);
    label.append(datalist);

    return label;
  }

  create() {
    const datalist = document.createElement('datalist');
    const input = document.createElement('input');

    input.id = Date.now();
    input.type = this.input.type;
    datalist.id = 'colors';
    datalist.className = 'colorpicker__list';
    input.className = 'colorpicker__input';
    input.setAttribute('list', 'colors');

    const options = this.input.colors.map( item => {
      const option = document.createElement('option');

      option.value = item;
      option.label = item;
      
      return option;
    });

    options.forEach(item => datalist.append(item));

    if (this.label) {
      const label = this._createLabel(input, datalist);

      return label;
    }
  }
}

export { Color };