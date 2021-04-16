var n = new Date().getDay();
// getComputedStyle(document.documentElement)
//     .getPropertyValue('--my-variable-name');
// document.documentElement.style
//     .setProperty('--my-variable-name', 'pink');
var loc = [['Matematika', 'Biologija', 'Fizizka', 'Srpski', 'Muzicko', 'Nemacki', 'Odeljenska'], ['Srpski', 'Fizicko', 'Matematika', 'Hemija', 'Istorija', 'Biologija'], ['Fizika', 'Engleski', 'Srpski', 'Hemija', 'Istorija', 'Fizicko'], ['Likovno', 'Geografija', 'Nemacki', 'Srpski', 'Matematika', 'Engleski'], ['Informatika', 'Matematika', 'TIT', 'TIT', 'Geografija', 'Fizicko']];
var lost = ['08:35', '09:10', '09:55', '10:30', '11:05', '11:40', '12:15'];
var loet = ["09:05", "09:40", "10:25", "11:00", "11:35", "12:10", "12:45"];
fillin(n);
function fillin(x) {
    if (x > 0 && x < 6) {
        for (let i = 0; i < loc[n - 1].length; i++) {
            document.getElementById(`p${i + 1}`).innerHTML = loc[n - 1][i];
            document.getElementById(`a${i + 1}`).innerHTML = lost[i];
            document.getElementById(`b${i + 1}`).innerHTML = loet[i];
        }
    }
}
