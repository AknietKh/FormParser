import { ResponseToUrl } from './ResponseToUrl.js';
import { FormParser } from './FormParser.js';
import { ColorShemeForm } from './ColorShemeForm.js';

ResponseToUrl.get('./db/colorSheme.json')
  .then(data => {
    try {
      const form = new FormParser(data);

      form.renderForm('colorSheme');
    } catch(err) {
      alert(err);
      console.warn(err);
    }
    
  });