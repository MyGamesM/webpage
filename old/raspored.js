var n = new Date().getDay();
//var loc = [['Matematika', 'Biologija', 'Fizizka', 'Srpski', 'Muzicko', 'Nemacki', 'Odeljenska'], ['Srpski', 'Fizicko', 'Matematika', 'Hemija', 'Istorija', 'Biologija'], ['Fizika', 'Engleski', 'Srpski', 'Hemija', 'Istorija', 'Fizicko'], ['Likovno', 'Geografija', 'Nemacki', 'Srpski', 'Matematika', 'Engleski'], ['Informatika', 'Matematika', 'TIT', 'TIT', 'Geografija', 'Fizicko']];
var loc = [
    ["Elektronika 1", "Elektronika 1", "OET 2", "Srpski", "Baze Podataka", "Baze Podataka"],
    ["Matematika", "Fizika", "Fizicko", "OET 2", "Biologija", "Engleski", "Gradjansko"],
    ["Programiranje", "Programiranje", "Baze Podataka", "Srpski", "Matematika", "OET 2"],
    ["Elektronika 1", "Fizicko", "Programiranje", "Web dizain", "Web dizain", "Engleski"],
    ["OET 2", "Matematika", "Elektronika 1", "Srpski", "Programiranje", "Fizika", "Biologija"]
];
var lost = ["08:00", "08:55", "10:00", "10:55", "11:50", "12:45", "13:35"];
var loet = ["08:45", "09:40", "10:45", "11:40", "12:35", "13:30", "14:20"];
function fillin(x, classes) {
    togglevisible(x, classes);
    if (x < 1 || x > 5)
        return;
    for (let i = 0; i < loc[x - 1].length; i++) {
        document.getElementById(`p${i + 1}`).innerHTML = loc[x - 1][i];
        document.getElementById(`a${i + 1}`).innerHTML = lost[i];
        document.getElementById(`b${i + 1}`).innerHTML = loet[i];
    }
}
function togglevisible(a, b) {
    var element = "";
    // za neradne dane
    if (a == 0 || a == 6) {
        element = document.getElementById("ne");
        if (element.style.display === "none")
            element.style.display = "block";
        // show all
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 7; j++) {
                element = document.getElementById(`a${j + 1}`);
                if (element.style.display !== "none")
                    element.style.display = "none";
                element = document.getElementById(`b${j + 1}`);
                if (element.style.display !== "none")
                    element.style.display = "none";
                element = document.getElementById(`p${j + 1}`);
                if (element.style.display !== "none")
                    element.style.display = "none";
            }
        }
    }
    else if (a > 0 && a < 6) {
        element = document.getElementById("ne");
        if (element.style.display !== "none")
            element.style.display = "none";
        // hide all
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 7; j++) {
                element = document.getElementById(`a${j + 1}`);
                if (element.style.display === "none")
                    element.style.display = "block";
                element = document.getElementById(`b${j + 1}`);
                if (element.style.display === "none")
                    element.style.display = "block";
                element = document.getElementById(`p${j + 1}`);
                if (element.style.display === "none")
                    element.style.display = "block";
            }
        }
    }
    // hide 7 class
    if (b[a - 1] != undefined) {
        if (b[a - 1].length < 7) {
            element = document.getElementById("a7");
            element.style.display = "none";
            element = document.getElementById("b7");
            element.style.display = "none";
            element = document.getElementById("p7");
            element.style.display = "none";
        }
        else {
            element = document.getElementById("a7");
            element.style.display = "block";
            element = document.getElementById("b7");
            element.style.display = "block";
            element = document.getElementById("p7");
            element.style.display = "block";
        }
    }
}
function day(day) {
    if (day == 7)
        day = new Date().getDay();
    if (day == 8) {
        if (new Date().getDay() == 5)
            day = 1;
        else
            day = new Date().getDay() + 1;
    }
    fillin(day, loc);
}
fillin(n, loc);
// getComputedStyle(document.documentElement)
//     .getPropertyValue('--my-variable-name');
// document.documentElement.style
//     .setProperty('--my-variable-name', 'blue');
