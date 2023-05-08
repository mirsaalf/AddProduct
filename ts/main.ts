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

function clearAllErrors() {
    let errSummary = document.getElementById("validation-summary");
    errSummary.innerText = "";
}

function addSkinProduct() {
    clearAllErrors();
    if(isAllDataValid()) {
        let product = getSkinProduct();
        displayProduct(product);
    }
}

function isAllDataValid() {
    let isValid = true;

    let name = 
        (<HTMLInputElement>document.getElementById("name")).value;
    if (name == "") {
        isValid = false;
        addErrorMessage("Name is required!");
    }

    let price = 
        (<HTMLInputElement>document.getElementById("price")).value;
    let priceValue = parseFloat(price); 
    if (price == "" || priceValue == NaN) {
        isValid = false;
        addErrorMessage("Price is required!");
    }

    let type =
        (<HTMLOptionElement>document.getElementById("type")).value;
    if (type == "") {
        isValid = false;
        addErrorMessage("You must choose a type!");
    }

    return isValid;
}

function addErrorMessage(errMsg:string) {
    let errSummary = document.getElementById("validation-summary");
    let errItem = document.createElement("li");
    errItem.innerText = errMsg;

    errSummary.appendChild(errItem);
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

