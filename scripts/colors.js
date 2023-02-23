const parent = document.getElementById("squares")

function createSquares() {
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; i++) {
			let element = document.createElement('div')

			element.classList.add("c")

			parent.appendChild(element)
		}
	}
}
createSquares()
