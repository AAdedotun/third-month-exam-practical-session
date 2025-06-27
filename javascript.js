// Third Month Exam Practical Session

// Practical Session 1


function checkGrade(score) {
    if (score >= 70) {
        return "A";
    } else if (score >= 60 && score <= 69) {
        return "B";
    } else if (score >= 50 && score <= 59) {
        return "C";
    } else if (score < 50) {
        return "F";
    }
}

// Example Usage
console.log(checkGrade(79)); // It will output: A
console.log(checkGrade(67)); // It will output: B
console.log(checkGrade(53)); // It will output: C
console.log(checkGrade(42)); // It will output: F




// Practical Session 2


function login(username, password) {
    if (username === "admin" && password === "1234") {
        console.log("Login successful");
    } else {
        console.log("Invalid username pr password.")
    }
}

// Example Usage
login("admin", "1234"); // It console: Login successful since passowrd is same
login("adedotun", "8726"); // It will console: Invalid username or password since, login details arent the same
login("admin", "129989894893"); //  It will console: Invalid username or password since login details arent the same.



// Practical Session 3

function convertToFarenheit(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

// EXample Usage
console.log(convertToFarenheit(0)); // It will console 32 as output
console.log(convertToFarenheit(53)); // It will console 127.4 as output
console.log(convertToFarenheit(-37)); // It will console 34.59 as output





// Practical Session 4


function canVote(age) {
    if (age >= 18) {
        console.log("You can vote.");
    } else {
        console.log("You cannot vote yet.")
    }
}

// Example Usage

canVote(37); // It will output: "You can vote."
canVote(18); // It will output: "You can vote."
canVote(9); // It will output: "You cannot vote yet."





// Practical Session 5

function temperatureStatus(temp) {
    if (temp < 0) {
        console.log("Freezing");
    } else if (temp >= 0 && temp <= 15) {
        console.log("Cold");
    } else if (temp >= 16 && temp <= 25) {
        console.log("Cool");
    } else {
        console.log("Warm");
    }
}

// Example Usage

temperatureStatus(-7); // It will output: Freezing
temperatureStatus(12); // It will output: Cold
temperatureStatus(22); // It will output: Cool
temperatureStatus(35); // It will output: Warm