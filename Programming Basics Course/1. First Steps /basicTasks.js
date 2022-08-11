// 1. Currency Convertor

function converterBGNtoUSD (input){
    let lv = Number(input[0]);
    let usd = lv * 1.79549;

    console.log(usd);
}

//2. Temperature Units Convertor

function converterRADtoDEG (input){
    let rad = Number(input[0]);
    let deg = rad * 180/Math.PI;

    console.log(deg);
}

//3. Deposit Calculator

function moneyFromDeposit (input){
    let deposit = Number(input[0]);
    let timeOfDeposit = Number(input[1]);
    let YIR = Number(input[2]);

    let earning = deposit + timeOfDeposit * (((deposit * YIR)/100)/12);

    console.log(earning);
}

//4. Mandatory Books

function hoursToReadPerDay (input) {
    let pages = Number(input[0]);
    let readPagesPerHour = Number(input[1]);
    let numOfDays = Number(input[2]);

    let totalHours = pages / readPagesPerHour;
    let hoursPerDay = totalHours / numOfDays;

    console.log(hoursPerDay);

}

//-----------------------Exercise Tasks------------------------

//1. School Materials

function moneyForScoolMaterials (input) {
    let penPackages = Number(input[0]) * 5.80;
    let markerPackages = Number(input[1]) * 7.20;
    let cleaningDetergent = Number(input[2]) * 1.20;
    let discount = Number(input[3]) / 100;

    let price = penPackages + markerPackages + cleaningDetergent;
    let finalPrice = price - (price * discount);

    console.log(finalPrice);
}

//2. Repainting

function renovationPrice (input) {

    let plasticCover = (Number(input[0]) + 2) * 1.50;
    let paint = (Number(input[1]) * 1.10) * 14.50;
    let paintDelution = Number(input[2]) * 5;
    let renovationHours = Number(input[3]);

    let priceForMaterials = plasticCover + paint + paintDelution + 0.40;
    let priceForWork = (priceForMaterials * 0.30) * renovationHours;

    let finalPrice = priceForMaterials + priceForWork;

    console.log(finalPrice);
    
}

//3. Food Delivery

function foodDeliveryPrice (input) {

    let chickenMenu = Number(input[0]) * 10.35;
    let fishMenu = Number(input[1]) * 12.40;
    let vegieMenu = Number(input[2]) * 8.15;

    let desertPrice = (chickenMenu + fishMenu + vegieMenu) * 0.20;

    let finalPrice = chickenMenu + fishMenu + vegieMenu + desertPrice + 2.50;

    console.log(finalPrice)
}

//4. Basketball Equipment

function trainingExpences (input) {

    let pricePerYear = Number(input[0]);

    let shoes = pricePerYear - (pricePerYear * 0.40);
    let clothes = shoes - (shoes * 0.20);
    let ball = clothes / 4;
    let accessories = ball / 5;

    let price = pricePerYear + shoes + clothes + ball + accessories;

    console.log(price);
}

//5. Fish Tank

function littersToFillAquarium (input) {

    let lengthSM = Number(input[0]);
    let widthSM = Number(input[1]);
    let heightSM = Number(input[2]);
    let percent = Number(input[3]);

    let volumeInSM3 = lengthSM * widthSM * heightSM;
    let volumeInLitres = volumeInSM3 / 1000;

    let areaTakenFromOtherThanWaterThings = percent / 100;

    let littersToFilled = volumeInLitres * (1 - areaTakenFromOtherThanWaterThings);

    console.log(littersToFilled);
}