var SkinCare = (function () {
    function SkinCare() {
    }
    return SkinCare;
}());
window.onload = function () {
    var addBtn = document.getElementById("button");
    addBtn.onclick = addSkinProduct;
};
function addSkinProduct() {
    if (isAllDataValid()) {
        var product = getSkinProduct();
        displayProduct(product);
    }
}
function isAllDataValid() {
    return true;
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
function displayProduct(myProduct, ) {
}
