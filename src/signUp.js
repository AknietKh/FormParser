import { ResponseToUrl } from './ResponseToUrl.js';
import { FormParser } from './FormParser.js';
import { SignUpForm } from './SignUpForm.js';

ResponseToUrl.get('./db/signUp.json')
  .then(data => {
    const form = new SignUpForm(data);
    
    FormParser.setForm(form);
    FormParser.render();
  });