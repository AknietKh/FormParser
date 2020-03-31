import { ResponseToUrl } from './ResponseToUrl.js';
import { FormParser } from './FormParser.js';

//инстанс класса для построения формы sign in
let responseSignIn = new ResponseToUrl('./db/signIn.json').get();

responseSignIn.then(data => {
  let form = new FormParser(data);
  form.renderSignInForm();
});