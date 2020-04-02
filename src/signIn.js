import { ResponseToUrl } from './ResponseToUrl.js';
import { FormParser } from './FormParser.js';
import { SignInForm } from './SignInForm.js';

ResponseToUrl.get('./db/signIn.json')
  .then(data => {
    try {
      const form = new FormParser(data);

      form.renderForm('signIn');
    } catch(err) {
      alert(err);
      console.warn(err);
    }
  })
