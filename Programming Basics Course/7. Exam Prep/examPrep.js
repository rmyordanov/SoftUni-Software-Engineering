//Programming Basics Online Exam - 6 and 7 April 2019

//1. Oscars ceremony

function exprencesForTheOscarsEvent(input) {

    let rent = Number(input[0]);

    let oscars = rent - (rent * 0.3);
    let catering = oscars - (oscars * 0.15);
    let sound = catering / 2;

    let totalExpence = rent + oscars + catering + sound

    console.log(totalExpence.toFixed(2));
}

//2. Godzilla vs Kong

function calculateBudget(input) {
    let budget = Number(input[0]);
    let numOfExtras = Number(input[1]);
    let priceForClothesPerExtra = Number(input[2]);

    let decorPrice = budget * 0.1
    let clothesPrice = numOfExtras * priceForClothesPerExtra

    if (numOfExtras > 150) {
        clothesPrice -= clothesPrice * 0.1
    }

    let totalExpences = decorPrice + clothesPrice;
    let moneyLeft = budget - totalExpences

    if (moneyLeft < 0) {
        console.log('Not enough money!')
        console.log(`Wingard needs ${Math.abs(moneyLeft).toFixed(2)} leva more.`)
    } else if (moneyLeft >= 0) {
        console.log('Action!')
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`)
    }

}

//3. Oscars week in cinema

function calcMoneyPerMovie(input) {

    let nameOfMovie = input[0];
    let typeOfRoom = input[1];
    let numOfSoldTickets = Number(input[2]);

    let income;

    if (nameOfMovie === 'A Star Is Born') {

        if (typeOfRoom === 'normal') {
            income = numOfSoldTickets * 7.5
        } else if (typeOfRoom === 'luxury') {
            income = numOfSoldTickets * 10.5
        } else if (typeOfRoom === 'ultra luxury') {
            income = numOfSoldTickets * 13.5
        }
    } else if (nameOfMovie === 'Bohemian Rhapsody') {
        if (typeOfRoom === 'normal') {
            income = numOfSoldTickets * 7.35
        } else if (typeOfRoom === 'luxury') {
            income = numOfSoldTickets * 9.45
        } else if (typeOfRoom === 'ultra luxury') {
            income = numOfSoldTickets * 12.75
        }
    } else if (nameOfMovie === 'Green Book') {
        if (typeOfRoom === 'normal') {
            income = numOfSoldTickets * 8.15
        } else if (typeOfRoom === 'luxury') {
            income = numOfSoldTickets * 10.25
        } else if (typeOfRoom === 'ultra luxury') {
            income = numOfSoldTickets * 13.25
        }
    } else if (nameOfMovie === 'The Favourite') {
        if (typeOfRoom === 'normal') {
            income = numOfSoldTickets * 8.75
        } else if (typeOfRoom === 'luxury') {
            income = numOfSoldTickets * 11.55
        } else if (typeOfRoom === 'ultra luxury') {
            income = numOfSoldTickets * 13.95
        }
    }

    console.log(`${nameOfMovie} -> ${income.toFixed(2)} lv.`)

}

//4. Cinema Voucher

function whatYourVaucherCanBuy(input) {

    let vaucherValue = Number(input[0]);
    let thingToBuy = input[1];

    let index = 1

    let numOfTickets = 0;
    let numOfThings = 0

    while (thingToBuy != 'End') {
        thingToBuy = input[index];

        if (thingToBuy.length > 8) {
            let moviePrice = thingToBuy.charCodeAt(0) + thingToBuy.charCodeAt(1);
            if (moviePrice <= vaucherValue) {
                vaucherValue -= moviePrice;
                numOfTickets++
            } else {
                break;
            }

        } else if (thingToBuy.length <= 8) {
            let thingPrice = thingToBuy.charCodeAt(0)
            if (thingPrice <= vaucherValue) {
                vaucherValue -= thingPrice;
                numOfThings++
            } else {
                break;
            }
        }

        index++
        thingToBuy = input[index]


    }

    console.log(numOfTickets)
    console.log(numOfThings)

}

//5.Movie Ratings

function showTheMovieRatings(input) {

    let numOfMovies = Number(input[0]);

    let highestRating = Number.MIN_SAFE_INTEGER
    let lowestRating = Number.MAX_SAFE_INTEGER

    let movieName;
    let rating;

    let highestMovieName;
    let lowestRatingMovieName;

    let sumOfRating = 0

    for (let i = 0; i < (numOfMovies * 2); i += 2) {
        movieName = input[i + 1]
        rating = Number(input[i + 2])

        if (rating > highestRating) {
            highestMovieName = movieName
            highestRating = rating
        } else if (rating < lowestRating) {
            lowestRatingMovieName = movieName
            lowestRating = rating
        }

        sumOfRating += rating
    }

    let avgRating = sumOfRating / numOfMovies

    console.log(`${highestMovieName} is with highest rating: ${highestRating.toFixed(1)}`)
    console.log(`${lowestRatingMovieName} is with lowest rating: ${lowestRating.toFixed(1)}`)
    console.log(`Average rating: ${avgRating.toFixed(1)}`)

}

//6. Cinema Tickets

function calcPercentOfSoldTicketsInEachCategory(input) {
    let nameOfMovie = input[0]

    let allStudentTickets = 0
    let allStandardTickets = 0
    let allKidsTickets = 0

    let finish = false

    let index = 1

    while (nameOfMovie != 'Finish') {

        freeSeats = Number(input[index])

        let studentTickets = 0
        let standardTickets = 0
        let kidsTickets = 0

        for (let i = 0; i < Number(freeSeats); i++) {
            let typeOfTicket = input[index + 1]

            if (typeOfTicket === 'student') {
                studentTickets++
                allStudentTickets++
                index++
            } else if (typeOfTicket === 'standard') {
                standardTickets++
                allStandardTickets++
                index++
            } else if (typeOfTicket === 'kid') {
                kidsTickets++
                allKidsTickets++
                index++
            } else if (typeOfTicket === 'End') {
                index++
                break;
            }
        }

        let cinemaOcuup = ((studentTickets + standardTickets + kidsTickets) / freeSeats) * 100
        console.log(`${nameOfMovie} - ${cinemaOcuup.toFixed(2)}% full.`)


        nameOfMovie = input[++index]
        index++

        if (nameOfMovie === 'Finish') {
            finish = true
        }

    }


    if (finish) {
        let totalTickets = allStudentTickets + allStandardTickets + allKidsTickets
        let studentP1 = (allStudentTickets / totalTickets) * 100
        let standardP1 = (allStandardTickets / totalTickets) * 100
        let kidsP1 = (allKidsTickets / totalTickets) * 100
        console.log(`Total tickets: ${totalTickets}`)
        console.log(`${studentP1.toFixed(2)}% student tickets.`)
        console.log(`${standardP1.toFixed(2)}% standard tickets.`)
        console.log(`${kidsP1.toFixed(2)}% kids tickets.`)
    }

}




//Programming Basics Online Exam - 15 and 16 June 2019

//1.Series Calculator

function timeNeededToWatchTheWholeSerial(input) {

    let SeriesName = input[0];
    let seasons = Number(input[1]);
    let episodsInOneSeason = Number(input[2]);
    let durationOfAnEpisodeWithoutAds = Number(input[3]);

    let adsTime = durationOfAnEpisodeWithoutAds * 0.2
    let lastEpisodesDuration = seasons * 10

    let totalTimeWithAds = durationOfAnEpisodeWithoutAds + adsTime

    let totalTimeNeeded = totalTimeWithAds * episodsInOneSeason * seasons + lastEpisodesDuration

    console.log(`Total time needed to watch the ${SeriesName} series is ${Math.floor(totalTimeNeeded)} minutes.`)


}

//1.Movie Profit

function profitFromMovie(input) {

    let movieName = input[0];
    let daysInCinema = Number(input[1]);
    let numOfTickets = Number(input[2]);
    let priceOfTcket = Number(input[3]);
    let percentForMovieTheather = Number(input[4]);

    let moneyFromTickets = numOfTickets * priceOfTcket
    let revenueFromMovie = daysInCinema * moneyFromTickets
    let totalProfit = revenueFromMovie - (revenueFromMovie * (percentForMovieTheather / 100))

    console.log(`The profit from the movie ${movieName} is ${totalProfit.toFixed(2)} lv.`)
}


//2. Movie Day

function calcTheMovieDayDuration(input) {

    let shootingTimeToFinishTheMovie = Number(input[0]);
    let numOfScince = Number(input[1]);
    let durationOfOneSciene = Number(input[2]);

    let prepTime = shootingTimeToFinishTheMovie * 0.15
    let timeForScences = numOfScince * durationOfOneSciene
    let timeNeeded = prepTime + timeForScences

    let diff = shootingTimeToFinishTheMovie - timeNeeded

    if (diff >= 0) {
        console.log(`You managed to finish the movie on time! You have ${Math.round(diff)} minutes left!`)
    } else {
        console.log(`Time is up! To complete the movie you need ${Math.round(Math.abs(diff))} minutes.`)
    }


}

//3. Film Premiere

function calcThePriceOfTheMoviePackage(input) {

    let movieName = input[0];
    let treats = input[1];
    let numOfTickets = Number(input[2]);

    let billIs;

    if (movieName === 'John Wick') {
        if (treats === 'Drink') {
            billIs = numOfTickets * 12
        } else if (treats === 'Popcorn') {
            billIs = numOfTickets * 15
        } else if (treats === 'Menu') {
            billIs = numOfTickets * 19
        }
    } else if (movieName === 'Star Wars') {
        if (treats === 'Drink') {
            billIs = numOfTickets * 18
        } else if (treats === 'Popcorn') {
            billIs = numOfTickets * 25
        } else if (treats === 'Menu') {
            billIs = numOfTickets * 30
        }

        if (numOfTickets >= 4) {
            billIs -= (billIs * 0.3)
        }
    } else if (movieName === 'Jumanji') {
        if (treats === 'Drink') {
            billIs = numOfTickets * 9
        } else if (treats === 'Popcorn') {
            billIs = numOfTickets * 11
        } else if (treats === 'Menu') {
            billIs = numOfTickets * 14
        }

        if (numOfTickets == 2) {
            billIs -= (billIs * 0.15)
        }
    }

    console.log(`Your bill is ${billIs.toFixed(2)} leva.`)
}

//3.Movie Destination

function calcMovieCost(input) {
    let movieBudgetIs = Number(input[0]);
    let destinationCountry = input[1];
    let seasonOfTheYear = input[2];
    let numOfDays = Number(input[3]);

    let costPerDestination;



    if (destinationCountry === 'London') {

        if (seasonOfTheYear === 'Winter') {
            costPerDestination = numOfDays * 24000
        } else if (seasonOfTheYear === 'Summer') {
            costPerDestination = numOfDays * 20250
        }

    } else if (destinationCountry === 'Dubai') {

        if (seasonOfTheYear === 'Winter') {
            costPerDestination = numOfDays * 45000
        } else if (seasonOfTheYear === 'Summer') {
            costPerDestination = numOfDays * 40000
        }

        costPerDestination -= (costPerDestination * 0.3)
    } else if (destinationCountry === 'Sofia') {

        if (seasonOfTheYear === 'Winter') {
            costPerDestination = numOfDays * 17000
        } else if (seasonOfTheYear === 'Summer') {
            costPerDestination = numOfDays * 12500
        }

        costPerDestination += (costPerDestination * 0.25)
    }

    let diff = movieBudgetIs - costPerDestination

    if (diff >= 0) {
        console.log(`The budget for the movie is enough! We have ${diff.toFixed(2)} leva left!`)
    } else {
        console.log(`The director needs ${Math.abs(diff).toFixed(2)} leva more!`)
    }
}


//4. Cinema

function cinemaTheatherOccupationAndProfit(input) {

    let numOfSeats = Number(input[0])

    let index = 1

    let numOfPeople = input[index]

    let allPeople = 0
    let money = 0

    while (numOfPeople != 'Movie time!') {

        allPeople += Number(numOfPeople)

        if (allPeople > numOfSeats && allPeople != numOfSeats) {
            console.log(`The cinema is full.`)
            console.log(`Cinema income - ${money} lv.`)
            break;
        } else if (allPeople == numOfSeats && allPeople > numOfSeats) {
            if (numOfPeople % 3 === 0) {
                money += (Number(numOfPeople) * 5) - 5
                break;
            } else {
                money += Number(numOfPeople) * 5
                break;
            }
        }

        if (numOfPeople % 3 === 0) {
            money += (Number(numOfPeople) * 5) - 5
            index++
        } else {
            money += Number(numOfPeople) * 5
            index++
        }


        numOfPeople = input[index]


        if (numOfPeople == 'Movie time!') {
            let seats = numOfSeats - allPeople
            console.log(`There are ${seats} seats left in the cinema.`)
            console.log(`Cinema income - ${money} lv.`)
            break;
        }
    }

}

//4. Movie Stars

function actorsSalaries(input) {
    let budgetForActorsSalaries = Number(input[0]);

    let index = 1

    let actorOrSalarie = input[index]

    while (actorOrSalarie != "ACTION") {

        actorOrSalarie = input[index]

        if (Number(actorOrSalarie)) {
            budgetForActorsSalaries -= Number(actorOrSalarie)
            if (budgetForActorsSalaries < 0) {
                console.log(`We need ${Math.abs(budgetForActorsSalaries).toFixed(2)} leva for our actors.`);
                break;
            }
            index++
        } else if (actorOrSalarie) {
            if (actorOrSalarie.length > 15) {
                budgetForActorsSalaries -= (budgetForActorsSalaries * 0.2)
                index++
            } else {
                index++
            }

        }

        if (actorOrSalarie == 'ACTION' && budgetForActorsSalaries >= 0) {
            console.log(`We are left with ${budgetForActorsSalaries.toFixed(2)} leva.`)
        }
    }

}

//5. Series

function canWeBuyThatSerial(input) {
    let budget = Number(input[0])
    let numOfSerials = Number(input[1])

    for (let i = 0; i < numOfSerials * 2; i++) {
        let seriesName = input[i + 2]
        let priceForSerie = input[i + 3]

        if (seriesName == 'Thrones') {
            priceForSerie = Number(priceForSerie) - (Number(priceForSerie) * 0.5)
            budget -= Number(priceForSerie)
            i++
        } else if (seriesName == 'Lucifer') {
            priceForSerie = Number(priceForSerie) - (Number(priceForSerie) * 0.4)
            budget -= Number(priceForSerie)
            i++
        } else if (seriesName == 'Protector') {
            priceForSerie = Number(priceForSerie) - (Number(priceForSerie) * 0.3)
            budget -= Number(priceForSerie)
            i++
        } else if (seriesName == 'TotalDrama') {
            priceForSerie = Number(priceForSerie) - (Number(priceForSerie) * 0.2)
            budget -= Number(priceForSerie)
            i++
        } else if (seriesName == 'Area') {
            priceForSerie = Number(priceForSerie) - (Number(priceForSerie) * 0.1)
            budget -= Number(priceForSerie)
            i++
        } else {
            budget -= Number(priceForSerie)
            i++
        }
    }

    if (budget >= 0) {
        console.log(`You bought all the series and left with ${budget.toFixed(2)} lv.`)
    } else {
        console.log(`You need ${Math.abs(budget).toFixed(2)} lv. more to buy the series!`)
    }
}

//5. Oscars

function scoresForOscar(input) {
    let actorName = input[0]
    let academyPoints = Number(input[1])
    let numOfJourey = Number(input[2])

    let totalPoints = academyPoints

    for (let i = 0; i < numOfJourey * 2; i++) {
        let joureyName = input[i + 3]
        let joureyPoints = input[i + 4]

        let pointsFromJourey = (joureyName.length * Number(joureyPoints)) / 2
        totalPoints += pointsFromJourey
        if (totalPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`)
            break;
        }
        i++
    }

    if (totalPoints < 1250.5) {
        console.log(`Sorry, ${actorName} you need ${(1250.5-totalPoints).toFixed(1)} more!`)
    }
}


//6. Favorite Movie

function movieToWatch(input) {

    let highestScore = Number.MIN_SAFE_INTEGER
    let movie = ''
    let counter = 0

    for (let i = 0; i < 7; i++) {

        let nameMovie = input[i]
        let movieTitleLenght = nameMovie.length
        let sum = 0

        if (nameMovie == 'STOP') {
            console.log(`The best movie for you is ${movie} with ${highestScore} ASCII sum.`)
            break;
        }


        for (let j = 0; j < movieTitleLenght; j++) {
            if (nameMovie.charCodeAt(j) > 64 && nameMovie.charCodeAt(j) < 91) {
                let capital = nameMovie.charCodeAt(j) - movieTitleLenght
                sum += capital
            } else if (nameMovie.charCodeAt(j) > 96 && nameMovie.charCodeAt(j) < 123) {
                let small = nameMovie.charCodeAt(j) - (movieTitleLenght * 2)
                sum += small
            } else {
                sum += nameMovie.charCodeAt(j)
            }

        }

        if (sum > highestScore) {
            highestScore = sum
            movie = nameMovie
        }

        counter++
    }

    if (counter >= 7) {
        console.log(`The limit is reached.`)
        console.log(`The best movie for you is ${movie} with ${highestScore} ASCII sum.`)
    }
}


//6. Movie Tickets

function generateMovieTicketNumber(input) {
    let a1 = input[0];
    let a2 = input[1];
    let n = Number(input[2]);

    let intervalForFirstLetter = (Number(a2) - 1) - Number(a1);
    let intervalForSecondLetter = (n - 1)
    let intervalForThirdLetter = Math.floor((n / 2)) - 1

    let ticketNum = ''

    let found = true

    for (let symbol1 = 0; symbol1 <= intervalForFirstLetter; symbol1++) {
        let asciiSym = Number(a1)
        found = true


        for (let symbol2 = 0; symbol2 < intervalForSecondLetter; symbol2++) {
            let b = symbol2 + 1

            for (let symbol3 = 0; symbol3 < intervalForThirdLetter; symbol3++) {
                let c = symbol3 + 1
                let sumOfSym2and3and4 = b + c + asciiSym

                if (asciiSym % 2 != 0 && sumOfSym2and3and4 % 2 != 0) {
                    ticketNum = String.fromCharCode(asciiSym) + '-' + b + c + asciiSym
                    console.log(ticketNum)
                } else if (asciiSym % 2 == 0) {
                    found = false
                    break
                }
            }

            if (!found) {
                break;
            }
        }
        a1++
    }


}



// Programming Basics Online Exam - 20 and 21 April 2019

//6. Easter Decoration

function calcBillOfClient(input) {
    let numOfClients = Number(input[0]);

    let moneyFromClients = 0
    let income = 0
    let index = 1

    for (let i = 0; i < numOfClients; i++) {
        let pickedProduct = input[index]

        let numOfProductsPerClient = 0
        let billPerCLient = 0



        while (pickedProduct != 'Finish') {
            pickedProduct = input[index]
            if (pickedProduct === 'basket') {
                billPerCLient += 1.50
                numOfProductsPerClient++
                index++
            } else if (pickedProduct === 'wreath') {
                billPerCLient += 3.80
                numOfProductsPerClient++
                index++
            } else if (pickedProduct === 'chocolate bunny') {
                billPerCLient += 7
                numOfProductsPerClient++
                index++
            } else if (pickedProduct == 'Finish') {
                if (numOfProductsPerClient % 2 === 0) {
                    billPerCLient -= (billPerCLient * 0.2)
                }
                console.log(`You purchased ${numOfProductsPerClient} items for ${billPerCLient.toFixed(2)} leva.`)
                index++
                // break;
            }
            moneyFromClients = billPerCLient

        }
        income += moneyFromClients

    }


    let averageMoney = income / numOfClients

    console.log(`Average bill per client is: ${averageMoney.toFixed(2)} leva.`)

}


//5. Easter Bake

function calcHowManyPackgsOfFlowerAndSugarWeNeed(input) {
    let numOfEasterBreads = Number(input[0]);

    let maxSugar = Number.MIN_SAFE_INTEGER
    let maxFlour = Number.MIN_SAFE_INTEGER

    let sugarTotal = 0
    let flowerTotal = 0

    for (let i = 0; i < numOfEasterBreads * 2; i += 2) {
        let sugarPerBread = Number(input[i + 1])
        let flowerPerBread = Number(input[i + 2])

        if (sugarPerBread > maxSugar) {
            maxSugar = sugarPerBread
        }

        if (flowerPerBread > maxFlour) {
            maxFlour = flowerPerBread
        }

        sugarTotal += sugarPerBread
        flowerTotal += flowerPerBread

    }

    let packagesOfSugar = Math.ceil(sugarTotal / 950)
    let packagesOfFlower = Math.ceil(flowerTotal / 750)

    console.log(`Sugar: ${packagesOfSugar}`)
    console.log(`Flour: ${packagesOfFlower}`)
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`)

}

//4. Easter Shop

function numOfEggsSold(input) {

    let stockOfEggs = Number(input[0])

    let index = 1

    let buyOrFill = input[index]
    let orderedEggs = input[index + 1]

    let eggsLeft = stockOfEggs

    let soldEggs = 0

    while (orderedEggs != 'Close' || orderedEggs > eggsLeft) {
        if (buyOrFill == 'Buy' && orderedEggs <= eggsLeft) {
            eggsLeft -= Number(orderedEggs)
            soldEggs += Number(orderedEggs)
        } else if (buyOrFill == 'Fill') {
            eggsLeft += Number(orderedEggs)
        } else if (orderedEggs > eggsLeft) {
            console.log('Not enough eggs in store!')
            console.log(`You can buy only ${eggsLeft}.`)
            break;
        } else if (buyOrFill == 'Close') {
            console.log('Store is closed!')
            console.log(`${soldEggs} eggs sold.`)
            break;
        }
        index++
        buyOrFill = input[++index]
        orderedEggs = input[index + 1]
    }
}


//4. Easter Eggs Battle

function eggFight(input) {
    let playerOneNumOfEggs = Number(input[0]);
    let playerTwoNumOfEggs = Number(input[1]);

    let index = 2
    let comand = input[index]

    while (comand != 'End of battle') {
        comand = input[index]
        if (comand == 'one') {
            playerTwoNumOfEggs--
            index++
            if (playerTwoNumOfEggs == 0) {
                console.log(`Player two is out of eggs. Player one has ${playerOneNumOfEggs} eggs left.`);
                break;
            }
        } else if (comand == 'two') {
            playerOneNumOfEggs--
            index++
            if (playerOneNumOfEggs == 0) {
                console.log(`Player one is out of eggs. Player two has ${playerTwoNumOfEggs} eggs left.`);
                break;
            }
        } else if (comand == 'End of battle') {
            console.log(`Player one has ${playerOneNumOfEggs} eggs left.`)
            console.log(`Player two has ${playerTwoNumOfEggs} eggs left.`)
            break;
        }
    }
}

//3. Painting Eggs

function earningFromEggs(input) {

    let eggsSize = input[0]
    let eggsColor = input[1]
    let numOfBathches = Number(input[2])

    let moneyEarned;

    if (eggsSize === 'Large') {
        if (eggsColor === 'Red') {
            moneyEarned = numOfBathches * 16
        } else if (eggsColor === 'Green') {
            moneyEarned = numOfBathches * 12
        } else if (eggsColor === 'Yellow') {
            moneyEarned = numOfBathches * 9
        }
    } else if (eggsSize === 'Medium') {
        if (eggsColor === 'Red') {
            moneyEarned = numOfBathches * 13
        } else if (eggsColor === 'Green') {
            moneyEarned = numOfBathches * 9
        } else if (eggsColor === 'Yellow') {
            moneyEarned = numOfBathches * 7
        }
    } else if (eggsSize === 'Small') {
        if (eggsColor === 'Red') {
            moneyEarned = numOfBathches * 9
        } else if (eggsColor === 'Green') {
            moneyEarned = numOfBathches * 8
        } else if (eggsColor === 'Yellow') {
            moneyEarned = numOfBathches * 5
        }
    }

    let totalIncomeAfterExpences = moneyEarned - (moneyEarned * 0.35)

    console.log(`${totalIncomeAfterExpences.toFixed(2)} leva.`)
}

//2. Easter Guests

function howManyBreadsAndEggsForGuests(input) {
    let numOfGuests = Number(input[0])
    let luboBudget = Number(input[1])

    let eggsNeeded = numOfGuests * 2
    let moneyForEggs = eggsNeeded * 0.45

    let breadsNeeded = Math.ceil(numOfGuests / 3)
    let moneyForBreads = breadsNeeded * 4

    let totalBill = moneyForEggs + moneyForBreads

    let diff = luboBudget - totalBill

    if (diff >= 0) {
        console.log(`Lyubo bought ${breadsNeeded} Easter bread and ${eggsNeeded} eggs.`)
        console.log(`He has ${diff.toFixed(2)} lv. left.`)
    } else {
        console.log("Lyubo doesn't have enough money.")
        console.log(`He needs ${Math.abs(diff).toFixed(2)} lv. more.`)
    }


}

//1. Easter Bakery

function productExpences(input) {
    let flourPrice = Number(input[0])
    let kgOfFlour = Number(input[1])
    let kgOfSugar = Number(input[2])
    let numOfDozenEggs = Number(input[3])
    let packgesYeast = Number(input[4])

    let sugarPrice = flourPrice - (flourPrice * 0.25)
    let dozenEggsPrice = flourPrice * 1.1
    let yeastPrice = sugarPrice - (sugarPrice * 0.8)

    let flourBill = kgOfFlour * flourPrice
    let sugarBill = kgOfSugar * sugarPrice
    let eggsBill = numOfDozenEggs * dozenEggsPrice
    let yeastBill = packgesYeast * yeastPrice

    let bill = flourBill + sugarBill + eggsBill + yeastBill

    console.log(bill.toFixed(2))
}



//Programming Basics Online Exam - 18 and 19 July 2020

//6. Barcode Generator

function generateNumbersWithoutEvenNums(input) {

    let begin = input[0];
    let stop = input[1];
    let result = ''

    for (let one = Number(begin[0]); one <= Number(stop[0]); one++) {
        for (let two = Number(begin[1]); two <= Number(stop[1]); two++) {
            for (let three = Number(begin[2]); three <= Number(stop[2]); three++) {
                for (let four = Number(begin[3]); four <= Number(stop[3]); four++) {
                    if (one % 2 != 0 && two % 2 != 0 && three % 2 != 0 && four % 2 != 0) {
                        result += '' + one + two + three + four + ' '
                    }
                }
            }
        }
    }
    console.log(result)
}


//5.Best Player

function highestScorePlayer(input) {
    let index = 0
    let player = input[index]
    let goals = input[index + 1]

    let maxGoals = Number.MIN_SAFE_INTEGER
    let bestPlayer;
    let hatTrick = false

    while (player != 'END') {

        goals = Number(input[index + 1])
        if (goals > maxGoals) {
            if (goals >= 3) {
                hatTrick = true
            }
            maxGoals = goals
            bestPlayer = player

        }

        if (goals >= 10) {
            console.log(`${bestPlayer} is the best player!`)
            if (hatTrick) {
                console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`)
            } else {
                console.log(`He has scored ${maxGoals} goals.`)
            }
            break;
        }
        index++
        player = input[++index]

        if (player == 'END') {
            console.log(`${bestPlayer} is the best player!`)
            if (hatTrick) {
                console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`)
            } else {
                console.log(`He has scored ${maxGoals} goals.`)
            }
            break;
        }
    }
}

//4. Balls

function ballsPoints(input) {
    let numOfBalls = Number(input[0]);

    let red = 0;
    let orange = 0;
    let white = 0;
    let yellow = 0;
    let black = 0;

    let otherColors = 0;

    let totalPoints = 0;

    for (let i = 1; i <= numOfBalls; i++) {
        let ballColor = input[i];

        if (ballColor == 'red') {
            totalPoints += 5;
            red++;
        } else if (ballColor == 'orange') {
            totalPoints += 10;
            orange++;
        } else if (ballColor == 'yellow') {
            totalPoints += 15;
            yellow++;
        } else if (ballColor == 'white') {
            totalPoints += 20;
            white++;
        } else if (ballColor == 'black') {
            totalPoints = Math.floor(totalPoints / 2);
            black++;
        } else {
            otherColors++
        }

    }

    console.log(`Total points: ${totalPoints}`)
    console.log(`Red balls: ${red}`)
    console.log(`Orange balls: ${orange}`)
    console.log(`Yellow balls: ${yellow}`)
    console.log(`White balls: ${white}`)
    console.log(`Other colors picked: ${otherColors}`)
    console.log(`Divides from black balls: ${black}`)

}