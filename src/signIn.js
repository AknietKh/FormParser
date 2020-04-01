import { ResponseToUrl } from './ResponseToUrl.js';
import { FormParser } from './FormParser.js';

//Старая реализация
// let responseSignIn = new ResponseToUrl('./db/signIn.json').get();

// //инстанс класса для построения формы sign in
// responseSignIn.then(data => {
//   let form = new FormParser(data);
//   form.renderSignInForm();
// });

ResponseToUrl.get('./db/signIn.json')
  .then(data => {
    let form = new FormParser(data);
    form.renderSignInForm();
  });