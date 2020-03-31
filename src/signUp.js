import { ResponseToUrl } from './ResponseToUrl.js';
import { FormParser } from './FormParser.js';

//инстанс класса для построения формы sign up
let responseSignUp = new ResponseToUrl('./db/signUp.json').get();

responseSignUp.then(data => {
  let form = new FormParser(data);
  form.renderSignUpForm();
});