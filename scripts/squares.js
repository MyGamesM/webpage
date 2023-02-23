const main = document.getElementById('squares')

function createTable() {
    for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
            main.appendChild(createRow(i, j))
		}
    }
}

function createRow(i, j) {
    const element = document.createElement('div')
    let color = i + j;

	if (color >= 9) { color = invert(color - 9, 7); }
	
	element.className = `square c${color}`
    
	return element
}

function invert(a, p) {
	let res = p - a

	if (res < 0) { return res }
	else { return res }
}

createTable()