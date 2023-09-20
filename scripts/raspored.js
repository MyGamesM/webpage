const d = new Date()
const today = d.getDay()

const verme_pocetak = ["08:00", "08:55", "10:00", "10:55", "11:50", "12:45", "13:35"];
const vreme_kraj = ["08:45", "09:40", "10:45", "11:40", "12:35", "13:30", "14:20"];
const raspored = [
    ["PiT", "PiT", "PiT", "Baze podataka", "Baze podataka", "Fizicko", "Srpski"],
    ["Matematika I", "Srpski", "Sociologija", "Engleski", "Matematika", "Matematika"],
    ["Fizicko", "Srpski", "RS", "RS", "Programiranje", "Programiranje", "Programiranje"],
    ["Matematika", "Sociologija", "Matematika I", "RS", "Engleski", "Gradjansko"],
    ["WP", "WP", "WP", "PiT", "PiT", "PiT"]
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
