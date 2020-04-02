import { ResponseToUrl } from './ResponseToUrl.js';
import { FormParser } from './FormParser.js';
import { SignUpForm } from './SignUpForm.js';

ResponseToUrl.get('./db/signUp.json')
  .then(data => {
    try {
      const form = new FormParser(data);

      form.renderForm('signUp');
    } catch(err) {
      alert(err);
      console.warn(err);
    }
  });