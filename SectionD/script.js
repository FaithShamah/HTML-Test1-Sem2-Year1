document.getElementById("addButton").addEventListener("click", addItem);

function addItem() {
  const inputField = document.getElementById("bucketItem");
  const itemText = inputField.value.trim();

  if (itemText !== "") {
    const listItem = document.createElement("li");

    // Create text node for the list item
    const textNode = document.createTextNode(itemText);
    listItem.appendChild(textNode);

    // Create a delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      listItem.remove();
    });

    listItem.appendChild(deleteButton);
    document.getElementById("bucketList").appendChild(listItem);

    // Clear the input field after adding item
    inputField.value = "";
  } else {
    alert("Please enter a valid item!");
  }
}
