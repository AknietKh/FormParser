import { ResponseToUrl } from './ResponseToUrl.js';
import { FormParser } from './FormParser.js';
import { ColorShemeForm } from './ColorShemeForm.js';

ResponseToUrl.get('./db/colorSheme.json')
  .then(data => {
    const form = new ColorShemeForm(data);
    
    FormParser.setForm(form);
    FormParser.render();
  });