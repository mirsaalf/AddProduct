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
function getSkinProduct():SkinProduct {
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

function displayProduct(myProduct:SkinCareProduct:void) {
    //TODO: Display product below the form
}

