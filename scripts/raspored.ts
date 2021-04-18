var n = new Date().getDay();

var loc = [['Matematika', 'Biologija', 'Fizizka', 'Srpski', 'Muzicko', 'Nemacki', 'Odeljenska'], ['Srpski', 'Fizicko', 'Matematika', 'Hemija', 'Istorija', 'Biologija'], ['Fizika', 'Engleski', 'Srpski', 'Hemija', 'Istorija', 'Fizicko'], ['Likovno', 'Geografija', 'Nemacki', 'Srpski', 'Matematika', 'Engleski'], ['Informatika', 'Matematika', 'TIT', 'TIT', 'Geografija', 'Fizicko']];
var lost = ['08:35', '09:10', '09:55', '10:30', '11:05', '11:40', '12:15']
var loet = ["09:05", "09:40", "10:25", "11:00", "11:35", "12:10", "12:45"]

function fillin(x:number) {
    togglevisible(x);

    if (x < 1 || x > 6) return;
    
    for (let i = 0; i < loc[n-1].length; i++) {
        document.getElementById(`p${i+1}`).innerHTML = loc[n-1][i];
        document.getElementById(`a${i+1}`).innerHTML = lost[i];
        document.getElementById(`b${i+1}`).innerHTML = loet[i];
    }
}

function togglevisible(a:number) {
    let x:string = "";

    if (a != 0 && a != 6) {
        var element = document.getElementById("ne");
        if (element.style.display === "none") element.style.display = "block";
        else element.style.display = "none";
    }

    if (a == 0 || a == 6) {
        for (let i = 0; i < 3; i++) {
            switch (x) {
                case "":
                    x = "a";
                    break;
                case "a":
                    x = "b";
                    break;
                case x = "b":
                    x = "p";
                    break
                default:
                    break;
            }
            
            for (let j = 0; j < 7; j++) {
                var element = document.getElementById(`${x}${j+1}`);
                if (element.style.display === "none") element.style.display = "block";
                else element.style.display = "none";
            }
        }
    }

    if (a == 0 || a == 6) return
    if (a != 1) {
        for (let i = 0; i < 3; i++) {
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
            if (element.style.display === "none") element.style.display = "block";
            else element.style.display = "none";
        }
    }
}

fillin(n)

// getComputedStyle(document.documentElement)
//     .getPropertyValue('--my-variable-name');
// document.documentElement.style
//     .setProperty('--my-variable-name', 'pink');