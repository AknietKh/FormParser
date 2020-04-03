import { FormFields } from './FormFields.js';

class FormReferences {
  constructor(ref) {
    this.ref = ref;
  }

  render() {
    const references = this.ref;
    
    if (references.input) {
      const referencesInput = new FormFields(references).render();
      return referencesInput;
    } else {
      const {text, ref, 'text without ref': justText} = references;
      const referenceTemplate = `
        <a href="./${ref}.html" class="login-form__link">${text}</a>
      `;

      if (justText) {
        const spanWithLink = `
          <span class ="login-form__links-text_center">
            ${justText}
            ${referenceTemplate}
          </span>
        `;

        return spanWithLink;
      }

      return referenceTemplate;
    }

  }
}

export {FormReferences}