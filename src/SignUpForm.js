//отвечает за отображение sign up формы

class SignUpForm {
  constructor(dataJson) {
    this.formData = dataJson;
  }

  renderFields() {
    const fields = this.formData.fields;
    const formInputsTemplate = fields.map(item => {
      const input = item.input;

      const formInputTemplate = `
        <input type="${input.type}" 
                class="login-form__input login-form__input_full-width" 
                placeholder="${input.placeholder}" 
                ${input.required ? "required" : ''}>
      `;

      return formInputTemplate;
    });

    return formInputsTemplate.join(' ');
  }

  renderReferences() {
    const references = this.formData.references;
    const referencesTemplate = references.map(item => {
      const {text, ref, 'text without ref': spanText} = item;

        const spanWithLink = `
          <span class ="login-form__links-text_center">
            ${spanText}
            <a href="./${ref}.html" class="login-form__link">${text}</a>
          </span>
        `;

        return spanWithLink;
    });

    return referencesTemplate.join(' ');
  }

  renderButtons() {
    const buttons = this.formData.buttons;
    const buttonsTemplate = buttons.map(item => {
      const buttonTemplate = `
        <input type="submit" value="${item.text}" class="btn btn_fill">
      `;

      return buttonTemplate;
    });

    return buttonsTemplate.join(' ');
  }

  renderSignUp() {
    const name = this.formData.name;
    const formContainer = document.querySelector('.form-container');
    const form = document.createElement('form');

    form.name = name;
    form.className = 'login-form';

    form.innerHTML = `
      ${this.renderFields()}
      
      <div class="login-form__links">
        ${this.renderReferences()}
      </div>

      ${this.renderButtons()}
    `;

    formContainer.append(form);
  }
}

export { SignUpForm };