class FormFields {
  constructor({label = null, input}) {
    this.label = label;
    this.input = input;
  }

  render() {
    const input = this.input;
    const label = this.label;

    if (input.type === 'checkbox') {
      const checkboxTemplate = `
        <input 
              type="${input.type}" 
              class="form-checkbox" 
              ${input.checked === "true" ? "checked" : ""}
              ${input.required ? "required" : ' '}
        >`;

      if (label) {
        const checkboxWithLabelTemplate = `
          <label class="colorsheme-form__theme">
            ${checkboxTemplate}
            <span class="colorsheme-form__text">${label}</span>
          </label>
        `;

        return checkboxWithLabelTemplate;
      }

      return checkboxTemplate;
      
    } else if (input.type === 'textarea') {
      const textareaTemplate = `
        <label class="form-label">
          <span>${label}</span>
          <textarea 
              class="form-textarea"
              ${input.required ? 'required' : ' '}
              ${input.placeholder ? 'placeholder=' + input.placeholder : ' '}
              ></textarea>
        </label>
      `;

      return textareaTemplate;
      
    } else if (input.type === 'color') {
      const colorTemplate = `
        <label class="colorpicker">
          <span class="colorpicker__text">${label}</span>
          <input type="${input.type}" class="colorpicker__input" list="colors">
          <datalist id="colors" class="colorpicker__list">
            ${input.colors.map(color => {
              return `<option value="${color}" label="${color}"></option>`
            })}
          </datalist>
        </label>
      `;

      return colorTemplate;

    } else if (input.type === 'file') {
      const fileTemplate = `
        <input 
            type='${input.type}'
            ${input.required ? "required" : ' '}
        >
      `;

      return fileTemplate;

    } else if (input.type === 'date') {
      const dateTemplate = `
        <input
            type='${input.type}'
            class="form-date"
            ${input.required ? "required" : ' '}
        >
      `;

      return dateTemplate;
    } else {
      const inputTemplate = `
        <input type="${input.type}" 
                class="form-input form-input_center" 
                ${input.placeholder ? `placeholder="${input.placeholder}"` : ' '} 
                ${input.required ? "required" : ' '}
        >`;

        if (label) {
          const labelTemplate = `
              <label for="${input.placeholder || ' ' }" class="form-label">
                <span>${label}</span>
                <input type="${input.type}" 
                  class="form-input" 
                  ${input.placeholder ? `placeholder="${input.placeholder}"` : ' '} 
                  ${input.required ? "required" : ' '}>
              </label>
          `;

          return labelTemplate;
        }

      return inputTemplate;
    }
  }
}

export {FormFields};

// class FormFields {
//   constructor({label = null, input}, form) {
//     this.label = label;
//     this.input = input;
//     this.form = form;
//   }

//   render() {
//     if (this.input.type === 'checkbox') {
//       console.log(this.input.type)
//     } else if (this.input.type === 'textarea') {
//       console.log(this.input.type)
//     } else if (this.input.type === 'color') {
//       console.log(this.input.type)
//     } else if (this.input.type === 'file') {
//       console.log(this.input.type)
//     } else if (this.input.type === 'date') {
//       console.log(this.input.type)
//     } else {
//       const input = document.createElement('input');

//       input.type = this.input.type;
//       input.required = this.input.required || null;
//       input.placeholder = this.input.placeholder || null;
//       input.className = 'form-input';
      
//       if (this.label) {
//         const label = document.createElement('label');
//         label.innerHTML = `
//           <span>${this.label}</span>
//         `;

//         label.append(input);
//         this.form.append(label);
//       } else {
//         this.form.append(input);
//       }

//     }
//   }
// }