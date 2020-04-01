import { ResponseToUrl } from './ResponseToUrl.js';
import { FormParser } from './FormParser.js';

//Старая реализация
// let responseColorSheme = new ResponseToUrl('./db/colorSheme.json').get();

//инстанс класса для построения формы colorsceme
// responseColorSheme.then(data => {
//   let form = new FormParser(data);
//   form.renderColorShemeForm();
// });

ResponseToUrl.get('./db/colorSheme.json')
  .then(data => {
    let form = new FormParser(data);
    form.renderColorShemeForm();
  });