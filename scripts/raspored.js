const d = new Date()
const today = d.getDay()

const verme_pocetak = ["08:00", "08:55", "10:00", "10:55", "11:50", "12:45", "13:35"];
const vreme_kraj = ["08:45", "09:40", "10:45", "11:40", "12:35", "13:30", "14:20"];
const raspored = [
    ["Elektronika 1", "Elektronika 1", "OET 2", "Srpski", "Baze Podataka", "Baze Podataka", "Gradjansko"],
    ["Matematika", "Matematika", "OET 2", "Fizika", "Fizicko", "Engleski", "Biologija"],
    ["Programiranje", "Programiranje", "Srpski", "OET 2", "Biologija", "Fizika"],
    ["Matematika", "Elektronika 1", "Programiranje", "Web dizain", "Web dizain", "Engleski"],
    ["Baze Podataka", "OET 2", "Srpski", "Programiranje", "Elektronika 1", "Fizicko"]
]

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
}

main()
