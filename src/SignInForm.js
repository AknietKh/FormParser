//Отвечает за рендер sign in формы (Должен реализовывать метод renderForm)

class SignInForm {
  constructor(dataJson) {
    this.formData = dataJson;
  }

  _renderFields() {
    const fields = this.formData.fields;
    const formInputsTemplate = fields.map(item => {
      const {label, input} = item;

      const formInputTemplate = `
        <label for="${input.placeholder || '' }" class="login-form__label">
          <span>${label}</span>
          <input type="${input.type}" 
                  id="${input.placeholder || ''}"
                  class="login-form__input" 
                  placeholder="${input.placeholder || ''}" 
                  ${input.required ? "required" : ''}>
        </label>
      `;

      return formInputTemplate;
    });

    return formInputsTemplate.join(' ');
    
  }

  _renderReferences() {
    const references = this.formData.references;
    const referencesTemplate = references.map(item => {
      const {text, ref} = item;
      
      const referencesItemTemplate = `
        <a href="./${ref}.html" class="login-form__link">${text}</a>
      `;

      return referencesItemTemplate;
    });

    return referencesTemplate.join(' ');
  }

  _renderButtons() {
    const buttons = this.formData.buttons;
    const buttonsTemplate = buttons.map(item => {
      const buttonTemplate = `
        <input type="submit" value="${item.text}" class="btn btn_fill">
      `;

      return buttonTemplate;
    });

    return buttonsTemplate.join(' ');
  }

  renderForm() {
    const name = this.formData.name;
    const formContainer = document.querySelector('.form-container');
    const form = document.createElement('form');

    form.name = name;
    form.className = 'login-form';

    form.innerHTML = `
      ${this._renderFields()}
      
      <div class="login-form__links">
        ${this._renderReferences()}
      </div>

      ${this._renderButtons()}
    `;

    formContainer.append(form);
  }
}

export { SignInForm };