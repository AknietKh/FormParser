import { FormFields } from './FormFields.js';
import { FormReferences } from './FormReferences.js';
import { Button } from './Button.js';

class FormParser {
  constructor(json) {
    this.formData = json;
  }

  render() {
    const {name, fields, references = null, buttons = null} = this.formData;
    const form = document.createElement('form');

    form.name = name;
    form.className = 'form';

    const formFields = fields.map( item => {
      const input = new FormFields(item).render();
      const inputWrapper = document.createElement('div');

      inputWrapper.className="form-input-wrapper";
      inputWrapper.append(input);

      return inputWrapper;
    });
    
    const formReferences = references && references.map( item => new FormReferences(item).render() );

    const formButtons = buttons && buttons.map( item => new Button(item).render() );

    formFields.forEach(item => form.append(item));

    if (references) {
      const refWrapper = document.createElement('div');

      refWrapper.className = 'form-links';
      formReferences.forEach(item => refWrapper.append(item));
      form.append(refWrapper);
    }

    if (buttons) {
      const btnWrapper = document.createElement('div');

      btnWrapper.className = 'form-buttons';
      formButtons.forEach(item => btnWrapper.append(item));
      form.append(btnWrapper);
    }

    return form;
  }
}

export {FormParser};