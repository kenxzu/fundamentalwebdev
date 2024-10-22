function setBackground(e) {
  if (e.type == "focus") {
    e.target.backgroundColor = "#FFE393";
  } else if (e.type == "blur") {
    e.target.style.backgroundColor = "white";
  }
}

window.addEventListener("load", function () {
  const cssSelector = "input[type=text],input[type=password]";

  const fields = document.querySelectorAll(cssSelector);
  for (let f of fields) {
    f.addEventListener("focus", setBackground);

    f.addEventListener("blur", setBackground);
  }
});
