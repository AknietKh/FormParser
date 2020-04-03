import { ResponseToUrl } from './ResponseToUrl.js';
import { FormParser } from './FormParser.js';

ResponseToUrl.get('./db/addPost.json')
  .then(data => {
    try {
      const form = new FormParser(data);

      form.renderForm('addPost');
      
    } catch(err) {
      alert(err);
      console.warn(err);
    }
    
  });