import { SignInForm } from './SignInForm.js';
import { SignUpForm } from './SignUpForm.js';
import { ColorShemeForm } from './ColorShemeForm.js';

//Собирает все методы рендера форм в одном классе
class FormParser {
  constructor(dataJson) {
    this.dataJson = dataJson;
  }

  renderSignInForm() {
    const json = this.dataJson;
    const signInForm = new SignInForm(json);

    signInForm.renderSignIn();
  }

  renderSignUpForm() {
    const json = this.dataJson;
    const signUpForm = new SignUpForm(json);

    signUpForm.renderSignUp();
  }

  renderColorShemeForm() {
    const json = this.dataJson;
    const colorShemeForm = new ColorShemeForm(json);

    colorShemeForm.renderСolorSheme();
  }

}

export {FormParser};