class SkinCare {
    name:string;
    price:number;
    type:string;
    isOnlineOnly:boolean;
}

//test code
/* let myProduct = new SkinCare();
myProduct.name = "Beauty of Joseon SPF 50";
myProduct.price = 16.00;
myProduct.type = "Skin Protectant";
myProduct.isOnlineOnly = true; */

window.onload = function() {
    let addBtn = 
        <HTMLElement>document.getElementById("button");
    addBtn.onclick = addSkinProduct;
}

function addSkinProduct() {
    if(isAllDataValid()) {
        let product = getSkinProduct();
        displayProduct(product);
    }
}

// ADD VALIDATION CODE *****************
function isAllDataValid() {
    return true;
}

/**
 * 
 * Gets all product data from the form and 
 * returns it in a product object
 */
function getSkinProduct():SkinCare {
    let product = new SkinCare();
    let nameInput =
        <HTMLInputElement>document.getElementById("name");
    product.name = nameInput.value;

    let priceInput = 
        <HTMLInputElement>document.getElementById("price");
    product.price = parseFloat(priceInput.value);

    let typeInput =
        <HTMLSelectElement>document.getElementById("type");
    product.type = typeInput.value;

    let onlineOnlyInput =
        <HTMLInputElement>document.getElementById("online");
    if(onlineOnlyInput.checked) {
        product.isOnlineOnly = true;
    }
    else {
        product.isOnlineOnly = false;
    }
    
    return product;
}

function displayProduct(myProduct:SkinCare):void {
    let displayDiv = document.getElementById("display");

    // Create h2 with product name
    let productHeading = document.createElement("h2");
    productHeading.innerText = myProduct.name;

    // Create paragraph with product details
    let productInfo = document.createElement("p");
    let notOnlineDisplay = "";
    if (myProduct.isOnlineOnly) {
        notOnlineDisplay = "not ";
    }
    productInfo.innerText = myProduct.name + " is a " +
        myProduct.type + ". It costs " + myProduct.price + 
        ". It is " + notOnlineDisplay + "only available online";

    // add h2 in the <div id="display">
    displayDiv.appendChild(productHeading);
    displayDiv.appendChild(productInfo);
}

