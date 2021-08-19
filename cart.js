function updateQuantity(product, price, isAdd){
    const input = document.getElementById(product +'-input');
    let inputFind = input.value ;
    if(isAdd == true){
        inputFind = parseInt(inputFind) + 1;
    }
    else if(inputFind > 0){
        inputFind = parseInt(inputFind) - 1;
    }

    input.value = inputFind;


    // text update 

    const updateprice = document.getElementById(product +'-total');
    updateprice.innerText = inputFind * price;

    // total update
    
    calculate();
}

function valueFind(product){
    const inputField = document.getElementById(product +'-input');
    const inputNumber = inputField.value;
    return inputNumber;
}

function calculate(){

    const phoneTotal = valueFind('phone') * 1219;
    const caseTotal = valueFind('case') * 59;
    const subTotal = phoneTotal + caseTotal; 
    const tax = subTotal / 10;
    const totalAmount = subTotal + tax;


    document.getElementById('sub-amount').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-amount').innerText = totalAmount;
}

document.getElementById('phone-plus').addEventListener('click', function(){
    updateQuantity('phone', 1219, true);
})

document.getElementById('phone-minus').addEventListener('click', function(){
    updateQuantity('phone', 1219, false);
})

document.getElementById('case-plus').addEventListener('click', function(){
    updateQuantity('case', 59, true);
})

document.getElementById('case-minus').addEventListener('click', function(){
    updateQuantity('case', 59, false);
})


