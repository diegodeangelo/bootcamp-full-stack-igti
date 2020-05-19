window.addEventListener("load", function () {
  var redInput = document.querySelector("#red");
  var greenInput = document.querySelector("#green");
  var blueInput = document.querySelector("#blue");

  redInput.addEventListener("input", update);

  greenInput.addEventListener("input", update);

  blueInput.addEventListener("input", update);

  function render() {
    changeDivBackground(redInput.value, greenInput.value, blueInput.value);
  }

  function update(event) {
    var textField = event.target.nextSibling.nextSibling;
    textField.value = event.target.value;

    render();
  }
});

function changeDivBackground(red, green, blue) {
  document.querySelector(
    "#color"
  ).style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
