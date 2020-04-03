import { FormParser } from './FormParser.js';
import { ResponseToUrl } from './ResponseToUrl.js';

ResponseToUrl.get('./db/colorSheme.json')
  .then(data => {
    const form = new FormParser(data);

    form.render();
  })
