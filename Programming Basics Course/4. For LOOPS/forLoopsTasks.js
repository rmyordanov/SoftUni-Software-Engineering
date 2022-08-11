// ---------------------------------LAB (LECTURE TASKS)-----------------------------------

//1. numbers 1 to 100

function print1to100() {
    for (i = 1; i <= 100; i++) {
        console.log(i)
    }
}

//2. numbers N to 1

function printNto1(input) {

    let num = Number(input[0])
    for (i = num; i >= 1; i--) {
        console.log(i)
    }
}

//3. print over 3

function printNumOver3(input) {

    let num = Number(input[0]);

    for (i = 1; i <= num; i += 3) {
        console.log(i)
    }
}

//4. even power of 2

function printEvenPow(input) {

    let pow = Number(input[0]);
    let num = 1
    for (i = 0; i <= pow; i += 2) {
        console.log(num)
        num = num * 2 * 2

    }
}

//5. print text

function printEachLetter(input) {

    let text = input[0];

    for (i = 0; i < text.length; i++) {
        console.log(text[i])
    }
}

//6. sum the vowls 

function sumTheVowels(input) {

    let word = input[0];
    let sum = 0

    for (i = 0; i <= word.length; i++) {
        switch (word.charAt(i)) {
            case 'a':
                sum += 1;
                break;
            case 'e':
                sum += 2;
                break;
            case 'i':
                sum += 3;
                break;
            case 'o':
                sum += 4;
                break;
            case 'u':
                sum += 5;
                break;
        }
    }

    console.log(sum)
}

//7. sum the digits

function sumTheDigits(input) {

    let digits = input[0];
    let sum = 0;
    for (i = 0; i < digits.length; i++) {

        sum += Number(digits.charAt(i))
    }

    console.log(`The sum of the digits is:${sum}`)
}

//8. sum the numbers divisible by 9 in the range...

function sumTheNumsInRangeDevBy9(input) {

    let first = Number(input[0]);
    let second = Number(input[1]);

    let sum = 0;


    for (i = first; i <= second; i++) {

        if (i % 9 === 0) {
            sum += i
        }

    }

    console.log(`The sum: ${sum}`)

    for (i = first; i <= second; i++) {

        if (i % 9 === 0) {
            console.log(i)
        }

    }

}


// ------------------------------TASKS FROM WORKSHOP (EXERSICE LECTURE)------------------------------

//1. print numbers that end with 7

function printNumsEnds7() {

    for (i = 7; i <= 997; i++) {
        if (i % 10 === 7) {
            console.log(i);
        }
    }
}

//2. multiply table

function multiplyingTable(input) {

    let num = Number(input[0]);

    for (i = 1; i <= 10; i++) {
        console.log(`${i} * ${num} = ${i*num}`)
    }
}

//3. histogram

function histogram(input) {

    let numOfNums = Number(input[0]);

    let countNumsUnder200 = 0;
    let count200to399 = 0;
    let count400to599 = 0;
    let count600to799 = 0;
    let count800andAbove = 0;

    for (i = 1; i <= numOfNums; i++) {
        let nums = Number(input[i])
        if (nums < 200) {
            countNumsUnder200++
        } else if (nums >= 200 && nums < 400) {
            count200to399++
        } else if (nums >= 400 && nums < 600) {
            count400to599++
        } else if (nums >= 600 && nums < 800) {
            count600to799++
        } else if (nums >= 800) {
            count800andAbove++
        }
    }

    let p1Under200 = ((countNumsUnder200 / numOfNums) * 100).toFixed(2);
    let p2200and400 = ((count200to399 / numOfNums) * 100).toFixed(2);
    let p3400and600 = ((count400to599 / numOfNums) * 100).toFixed(2);
    let p4600and800 = ((count600to799 / numOfNums) * 100).toFixed(2);
    let p5Above800 = ((count800andAbove / numOfNums) * 100).toFixed(2);

    console.log(p1Under200 + '%');
    console.log(p2200and400 + '%');
    console.log(p3400and600 + '%');
    console.log(p4600and800 + '%');
    console.log(p5Above800 + '%');

}

//4. Clever Lilly

function enoughMoneyForWashingMachine(input) {

    let lillysAge = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let pricePerToy = Number(input[2]);

    let moneyFromBirthdays = 0;
    let birthdayMoney = 0
    let numsOfToys = 0;
    let brotherTakesCommission = 0;

    for (i = 1; i <= lillysAge; i++) {

        if (i % 2 === 0) {
            moneyFromBirthdays += 10;
            birthdayMoney += moneyFromBirthdays
            brotherTakesCommission++
        } else {
            numsOfToys++
        }
    }

    let savedMoney = (birthdayMoney - brotherTakesCommission) + (numsOfToys * pricePerToy);

    if (savedMoney >= washingMachinePrice) {
        console.log(`Yes! ${(savedMoney - washingMachinePrice).toFixed(2)}`)
    } else {
        console.log(`No! ${(washingMachinePrice-savedMoney).toFixed(2)}`)
    }
}


//5. Salary

function penaltyForDistraction(input) {

    let openTabs = Number(input[0]);
    let salary = Number(input[1]);


    for (i = 0; i < (openTabs); i++) {
        let openSait = (input[i + 2]).toLowerCase();
        if (openSait === 'facebook') {
            salary -= 150
        } else if (openSait === 'instagram') {
            salary -= 100
        } else if (openSait === 'reddit') {
            salary -= 50
        } else {
            salary -= 0
        }

        if (salary <= 0) {
            console.log(`You have lost your salary.`)
            break;
        }
    }

    if (salary > 0) {
        console.log(salary)
    }

}

//6. oscars

function theOscarGoesTo(input) {

    let actor = input[0]
    let pointsFromAcademy = Number(input[1]);
    let numOfJourey = Number(input[2]);

    let pointsForNomination = pointsFromAcademy;


    for (i = 3; i < ((numOfJourey * 2) + 3); i += 2) {
        let joureyName = input[i];
        let joureyPoints = Number(input[i + 1]);

        pointsForNomination += (((joureyName.length) * joureyPoints) / 2)

        if (pointsForNomination >= 1250.5) {
            break;
        }
    }

    if (pointsForNomination >= 1250.5) {
        console.log(`Congratulations, ${actor} got a nominee for leading role with ${(pointsForNomination).toFixed(1)}!`)
    } else {
        console.log(`Sorry, ${actor} you need ${(1250.5 - pointsForNomination).toFixed(1)} more!`)
    }
}

//7. treking mania

function climbingMountains(input) {

    let numOfGroups = Number(input[0]);
    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (i = 1; i <= numOfGroups; i++) {
        let numOfPeopeleInSingleGroup = Number(input[i]);

        if (numOfPeopeleInSingleGroup < 6) {
            musala += numOfPeopeleInSingleGroup;
        } else if (numOfPeopeleInSingleGroup >= 6 && numOfPeopeleInSingleGroup <= 12) {
            monblan += numOfPeopeleInSingleGroup;
        } else if (numOfPeopeleInSingleGroup >= 13 && numOfPeopeleInSingleGroup < 26) {
            kilimandjaro += numOfPeopeleInSingleGroup;
        } else if (numOfPeopeleInSingleGroup >= 26 && numOfPeopeleInSingleGroup < 41) {
            k2 += numOfPeopeleInSingleGroup
        } else if (numOfPeopeleInSingleGroup >= 41) {
            everest += numOfPeopeleInSingleGroup
        }
    }

    let totalNumofPeople = musala + monblan + kilimandjaro + k2 + everest;

    let p1musala = ((musala / totalNumofPeople) * 100).toFixed(2);
    let p2monblan = ((monblan / totalNumofPeople) * 100).toFixed(2);
    let p3kili = ((kilimandjaro / totalNumofPeople) * 100).toFixed(2);
    let p4k2 = ((k2 / totalNumofPeople) * 100).toFixed(2);
    let p5everest = ((everest / totalNumofPeople) * 100).toFixed(2);

    console.log(`${p1musala}%`)
    console.log(`${p2monblan}%`)
    console.log(`${p3kili}%`)
    console.log(`${p4k2}%`)
    console.log(`${p5everest}%`)

}

//8. tennis ranklist

function pointsForGrisho(input) {

    let numOfTournament = Number(input[0]);
    let currentPoints = Number(input[1]);

    let pointsFromEachTournament = 0;
    let numOfWonTournaments = 0

    for (i = 0; i < numOfTournament; i++) {
        let resultFromTournament = input[i + 2].toLowerCase();

        if (resultFromTournament === 'f') {
            currentPoints += 1200
            pointsFromEachTournament += 1200
        } else if (resultFromTournament === 'w') {
            currentPoints += 2000
            numOfWonTournaments++
            pointsFromEachTournament += 2000
        } else if (resultFromTournament === 'sf') {
            currentPoints += 720
            pointsFromEachTournament += 720
        }
    }

    let finalPoints = currentPoints;
    let averagePoints = Math.floor(pointsFromEachTournament / numOfTournament)
    let p1OfWonTournaments = ((numOfWonTournaments / numOfTournament) * 100).toFixed(2)

    console.log(`Final points: ${finalPoints}`)
    console.log(`Average points: ${averagePoints}`)
    console.log(`${p1OfWonTournaments}%`)
}