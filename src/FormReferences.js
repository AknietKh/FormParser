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
        <a href="./${ref}.html" class="form-link">${text}</a>
      `;

      if (justText) {
        const spanWithLink = `
          <span class ="form-links_center">
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