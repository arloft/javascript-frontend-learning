// alert("todo.js");
// ⬆️ checks to make sure the file is found
// -----------------------------


// Tips
// - Avoid global variables
// - strive to make functions reusable



function addNewItem(list, itemText) {
  // using a 'list' argument here allows *any* list to be passed into the function,
  // making this reusable, rather than limited to a single, specific list.
  // ⬇️ Each todo item line should look like this
  // <li>
  //    <input type="checkbox">
  //    <span> Follow tutorial</span>
  // </li>
  // -----------------------------
  var listItem = document.createElement("li");
  listItem.innerText = itemText;

  list.appendChild(listItem);
}

// ⬇️ gets the specified element and stores it in a variable,
// then we can tell the browser "when the page loads,
// set the cursor (focus it) to the specified element"
var inItemText = document.getElementById("inItemText");
inItemText.focus();

inItemText.onkeyup = function(event) {

  // Event.which (13) -> ENTER key,
  // only perform this function if the ENTER key is pressed
  if (event.which == 13) {

    var itemText = inItemText.value;

    if (!itemText || itemText == "") {
      return false;
    }

    addNewItem(document.getElementById("todoList"), itemText);

    inItemText.focus();
    inItemText.select();
  };
}
