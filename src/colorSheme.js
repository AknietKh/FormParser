import { FormParser } from './FormParser.js';
import { ResponseToUrl } from './ResponseToUrl.js';

ResponseToUrl.get('./db/colorSheme.json')
  .then(data => {
    const form = new FormParser(data);
    const formContainer = document.querySelector('.form-container');

    const formTemplate = form.render();
    console.log(formTemplate);

    formContainer.append(formTemplate);
  })
