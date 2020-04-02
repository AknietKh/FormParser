import { SignInForm } from './SignInForm.js';
import { SignUpForm } from './SignUpForm.js';
import { ColorShemeForm } from './ColorShemeForm.js';

//принимает инстанс класса формы и рендерит форму (в классах форм должен реализоваться метод renderForm)
class FormParser {
  
  static setForm(form) {
    this.form = form;
  }

  static render() {
    this.form.renderForm();
  }

}

export {FormParser};