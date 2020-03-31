import { ResponseToUrl } from './ResponseToUrl.js';
import { FormParser } from './FormParser.js';


let responseSignUp = new ResponseToUrl('./db/signUp.json').get();

//инстанс класса для построения формы sign up
responseSignUp.then(data => {
  let form = new FormParser(data);
  form.renderSignUpForm();
});