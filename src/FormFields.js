import { Input } from './Inputs/Input.js';
import { Checkbox } from './Inputs/Checkbox.js';
import { Textarea } from './Inputs/Textarea.js';
import { File } from './Inputs/File.js';
import { FormDate } from './Inputs/FormDate.js';
import { Multiple } from './Inputs/Multiple.js';
import { Color } from './Inputs/Color.js';

class FormFields {
  constructor(formField) {
    this.formField = formField;
  }

  render() {
    const inputType = this.formField.input.type;
    
    if (inputType === 'checkbox') {
      return new Checkbox(this.formField).create();
    } else if (inputType === 'textarea') {
      return new Textarea(this.formField).create();
    } else if (inputType === 'color') {
      return new Color(this.formField).create();
    } 
    else if (inputType === 'file') {
      return new File(this.formField).create();
    }
     else if (inputType === 'date') {
      return new FormDate(this.formField).create();
    } 
    else if(inputType === 'technology') {
      return new Multiple(this.formField).create();
    }

    return new Input(this.formField).create();
  }
}

export { FormFields };