
class FormFields {
  constructor({label = null, input}) {
    this.label = label;
    this.input = input;
  }

  render() {
    const input = document.createElement('input');

    input.id = Date.now();
    input.type = this.input.type;
    input.required = this.input.required || null;

    if (this.input.placeholder) {
      input.placeholder = this.input.placeholder;
    };
    
    if (this.input.mask) {
      input.type = 'text';
      Inputmask({"mask": this.input.mask}).mask(input);      
    }
    
    if (this.input.type === 'checkbox') {
      input.className = 'form-checkbox';
      input.checked = this.input.checked === 'true' ? 1 : 0;

      if (this.label) {
        const label = document.createElement('label');
        const labelText = document.createElement('span');

        labelText.innerHTML = this.label;
        label.className = 'colorsheme-form__theme';
        label.for = input.id;

        label.append(input);
        label.append(labelText);

        return label
      }

      return input;

    } else if (this.input.type === 'textarea') {
      const textarea = document.createElement('textarea');
      
      textarea.id = input.id;
      textarea.className = 'form-textarea';
      textarea.required = this.input.required;

      if (this.input.placeholder) {
        textarea.placeholder = this.input.placeholder;
      };

      if (this.label) {
        const label = document.createElement('label');
        const labelText = document.createElement('span');

        labelText.innerHTML = this.label;
        label.className = 'form-label';
        label.for = input.id;

        label.append(labelText);
        label.append(textarea);

        return label;
      }

      return textarea;

    } else if (this.input.type === 'color') {
        const datalist = document.createElement('datalist');
        
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

    } else if (this.input.type === 'file') {

      if (this.input.multiple) {
        input.multiple = true;
      }

      if (this.input.filetype) {
        const filetype = this.input.filetype;
        let accept = '';

        filetype.forEach((item, i, arr) => {
          accept += `image/${item},`;

          if (i == arr.length - 1) {
            accept = accept.slice(0, -1);
          }
        });

        input.setAttribute('accept', accept);
      }

      if (this.label) {
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

      return input;

    } else if (this.input.type === 'date') {
      input.className = 'form-date';

      if (this.label) {
        const label = document.createElement('label');

        label.className ='form-label_multiple';
        label.for = input.id;
        label.innerHTML = `
          <span>${this.label}</span>
        `;

        input.classList.remove('form-input_center');
        label.append(input);
        
        return label;
      }

      return input;

    } else if(this.input.type === 'technology') {
      const select = document.createElement('select');
      
      select.classList.add('technology');

      if (this.input.multiple) {
        // select.setAttribute('multiple', 'multiple');
        select.multiple = true;
      }

      this.input.technologies.forEach(item => {
        const option = document.createElement('option');

        option.value = item.toLowerCase();
        option.innerHTML = item;

        select.append(option);
      })

      if (this.label) {
        const label = document.createElement('label');

        label.className ='form-label_multiple';
        label.for = input.id;
        label.innerHTML = `
          <span>${this.label}</span>
        `;

        label.append(select);
        
        $(select).multiselect();
        
        return label;
      }

      $(select).multiselect();

      return select;
    }else {
      input.classList.add('form-input');
      input.classList.add('form-input_center');

      if (this.label) {
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

      return input;
    }
  }
}

export {FormFields};