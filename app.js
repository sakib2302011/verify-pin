function generatePin(){
    const random = Math.round(Math.random()*10000);
    
    return random;
}
function getPin(){
    const pin = generatePin();
    const pinString = pin + '';

    if(pinString.length === 4){
        return pin;
    }
    else{
        console.log("you didn't got 4 digit pin you got ");
        console.log(pin);
        return getPin();
    }
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    // display pin
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin ;
})

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText ;
    const typedNumbersField = document.getElementById('typed-numbers');
    const previousTypedNumbers = typedNumbersField.value ;

    if(isNaN(number)){
        if(number === 'C'){
            typedNumbersField.value = '';
        }
        else if(number === '<'){
            const digits = previousTypedNumbers.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumbersField.value = remainingDigits;
        }

    }
    else{
        const newTypedNumbers = previousTypedNumbers + number ;
        typedNumbersField.value = newTypedNumbers ;
    }
})
document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value ;

    const typedNumbersField = document.getElementById('typed-numbers');
    const typedNumbers = typedNumbersField.value ;
    
    const pinCorrectMessege = document.getElementById('pin-correct');
    const pinWrongMessege = document.getElementById('pin-wrong');
    if(typedNumbers === currentPin){
        pinCorrectMessege.style.display = 'block';
        pinWrongMessege.style.display = 'none';
    }
    else{
        pinWrongMessege.style.display = 'block';
        pinCorrectMessege.style.display = 'none';
    }
})