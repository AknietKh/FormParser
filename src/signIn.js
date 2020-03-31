import { ResponseToUrl } from './ResponseToUrl.js';
import { FormParser } from './FormParser.js';

let responseSignIn = new ResponseToUrl('./db/signIn.json').get();

//инстанс класса для построения формы sign in
responseSignIn.then(data => {
  let form = new FormParser(data);
  form.renderSignInForm();
});