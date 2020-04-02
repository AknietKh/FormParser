//принимает инстанс класса формы и рендерит форму (в классах форм должен реализоваться метод renderForm)

class FormParser {
  
  static setForm(form) {
    this.form = form;
  }

  static render() {
    this.form.renderForm();
  }

}

export {FormParser};