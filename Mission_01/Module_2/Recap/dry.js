// we'll build a order processing system to understand dry and how important a function is.

// price validation
function isValidPrice(price){
    return typeof price === 'number' && price > 0;
}
// email validation
function isValidEmail(email){
    return email.includes("@") & email.includes(".");
}

// calculateDiscount
function calculateDiscount(price, discountPercent){
    if(!isValidPrice(price)){
        return 0;
    }
    let discountAmount = ( price * discountPercent ) / 100;
    return price - discountAmount;
}

// calculate vat &  final bill

function calFinalBill(price, vatPercent=15){
    let vat = (price * vatPercent) /100

    return price + vat;
}

// format taka in bdt
function formatBDT(amount){
    return `${amount.toFixed(2)} BDT`
}

// capitalized
function capitalized(str){
    if(!str) return "";
    return str.charAt(0).toUpperCase()+str.slice(1);
}


// order place

function processOrder(user, itemPrice, discountCode){
    console.log(`--- Processing Order for ${capitalized(user.name)}----`)
    if(!isValidEmail(user.email)){
        console.log("Error: Invalid User email");
        return;
    }

    let currentPrice = itemPrice;

    if(discountCode == "NLB"){
        currentPrice = calculateDiscount(itemPrice, 20);
        console.log("20% discount applied");
    }
    let totalBill = calFinalBill(currentPrice, 10);
    console.log("Final amount to pay: ", formatBDT(totalBill));
    console.log("Order completed Successfully.")
}


let user1 = {name: "joinal", email:"joinal.studio@gmail.com"}

processOrder(user1, 2000, "NLB")