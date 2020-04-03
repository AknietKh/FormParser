import { FormFields } from './FormFields.js';
import { FormReferences } from './FormReferences.js';
import { Button } from './Button.js';

class FormParser {
  constructor(json) {
    this.formData = json;
  }

  render() {
    const {name, fields, references, buttons} = this.formData;
    const form = document.createElement('form');

    form.name = name;
    form.className = 'form';

    const formFields = fields.map( item => new FormFields(item).render() ).join('');

    const formReferences = references && references.map( item => new FormReferences(item).render() ).join('');

    const formButtons = buttons && buttons.map( item => new Button(item).render() ).join(''); 

    form.innerHTML = `
      ${formFields}
      
      <div class="form-links">
        ${formReferences || ' '}
      </div>

      <div class=""form-buttons>
        ${formButtons || ' '}
      </div>
    `;

    return form;
  }
}

export {FormParser};