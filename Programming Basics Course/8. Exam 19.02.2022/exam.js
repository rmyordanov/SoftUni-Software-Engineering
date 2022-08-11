//EXAM 19.02.2022 Javascript

//6.Sum And Product

function checkSumAndMult(input) {
    let n = Number(input[0]);

    let result = '';
    let found = false

    for (let a = 1; a <= 9; a++) {
        for (let b = 9; b >= a; b--) {
            for (let c = 0; c <= 9; c++) {
                for (let d = 9; d >= c; d--) {
                    let mult = a * b * c * d;
                    let add = a + b + c + d
                    let div = Math.floor(mult / add)
                    if ((add == mult) && n % 10 == 5) {
                        result = '' + a + b + c + d;
                        found = true
                        break;
                    } else if ((div == 3) && n % 3 == 0) {
                        result = '' + d + c + b + a
                        found = true
                        break;
                    }
                }
                if (found) {
                    break;
                }
            }
            if (found) {
                break;
            }
        }
        if (found) {
            break;
        }
    }

    if (result == '') {
        console.log('Nothing found')
    } else {
        console.log(result)
    }
}


//5. Hair Salon

function incomeGoal(input) {
    let moneyGoal = Number(input[0]);
    let index = 1
    let procedure = input[index];
    let moneyEarned = 0;

    while (procedure != 'close') {
        procedure = input[index]
        let type = input[++index];
        if (procedure == 'haircut') {

            if (type == 'mens') {
                moneyEarned += 15;
            } else if (type == 'ladies') {
                moneyEarned += 20
            } else if (type == 'kids') {
                moneyEarned += 10
            }
        } else if (procedure == 'color') {

            if (type == 'touch up') {
                moneyEarned += 20
            } else if (type == 'full color') {
                moneyEarned += 30
            }
        }

        if (moneyEarned >= moneyGoal) {
            console.log('You have reached your target for the day!');
            console.log(`Earned money: ${moneyEarned}lv.`)
            break;
        } else if (procedure == 'closed') {
            if (moneyEarned >= moneyGoal) {
                console.log('You have reached your target for the day!');
                console.log(`Earned money: ${moneyEarned}lv.`)
                break;
            } else {
                let diff = moneyGoal - moneyEarned
                console.log(`Target not reached! You need ${diff}lv. more.`)
                console.log(`Earned money: ${moneyEarned}lv.`)
                break;
            }

        }

        index++
    }
}

//4. computer firm

function ratePCsandSales(input) {
    let numOfPCs = Number(input[0]);

    let totalSales = 0
    let sumRating = 0


    for (let i = 1; i <= numOfPCs; i++) {
        let ratingAndSalesNum = input[i];
        let rating = Number(ratingAndSalesNum) % 10;
        let sales = Math.floor(Number(ratingAndSalesNum) / 10);

        if (rating == 2) {
            totalSales += 0
            sumRating += 2
        } else if (rating == 3) {
            sales = sales * 0.5
            totalSales += sales
            sumRating += 3
        } else if (rating == 4) {
            sales = sales * 0.7
            totalSales += sales
            sumRating += 4
        } else if (rating == 5) {
            sales = sales * 0.85
            totalSales += sales
            sumRating += 5
        } else if (rating == 6) {
            totalSales += sales
            sumRating += 6
        }



    }

    let avgRating = sumRating / numOfPCs

    console.log(totalSales.toFixed(2))
    console.log(avgRating.toFixed(2))
}

//3. final competition

function moneyFromCompForCharityAndForPlayers (input) {

    let numOfDancers = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let country = input[3];

    let moneyFromComp;

    if(country == 'Bulgaria'){
        moneyFromComp = numOfDancers * points
        if(season == 'summer'){
            moneyFromComp = moneyFromComp - (moneyFromComp * 0.05)
        }else if(season == 'winter'){
            moneyFromComp = moneyFromComp - (moneyFromComp * 0.08)
        }
    }else if(country == 'Abroad'){
        moneyFromComp = (numOfDancers * points) + ((numOfDancers*points)/2);

        if(season == 'summer'){
            moneyFromComp = moneyFromComp - (moneyFromComp * 0.1)
        }else if(season == 'winter'){
            moneyFromComp = moneyFromComp - (moneyFromComp * 0.15)
        }
    }

    let charityMoney = moneyFromComp * 0.75
    moneyFromComp = moneyFromComp - charityMoney

    let moneyPerDancer = moneyFromComp / numOfDancers

    console.log(`Charity - ${charityMoney.toFixed(2)}`)
    console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`)
      
}


//2. Maiden Party

function onlineShopEarnings (input) {

    let maidenPartyCost = Number(input[0]);
    let numOfLoveLetters = Number(input[1]);
    let numOfWaxRoses = Number(input[2]);
    let numOfKeyChains = Number(input[3]);
    let numOfColages = Number(input[4]);
    let numOfSurprices = Number(input[5]);

    let letters = numOfLoveLetters * 0.60
    let roses = numOfWaxRoses * 7.20
    let keys = numOfKeyChains * 3.60
    let colage = numOfColages * 18.2
    let surprice = numOfSurprices * 22

    let totalIncome = letters + roses + keys + colage + surprice
    let numOfStuff = numOfLoveLetters + numOfWaxRoses + numOfKeyChains + numOfColages + numOfSurprices

    if(numOfStuff >= 25){
        totalIncome = totalIncome - (totalIncome * 0.35)
    }

    totalIncome = totalIncome - (totalIncome * 0.1)

    let moneyLeft = totalIncome - maidenPartyCost

    if(moneyLeft >= 0){
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`)
    }else{
        console.log(`Not enough money! ${Math.abs(moneyLeft).toFixed(2)} lv needed.`)
    }

}

//1. chirstmas prep

function santaExpences(input) {
    let wrapPaper = Number(input[0]);
    let fabricRoll = Number(input[1]);
    let litresGlue = Number(input[2]);
    let percentDiscount = Number(input[3]) / 100;

    let pricePaper = wrapPaper * 5.8
    let fabric = fabricRoll * 7.2
    let glue = litresGlue * 1.2

    let total = pricePaper + fabric + glue

    let totalAfterDisc = total - (total * percentDiscount);

    console.log(totalAfterDisc.toFixed(3))

}