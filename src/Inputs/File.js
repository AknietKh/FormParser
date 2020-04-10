import { Input } from './Input.js';

class File extends Input {
  constructor(inputData) {
    super(inputData);
  }

  create() {
    const input = document.createElement('input');

    input.id = Date.now();
    input.type = this.input.type;
    input.required = this.input.required || null;

    if (this.input.multiple) {
      input.multiple = true;
    }

    if (this.input.filetype) {
      const filetype = this.input.filetype;
      let accept = '';

      filetype.forEach((item, i, arr) => {
        accept += `image/${item},`;

        if (i == arr.length - 1) {
          accept = accept.slice(0, -1);
        }
      });

      input.setAttribute('accept', accept);
    }

    if (this.label) {
      const label = super._createLabel(input);

      return label;
    }

    return input;
  }
}

export { File };