// Hey Kiddo
const theKiddoosAge = function(number){
    if (number >= 18){
        return "true";
    }
    return "false";
};
const result = theKiddoosAge(17);
console.log(result);

const theAdultAge = function(number){
    theKiddoosAge();
    if (number >= 18){
        return "Hello there";
    }
    return "Hey Kiddo"
};
const checkAge = theAdultAge(17);
console.log(checkAge);

// Vat calculations
const vat = function(numberA, numberB){
    return numberA * numberB;
};

// Vat hoog tarief 21%
const basePriceComputer = 1000;
const vatComputer = vat(basePriceComputer ,0.21);
console.log(vatComputer);
const totalPriceComputer = (basePriceComputer + vatComputer);
console.log(totalPriceComputer);

// Vat laag tarief 9%
const basePriceBread = 2;
const vatBread = vat(basePriceBread ,0.09);
console.log(vatBread);
const totalPriceBread = (basePriceBread + vatBread);
console.log(totalPriceBread);

// Vat calculations vat included
const vatReverse = function(numberC, numberD){
    return numberC / numberD;
};

// Vat hoog tarief 21%
const totalPriceComputerB = 2420;
const baseComputerB = vatReverse(totalPriceComputerB, 1.21);
console.log(baseComputerB);
const vatComputerB = (totalPriceComputerB - baseComputerB)
console.log(vatComputerB);

// Vat laag tarief 21%
const totalPriceBreadB = 4.36;
const baseBreadB = vatReverse(totalPriceBreadB, 1.09);
console.log(baseBreadB);
const vatBreadB = (totalPriceBreadB - baseBreadB)
console.log(vatBreadB);

