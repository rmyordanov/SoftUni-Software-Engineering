// ------------------------------TASKS FROM LECTURE------------------------------

//1. clock

function clock() {

    for (let hour = 0; hour < 24; hour++) {
        for (let min = 0; min < 60; min++) {
            console.log(`${hour}:${min}`)
        }
    }
}

//2. multiplication table

function miltiplicationTable() {

    for (let firstNum = 1; firstNum <= 10; firstNum++) {
        for (let secondNum = 1; secondNum <= 10; secondNum++) {
            console.log(`${firstNum} * ${secondNum} = ${firstNum*secondNum}`)
        }
    }
}

//3. Combinations

function combinations(input) {

    let answer = Number(input[0]);
    let combintaionsCounter = 0;

    for (let x1 = 0; x1 <= answer; x1++) {
        for (let x2 = 0; x2 <= answer; x2++) {
            for (let x3 = 0; x3 <= answer; x3++) {
                let result = x1 + x2 + x3
                if (result === answer) {
                    combintaionsCounter++
                }
            }
        }
    }

    console.log(combintaionsCounter)
}

//4. Sum of two numbers

function findSumOfTwoNumbers(input) {

    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let magicNum = Number(input[2]);

    let numOfCombinations = 0;
    let foundIt = false;

    let result;

    for (let firstNum = startNum; firstNum <= endNum; firstNum++) {
        for (let secondNum = startNum; secondNum <= endNum; secondNum++) {
            result = firstNum + secondNum;

            if (result === magicNum) {
                numOfCombinations++
                console.log(`Combination N:${numOfCombinations} (${firstNum} + ${secondNum} = ${result})`);
                foundIt = true
                break;
            } else {
                numOfCombinations++
            }
        }

        if (foundIt) {
            break;
        }
    }

    if (!foundIt) {
        console.log(`${numOfCombinations} combinations - neither equals ${magicNum}`)
    }

}


//5. Traveling

function visitCities(input) {


    let city = input[0];
    let budjet = Number(input[1]);
    let index = 2;



    let saving = 0

    while (city !== 'End') {
        let money = input[index]
        if (Number(money)) {
            saving += Number(input[index])

        } else {
            city = input[index]
            budjet = input[index + 1];
            saving = 0
            index++
        }

        if (saving >= budjet) {
            console.log(`Going to ${city}!`)
        }
        index++
    }
}

//6. building

function apartmentsAndOffceLabels(input) {

    let floors = Number(input[0]);
    let numOfOffOrAppOnTheFloor = Number(input[1]);

    let label = ''

    let result = ''
    let currentFloor = ''

    for (let floor = floors; floor > 0; floor--) {
        for (let apps = 0; apps < numOfOffOrAppOnTheFloor; apps++) {

            if (floor >= floors) {
                label = 'L'
                currentFloor += label + floor + apps + ' '
                result = currentFloor

            } else if (floor % 2 === 0) {

                label = 'O'
                currentFloor += label + floor + apps + ' '
                result = currentFloor

            } else {
                label = 'A'
                currentFloor += label + floor + apps + ' '
                result = currentFloor


            }


        }
        currentFloor = ''
        console.log(result.trim())

    }



}



// ---------------------TASKS FROM EXCERSISE---------------------------------

//1. number pyramid

function printNumberPyramid(input) {

    let num = Number(input[0]);

    let finsihIt = false;
    let nums = '';
    let current = 1;

    for (let row = 1; row <= num; row++) {
        for (let col = 1; col <= row; col++) {

            nums += current + ' '
            current++

            if (current > num) {
                finsihIt = true
                break;
            }

        }

        console.log(nums);
        nums = '';

        if (finsihIt) {
            break;
        }
    }
}

//2. Equal Sums Even Odd Position

function printNumEqualSumsOnOddandEvenPosition(input) {

    let first = input[0]
    let second = input[1];

    let evenSumCurrent = 0;
    let oddSumCurrent = 0;

    let result = ''

    for (let i = Number(first); i <= Number(second); i++) {

        let first = i.toString()

        for (let one = 0; one < 6; one++) {

            if (Number(one) % 2 === 0) {
                evenSumCurrent += Number(first[one]);
            } else {
                oddSumCurrent += Number(first[one])
            }
        }

        if (evenSumCurrent == oddSumCurrent) {
            result += i + ' '
        }

        evenSumCurrent = 0;
        oddSumCurrent = 0;

    }

    console.log(result)
}

//3. Sum Prime Non Prime

function printPrimeAndNonPrimeSum(input) {
    let array = input;

    let primeSum = 0;
    let nonPrimeSum = 0;

    let stop = false
    let prime = true

    for (let i = 0; i < array.length; i++) {

        let num = array[i]

        if (array[i] === 'stop') {
            stop = true;
            break;
        }

        for (let a = 2; a < Number(num); a++) {

            if (Number(num) >= 0) {

                if (Number(num) % a === 0) {
                    nonPrimeSum += Number(array[i]);
                    prime = false
                    break;
                }


            }

        }


        if (stop) {
            break;
        }

        if (Number(array[i]) < 0) {
            console.log('Number is negative.')
        }

        if (prime && Number(array[i]) > 0) {
            primeSum += Number(array[i]);
        }

        prime = true;
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`)
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`)
}

//4. Train The Trainers

function presentationAssesment(input) {

    let array = input
    let jourey = Number(input[0]);

    let allGrades = 0
    let finish = false

    let sumAllGrades = 0

    for (let i = 1; i < array.length; i++) {
        let subject = array[i];
        let grades = 0

        if (subject === 'Finish') {
            finish = true
            break;
        }

        let currentGrade = 0;
        let sumGradesCurrent = 0;

        for (let j = 0; j < jourey; j++) {
            currentGrade += Number(array[i + 1]);
            sumGradesCurrent += currentGrade;
            allGrades++
            grades++
            i++
        }

        let avgGradePerProject = (currentGrade / grades).toFixed(2)
        grades = 0
        sumAllGrades += currentGrade

        console.log(`${subject} - ${avgGradePerProject}.`)

    }
    let avgGradeFromAllProjects = sumAllGrades / allGrades;

    if (finish) {
        console.log(`Student's final assessment is ${avgGradeFromAllProjects.toFixed(2)}.`)
    }

}


//5. Special Numbers

function printAllSpecialNumbers(input) {

    let num = Number(input[0]);
    let result = ''


    // This code was now excepted by the Judge System, but it's working

    // for (let a = 1; a <= num; a++) {
    //     for (let b = 1; b <= num; b++) {
    //         for (let c = 1; c <= num; c++) {
    //             for (let d = 1; d <= num; d++) {
    //                 if (num % a === 0 && num % b === 0 && num % c === 0 && num % d === 0) {
    //                     let num = '' + a + b + c + d + ' '
    //                     if(num.length == 5){
    //                         result += num
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }

    let currentNum = ''

    for (let special = 1111; special < 10000; special++) {
        let current = special.toString()


        for (let i = 0; i < current.length; i++) {
            let digit = current[i]

            if (num % Number(digit) === 0) {
                currentNum += digit
            } else {
                currentNum = ''
            }
        }
        if (currentNum.length === 4) {
            result += currentNum + ' '
        }

        currentNum = ''

    }

    console.log(result)
}


//6. Cinema Tickets


//This was not accepted by the Judge System, but its working

// function cinemaTickets(input) {

//     let array = input;

//     let finish = false;
//     let end = false;

//     let student = 0
//     let standard = 0;
//     let kid = 0;
//     let totalTickets = 0;

//     let totalStudent = 0
//     let totalStandard = 0
//     let totalKid = 0

//     for (let i = 0; i < array.length; i++) {

//         let movie = array[i];
//         let seats = array[i + 1];

//         let typeOfTicket = array[i + 2]

//         let cinemaRoomOccup
//         let totalTicketsPerMovie

//         let index = i + 2;

//         while (typeOfTicket !== 'End') {

//             if (typeOfTicket === 'student') {
//                 student++
//             } else if (typeOfTicket === 'standard') {
//                 standard++
//             } else if (typeOfTicket === 'kid') {
//                 kid++
//             } else if (typeOfTicket === 'Finish') {
//                 finish = true;
//                 break;
//             }


//             index++
//             typeOfTicket = array[index]
//             i++
//         }

//         i+=2

//         totalTicketsPerMovie = student + standard + kid
//         cinemaRoomOccup = (totalTicketsPerMovie / seats) * 100

//         console.log(`${movie} - ${cinemaRoomOccup.toFixed(2)}% full.`)

//         totalTickets += totalTicketsPerMovie

//         totalStudent += student
//         totalStandard += standard
//         totalKid += kid

//         student = 0
//         standard = 0;
//         kid = 0;

//         if (finish) {
//             break;
//         }

//     }



//     let studentTicketsPercent = (totalStudent / totalTickets) * 100
//     let standardTicketsPercent = (totalStandard / totalTickets) * 100
//     let kidTicketsPercent = (totalKid / totalTickets) * 100

//     if (finish) {
//         console.log(`Total tickets: ${totalTickets}`)
//         console.log(`${studentTicketsPercent.toFixed(2)}% student tickets.`)
//         console.log(`${standardTicketsPercent.toFixed(2)}% standard tickets.`)
//         console.log(`${kidTicketsPercent.toFixed(2)}% kids tickets.`)
//     }

// }


function movieWatch(input) {

    let movie = input[0];

    let index = 1;

    let totalStudentTickets = 0;
    let totalStandardTickets = 0;
    let totalKidsTickets = 0;

    let finish = false

    while (movie !== 'Finish') {

        let seats = input[index];
        let totalSeatsTaken = 0;

        for (i = 0; i < Number(seats); i++) {
            let ticketType = input[index + 1]

            if (ticketType === 'student') {
                totalStudentTickets++
                totalSeatsTaken++
                index++
            } else if (ticketType === 'standard') {
                totalStandardTickets++
                totalSeatsTaken++
                index++
            } else if (ticketType === 'kid') {
                totalKidsTickets++
                totalSeatsTaken++
                index++
            } else if (ticketType === 'End') {
                index++;
                break;
            }



        }
        let occupation = (totalSeatsTaken / seats) * 100

        console.log(`${movie} - ${occupation.toFixed(2)}% full.`)

        movie = input[++index]
        index++

        if (movie === 'Finish') {
            finish = true
        }


    }

    let totalSeatsSold = totalStudentTickets + totalStandardTickets + totalKidsTickets;

    let studetP1 = (totalStudentTickets / totalSeatsSold) * 100
    let standardP1 = (totalStandardTickets / totalSeatsSold) * 100
    let kidsP1 = (totalKidsTickets / totalSeatsSold) * 100

    if (finish) {
        console.log(`Total tickets: ${totalSeatsSold}`)
        console.log(`${studetP1.toFixed(2)}% student tickets.`)
        console.log(`${standardP1.toFixed(2)}% standard tickets.`)
        console.log(`${kidsP1.toFixed(2)}% kids tickets.`)
    }


}