import { SignInForm } from './SignInForm.js';
import { SignUpForm } from './SignUpForm.js';
import { ColorShemeForm } from './ColorShemeForm.js';

//Собирает все методы рендера форм у других классов в одном классе
class FormParser {
  constructor(dataJson) {
    this.dataJson = dataJson;
  }

  renderSignInForm() {
    const json = this.dataJson;
    const signInForm = new SignInForm(json);

    signInForm.renderForm();
  }

  renderSignUpForm() {
    const json = this.dataJson;
    const signUpForm = new SignUpForm(json);

    signUpForm.renderForm();
  }

  renderColorShemeForm() {
    const json = this.dataJson;
    const colorShemeForm = new ColorShemeForm(json);

    colorShemeForm.renderForm();
  }

}

export {FormParser};