var SkinCare = (function () {
    function SkinCare() {
    }
    return SkinCare;
}());
window.onload = function () {
    var addBtn = document.getElementById("button");
    addBtn.onclick = addSkinProduct;
};
function clearAllErrors() {
    var errSummary = document.getElementById("validation-summary");
    errSummary.innerText = "";
}
function addSkinProduct() {
    clearAllErrors();
    if (isAllDataValid()) {
        var product = getSkinProduct();
        displayProduct(product);
    }
}
function isAllDataValid() {
    var isValid = true;
    var name = document.getElementById("name").value;
    if (name == "") {
        isValid = false;
        addErrorMessage("Name is required!");
    }
    var price = document.getElementById("price").value;
    var priceValue = parseFloat(price);
    if (price == "" || priceValue == NaN) {
        isValid = false;
        addErrorMessage("Price is required!");
    }
    var type = document.getElementById("type").value;
    if (type == "") {
        isValid = false;
        addErrorMessage("You must choose a type!");
    }
    return isValid;
}
function addErrorMessage(errMsg) {
    var errSummary = document.getElementById("validation-summary");
    var errItem = document.createElement("li");
    errItem.innerText = errMsg;
    errSummary.appendChild(errItem);
}
function getSkinProduct() {
    var product = new SkinCare();
    var nameInput = document.getElementById("name");
    product.name = nameInput.value;
    var priceInput = document.getElementById("price");
    product.price = parseFloat(priceInput.value);
    var typeInput = document.getElementById("type");
    product.type = typeInput.value;
    var onlineOnlyInput = document.getElementById("online");
    if (onlineOnlyInput.checked) {
        product.isOnlineOnly = true;
    }
    else {
        product.isOnlineOnly = false;
    }
    return product;
}
function displayProduct(myProduct) {
    var displayDiv = document.getElementById("display");
    var productHeading = document.createElement("h2");
    productHeading.innerText = myProduct.name;
    var productInfo = document.createElement("p");
    var notOnlineDisplay = "";
    if (myProduct.isOnlineOnly) {
        notOnlineDisplay = "not ";
    }
    productInfo.innerText = myProduct.name + " is a " +
        myProduct.type + ". It costs " + myProduct.price +
        ". It is " + notOnlineDisplay + "only available online";
    displayDiv.appendChild(productHeading);
    displayDiv.appendChild(productInfo);
}
