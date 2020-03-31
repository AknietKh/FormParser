import { ResponseToUrl } from './ResponseToUrl.js';
import { FormParser } from './FormParser.js';

//инстанс класса для построения формы sign up
let responseColorSheme = new ResponseToUrl('./db/colorSheme.json').get();

responseColorSheme.then(data => {
  let form = new FormParser(data);
  form.renderColorShemeForm();
});