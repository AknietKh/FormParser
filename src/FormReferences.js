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
      const link = document.createElement('a');
      
      link.setAttribute('href', `./${ref}.html`);
      link.className = 'form-link';
      link.innerHTML = text;

      if (justText) {
        const span = document.createElement('span');
        
        span.className = 'form-links_center';
        span.append(justText);
        span.append(link);

        return span;
      }

      return link;
    }

  }
}

export {FormReferences}