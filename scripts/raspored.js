var n = new Date().getDay();
var loc = [['Matematika', 'Biologija', 'Fizizka', 'Srpski', 'Muzicko', 'Nemacki', 'Odeljenska'], ['Srpski', 'Fizicko', 'Matematika', 'Hemija', 'Istorija', 'Biologija'], ['Fizika', 'Engleski', 'Srpski', 'Hemija', 'Istorija', 'Fizicko'], ['Likovno', 'Geografija', 'Nemacki', 'Srpski', 'Matematika', 'Engleski'], ['Informatika', 'Matematika', 'TIT', 'TIT', 'Geografija', 'Fizicko']];
var lost = ['08:35', '09:10', '09:55', '10:30', '11:05', '11:40', '12:15'];
var loet = ["09:05", "09:40", "10:25", "11:00", "11:35", "12:10", "12:45"];
function fillin(x, classes, timestart, timeend) {
    togglevisible(x);
    if (x < 1 || x > 5)
        return;
    for (let i = 0; i < loc[x - 1].length; i++) {
        document.getElementById(`p${i + 1}`).innerHTML = loc[x - 1][i];
        document.getElementById(`a${i + 1}`).innerHTML = lost[i];
        document.getElementById(`b${i + 1}`).innerHTML = loet[i];
    }
}
function togglevisible(a) {
    let x = "";
    var element = "";
    if (a == 0 || a == 6) {
        element = document.getElementById("ne");
        if (element.style.display === "none")
            element.style.display = "block";
    }
    else if (a > 0 && a < 6) {
        element = document.getElementById("ne");
        if (element.style.display !== "none")
            element.style.display = "none";
    }
    if (a != 1) {
        element = document.getElementById("a7");
        if (element.style.display !== "none")
            element.style.display = "none";
        element = document.getElementById("b7");
        if (element.style.display !== "none")
            element.style.display = "none";
        element = document.getElementById("p7");
        if (element.style.display !== "none")
            element.style.display = "none";
    }
    else if (a == 1) {
        element = document.getElementById("a7");
        if (element.style.display === "none")
            element.style.display = "block";
        element = document.getElementById("b7");
        if (element.style.display === "none")
            element.style.display = "block";
        element = document.getElementById("p7");
        if (element.style.display === "none")
            element.style.display = "block";
    }
    if (a == 0 || a == 6) {
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
        let y;
        if (a == 1)
            y = 7;
        else
            y = 6;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < y; j++) {
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
}
function day(day) {
    if (day == 7)
        day = new Date().getDay();
    fillin(day, loc, lost, loet);
}
fillin(n, loc, lost, loet);
// getComputedStyle(document.documentElement)
//     .getPropertyValue('--my-variable-name');
// document.documentElement.style
//     .setProperty('--my-variable-name', 'pink');
