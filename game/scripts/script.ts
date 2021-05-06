var count = 0;
function fillGrid(gridsize: number, grid: string) {
    let parent = document.getElementById(grid)
    if (count == 1) { // if grid exists
        count = 0
        for (let i = 0; i < gridsize; i++) { //if grid exitsts clear grid
            let element = document.getElementById(`btn${i}`)
            element.remove()
        }
        for (let i = 0; i < gridsize; i++) { //then fill grid
            let element = document.createElement("button")
            element.setAttribute("id", `btn${i}`)
            element.setAttribute("class", "btn")
            element.setAttribute("onclick", `game.money.sellItem(game.items.bread, ${i})`)
            element.innerHTML = "x"
            parent.appendChild(element)
        }
    } else { // if grid does not exist
        for (let i = 0; i < gridsize; i++) { // fill grid
            let element = document.createElement("button")
            element.setAttribute("id", `btn${i}`)
            element.setAttribute("class", "btn")
            element.setAttribute("onclick", `game.money.sellItem(game.items.bread, ${i})`)
            element.innerHTML = "x"
            parent.appendChild(element)
        }
    }
    count++;
}

function sleep(ms: number) {
    return new Promise(
        resolve => setTimeout(resolve, ms * 1000)
    );
}

function y() { console.log(`Bread: ${game.money.coins} | Coins: ${game.items.bread.ininv}`) }

type updateSelf = () => {}

let game = {
    items: {
        bread: {
            cost: 1,
            worth: 2,
            ininv: 1,
            updateSelf: function () {
                let element = document.getElementById("breadInv")
                element.innerHTML = `${this.ininv} bread`
            }
        }
    },

    money: {
        coins: 0,
        updateSelf: function () {
            let element = document.getElementById("money")
            element.innerHTML = `${this.coins} coins`
        },
        sellItem: async function (item: { worth: number; ininv: number; }, id: string) {
            if (item.ininv > 0) {
                item.ininv -= 1
                let element = document.getElementById(`btn${id}`)
                let img = document.createElement("img")
                img.setAttribute("src", "../../images/bread_1080px.png")
                img.setAttribute("class", "btnimg")
                element.innerHTML = ""
                element.appendChild(img)
                await sleep(1.5)
                element.removeChild(element.firstChild)
                element.innerHTML = "x"
                this.coins += item.worth
                this.updateSelf()
                game.items.bread.updateSelf()

            }
        },
        buyItem: function (item: { cost: number, ininv: number, updateSelf:  updateSelf}) {
            if (this.coins > 0) {
                this.coins -= item.cost
                item.ininv++
                item.updateSelf()
                this.updateSelf()
            }
        }
    }
}

// async function sell(id: string) {}

function onLoad() {
    game.money.updateSelf()
    game.items.bread.updateSelf()
    fillGrid(16, 'maingrid')
}