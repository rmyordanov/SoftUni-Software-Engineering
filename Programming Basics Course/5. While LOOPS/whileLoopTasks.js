// -------------------------------------TASKS FROM LECTURE----------------------------------------

//1. read words until "stop"

function printUntilStop(input) {

    let index = 0
    let word = input[index];

    while (word !== 'Stop') {
        console.log(word)
        index++
        word = input[index]
    }
}

//2. password

function checkPassword(input) {

    let userName = input[0];
    let pass = input[1];
    let index = 2;
    let enterPass = input[index]

    while (enterPass !== pass) {
        enterPass = input[index];
        index++
    }

    console.log(`Welcome ${userName}!`)
}

//3. print until sum = to first number

function printUntilSumEqualToFristNum(input) {

    let firstNum = Number(input[0]);
    let sum = 0;
    let index = 1;
    let nextNum = Number([input[index]])

    while (sum < firstNum) {
        nextNum = Number(input[index])
        sum += nextNum
        index++
    }

    console.log(sum)
}

//4. 2k + 1

function printNumsInSequence2k(input) {

    let n = Number(input[0])

    let index = 0;
    let currentNum = index

    while (currentNum < n) {
        nextNum = (2 * currentNum) + 1
        currentNum = nextNum
        index++
        if (nextNum <= n) {
            console.log(nextNum)
        }

    }
}

//5. account balance

function addMoneyToYourAccount(input) {


    let index = 0;
    let account = 0;
    let money = input[0];


    while (money !== 'NoMoreMoney') {

        money = input[index];

        if (money === 'NoMoreMoney') {
            break;
        }
        if (money <= 0) {
            console.log('Invalid operation!');
            break;
        }

        account += Number(money)
        index++

        console.log(`Increase: ${Number(money).toFixed(2)}`)

    }

    console.log(`Total: ${account.toFixed(2)}`)
}

//6. max number

function findBiggestNum(input) {

    let index = 0;
    let currentNum = input[index]
    let maxNum = Number.MIN_SAFE_INTEGER;

    while (currentNum !== 'Stop') {

        if (Number(currentNum) > Number(maxNum)) {
            maxNum = currentNum
        }
        currentNum = input[index]
        index++


    }

    console.log(maxNum)
}

//7. min number

function findMinNum(input) {
    let index = 0;
    let currentNum = input[index]
    let minNum = Number.MAX_SAFE_INTEGER;

    while (currentNum !== 'Stop') {

        if (Number(currentNum) < Number(minNum)) {
            minNum = currentNum
        }
        currentNum = input[index]
        index++


    }

    console.log(minNum)

}

//8. Graduation

function averageGPA(input) {

    let name = input[0]
    let index = 1;
    let grades = Number(input[index])
    let grade = 0
    let fail = 0
    let sum = 0

    while (true) {
        grades = input[index]

        if (grades >= 4) {
            sum += Number(grades)
            grade++
        } else {
            if (fail === 0) {
                grade++
            }

            fail++
        }

        if (fail > 1) {
            console.log(`${name} has been excluded at ${grade} grade`)
            break;
        } else if (grade === 12) {
            let gpa = (sum / 12).toFixed(2)
            console.log(`${name} graduated. Average grade: ${gpa}`)
            break;
        }

        index++


    }
}

// ------------------------------TASKS FROM EXCERSICE-------------------------------------

//1. old library

function findBook(input) {

    let theBook = input[0];
    let index = 1;

    let currentBook = input[index];
    let numOfBooks = 0;

    while (currentBook !== 'No More Books') {
        currentBook = input[index];
        index++

        if (currentBook === theBook) {
            console.log(`You checked ${numOfBooks} books and found it.`)
            break;
        } else if (currentBook === 'No More Books') {
            console.log(`The book you search is not here!`);
            console.log(`You checked ${numOfBooks} books.`);
            break;
        }
        numOfBooks++
    }
}

//2.Exam Preparation

function solvingMathProblems(input) {

    let disapointingGrade = Number(input[0]);

    let index = 1;
    let problemNameAndGrade = input[index];
    let numOfPoorGrades = 0;

    let numOfProblems = 0;
    let sum = 0;

    let currentProblem = ''

    while (problemNameAndGrade !== 'Enough') {
        problemNameAndGrade = input[index];
        index++;

        if (Number(problemNameAndGrade) <= 4) {
            numOfPoorGrades++
        }

        if (Number(problemNameAndGrade)) {
            sum += Number(problemNameAndGrade)

        } else if (problemNameAndGrade !== 'Enough') {
            numOfProblems++
            currentProblem = problemNameAndGrade;
        }

        if (numOfPoorGrades === disapointingGrade) {
            console.log(`You need a break, ${numOfPoorGrades} poor grades.`)
            break;

        } else if (problemNameAndGrade === 'Enough') {
            let averageScore = sum / numOfProblems
            console.log(`Average score: ${averageScore.toFixed(2)}`)
            console.log(`Number of problems: ${numOfProblems}`)
            console.log(`Last problem: ${currentProblem}`)
            break;
        }


    }
}


//3. Vacantion

function savingMoney(input) {

    let vacationPrice = Number(input[0]);
    let savedMoney = Number(input[1]);
    let spendingDays = 0;
    let days = 0;
    let index = 2;

    let action = input[index]

    while (true) {
        action = input[index];

        if (action === 'spend') {
            ++index;
            savedMoney -= Number(input[index]);
            if (savedMoney < 0) {
                savedMoney = 0;
            }
            spendingDays++;
            days++
        } else if (action === 'save') {
            ++index
            savedMoney += Number(input[index]);
            days++
            spendingDays = 0
        }

        if (savedMoney >= vacationPrice) {
            console.log(`You saved the money for ${days} days.`)
            break;
        } else if (spendingDays === 5) {
            console.log(`You can't save the money.`)
            console.log(`${days}`)
            break;
        }

        index++

    }
}


//4. walking

function steps(input) {

    let index = 0;
    let walkedSteps = input[index];
    let goal = 10000;
    let total = 0;

    while (walkedSteps !== 'undefined') {
        walkedSteps = input[index];

        if (Number(walkedSteps)) {
            total += Number(walkedSteps);

            if (total >= 10000) {
                let steps = total - goal;
                console.log(`Goal reached! Good job!`);
                console.log(`${steps} steps over the goal!`);
                break;
            }

        } else if (walkedSteps === 'Going home') {
            ++index;
            walkedSteps = Number(input[index]);
            total += Number(walkedSteps);

            if (total >= 10000) {
                let steps = total - goal;
                console.log(`Goal reached! Good job!`);
                console.log(`${steps} steps over the goal!`);
                break;
            } else if (total < 10000) {
                let steps = goal - total;
                console.log(`${steps} more steps to reach goal.`);
                break;
            }
        }

        index++;
    }
}


//5. coins

function numOfCoinsInChange(input) {

    let change = Math.floor(Number(input[0]) * 100);
    let coins = 0

    while (change !== 0) {

        if (change >= 200) {
            change -= 200;
            coins++;
        }
        if (change >= 100 && change < 200) {
            change -= 100;
            coins++;
        }
        if (change >= 50 && change < 100) {
            change -= 50;
            coins++;
        }
        if (change >= 20 && change < 50) {
            change -= 20;
            coins++;
        }
        if (change >= 10 && change < 20) {
            change -= 10;
            coins++;
        }
        if (change >= 5 && change < 10) {
            change -= 5;
            coins++;
        }
        if (change >= 2 && change < 5) {
            change -= 2;
            coins++;
        }
        if (change === 1) {
            change -= 1;
            coins++;
        }
    }

    console.log(coins);
}

//6. cake

function cakePieces(input) {

    let height = Number(input[0]);
    let length = Number(input[1]);
    let numOfPieces = height * length;

    let index = 2;
    let piecesForGuest = input[index];

    while (numOfPieces > 0) {
        piecesForGuest = input[index];

        if (Number(piecesForGuest)) {
            numOfPieces -= piecesForGuest;
        }
        if (piecesForGuest === 'STOP' && numOfPieces > 0) {
            console.log(`${numOfPieces} pieces are left.`)
            break;
        }
        if (numOfPieces <= 0) {
            console.log(`No more cake left! You need ${Math.abs(numOfPieces)} pieces more.`);
            break;
        }

        index++

    }
}

//7. moving

function movingOut(input) {

    let height = Number(input[0]);
    let length = Number(input[1]);
    let width = Number(input[2])
    let freeSpace = height * length * width;

    let index = 3;
    let boxes = input[index];

    while (freeSpace > 0) {
        boxes = input[index];

        if (Number(boxes)) {
            freeSpace -= boxes;
        }
        if (boxes === 'Done' && freeSpace > 0) {
            console.log(`${freeSpace} Cubic meters left.`)
            break;
        }
        if (freeSpace <= 0) {
            console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
            break;
        }

        index++

    }
}
