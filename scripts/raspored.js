const d = new Date()
const today = d.getDay()
let time = [480, 535, 600, 655, 710, 765, 815]
let ctime = d.getHours() * 60 + d.getMinutes()
const verme_pocetak = ["08:00", "08:55", "10:00", "10:55", "11:50", "12:45", "13:35"];
const vreme_kraj = ["08:45", "09:40", "10:45", "11:40", "12:35", "13:30", "14:20"];
const raspored = [
    ["Elektronika 1", "Elektronika 1", "OET 2", "Srpski", "Baze Podataka", "Baze Podataka", "Gradjansko"],
    ["Matematika", "Matematika", "OET 2", "Fizicko", "Biologija", "Engleski"],
    ["Programiranje", "Programiranje", "Elektronika 1", "OET 2", "Srpski", "Fizika"],
    ["Matematika", "Elektronika 1", "Programiranje", "Web dizain", "Web dizain", "Engleski"],
    ["Baze Podataka", "OET 2", "Srpski", "Programiranje", "Biologija", "Fizika", "Fizicko"]
]

// const data = {
// 	"verme_pocetak": ["08:00", "08:55", "10:00", "10:55", "11:50", "12:45", "13:35"],
// 	"vreme_kraj": ["08:45", "09:40", "10:45", "11:40", "12:35", "13:30", "14:20"],
// 	"raspored": [
// 	    ["Elektronika 1", "Elektronika 1", "OET 2", "Srpski", "Baze Podataka", "Baze Podataka"],
// 	    ["Matematika", "Matematika", "OET 2", "Biologija", "Fizicko", "Engleski", "Gradjansko"],
// 	    ["Programiranje", "Programiranje", "Baze Podataka", "Srpski", "Fizika", "OET 2"],
// 	    ["Matematika", "Programiranje", "Elektronika 1", "Web dizain", "Web dizain", "Engleski"],
// 		["OET 2", "Elektronika 1", "Srpski", "Programiranje", "Biologija", "Fizika", "Fizicko"]
// 	]
// }

function main () {
	update_raspored(today - 1)
	init_button()
}

function init_button() {
	const btns = document.getElementById("buttons")
	Array.from(btns.children).forEach((a, b) => {
		a.onclick = () => {
			update_raspored(b)
		}
	})
}

function delete_raspored() {
	const tbody = document.getElementById("tbody")

	Array.from(tbody.children).forEach((a) => {
		a.remove()
	})
}

function update_raspored(day) {
	// if not mon-fri
	// console.log(`day: ${day}`);
	// console.log(`today: ${today}`);
	switch (day) {
		case -1:
			day = 5
		case 5:
			delete_raspored()
			document.getElementById("subota").style.display = "block"
			break
		case 6:
			if (today == 7 || today == 6) day = 5
			else day = today - 1
			update_raspored(day)
			break
		case 7:
			if (today == 7) day = 0
			else day = today
			update_raspored(day)
			break
		default:
			break
	}

	if (day < 0 || day > 4) return

	document.getElementById("subota").style.display = "none"
	delete_raspored()

	raspored[day].forEach((a, b) => {
		let elm = document.createElement("tr")
		
		elm.innerHTML += `
			<td>${verme_pocetak[b]}</td>
			<td>${a}</td>
			<td>${vreme_kraj[b]}</td>
			`

		tbody.appendChild(elm)
	})

	if (ctime > 815 || ctime <= 480) return

	// sledeci cas red
	let sc = document.createElement("tr")
	sc.innerHTML = `
		<td></td>
		<td>Sledeci cas</td>
		<td></td>
	`
	tbody.appendChild(sc)

	// sledeci cas
	let elm = document.createElement("tr")
	let t = getCurrentTime()
	elm.innerHTML += `
		<td>${verme_pocetak[t - 1]}</td>
		<td>${raspored[day][t]}</td>
		<td>${vreme_kraj[t - 1]}</td>
		`

	tbody.appendChild(elm)
}

function getCurrentTime() {
	let currentTime

	time.forEach((a, b) => {
		if (a <= ctime) {
			currentTime = b + 1
			console.log(a, ctime, a <= ctime, currentTime)
			return
		}
	})

	return currentTime
}

main()
