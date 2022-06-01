const addElement = document.getElementById("add");
const deleteElement = document.getElementById("delete");
const paragraf1 = document.getElementById("p1");

let elementId = 1;

// Add Element
addElement.onclick = function () {
  const parent = document.getElementById("wrapper");
  let clonedElement = paragraf1.cloneNode(true);

  clonedElement.id = "p" + (elementId + 1);
  parent.append(clonedElement);
  ++elementId;
  // console.log(elementId);
};

// Delet Element
// deleteElement.onclick = function () {
//   const parent = document.getElementById("wrapper");
//   parent.removeChild(parent.lastElementChild);
//   --elementId;
//   console.log(elementId);
// };

deleteElement.onclick = function () {
  const parent = document.getElementById("wrapper");
  if (elementId > 1) {
    parent.removeChild(parent.lastElementChild);
    --elementId;
    // console.log(elementId);
  } else {
    alert("Jangan dihapus semua donk say");
  }
};

