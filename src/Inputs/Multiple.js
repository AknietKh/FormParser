import { Input } from './Input.js';

class Multiple extends Input {
  constructor(inputData) {
    super(inputData);
  }

  create() {
    const select = document.createElement('select');
    
    select.name = this.input.type;
    select.classList.add('technology');

    if (this.input.multiple) {
      select.multiple = true;
    }

    this.input.technologies.forEach(item => {
      const option = document.createElement('option');

      option.value = item.toLowerCase();
      option.innerHTML = item;

      select.append(option);
    });

    if (this.label) {
      const label = super._createLabel(select);

      label.classList.add('form-label_multiple');
      
      $(select).multiselect();
      
      return label;
    }

    $(select).multiselect();

    return select;
  }
}

export { Multiple };