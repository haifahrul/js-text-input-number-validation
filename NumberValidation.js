/*
 * haifahrul <haifahrul@gmail.com>
 */

const NumberValidation = (val, column) => {
  let newText = "";
  let numbers = "0123456789";
  let isNumber = false;

  for (var i = 0; i < text.length; i++) {
    if (numbers.indexOf(text[i]) > -1) {
      newText = newText + text[i];
      isNumber = true;
    } else {
      isNumber = false;
    }
  }

  if (isNumber === false) {
    alert("please enter numbers only");
    this.setState({ column: "" });
    return;
  }

  this.setState({ column: text });
};

export default NumberValidation;
