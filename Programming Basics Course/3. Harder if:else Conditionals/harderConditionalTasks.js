// ------------------------Tasks from Lectures--------------------------

// SWITCH CASES

//1. day of the week

function dayOfTheWeek(input) {
    let day = Number(input[0]);

    switch (day) {
        case 1:
            console.log('Monday');
            break;
        case 2:
            console.log('Tuesday');
            break;
        case 3:
            console.log('Wednesday');
            break;
        case 4:
            console.log('Thursday');
            break;
        case 5:
            console.log('Friday');
            break;
        case 6:
            console.log('Saturday');
            break;
        case 7:
            console.log('Sunday');
            break;
        default:
            console.log('Error');
            break;
    }
}

//2. weekend or not

function weekendOrNot(input) {

    let day = input[0]

    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            console.log('Working day');
            break;
        case 'Saturday':
        case 'Sunday':
            console.log('Weekend');
            break;
        default:
            console.log('Error');
            break;

    }
}

//3. fruit or veggie

function fruitOrVeggie(input) {

    let whatIsIt = input[0];

    switch (whatIsIt) {
        case 'banana':
        case 'apple':
        case 'kiwi':
        case 'cherry':
        case 'lemon':
        case 'grapes':
            console.log('fruit');
            break;
        case 'tomato':
        case 'cucumber':
        case 'pepper':
        case 'carrot':
            console.log('vegetable');
            break;
        default:
            console.log('unknown');
            break;

    }

}

// 4. animal type

function animalType(input) {

    let animal = input[0];

    switch (animal) {
        case 'crocodile':
        case 'tortoise':
        case 'snake':
            console.log('reptile');
            break;
        case 'dog':
            console.log('mammal');
            break;
        default:
            console.log('unknown');
            break;

    }
}

// NESTED IF/ELSE CONDITIONALS

//5. how to call you (not in judge)

function howToCallYou(input) {

    let age = Number(input[0]);
    let gender = input[1];

    if (gender === 'f') {
        if (age < 16) {
            console.log('Miss')
        } else {
            console.log('Ms.')
        }
    } else if (gender === 'm') {
        if (age < 16) {
            console.log('Master')
        } else {
            console.log('Mr.')
        }
    }
}

//6. small shop 

function priceInDifferentLocations(input) {

    let product = (input[0]).toLowerCase();
    let city = (input[1]).toLowerCase();
    let quantity = Number(input[2]);

    if (city === 'sofia') {
        if (product === 'coffee') {
            console.log(`${quantity * 0.5}`)
        } else if (product === 'water') {
            console.log(`${quantity * 0.8}`)
        } else if (product === 'beer') {
            console.log(`${quantity * 1.2}`)
        } else if (product === 'peanuts') {
            console.log(`${quantity * 1.6}`)
        } else if (product === 'sweets') {
            console.log(`${quantity * 1.45}`)
        }
    } else if (city === 'plovdiv') {
        if (product === 'coffee') {
            console.log(`${quantity * 0.4}`)
        } else if (product === 'water') {
            console.log(`${quantity * 0.7}`)
        } else if (product === 'beer') {
            console.log(`${quantity * 1.15}`)
        } else if (product === 'peanuts') {
            console.log(`${quantity * 1.5}`)
        } else if (product === 'sweets') {
            console.log(`${quantity * 1.3}`)
        }
    } else if (city === 'varna') {
        if (product === 'coffee') {
            console.log(`${quantity * 0.45}`)
        } else if (product === 'water') {
            console.log(`${quantity * 0.7}`)
        } else if (product === 'beer') {
            console.log(`${quantity * 1.1}`)
        } else if (product === 'peanuts') {
            console.log(`${quantity * 1.55}`)
        } else if (product === 'sweets') {
            console.log(`${quantity * 1.35}`)
        }
    }
}

// LOGICAL OPERATORS && || !

//7. Number in range

function checkNumber(input) {

    let num = Number(input[0]);

    if (num <= 100 && num >= -100 && num !== 0) {
        console.log('Yes')
    } else {
        console.log('No')
    }
}

//8. working hours

function workingHours(input) {

    let hour = Number(input[0]);
    let day = input[1];

    if (hour <= 18 && hour >= 10 && day !== 'Sunday') {
        console.log('open')
    } else {
        console.log('closed')
    }
}

//9. movie ticket 

function priceMovie(input) {

    let day = input[0]

    if (day === 'Monday' || day === 'Tuesday' || day === 'Friday') {
        console.log('12')
    } else if (day === 'Wednesday' || day === 'Thursday') {
        console.log('14')
    } else if (day === 'Saturday' || day === 'Sunday') {
        console.log('16')
    }
}

//10. invalid number

function printIfInvalid(input) {

    let num = Number(input[0])

    let valid = (num >= 100 && num <= 200) || num === 0

    if (!valid) {
        console.log('invalid')
    }
}

//11. fruit shop

function dfferentDayDifferentPrice(input) {

    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);

    if (day === 'Sunday' || day === 'Saturday') {
        switch (fruit) {
            case 'banana':
                console.log((quantity * 2.70).toFixed(2));
                break;
            case 'apple':
                console.log((quantity * 1.25).toFixed(2));
                break;
            case 'orange':
                console.log((quantity * 0.90).toFixed(2));
                break;
            case 'grapefruit':
                console.log((quantity * 1.60).toFixed(2));
                break;
            case 'kiwi':
                console.log((quantity * 3.00).toFixed(2));
                break;
            case 'pineapple':
                console.log((quantity * 5.60).toFixed(2));
                break;
            case 'grapes':
                console.log((quantity * 4.20).toFixed(2));
                break;
            default:
                console.log('error')
                break;
        }
    } else if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday') {
        switch (fruit) {
            case 'banana':
                console.log((quantity * 2.50).toFixed(2));
                break;
            case 'apple':
                console.log((quantity * 1.20).toFixed(2));
                break;
            case 'orange':
                console.log((quantity * 0.85).toFixed(2));
                break;
            case 'grapefruit':
                console.log((quantity * 1.45).toFixed(2));
                break;
            case 'kiwi':
                console.log((quantity * 2.70).toFixed(2));
                break;
            case 'pineapple':
                console.log((quantity * 5.50).toFixed(2));
                break;
            case 'grapes':
                console.log((quantity * 3.85).toFixed(2));
                break;
            default:
                console.log('error');
                break;
        }
    } else {
        console.log('error');
    }
}

//12. comissions

function calculateCommissionRate(input) {

    let city = input[0];
    let commission = Number(input[1]);


    if (city === 'Sofia') {

        if (commission >= 0 && commission <= 500) {
            console.log((commission * 0.05).toFixed(2));
        } else if (commission > 500 && commission <= 1000) {
            console.log((commission * 0.07).toFixed(2))
        } else if (commission > 1000 && commission <= 10000) {
            console.log((commission * 0.08).toFixed(2))
        } else if (commission > 10000) {
            console.log((commission * 0.12).toFixed(2))
        } else {
            console.log('error')
        }

    } else if (city === 'Varna') {
        if (commission >= 0 && commission <= 500) {
            console.log((commission * 0.045).toFixed(2));
        } else if (commission > 500 && commission <= 1000) {
            console.log((commission * 0.075).toFixed(2))
        } else if (commission > 1000 && commission <= 10000) {
            console.log((commission * 0.1).toFixed(2))
        } else if (commission > 10000) {
            console.log((commission * 0.13).toFixed(2))
        } else {
            console.log('error')
        }

    } else if (city === 'Plovdiv') {
        if (commission >= 0 && commission <= 500) {
            console.log((commission * 0.055).toFixed(2));
        } else if (commission > 500 && commission <= 1000) {
            console.log((commission * 0.08).toFixed(2))
        } else if (commission > 1000 && commission <= 10000) {
            console.log((commission * 0.12).toFixed(2))
        } else if (commission > 10000) {
            console.log((commission * 0.145).toFixed(2))
        } else {
            console.log('error')
        }

    } else {
        console.log('error')
    }
}


//-----------------------TASKS FROM EXERCISE------------------------------- 

//1. movie

function revenueFromMovie(input) {

    let typeOfProjection = input[0].toLowerCase();
    let rows = Number(input[1]);
    let col = Number(input[2]);

    let area = rows * col;

    if (typeOfProjection === 'premiere') {
        console.log(`${(area * 12).toFixed(2)} leva`)
    } else if (typeOfProjection === 'normal') {
        console.log(`${(area * 7.5).toFixed(2)} leva`)
    } else if (typeOfProjection === 'discount') {
        console.log(`${(area * 5).toFixed(2)} leva`)
    }

}

//2. summer clothes

function typeOfClothesToWear(input) {

    let degrees = Number(input[0]);
    let partOfDay = input[1].toLowerCase();

    let outfit = '';
    let shoes = '';

    if (partOfDay === 'morning') {

        if (degrees >= 10 && degrees <= 18) {
            outfit = 'Sweatshirt';
            shoes = 'Sneakers';
        } else if (degrees > 18 && degrees <= 24) {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        } else if (degrees >= 25) {
            outfit = 'T-Shirt';
            shoes = 'Sandals';
        }
        console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
    } else if (partOfDay === 'afternoon') {
        if (degrees >= 10 && degrees <= 18) {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        } else if (degrees > 18 && degrees <= 24) {
            outfit = 'T-Shirt';
            shoes = 'Sandals';
        } else if (degrees >= 25) {
            outfit = 'Swim Suit';
            shoes = 'Barefoot';
        }
        console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
    } else if (partOfDay === 'evening') {
        if (degrees >= 10 && degrees <= 18) {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        } else if (degrees > 18 && degrees <= 24) {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        } else if (degrees >= 25) {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }
        console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
    }
}

//3. garden

function costOfGardenFlowers(input) {

    let flowerType = input[0];
    let numOfFlowers = Number(input[1]);
    let budget = Number(input[2]);

    if (flowerType === 'Roses') {
        let price = numOfFlowers * 5;

        if (numOfFlowers > 80) {
            price -= price * 0.1;
        }

        if (price <= budget) {
            console.log(`Hey, you have a great garden with ${numOfFlowers} ${flowerType} and ${(budget - price).toFixed(2)} leva left.`)
        } else {
            console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`)
        }


    } else if (flowerType === 'Dahlias') {
        let price = numOfFlowers * 3.80;

        if (numOfFlowers > 90) {
            price -= price * 0.15;
        }

        if (price <= budget) {
            console.log(`Hey, you have a great garden with ${numOfFlowers} ${flowerType} and ${(budget - price).toFixed(2)} leva left.`)
        } else {
            console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`)
        }


    } else if (flowerType === 'Tulips') {
        let price = numOfFlowers * 2.80;

        if (numOfFlowers > 80) {
            price -= price * 0.15;
        }

        if (price <= budget) {
            console.log(`Hey, you have a great garden with ${numOfFlowers} ${flowerType} and ${(budget - price).toFixed(2)} leva left.`)
        } else {
            console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`)
        }


    } else if (flowerType === 'Narcissus') {
        let price = numOfFlowers * 3;

        if (numOfFlowers < 120) {
            price += price * 0.15;
        }

        if (price <= budget) {
            console.log(`Hey, you have a great garden with ${numOfFlowers} ${flowerType} and ${(budget - price).toFixed(2)} leva left.`)
        } else {
            console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`)
        }


    } else if (flowerType === 'Gladiolus') {
        let price = numOfFlowers * 2.5;

        if (numOfFlowers < 80) {
            price += price * 0.2;
        }

        if (price <= budget) {
            console.log(`Hey, you have a great garden with ${numOfFlowers} ${flowerType} and ${(budget - price).toFixed(2)} leva left.`)
        } else {
            console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`)
        }


    }
}

//4. fishing boat

function boatTripPrice(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let numOfFishermen = Number(input[2]);

    let discount = 0

    if (numOfFishermen <= 6) {
        discount += 0.1
    } else if (numOfFishermen >= 7 && numOfFishermen <= 11) {
        discount += 0.15
    } else if (numOfFishermen >= 12) {
        discount += 0.25
    }

    if (season === 'Spring') {
        let boatPrice = 3000;

        boatPrice -= boatPrice * discount

        if (numOfFishermen % 2 === 0) {
            boatPrice -= boatPrice * 0.05
        }

        if (budget >= boatPrice) {
            console.log(`Yes! You have ${(budget - boatPrice).toFixed(2)} leva left.`)
        } else {
            console.log(`Not enough money! You need ${(boatPrice - budget).toFixed(2)} leva.`)
        }


    } else if (season === 'Summer' || season === 'Autumn') {
        let boatPrice = 4200;

        boatPrice -= boatPrice * discount

        if (numOfFishermen % 2 === 0 && season === 'Summer') {
            boatPrice -= boatPrice * 0.05
        }

        if (budget >= boatPrice) {
            console.log(`Yes! You have ${(budget - boatPrice).toFixed(2)} leva left.`)
        } else {
            console.log(`Not enough money! You need ${(boatPrice - budget).toFixed(2)} leva.`)
        }


    } else if (season === 'Winter') {
        let boatPrice = 2600;

        boatPrice -= boatPrice * discount

        if (numOfFishermen % 2 === 0) {
            boatPrice -= boatPrice * 0.05
        }

        if (budget >= boatPrice) {
            console.log(`Yes! You have ${(budget - boatPrice).toFixed(2)} leva left.`)
        } else {
            console.log(`Not enough money! You need ${(boatPrice - budget).toFixed(2)} leva.`)
        }
    }
}

//5. trip

function planYourVacantion(input) {

    let budget = Number(input[0]);
    let season = input[1].toLowerCase();

    let destination;
    let typeOfVac;

    if (budget <= 100) {
        destination = 'Bulgaria'

        if (season === 'summer') {
            typeOfVac = 'Camp'
            console.log(`Somewhere in ${destination}`)
            console.log(`${typeOfVac} - ${(budget * 0.3).toFixed(2)}`)
        } else if (season === 'winter') {
            typeOfVac = 'Hotel'
            console.log(`Somewhere in ${destination}`)
            console.log(`${typeOfVac} - ${(budget * 0.7).toFixed(2)}`)
        }
    } else if (budget <= 1000) {
        destination = 'Balkans'

        if (season === 'summer') {
            typeOfVac = 'Camp'
            console.log(`Somewhere in ${destination}`)
            console.log(`${typeOfVac} - ${(budget * 0.4).toFixed(2)}`)
        } else if (season === 'winter') {
            typeOfVac = 'Hotel'
            console.log(`Somewhere in ${destination}`)
            console.log(`${typeOfVac} - ${(budget * 0.8).toFixed(2)}`)
        }
    } else if (budget > 1000) {
        destination = 'Europe'
        typeOfVac = 'Hotel'

        console.log(`Somewhere in ${destination}`)
        console.log(`${typeOfVac} - ${(budget * 0.9).toFixed(2)}`)

    }
}

//6. operations with numbers

function operationsWithNumbers(input) {

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operator = input[2];

    let oddOrEven;

    if (operator === '+') {
        let result = num1 + num2

        if (result % 2 === 0) {
            oddOrEven = 'even'
        } else {
            oddOrEven = 'odd'
        }
        console.log(`${num1} ${operator} ${num2} = ${result} - ${oddOrEven}`)

    } else if (operator === '-') {
        let result = num1 - num2

        if (result % 2 === 0) {
            oddOrEven = 'even'
        } else {
            oddOrEven = 'odd'
        }

        console.log(`${num1} ${operator} ${num2} = ${result} - ${oddOrEven}`)

    } else if (operator === '*') {
        let result = num1 * num2

        if (result % 2 === 0) {
            oddOrEven = 'even'
        } else {
            oddOrEven = 'odd'
        }

        console.log(`${num1} ${operator} ${num2} = ${result} - ${oddOrEven}`)

    } else if (operator === '/') {
        let result = num1 / num2
        if (num2 === 0) {
            console.log(`Cannot divide ${num1} by zero`)
        } else {
            console.log(`${num1} ${operator} ${num2} = ${result.toFixed(2)}`)
        }
    } else if (operator === '%') {
        let result = num1 % num2
        if (num2 === 0) {
            console.log(`Cannot divide ${num1} by zero`)
        } else {
            console.log(`${num1} ${operator} ${num2} = ${result}`)
        }
    }
}

//7. hotel room

function priceOfRoom(input) {

    let month = input[0].toLowerCase();
    let numOfNights = Number(input[1]);

    let studioPrice = 1;
    let apartmentPrice = 1;

    let finalPriceStudio = 1;
    let finalPriceApartment = 1;

    if (month === 'may' || month === 'october') {
        studioPrice = 50;
        apartmentPrice = 65;

        if (numOfNights > 7 && numOfNights <= 14) {
            studioPrice -= studioPrice * 0.05
        } else if (numOfNights > 14) {
            studioPrice -= studioPrice * 0.3
            apartmentPrice -= apartmentPrice * 0.1
        }

        finalPriceStudio = numOfNights * studioPrice;
        finalPriceApartment = numOfNights * apartmentPrice;

        console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.`)
        console.log(`Studio: ${finalPriceStudio.toFixed(2)} lv.`)

    } else if (month === 'june' || month === 'september') {
        studioPrice = 75.2;
        apartmentPrice = 68.7;

        if (numOfNights > 14) {
            studioPrice -= studioPrice * 0.2
            apartmentPrice -= apartmentPrice * 0.1
        }

        finalPriceStudio = numOfNights * studioPrice;
        finalPriceApartment = numOfNights * apartmentPrice;

        console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.`)
        console.log(`Studio: ${finalPriceStudio.toFixed(2)} lv.`)

    } else if (month === 'july' || month === 'august') {
        studioPrice = 76;
        apartmentPrice = 77;

        if (numOfNights > 14) {
            apartmentPrice -= apartmentPrice * 0.1
        }

        finalPriceStudio = numOfNights * studioPrice;
        finalPriceApartment = numOfNights * apartmentPrice;

        console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.`)
        console.log(`Studio: ${finalPriceStudio.toFixed(2)} lv.`)

    }
}

//8. on time for exam

function timeForExam(input) {

    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arriveHour = Number(input[2]);
    let arriveMin = Number(input[3]);

    let examInMin = (examHour * 60) + examMin;
    let arriveInMin = (arriveHour * 60) + arriveMin;

    let timeDiff = examInMin - arriveInMin

    if (timeDiff >= 0) {
        if (timeDiff <= 30) {
            console.log(`On time`)

            if (timeDiff > 0) {

                console.log(`${timeDiff} minutes before the start`)

            }
        } else if (timeDiff < 60) {
            console.log('Early')
            console.log(`${timeDiff} minutes before the start`)
        } else if (timeDiff > 59) {

            let hour = Math.abs(Math.floor(timeDiff / 60)) // obrushtame chasovete
            let min = Math.abs(timeDiff % 60) // obrashtame minuteite

            console.log('Early')
            if (min < 10) {
                console.log(`${hour}:0${min} hours before the start`)
            } else {
                console.log(`${hour}:${min} hours before the start`)
            }

        }
    } else if (timeDiff < 0) {
        timeDiff = Math.abs(timeDiff)

        if (timeDiff > 0 && timeDiff < 60) {
            console.log(`Late`)
            console.log(`${timeDiff} minutes after the start`)
        } else if (timeDiff < 60) {
            console.log('Late')
            console.log(`${timeDiff} minutes after the start`)
        } else if (timeDiff > 59) {

            let hour = Math.abs(Math.floor(timeDiff / 60))
            let min = Math.abs(timeDiff % 60)

            console.log('Late')
            if (min < 10) {
                console.log(`${hour}:0${min} hours after the start`)
            } else {
                console.log(`${hour}:${min} hours after the start`)
            }

        }
    }

}

//9. vacation hotel room cost

function roomCost(input) {

    let days = Number(input[0]);
    let roomType = input[1].toLowerCase();
    let rate = input[2].toLowerCase();

    let nights = days - 1;

    if (roomType === 'room for one person') {
        let price = nights * 18

        if (rate === 'positive') {
            price += price * 0.25
        } else if (rate === 'negative') {
            price -= price * 0.1
        }

        console.log(price.toFixed(2))
    } else if (roomType === 'apartment') {
        let price = nights * 25

        if (days < 10) {
            price -= price * 0.3
        } else if (days < 15) {
            price -= price * 0.35
        } else if (days > 15) {
            price -= price * 0.5
        }

        if (rate === 'positive') {
            price += price * 0.25
        } else if (rate === 'negative') {
            price -= price * 0.1
        }

        console.log(price.toFixed(2))
    } else if (roomType === 'president apartment') {
        let price = nights * 35

        if (days < 10) {
            price -= price * 0.1
        } else if (days < 15) {
            price -= price * 0.15
        } else if (days > 15) {
            price -= price * 0.2
        }

        if (rate === 'positive') {
            price += price * 0.25
        } else if (rate === 'negative') {
            price -= price * 0.1
        }

        console.log(price.toFixed(2))
    }
}