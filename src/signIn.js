import { ResponseToUrl } from './ResponseToUrl.js';
import { FormParser } from './FormParser.js';
import { SignInForm } from './SignInForm.js';

ResponseToUrl.get('./db/signIn.json')
  .then(data => {
    const form = new SignInForm(data);
    
    FormParser.setForm(form);
    FormParser.render();
  })
