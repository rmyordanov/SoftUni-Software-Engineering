// -------------------------------Lab Tasks - Lecture----------------------------------------

//1. excellent degree

function printIfExcelent(input) {
    let degree = Number(input[0]);

    if (degree >= 5.50) {
        console.log('Excellent!')
    }
}

//2. greater number

function findGraterNumber(input) {

    let a = Number(input[0]);
    let b = Number(input[1]);

    if (a > b) {
        console.log(a)
    } else {
        console.log(b)
    }
}

//3. even or odd

function evenOrOdd(input) {

    let num = Number(input[0]);

    if (num % 2 === 0) {
        console.log('even')
    } else {
        console.log('odd')
    }
}


//4. password match

function checkThePassword(input) {
    let pass = input[0];

    if (pass === 's3cr3t!P@ssw0rd') {
        console.log('Welcome')
    } else {
        console.log('Wrong password!')
    }
}

//5. check the number

function checkTheNum(input) {

    let num = Number(input[0]);

    if (num > 200) {
        console.log('Greater than 200')
    } else if (num < 100) {
        console.log('Less than 100')
    } else {
        console.log('Between 100 and 200')
    }
}

//6. speed info

function speedInfo(input) {
    let speed = Number(input[0]);

    if (speed <= 10) {
        console.log('slow')
    } else if (speed <= 50) {
        console.log('average')
    } else if (speed <= 150) {
        console.log('fast')
    } else if (speed <= 1000) {
        console.log('ultra fast')
    } else if (speed > 1000) {
        console.log('extremely fast')
    }
}

//7. fugures area 

function findArea(input) {

    let figure = input[0]

    if (figure === 'square') {
        let side = Number(input[1])

        let area = side * side

        console.log(area)
    } else if (figure === 'rectangle') {
        let width = Number(input[1]);
        let heigth = Number(input[2]);

        let area = width * heigth

        console.log(area)
    } else if (figure === 'circle') {

        let radius = Number(input[1])

        let area = Math.PI * Math.pow(radius, 2)

        console.log(area)
    } else if (figure === 'triangle') {
        let side = Number(input[1])
        let height = Number(input[2])

        let area = (side * height) / 2

        console.log(area)
    }
}


// --------------------EXERCISE Tasks-------------------------

//1. sum seconds

function sumTheSeconds(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);

    let totalTime = a + b + c;


    // solution from the example
    // let min = Math.floor(totalTime/60);
    // let sec = totalTime % 60

    // if(sec < 10){
    //     console.log(`${min}:0${sec}`);
    // }else{
    //     console.log(`${min}:${sec}`);
    // }


    // moe reshenie    
    let min = 0;
    let sec = 0;

    if (totalTime >= 60) {
        totalTime -= 60;
        min++
    }

    if (totalTime >= 60) {
        totalTime -= 60
        min++
    }

    if (totalTime < 60) {
        sec = totalTime
    }

    if (sec < 10) {
        sec = '0' + totalTime
    }

    console.log(min + ':' + sec)
}

//2. bonus score

function findTheBonus(input) {

    let num = Number(input[0]);

    let bonusPoints = 0

    if (num > 1000) {
        bonusPoints += num * 0.1;
    } else if (num <= 100) {
        bonusPoints += 5;
    } else {
        bonusPoints += num * 0.2;
    }

    if (num % 2 === 0) {
        bonusPoints += 1;
    }

    if (num % 10 === 5) {
        bonusPoints += 2;
    }

    console.log(bonusPoints);
    console.log(bonusPoints + num);
}

//3. time + 15min

function calculateTimeAfter15min(input) {

    let hour = Number(input[0]) * 60;
    let min = Number(input[1]);

    let totalTime = hour + min + 15;

    let newHour = Math.floor(totalTime / 60)
    let newMin = totalTime % 60

    if (newHour > 23) {
        newHour = 0
    }

    if (newMin < 10) {
        console.log(`${newHour}:0${newMin}`)
    } else {
        console.log(`${newHour}:${newMin}`)
    }

}

//4. toy store

function enoughMoneyForVacantion(input) {

    let vacantionPrice = Number(input[0]);

    let puzzles = Number(input[1]);
    let talkingDoll = Number(input[2]);
    let teddyBear = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let numOfToys = puzzles + talkingDoll + teddyBear + minions + trucks
    let totalPrice = (puzzles * 2.60) + (talkingDoll * 3) + (teddyBear * 4.10) +
        (minions * 8.20) + (trucks * 2);

    if (numOfToys >= 50) {
        totalPrice -= (totalPrice * 0.25)
    }

    let rent = totalPrice * 0.10

    let finalPrice = totalPrice - rent

    if (finalPrice >= vacantionPrice) {
        console.log(`Yes! ${(finalPrice - vacantionPrice).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(vacantionPrice - finalPrice).toFixed(2)} lv needed.`)
    }

}

//5. godzilla vs kong

function enoughMoneyForMovie(input) {

    let budget = Number(input[0]);
    let numOfExtrasOnSet = Number(input[1]);
    let priceForOneExtrasClothes = Number(input[2]);

    let decors = budget * 0.1;
    let priceForExtrasClothes = numOfExtrasOnSet * priceForOneExtrasClothes;

    if (numOfExtrasOnSet > 150) {
        priceForExtrasClothes -= (priceForExtrasClothes * 0.1);

    }

    let moneyNeeded = decors + priceForExtrasClothes;

    if (moneyNeeded <= budget) {
        let moneyLeft = budget - moneyNeeded;
        console.log('Action!');
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`)
    } else {
        moneyLeft = moneyNeeded - budget
        console.log('Not enough money!')
        console.log(`Wingard needs ${moneyLeft.toFixed(2)} leva more.`)
    }


}

//6. world swimming record

function beatTheWorldRecord(input) {

    let worldRecordInSeconds = Number(input[0]);
    let distanceInMetres = Number(input[1]);
    let distanceOf1mInSeconds = Number(input[2]);

    let ivanTime = distanceInMetres * distanceOf1mInSeconds;

    let waterFrictionTimeDelay = Math.floor((distanceInMetres / 15)) * 12.5;

    let finalIvanTime = ivanTime + waterFrictionTimeDelay;

    if (finalIvanTime < worldRecordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${finalIvanTime.toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${(finalIvanTime - worldRecordInSeconds).toFixed(2)} seconds slower.`)
    }

}


//7. shopping

function priceForComputer(input) {

    let budget = Number(input[0]);
    let videocards = Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number(input[3]);

    let priceVideocards = videocards * 250
    let priceProcessors = priceVideocards * 0.35;
    let priceRam = priceVideocards * 0.1

    let totalPrice = priceVideocards + (priceProcessors * processors) + (priceRam * ram)

    if (videocards > processors) {
        totalPrice -= (totalPrice * 0.15)
    }

    if (totalPrice <= budget) {
        console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`)
    }
}

//8. lunch break

function lunchBreakTime(input) {

    let seriesTitle = input[0];
    let episodeDuration = Number(input[1]);
    let lunchBreakDuration = Number(input[2]);

    let lunchTime = lunchBreakDuration / 8;
    let restTime = lunchBreakDuration / 4;

    let timeLeftForSerie = lunchBreakDuration - lunchTime - restTime;

    if (timeLeftForSerie >= episodeDuration) {
        console.log(`You have enough time to watch ${seriesTitle} and left with ${Math.ceil(timeLeftForSerie - episodeDuration)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${seriesTitle}, you need ${Math.ceil(episodeDuration - timeLeftForSerie)} more minutes.`)
    }
}