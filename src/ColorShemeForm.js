//Отвечает за рендер colorsheme формы

class ColorShemeForm {
  constructor(json) {
    this.formData = json;
  }

  renderForm() {
    const {name, fields} = this.formData;
    const formContainer = document.querySelector('.form-container');
    const form = document.createElement('form');

    form.name = name;
    form.className = 'colorsheme-form';

    form.innerHTML = `
      <label class="colorpicker">
        <span class="colorpicker__text">${fields[0].label}</span>
        <input type="${fields[0].input.type}" class="colorpicker__input" list="colors">
        <datalist id="colors" class="colorpicker__list">
          ${fields[0].input.colors.map(color => {
            return `<option value="${color}" label="${color}"></option>`
          })}
        </datalist>
      </label>

      <label class="colorsheme-form__theme">
        <input type="${fields[1].input.type}" class="colorsheme-form__checkbox" ${fields[1].input.checked === "true" ? "checked" : ""}>
        <span class="colorsheme-form__text">${fields[1].label}</span>
      </label>
    `;

    formContainer.append(form);
  }
}

export {ColorShemeForm};