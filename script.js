const shoppingListContainerTag = document.getElementsByClassName("shoppingListContainer")[0];
const inputTag = document.getElementsByClassName("form-control")[0];

let productId = 1;
const handleChange = (event) => {
    const inputValue = event.target.value;
    const productContainer = document.createElement("div");
    productContainer.classList.add("productContainer");
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("productName");
    const spanTag = document.createElement("span");
    spanTag.addEventListener("click", () => {
        if (spanTag.classList.contains("purchased")) {
            spanTag.classList.remove("purchased");
        } else {
            spanTag.classList.add("purchased");
        }
    })
    const product = productId.toString() + ". " + inputValue;
    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fa-solid", "fa-trash-can");
    trashIcon.addEventListener("click", () => {
        productContainer.remove();
    })
    spanTag.append(product);
    parentDiv.append(spanTag)
    productContainer.append(parentDiv, trashIcon)
    shoppingListContainerTag.append(productContainer);
    inputTag.value = "";
    productId += 1;
}

inputTag.addEventListener("change", handleChange);