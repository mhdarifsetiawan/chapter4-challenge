const button = document.getElementById("add");
const paragraf1 = document.getElementById("p1");

let numId = 1;
button.onclick = function () {
  const parent = document.getElementById("wrapper");

  

  let clonedElement = paragraf1.cloneNode(true);
  clonedElement.id = "p" + (numId + 1);
  parent.append(clonedElement);
  ++numId;
};
