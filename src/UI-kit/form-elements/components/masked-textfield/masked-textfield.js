import Inputmask from "inputmask"

const maskedTextFieldNodes = document.querySelectorAll('.masked-textfield__input');

if (maskedTextFieldNodes) {
  maskedTextFieldNodes.forEach((selector) => {
    Inputmask('datetime', {
      inputFormat: 'dd.mm.yyyy',
      placeholder: 'ДД.ММ.ГГГГ',
      showMaskOnHover: false,
      showMaskOnFocus: false,
    }).mask(selector);
  });
}