class FormParser {
  constructor(dataJson) {
    this.formData = dataJson;
  }

  renderFields() {
    const fields = this.formData.fields;
    const formInputsTemplate = fields.map(item => {
      const {label = null, input} = item;

      if (label) {
        const formInputLabelTemplate = `
          <label for="${input.placeholder}" class="login-form__label">
            <span>${label}</span>
            <input type="${input.type}" class="login-form__input" placeholder="${input.placeholder}" ${input.required}>
          </label>
        `;

        return formInputLabelTemplate;
      } else {
        const formInputTemplate = `
          <input type="${input.type}" class="login-form__input login-form__input_full-width " placeholder="${input.placeholder}" ${input.required}>
        `;

        return formInputTemplate;
      }
    });

    return formInputsTemplate.join(' ');
    
  }

  renderReferences() {
    const references = this.formData.references;
    const referencesTemplate = references.map(item => {
      const {text, ref, 'text without ref': justText = null} = item;
      console.log(justText);

      if (justText) {
        const spanWithLink = `
          <span class ="login-form__links-text_center">
            ${justText}
            <a href="./${ref}.html" class="login-form__link">${text}</a>
          </span>
        `;

        return spanWithLink;
      } else {
        const referencesItemTemplate = `
          <a href="./${ref}.html" class="login-form__link">${text}</a>
        `;

        return referencesItemTemplate;
      }
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

  renderSignIn() {
    const {name, fields, references, buttons} = this.formData;
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

class ResponseToUrl {
  constructor(url) {
    this.url = url;
  }

  async get() {
    let response = await fetch(this.url);
    let json = await response.json();

    return json;
  }
}


//инстанс класса для построения формы signin
let responseSignin = new ResponseToUrl('./db/signin.json').get();

responseSignin.then(data => {
  let form = new FormParser(data);
  form.renderSignIn();
});


// //инстанс класса для построения формы signup
// let responseSignup = new ResponseToUrl('./db/signup.json').get();

// responseSignup.then(data => {
//   let form = new FormParser(data);
//   form.renderSignIn();
// });
