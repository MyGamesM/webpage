let today = new Date().getDay();

const verme_pocetak = ["08:00", "08:55", "10:00", "10:55", "11:50", "12:45", "13:35"];
const vreme_kraj = ["08:45", "09:40", "10:45", "11:40", "12:35", "13:30", "14:20"];
const raspored = [
    ["Elektronika 1", "Elektronika 1", "OET 2", "Srpski", "Baze Podataka", "Baze Podataka"],
    ["Matematika", "Matematika", "OET 2", "Biologija", "Fizicko", "Engleski", "Gradjansko"],
    ["Programiranje", "Programiranje", "Baze Podataka", "Srpski", "Fizika", "OET 2"],
    ["Matematika", "Programiranje", "Elektronika 1", "Web dizain", "Web dizain", "Engleski"],
    ["OET 2", "Elektronika 1", "Srpski", "Programiranje", "Biologija", "Fizika", "Fizicko"]
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
	// if not mon-fri
	if (day > 4) {
		switch (day) {
			case 5:
				delete_raspored()
				document.getElementById("subota").style.display = "block"
				return
			case 6:
				day = today - 1
				break
			case 7:
				day = today
				break
			default:
				return
		}
	}

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