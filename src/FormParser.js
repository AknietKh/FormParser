import { SignInForm } from './SignInForm.js';
import { SignUpForm } from './SignUpForm.js';
import { ColorShemeForm } from './ColorShemeForm.js';

//Реализует метод рендера, который принимает тип формы, которую нужено отобразить
class FormParser {
  
  constructor(json) {
    this.formData = json;
  }

  renderForm(type) {
    switch (type) {
      case 'signIn':
        const signInForm = new SignInForm(this.formData);
        signInForm.renderForm();
        break;
      case 'signUp':
        const signUpForm = new SignUpForm(this.formData);
        signUpForm.renderForm();
        break;
      case 'colorSheme':
        const colorSheme = new ColorShemeForm(this.formData);
        colorSheme.renderForm();
        break;
      default:
        throw new Error('Такого типа форм не существует. Убедитесь что правильно ввели тип формы');
        break;
    }
      
  }

}

export {FormParser};