var n = new Date().getDay();

var loc = [['Matematika', 'Biologija', 'Fizizka', 'Srpski', 'Muzicko', 'Nemacki', 'Odeljenska'], ['Srpski', 'Fizicko', 'Matematika', 'Hemija', 'Istorija', 'Biologija'], ['Fizika', 'Engleski', 'Srpski', 'Hemija', 'Istorija', 'Fizicko'], ['Likovno', 'Geografija', 'Nemacki', 'Srpski', 'Matematika', 'Engleski'], ['Informatika', 'Matematika', 'TIT', 'TIT', 'Geografija', 'Fizicko']];
var lost = ['08:35', '09:10', '09:55', '10:30', '11:05', '11:40', '12:15']
var loet = ["09:05", "09:40", "10:25", "11:00", "11:35", "12:10", "12:45"]

function fillin(x:number) {
    if (x < 0 || x > 5) return;

    if (x != 1) togglevisible();
    
    for (let i = 0; i < loc[n-1].length; i++) {
        document.getElementById(`p${i+1}`).innerHTML = loc[n-1][i];
        document.getElementById(`a${i+1}`).innerHTML = lost[i];
        document.getElementById(`b${i+1}`).innerHTML = loet[i];
    }
}

function togglevisible() {
    let x:string = "";

    for (let i = 0; i < 3; i++) {
        console.log(i);

        switch (x) {
            case "":
                x = "a";
                break;
            case "a":
                x = "b";
                break;
            case "b":
                x = "p";
                break;
            default:
                break;
        }

        var element = document.getElementById(`${x}7`);
        if (element.style.display === "none") {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    }
}

fillin(n)

// getComputedStyle(document.documentElement)
//     .getPropertyValue('--my-variable-name');
// document.documentElement.style
//     .setProperty('--my-variable-name', 'pink');